// import React, { useState } from "react";
// import styles from "./AuthPage.module.css";
// import { authService } from "../../api/authService";
// import { useAuth } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";


// const EyeOpen = () => (
//   <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M19.299 6.18203C19.2701 6.11875 18.5857 4.59922 17.074 3.0875C15.0514 1.06797 12.5021 0 9.68964 0C6.87714 0 4.32792 1.06797 2.30761 3.0875C0.795888 4.59922 0.111513 6.11875 0.0802628 6.18203C0.0273355 6.30203 0 6.43174 0 6.56289C0 6.69404 0.0273355 6.82375 0.0802628 6.94375C0.109169 7.00781 0.793544 8.52656 2.30604 10.0383C4.32792 12.0578 6.87714 13.125 9.68964 13.125C12.5021 13.125 15.0514 12.0578 17.0709 10.0383C18.5834 8.52656 19.2678 7.00781 19.2967 6.94375C19.35 6.82392 19.3777 6.69429 19.3781 6.56314C19.3785 6.43199 19.3516 6.30219 19.299 6.18203ZM15.7006 8.76016C14.0232 10.4117 12.0014 11.25 9.68964 11.25C7.37792 11.25 5.35604 10.4117 3.68104 8.75937C3.02197 8.10718 2.45501 7.36807 1.99589 6.5625C2.45516 5.75726 3.0221 5.01842 3.68104 4.36641C5.35683 2.71328 7.37792 1.875 9.68964 1.875C12.0014 1.875 14.0225 2.71328 15.6982 4.36641C16.3573 5.01836 16.9242 5.75721 17.3834 6.5625C16.9242 7.36801 16.3572 8.10712 15.6982 8.75937L15.7006 8.76016ZM9.68964 3.125C9.00976 3.125 8.34516 3.32661 7.77987 3.70432C7.21457 4.08204 6.77398 4.6189 6.5138 5.24703C6.25363 5.87515 6.18555 6.56631 6.31819 7.23312C6.45083 7.89993 6.77822 8.51244 7.25896 8.99318C7.7397 9.47392 8.35221 9.80131 9.01901 9.93395C9.68582 10.0666 10.377 9.99851 11.0051 9.73834C11.6332 9.47816 12.1701 9.03757 12.5478 8.47227C12.9255 7.90698 13.1271 7.24237 13.1271 6.5625C13.1261 5.65114 12.7636 4.77739 12.1192 4.13296C11.4747 3.48853 10.601 3.12603 9.68964 3.125ZM9.68964 8.125C9.3806 8.125 9.07851 8.03336 8.82156 7.86167C8.56461 7.68998 8.36434 7.44595 8.24608 7.16044C8.12781 6.87493 8.09687 6.56077 8.15716 6.25767C8.21745 5.95458 8.36626 5.67617 8.58478 5.45765C8.8033 5.23913 9.08171 5.09031 9.38481 5.03002C9.6879 4.96973 10.0021 5.00068 10.2876 5.11894C10.5731 5.2372 10.8171 5.43747 10.9888 5.69442C11.1605 5.95137 11.2521 6.25347 11.2521 6.5625C11.2521 6.9769 11.0875 7.37433 10.7945 7.66735C10.5015 7.96038 10.104 8.125 9.68964 8.125Z" fill="#F9FAFB"/>
//   </svg>
// );

