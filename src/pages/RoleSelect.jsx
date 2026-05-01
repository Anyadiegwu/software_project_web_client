import React from "react";
import styles from "./RoleSelect.module.css";

export default function AegisRoleSelect() {

  return (
    <div className={styles.container}>
      {/* Close Button */}
      <a href="/" className={styles.closeBtn}>×</a>

      {/* Header */}
      <div className={styles.header}>
        <h1>
          Welcome to <span>Aegis</span>
        </h1>
        <p>
          Select your role to continue. Your dashboard, permissions and
          experience are tailored to how you use Aegis.
        </p>
      </div>

      {/* Cards */}
      <div className={styles.cardWrapper}>
        {/* Crime Reporter */}
        <a className={`${styles.card} ${styles.leftCard}`} href="/reporter/sign-in">
          <div className={styles.iconBox}>🛡️</div>

          <p className={styles.roleTag}>COMMUNITY LEADER</p>
          <h2>Crime Reporter</h2>

          <p className={styles.description}>
            Report incidents anonymously, track your submissions, and access
            your community safety map. No identity required.
          </p>

          <button className={styles.primaryBtn}>
            Continue as Crime Reporter →
          </button>
        </a>

        {/* Security Personnel */}
        <a className={`${styles.card} ${styles.rightCard}`} href="/officer/sign-in">
          <div className={styles.iconBox}>🛡️</div>

          <p className={styles.roleTagBlue}>LAW ENFORCEMENT</p>
          <h2>Security Personnel</h2>

          <p className={styles.description}>
            Access the command dashboard, manage active cases, dispatch units,
            and coordinate incident response.
          </p>

          <button className={styles.secondaryBtn}>
            Continue as Security Officer →
          </button>
        </a>
      </div>

      {/* Footer */}
      <p className={styles.footer}>
        Already have one? <span>Sign in</span>
      </p>
    </div>
  );
}