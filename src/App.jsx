// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Welcome from "./pages/RoleSelect";
import "../styles.css";
import AuthPage from "./pages/AuthPage/AuthPage";
import CreateAccount from "./pages/AuthPage/RegisterPage";
import OfficerRegistration from "./pages/AuthPage/OfficerRegistrationPage";
import OfficerAuthPage from "./pages/AuthPage/OfficerAuthPage"; 

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/select-role" element={<Welcome />} />
        <Route path="/reporter/sign-in" element={<AuthPage />} />
        <Route path="/reporter/sign-up" element={<CreateAccount />} />
        <Route path="/officer/sign-in" element={<OfficerAuthPage />} />
        <Route path="/officer/sign-up" element={<OfficerRegistration />} />
      </Routes>
    </Router>
  );
}