// const EyeClosed = () => (
//   <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M16.7534 5.46398C16.815 5.57088 16.8549 5.68886 16.8709 5.81119C16.8868 5.93351 16.8785 6.05778 16.8465 6.1769C16.8144 6.29602 16.7592 6.40766 16.684 6.50544C16.6088 6.60322 16.515 6.68523 16.4081 6.74679C16.3012 6.80835 16.1832 6.84824 16.0609 6.86421C15.9386 6.88017 15.8143 6.87188 15.6952 6.83981C15.5761 6.80775 15.4644 6.75253 15.3667 6.67732C15.2689 6.60211 15.1869 6.50838 15.1253 6.40148L13.8081 4.09679C13.0731 4.55915 12.2807 4.92319 11.4511 5.1796L11.8644 7.65148C11.905 7.89669 11.8466 8.14801 11.702 8.35018C11.5574 8.55235 11.3385 8.68883 11.0933 8.7296C11.0417 8.73878 10.9894 8.74323 10.937 8.74288C10.7156 8.74266 10.5015 8.66409 10.3325 8.5211C10.1634 8.37811 10.0505 8.17992 10.0136 7.96163L9.61125 5.55538C8.83082 5.64184 8.04324 5.64184 7.26281 5.55538L6.86437 7.96398C6.82743 8.18253 6.71425 8.38093 6.54491 8.52395C6.37557 8.66698 6.16103 8.74537 5.93937 8.74523C5.887 8.74557 5.83469 8.74113 5.78312 8.73195C5.66169 8.7115 5.54548 8.66733 5.44113 8.60196C5.33677 8.53658 5.24631 8.4513 5.17493 8.35096C5.10354 8.25063 5.05261 8.13721 5.02507 8.01719C4.99752 7.89717 4.99389 7.7729 5.01437 7.65148L5.42766 5.17335C4.59805 4.91694 3.80562 4.5529 3.07062 4.09054L1.75344 6.40148C1.69188 6.50838 1.60987 6.60211 1.51209 6.67732C1.41431 6.75253 1.30267 6.80775 1.18355 6.83981C1.06443 6.87188 0.940158 6.88017 0.817834 6.86421C0.695511 6.84824 0.577529 6.80835 0.470625 6.74679C0.36372 6.68523 0.269987 6.60322 0.194778 6.50544C0.119568 6.40766 0.0643543 6.29602 0.0322891 6.1769C0.000223878 6.05778 -0.008065 5.93351 0.00789591 5.81119C0.0238568 5.68886 0.0637549 5.57088 0.125312 5.46398L1.56437 2.95226C1.07669 2.51173 0.624507 2.03342 0.212031 1.52179C0.0664386 1.32761 0.00182583 1.08453 0.0317826 0.843683C0.0617394 0.602838 0.183931 0.382996 0.372657 0.230396C0.561382 0.0777969 0.801933 0.00433319 1.04371 0.0254578C1.28549 0.0465823 1.50966 0.160648 1.66906 0.343664C2.92219 1.89523 5.11437 3.74523 8.43937 3.74523C11.7644 3.74523 13.9566 1.89523 15.2097 0.343664C15.3665 0.152089 15.5927 0.0303233 15.839 0.00494243C16.0853 -0.0204385 16.3316 0.0526259 16.5242 0.20819C16.7168 0.363754 16.84 0.589187 16.867 0.835288C16.894 1.08139 16.8226 1.32818 16.6683 1.52179C16.2553 2.03348 15.8026 2.51179 15.3144 2.95226L16.7534 5.46398Z" fill="#F9FAFB"/>
//   </svg>
// );

// const LockIcon = () => (
//   <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M13.75 5.625H11.25V3.75C11.25 2.75544 10.8549 1.80161 10.1517 1.09835C9.44839 0.395088 8.49456 0 7.5 0C6.50544 0 5.55161 0.395088 4.84835 1.09835C4.14509 1.80161 3.75 2.75544 3.75 3.75V5.625H1.25C0.918479 5.625 0.600537 5.7567 0.366116 5.99112C0.131696 6.22554 0 6.54348 0 6.875V15.625C0 15.9565 0.131696 16.2745 0.366116 16.5089C0.600537 16.7433 0.918479 16.875 1.25 16.875H13.75C14.0815 16.875 14.3995 16.7433 14.6339 16.5089C14.8683 16.2745 15 15.9565 15 15.625V6.875C15 6.54348 14.8683 6.22554 14.6339 5.99112C14.3995 5.7567 14.0815 5.625 13.75 5.625ZM8.125 11.768V13.75C8.125 13.9158 8.05915 14.0747 7.94194 14.1919C7.82473 14.3092 7.66576 14.375 7.5 14.375C7.33424 14.375 7.17527 14.3092 7.05806 14.1919C6.94085 14.0747 6.875 13.9158 6.875 13.75V11.768C6.45799 11.6205 6.10653 11.3304 5.88273 10.9489C5.65893 10.5674 5.57721 10.1191 5.652 9.68314C5.7268 9.2472 5.95329 8.85174 6.29146 8.56665C6.62963 8.28156 7.0577 8.1252 7.5 8.1252C7.9423 8.1252 8.37037 8.28156 8.70854 8.56665C9.04671 8.85174 9.2732 9.2472 9.348 9.68314C9.42279 10.1191 9.34107 10.5674 9.11727 10.9489C8.89347 11.3304 8.54201 11.6205 8.125 11.768ZM10 5.625H5V3.75C5 3.08696 5.26339 2.45107 5.73223 1.98223C6.20107 1.51339 6.83696 1.25 7.5 1.25C8.16304 1.25 8.79893 1.51339 9.26777 1.98223C9.73661 2.45107 10 3.08696 10 3.75V5.625Z" fill="#F59E0B"/>
//   </svg>
// );

// const AegisLogo = () => (
//   <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <rect width="40" height="40" rx="6.19394" fill="#00D4AA"/>
//     <path d="M21.1978 13.2325L26.7924 27.6581C27.0081 28.1821 27.2393 28.5597 27.4859 28.7909C27.7325 29.0066 27.956 29.1222 28.1563 29.1376V29.6C27.6015 29.5692 26.9542 29.5538 26.2144 29.5538C25.4746 29.5384 24.7195 29.5306 23.9489 29.5306C23.1628 29.5306 22.4231 29.5384 21.7295 29.5538C21.036 29.5538 20.4812 29.5692 20.065 29.6V29.1376C20.851 29.1068 21.3442 28.9758 21.5446 28.7446C21.7603 28.498 21.7141 27.9817 21.4059 27.1957L17.707 16.9545L18.1694 16.1453L14.9791 24.4447C14.5938 25.4465 14.3549 26.2556 14.2624 26.8721C14.1853 27.4731 14.2239 27.9355 14.378 28.2592C14.5321 28.5828 14.7787 28.8063 15.1178 28.9296C15.4568 29.0529 15.8576 29.1222 16.3199 29.1376V29.6C15.7497 29.5692 15.2334 29.5538 14.771 29.5538C14.3241 29.5384 13.8309 29.5306 13.2915 29.5306C12.9986 29.5306 12.6827 29.5384 12.3436 29.5538C12.02 29.5538 11.7425 29.5692 11.5114 29.6V29.1376C11.8658 29.076 12.2126 28.8525 12.5517 28.4672C12.9062 28.0665 13.2683 27.3884 13.6382 26.4328L18.7704 13.2325C19.1403 13.2633 19.541 13.2787 19.9726 13.2787C20.4195 13.2787 20.8279 13.2633 21.1978 13.2325ZM22.0069 22.942V23.4044H15.1178L15.349 22.942H22.0069Z" fill="#0A0F1E"/>
//   </svg>
// );

