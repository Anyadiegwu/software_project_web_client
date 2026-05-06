import React from "react";
import styles from "./ReporterPortal.module.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ReporterPortal = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.statusBadge}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3L4.5 8.5L2 6" stroke="#00D19A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>APP DETECTED ON THIS DEVICE</span>
        </div>

        <h1 className={styles.welcomeText}>
          Welcome back, <span className={styles.highlight}>{user?.name || "Amara"}</span>.
        </h1>

        <p className={styles.description}>
          You're signed in. The Aegis Crime Reporter experience lives entirely in the mobile app.
        </p>

        <button className={styles.mainButton}>
          <div className={styles.buttonContent}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="2"/>
              <line x1="11" y1="18" x2="13" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Continue in Open Aegis App</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>

        <div className={styles.footer}>
          <p>Not on your mobile device? <a href="#" className={styles.link}>Download for Desktop</a></p>
          <button onClick={handleLogout} className={styles.logoutBtn}>Sign out of Aegis Web</button>
        </div>
      </div>

      <div className={styles.bgDecoration}>
        <div className={styles.glow1}></div>
        <div className={styles.glow2}></div>
      </div>
    </div>
  );
};

export default ReporterPortal;
