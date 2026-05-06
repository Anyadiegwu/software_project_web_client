// import React, { useState } from "react";
// import styles from "./OfficerDashboard.module.css";
// import useDateTime from "../../hooks/useDateTime";

// /* ── mock data ── */
// const priorityCases = [
//   {
//     id: "AEG-00891",
//     priority: "HIGH",
//     title: "Armed robbery — Apongbon Bridge area",
//     submitted: "09:14",
//     reporter: "Anonymous reporter",
//     witnesses: 2,
//     distance: "0.8 km",
//     opened: "42 min ago",
//     status: "ACTIVE",
//     assignees: ["K", "T"],
//     canAssign: true,
//   },
//   {
//     id: "AEG-00892",
//     priority: "HIGH",
//     title: "Gunshots heard near Marina waterfront",
//     submitted: "09:38",
//     reporter: "Unverified",
//     witnesses: 2,
//     distance: "1.2 km",
//     opened: "3 min ago",
//     status: "URGENT",
//     assignees: [],
//     canAssign: true,
//   },
//   {
//     id: "AEG-00887",
//     priority: "MEDIUM",
//     title: "Suspicious gathering near CMS bus stop",
//     submitted: "07:52",
//     reporter: "Verified resident",
//     witnesses: null,
//     distance: "1.4 km",
//     opened: "52 min ago",
//     status: "ASSIGNED",
//     assignees: ["F"],
//     canAssign: false,
//   },
// ];

// const incomingReports = [
//   { id: 1, title: "Gunshots — Marina waterfront",      time: "3 min ago",   detail: "2 corroborating",         status: "URGENT",   dot: "red"    },
//   { id: 2, title: "Vehicle blocking emergency access", time: "18 min ago",  detail: "Verified resident",       status: "PENDING",  dot: "amber"  },
//   { id: 3, title: "Street fight — Carter Bridge",      time: "34 min ago",  detail: "Photo attached",          status: "NEW",      dot: "blue"   },
//   { id: 4, title: "Noise disturbance — Garki market",  time: "1 hr ago",    detail: "Community post",          status: "NEW",      dot: "amber"  },
//   { id: 5, title: "Domestic incident — Maitama sector",time: "1.5 hrs ago", detail: "Resolved",                status: "RESOLVED", dot: "green"  },
// ];

// const units = [
//   { id: "B3", name: "Unit B-3 · 2 officers", location: "Apongbon Bridge · On scene", status: "Active",  statusColor: "red"   },
//   { id: "A1", name: "Unit A-1 · 2 officers", location: "Victoria Island Patrol",      status: "Patrol",  statusColor: "green" },
// ];

// /* ── helpers ── */
// const priorityClass = (p) => ({
//   HIGH:   styles.tagHigh,
//   MEDIUM: styles.tagMedium,
//   LOW:    styles.tagLow,
// }[p] || styles.tagMedium);

// const statusClass = (s) => ({
//   ACTIVE:   styles.statusActive,
//   URGENT:   styles.statusUrgent,
//   ASSIGNED: styles.statusAssigned,
//   RESOLVED: styles.statusResolved,
//   PENDING:  styles.statusPending,
//   NEW:      styles.statusNew,
// }[s] || styles.statusNew);

// const avatarColors = ["#3b82f6", "#f59e0b", "#10b981", "#8b5cf6", "#ef4444"];
// const getColor = (char) => avatarColors[char.charCodeAt(0) % avatarColors.length];

// export default function OfficerDashboard({ officer, onMenuClick }) {
//   const [search, setSearch] = useState("");
//     const { full, timeShort, currentTimeOfDay } = useDateTime();

//   return (
//     <div className={styles.wrapper}>

//       {/* ══════════════ TOP BAR ══════════════ */}
//       <header className={styles.topBar}>
//         <div className={styles.breadcrumb}>
//           <span className={styles.breadcrumbParent}>Aegis</span>
//           <span className={styles.breadcrumbSep}>/</span>
//           <span className={styles.breadcrumbCurrent}>Dashboard</span>
//         </div>