// const ShieldIcon = () => (
//   <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <rect width="52.1863" height="52.9938" rx="7.75155" fill="#3B82F6" fillOpacity="0.12"/>
//     <path d="M34.1677 16H18.0186C17.4833 16 16.9698 16.2127 16.5912 16.5912C16.2127 16.9698 16 17.4833 16 18.0186V23.6708C16 29.1504 18.6565 32.4741 20.8851 34.2979C23.2782 36.255 25.6733 36.9221 25.7742 36.9514C25.9831 37.0079 26.2032 37.0079 26.4121 36.9514C26.513 36.9231 28.9082 36.255 31.3012 34.2979C33.5298 32.4741 36.1863 29.1504 36.1863 23.6708V18.0186C36.1863 17.4833 35.9737 16.9698 35.5951 16.5912C35.2165 16.2127 34.7031 16 34.1677 16ZM33.764 23.6708C33.764 27.2751 32.4428 30.2001 29.8367 32.3661C28.7197 33.2878 27.4537 34.0124 26.0932 34.5089C24.7325 34.0128 23.4665 33.2881 22.3496 32.3661C19.7436 30.2001 18.4224 27.2751 18.4224 23.6708V18.4224H33.764V23.6708Z" fill="#F59E0B"/>
//   </svg>
// );


// /* ─────────────────────────────────────────────
//    REPORTER FORM
// ───────────────────────────────────────────── */
// function ReporterForm() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const { loginUser } = useAuth();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       setError("");
//       const res = await authService.login("reporter", formData);
//       loginUser(res, "reporter");
//     } catch (err) {
//       setError(err.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className={styles.alertBox}>
//         <div className={styles.alertIcon}><LockIcon /></div>
//         <div className={styles.alertText}>
//           <strong>Anonymous login available</strong>
//           <p>You can also report incidents without creating an account.</p>
//         </div>
//       </div>

//       {error && <p className={styles.errorMsg}>⚠️ {error}</p>}

//       <form className={styles.loginForm} onSubmit={handleLogin}>
//         <div className={styles.inputGroup}>
//           <label htmlFor="reporter-email">
//             Email address <span className={styles.required}>*</span>
//           </label>
//           <div className={styles.inputWrapper}>
//             <span className={styles.icon}>✉️</span>
//             <input
//               type="email"
//               id="reporter-email"
//               placeholder="amaka@example.com"
//               className={styles.input}
//               value={formData.email}
//               onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setError(""); }}
//             />
//           </div>
//         </div>

//         <div className={styles.inputGroup}>
//           <label htmlFor="reporter-password">
//             Password <span className={styles.required}>*</span>
//           </label>
//           <div className={styles.inputWrapper}>
//             <span className={styles.icon}>🔑</span>
//             <input
//               type={showPassword ? "text" : "password"}
//               id="reporter-password"
//               placeholder="••••••••"
//               className={styles.input}
//               value={formData.password}
//               onChange={(e) => { setFormData({ ...formData, password: e.target.value }); setError(""); }}
//             />
//             <button type="button" className={styles.eyeBtn} onClick={() => setShowPassword(!showPassword)}>
//               {showPassword ? <EyeClosed /> : <EyeOpen />}
//             </button>
//           </div>
//         </div>

//         <div className={styles.formActions}>
//           <label className={styles.checkboxLabel}>
//             <input type="checkbox" className={styles.checkbox} defaultChecked />
//             Keep me signed in
//           </label>
//           <a href="/forgot-password" className={styles.forgotLink}>Forgot password?</a>
//         </div>

//         <button type="submit" className={styles.submitBtn} disabled={loading}>
//           {loading ? "SIGNING IN..." : "SIGN IN SECURELY"}
//         </button>
//       </form>

//       <button type="button" className={styles.anonymousBtn}>
//         Continue Anonymously — No Account Needed
//       </button>

//       <footer className={styles.formFooter}>
//         Don't have an account?{" "}
//         <a href="/reporter/sign-up" className={styles.createLink}>Create one free</a>
//       </footer>
//     </>
//   );
// }


