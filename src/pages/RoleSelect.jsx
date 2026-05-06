import React from "react";
import styles from "./RoleSelect.module.css";
import { Link } from "react-router-dom";

export default function AegisRoleSelect({ onClose }) {

  // If onClose is passed → it's being used as a modal
  // If no onClose → it's a standalone page (navigated via <a href>)
  const isModal = typeof onClose === "function";

  const handleClose = () => {
    if (isModal) {
      onClose(); // close the modal
    } else {
      window.history.back(); // go back if opened as a page
    }
  };

  return (
    <div className={`${styles.container} ${isModal ? styles.modalMode : styles.pageMode}`}>

      {/* Close / Back Button */}
      <button className={styles.closeBtn} onClick={handleClose}>
        {isModal ? (
          // X icon when modal
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.950295 13.5168L-0.00010501 12.5664L5.7727 6.7584L-0.00010501 0.950399L0.950295 -1.59912e-06L6.7231 5.808L12.4607 -1.59912e-06L13.4111 0.950399L7.6383 6.7584L13.4111 12.5664L12.4607 13.5168L6.7231 7.744L0.950295 13.5168Z" fill="#6B7280"/>
          </svg>
        ) : (
          // Back arrow when standalone page
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
        )}
      </button>

      {/* Header */}
      <div className={styles.header}>
        <h1>
          Welcome to <span>Aegis</span>
        </h1>
        <p>
          Select your role to continue. Your dashboard, permissions and
          experience are tailored to how you use Aegis.
        </p>
      </div>

      {/* Cards */}
      <div className={styles.cardWrapper}>
        <Link
          className={`${styles.card} ${styles.leftCard}`}
          to="/sign-in"
          state={{ role: "reporter" }}
        >
          <div className={styles.iconBox}>
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="52.1863" height="52.9938" rx="7.75155" fill="#3B82F6" fillOpacity="0.12"/>
              <path d="M34.1677 16H18.0186C17.4833 16 16.9698 16.2127 16.5912 16.5912C16.2127 16.9698 16 17.4833 16 18.0186V23.6708C16 29.1504 18.6565 32.4741 20.8851 34.2979C23.2782 36.255 25.6733 36.9221 25.7742 36.9514C25.9831 37.0079 26.2032 37.0079 26.4121 36.9514C26.513 36.9231 28.9082 36.255 31.3012 34.2979C33.5298 32.4741 36.1863 29.1504 36.1863 23.6708V18.0186C36.1863 17.4833 35.9737 16.9698 35.5951 16.5912C35.2165 16.2127 34.7031 16 34.1677 16ZM33.764 23.6708C33.764 27.2751 32.4428 30.2001 29.8367 32.3661C28.7197 33.2878 27.4537 34.0124 26.0932 34.5089C24.7325 34.0128 23.4665 33.2881 22.3496 32.3661C19.7436 30.2001 18.4224 27.2751 18.4224 23.6708V18.4224H33.764V23.6708Z" fill="#F59E0B"/>
            </svg>
          </div>
          <p className={styles.roleTag}>COMMUNITY LEADER</p>
          <h2>Crime Reporter</h2>
          <p className={styles.description}>
            Report incidents anonymously, track your submissions, and access
            your community safety map. No identity required.
          </p>
          <p className={styles.primaryBtn}>Continue as Crime Reporter →</p>
        </Link>

        <Link
          className={`${styles.card} ${styles.rightCard}`}
          to="/sign-in"
          state={{ role: "officer" }}
        >
          <div className={styles.iconBox}>
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="52.1863" height="52.9938" rx="7.75155" fill="#3B82F6" fillOpacity="0.12"/>
              <path d="M34.1677 16H18.0186C17.4833 16 16.9698 16.2127 16.5912 16.5912C16.2127 16.9698 16 17.4833 16 18.0186V23.6708C16 29.1504 18.6565 32.4741 20.8851 34.2979C23.2782 36.255 25.6733 36.9221 25.7742 36.9514C25.9831 37.0079 26.2032 37.0079 26.4121 36.9514C26.513 36.9231 28.9082 36.255 31.3012 34.2979C33.5298 32.4741 36.1863 29.1504 36.1863 23.6708V18.0186C36.1863 17.4833 35.9737 16.9698 35.5951 16.5912C35.2165 16.2127 34.7031 16 34.1677 16ZM33.764 23.6708C33.764 27.2751 32.4428 30.2001 29.8367 32.3661C28.7197 33.2878 27.4537 34.0124 26.0932 34.5089C24.7325 34.0128 23.4665 33.2881 22.3496 32.3661C19.7436 30.2001 18.4224 27.2751 18.4224 23.6708V18.4224H33.764V23.6708Z" fill="#F59E0B"/>
            </svg>
          </div>
          <p className={styles.roleTagBlue}>LAW ENFORCEMENT</p>
          <h2>Security Personnel</h2>
          <p className={styles.description}>
            Access the command dashboard, manage active cases, dispatch units,
            and coordinate incident response.
          </p>
          <p className={styles.secondaryBtn}>Continue as Security Officer →</p>
        </Link>
      </div>
    </div>
  );
}