import React, { useState } from 'react';
import styles from './RegisterPage.module.css';

const CreateAccount = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('amaka@example.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Account creation attempted with:', { displayName, email });
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>A</div>
          <span className={styles.logoText}>AEGIS</span>
        </div>
        <div className={styles.headerRight}>
          <a href="#" className={styles.backLink}>← BACK TO ROLE SELECT</a>
          <button className={styles.signInBtn}>SIGN IN</button>
        </div>
      </header>

      <div className={styles.mainContent}>
        {/* Left Sidebar */}
        <div className={styles.leftPanel}>
          <div className={styles.createAccountHeader}>
            <span className={styles.step}>CREATE ACCOUNT</span>
          </div>
          
          <h1 className={styles.title}>
            Join the <span className={styles.highlight}>community.</span>
          </h1>
          
          <p className={styles.subtitle}>
            Creating an account lets you track reports and receive updates. 
            You can still report anonymously at any time.
          </p>

          <div className={styles.benefits}>
            <div className={styles.benefitItem}>
              <div className={styles.icon}>📍</div>
              <div>
                <div className={styles.benefitTitle}>Track All Your Reports</div>
                <div className={styles.benefitDesc}>Real-time status updates for everything you submit.</div>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.icon}>🔔</div>
              <div>
                <div className={styles.benefitTitle}>Community Safety Alerts</div>
                <div className={styles.benefitDesc}>Receive notifications for incidents near you.</div>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.icon}>👥</div>
              <div>
                <div className={styles.benefitTitle}>Community Watch Access</div>
                <div className={styles.benefitDesc}>Connect with verified neighbourhood groups.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className={styles.rightPanel}>
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <span className={styles.newAccount}>NEW ACCOUNT</span>
              <h2 className={styles.formTitle}>Create your account</h2>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              {/* Display Name */}
              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  Display Name <span className={styles.optional}>(optional)</span>
                </label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="e.g. Abuja Resident, Anonymous01"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
                <p className={styles.helperText}>
                  Only shown on community activity — never on reports.
                </p>
              </div>

              {/* Email Address */}
              <div className={styles.inputGroup}>
                <label className={styles.label}>Email address <span className={styles.required}>*</span></label>
                <div className={styles.inputWrapper}>
                  <span className={styles.inputIcon}>✉️</span>
                  <input
                    type="email"
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className={styles.inputGroup}>
                <label className={styles.label}>Password <span className={styles.required}>*</span></label>
                <div className={styles.passwordWrapper}>
                  <span className={styles.inputIcon}>🔑</span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className={styles.eyeIcon}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
                <p className={styles.passwordStrength}>Strong password ✓</p>
              </div>

              {/* Terms */}
              <div className={styles.terms}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                  />
                  <span>
                    I agree to Aegis's <a href="#" className={styles.link}>Terms of Service</a> and{' '}
                    <a href="#" className={styles.link}>Privacy Policy</a>. I understand my data is protected and never shared with authorities without my consent.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button type="submit" className={styles.createButton}>
                CREATE ACCOUNT
              </button>

              <p className={styles.signInLink}>
                Already have an account? <a href="#" className={styles.link}>Sign in</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;