//         <div className={styles.topRight}>
//           <div className={styles.searchBox}>
//             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M2.05658 6.71609C2.05658 10.2248 4.90097 13.0691 8.40964 13.0691C11.9183 13.0691 14.7627 10.2248 14.7627 6.71609C14.7627 3.20739 11.9183 0.363037 8.40964 0.363037C4.90097 0.363037 2.05658 3.20739 2.05658 6.71609Z" stroke="#F59E0B" strokeWidth="0.726063" strokeLinecap="round" strokeLinejoin="round"/>
//             <path d="M0.363053 14.7635L3.91797 11.2086" stroke="#F59E0B" strokeWidth="0.726063" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//             <input
//               className={styles.searchInput}
//               placeholder="Search cases, reports..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>

//           <button className={styles.iconBtn}>
//             <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M10.9395 8.75791C10.6196 8.20686 10.1441 6.64768 10.1441 4.61124C10.1441 3.38827 9.65824 2.21538 8.79346 1.3506C7.92869 0.485826 6.7558 0 5.53282 0C4.30985 0 3.13696 0.485826 2.27218 1.3506C1.40741 2.21538 0.921581 3.38827 0.921581 4.61124C0.921581 6.64826 0.44547 8.20686 0.125565 8.75791C0.043871 8.898 0.000562165 9.05715 5.43606e-06 9.21932C-0.000551293 9.38149 0.0416639 9.54094 0.122394 9.68159C0.203124 9.82224 0.319513 9.93911 0.459825 10.0204C0.600137 10.1017 0.75941 10.1446 0.921581 10.1447H3.27389C3.38028 10.6653 3.66321 11.1332 4.07483 11.4692C4.48644 11.8052 5.00148 11.9887 5.53282 11.9887C6.06417 11.9887 6.57921 11.8052 6.99082 11.4692C7.40244 11.1332 7.68537 10.6653 7.79176 10.1447H10.1441C10.3062 10.1445 10.4654 10.1016 10.6056 10.0202C10.7459 9.93886 10.8622 9.82197 10.9428 9.68134C11.0235 9.54071 11.0656 9.3813 11.0651 9.21918C11.0645 9.05706 11.0212 8.89795 10.9395 8.75791ZM5.53282 11.067C5.24682 11.0669 4.96788 10.9782 4.73439 10.813C4.50089 10.6478 4.32433 10.4144 4.22899 10.1447H6.83665C6.74132 10.4144 6.56476 10.6478 6.33126 10.813C6.09777 10.9782 5.81882 11.0669 5.53282 11.067Z" fill="#F59E0B"/>
//             </svg>
//             <span className={styles.iconBtnDot} />
//           </button>

//           <button className={styles.iconBtn}>
//             <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M8.42871 0.428574H10.4287C10.981 0.428574 11.4287 0.876294 11.4287 1.42857V1.99736C11.4287 2.42516 11.7158 2.79682 12.1109 2.96085C12.5062 3.12495 12.9664 3.06241 13.269 2.7598L13.6713 2.35748C14.0618 1.96695 14.695 1.96695 15.0855 2.35748L16.4997 3.77169C16.8903 4.16222 16.8902 4.79538 16.4997 5.18591L16.0975 5.58817C15.7948 5.8908 15.7323 6.35104 15.8964 6.74631C16.0604 7.14144 16.4321 7.42857 16.86 7.42857H17.4287C17.981 7.42857 18.4287 7.87627 18.4287 8.42857V10.4286C18.4287 10.9809 17.981 11.4286 17.4287 11.4286H16.8599C16.4321 11.4286 16.0605 11.7157 15.8964 12.1108C15.7323 12.5061 15.7948 12.9663 16.0975 13.2689L16.4997 13.6712C16.8903 14.0617 16.8903 14.6949 16.4997 15.0854L15.0855 16.4996C14.695 16.8902 14.0618 16.8902 13.6713 16.4996L13.269 16.0974C12.9664 15.7947 12.5062 15.7322 12.1109 15.8963C11.7158 16.0604 11.4287 16.432 11.4287 16.8598V17.4286C11.4287 17.9809 10.981 18.4286 10.4287 18.4286H8.42871C7.87641 18.4286 7.42871 17.9809 7.42871 17.4286V16.8599C7.42871 16.432 7.14158 16.0603 6.74645 15.8963C6.35118 15.7322 5.89094 15.7947 5.58831 16.0974L5.18603 16.4996C4.7955 16.8902 4.16234 16.8902 3.77182 16.4996L2.3576 15.0854C1.96708 14.6949 1.96708 14.0617 2.3576 13.6712L2.75994 13.2689C3.06255 12.9663 3.12509 12.5061 2.96099 12.1108C2.79696 11.7157 2.4253 11.4286 1.9975 11.4286H1.42871C0.876431 11.4286 0.428711 10.9809 0.428711 10.4286V8.42857C0.428711 7.87627 0.876431 7.42857 1.42871 7.42857H1.99748C2.42529 7.42857 2.79696 7.14145 2.961 6.74633C3.12511 6.35107 3.06257 5.89086 2.75994 5.58823L2.35762 5.18591C1.96709 4.79538 1.96709 4.16222 2.35762 3.7717L3.77183 2.35748C4.16236 1.96696 4.79552 1.96696 5.18605 2.35748L5.58837 2.7598C5.89099 3.06243 6.35121 3.12497 6.74647 2.96086C7.14159 2.79682 7.42871 2.42515 7.42871 1.99733V1.42857C7.42871 0.876294 7.87641 0.428574 8.42871 0.428574Z" stroke="#F59E0B" strokeWidth="0.857143"/>
//             <path d="M11.4287 9.42857C11.4287 10.5332 10.5333 11.4286 9.42871 11.4286C8.32411 11.4286 7.42871 10.5332 7.42871 9.42857C7.42871 8.32397 8.32411 7.42857 9.42871 7.42857C10.5333 7.42857 11.4287 8.32397 11.4287 9.42857Z" stroke="#F59E0B" strokeWidth="0.857143"/>
//             </svg>
//           </button>