// /* ─────────────────────────────────────────────
//    OFFICER FORM
// ───────────────────────────────────────────── */
// function OfficerForm() {
//   const navigate = useNavigate();
//   const { loginUser } = useAuth();
//   const [formData, setFormData] = useState({ identifier: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//     setError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.identifier || !formData.password) {
//       setError("Please enter your email (or badge number) and password.");
//       return;
//     }
//     try {
//       setLoading(true);
//       const res = await authService.login("security", formData);
//       loginUser(res, "security");
//       navigate("/officer/dashboard");
//     } catch (err) {
//       setError(err.message || "Login failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className={styles.alertBox}>
//         <div className={styles.alertIcon}><LockIcon /></div>
//         <div className={styles.alertText}>
//           <strong>Pending approval?</strong>
//           <p>Your account must be approved by an admin before you can sign in.</p>
//         </div>
//       </div>

//       {error && <p className={styles.errorMsg}>⚠️ {error}</p>}

//       <form className={styles.loginForm} onSubmit={handleSubmit}>
//         <div className={styles.inputGroup}>
//           <label htmlFor="identifier">
//             Email or Badge Number <span className={styles.required}>*</span>
//           </label>
//           <div className={styles.inputWrapper}>
//             <span className={styles.icon}>✉️</span>
//             <input
//               type="text"
//               id="identifier"
//               placeholder="amaka@npf.gov.ng or NPF-00123"
//               className={styles.input}
//               value={formData.identifier}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className={styles.inputGroup}>
//           <label htmlFor="password">
//             Password <span className={styles.required}>*</span>
//           </label>
//           <div className={styles.inputWrapper}>
//             <span className={styles.icon}>🔑</span>
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               placeholder="••••••••"
//               className={styles.input}
//               value={formData.password}
//               onChange={handleChange}
//             />
//             <button type="button" className={styles.eyeBtn} onClick={() => setShowPassword(!showPassword)}>
//               {showPassword ? <EyeClosed /> : <EyeOpen />}
//             </button>
//           </div>
//         </div>

//         <div className={styles.formActions}>
//           <label className={styles.checkboxLabel}>
//             <input type="checkbox" className={styles.checkbox} defaultChecked />
//             Keep me signed in
//           </label>
//           <a href="/forgot-password" className={styles.forgotLink}>Forgot password?</a>
//         </div>

//         <button type="submit" className={styles.submitBtn} disabled={loading}>
//           {loading ? "SIGNING IN..." : "SIGN IN SECURELY"}
//         </button>
//       </form>

//       <button type="button" className={styles.anonymousBtn}>
//         Continue Anonymously — No Account Needed
//       </button>

//       <footer className={styles.formFooter}>
//         Don't have an account?{" "}
//         <a href="/officer/sign-up" className={styles.createLink}>Create one free</a>
//       </footer>
//     </>
//   );
// }


// /* ─────────────────────────────────────────────
//    MAIN AUTH PAGE
// ───────────────────────────────────────────── */
// export default function AuthPage({ defaultRole = "reporter" }) {
//   const location = useLocation();
//   const [activeRole, setActiveRole] = useState(location.state?.role ?? "reporter");

//   const isReporter = activeRole === "reporter";
//   const signupHref = isReporter ? "/reporter/sign-up" : "/officer/sign-up";

//   return (
//     <div className={styles.container}>
//       {/* ── Navbar ── */}
//       <nav className={styles.navbar}>
//         <div className={styles.logo}>
//           <AegisLogo />
//           <span>AEGIS</span>
//         </div>

//         <a href="/select-role" className={styles.navCenter}>← Back to Role Select</a>

//         <a href={signupHref} className={styles.signupBtn}>SIGN UP</a>
//       </nav>

//       {/* ── Main two-column layout ── */}
//       <main className={styles.mainLayout}>

//         {/* ── LEFT: Role Select Panel ── */}
//         <aside className={styles.panel}>
//           <h1>Select your role.</h1>
//           <p className={styles.panelDesc}>
//             Your identity is always protected. You choose how much — or how little —
//             to reveal. Full anonymity is always available.
//           </p>

//           {/* Reporter card */}
//           <button
//             className={`${styles.card} ${styles.reporterCard} ${isReporter ? styles.activeReporter : ""}`}
//             onClick={() => setActiveRole("reporter")}
//           >
//             <div className={styles.iconBox}><ShieldIcon /></div>
//             <div className={styles.textContent}>
//               <p className={styles.roleTagTeal}>COMMUNITY LEADER</p>
//               <h2>Crime Reporter</h2>
//               <p className={styles.cardDesc}>
//                 Report incidents anonymously, track your submissions, and access your
//                 community safety map. No identity required.
//               </p>
//             </div>
//           </button>

//           {/* Officer card */}
//           <button
//             className={`${styles.card} ${styles.officerCard} ${!isReporter ? styles.activeOfficer : ""}`}
//             onClick={() => setActiveRole("officer")}
//           >
//             <div className={styles.iconBox}><ShieldIcon /></div>
//             <div className={styles.textContent}>
//               <p className={styles.roleTagBlue}>LAW ENFORCEMENT</p>
//               <h2>Security Personnel</h2>
//               <p className={styles.cardDesc}>
//                 Access the command dashboard, manage active cases, dispatch units, and
//                 coordinate incident response.
//               </p>
//             </div>
//           </button>
//         </aside>

