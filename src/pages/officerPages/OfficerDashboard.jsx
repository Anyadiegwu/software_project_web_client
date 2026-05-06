import React, { useState, useEffect } from "react";
import styles from "./OfficerDashboard.module.css";
import useDateTime from "../../hooks/useDateTime";
import ReportDetailOverlay from "./ReportDetailOverlay";

/* ══════════════════════════════════════════
   GEOLOCATION HOOK
   Reverse-geocodes the device's current position using the
   free OpenStreetMap Nominatim API (no API key required).
══════════════════════════════════════════ */
function useCurrentLocation() {
  const [location, setLocation] = useState("Locating…");

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation("Location unavailable");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`,
            { headers: { "Accept-Language": "en" } }
          );
          const data = await res.json();

          // Build a short, readable label: neighbourhood/suburb + city, or city + country
          const a = data.address || {};
          const area =
            a.neighbourhood ||
            a.suburb ||
            a.quarter ||
            a.village ||
            a.town ||
            a.city_district ||
            "";
          const city =
            a.city || a.town || a.municipality || a.county || "";

          if (area && city) {
            setLocation(`${area}, ${city}`);
          } else if (city) {
            setLocation(city);
          } else if (data.display_name) {
            // Fallback: first two segments of the full display name
            setLocation(data.display_name.split(",").slice(0, 2).join(",").trim());
          } else {
            setLocation("Unknown location");
          }
        } catch {
          setLocation("Location unavailable");
        }
      },
      () => {
        // User denied permission or timed out
        setLocation("Location unavailable");
      },
      { timeout: 8000, maximumAge: 60_000 }
    );
  }, []);

  return location;
}

/* ══════════════════════════════════════════
   HELPERS
══════════════════════════════════════════ */
const priorityClass = (p, styles) => ({
  HIGH:   styles.tagHigh,
  MEDIUM: styles.tagMedium,
  LOW:    styles.tagLow,
}[p] || styles.tagMedium);

const statusClass = (s, styles) => ({
  ACTIVE:      styles.statusActive,
  URGENT:      styles.statusUrgent,
  ASSIGNED:    styles.statusAssigned,
  IN_PROGRESS: styles.statusActive,
  RESOLVED:    styles.statusResolved,
  PENDING:     styles.statusPending,
  NEW:         styles.statusNew,
}[s] || styles.statusNew);

const avatarColors = ["#3b82f6", "#f59e0b", "#10b981", "#8b5cf6", "#ef4444"];
const getColor = (char) => avatarColors[(char || "A").charCodeAt(0) % avatarColors.length];

const getInitials = (officer) => {
  if (!officer) return "?";
  if (officer.initials) return officer.initials;
  const name = officer.name || officer.fullName || "";
  const parts = name.trim().split(" ");
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  if (parts[0]) return parts[0][0].toUpperCase();
  return "?";
};

const getFirstName = (officer) => {
  if (!officer) return "Officer";
  if (officer.firstName) return officer.firstName;
  const name = officer.name || officer.fullName || "";
  return name.trim().split(" ")[0] || "Officer";
};

const getDotColor = (effectiveStatus, priority) => {
  const s = (effectiveStatus || "").toLowerCase();
  const p = (priority || "").toUpperCase();
  if (s === "urgent" || p === "HIGH") return "#ef4444";
  if (s === "resolved") return "#10b981";
  if (s === "in_progress" || s === "active") return "#3b82f6";
  if (s === "pending") return "#f59e0b";
  return "#3b82f6";
};

const BASE_URL = "http://localhost:5000/api";

/* ══════════════════════════════════════════
   NOTIFICATION PANEL
══════════════════════════════════════════ */
function NotificationPanel({ notifications, unreadCount, onMarkRead, onMarkAllRead }) {
  return (
    <div className={styles.notifPanel}>
      <div className={styles.notifHeader}>
        <span className={styles.notifTitle}>
          Notifications
          {unreadCount > 0 && <span className={styles.notifCount}>{unreadCount}</span>}
        </span>
        {unreadCount > 0 && (
          <button className={styles.markAllBtn} onClick={onMarkAllRead}>
            Mark all read
          </button>
        )}
      </div>
      <div className={styles.notifList}>
        {notifications.length === 0 ? (
          <div className={styles.notifEmpty}>No notifications</div>
        ) : (
          notifications.map((n) => (
            <div
              key={n._id}
              className={`${styles.notifItem} ${!n.isRead ? styles.notifUnread : ""}`}
              onClick={() => !n.isRead && onMarkRead && onMarkRead(n._id)}
            >
              <div
                className={styles.notifDot}
                style={{
                  background: n.isRead ? "transparent" : "#00D4AA",
                  border: n.isRead ? "1px solid #333" : "none",
                }}
              />
              <div className={styles.notifBody}>
                <span className={styles.notifMessage}>{n.message || n.title}</span>
                {n.createdAt && (
                  <span className={styles.notifTime}>
                    {new Date(n.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   MAIN DASHBOARD COMPONENT
══════════════════════════════════════════ */
export default function OfficerDashboard({
  officer,
  notifications = [],
  unreadCount = 0,
  assignedReports = [],
  onMenuClick,
  onMarkNotifRead,
  onMarkAllRead,
  onReportsUpdated,
}) {
  const [search, setSearch]               = useState("");
  const [notifOpen, setNotifOpen]         = useState(false);
  const [loadingIds, setLoadingIds]       = useState(new Set());
  const [localStatuses, setLocalStatuses] = useState({});
  const [selectedReport, setSelectedReport] = useState(null);

  const { full, timeShort, currentTimeOfDay } = useDateTime();

  // ── Live device location (replaces hardcoded "Lagos Island Command") ──
  // Priority: officer.station / officer.command from the server takes precedence
  // if set; otherwise we resolve from the device GPS.
  const deviceLocation = useCurrentLocation();
  const commandLabel   = officer?.station || officer?.command || deviceLocation;

  const getToken = () => localStorage.getItem("token") || "";

  /* ── START CASE ── */
  const handleStartCase = async (reportId) => {
    setLoadingIds((prev) => new Set(prev).add(reportId));
    try {
      const res = await fetch(`${BASE_URL}/security/report/${reportId}/start`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      });
      if (!res.ok) {
        const err = await res.json();
        alert(err.message || "Failed to start case.");
        return;
      }
      setLocalStatuses((prev) => ({ ...prev, [reportId]: "IN_PROGRESS" }));
      if (onReportsUpdated) onReportsUpdated();
    } catch (err) {
      console.error(err);
      alert("Network error. Please check your connection.");
    } finally {
      setLoadingIds((prev) => {
        const next = new Set(prev);
        next.delete(reportId);
        return next;
      });
    }
  };

  /* ── RESOLVE CASE ── */
  const handleResolveCase = async (reportId) => {
    setLoadingIds((prev) => new Set(prev).add(reportId));
    try {
      const res = await fetch(`${BASE_URL}/security/report/${reportId}/resolve`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      });
      if (!res.ok) {
        const err = await res.json();
        alert(err.message || "Failed to resolve case.");
        return;
      }
      setLocalStatuses((prev) => ({ ...prev, [reportId]: "RESOLVED" }));
      if (onReportsUpdated) onReportsUpdated();
    } catch (err) {
      console.error(err);
      alert("Network error. Please check your connection.");
    } finally {
      setLoadingIds((prev) => {
        const next = new Set(prev);
        next.delete(reportId);
        return next;
      });
    }
  };

  /* ── OVERLAY STATUS CHANGE ── */
  const handleOverlayStatusChange = (id, newStatus) => {
    setLocalStatuses((prev) => ({ ...prev, [id]: newStatus }));
    setSelectedReport((prev) =>
      prev ? { ...prev, status: newStatus } : null
    );
    if (onReportsUpdated) onReportsUpdated();
  };

  /* ── DERIVED DATA ── */
  const getEffectiveStatus = (r) =>
    (localStatuses[r._id] || r.status || "").toLowerCase();

  const activeReports = assignedReports.filter((r) => {
    const s = getEffectiveStatus(r);
    return s === "active" || s === "in_progress";
  });
  const resolvedReports = assignedReports.filter((r) => getEffectiveStatus(r) === "resolved");
  const pendingReports  = assignedReports.filter((r) => {
    const s = getEffectiveStatus(r);
    return s === "pending" || s === "new" || s === "assigned" || s === "under_review";
  });

  const priorityCases   = assignedReports.filter(
    (r) => r.priority === "HIGH" || r.priority === "URGENT" || r.urgency === "high"
  );
  const incomingReports = assignedReports.filter(
    (r) => r.priority !== "HIGH" && r.priority !== "URGENT" && r.urgency !== "high"
  );

  const searchLower      = search.toLowerCase();
  const filteredPriority = priorityCases.filter(
    (r) =>
      !search ||
      (r.title || r.description || "").toLowerCase().includes(searchLower) ||
      (r._id || "").toLowerCase().includes(searchLower)
  );
  const filteredIncoming = incomingReports.filter(
    (r) =>
      !search ||
      (r.title || r.description || "").toLowerCase().includes(searchLower) ||
      (r._id || "").toLowerCase().includes(searchLower)
  );

  const initials  = getInitials(officer);
  const firstName = getFirstName(officer);

  /* ══════════════════════════════════════════
     RENDER
  ══════════════════════════════════════════ */
  return (
    <div className={styles.wrapper}>

      {/* ══ TOP BAR ══ */}
      <header className={styles.topBar}>
        <div className={styles.breadcrumb}>
          <span className={styles.breadcrumbParent}>Aegis</span>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>Dashboard</span>
        </div>

        <div className={styles.topRight}>

          {/* Search */}
          <div className={styles.searchBox}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2.05658 6.71609C2.05658 10.2248 4.90097 13.0691 8.40964 13.0691C11.9183 13.0691 14.7627 10.2248 14.7627 6.71609C14.7627 3.20739 11.9183 0.363037 8.40964 0.363037C4.90097 0.363037 2.05658 3.20739 2.05658 6.71609Z"
                stroke="#F59E0B" strokeWidth="0.726063" strokeLinecap="round" strokeLinejoin="round"
              />
              <path
                d="M0.363053 14.7635L3.91797 11.2086"
                stroke="#F59E0B" strokeWidth="0.726063" strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
            <input
              className={styles.searchInput}
              placeholder="Search cases, reports..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Notification Bell */}
          <div style={{ position: "relative" }}>
            <button
              className={styles.iconBtn}
              onClick={() => setNotifOpen((prev) => !prev)}
              aria-label="Notifications"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M10.9395 8.75791C10.6196 8.20686 10.1441 6.64768 10.1441 4.61124C10.1441 3.38827 9.65824 2.21538 8.79346 1.3506C7.92869 0.485826 6.7558 0 5.53282 0C4.30985 0 3.13696 0.485826 2.27218 1.3506C1.40741 2.21538 0.921581 3.38827 0.921581 4.61124C0.921581 6.64826 0.44547 8.20686 0.125565 8.75791C0.043871 8.898 0.000562165 9.05715 5.43606e-06 9.21932C-0.000551293 9.38149 0.0416639 9.54094 0.122394 9.68159C0.203124 9.82224 0.319513 9.93911 0.459825 10.0204C0.600137 10.1017 0.75941 10.1446 0.921581 10.1447H3.27389C3.38028 10.6653 3.66321 11.1332 4.07483 11.4692C4.48644 11.8052 5.00148 11.9887 5.53282 11.9887C6.06417 11.9887 6.57921 11.8052 6.99082 11.4692C7.40244 11.1332 7.68537 10.6653 7.79176 10.1447H10.1441C10.3062 10.1445 10.4654 10.1016 10.6056 10.0202C10.7459 9.93886 10.8622 9.82197 10.9428 9.68134C11.0235 9.54071 11.0656 9.3813 11.0651 9.21918C11.0645 9.05706 11.0212 8.89795 10.9395 8.75791ZM5.53282 11.067C5.24682 11.0669 4.96788 10.9782 4.73439 10.813C4.50089 10.6478 4.32433 10.4144 4.22899 10.1447H6.83665C6.74132 10.4144 6.56476 10.6478 6.33126 10.813C6.09777 10.9782 5.81882 11.0669 5.53282 11.067Z"
                  fill="#F59E0B"
                />
              </svg>
              {unreadCount > 0 && <span className={styles.iconBtnDot} />}
            </button>

            {notifOpen && (
              <NotificationPanel
                notifications={notifications}
                unreadCount={unreadCount}
                onMarkRead={onMarkNotifRead}
                onMarkAllRead={onMarkAllRead}
              />
            )}
          </div>

          {/* Settings icon */}
          <button className={styles.iconBtn}>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
              <path
                d="M8.42871 0.428574H10.4287C10.981 0.428574 11.4287 0.876294 11.4287 1.42857V1.99736C11.4287 2.42516 11.7158 2.79682 12.1109 2.96085C12.5062 3.12495 12.9664 3.06241 13.269 2.7598L13.6713 2.35748C14.0618 1.96695 14.695 1.96695 15.0855 2.35748L16.4997 3.77169C16.8903 4.16222 16.8902 4.79538 16.4997 5.18591L16.0975 5.58817C15.7948 5.8908 15.7323 6.35104 15.8964 6.74631C16.0604 7.14144 16.4321 7.42857 16.86 7.42857H17.4287C17.981 7.42857 18.4287 7.87627 18.4287 8.42857V10.4286C18.4287 10.9809 17.981 11.4286 17.4287 11.4286H16.8599C16.4321 11.4286 16.0605 11.7157 15.8964 12.1108C15.7323 12.5061 15.7948 12.9663 16.0975 13.2689L16.4997 13.6712C16.8903 14.0617 16.8903 14.6949 16.4997 15.0854L15.0855 16.4996C14.695 16.8902 14.0618 16.8902 13.6713 16.4996L13.269 16.0974C12.9664 15.7947 12.5062 15.7322 12.1109 15.8963C11.7158 16.0604 11.4287 16.432 11.4287 16.8598V17.4286C11.4287 17.9809 10.981 18.4286 10.4287 18.4286H8.42871C7.87641 18.4286 7.42871 17.9809 7.42871 17.4286V16.8599C7.42871 16.432 7.14158 16.0603 6.74645 15.8963C6.35118 15.7322 5.89094 15.7947 5.58831 16.0974L5.18603 16.4996C4.7955 16.8902 4.16234 16.8902 3.77182 16.4996L2.3576 15.0854C1.96708 14.6949 1.96708 14.0617 2.3576 13.6712L2.75994 13.2689C3.06255 12.9663 3.12509 12.5061 2.96099 12.1108C2.79696 11.7157 2.4253 11.4286 1.9975 11.4286H1.42871C0.876431 11.4286 0.428711 10.9809 0.428711 10.4286V8.42857C0.428711 7.87627 0.876431 7.42857 1.42871 7.42857H1.99748C2.42529 7.42857 2.79696 7.14145 2.961 6.74633C3.12511 6.35107 3.06257 5.89086 2.75994 5.58823L2.35762 5.18591C1.96709 4.79538 1.96709 4.16222 2.35762 3.7717L3.77183 2.35748C4.16236 1.96696 4.79552 1.96696 5.18605 2.35748L5.58837 2.7598C5.89099 3.06243 6.35121 3.12497 6.74647 2.96086C7.14159 2.79682 7.42871 2.42515 7.42871 1.99733V1.42857C7.42871 0.876294 7.87641 0.428574 8.42871 0.428574Z"
                stroke="#F59E0B" strokeWidth="0.857143"
              />
              <path
                d="M11.4287 9.42857C11.4287 10.5332 10.5333 11.4286 9.42871 11.4286C8.32411 11.4286 7.42871 10.5332 7.42871 9.42857C7.42871 8.32397 8.32411 7.42857 9.42871 7.42857C10.5333 7.42857 11.4287 8.32397 11.4287 9.42857Z"
                stroke="#F59E0B" strokeWidth="0.857143"
              />
            </svg>
          </button>

          {/* Avatar */}
          <div className={styles.avatarBtn}>
            <span>{initials}</span>
          </div>
        </div>

        {/* Hamburger */}
        <button className={styles.hamburger} onClick={onMenuClick} aria-label="Open menu">
          <span /><span /><span />
        </button>
      </header>

      {/* ══ SCROLLABLE BODY ══ */}
      <div className={styles.body} onClick={() => notifOpen && setNotifOpen(false)}>

        {/* ── Greeting ── */}
        <section className={styles.greeting}>
          <div className={styles.greetingMeta}>
            <span className={styles.greetingDate}>{full}</span>
            <span className={styles.greetingDot}>·</span>
            <span className={styles.greetingShift}>{timeShort}</span>
          </div>
          <h1 className={styles.greetingTitle}>
            Good {currentTimeOfDay},{" "}
            {officer?.rank ? `${officer.rank} ` : ""}
            {firstName}
          </h1>
          {/* ── commandLabel replaces hardcoded "Lagos Island Command" ── */}
          <p className={styles.greetingSubtitle}>
            {commandLabel} ·{" "}
            {activeReports.length} active case{activeReports.length !== 1 ? "s" : ""} assigned to you
          </p>
        </section>

        {/* ── Command Status Banner ── */}
        <div className={styles.commandBanner}>
          <div className={styles.commandBannerLeft}>
            <div className={styles.commandBannerTag}>
              <span>COMMAND STATUS</span>
              <span className={styles.commandBannerTagDot}>·</span>
              {/* ── commandLabel replaces hardcoded "LAGOS ISLAND" ── */}
              <span>{commandLabel.toUpperCase()}</span>
            </div>
            <h2 className={styles.commandBannerTitle}>
              {pendingReports.length} Report{pendingReports.length !== 1 ? "s" : ""} Awaiting Review
            </h2>
            <p className={styles.commandBannerSub}>
              {activeReports.length} active · {resolvedReports.length} resolved today ·{" "}
              {priorityCases.length} high-priority
            </p>
          </div>
          <div className={styles.commandBannerActions}>
            <button className={styles.bannerBtnPrimary}>DISPATCH UNIT</button>
            <button className={styles.bannerBtnSecondary}>FULL REPORT</button>
          </div>
        </div>

        {/* ── Stats Row ── */}
        <div className={styles.statsRow}>
          {[
            {
              num: assignedReports.length.toString(),
              label: "Assigned Reports",
              sub: `${pendingReports.length} awaiting action`,
              subColor: pendingReports.length > 0 ? "amber" : "green",
              color: "#3b82f6",
            },
            {
              num: activeReports.length.toString(),
              label: "Active Cases",
              sub: `${priorityCases.length} high-priority`,
              subColor: priorityCases.length > 0 ? "amber" : "green",
              color: "#f59e0b",
            },
            {
              num: resolvedReports.length.toString(),
              label: "Resolved",
              sub: resolvedReports.length > 0 ? "Good progress" : "None yet",
              subColor: "green",
              color: "#22C55E",
            },
            {
              num: unreadCount.toString(),
              label: "Unread Notifications",
              sub: unreadCount > 0 ? "Tap bell to review" : "All caught up",
              subColor: unreadCount > 0 ? "amber" : "green",
              color: "#3b82f6",
            },
          ].map((s, i) => (
            <div key={i} className={styles.statCard}>
              <span className={styles.statNum} style={{ color: s.color }}>
                {s.num}
              </span>
              <span className={styles.statLabel}>{s.label}</span>
              <span
                className={styles.statSub}
                style={{ color: s.subColor === "green" ? "#22C55E" : "#f59e0b" }}
              >
                {s.sub}
              </span>
            </div>
          ))}
        </div>

        {/* ══ TWO-COLUMN GRID ══ */}
        <div className={styles.mainGrid}>

          {/* ── LEFT: Priority Cases ── */}
          <div className={styles.col}>
            <div className={styles.colHeader}>
              <span className={styles.colTitle}>PRIORITY CASES</span>
              <button className={styles.colAction}>ALL CASES →</button>
            </div>

            <div className={styles.caseList}>
              {filteredPriority.length === 0 ? (
                <div className={styles.emptyState}>
                  {search
                    ? "No priority cases match your search."
                    : "No high-priority cases assigned."}
                </div>
              ) : (
                filteredPriority.map((c) => {
                  const caseId     = c._id || c.id || "—";
                  const shortId    = caseId.length > 8 ? caseId.slice(-6).toUpperCase() : caseId;
                  const title      = c.title || c.description || "Untitled Report";
                  const priority   = c.priority || (c.urgency === "high" ? "HIGH" : "MEDIUM");
                  const rawStatus  = localStatuses[caseId] || c.status || "NEW";
                  const status     = rawStatus.toUpperCase();
                  const isLoading  = loadingIds.has(caseId);
                  const isInProgress = status === "IN_PROGRESS" || status === "ACTIVE";
                  const isResolved   = status === "RESOLVED";
                  const showStart    = !isInProgress && !isResolved;

                  const submittedAt = c.createdAt
                    ? new Date(c.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : "—";
                  const reporter = c.reporterName || c.reportedBy || "Anonymous reporter";

                  return (
                    <div
                      key={caseId}
                      className={styles.caseCard}
                      onClick={() => setSelectedReport(c)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className={styles.caseTop}>
                        <span className={`${styles.priorityTag} ${priorityClass(priority, styles)}`}>
                          {priority}
                        </span>
                        <h3 className={styles.caseTitle}>{title}</h3>
                      </div>

                      <div className={styles.caseMeta}>
                        Case #{shortId} · Submitted {submittedAt} · {reporter}
                      </div>

                      <div className={styles.caseBottom}>
                        <div className={styles.caseInfo}>
                          {c.location && (
                            <span className={styles.caseDistance}>
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                              </svg>
                              {typeof c.location === "string"
                                ? c.location
                                : c.location?.address || "Unknown location"}
                            </span>
                          )}
                          <span className={`${styles.caseStatus} ${statusClass(status, styles)}`}>
                            {status.replace("_", " ")}
                          </span>
                        </div>
                      </div>

                      <div className={styles.caseFooter}>
                        <div className={styles.assigneeRow}>
                          <div
                            className={styles.assigneeAvatar}
                            style={{ background: getColor(initials[0] || "A") }}
                          >
                            {initials}
                          </div>
                        </div>

                        {showStart && (
                          <button
                            className={styles.assignBtn}
                            disabled={isLoading}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStartCase(caseId);
                            }}
                          >
                            {isLoading ? "STARTING…" : "START CASE →"}
                          </button>
                        )}
                        {isInProgress && (
                          <button
                            className={styles.assignBtn}
                            disabled={isLoading}
                            style={{ background: "#059669" }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleResolveCase(caseId);
                            }}
                          >
                            {isLoading ? "RESOLVING…" : "RESOLVE →"}
                          </button>
                        )}
                        {isResolved && (
                          <button className={styles.viewBtn} disabled>
                            RESOLVED ✓
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* ── RIGHT: Incoming Reports + Notifications ── */}
          <div className={styles.col}>

            <div className={styles.colHeader}>
              <span className={styles.colTitle}>INCOMING REPORTS</span>
              <button className={styles.colAction}>ALL →</button>
            </div>

            <div className={styles.reportList}>
              {filteredIncoming.length === 0 ? (
                <div className={`${styles.emptyState} ${styles.emptyStateSmall}`}>
                  {search ? "No reports match your search." : "No incoming reports."}
                </div>
              ) : (
                filteredIncoming.map((r) => {
                  const reportId = r._id || r.id;
                  const effectiveStatus = localStatuses[reportId] || r.status || "NEW";
                  const status          = effectiveStatus.toUpperCase();
                  const title  = r.title || r.description || "Untitled Report";
                  const time   = r.createdAt
                    ? new Date(r.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : "—";
                  const detail = r.reporterName || r.reportedBy || r.category || "";

                  return (
                    <div
                      key={reportId}
                      className={styles.reportItem}
                      onClick={() => setSelectedReport(r)}
                    >
                      <div
                        className={styles.reportDot}
                        style={{ background: getDotColor(effectiveStatus, r.priority) }}
                      />
                      <div className={styles.reportBody}>
                        <span className={styles.reportTitle}>{title}</span>
                        <span className={styles.reportMeta}>
                          {time}{detail ? ` · ${detail}` : ""}
                        </span>
                      </div>
                      <span className={`${styles.reportBadge} ${statusClass(status, styles)}`}>
                        {status.replace("_", " ")}
                      </span>
                    </div>
                  );
                })
              )}
            </div>

            {/* Recent Notifications */}
            {notifications.length > 0 && (
              <>
                <div className={styles.colHeader} style={{ marginTop: 28 }}>
                  <span className={styles.colTitle}>RECENT NOTIFICATIONS</span>
                  {unreadCount > 0 && (
                    <button className={styles.colAction} onClick={onMarkAllRead}>
                      MARK ALL READ
                    </button>
                  )}
                </div>

                <div className={styles.unitList}>
                  {notifications.slice(0, 4).map((n) => (
                    <div
                      key={n._id}
                      className={styles.unitCard}
                      style={{ cursor: !n.isRead ? "pointer" : "default" }}
                      onClick={() =>
                        !n.isRead && onMarkNotifRead && onMarkNotifRead(n._id)
                      }
                    >
                      <div
                        className={styles.unitAvatar}
                        style={{
                          background: n.isRead ? "#1e2536" : "#00D4AA22",
                          border: n.isRead ? "1px solid #2a3047" : "1px solid #00D4AA55",
                          color: n.isRead ? "#6b7280" : "#00D4AA",
                          fontSize: "10px",
                        }}
                      >
                        {n.isRead ? "✓" : "●"}
                      </div>
                      <div className={styles.unitInfo}>
                        <span
                          className={styles.unitName}
                          style={{ color: n.isRead ? "#6b7280" : "#e2e8f0" }}
                        >
                          {n.message || n.title || "Notification"}
                        </span>
                        {n.createdAt && (
                          <span className={styles.unitLocation}>
                            {new Date(n.createdAt).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        )}
                      </div>
                      {!n.isRead && (
                        <span className={styles.unitStatus} style={{ color: "#00D4AA" }}>
                          · NEW
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ══ REPORT DETAIL OVERLAY ══ */}
      {selectedReport && (
        <ReportDetailOverlay
          report={{
            ...selectedReport,
            status: localStatuses[selectedReport._id] || selectedReport.status,
          }}
          officerInitials={initials}
          onClose={() => setSelectedReport(null)}
          onStatusChange={handleOverlayStatusChange}
        />
      )}

    </div>
  );
}