//           <div className={styles.avatarBtn}>
//             <span>{officer?.initials || "K"}</span>
//           </div>
//         </div>
//           <button
//                 className={styles.hamburger}
//                 onClick={onMenuClick}
//                 aria-label="Open menu"
//             >
//                 <span /><span /><span />
//             </button>
//       </header>

//       {/* ══════════════ SCROLLABLE BODY ══════════════ */}
//       <div className={styles.body}>

//         {/* ── Greeting ── */}
//         <section className={styles.greeting}>
//           <div className={styles.greetingMeta}>
//             <span className={styles.greetingDate}>{full}</span>
//             <span className={styles.greetingDot}>·</span>
//             <span className={styles.greetingShift}>{timeShort}</span>
//           </div>
//           <h1 className={styles.greetingTitle}>
//             Good {currentTimeOfDay}, Insp. {officer?.firstName || "Emmanuel"}
//           </h1>
//           <p className={styles.greetingSubtitle}>
//             Lagos Island Command · 3 units deployed · 2 high-priority incidents active
//           </p>
//         </section>

//         {/* ── Command Status Banner ── */}
//         <div className={styles.commandBanner}>
//           <div className={styles.commandBannerLeft}>
//             <div className={styles.commandBannerTag}>
//               <span>COMMAND STATUS</span>
//               <span className={styles.commandBannerTagDot}>·</span>
//               <span>LAGOS ISLAND</span>
//             </div>
//             <h2 className={styles.commandBannerTitle}>12 Reports Awaiting Review</h2>
//             <p className={styles.commandBannerSub}>7 active cases · 3 units deployed · 2 high-priority incidents</p>
//           </div>
//           <div className={styles.commandBannerActions}>
//             <button className={styles.bannerBtnPrimary}>
//               {/* <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <rect x="1" y="3" width="15" height="13" rx="2"/>
//                 <path d="M16 8h4l3 3v5h-7V8z"/>
//                 <circle cx="5.5" cy="18.5" r="2.5"/>
//                 <circle cx="18.5" cy="18.5" r="2.5"/>
//               </svg> */}
//               <span>🚔</span>
//               DISPATCH UNIT
//             </button>
//             <button className={styles.bannerBtnSecondary}>
//               {/* <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
//                 <polyline points="14 2 14 8 20 8"/>
//               </svg> */}
//               📊 
//               FULL REPORT
//             </button>
//           </div>
//         </div>