//         {/* ── RIGHT: Dynamic Form Section ── */}
//         <section className={styles.formSection}>
//           <div className={styles.contentContainer}>
//             <header className={styles.formHeader}>
//               <p className={styles.superTitle}>SIGN IN</p>
//               <h1 className={styles.mainTitle}>Welcome back</h1>
//               <p className={styles.description}>
//                 Sign in to view your reports and submit new ones.
//               </p>
//             </header>

//             {/* Animated role switcher */}
//             <div className={`${styles.formBody} ${isReporter ? styles.slideReporter : styles.slideOfficer}`}>
//               {isReporter ? <ReporterForm /> : <OfficerForm />}
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

import React, { useState } from "react";
import styles from "./AuthPage.module.css";
import { authService } from "../../api/authService";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


const EyeOpen = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.299 6.18203C19.2701 6.11875 18.5857 4.59922 17.074 3.0875C15.0514 1.06797 12.5021 0 9.68964 0C6.87714 0 4.32792 1.06797 2.30761 3.0875C0.795888 4.59922 0.111513 6.11875 0.0802628 6.18203C0.0273355 6.30203 0 6.43174 0 6.56289C0 6.69404 0.0273355 6.82375 0.0802628 6.94375C0.109169 7.00781 0.793544 8.52656 2.30604 10.0383C4.32792 12.0578 6.87714 13.125 9.68964 13.125C12.5021 13.125 15.0514 12.0578 17.0709 10.0383C18.5834 8.52656 19.2678 7.00781 19.2967 6.94375C19.35 6.82392 19.3777 6.69429 19.3781 6.56314C19.3785 6.43199 19.3516 6.30219 19.299 6.18203ZM15.7006 8.76016C14.0232 10.4117 12.0014 11.25 9.68964 11.25C7.37792 11.25 5.35604 10.4117 3.68104 8.75937C3.02197 8.10718 2.45501 7.36807 1.99589 6.5625C2.45516 5.75726 3.0221 5.01842 3.68104 4.36641C5.35683 2.71328 7.37792 1.875 9.68964 1.875C12.0014 1.875 14.0225 2.71328 15.6982 4.36641C16.3573 5.01836 16.9242 5.75721 17.3834 6.5625C16.9242 7.36801 16.3572 8.10712 15.6982 8.75937L15.7006 8.76016ZM9.68964 3.125C9.00976 3.125 8.34516 3.32661 7.77987 3.70432C7.21457 4.08204 6.77398 4.6189 6.5138 5.24703C6.25363 5.87515 6.18555 6.56631 6.31819 7.23312C6.45083 7.89993 6.77822 8.51244 7.25896 8.99318C7.7397 9.47392 8.35221 9.80131 9.01901 9.93395C9.68582 10.0666 10.377 9.99851 11.0051 9.73834C11.6332 9.47816 12.1701 9.03757 12.5478 8.47227C12.9255 7.90698 13.1271 7.24237 13.1271 6.5625C13.1261 5.65114 12.7636 4.77739 12.1192 4.13296C11.4747 3.48853 10.601 3.12603 9.68964 3.125ZM9.68964 8.125C9.3806 8.125 9.07851 8.03336 8.82156 7.86167C8.56461 7.68998 8.36434 7.44595 8.24608 7.16044C8.12781 6.87493 8.09687 6.56077 8.15716 6.25767C8.21745 5.95458 8.36626 5.67617 8.58478 5.45765C8.8033 5.23913 9.08171 5.09031 9.38481 5.03002C9.6879 4.96973 10.0021 5.00068 10.2876 5.11894C10.5731 5.2372 10.8171 5.43747 10.9888 5.69442C11.1605 5.95137 11.2521 6.25347 11.2521 6.5625C11.2521 6.9769 11.0875 7.37433 10.7945 7.66735C10.5015 7.96038 10.104 8.125 9.68964 8.125Z" fill="#F9FAFB"/>
  </svg>
);

