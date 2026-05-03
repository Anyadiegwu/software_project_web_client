import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Welcome from "./pages/RoleSelect";
import "../styles.css";
// import AuthPage from "./pages/AuthPage/ReporterAuthPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import CreateAccount from "./pages/AuthPage/ReporterRegisterPage";
import OfficerRegistration from "./pages/AuthPage/OfficerRegistrationPage";
// import OfficerAuthPage from "./pages/AuthPage/OfficerAuthPage"; 
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/select-role" element={<Welcome />} />
          <Route path="/reporter/sign-up" element={<CreateAccount />} />
          {/* <Route path="/reporter/sign-in" element={<AuthPage />} />
          <Route path="/officer/sign-in" element={<OfficerAuthPage />} /> */}
          <Route path="/officer/sign-up" element={<OfficerRegistration />} />
          {/* <Route path="/reporter/sign-in" element={<AuthPage defaultRole="reporter" />} />
          <Route path="/officer/sign-in"  element={<AuthPage defaultRole="officer" />} /> */}
          <Route path="/sign-in" element={<AuthPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}