//         {/* ── Stats Row ── */}
//         <div className={styles.statsRow}>
//           {[
//             { num: "12", label: "New Reports Today",  sub: "↑ 3 since last shift",  subColor: "amber" },
//             { num: "7",  label: "Active Cases",        sub: "↑ 2 escalated",         subColor: "amber" },
//             { num: "5",  label: "Resolved Today",      sub: "↑ +2 vs yesterday",     subColor: "green" },
//             { num: "18m",label: "Avg Response Time",   sub: "↓ improved 4 min",      subColor: "green" },
//           ].map((s, i) => (
//             <div key={i} className={styles.statCard}>
//               <span className={styles.statNum}
//                 style={{ color: i === 0 ? "#3b82f6" : i === 1 ? "#f59e0b" : i === 2 ? "#22C55E" : "#3b82f6" }}>
//                 {s.num}

//               </span>
//               <span className={styles.statLabel}>{s.label}</span>
//               <span className={styles.statSub}
//                 style={{ color: s.subColor === "green" ? "#22C55E" : "#f59e0b" }}>
//                 {s.sub}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* ══════════════ TWO-COLUMN GRID ══════════════ */}
//         <div className={styles.mainGrid}>

//           {/* ── LEFT: Priority Cases ── */}
//           <div className={styles.col}>
//             <div className={styles.colHeader}>
//               <span className={styles.colTitle}>PRIORITY CASES</span>
//               <button className={styles.colAction}>ALL CASES →</button>
//             </div>

//             <div className={styles.caseList}>
//               {priorityCases.map((c) => (
//                 <div key={c.id} className={styles.caseCard}>
//                   <div className={styles.caseTop}>
//                     <span className={`${styles.priorityTag} ${priorityClass(c.priority)}`}>
//                       {c.priority}
//                     </span>
//                     <h3 className={styles.caseTitle}>{c.title}</h3>
//                   </div>

//                   <div className={styles.caseMeta}>
//                     Case #{c.id} · Submitted {c.submitted} ·{" "}
//                     {c.reporter}
//                     {c.witnesses ? ` · ${c.witnesses} witnesses` : ""}
//                   </div>

//                   <div className={styles.caseBottom}>
//                     <div className={styles.caseInfo}>
//                       <span className={styles.caseDistance}>
//                         <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                           <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
//                           <circle cx="12" cy="10" r="3"/>
//                         </svg>
//                         {c.distance}
//                       </span>
//                       <span className={styles.caseDot}>
//                         <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
//                           <circle cx="4" cy="4" r="4"/>
//                         </svg>
//                       </span>
//                       <span className={styles.caseOpened}>Opened {c.opened}</span>
//                       <span className={`${styles.caseStatus} ${statusClass(c.status)}`}>
//                         {c.status}
//                       </span>
//                     </div>
//                   </div>

//                   <div className={styles.caseFooter}>
//                     <div className={styles.assigneeRow}>
//                       {c.assignees.map((a, i) => (
//                         <div key={i} className={styles.assigneeAvatar}
//                           style={{ background: getColor(a) }}>
//                           {a}
//                         </div>
//                       ))}
//                     </div>
//                     {c.canAssign ? (
//                       <button className={styles.assignBtn}>ASSIGN UNIT →</button>
//                     ) : (
//                       <button className={styles.viewBtn}>VIEW CASE</button>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ── RIGHT: Incoming Reports + Units ── */}
//           <div className={styles.col}>

//             {/* Incoming Reports */}
//             <div className={styles.colHeader}>
//               <span className={styles.colTitle}>INCOMING REPORTS</span>
//               <button className={styles.colAction}>ALL →</button>
//             </div>

//             <div className={styles.reportList}>
//               {incomingReports.map((r) => (
//                 <div key={r.id} className={styles.reportItem}>
//                   <div className={styles.reportDot}
//                     style={{
//                       background: r.dot === "red" ? "#ef4444"
//                         : r.dot === "green" ? "#10b981"
//                         : r.dot === "blue" ? "#3b82f6"
//                         : "#f59e0b"
//                     }}
//                   />
//                   <div className={styles.reportBody}>
//                     <span className={styles.reportTitle}>{r.title}</span>
//                     <span className={styles.reportMeta}>{r.time} · {r.detail}</span>
//                   </div>
//                   <span className={`${styles.reportBadge} ${statusClass(r.status)}`}>
//                     {r.status}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* Units on Duty */}
//             <div className={styles.colHeader} style={{ marginTop: 28 }}>
//               <span className={styles.colTitle}>UNITS ON DUTY</span>
//             </div>