const EyeClosed = () => (
  <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.7534 5.46398C16.815 5.57088 16.8549 5.68886 16.8709 5.81119C16.8868 5.93351 16.8785 6.05778 16.8465 6.1769C16.8144 6.29602 16.7592 6.40766 16.684 6.50544C16.6088 6.60322 16.515 6.68523 16.4081 6.74679C16.3012 6.80835 16.1832 6.84824 16.0609 6.86421C15.9386 6.88017 15.8143 6.87188 15.6952 6.83981C15.5761 6.80775 15.4644 6.75253 15.3667 6.67732C15.2689 6.60211 15.1869 6.50838 15.1253 6.40148L13.8081 4.09679C13.0731 4.55915 12.2807 4.92319 11.4511 5.1796L11.8644 7.65148C11.905 7.89669 11.8466 8.14801 11.702 8.35018C11.5574 8.55235 11.3385 8.68883 11.0933 8.7296C11.0417 8.73878 10.9894 8.74323 10.937 8.74288C10.7156 8.74266 10.5015 8.66409 10.3325 8.5211C10.1634 8.37811 10.0505 8.17992 10.0136 7.96163L9.61125 5.55538C8.83082 5.64184 8.04324 5.64184 7.26281 5.55538L6.86437 7.96398C6.82743 8.18253 6.71425 8.38093 6.54491 8.52395C6.37557 8.66698 6.16103 8.74537 5.93937 8.74523C5.887 8.74557 5.83469 8.74113 5.78312 8.73195C5.66169 8.7115 5.54548 8.66733 5.44113 8.60196C5.33677 8.53658 5.24631 8.4513 5.17493 8.35096C5.10354 8.25063 5.05261 8.13721 5.02507 8.01719C4.99752 7.89717 4.99389 7.7729 5.01437 7.65148L5.42766 5.17335C4.59805 4.91694 3.80562 4.5529 3.07062 4.09054L1.75344 6.40148C1.69188 6.50838 1.60987 6.60211 1.51209 6.67732C1.41431 6.75253 1.30267 6.80775 1.18355 6.83981C1.06443 6.87188 0.940158 6.88017 0.817834 6.86421C0.695511 6.84824 0.577529 6.80835 0.470625 6.74679C0.36372 6.68523 0.269987 6.60322 0.194778 6.50544C0.119568 6.40766 0.0643543 6.29602 0.0322891 6.1769C0.000223878 6.05778 -0.008065 5.93351 0.00789591 5.81119C0.0238568 5.68886 0.0637549 5.57088 0.125312 5.46398L1.56437 2.95226C1.07669 2.51173 0.624507 2.03342 0.212031 1.52179C0.0664386 1.32761 0.00182583 1.08453 0.0317826 0.843683C0.0617394 0.602838 0.183931 0.382996 0.372657 0.230396C0.561382 0.0777969 0.801933 0.00433319 1.04371 0.0254578C1.28549 0.0465823 1.50966 0.160648 1.66906 0.343664C2.92219 1.89523 5.11437 3.74523 8.43937 3.74523C11.7644 3.74523 13.9566 1.89523 15.2097 0.343664C15.3665 0.152089 15.5927 0.0303233 15.839 0.00494243C16.0853 -0.0204385 16.3316 0.0526259 16.5242 0.20819C16.7168 0.363754 16.84 0.589187 16.867 0.835288C16.894 1.08139 16.8226 1.32818 16.6683 1.52179C16.2553 2.03348 15.8026 2.51179 15.3144 2.95226L16.7534 5.46398Z" fill="#F9FAFB"/>
  </svg>
);

const LockIcon = () => (
  <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.75 5.625H11.25V3.75C11.25 2.75544 10.8549 1.80161 10.1517 1.09835C9.44839 0.395088 8.49456 0 7.5 0C6.50544 0 5.55161 0.395088 4.84835 1.09835C4.14509 1.80161 3.75 2.75544 3.75 3.75V5.625H1.25C0.918479 5.625 0.600537 5.7567 0.366116 5.99112C0.131696 6.22554 0 6.54348 0 6.875V15.625C0 15.9565 0.131696 16.2745 0.366116 16.5089C0.600537 16.7433 0.918479 16.875 1.25 16.875H13.75C14.0815 16.875 14.3995 16.7433 14.6339 16.5089C14.8683 16.2745 15 15.9565 15 15.625V6.875C15 6.54348 14.8683 6.22554 14.6339 5.99112C14.3995 5.7567 14.0815 5.625 13.75 5.625ZM8.125 11.768V13.75C8.125 13.9158 8.05915 14.0747 7.94194 14.1919C7.82473 14.3092 7.66576 14.375 7.5 14.375C7.33424 14.375 7.17527 14.3092 7.05806 14.1919C6.94085 14.0747 6.875 13.9158 6.875 13.75V11.768C6.45799 11.6205 6.10653 11.3304 5.88273 10.9489C5.65893 10.5674 5.57721 10.1191 5.652 9.68314C5.7268 9.2472 5.95329 8.85174 6.29146 8.56665C6.62963 8.28156 7.0577 8.1252 7.5 8.1252C7.9423 8.1252 8.37037 8.28156 8.70854 8.56665C9.04671 8.85174 9.2732 9.2472 9.348 9.68314C9.42279 10.1191 9.34107 10.5674 9.11727 10.9489C8.89347 11.3304 8.54201 11.6205 8.125 11.768ZM10 5.625H5V3.75C5 3.08696 5.26339 2.45107 5.73223 1.98223C6.20107 1.51339 6.83696 1.25 7.5 1.25C8.16304 1.25 8.79893 1.51339 9.26777 1.98223C9.73661 2.45107 10 3.08696 10 3.75V5.625Z" fill="#F59E0B"/>
  </svg>
);

