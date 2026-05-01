export default function Welcome() {
  return (
    <div className="welcome">
      <div className="overlay" />

      <h1 className="welcome-title">
        Welcome to <span className="highlight">Aegis</span>
      </h1>

      <p className="welcome-subtitle">
        Select your role to continue. Your dashboard, permissions and experience are tailored to how you use Aegis.
      </p>

      <div className="card-container">
        <div className="card card-left">
          <div className="icon" />
          <h2 className="card-tag">COMMUNITY LEADER</h2>
          <h1 className="card-title">Crime Reporter</h1>
          <p className="card-text">
            Report incidents anonymously, track your submissions, and access your community safety map.
          </p>
          <button className="link-btn">Continue as Crime Reporter →</button>
        </div>

        <div className="card card-right">
          <div className="icon" />
          <h2 className="card-tag blue">LAW ENFORCEMENT</h2>
          <h1 className="card-title">Security Personnel</h1>
          <p className="card-text">
            Access the command dashboard, manage active cases, dispatch units, and coordinate response.
          </p>
          <button className="link-btn blue">Continue as Security Officer →</button>
        </div>
      </div>

      <p className="signin">
        Already have one? <span className="highlight">Sign in</span>
      </p>
    </div>
  );
}
