import React from "react";
import styles from "./RoleSelectPanel.module.css";

export default function RoleSelectPanel() {
  return (
    <div className={styles.panel}>
      <h1>Select your role.</h1>
      <p className={styles.desc}>
        Your identity is always protected. You choose how much — or how little —
        to reveal. Full anonymity is always available.
      </p>

      {/* Crime Reporter */}
      <div className={`${styles.card} ${styles.active}`}>
        <div className={styles.icon}>🛡️</div>
        <p className={styles.tag}>COMMUNITY LEADER</p>
        <h3>Crime Reporter</h3>
        <p>
          Report incidents anonymously, track your submissions, and access your
          community safety map. No identity required.
        </p>
      </div>

      {/* Security */}
      <div className={styles.card}>
        <div className={styles.icon}>🛡️</div>
        <p className={styles.tagBlue}>LAW ENFORCEMENT</p>
        <h3>Security Personnel</h3>
        <p>
          Access the command dashboard, manage active cases, dispatch units, and
          coordinate incident response.
        </p>
      </div>
    </div>
  );
}