const AegisLogo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="6.19394" fill="#00D4AA"/>
    <path d="M21.1978 13.2325L26.7924 27.6581C27.0081 28.1821 27.2393 28.5597 27.4859 28.7909C27.7325 29.0066 27.956 29.1222 28.1563 29.1376V29.6C27.6015 29.5692 26.9542 29.5538 26.2144 29.5538C25.4746 29.5384 24.7195 29.5306 23.9489 29.5306C23.1628 29.5306 22.4231 29.5384 21.7295 29.5538C21.036 29.5538 20.4812 29.5692 20.065 29.6V29.1376C20.851 29.1068 21.3442 28.9758 21.5446 28.7446C21.7603 28.498 21.7141 27.9817 21.4059 27.1957L17.707 16.9545L18.1694 16.1453L14.9791 24.4447C14.5938 25.4465 14.3549 26.2556 14.2624 26.8721C14.1853 27.4731 14.2239 27.9355 14.378 28.2592C14.5321 28.5828 14.7787 28.8063 15.1178 28.9296C15.4568 29.0529 15.8576 29.1222 16.3199 29.1376V29.6C15.7497 29.5692 15.2334 29.5538 14.771 29.5538C14.3241 29.5384 13.8309 29.5306 13.2915 29.5306C12.9986 29.5306 12.6827 29.5384 12.3436 29.5538C12.02 29.5538 11.7425 29.5692 11.5114 29.6V29.1376C11.8658 29.076 12.2126 28.8525 12.5517 28.4672C12.9062 28.0665 13.2683 27.3884 13.6382 26.4328L18.7704 13.2325C19.1403 13.2633 19.541 13.2787 19.9726 13.2787C20.4195 13.2787 20.8279 13.2633 21.1978 13.2325ZM22.0069 22.942V23.4044H15.1178L15.349 22.942H22.0069Z" fill="#0A0F1E"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="52.1863" height="52.9938" rx="7.75155" fill="#3B82F6" fillOpacity="0.12"/>
    <path d="M34.1677 16H18.0186C17.4833 16 16.9698 16.2127 16.5912 16.5912C16.2127 16.9698 16 17.4833 16 18.0186V23.6708C16 29.1504 18.6565 32.4741 20.8851 34.2979C23.2782 36.255 25.6733 36.9221 25.7742 36.9514C25.9831 37.0079 26.2032 37.0079 26.4121 36.9514C26.513 36.9231 28.9082 36.255 31.3012 34.2979C33.5298 32.4741 36.1863 29.1504 36.1863 23.6708V18.0186C36.1863 17.4833 35.9737 16.9698 35.5951 16.5912C35.2165 16.2127 34.7031 16 34.1677 16ZM33.764 23.6708C33.764 27.2751 32.4428 30.2001 29.8367 32.3661C28.7197 33.2878 27.4537 34.0124 26.0932 34.5089C24.7325 34.0128 23.4665 33.2881 22.3496 32.3661C19.7436 30.2001 18.4224 27.2751 18.4224 23.6708V18.4224H33.764V23.6708Z" fill="#F59E0B"/>
  </svg>
);


/* ─────────────────────────────────────────────
   REPORTER FORM
───────────────────────────────────────────── */
function ReporterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      const res = await authService.login("reporter", formData);
      loginUser(res, "reporter");
      navigate("/reporter/portal");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.alertBox}>
        <div className={styles.alertIcon}><LockIcon /></div>
        <div className={styles.alertText}>
          <strong>Anonymous login available</strong>
          <p>You can also report incidents without creating an account.</p>
        </div>
      </div>

      {error && <p className={styles.errorMsg}>⚠️ {error}</p>}

      <form className={styles.loginForm} onSubmit={handleLogin}>
        <div className={styles.inputGroup}>
          <label htmlFor="reporter-email">
            Email address <span className={styles.required}>*</span>
          </label>
          <div className={styles.inputWrapper}>
            <span className={styles.icon}>✉️</span>
            <input
              type="email"
              id="reporter-email"
              placeholder="amaka@example.com"
              className={styles.input}
              value={formData.email}
              onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setError(""); }}
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="reporter-password">
            Password <span className={styles.required}>*</span>
          </label>
          <div className={styles.inputWrapper}>
            <span className={styles.icon}>🔑</span>
            <input
              type={showPassword ? "text" : "password"}
              id="reporter-password"
              placeholder="••••••••"
              className={styles.input}
              value={formData.password}
              onChange={(e) => { setFormData({ ...formData, password: e.target.value }); setError(""); }}
            />
            <button type="button" className={styles.eyeBtn} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeClosed /> : <EyeOpen />}
            </button>
          </div>
        </div>

        <div className={styles.formActions}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkbox} defaultChecked />
            Keep me signed in
          </label>
          <a href="/forgot-password" className={styles.forgotLink}>Forgot password?</a>
        </div>

        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? "SIGNING IN..." : "SIGN IN SECURELY"}
        </button>
      </form>

      <button type="button" className={styles.anonymousBtn}>
        Continue Anonymously — No Account Needed
      </button>

      <footer className={styles.formFooter}>
        Don't have an account?{" "}
        <a href="/reporter/sign-up" className={styles.createLink}>Create one free</a>
      </footer>
    </>
  );
}


