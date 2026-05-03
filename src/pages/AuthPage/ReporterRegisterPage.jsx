import React, { useState } from 'react';
import styles from './ReporterRegisterPage.module.css';
import { authService } from "../../api/authService";
import { useAuth } from "../../context/AuthContext";

const CreateAccount = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(true);

  // ✅ NEW: loading + error state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // const { registerUser } = useAuth(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    // ✅ basic validation (important)
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    if (!agreed) {
      setError("You must agree to the terms");
      return;
    }

    try {
      setLoading(true);
      setError('');

      // ✅ map displayName → name (backend requirement)
      const payload = {
        name: displayName || "Anonymous", // fallback if empty
        email,
        password,
      };

      const res = await authService.register("reporter", payload);
      console.log("FULL RESPONSE:", res);
      setDisplayName('');
      setEmail('');
      setPassword('');

      
      console.log("Signup success:", res);
      alert("Account created successfully");

      window.location.href = "/reporter/sign-in"; 

    } catch (err) {
      console.error(err);
      setError(err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="6.19394" fill="#00D4AA"/>
              <path d="M21.1978 13.2325L26.7924 27.6581C27.0081 28.1821 27.2393 28.5597 27.4859 28.7909C27.7325 29.0066 27.956 29.1222 28.1563 29.1376V29.6C27.6015 29.5692 26.9542 29.5538 26.2144 29.5538C25.4746 29.5384 24.7195 29.5306 23.9489 29.5306C23.1628 29.5306 22.4231 29.5384 21.7295 29.5538C21.036 29.5538 20.4812 29.5692 20.065 29.6V29.1376C20.851 29.1068 21.3442 28.9758 21.5446 28.7446C21.7603 28.498 21.7141 27.9817 21.4059 27.1957L17.707 16.9545L18.1694 16.1453L14.9791 24.4447C14.5938 25.4465 14.3549 26.2556 14.2624 26.8721C14.1853 27.4731 14.2239 27.9355 14.378 28.2592C14.5321 28.5828 14.7787 28.8063 15.1178 28.9296C15.4568 29.0529 15.8576 29.1222 16.3199 29.1376V29.6C15.7497 29.5692 15.2334 29.5538 14.771 29.5538C14.3241 29.5384 13.8309 29.5306 13.2915 29.5306C12.9986 29.5306 12.6827 29.5384 12.3436 29.5538C12.02 29.5538 11.7425 29.5692 11.5114 29.6V29.1376C11.8658 29.076 12.2126 28.8525 12.5517 28.4672C12.9062 28.0665 13.2683 27.3884 13.6382 26.4328L18.7704 13.2325C19.1403 13.2633 19.541 13.2787 19.9726 13.2787C20.4195 13.2787 20.8279 13.2633 21.1978 13.2325ZM22.0069 22.942V23.4044H15.1178L15.349 22.942H22.0069Z" fill="#0A0F1E"/>
            </svg>
          <span className={styles.logoText}>AEGIS</span>
        </div>
          <a href="/select-role" className={styles.backLink}>← BACK TO ROLE SELECT</a>
          <a href="/reporter/sign-in" className={styles.signInBtn}>SIGN IN</a>
      </header>

      <div className={styles.mainContent}>
        {/* Left Panel unchanged */}
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

        {/* Right Panel */}
        <div className={styles.rightPanel}>
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <span className={styles.newAccount}>NEW ACCOUNT</span>
              <h2 className={styles.formTitle}>Create your account</h2>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              
              {/* ✅ ERROR DISPLAY */}
              {error && <p style={{ color: "red" }}>{error}</p>}

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

              {/* Email */}
              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  Email address <span className={styles.required}>*</span>
                </label>
                <div className={styles.inputWrapper}>
                  <span className={styles.inputIcon}>✉️</span>
                  <input
                    type="email"
                    className={styles.input}
                    placeholder='amaka@example.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  Password <span className={styles.required}>*</span>
                </label>
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
                    <a href="#" className={styles.link}>Privacy Policy</a>.
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button 
                type="submit" 
                className={styles.createButton}
                disabled={loading}
                
              >
                {loading ? "CREATING..." : "CREATE ACCOUNT"}
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