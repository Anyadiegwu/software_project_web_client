// import React, { useState } from "react";
// import styles from "./OfficerMain.module.css";
// import OfficerSidebar from "./Officersidebar";
// import OfficerDashboard from "./OfficerDashboard";

// export default function OfficerMain() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [activePage, setActivePage] = useState("dashboard");

//   const handleNavigate = (id) => {
//     setActivePage(id);
//     setSidebarOpen(false); // close sidebar on nav (mobile)
//   };

//   return (
//     <div className={styles.officerMainWrapper}>

//       {/* Overlay — mobile/tablet only */}
//       {sidebarOpen && (
//         <div
//           className={`${styles.overlay} ${styles.overlayVisible}`}
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <div
//         className={`${styles.officerSidebar} ${sidebarOpen ? styles.officerSidebarOpen : ""}`}
//       >
//         <OfficerSidebar
//           activeId={activePage}
//           onNavigate={handleNavigate}
//         />
//       </div>

//       {/* Main content */}
//       <div className={styles.mainContent}>
//         <OfficerDashboard
//           officer={null}
//           onMenuClick={() => setSidebarOpen(true)}
//         />
//       </div>

//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import styles from "./OfficerMain.module.css";
import OfficerSidebar from "./Officersidebar";
import OfficerDashboard from "./OfficerDashboard";
import ComingSoon from "../ComingSoon";
// import { AuthContext } from "../../context/AuthContext";
import { useAuth } from "../../context/AuthContext";

// const BASE_URL = "https://software-project-backend-api.onrender.com/api";
const BASE_URL = "http://localhost:5000/api";

const apiFetch = async (endpoint) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (res.status === 401) {
    logout();
    window.location.href = "/sign-in";
    return;
  }
  if (!res.ok) throw new Error(`Failed: ${endpoint}`);
  return res.json();
};

const apiPatch = async (endpoint, body = {}) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Failed: ${endpoint}`);
  return res.json();
};

export default function OfficerMain() {
  const { logout } = useAuth();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");
  const [comingSoonItem, setComingSoonItem] = useState(null);

  // ── Data states ──
  const [officer, setOfficer] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [assignedReports, setAssignedReports] = useState([]);

  // ── UI states ──
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ── Fetch everything on mount ──
  useEffect(() => {
      const token = localStorage.getItem("token");
        if (!token) {
          window.location.href = "/sign-in";
          return;
        }
    const loadDashboard = async () => {
      try {
        setLoading(true);

        const [profileData, notifData, unreadData] = await Promise.all([
          apiFetch("/user/me"),
          apiFetch("/notifications"),
          apiFetch("/notifications/unread-count"),
        ]);

        setOfficer(profileData);
        setNotifications(notifData);
        setUnreadCount(unreadData.count);

        // NOTE: No GET /security/reports route exists yet in the backend.
        // Ask your backend dev to add:
        //   GET /api/security/reports → returns reports where assignedTo: req.user._id
        // When added, uncomment these two lines:
        const reportsData = await apiFetch("/security/reports");
        setAssignedReports(reportsData);

      } catch (err) {
        console.error("Dashboard load error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  // ── Mark single notification as read ──
  const handleMarkNotifRead = async (id) => {
    try {
      await apiPatch(`/notifications/${id}/read`);
      setNotifications((prev) =>
        prev.map((n) => (n._id === id ? { ...n, isRead: true } : n))
      );
      setUnreadCount((prev) => Math.max(0, prev - 1));
    } catch (err) {
      console.error("Mark read failed:", err);
    }
  };

  // ── Mark all notifications as read ──
  const handleMarkAllRead = async () => {
    try {
      await apiPatch("/notifications/read-all");
      setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
      setUnreadCount(0);
    } catch (err) {
      console.error("Mark all read failed:", err);
    }
  };

  // ── Start a report ──
  const handleStartReport = async (reportId) => {
    try {
      const updated = await apiPatch(`/security/report/${reportId}/start`);
      setAssignedReports((prev) =>
        prev.map((r) => (r._id === reportId ? updated.report : r))
      );
    } catch (err) {
      console.error("Start report failed:", err);
    }
  };

  // ── Resolve a report ──
  const handleResolveReport = async (reportId) => {
    try {
      const updated = await apiPatch(`/security/report/${reportId}/resolve`);
      setAssignedReports((prev) =>
        prev.map((r) => (r._id === reportId ? updated.report : r))
      );
    } catch (err) {
      console.error("Resolve report failed:", err);
    }
  };

  // ── Sign out ──
  const handleSignOut = () => {
    logout();
    window.location.href = "/sign-in";
  };

  // ── Navigate ──
  const handleNavigate = (item) => {
    if (item.comingSoon) {
      setComingSoonItem(item);
    } else {
      setComingSoonItem(null);
    }
    setActivePage(item.id);
    setSidebarOpen(false);
  };

  if (loading) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0f1e",
        color: "#00D4AA",
        fontFamily: "DM Sans, sans-serif",
        fontSize: "14px",
        letterSpacing: "2px",
      }}>
        LOADING...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0f1e",
        color: "#ef4444",
        fontFamily: "DM Sans, sans-serif",
        gap: "12px",
      }}>
        <span>Failed to load dashboard</span>
        <button
          onClick={() => window.location.reload()}
          style={{
            background: "#00D4AA",
            color: "#0a0f1e",
            border: "none",
            padding: "10px 24px",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className={styles.officerMainWrapper}>

      {/* Overlay — mobile/tablet only */}
      {sidebarOpen && (
        <div
          className={`${styles.overlay} ${styles.overlayVisible}`}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${styles.officerSidebar} ${sidebarOpen ? styles.officerSidebarOpen : ""}`}
      >
        <OfficerSidebar
          activeId={activePage}
          onNavigate={handleNavigate}
          officer={officer}
          onSignOut={handleSignOut}
        />
      </div>

      {/* Main content */}
      <div className={styles.mainContent}>
        {comingSoonItem ? (
          <ComingSoon 
            featureName={comingSoonItem.label} 
            onMenuClick={() => setSidebarOpen(true)} 
          />
        ) : (
          <OfficerDashboard
            officer={officer}
            notifications={notifications}
            unreadCount={unreadCount}
            assignedReports={assignedReports}
            onMenuClick={() => setSidebarOpen(true)}
            onMarkNotifRead={handleMarkNotifRead}
            onMarkAllRead={handleMarkAllRead}
            onStartReport={handleStartReport}
            onResolveReport={handleResolveReport}
          />
        )}
      </div>

    </div>
  );
}