/* ─────────────────────────────────────────────
   OFFICER FORM
───────────────────────────────────────────── */
function OfficerForm() {
  const navigate = useNavigate();
  const { loginUser } = useAuth();
  const [formData, setFormData] = useState({ identifier: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.identifier || !formData.password) {
      setError("Please enter your email (or badge number) and password.");
      return;
    }
    try {
      setLoading(true);
      const res = await authService.login("security", formData);
      loginUser(res, "security");
      navigate("/officer/dashboard");
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.alertBox}>
        <div className={styles.alertIcon}><LockIcon /></div>
        <div className={styles.alertText}>
          <strong>Pending approval?</strong>
          <p>Your account must be approved by an admin before you can sign in.</p>
        </div>
      </div>

      {error && <p className={styles.errorMsg}>⚠️ {error}</p>}

      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="identifier">
            Email or Badge Number <span className={styles.required}>*</span>
          </label>
          <div className={styles.inputWrapper}>
            <span className={styles.icon}>✉️</span>
            <input
              type="text"
              id="identifier"
              placeholder="amaka@npf.gov.ng or NPF-00123"
              className={styles.input}
              value={formData.identifier}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">
            Password <span className={styles.required}>*</span>
          </label>
          <div className={styles.inputWrapper}>
            <span className={styles.icon}>🔑</span>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="••••••••"
              className={styles.input}
              value={formData.password}
              onChange={handleChange}
            />
            <button type="button" className={styles.eyeBtn} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeClosed /> : <EyeOpen />}
            </button>
          </div>
        </div>

        <div className={styles.formActions}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkbox} defaultChecked />
            Keep me signed in
          </label>
          <a href="/forgot-password" className={styles.forgotLink}>Forgot password?</a>
        </div>

        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? "SIGNING IN..." : "SIGN IN SECURELY"}
        </button>
      </form>

      {/* <button type="button" className={styles.anonymousBtn}>
        Continue Anonymously — No Account Needed
      </button> */}

      <footer className={styles.formFooter}>
        Don't have an account?{" "}
        <a href="/officer/sign-up" className={styles.createLink}>Create one free</a>
      </footer>
    </>
  );
}


/* ─────────────────────────────────────────────
   MAIN AUTH PAGE
───────────────────────────────────────────── */
export default function AuthPage({ defaultRole = "reporter" }) {
  const location = useLocation();
  const [activeRole, setActiveRole] = useState(location.state?.role ?? "reporter");

  const isReporter = activeRole === "reporter";
  const signupHref = isReporter ? "/reporter/sign-up" : "/officer/sign-up";

  return (
    <div className={styles.container}>

      {/* ── Navbar ── */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <AegisLogo />
          <span>AEGIS</span>
        </div>

        <a href="/select-role" className={styles.navCenter}>← Back to Role Select</a>

        <a href={signupHref} className={styles.signupBtn}>SIGN UP</a>
      </nav>

      {/* ── Main two-column layout ── */}
      <main className={styles.mainLayout}>

        {/* ── LEFT: Role Select Panel — hidden on tablet/mobile ── */}
        <aside className={styles.panel}>
          <h1>Select your role.</h1>
          <p className={styles.panelDesc}>
            Your identity is always protected. You choose how much — or how little —
            to reveal. Full anonymity is always available.
          </p>

          <button
            className={`${styles.card} ${styles.reporterCard} ${isReporter ? styles.activeReporter : ""}`}
            onClick={() => setActiveRole("reporter")}
          >
            <div className={styles.iconBox}><ShieldIcon /></div>
            <div className={styles.textContent}>
              <p className={styles.roleTagTeal}>COMMUNITY LEADER</p>
              <h2>Crime Reporter</h2>
              <p className={styles.cardDesc}>
                Report incidents anonymously, track your submissions, and access your
                community safety map. No identity required.
              </p>
            </div>
          </button>

          <button
            className={`${styles.card} ${styles.officerCard} ${!isReporter ? styles.activeOfficer : ""}`}
            onClick={() => setActiveRole("officer")}
          >
            <div className={styles.iconBox}><ShieldIcon /></div>
            <div className={styles.textContent}>
              <p className={styles.roleTagBlue}>LAW ENFORCEMENT</p>
              <h2>Security Personnel</h2>
              <p className={styles.cardDesc}>
                Access the command dashboard, manage active cases, dispatch units, and
                coordinate incident response.
              </p>
            </div>
          </button>
        </aside>

        {/* ── RIGHT: Dynamic Form Section ── */}
        <section className={styles.formSection}>
          <div className={styles.contentContainer}>
            <header className={styles.formHeader}>
              <p className={styles.superTitle}>SIGN IN</p>
              <h1 className={styles.mainTitle}>Welcome back</h1>
              <p className={styles.description}>
                {isReporter
                  ? "Sign in to view your reports and submit new ones."
                  : "Sign in to access the command dashboard."}
              </p>
            </header>

            {/*
              KEY PROP on the wrapper forces React to fully unmount and
              remount the form on role switch — this eliminates the bleed-through
              where the old form briefly shows during the animation.
            */}
            <div className={styles.formAnimWrapper}>
              <div key={activeRole} className={styles.formBody}>
                {isReporter ? <ReporterForm /> : <OfficerForm />}
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}