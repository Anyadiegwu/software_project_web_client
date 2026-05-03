// import React from 'react';
// import styles from './OfficerRegistrationPage.module.css';

// const OfficerRegistration = () => {
//   return (
//     <div className={styles.registrationContainer}>
//       <header className={styles.header}>
//         <div className={styles.logoSection}>
//           <div className={styles.logoIcon}>
//             <div className={styles.logoInitial}>A</div>
//           </div>
//           <span className={styles.aegisText}>AEGIS</span>
//         </div>
//         <div className={styles.navLinks}>
//           <a href="#" className={styles.backLink}>
//             <span className={styles.backArrow}>&larr;</span> BACK TO ROLE SELECT
//           </a>
//           <button className={styles.signInButton}>SIGN IN</button>
//         </div>
//       </header>

//       <main className={styles.mainContent}>
//         <div className={styles.sidebar}>
//           <div className={styles.sidebarTagline}>
//             <div className={styles.line}></div>
//             <span className={styles.taglineText}>OFFICER REGISTRATION</span>
//           </div>
//           <h1 className={styles.sidebarTitle}>Register credentials.</h1>
//           <p className={styles.sidebarDescription}>
//             Registration requires your official badge credentials. Access is granted only after departmental verification — 24 to 48 hours.
//           </p>

//           <div className={styles.featureList}>
//             <div className={styles.featureItem}>
//               <div className={styles.featureIcon}>
//                 <span className={styles.featureIconText}>🕒</span>
//               </div>
//               <div className={styles.featureContent}>
//                 <h3 className={styles.featureTitle}>24-48 Hour Verification</h3>
//                 <p className={styles.featureSubtitle}>Your credentials are verified with your department.</p>
//               </div>
//             </div>
//             <div className={styles.featureItem}>
//               <div className={styles.featureIcon}>
//                 <span className={styles.featureIconText}>✉️</span>
//               </div>
//               <div className={styles.featureContent}>
//                 <h3 className={styles.featureTitle}>Official Email Required</h3>
//                 <p className={styles.featureSubtitle}>Use your .gov.ng or official police force email address.</p>
//               </div>
//             </div>
//             <div className={styles.featureItem}>
//               <div className={styles.featureIcon}>
//                 <span className={styles.featureIconText}>🔒</span>
//               </div>
//               <div className={styles.featureContent}>
//                 <h3 className={styles.featureTitle}>Secure Credentialing</h3>
//                 <p className={styles.featureSubtitle}>All officer data is encrypted and audit-logged.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className={styles.formSection}>
//           <div className={styles.formTagline}>
//             <span className={styles.taglineText}>OFFICER REGISTRATION</span>
//           </div>
//           <h1 className={styles.formTitle}>Create officer account</h1>

//           <form className={styles.registrationForm}>
//             <div className={styles.formGroup}>
//               <div className={styles.halfWidthInput}>
//                 <label htmlFor="firstName">First Name *</label>
//                 <div className={styles.inputWithIcon}>
//                   <span className={styles.inputIconText}>👤</span>
//                   <input type="text" id="firstName" value="Adebayo" disabled />
//                 </div>
//               </div>
//               <div className={styles.halfWidthInput}>
//                 <label htmlFor="lastName">Last Name *</label>
//                 <div className={styles.inputWithIcon}>
//                   <span className={styles.inputIconText}>👤</span>
//                   <input type="text" id="lastName" value="Abubakar" disabled />
//                 </div>
//               </div>
//             </div>

//             <div className={styles.formGroup}>
//               <label htmlFor="badgeNumber">Badge / Service Number *</label>
//               <div className={`${styles.inputWithIcon} ${styles.inputActive}`}>
//                 <span className={styles.inputIconText}>💳</span>
//                 <input type="text" id="badgeNumber" value="NPF-2024-08412" />
//               </div>
//             </div>

//             <div className={styles.formGroup}>
//               <label htmlFor="officialEmail">Official Email *</label>
//               <div className={styles.inputWithIcon}>
//                 <span className={styles.inputIconText}>✉️</span>
//                 <input type="email" id="officialEmail" value="adekabar@npf.gov.ng" disabled />
//               </div>
//             </div>

//             <div className={styles.formGroup}>
//               <div className={styles.halfWidthInput}>
//                 <label htmlFor="departmentUnit">Department / Unit *</label>
//                 <div className={styles.inputWithIcon}>
//                   <span className={styles.inputIconText}>🏛️</span>
//                   <input type="text" id="departmentUnit" value="Jigawa Command" disabled />
//                 </div>
//               </div>
//               <div className={styles.halfWidthInput}>
//                 <label htmlFor="rank">Rank <span className={styles.optional}>(optional)</span></label>
//                 <div className={styles.inputWithIcon}>
//                   <span className={styles.inputIconText}>⭐</span>
//                   <input type="text" id="rank" value="Inspector" disabled />
//                 </div>
//               </div>
//             </div>

//             <div className={styles.formGroup}>
//               <label htmlFor="password">Password *</label>
//               <div className={styles.inputWithIcon}>
//                 <span className={styles.inputIconText}>🔒</span>
//                 <input type="password" id="password" value="............" />
//                 <button type="button" className={styles.passwordToggle}>
//                   👁️
//                 </button>
//               </div>
//               <p className={styles.passwordHint}>Medium — add symbols or numbers to strengthen</p>
//             </div>

