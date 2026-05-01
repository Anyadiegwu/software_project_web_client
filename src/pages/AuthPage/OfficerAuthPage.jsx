import React from 'react';
import RoleSelectPanel from './RoleSelectPanel';
import styles from './OfficerLoginPage.module.css';

const OfficerLoginPage = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* Top Navigation Bar */}
      <header className={styles.topHeader}>
        <div className={styles.logoContainer}>
          <div className={styles.logoSquare}>A</div>
          <span className={styles.brandName}>AEGIS</span>
        </div>
        <div className={styles.centerNav}>
          <a href="#" className={styles.backLink}>
            ← BACK TO ROLE SELECT
          </a>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.signUpBtn}>SIGN UP</button>
        </div>
      </header>

      <main className={styles.mainLayout}>
        {/* Left side inherited from your existing module */}
        <RoleSelectPanel />

        {/* Right side: Officer Login Portal */}
        <div className={styles.formSection}>
          <div className={styles.contentContainer}>
            <header className={styles.formHeader}>
              <p className={styles.superTitle}>SIGN IN</p>
              <h1 className={styles.mainTitle}>Welcome back</h1>
              <p className={styles.description}>
                Sign in to view your reports and submit new ones.
              </p>
            </header>

            <div className={styles.alertBox}>
              <div className={styles.alertIcon}>🔒</div>
              <div className={styles.alertText}>
                <strong>Anonymous login available</strong>
                <p>You can also report incidents without creating an account using the button below.</p>
              </div>
            </div>

            <form className={styles.loginForm}>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email address <span className={styles.required}>*</span></label>
                <div className={styles.inputWrapper}>
                  <span className={styles.icon}>✉️</span>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="amaka@example.com" 
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="password">Password <span className={styles.required}>*</span></label>
                <div className={styles.inputWrapper}>
                  <span className={styles.icon}>🔑</span>
                  <input 
                    type="password" 
                    id="password" 
                    placeholder="••••••••" 
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.formActions}>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" className={styles.checkbox} defaultChecked />
                  Keep me signed in
                </label>
                <a href="#" className={styles.forgotLink}>Forgot password?</a>
              </div>

              <button type="submit" className={styles.submitBtn}>
                SIGN IN SECURELY
              </button>

              <button type="button" className={styles.anonymousBtn}>
                Continue Anonymously — No Account Needed
              </button>
            </form>

            <footer className={styles.formFooter}>
              Don't have an account? <a href="/officer/sign-up" className={styles.createLink}>Create one free</a>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OfficerLoginPage;