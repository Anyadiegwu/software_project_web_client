import { useState } from 'react';

function App() {
  const [screen, setScreen] = useState('screen-home');

  const navigate = (target) => {
    setScreen(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (target) => (event) => {
    event.preventDefault();
    const form = event.target;
    const password = form.password?.value;
    const confirmPassword = form.confirmPassword?.value;

    if (confirmPassword !== undefined && password !== confirmPassword) {
      alert('Passwords do not match. Please confirm your password.');
      return;
    }

    navigate(target);
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">
          <span className="brand-mark">A</span>
          <span className="brand-name">Aegis</span>
        </div>
        <nav className="site-nav">
          <button type="button" className="nav-link" onClick={() => navigate('screen-home')}>Home</button>
          <button type="button" className="nav-link" onClick={() => navigate('screen-role-select')}>Get Started</button>
          <button type="button" className="nav-link" onClick={() => navigate('screen-reporter-signup')}>Create Account</button>
          <button type="button" className="nav-link" onClick={() => navigate('screen-security-register')}>Officer Register</button>
        </nav>
        <button type="button" className="nav-action" onClick={() => navigate('screen-role-select')}>Sign in</button>
      </header>

      <main className="app-main">
        <section id="screen-home" className={`screen ${screen === 'screen-home' ? 'active' : ''}`}>
          <div className="homepage-hero">
            <div className="hero-copy">
              <span className="eyebrow">Aegis — Building Trust Through Technology</span>
              <h1>Secure reporting and response for every community.</h1>
              <p>Select your role to continue. Your dashboard, permissions and experience are tailored to how you use Aegis.</p>
              <div className="hero-actions">
                <button type="button" className="primary-button" onClick={() => navigate('screen-role-select')}>Explore the platform</button>
                <button type="button" className="secondary-button" onClick={() => navigate('screen-reporter-signup')}>Continue as Crime Reporter</button>
                <button type="button" className="secondary-button" onClick={() => navigate('screen-security-register')}>Continue as Security Officer</button>
              </div>
              <div className="hero-stat-grid">
                <div className="hero-stat">
                  <strong>2.7K</strong>
                  <span>reports filed</span>
                </div>
                <div className="hero-stat">
                  <strong>98%</strong>
                  <span>verified response</span>
                </div>
                <div className="hero-stat">
                  <strong>24/7</strong>
                  <span>community coverage</span>
                </div>
              </div>
            </div>
            <div className="hero-panel-secondary">
              <article className="feature-card">
                <span className="feature-tag">One ecosystem</span>
                <h3>Crime reporters</h3>
                <p>Submit incidents quickly, stay anonymous, and track follow-up verification with real-time status updates.</p>
              </article>
              <article className="feature-card">
                <span className="feature-tag">One ecosystem</span>
                <h3>Security personnel</h3>
                <p>Access command dashboards, manage active cases, and coordinate dispatch and response workflows.</p>
              </article>
              <article className="feature-card">
                <span className="feature-tag">One ecosystem</span>
                <h3>Trusted network</h3>
                <p>Bring communities and verified responders together in a secure, private safety environment.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="screen-role-select" className={`screen ${screen === 'screen-role-select' ? 'active' : ''}`}>
          <div className="panel-header">
            <button type="button" className="back-link" onClick={() => navigate('screen-home')}>← Back to home</button>
            <span className="panel-title">Welcome to Aegis</span>
          </div>
          <p className="panel-copy">Select your role to continue. Your dashboard, permissions and experience are tailored to how you use Aegis.</p>
          <div className="role-grid">
            <button type="button" className="role-card card-reporter" onClick={() => navigate('screen-reporter-signup')}>
              <span className="role-label">Community Leader</span>
              <h3>Crime Reporter</h3>
              <p>Report incidents anonymously, track submissions, and access your community safety map.</p>
              <span className="role-action">Continue as Crime Reporter →</span>
            </button>
            <button type="button" className="role-card card-security" onClick={() => navigate('screen-security-register')}>
              <span className="role-label role-label-blue">Law Enforcement</span>
              <h3>Security Personnel</h3>
              <p>Access command dashboards, manage active cases, dispatch units, and coordinate responses.</p>
              <span className="role-action">Continue as Security Officer →</span>
            </button>
          </div>
          <p className="panel-note">Already have an account? <button type="button" className="link-button" onClick={() => navigate('screen-reporter-signin')}>Sign in</button></p>
        </section>

        <section id="screen-reporter-signup" className={`screen ${screen === 'screen-reporter-signup' ? 'active' : ''}`}>
          <div className="auth-section">
            <div className="auth-side">
              <span className="eyebrow">Reporter account</span>
              <h2>Create your Aegis reporter profile</h2>
              <p>Use this account to file reports, track incident progress, and receive local community alerts.</p>
              <div className="info-cards">
                <div className="info-card">
                  <span className="card-title">Faster reporting</span>
                  <p>Submit incident details quickly, with optional anonymity.</p>
                </div>
                <div className="info-card">
                  <span className="card-title">Status updates</span>
                  <p>Follow the response timeline and get notified as your case moves.</p>
                </div>
                <div className="info-card">
                  <span className="card-title">Community trust</span>
                  <p>Build trust by staying connected to verified responders in your area.</p>
                </div>
              </div>
            </div>
            <div className="auth-panel">
              <div className="form-header">
                <button type="button" className="back-link" onClick={() => navigate('screen-role-select')}>← Back to role select</button>
                <span className="eyebrow">Create account</span>
                <h2>Register as a reporter</h2>
              </div>
              <form className="auth-form" id="reporter-signup-form" onSubmit={handleSubmit('screen-home')}>
                <label className="field-label">
                  <span>Display name</span>
                  <input type="text" placeholder="e.g. Abuja Resident" />
                </label>
                <label className="field-label">
                  <span>Email address</span>
                  <input type="email" placeholder="amaka@example.com" required />
                </label>
                <label className="field-label">
                  <span>Password</span>
                  <div className="password-field">
                    <input name="password" type="password" placeholder="••••••••" required />
                    <span className="icon-small">👁️</span>
                  </div>
                </label>
                <label className="field-label">
                  <span>Confirm Password</span>
                  <div className="password-field">
                    <input name="confirmPassword" type="password" placeholder="••••••••" required />
                    <span className="icon-small">👁️</span>
                  </div>
                </label>
                <label className="checkbox-row">
                  <input type="checkbox" /> I agree to the Terms of Service and Privacy Policy.
                </label>
                <button type="submit" className="primary-button">Create account</button>
                <p className="panel-note">Already have an account? <button type="button" className="link-button" onClick={() => navigate('screen-reporter-signin')}>Sign in</button></p>
              </form>
            </div>
          </div>
        </section>

        <section id="screen-security-register" className={`screen ${screen === 'screen-security-register' ? 'active' : ''}`}>
          <div className="split-panel">
            <aside className="info-panel info-panel-blue">
              <span className="eyebrow">Officer Registration</span>
              <h2>Register credentials.</h2>
              <p>Registration requires your official badge credentials. Access is granted only after departmental verification — 24 to 48 hours.</p>
              <div className="info-cards">
                <div className="info-card">
                  <span className="card-title">24–48 Hour Verification</span>
                  <p>Your credentials are verified with your department.</p>
                </div>
                <div className="info-card">
                  <span className="card-title">Official Email Required</span>
                  <p>Use your gov.ng or official police force email address.</p>
                </div>
                <div className="info-card">
                  <span className="card-title">Secure Credentialing</span>
                  <p>All officer data is encrypted and audit-logged.</p>
                </div>
              </div>
            </aside>
            <div className="form-panel">
              <div className="form-header">
                <button type="button" className="back-link" onClick={() => navigate('screen-role-select')}>← Back to role select</button>
                <span className="eyebrow">Officer Registration</span>
                <h2>Create officer account</h2>
              </div>
              <form className="auth-form officer-form" id="security-register-form" onSubmit={handleSubmit('screen-home')}>
                <div className="form-grid">
                  <label className="field-label">
                    <span>First Name</span>
                    <input type="text" placeholder="Adebayo" required />
                  </label>
                  <label className="field-label">
                    <span>Last Name</span>
                    <input type="text" placeholder="Abubakar" required />
                  </label>
                  <label className="field-label">
                    <span>Badge / Service Number</span>
                    <input type="text" placeholder="NPF-2024-08412" required />
                  </label>
                  <label className="field-label">
                    <span>Official Email</span>
                    <input type="email" placeholder="adekabar@npf.gov.ng" required />
                  </label>
                  <label className="field-label">
                    <span>Department / Unit</span>
                    <input type="text" placeholder="Jigawa Command" required />
                  </label>
                  <label className="field-label">
                    <span>Rank <span className="optional">optional</span></span>
                    <input type="text" placeholder="Inspector" />
                  </label>
                  <label className="field-label full-width">
                    <span>Password</span>
                    <div className="password-field">
                      <input name="password" type="password" placeholder="••••••••" required />
                      <span className="icon-small">👁️</span>
                    </div>
                  </label>
                  <label className="field-label full-width">
                    <span>Confirm Password</span>
                    <div className="password-field">
                      <input name="confirmPassword" type="password" placeholder="••••••••" required />
                      <span className="icon-small">👁️</span>
                    </div>
                  </label>
                </div>
                <div className="password-strength">
                  <div className="strength-label">Medium — add symbols or numbers to strengthen your password</div>
                  <div className="strength-meter"><span></span></div>
                </div>
                <button type="submit" className="primary-button">Submit for departmental verification</button>
                <p className="panel-note">Already registered? <button type="button" className="link-button" onClick={() => navigate('screen-reporter-signin')}>Sign in</button></p>
              </form>
            </div>
          </div>
        </section>

        <section id="screen-reporter-signin" className={`screen ${screen === 'screen-reporter-signin' ? 'active' : ''}`}>
          <div className="split-panel">
            <aside className="info-panel">
              <span className="eyebrow">Reporter Sign In</span>
              <h2>Access your account.</h2>
              <p>Sign in to manage your reports, view incident status, and stay connected with your community.</p>
            </aside>
            <div className="form-panel">
              <div className="form-header">
                <button type="button" className="back-link" onClick={() => navigate('screen-role-select')}>← Back to role select</button>
                <span className="eyebrow">Reporter Sign In</span>
                <h2>Welcome back</h2>
              </div>
              <form className="auth-form" id="reporter-signin-form" onSubmit={handleSubmit('screen-welcome-back')}>
                <label className="field-label">
                  <span>Email address</span>
                  <input type="email" placeholder="amaka@example.com" required />
                </label>
                <label className="field-label">
                  <span>Password</span>
                  <div className="password-field">
                    <input type="password" placeholder="••••••••" required />
                    <span className="icon-small">👁️</span>
                  </div>
                </label>
                <label className="checkbox-row">
                  <input type="checkbox" /> Keep me signed in
                </label>
                <button type="submit" className="primary-button">Sign in securely</button>
                <p className="panel-note">Don't have an account? <button type="button" className="link-button" onClick={() => navigate('screen-reporter-signup')}>Create account</button></p>
              </form>
            </div>
          </div>
        </section>

        <section id="screen-welcome-back" className={`screen ${screen === 'screen-welcome-back' ? 'active' : ''}`}>
          <div className="welcome-back-panel">
            <div className="panel-header">
              <div>
                <span className="eyebrow">Welcome back</span>
                <span className="panel-title">Good to see you again.</span>
                <p className="panel-copy">Your account is ready. Continue to your dashboard to review reports, alerts, and verified response updates.</p>
              </div>
              <button type="button" className="back-link" onClick={() => navigate('screen-home')}>Sign out</button>
            </div>
            <div className="welcome-back-grid">
              <article className="panel-card">
                <span className="feature-tag">Reports</span>
                <h3>Recent activity</h3>
                <p>Continue tracking the latest incident reports you submitted and see updates from your community.</p>
              </article>
              <article className="panel-card">
                <span className="feature-tag">Alerts</span>
                <h3>Active alerts</h3>
                <p>Stay informed about priority notifications and officer dispatches near your area.</p>
              </article>
            </div>
            <div className="hero-actions">
              <button type="button" className="primary-button" onClick={() => navigate('screen-dashboard')}>Go to dashboard</button>
              <button type="button" className="secondary-button" onClick={() => navigate('screen-home')}>Return home</button>
            </div>
          </div>
        </section>

        <section id="screen-dashboard" className={`screen ${screen === 'screen-dashboard' ? 'active' : ''}`}>
          <div className="panel-header">
            <div>
              <span className="panel-title">Aegis Dashboard</span>
              <p className="panel-copy">Your interface for reports, alerts, and verified officer actions.</p>
            </div>
            <button type="button" className="back-link" onClick={() => navigate('screen-home')}>Sign out</button>
          </div>
          <div className="grid-dashboard">
            <article className="panel-card">
              <span className="feature-tag">Reports</span>
              <h3>My recent submissions</h3>
              <p>View status updates, incident details, and next steps for your last 3 reports.</p>
            </article>
            <article className="panel-card">
              <span className="feature-tag">Alerts</span>
              <h3>Community notifications</h3>
              <p>Receive nearby incident alerts and verify response times from local security teams.</p>
            </article>
            <article className="panel-card">
              <span className="feature-tag">Verified access</span>
              <h3>Officer verification</h3>
              <p>Check active officer credentials and secure channels for collaborative response.</p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