//             <button type="submit" className={styles.submitButton}>
//               SUBMIT FOR DEPARTMENTAL VERIFICATION
//             </button>
//           </form>

//           <p className={styles.signinFooter}>
//             Already registered? <a href="#" className={styles.signinLink}>Sign in</a>
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default OfficerRegistration;

import React, { useState } from 'react';
import styles from './OfficerRegistrationPage.module.css';
import { authService } from '../../api/authService';
import { useNavigate } from 'react-router-dom';

const OfficerRegistration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    badgeNumber: '',
    officialEmail: '',
    departmentUnit: '',
    rank: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setError('');
    setSuccess('');

    if (!formData.badgeNumber) {
      setError('Badge / Service Number is required.');
      return;
    }

    if (!formData.password) {
      setError('Password is required.');
      return;
    }

    try {
      setLoading(true);

      const payload = {
        name: `${formData.firstName} ${formData.lastName}`.trim() || 'Officer',
        email: formData.officialEmail,
        badgeNumber: formData.badgeNumber,
        department: formData.departmentUnit,
        rank: formData.rank,
        password: formData.password,
      };

      const res = await authService.register('security', payload);

      console.log('Registration success:', res);

      setSuccess(
        res.message ||
          'Registration submitted. Await admin approval — you will receive an OTP by email once approved.'
      );

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        badgeNumber: '',
        officialEmail: '',
        departmentUnit: '',
        rank: '',
        password: '',
      });

      // Redirect to login after short delay
      setTimeout(() => {
        navigate('/officer/sign-in');
      }, 3000);

    } catch (err) {
      console.error(err);
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
          <button className={styles.signInButton} onClick={() => navigate('/officer/sign-in')}>
            SIGN IN
          </button>
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

          {/* Error / Success messages */}
          {error && (
            <p style={{ color: '#f87171', fontSize: '0.85rem', marginBottom: '16px' }}>
              ⚠️ {error}
            </p>
          )}
          {success && (
            <p style={{ color: '#34d399', fontSize: '0.85rem', marginBottom: '16px' }}>
              ✅ {success}
            </p>
          )}

          <form className={styles.registrationForm} onSubmit={handleSubmit}>

            {/* First Name & Last Name */}
            <div className={styles.formGroup}>
              <div className={styles.halfWidthInput}>
                <label htmlFor="firstName">First Name *</label>
                <div className={styles.inputWithIcon}>
                  <span className={styles.inputIconText}>👤</span>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Adebayo"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.halfWidthInput}>
                <label htmlFor="lastName">Last Name *</label>
                <div className={styles.inputWithIcon}>
                  <span className={styles.inputIconText}>👤</span>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Abubakar"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Badge Number */}
            <div className={styles.formGroup}>
              <label htmlFor="badgeNumber">Badge / Service Number *</label>
              <div className={`${styles.inputWithIcon} ${styles.inputActive}`}>
                <span className={styles.inputIconText}>💳</span>
                <input
                  type="text"
                  id="badgeNumber"
                  placeholder="NPF-2024-08412"
                  value={formData.badgeNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Official Email */}
            <div className={styles.formGroup}>
              <label htmlFor="officialEmail">Official Email *</label>
              <div className={styles.inputWithIcon}>
                <span className={styles.inputIconText}>✉️</span>
                <input
                  type="email"
                  id="officialEmail"
                  placeholder="adekabar@npf.gov.ng"
                  value={formData.officialEmail}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Department & Rank */}
            <div className={styles.formGroup}>
              <div className={styles.halfWidthInput}>
                <label htmlFor="departmentUnit">Department / Unit *</label>
                <div className={styles.inputWithIcon}>
                  <span className={styles.inputIconText}>🏛️</span>
                  <input
                    type="text"
                    id="departmentUnit"
                    placeholder="Jigawa Command"
                    value={formData.departmentUnit}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.halfWidthInput}>
                <label htmlFor="rank">Rank <span className={styles.optional}>(optional)</span></label>
                <div className={styles.inputWithIcon}>
                  <span className={styles.inputIconText}>⭐</span>
                  <input
                    type="text"
                    id="rank"
                    placeholder="Inspector"
                    value={formData.rank}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Password */}
            <div className={styles.formGroup}>
              <label htmlFor="password">Password *</label>
              <div className={styles.inputWithIcon}>
                <span className={styles.inputIconText}>🔒</span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              <p className={styles.passwordHint}>
                {formData.password.length === 0
                  ? 'Enter a password'
                  : formData.password.length < 6
                  ? 'Too short — use at least 6 characters'
                  : formData.password.length < 10
                  ? 'Medium — add symbols or numbers to strengthen'
                  : 'Strong password ✓'}
              </p>
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? 'SUBMITTING...' : 'SUBMIT FOR DEPARTMENTAL VERIFICATION'}
            </button>
          </form>

          <p className={styles.signinFooter}>
            Already registered?{' '}
            <a href="/officer/sign-in" className={styles.signinLink}>Sign in</a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default OfficerRegistration;