//             <div className={styles.unitList}>
//               {units.map((u) => (
//                 <div key={u.id} className={styles.unitCard}>
//                   <div className={styles.unitAvatar}>{u.id}</div>
//                   <div className={styles.unitInfo}>
//                     <span className={styles.unitName}>{u.name}</span>
//                     <span className={styles.unitLocation}>
//                       <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
//                         <circle cx="12" cy="10" r="3"/>
//                       </svg>
//                       {u.location}
//                     </span>
//                   </div>
//                   <span className={styles.unitStatus}
//                     style={{ color: u.statusColor === "red" ? "#ef4444" : "#10b981" }}>
//                     · {u.status}
//                   </span>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import styles from "./OfficerDashboard.module.css";
import useDateTime from "../../hooks/useDateTime";

/* ── helpers ── */
const priorityClass = (p, styles) => ({
  HIGH:   styles.tagHigh,
  MEDIUM: styles.tagMedium,
  LOW:    styles.tagLow,
}[p] || styles.tagMedium);

const statusClass = (s, styles) => ({
  ACTIVE:   styles.statusActive,
  URGENT:   styles.statusUrgent,
  ASSIGNED: styles.statusAssigned,
  RESOLVED: styles.statusResolved,
  PENDING:  styles.statusPending,
  NEW:      styles.statusNew,
}[s] || styles.statusNew);

const avatarColors = ["#3b82f6", "#f59e0b", "#10b981", "#8b5cf6", "#ef4444"];
const getColor = (char) => avatarColors[(char || "A").charCodeAt(0) % avatarColors.length];

// ── Derive initials/name from officer object ──
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

