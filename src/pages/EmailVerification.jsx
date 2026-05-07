import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EmailVerification.module.css";

// const BASE_URL = "http://localhost:5000"; // 🔧 Change to your backend URL
const BASE_URL = import.meta.env.VITE_BASE_URL; // 🔧 Change to your backend URL

const EmailVerification = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState("email"); // "email" | "otp" | "success"
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [emailError, setEmailError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [toastVisible, setToastVisible] = useState(false);
  const [redirectPath, setRedirectPath] = useState("/"); // resolved after verify

  const inputRefs = useRef([]);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  const startCooldown = () => {
    setResendDisabled(true);
    setCountdown(30);
    timerRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // ── STEP 1: Send OTP ─────────────────────────────────────────
  const handleSendOtp = async () => {
    setEmailError("");
    const trimmed = email.trim();

    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/auth/resend-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      const data = await res.json();

      if (!res.ok) {
        setEmailError(data.message || "Failed to send code. Try again.");
        return;
      }

      setStep("otp");
      startCooldown();
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    } catch {
      setEmailError("Network error. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  // ── STEP 2: Verify OTP ───────────────────────────────────────
  const handleVerify = async () => {
    setOtpError("");
    const code = otp.join("");

    setLoading(true);
    try {
      // 1. Verify the OTP
      const res = await fetch(`${BASE_URL}/api/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), otp: code }),
      });

      const data = await res.json();

      if (!res.ok) {
        setOtpError(data.message || "Invalid or expired code.");
        setOtp(["", "", "", "", "", ""]);
        setTimeout(() => inputRefs.current[0]?.focus(), 50);
        return;
      }

      // 2. Fetch user profile using stored token to determine role
      const token = localStorage.getItem("token"); // 🔧 Adjust key if yours differs
      let destination = "/";

      if (token) {
        try {
          const profileRes = await fetch(`${BASE_URL}/api/user/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (profileRes.ok) {
            const profile = await profileRes.json();

            if (profile.role === "reporter") {
              destination = "/reporter/portal"; // 🔧 Adjust to your reporter route
            } else if (profile.role === "security") {
              destination = "/officer/dashboard"; // 🔧 Adjust to your security route
            } else if (profile.role === "admin") {
              destination = "/admin/dashboard"; // 🔧 Adjust to your admin route
            }
          }
        } catch {
          // Profile fetch failed — fall back to home
        }
      }

      setRedirectPath(destination);
      setStep("success");

      // Auto-redirect after 2s so user sees the success screen briefly
      setTimeout(() => navigate(destination), 2000);

    } catch {
      setOtpError("Network error. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  // ── Resend OTP ───────────────────────────────────────────────
  const handleResend = async () => {
    setOtpError("");
    try {
      const res = await fetch(`${BASE_URL}/api/auth/resend-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (res.ok) {
        setOtp(["", "", "", "", "", ""]);
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 3000);
        startCooldown();
        setTimeout(() => inputRefs.current[0]?.focus(), 50);
      } else {
        setOtpError(data.message || "Could not resend code.");
      }
    } catch {
      setOtpError("Network error. Try again.");
    }
  };

  // ── OTP input handlers ───────────────────────────────────────
  const handleOtpChange = (index, value) => {
    setOtpError("");
    const cleaned = value.replace(/\D/g, "").slice(0, 1);
    const newOtp = [...otp];
    newOtp[index] = cleaned;
    setOtp(newOtp);
    if (cleaned && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowLeft" && index > 0) inputRefs.current[index - 1]?.focus();
    if (e.key === "ArrowRight" && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const newOtp = ["", "", "", "", "", ""];
    pasted.split("").forEach((ch, i) => { newOtp[i] = ch; });
    setOtp(newOtp);
    inputRefs.current[Math.min(pasted.length, 5)]?.focus();
  };

  const isOtpComplete = otp.join("").length === 6;

  return (
    <div className={styles.container}>
      <div className={styles.card}>

        {/* ── STEP: Email ── */}
        {step === "email" && (
          <>
            <div className={styles.iconRing}>
              <MailIcon />
            </div>
            <h1 className={styles.title}>Verify your email</h1>
            <p className={styles.sub}>
              Enter the email address linked to your Aegis account to receive your verification code.
            </p>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Email address</label>
              <input
                className={styles.emailField}
                type="email"
                placeholder="you@example.com"
                value={email}
                autoComplete="email"
                onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                onKeyDown={(e) => e.key === "Enter" && handleSendOtp()}
              />
            </div>

            {emailError && <p className={styles.error}>{emailError}</p>}

            <button
              className={styles.btn}
              onClick={handleSendOtp}
              disabled={loading}
            >
              {loading ? <Spinner /> : "Send verification code"}
            </button>
          </>
        )}

        {/* ── STEP: OTP ── */}
        {step === "otp" && (
          <>
            <div className={styles.iconRing}>
              <MailIcon />
            </div>
            <h1 className={styles.title}>Check your inbox</h1>
            <p className={styles.sub}>We sent a 6-digit code to</p>
            <div className={styles.emailPill}>
              <SmallMailIcon />
              <span>{email.trim()}</span>
            </div>

            {toastVisible && (
              <div className={styles.toast}>Code resent! Check your inbox.</div>
            )}

            <div className={styles.otpRow} onPaste={handleOtpPaste}>
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => (inputRefs.current[i] = el)}
                  className={`${styles.otpInput} ${digit ? styles.filled : ""} ${otpError ? styles.inputError : ""}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  autoComplete={i === 0 ? "one-time-code" : "off"}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(i, e)}
                />
              ))}
            </div>

            {otpError && <p className={styles.error}>{otpError}</p>}

            <button
              className={styles.btn}
              onClick={handleVerify}
              disabled={loading || !isOtpComplete}
            >
              {loading ? <Spinner /> : (
                <>
                  <CheckIcon />
                  Verify email
                </>
              )}
            </button>

            <p className={styles.resendText}>
              Didn't receive it?{" "}
              <button
                className={styles.resendLink}
                onClick={handleResend}
                disabled={resendDisabled}
              >
                Resend code
              </button>
              {countdown > 0 && <span> ({countdown}s)</span>}
            </p>

            <div className={styles.divider} />
            <p className={styles.footer}>
              Wrong email?{" "}
              <button
                className={styles.backBtn}
                onClick={() => {
                  setStep("email");
                  setOtp(["", "", "", "", "", ""]);
                  setOtpError("");
                }}
              >
                Change it
              </button>
            </p>
          </>
        )}

        {/* ── STEP: Success ── */}
        {step === "success" && (
          <div className={styles.successWrap}>
            <div className={styles.successRing}>
              <BigCheckIcon />
            </div>
            <h1 className={styles.title}>Email verified</h1>
            <p className={styles.sub}>
              Your identity has been confirmed. Redirecting you now…
            </p>
            {/* Manual fallback in case auto-redirect is slow */}
            <button className={styles.btn} onClick={() => navigate(redirectPath)}>
              Continue to Aegis
              <ArrowRightIcon />
            </button>
          </div>
        )}

      </div>

      <div className={styles.bgDecoration}>
        <div className={styles.glow1} />
        <div className={styles.glow2} />
      </div>
    </div>
  );
};

// ── Icons ────────────────────────────────────────────────────────
const MailIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="3" y="7" width="22" height="16" rx="3" stroke="#00d19a" strokeWidth="1.8" />
    <path d="M3 10L14 17L25 10" stroke="#00d19a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SmallMailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="1" y="3" width="12" height="9" rx="1.5" stroke="#00d19a" strokeWidth="1.4" />
    <path d="M1 5L7 8.5L13 5" stroke="#00d19a" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M15 5L7.5 12.5L3 8" stroke="#0b111d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BigCheckIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M27 9L13 23L5 15" stroke="#00d19a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M7 4.5L12 9L7 13.5" stroke="#0b111d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Spinner = () => (
  <span
    style={{
      width: 18,
      height: 18,
      display: "inline-block",
      border: "2px solid rgba(11,17,29,0.3)",
      borderTopColor: "#0b111d",
      borderRadius: "50%",
      animation: "ve-spin 0.7s linear infinite",
    }}
  />
);

export default EmailVerification;