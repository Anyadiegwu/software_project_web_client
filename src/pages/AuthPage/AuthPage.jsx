import React from "react";
import styles from "./AuthPage.module.css";
import RoleSelectPanel from "./RoleSelectPanel";

export default function AuthPage() {
  return (
    <div className={styles.container}>
      {/* Top Nav */}
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <div className={styles.logoBox}>A</div>
          <span>AEGIS</span>
        </div>

        <div className={styles.navCenter}>← BACK TO ROLE SELECT</div>

        <a href="/reporter/sign-up" className={styles.signupBtn}>
          SIGN UP
        </a>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* LEFT SIDE (Reusable Role Panel) */}
        <RoleSelectPanel />

        {/* RIGHT SIDE (FORM) */}
        <div className={styles.formSection}>
          <p className={styles.signinLabel}>SIGN IN</p>
          <h1 className={styles.title}>Welcome back</h1>
          <p className={styles.subtitle}>
            Sign in to view your reports and submit new ones.
          </p>

          {/* Info Banner */}
          <div className={styles.infoBox}>
            <span className={styles.lock}>🔒</span>
            <div>
              <strong>Anonymous login available</strong>
              <p>
                You can also report incidents without creating an account using
                the button below.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className={styles.formGroup}>
            <label>Email address *</label>
            <input
              type="email"
              placeholder="amaka@example.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Password *</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <div className={styles.formExtras}>
            <label>
              <input type="checkbox" defaultChecked />
              Keep me signed in
            </label>
            <span className={styles.forgot}>Forgot password?</span>
          </div>

          <button className={styles.primaryBtn}>
            SIGN IN SECURELY
          </button>

          <button className={styles.secondaryBtn}>
            Continue Anonymously — No Account Needed
          </button>

          <p className={styles.footer}>
            Don’t have an account? <a href="/reporter/sign-up">Create one free</a>
          </p>
        </div>
      </div>
    </div>
  );
}