// ── Notification panel ──
function NotificationPanel({ notifications, unreadCount, onMarkRead, onMarkAllRead, onClose }) {
  return (
    <div className={styles.notifPanel}>
      <div className={styles.notifHeader}>
        <span className={styles.notifTitle}>
          Notifications
          {unreadCount > 0 && (
            <span className={styles.notifCount}>{unreadCount}</span>
          )}
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
              onClick={() => !n.isRead && onMarkRead(n._id)}
            >
              <div className={styles.notifDot}
                style={{ background: n.isRead ? "transparent" : "#00D4AA", border: n.isRead ? "1px solid #333" : "none" }}
              />
              <div className={styles.notifBody}>
                <span className={styles.notifMessage}>{n.message || n.title}</span>
                {n.createdAt && (
                  <span className={styles.notifTime}>
                    {new Date(n.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
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

export default function OfficerDashboard({
  officer,
  notifications = [],
  unreadCount = 0,
  assignedReports = [],
  onMenuClick,
  onMarkNotifRead,
  onMarkAllRead,
  onStartReport,
  onResolveReport,
}) {
  const [search, setSearch] = useState("");
  const [notifOpen, setNotifOpen] = useState(false);
  const { full, timeShort, currentTimeOfDay } = useDateTime();

  // ── Derive stats from real data ──
  const activeReports   = assignedReports.filter((r) => r.status === "active" || r.status === "ACTIVE");
  const resolvedReports = assignedReports.filter((r) => r.status === "resolved" || r.status === "RESOLVED");
  const pendingReports  = assignedReports.filter((r) => r.status === "pending" || r.status === "PENDING" || r.status === "new" || r.status === "NEW");

  // ── Separate priority cases (HIGH/URGENT) from regular incoming ──
  const priorityCases  = assignedReports.filter(
    (r) => r.priority === "HIGH" || r.priority === "URGENT" || r.urgency === "high"
  );
  const incomingReports = assignedReports.filter(
    (r) => r.priority !== "HIGH" && r.priority !== "URGENT" && r.urgency !== "high"
  );

  // ── Search filter (searches title/description/id) ──
  const searchLower = search.toLowerCase();
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

  // ── Dot colour based on priority/status ──
  const getDotColor = (report) => {
    if (report.status === "URGENT" || report.priority === "HIGH") return "#ef4444";
    if (report.status === "RESOLVED" || report.status === "resolved") return "#10b981";
    if (report.status === "PENDING" || report.status === "pending") return "#f59e0b";
    return "#3b82f6";
  };

  const initials = getInitials(officer);
  const firstName = getFirstName(officer);

  return (
    <div className={styles.wrapper}>

      {/* ══════════════ TOP BAR ══════════════ */}
      <header className={styles.topBar}>
        <div className={styles.breadcrumb}>
          <span className={styles.breadcrumbParent}>Aegis</span>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>Dashboard</span>
        </div>

        <div className={styles.topRight}>
          <div className={styles.searchBox}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.05658 6.71609C2.05658 10.2248 4.90097 13.0691 8.40964 13.0691C11.9183 13.0691 14.7627 10.2248 14.7627 6.71609C14.7627 3.20739 11.9183 0.363037 8.40964 0.363037C4.90097 0.363037 2.05658 3.20739 2.05658 6.71609Z" stroke="#F59E0B" strokeWidth="0.726063" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M0.363053 14.7635L3.91797 11.2086" stroke="#F59E0B" strokeWidth="0.726063" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              className={styles.searchInput}
              placeholder="Search cases, reports..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* ── Notification bell ── */}
          <div style={{ position: "relative" }}>
            <button
              className={styles.iconBtn}
              onClick={() => setNotifOpen((prev) => !prev)}
              aria-label="Notifications"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9395 8.75791C10.6196 8.20686 10.1441 6.64768 10.1441 4.61124C10.1441 3.38827 9.65824 2.21538 8.79346 1.3506C7.92869 0.485826 6.7558 0 5.53282 0C4.30985 0 3.13696 0.485826 2.27218 1.3506C1.40741 2.21538 0.921581 3.38827 0.921581 4.61124C0.921581 6.64826 0.44547 8.20686 0.125565 8.75791C0.043871 8.898 0.000562165 9.05715 5.43606e-06 9.21932C-0.000551293 9.38149 0.0416639 9.54094 0.122394 9.68159C0.203124 9.82224 0.319513 9.93911 0.459825 10.0204C0.600137 10.1017 0.75941 10.1446 0.921581 10.1447H3.27389C3.38028 10.6653 3.66321 11.1332 4.07483 11.4692C4.48644 11.8052 5.00148 11.9887 5.53282 11.9887C6.06417 11.9887 6.57921 11.8052 6.99082 11.4692C7.40244 11.1332 7.68537 10.6653 7.79176 10.1447H10.1441C10.3062 10.1445 10.4654 10.1016 10.6056 10.0202C10.7459 9.93886 10.8622 9.82197 10.9428 9.68134C11.0235 9.54071 11.0656 9.3813 11.0651 9.21918C11.0645 9.05706 11.0212 8.89795 10.9395 8.75791ZM5.53282 11.067C5.24682 11.0669 4.96788 10.9782 4.73439 10.813C4.50089 10.6478 4.32433 10.4144 4.22899 10.1447H6.83665C6.74132 10.4144 6.56476 10.6478 6.33126 10.813C6.09777 10.9782 5.81882 11.0669 5.53282 11.067Z" fill="#F59E0B"/>
              </svg>
              {unreadCount > 0 && <span className={styles.iconBtnDot} />}
            </button>

            {notifOpen && (
              <NotificationPanel
                notifications={notifications}
                unreadCount={unreadCount}
                onMarkRead={onMarkNotifRead}
                onMarkAllRead={onMarkAllRead}
                onClose={() => setNotifOpen(false)}
              />
            )}
          </div>

          <button className={styles.iconBtn}>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.42871 0.428574H10.4287C10.981 0.428574 11.4287 0.876294 11.4287 1.42857V1.99736C11.4287 2.42516 11.7158 2.79682 12.1109 2.96085C12.5062 3.12495 12.9664 3.06241 13.269 2.7598L13.6713 2.35748C14.0618 1.96695 14.695 1.96695 15.0855 2.35748L16.4997 3.77169C16.8903 4.16222 16.8902 4.79538 16.4997 5.18591L16.0975 5.58817C15.7948 5.8908 15.7323 6.35104 15.8964 6.74631C16.0604 7.14144 16.4321 7.42857 16.86 7.42857H17.4287C17.981 7.42857 18.4287 7.87627 18.4287 8.42857V10.4286C18.4287 10.9809 17.981 11.4286 17.4287 11.4286H16.8599C16.4321 11.4286 16.0605 11.7157 15.8964 12.1108C15.7323 12.5061 15.7948 12.9663 16.0975 13.2689L16.4997 13.6712C16.8903 14.0617 16.8903 14.6949 16.4997 15.0854L15.0855 16.4996C14.695 16.8902 14.0618 16.8902 13.6713 16.4996L13.269 16.0974C12.9664 15.7947 12.5062 15.7322 12.1109 15.8963C11.7158 16.0604 11.4287 16.432 11.4287 16.8598V17.4286C11.4287 17.9809 10.981 18.4286 10.4287 18.4286H8.42871C7.87641 18.4286 7.42871 17.9809 7.42871 17.4286V16.8599C7.42871 16.432 7.14158 16.0603 6.74645 15.8963C6.35118 15.7322 5.89094 15.7947 5.58831 16.0974L5.18603 16.4996C4.7955 16.8902 4.16234 16.8902 3.77182 16.4996L2.3576 15.0854C1.96708 14.6949 1.96708 14.0617 2.3576 13.6712L2.75994 13.2689C3.06255 12.9663 3.12509 12.5061 2.96099 12.1108C2.79696 11.7157 2.4253 11.4286 1.9975 11.4286H1.42871C0.876431 11.4286 0.428711 10.9809 0.428711 10.4286V8.42857C0.428711 7.87627 0.876431 7.42857 1.42871 7.42857H1.99748C2.42529 7.42857 2.79696 7.14145 2.961 6.74633C3.12511 6.35107 3.06257 5.89086 2.75994 5.58823L2.35762 5.18591C1.96709 4.79538 1.96709 4.16222 2.35762 3.7717L3.77183 2.35748C4.16236 1.96696 4.79552 1.96696 5.18605 2.35748L5.58837 2.7598C5.89099 3.06243 6.35121 3.12497 6.74647 2.96086C7.14159 2.79682 7.42871 2.42515 7.42871 1.99733V1.42857C7.42871 0.876294 7.87641 0.428574 8.42871 0.428574Z" stroke="#F59E0B" strokeWidth="0.857143"/>
            <path d="M11.4287 9.42857C11.4287 10.5332 10.5333 11.4286 9.42871 11.4286C8.32411 11.4286 7.42871 10.5332 7.42871 9.42857C7.42871 8.32397 8.32411 7.42857 9.42871 7.42857C10.5333 7.42857 11.4287 8.32397 11.4287 9.42857Z" stroke="#F59E0B" strokeWidth="0.857143"/>
            </svg>
          </button>

          <div className={styles.avatarBtn}>
            <span>{initials}</span>
          </div>
        </div>

        <button
          className={styles.hamburger}
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <span /><span /><span />
        </button>
      </header>

      {/* ══════════════ SCROLLABLE BODY ══════════════ */}
      <div className={styles.body} onClick={() => notifOpen && setNotifOpen(false)}>

        {/* ── Greeting ── */}
        <section className={styles.greeting}>
          <div className={styles.greetingMeta}>
            <span className={styles.greetingDate}>{full}</span>
            <span className={styles.greetingDot}>·</span>
            <span className={styles.greetingShift}>{timeShort}</span>
          </div>
          <h1 className={styles.greetingTitle}>
            Good {currentTimeOfDay}, {officer?.rank ? `${officer.rank} ` : ""}{firstName}
          </h1>
          <p className={styles.greetingSubtitle}>
            {officer?.station || officer?.command || "Lagos Island Command"} ·{" "}
            {activeReports.length} active case{activeReports.length !== 1 ? "s" : ""} assigned to you
          </p>
        </section>

        {/* ── Command Status Banner ── */}
        <div className={styles.commandBanner}>
          <div className={styles.commandBannerLeft}>
            <div className={styles.commandBannerTag}>
              <span>COMMAND STATUS</span>
              <span className={styles.commandBannerTagDot}>·</span>
              <span>{officer?.station || officer?.command || "LAGOS ISLAND"}</span>
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
            <button className={styles.bannerBtnPrimary}>
              {/* <span>🚔</span> */}
              DISPATCH UNIT
            </button>
            <button className={styles.bannerBtnSecondary}>
              📊 FULL REPORT
            </button>
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
            },
            {
              num: activeReports.length.toString(),
              label: "Active Cases",
              sub: `${priorityCases.length} high-priority`,
              subColor: priorityCases.length > 0 ? "amber" : "green",
            },
            {
              num: resolvedReports.length.toString(),
              label: "Resolved",
              sub: resolvedReports.length > 0 ? "Good progress" : "None yet",
              subColor: "green",
            },
            {
              num: unreadCount.toString(),
              label: "Unread Notifications",
              sub: unreadCount > 0 ? "Tap bell to review" : "All caught up",
              subColor: unreadCount > 0 ? "amber" : "green",
            },
          ].map((s, i) => (
            <div key={i} className={styles.statCard}>
              <span
                className={styles.statNum}
                style={{
                  color: i === 0 ? "#3b82f6" : i === 1 ? "#f59e0b" : i === 2 ? "#22C55E" : "#3b82f6",
                }}
              >
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

        {/* ══════════════ TWO-COLUMN GRID ══════════════ */}
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
                  {search ? "No priority cases match your search." : "No high-priority cases assigned."}
                </div>
              ) : (
                filteredPriority.map((c) => {
                  const caseId   = c._id || c.id || "—";
                  const shortId  = caseId.length > 8 ? caseId.slice(-6).toUpperCase() : caseId;
                  const title    = c.title || c.description || "Untitled Report";
                  const priority = c.priority || (c.urgency === "high" ? "HIGH" : "MEDIUM");
                  const status   = (c.status || "NEW").toUpperCase();
                  const submittedAt = c.createdAt
                    ? new Date(c.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                    : "—";
                  const reporter = c.reporterName || c.reportedBy || "Anonymous reporter";
                  const isActive   = status === "ACTIVE" || status === "IN_PROGRESS";
                  const isResolved = status === "RESOLVED";

                  return (
                    <div key={caseId} className={styles.caseCard}>
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
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                              </svg>
                              {typeof c.location === "string" ? c.location : c.location?.address || "Unknown location"}
                            </span>
                          )}
                          <span className={`${styles.caseStatus} ${statusClass(status, styles)}`}>
                            {status}
                          </span>
                        </div>
                      </div>

                      <div className={styles.caseFooter}>
                        <div className={styles.assigneeRow}>
                          {/* Show officer initials as assignee */}
                          <div
                            className={styles.assigneeAvatar}
                            style={{ background: getColor(initials[0] || "A") }}
                          >
                            {initials}
                          </div>
                        </div>

                        {/* Action buttons driven by report status */}
                        {!isActive && !isResolved && (
                          <button
                            className={styles.assignBtn}
                            onClick={() => onStartReport && onStartReport(caseId)}
                          >
                            START CASE →
                          </button>
                        )}
                        {isActive && (
                          <button
                            className={styles.assignBtn}
                            onClick={() => onResolveReport && onResolveReport(caseId)}
                          >
                            RESOLVE →
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

          {/* ── RIGHT: Incoming Reports ── */}
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
                  const title    = r.title || r.description || "Untitled Report";
                  const status   = (r.status || "NEW").toUpperCase();
                  const time     = r.createdAt
                    ? new Date(r.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                    : "—";
                  const detail = r.reporterName || r.reportedBy || r.category || "";

                  return (
                    <div key={reportId} className={styles.reportItem}>
                      <div
                        className={styles.reportDot}
                        style={{ background: getDotColor(r) }}
                      />
                      <div className={styles.reportBody}>
                        <span className={styles.reportTitle}>{title}</span>
                        <span className={styles.reportMeta}>
                          {time}{detail ? ` · ${detail}` : ""}
                        </span>
                      </div>
                      <span className={`${styles.reportBadge} ${statusClass(status, styles)}`}>
                        {status}
                      </span>
                    </div>
                  );
                })
              )}
            </div>

            {/* ── Notifications quick-view (replaces static "Units on Duty") ── */}
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
                      onClick={() => !n.isRead && onMarkNotifRead && onMarkNotifRead(n._id)}
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
                        <span className={styles.unitName} style={{ color: n.isRead ? "#6b7280" : "#e2e8f0" }}>
                          {n.message || n.title || "Notification"}
                        </span>
                        {n.createdAt && (
                          <span className={styles.unitLocation}>
                            {new Date(n.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
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
    </div>
  );
}