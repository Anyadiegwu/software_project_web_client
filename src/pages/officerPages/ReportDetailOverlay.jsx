import React, { useState } from "react";
import styles from "./ReportDetailOverlay.module.css";

const getToken = () => localStorage.getItem("token") || "";
// const BASE_URL = "http://localhost:5000/api";
const BASE_URL = import.meta.env.VITE_BASE_URL;
export default function ReportDetailOverlay({
  report,
  officerInitials = "?",
  onClose,
  onStatusChange, // (reportId, newStatus) => void — tells parent to update optimistically
}) {
  const [loading, setLoading] = useState(false);

  if (!report) return null;

  /* ── Derive display values ── */
  const caseId    = report._id || report.id || "—";
  const shortId   = caseId.length > 8 ? "AEG-" + caseId.slice(-5).toUpperCase() : caseId;
  const title     = report.title || report.description || "Untitled Report";
  const priority  = report.priority || (report.urgency === "high" ? "HIGH" : "MEDIUM");
  const rawStatus = (report.status || "new").toLowerCase();
  const status    = rawStatus.toUpperCase();

  const isAssigned    = rawStatus === "assigned"   || rawStatus === "pending" || rawStatus === "new" || rawStatus === "under_review";
  const isInProgress  = rawStatus === "in_progress" || rawStatus === "active";
  const isResolved    = rawStatus === "resolved";

  const submittedAt = report.createdAt
    ? new Date(report.createdAt).toLocaleString("en-GB", {
        hour: "2-digit", minute: "2-digit",
        day: "2-digit", month: "short"
      })
    : "—";

  const timeAgo = report.createdAt
    ? (() => {
        const diff = Math.floor((Date.now() - new Date(report.createdAt)) / 60000);
        if (diff < 1) return "Just now";
        if (diff < 60) return `${diff} min ago`;
        return `${Math.floor(diff / 60)}h ${diff % 60}m ago`;
      })()
    : "—";

  const location = report.location
    ? typeof report.location === "string"
      ? report.location
      : report.location.address || `${report.location.lat}, ${report.location.lng}` || "Unknown"
    : "Not provided";

  const reporter       = report.isAnonymous ? "Anonymous" : (report.reporterName || report.reportedBy || "Unknown");
  const reporterInits  = reporter === "Anonymous" ? "A" : reporter[0]?.toUpperCase() || "?";
  const witnessNote    = report.witnesses ? `${report.witnesses} corroborating witness report${report.witnesses > 1 ? "s" : ""}` : "No additional witnesses";

  /* ── API calls ── */
  const handleStart = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/security/report/${caseId}/start`, {
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
      onStatusChange?.(caseId, "in_progress");
    } catch (err) {
      console.error(err);
      alert("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleResolve = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/security/report/${caseId}/resolve`, {
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
      onStatusChange?.(caseId, "resolved");
    } catch (err) {
      console.error(err);
      alert("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  /* ── Helpers ── */
  const priorityClass = {
    HIGH:   styles.tagHigh,
    URGENT: styles.tagHigh,
    MEDIUM: styles.tagMedium,
    LOW:    styles.tagLow,
  }[priority] || styles.tagMedium;

  const statusClass = {
    ASSIGNED:    styles.statusAssigned,
    PENDING:     styles.statusPending,
    NEW:         styles.statusNew,
    UNDER_REVIEW:styles.statusAssigned,
    IN_PROGRESS: styles.statusActive,
    ACTIVE:      styles.statusActive,
    RESOLVED:    styles.statusResolved,
    URGENT:      styles.statusUrgent,
  }[status] || styles.statusNew;

  const urgencyColor = { critical: "#f87171", high: "#f87171", medium: "#fbbf24", low: "#34d399" };

  return (
    <div className={styles.backdrop} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.panel} role="dialog" aria-modal="true" aria-label="Case details">

        {/* ── Header ── */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.tagRow}>
              <span className={`${styles.priorityTag} ${priorityClass}`}>{priority}</span>
              <span className={`${styles.statusTag} ${statusClass}`}>{status.replace("_", " ")}</span>
              <span className={styles.caseIdTag}>#{shortId}</span>
            </div>
            <h2 className={styles.title}>{title}</h2>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* ── Body ── */}
        <div className={styles.body}>

          {/* Meta grid */}
          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>SUBMITTED</span>
              <span className={styles.metaValue}>{submittedAt} · {timeAgo}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>CATEGORY</span>
              <span className={styles.metaValue}>{report.category || "—"} · {report.type || "—"}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>LOCATION</span>
              <span className={styles.metaValue}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 4, verticalAlign: "middle", color: "#6b7280" }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                {location}
              </span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>URGENCY</span>
              <span className={styles.metaValue} style={{ color: urgencyColor[report.urgency] || "#e5e7eb" }}>
                {report.urgency ? report.urgency.charAt(0).toUpperCase() + report.urgency.slice(1) : "—"}
              </span>
            </div>
            {report.suspectsCount != null && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>SUSPECTS</span>
                <span className={styles.metaValue}>{report.suspectsCount} reported</span>
              </div>
            )}
            {report.weapons && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>WEAPONS</span>
                <span className={styles.metaValue} style={{ color: "#f87171" }}>{report.weapons}</span>
              </div>
            )}
            {report.vehicles && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>VEHICLES</span>
                <span className={styles.metaValue}>{report.vehicles}</span>
              </div>
            )}
          </div>

          {/* Description */}
          {report.description && (
            <div>
              <div className={styles.sectionLabel}>DESCRIPTION</div>
              <div className={styles.descBox}>{report.description}</div>
            </div>
          )}

          {/* Evidence */}
          {report.evidence?.length > 0 && (
            <div>
              <div className={styles.sectionLabel}>EVIDENCE ({report.evidence.length} file{report.evidence.length > 1 ? "s" : ""})</div>
              <div className={styles.evidenceRow}>
                {report.evidence.map((url, i) => (
                  <a key={i} href={url} target="_blank" rel="noreferrer" className={styles.evidenceChip}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 4 }}>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    File {i + 1}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Reporter */}
          <div>
            <div className={styles.sectionLabel}>REPORTER</div>
            <div className={styles.reporterRow}>
              <div className={styles.reporterAvatar}>{reporterInits}</div>
              <div className={styles.reporterInfo}>
                <span className={styles.reporterName}>{reporter}</span>
                <span className={styles.reporterSub}>{witnessNote}</span>
              </div>
              {report.isAnonymous && <span className={styles.anonBadge}>ANONYMOUS</span>}
            </div>
          </div>

          {/* Timeline */}
          {report.timeline?.length > 0 && (
            <div>
              <div className={styles.sectionLabel}>TIMELINE</div>
              <div className={styles.timelineList}>
                {report.timeline.map((entry, i) => (
                  <div key={i} className={styles.timelineItem}>
                    <div className={styles.timelineDotCol}>
                      <div className={`${styles.timelineDot} ${i === 0 ? styles.dotActive : ""}`} />
                      {i < report.timeline.length - 1 && <div className={styles.timelineLine} />}
                    </div>
                    <div className={styles.timelineContent}>
                      <span className={styles.timelineStatus}>{(entry.status || "").toUpperCase().replace("_", " ")}</span>
                      {entry.note && <span className={styles.timelineNote}>{entry.note}</span>}
                      <span className={styles.timelineTime}>
                        {entry.date ? new Date(entry.date).toLocaleString("en-GB", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "short" }) : "—"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <div className={styles.footerLeft}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "#374151" }}>
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            <span className={styles.footerTs}>{submittedAt} · {timeAgo}</span>
          </div>
          <div className={styles.footerActions}>
            <button className={styles.btnGhost} onClick={onClose} disabled={loading}>
              CLOSE
            </button>

            {isAssigned && (
              <button className={styles.btnStart} onClick={handleStart} disabled={loading}>
                {loading ? <><span className={styles.spinner} />STARTING…</> : "START CASE →"}
              </button>
            )}
            {isInProgress && (
              <button className={styles.btnResolve} onClick={handleResolve} disabled={loading}>
                {loading ? <><span className={styles.spinner} />RESOLVING…</> : "RESOLVE →"}
              </button>
            )}
            {isResolved && (
              <button className={styles.btnResolved} disabled>✓ RESOLVED</button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}