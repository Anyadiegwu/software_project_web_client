import React from "react";
import styles from "./ComingSoon.module.css";

const ComingSoon = ({ featureName, onMenuClick }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.menuBtn} onClick={onMenuClick}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <h1 className={styles.title}>{featureName}</h1>
      </header>

      <main className={styles.content}>
        <div className={styles.illustration}>
          <div className={styles.circle}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#00D19A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
              <path d="M12 6V12L16 14"/>
            </svg>
          </div>
          <div className={styles.pulse}></div>
        </div>

        <h2 className={styles.mainText}>Coming Soon</h2>
        <p className={styles.subText}>
          The <span className={styles.highlight}>{featureName}</span> module is currently under development as part of the Aegis Command Platform expansion. 
        </p>

        <div className={styles.statusBox}>
          <div className={styles.statusItem}>
            <span className={styles.statusLabel}>STATUS</span>
            <span className={styles.statusValue}>IN DEVELOPMENT</span>
          </div>
          <div className={styles.statusItem}>
            <span className={styles.statusLabel}>ESTIMATED DELIVERY</span>
            <span className={styles.statusValue}>Q3 2024</span>
          </div>
        </div>

        <button className={styles.notifyBtn}>
          Notify me when available
        </button>
      </main>

      <div className={styles.bgGlow}></div>
    </div>
  );
};

export default ComingSoon;
