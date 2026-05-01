import React from 'react';
import styles from './OfficerRegistrationPage.module.css';

const OfficerRegistration = () => {
  return (
    <div className={styles.registrationContainer}>
      <header className={styles.header}>
        <div className={styles.logoSection}>
          <div className={styles.logoIcon}>
            <div className={styles.logoInitial}>A</div>
          </div>
          <span className={styles.aegisText}>AEGIS</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#" className={styles.backLink}>
            <span className={styles.backArrow}>&larr;</span> BACK TO ROLE SELECT
          </a>
          <button className={styles.signInButton}>SIGN IN</button>
        </div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarTagline}>
            <div className={styles.line}></div>
            <span className={styles.taglineText}>OFFICER REGISTRATION</span>
          </div>
          <h1 className={styles.sidebarTitle}>Register credentials.</h1>
          <p className={styles.sidebarDescription}>
            Registration requires your official badge credentials. Access is granted only after departmental verification — 24 to 48 hours.
          </p>

          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <span className={styles.featureIconText}>🕒</span>
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>24-48 Hour Verification</h3>
                <p className={styles.featureSubtitle}>Your credentials are verified with your department.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <span className={styles.featureIconText}>✉️</span>
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Official Email Required</h3>
                <p className={styles.featureSubtitle}>Use your .gov.ng or official police force email address.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <span className={styles.featureIconText}>🔒</span>
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Secure Credentialing</h3>
                <p className={styles.featureSubtitle}>All officer data is encrypted and audit-logged.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <div className={styles.formTagline}>
            <span className={styles.taglineText}>OFFICER REGISTRATION</span>
          </div>
          <h1 className={styles.formTitle}>Create officer account</h1>

          <form className={styles.registrationForm}>
            <div className={styles.formGroup}>
              <div className={styles.halfWidthInput}>
                <label htmlFor="firstName">First Name *</label>
                <div className={styles.inputWithIcon}>
                  <span className={styles.inputIconText}>👤</span>
                  <input type="text" id="firstName" value="Adebayo" disabled />
                </div>
              </div>
              <div className={styles.halfWidthInput}>
                <label htmlFor="lastName">Last Name *</label>
                <div className={styles.inputWithIcon}>
                  <span className={styles.inputIconText}>👤</span>
                  <input type="text" id="lastName" value="Abubakar" disabled />
                </div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="badgeNumber">Badge / Service Number *</label>
              <div className={`${styles.inputWithIcon} ${styles.inputActive}`}>
                <span className={styles.inputIconText}>💳</span>
                <input type="text" id="badgeNumber" value="NPF-2024-08412" />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="officialEmail">Official Email *</label>
              <div className={styles.inputWithIcon}>
                <span className={styles.inputIconText}>✉️</span>
                <input type="email" id="officialEmail" value="adekabar@npf.gov.ng" disabled />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.halfWidthInput}>
                <label htmlFor="departmentUnit">Department / Unit *</label>
                <div className={styles.inputWithIcon}>
                  <span className={styles.inputIconText}>🏛️</span>
                  <input type="text" id="departmentUnit" value="Jigawa Command" disabled />
                </div>
              </div>
              <div className={styles.halfWidthInput}>
                <label htmlFor="rank">Rank <span className={styles.optional}>(optional)</span></label>
                <div className={styles.inputWithIcon}>
                  <span className={styles.inputIconText}>⭐</span>
                  <input type="text" id="rank" value="Inspector" disabled />
                </div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password *</label>
              <div className={styles.inputWithIcon}>
                <span className={styles.inputIconText}>🔒</span>
                <input type="password" id="password" value="............" />
                <button type="button" className={styles.passwordToggle}>
                  👁️
                </button>
              </div>
              <p className={styles.passwordHint}>Medium — add symbols or numbers to strengthen</p>
            </div>

            <button type="submit" className={styles.submitButton}>
              SUBMIT FOR DEPARTMENTAL VERIFICATION
            </button>
          </form>

          <p className={styles.signinFooter}>
            Already registered? <a href="#" className={styles.signinLink}>Sign in</a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default OfficerRegistration;