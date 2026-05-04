import React from "react";
import styles from "./AegisLanding.module.css";

const Navbar = () => (
    <nav className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <div className={styles.navLeft}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="6.19394" fill="#00D4AA"/>
              <path d="M21.1977 13.2325L26.7923 27.6581C27.008 28.1821 27.2392 28.5597 27.4858 28.7909C27.7324 29.0066 27.9559 29.1222 28.1562 29.1376V29.6C27.6014 29.5692 26.9541 29.5538 26.2143 29.5538C25.4745 29.5384 24.7194 29.5306 23.9488 29.5306C23.1627 29.5306 22.423 29.5384 21.7294 29.5538C21.0359 29.5538 20.4811 29.5692 20.0649 29.6V29.1376C20.8509 29.1068 21.3441 28.9758 21.5445 28.7446C21.7602 28.498 21.714 27.9817 21.4058 27.1957L17.7069 16.9545L18.1693 16.1453L14.979 24.4447C14.5937 25.4465 14.3548 26.2556 14.2623 26.8721C14.1853 27.4731 14.2238 27.9355 14.3779 28.2592C14.532 28.5828 14.7786 28.8063 15.1177 28.9296C15.4567 29.0529 15.8575 29.1222 16.3198 29.1376V29.6C15.7496 29.5692 15.2333 29.5538 14.7709 29.5538C14.324 29.5384 13.8308 29.5306 13.2914 29.5306C12.9985 29.5306 12.6826 29.5384 12.3435 29.5538C12.0199 29.5538 11.7424 29.5692 11.5113 29.6V29.1376C11.8657 29.076 12.2125 28.8525 12.5516 28.4672C12.9061 28.0665 13.2682 27.3884 13.6381 26.4328L18.7703 13.2325C19.1402 13.2633 19.5409 13.2787 19.9725 13.2787C20.4194 13.2787 20.8278 13.2633 21.1977 13.2325ZM22.0068 22.942V23.4044H15.1177L15.3489 22.942H22.0068Z" fill="#0A0F1E"/>
            </svg>
            <span className={styles.logoText}>Aegis</span>
          </div>
          
        <div className={styles.logo}>
          <ul className={styles.navLinks}>
            <li><a href="#problem">PROBLEM</a></li>
            <li><a href="#solution">SOLUTION</a></li>
            <li><a href="#architecture">ARCHITECTURE</a></li>
            <li><a href="#roadmap">ROADMAP</a></li>
            <li><a href="#mobile-app">MOBILE APP</a></li>
          </ul>
        </div>
        <div className={styles.navRight}>
          <a href="/select-role" className={styles.btnOutlineSm}>Sign UP</a>
          <a href="#" className={styles.btnCtaNav}>DOWNLOAD AEGIS</a>
        </div>
      </div>
    </nav>
);

const Hero = () => (
    <section className={styles.hero}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <span className={styles.breadcrumbLine} />
        <span className={styles.breadcrumbText}>
          SDG 16 · PEACE, JUSTICE &amp; STRONG INSTITUTIONS · JAN 2026
        </span>
      </div>
 
      {/* Title */}
      <h1 className={styles.title}>
        <span className={styles.titleGreen}>Aegis</span>
        {" – Building Trust Through Technology"}
      </h1>
 
      {/* Description */}
      <p className={styles.desc}>
        A hybrid mobile platform and web ecosystem bridging the gap between
        security agencies and citizens in developing nations. Two roles. One
        mission.
      </p>
 
      {/* CTA Buttons */}
      <div className={styles.actions}>
        <a href="#" className={styles.btnPrimary}>
          EXPLORE THE PLATFORM
        </a>
        <a href="#" className={styles.btnOutlines}>
          <span className={styles.btnIcon}>
            <svg width="29" height="34" viewBox="0 0 29 44" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M23.4929 0H5.30484C3.89791 0 2.5486 0.558901 1.55375 1.55375C0.558902 2.5486 0 3.89791 0 5.30484V38.6496C0 40.0565 0.558902 41.4058 1.55375 42.4007C2.5486 43.3955 3.89791 43.9544 5.30484 43.9544H23.4929C24.8998 43.9544 26.2491 43.3955 27.244 42.4007C28.2388 41.4058 28.7977 40.0565 28.7977 38.6496V5.30484C28.7977 3.89791 28.2388 2.5486 27.244 1.55375C26.2491 0.558901 24.8998 0 23.4929 0ZM24.2507 38.6496C24.2507 38.8506 24.1709 39.0433 24.0287 39.1854C23.8866 39.3276 23.6939 39.4074 23.4929 39.4074H5.30484C5.10385 39.4074 4.91109 39.3276 4.76897 39.1854C4.62685 39.0433 4.54701 38.8506 4.54701 38.6496V5.30484C4.54701 5.10385 4.62685 4.91109 4.76897 4.76897C4.91109 4.62685 5.10385 4.54701 5.30484 4.54701H23.4929C23.6939 4.54701 23.8866 4.62685 24.0287 4.76897C24.1709 4.91109 24.2507 5.10385 24.2507 5.30484V38.6496ZM17.4302 10.6097C17.4302 11.2092 17.2524 11.7953 16.9193 12.2938C16.5862 12.7923 16.1128 13.1808 15.5589 13.4103C15.005 13.6397 14.3955 13.6997 13.8075 13.5828C13.2195 13.4658 12.6793 13.1771 12.2554 12.7532C11.8314 12.3292 11.5427 11.7891 11.4258 11.2011C11.3088 10.613 11.3688 10.0035 11.5983 9.44964C11.8277 8.89574 12.2162 8.42231 12.7147 8.08922C13.2132 7.75613 13.7993 7.57835 14.3989 7.57835C15.2028 7.57835 15.9739 7.89772 16.5423 8.46621C17.1108 9.03469 17.4302 9.80572 17.4302 10.6097Z" fill="#E5E7EB"/>
            </svg>
          </span>
          DOWNLOAD AEGIS
        </a>
        <a href="#" className={styles.btnOutlines}>
          READ THE RESEARCH
        </a>
      </div>
 
      {/* Stats */}
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <span className={styles.statNum}>
            1<span className={styles.statColon}>:618</span>
          </span>
          <span className={styles.statLabel}>CURRENT POLICE-TO-POPULATION RATIO</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNum}><p>#</p>1</span>
          <span className={styles.statLabel}>OBSTACLE IS BROKEN TRUST</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNum}>3</span>
          <span className={styles.statLabel}>INTERCONNECTED APPLICATIONS IN ONE ECOSYSTEM</span>
        </div>
        <div className={styles.statItem} id={styles.statInfinity}>
          <span className={styles.statNum}><p>∞</p></span>
          <span className={styles.statLabel}>POTENTIAL FOR NATIONAL &amp; REGIONAL SCALE</span>
        </div>
      </div>
    </section>
)
 
const TwoRoles = () => (
  <section className={styles.twoRoles}>
    <div className={styles.twoRolesLeft}>
      <p className={styles.sectionTag}>Aegis Mobile App — Two Profiles</p>
      <h2 className={styles.sectionTitle}>One App, Two Roles, Built for Both Sides of Safety.</h2>
      <p className={styles.sectionDesc}>
        Whether you're reporting a crime anonymously or managing
a case as a security officer, Aegis gives you a tailored
experience — connected through the same secure backend.
      </p>
    </div>
    <div className={styles.twoRolesRight}>
      <div className={styles.roleCard}>
        <span className={styles.roleIcon}>
          <svg width="39" height="41" viewBox="0 0 39 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="38.9988" height="40.2485" rx="6" fill="#00D4AA" fill-opacity="0.1"/>
          <path d="M23.25 12.6435V27.5997C23.2519 27.7116 23.2248 27.8221 23.1712 27.9205C23.1177 28.0188 23.0396 28.1015 22.9445 28.1606C22.8365 28.2249 22.7116 28.2551 22.5862 28.2473C22.4608 28.2395 22.3406 28.194 22.2414 28.1169L17.1187 24.1325C17.0816 24.1032 17.0516 24.0658 17.0311 24.0231C17.0105 23.9805 16.9999 23.9338 17 23.8864V16.3614C17.0001 16.3139 17.0111 16.267 17.0321 16.2244C17.0531 16.1817 17.0835 16.1444 17.1211 16.1153L22.2437 12.131C22.356 12.044 22.4946 11.9978 22.6366 12.0001C22.7786 12.0024 22.9156 12.0529 23.025 12.1435C23.0969 12.2052 23.1543 12.282 23.1932 12.3684C23.2321 12.4548 23.2515 12.5487 23.25 12.6435ZM15.4375 16.3739H13.25C12.9185 16.3739 12.6005 16.5056 12.3661 16.74C12.1317 16.9745 12 17.2924 12 17.6239V22.6239C12 22.9555 12.1317 23.2734 12.3661 23.5078C12.6005 23.7422 12.9185 23.8739 13.25 23.8739H15.4375C15.5204 23.8739 15.5999 23.841 15.6585 23.7824C15.7171 23.7238 15.75 23.6443 15.75 23.5614V16.6864C15.75 16.6036 15.7171 16.5241 15.6585 16.4655C15.5999 16.4069 15.5204 16.3739 15.4375 16.3739ZM26.2188 18.0583C26.1649 17.9953 26.0991 17.9436 26.025 17.9062C25.951 17.8689 25.8703 17.8466 25.7876 17.8408C25.7049 17.8349 25.6219 17.8456 25.5434 17.8721C25.4648 17.8987 25.3923 17.9406 25.3302 17.9954C25.268 18.0502 25.2173 18.1169 25.1811 18.1915C25.145 18.2661 25.124 18.3471 25.1194 18.4299C25.1149 18.5127 25.1268 18.5955 25.1546 18.6736C25.1824 18.7517 25.2254 18.8236 25.2812 18.8849C25.5827 19.2272 25.749 19.6678 25.749 20.1239C25.749 20.5801 25.5827 21.0206 25.2812 21.363C25.2254 21.4243 25.1824 21.4961 25.1546 21.5742C25.1268 21.6523 25.1149 21.7352 25.1194 21.818C25.124 21.9008 25.145 21.9818 25.1811 22.0564C25.2173 22.131 25.268 22.1976 25.3302 22.2525C25.3923 22.3073 25.4648 22.3492 25.5434 22.3758C25.6219 22.4023 25.7049 22.413 25.7876 22.4071C25.8703 22.4012 25.951 22.379 26.025 22.3416C26.0991 22.3043 26.1649 22.2526 26.2188 22.1896C26.7215 21.6189 26.9988 20.8845 26.9988 20.1239C26.9988 19.3634 26.7215 18.629 26.2188 18.0583Z" fill="#F59E0B"/>
          </svg>
        </span>
        <div className={styles.roleInfo}>
          <p>Profile 01</p>
          <span>Crime Response</span>
          <p>Citizens — anonymous or verified</p>
        </div>
      </div>
      <div className={styles.roleCard}>
        <span className={styles.roleIcon}>
          <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="39.625" height="40.25" rx="6" fill="#00D4AA" fill-opacity="0.1"/>
          <path d="M26.0625 12H13.5625C13.1481 12 12.7507 12.1646 12.4576 12.4576C12.1646 12.7507 12 13.1481 12 13.5625V17.9375C12 22.1789 14.0563 24.7516 15.7812 26.1633C17.6336 27.6781 19.4875 28.1945 19.5656 28.2172C19.7273 28.2609 19.8977 28.2609 20.0594 28.2172C20.1375 28.1953 21.9914 27.6781 23.8438 26.1633C25.5688 24.7516 27.625 22.1789 27.625 17.9375V13.5625C27.625 13.1481 27.4604 12.7507 27.1674 12.4576C26.8743 12.1646 26.4769 12 26.0625 12ZM25.75 17.9375C25.75 20.7273 24.7273 22.9914 22.7102 24.668C21.8455 25.3814 20.8656 25.9423 19.8125 26.3266C18.7593 25.9426 17.7793 25.3817 16.9148 24.668C14.8977 22.9914 13.875 20.7273 13.875 17.9375V13.875H25.75V17.9375Z" fill="#F59E0B"/>
          </svg>
        </span>
        <div className={styles.roleInfo}>
          <p>Profile 02</p>
          <span>Security Personnel</span>
          <p className={styles.roleDesc}>Officers — verified & credentialed</p>
        </div>
        
      </div>
    </div>
  </section>
);

const ViciousCycle = () => (
  <section id="problem" className={styles.vicious}>
    <div className={styles.viciousHeader}>
      <div className={styles.sectionTag}>THE RESEARCH</div>
      <h2 className={styles.sectionTitles}>A Vicious Cycle That Defeats Itself</h2>
      <p className={styles.sectionDescs}>
        Based on "Obstacles to Effective Policing in Nigeria" (Yunusa & Usman, 2022).
The root cause is not resources — it's broken relationships.
      </p>
    </div>
    <div className={styles.viciousGrid}>
      <div>
        <div className={styles.quoteBox}>
          <p className={styles.quoteText}>"Criminal investigation principally depends on information provided to the investigator in the form of a witness' report or a victim's complaint."</p>
          <p className={styles.quoteSource}>— Yunusa & Usman, 2022</p>
        </div>
        <div className={styles.breakdownLoop}>
          <h2 className={styles.loopTitle}>The Breakdown Loop</h2>
          
          <div className={styles.loopList}>
            <div className={styles.loopItem}>
              <span className={styles.loopNumber}>01</span>
              <p><strong>High crime rates</strong> from unemployment, poverty & political instability</p>
            </div>
            
            <div className={styles.loopItem}>
              <span className={styles.loopNumber}>02</span>
              <p><strong>Police lack resources & public trust</strong> — cannot respond effectively</p>
            </div>
            
            <div className={styles.loopItem}>
              <span className={styles.loopNumber}>03</span>
              <p><strong>Corruption & brutality</strong> erode what little trust remains</p>
            </div>
            
            <div className={styles.loopItem}>
              <span className={styles.loopNumber}>04</span>
              <p><strong>Citizens refuse to cooperate</strong> — fear of leaks, retaliation, implication</p>
            </div>
            
            <div className={styles.loopItem}>
              <span className={styles.loopNumber}>05</span>
              <p><strong>Crime goes undetected & unsolved</strong> — cycle repeats, worsens</p>
            </div>
          </div>
        </div>
              
      </div>
      <div className={styles.rankedBarriers}>
        <h2 className={styles.mainTitles}>RANKED BARRIERS — MOST TO LEAST HARMFUL</h2>

        <div className={styles.barrierList}>
          {/* Tier 1 */}
          <div className={styles.barrierItem}>
            <span className={`${styles.tierBadge} ${styles.tier1}`}>TIER 1</span>
            <p>General Lack of Public Cooperation &amp; Mistrust</p>
          </div>

          <div className={styles.barrierItem}>
            <span className={`${styles.tierBadge} ${styles.tier1}`}>TIER 1</span>
            <p>Police Corruption & Unethical Behavior</p>
          </div>

          <div className={styles.barrierItem}>
            <span className={`${styles.tierBadge} ${styles.tier1}`}>TIER 1</span>
            <p>Police Brutality &amp; Harassment of Citizens</p>
          </div>

          {/* Tier 2 */}
          <div className={styles.barrierItem}>
            <span className={`${styles.tierBadge} ${styles.tier2}`}>TIER 2</span>
            <p>Insufficient Funding &amp; Inadequate Training</p>
          </div>

          <div className={styles.barrierItem}>
            <span className={`${styles.tierBadge} ${styles.tier2}`}>TIER 2</span>
            <p>Lack of Adequate Personnel &amp; Equipment</p>
          </div>

          {/* Tier 3 */}
          <div className={styles.barrierItem}>
            <span className={`${styles.tierBadge} ${styles.tier3}`}>TIER 3</span>
            <p>Constitutional, Political &amp; Systemic Issues</p>
          </div>

          <div className={styles.barrierItem}>
            <span className={`${styles.tierBadge} ${styles.tier3}`}>TIER 3</span>
            <p>Nepotism, Language Barriers &amp; Integrity Issues</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ThreeApps = () => (
  <section id="solution" className={styles.threeApps}>
    <div className={styles.threeAppsHeader}>
      <div className={styles.sectionTag}>THE SOLUTION</div>
      <h2 className={styles.sectionTitles}>Three Apps. One Ecosystem. One Goal.</h2>
      <p className={styles.sectionDesc} id={styles.threeAppsDescs}>
        A hybrid approach that neither police nor citizens control — rebuilding the
bridge incrementally through verified, safe channels.
      </p>
    </div>
    <div className={styles.appsGrid}>
        {/* Layer 1 - SafeExport */}
        <div className={styles.appCard}>
          <div className={styles.layerHeader}>
            <svg width="50" height="53" viewBox="0 0 50 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="49.9865" height="53.0098" rx="6.44986" fill="#00D4AA" fill-opacity="0.12"/>
            <path d="M35.0711 21.9695H31.04V18.9462C31.04 17.3425 30.4029 15.8045 29.2689 14.6705C28.1349 13.5365 26.5969 12.8994 24.9932 12.8994C23.3895 12.8994 21.8515 13.5365 20.7175 14.6705C19.5835 15.8045 18.9465 17.3425 18.9465 18.9462V21.9695H14.9153C14.3807 21.9695 13.8681 22.1819 13.4901 22.5599C13.1121 22.9379 12.8997 23.4506 12.8997 23.9851V38.0942C12.8997 38.6288 13.1121 39.1414 13.4901 39.5194C13.8681 39.8974 14.3807 40.1098 14.9153 40.1098H35.0711C35.6057 40.1098 36.1184 39.8974 36.4964 39.5194C36.8744 39.1414 37.0867 38.6288 37.0867 38.0942V23.9851C37.0867 23.4506 36.8744 22.9379 36.4964 22.5599C36.1184 22.1819 35.6057 21.9695 35.0711 21.9695ZM24.9932 32.5513C24.6942 32.5513 24.402 32.4627 24.1534 32.2966C23.9048 32.1305 23.711 31.8944 23.5966 31.6182C23.4822 31.3419 23.4523 31.038 23.5106 30.7447C23.5689 30.4515 23.7129 30.1821 23.9243 29.9707C24.1357 29.7593 24.4051 29.6153 24.6983 29.557C24.9915 29.4987 25.2955 29.5286 25.5717 29.643C25.8479 29.7575 26.084 29.9512 26.2501 30.1998C26.4163 30.4484 26.5049 30.7407 26.5049 31.0397C26.5049 31.4406 26.3456 31.8251 26.0621 32.1086C25.7787 32.3921 25.3941 32.5513 24.9932 32.5513ZM29.0244 21.9695H20.9621V18.9462C20.9621 17.877 21.3868 16.8517 22.1428 16.0957C22.8987 15.3397 23.9241 14.915 24.9932 14.915C26.0624 14.915 27.0877 15.3397 27.8437 16.0957C28.5997 16.8517 29.0244 17.877 29.0244 18.9462V21.9695Z" fill="#F59E0B"/>
            </svg>
            <span className={styles.layerLabel}>LAYER 1</span>
          </div>
          <h3 className={styles.appName}>SafeEport</h3>
          <p className={styles.appDesc}>
            Fully anonymous crime reporting with end-to-end encryption. No personal data collected, ever.
          </p>
          <ul className={styles.featureList}>
            <li>End-to-end encrypted reporting</li>
            <li>Unique case ID — no identity linked</li>
            <li>Text, voice, photo &amp; video reports</li>
            <li>Blockchain audit trail</li>
            <li>Cryptographic proof of submission</li>
            <li>SMS fallback for low-connectivity</li>
          </ul>
        </div>

        {/* Layer 2 - CommunityWatch */}
        <div className={styles.appCard}>
          <div className={styles.layerHeader}>
            <svg width="59" height="53" viewBox="0 0 59 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="58.0488" height="52.6742" rx="6.44986" fill="#00D4AA" fill-opacity="0.12"/>
            <path d="M44.0741 37.6242H41.9241V27.9494L42.2385 28.2639C42.4406 28.4656 42.7145 28.5788 43 28.5785C43.2856 28.5783 43.5593 28.4646 43.761 28.2625C43.9627 28.0605 44.0759 27.7865 44.0756 27.501C44.0754 27.2155 43.9617 26.9418 43.7596 26.7401L30.5441 13.5286C30.141 13.1257 29.5943 12.8994 29.0244 12.8994C28.4544 12.8994 27.9078 13.1257 27.5046 13.5286L14.2891 26.7401C14.0876 26.9418 13.9744 27.2153 13.9746 27.5004C13.9747 27.7856 14.0881 28.059 14.2898 28.2605C14.4915 28.462 14.765 28.5752 15.0501 28.5751C15.3353 28.5749 15.6087 28.4616 15.8102 28.2598L16.1247 27.9494V37.6242H13.9747C13.6896 37.6242 13.4162 37.7375 13.2146 37.9391C13.013 38.1407 12.8997 38.4141 12.8997 38.6992C12.8997 38.9843 13.013 39.2577 13.2146 39.4593C13.4162 39.6609 13.6896 39.7742 13.9747 39.7742H44.0741C44.3592 39.7742 44.6326 39.6609 44.8342 39.4593C45.0358 39.2577 45.149 38.9843 45.149 38.6992C45.149 38.4141 45.0358 38.1407 44.8342 37.9391C44.6326 37.7375 44.3592 37.6242 44.0741 37.6242ZM32.2493 37.6242H25.7994V31.1744C25.7994 31.0318 25.8561 30.8951 25.9569 30.7943C26.0577 30.6935 26.1944 30.6369 26.3369 30.6369H31.7118C31.8544 30.6369 31.9911 30.6935 32.0919 30.7943C32.1927 30.8951 32.2493 31.0318 32.2493 31.1744V37.6242Z" fill="#F59E0B"/>
            </svg>

            <span className={styles.layerLabel}>LAYER 2</span>
          </div>
          <h3 className={styles.appName}>CommunityWatch</h3>
          <p className={styles.appDesc}>
            Verified community safety network. Empower neighbours with AI safeguards preventing vigilante escalation.
          </p>
          <ul className={styles.featureList}>
            <li>Verified community alerts</li>
            <li>Location-based resident groups</li>
            <li>Real-time crime mapping</li>
            <li>AI moderation of hate speech &amp; false accusations</li>
            <li>No mob-organising capabilities</li>
            <li>Education prompts against jungle justice</li>
          </ul>
        </div>

        {/* Layer 3 + 4 - PoliceConnect */}
        <div className={styles.appCard}>
          <div className={styles.layerHeader}>
            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48.8347" height="48.8347" transform="translate(2.13463e-06 48.835) rotate(-90)" fill="#00D4AA" fill-opacity="0.12"/>
            <path d="M22.4977 12.9003L26.3369 12.9003C26.5915 12.9003 26.8356 13.0014 27.0156 13.1814C27.1956 13.3614 27.2967 13.6056 27.2967 13.8601L27.2967 34.0159L29.2163 34.0159L29.2163 23.4581C29.2163 23.2036 29.3175 22.9594 29.4975 22.7794C29.6775 22.5994 29.9216 22.4983 30.1761 22.4983L33.0555 22.4983C33.3101 22.4983 33.5542 22.5994 33.7342 22.7794C33.9142 22.9594 34.0153 23.2036 34.0153 23.4581L34.0153 34.0159L34.9751 34.0159C35.2297 34.0159 35.4738 34.1171 35.6538 34.2971C35.8338 34.4771 35.935 34.7212 35.935 34.9757C35.935 35.2303 35.8338 35.4744 35.6538 35.6544C35.4738 35.8344 35.2297 35.9355 34.9751 35.9355L13.8595 35.9355C13.605 35.9355 13.3608 35.8344 13.1808 35.6544C13.0008 35.4744 12.8997 35.2303 12.8997 34.9757C12.8997 34.7212 13.0008 34.4771 13.1808 34.2971C13.3608 34.1171 13.605 34.0159 13.8595 34.0159L14.8193 34.0159L14.8193 19.6189C14.8193 19.3644 14.9204 19.1202 15.1004 18.9402C15.2804 18.7602 15.5246 18.6591 15.7791 18.6591L18.6585 18.6591C18.9131 18.6591 19.1572 18.7602 19.3372 18.9402C19.5172 19.1202 19.6183 19.3644 19.6183 19.6189L19.6183 34.0159L21.5379 34.0159L21.5379 13.8601C21.5379 13.6056 21.6391 13.3614 21.8191 13.1814C21.999 13.0014 22.2432 12.9003 22.4977 12.9003Z" fill="#F59E0B"/>
            </svg>

            <span className={styles.layerLabel}>LAYER 3 + 4</span>
          </div>
          <h3 className={styles.appName}>PoliceConnect</h3>
          <p className={styles.appDesc}>
            Police response management, transparency dashboards, and two-way trust-building features — open to the public and auditable.
          </p>
          <ul className={styles.featureList}>
            <li>Digital dispatch &amp; case management</li>
            <li>Public response time metrics</li>
            <li>Police performance scorecards</li>
            <li>Whistleblower protection channel</li>
            <li>Community town hall integration</li>
            <li>Evidence chain-of-custody tracking</li>
          </ul>
        </div>
      </div>
  </section>
);

const FourLayers = () => (
  <section id="architecture" className={styles.fourLayers}>
    <div>
      <div className={styles.sectionTag}>TECHNICAL ARCHITECTURE</div>
      <h2 className={styles.sectionTitles}>Four Layers of Trust-Building</h2>
      <p className={styles.sectionDesc}>
        Each layer addresses a specific failure mode — from anonymous reporting to
full transparency accountability.
      </p>
    <div className={styles.layersTable}>
        {[
          {
            label: 'ANONYMOUS CITIZEN → POLICE',
            name: 'Safe Reporting Channel',
            desc: 'Enable crime reporting without fear of identification, retaliation, or police leaks.',
            features: [
              'E2E encryption with zero personal data retention',
              'Blockchain audit trail prevents police tampering',
              'Multi-channel: text, voice, photo, video',
              'USSD codes for areas with no internet',
            ],
          },
          {
            label: 'CITIZEN 🔁 CITIZEN',
            name: 'Community Safety Network',
            desc: 'Give communities a legal, safe outlet for safety intelligence — eliminating the vacuum that vigilantism fills.',
            features: [
              'Verified residents only — no anonymous rumors',
              'AI flags calls to violence before they spread',
              'Mandatory escalation for serious crimes',
              'Educational prompts woven into reporting flows',
            ],
          },
          {
            label: 'PUBLIC ACCOUNTABILITY',
            name: 'Transparency Dashboard',
            desc: 'Hold police publicly accountable through real-time metrics visible to anyone, anywhere.',
            features: [
              'Response time by area and crime type',
              'Case resolution rates — open/closed tracking',
              'Resource deployment visibility',
              'Citizen satisfaction scores published publicly',
            ],
          },
          {
            label: 'TRUST REHABILITATION',
            name: 'Trust-Building Features',
            desc: 'Close the loop between reporting and resolution, and open channels for community dialogue.',
            features: [
              'Secure two-way chat: reporter ↔ case officer',
              'Whistleblower channel for corruption reports',
              'Town halls and police–community dialogues',
              'Case status verification by unique ID',
            ],
          },
        ].map((layer, i) => (
          <div key={i} className={styles.layerRow}>
            <div className={styles.layerNumber}>
              <span>{i + 1}</span>
            </div>
            <div className={styles.layerLeft}>
              <div className={styles.layerLabel}>{layer.label}</div>
              <h4 className={styles.layerName}>{layer.name}</h4>
              <p className={styles.layerDesc}>{layer.desc}</p>
            </div>
            <div className={styles.layerRight}>
              {layer.features.map((feat, j) => (
                <div key={j} className={styles.layerFeature}>
                  <span className={styles.featureDiamond}>✦</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
  </section>
);

const WhyAegis = () => (
  <section className={styles.whyAegis}>
    <div className={styles.whyHeader}>
      <div className={styles.sectionTag}>CRITICAL SUCCESS FACTORS</div>
      <h2 className={styles.whyTitle}>What Makes Aegis Work Where Others Failed</h2>
      <p className={styles.whyDesc}>
        Five non-negotiable design principles learned from studying the failure modes
        of existing systems.
      </p>
    </div>

    <div className={styles.whyGrid}>
      {[
        {
          icon: <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5625 6.87505H3.125V10.625H2.1875C1.93886 10.625 1.7004 10.7238 1.52459 10.8996C1.34877 11.0755 1.25 11.3139 1.25 11.5625C1.25 11.8112 1.34877 12.0496 1.52459 12.2255C1.7004 12.4013 1.93886 12.5 2.1875 12.5H17.1875C17.4361 12.5 17.6746 12.4013 17.8504 12.2255C18.0262 12.0496 18.125 11.8112 18.125 11.5625C18.125 11.3139 18.0262 11.0755 17.8504 10.8996C17.6746 10.7238 17.4361 10.625 17.1875 10.625H16.25V6.87505H17.8125C18.0166 6.87506 18.2152 6.80845 18.378 6.68533C18.5408 6.56221 18.659 6.38931 18.7146 6.1929C18.7702 5.99648 18.7602 5.78729 18.6861 5.59709C18.6119 5.4069 18.4778 5.24609 18.3039 5.13911L10.1789 0.13911C10.0311 0.0481573 9.86102 0 9.6875 0C9.51398 0 9.34387 0.0481573 9.19609 0.13911L1.07109 5.13911C0.897241 5.24609 0.763057 5.4069 0.688925 5.59709C0.614794 5.78729 0.604768 5.99648 0.660368 6.1929C0.715969 6.38931 0.834159 6.56221 0.996983 6.68533C1.15981 6.80845 1.35837 6.87506 1.5625 6.87505ZM5 6.87505H6.875V10.625H5V6.87505ZM10.625 6.87505V10.625H8.75V6.87505H10.625ZM14.375 10.625H12.5V6.87505H14.375V10.625ZM9.6875 2.03833L14.5 5.00005H4.875L9.6875 2.03833ZM19.375 14.6875C19.375 14.9362 19.2762 15.1746 19.1004 15.3505C18.9246 15.5263 18.6861 15.625 18.4375 15.625H0.9375C0.68886 15.625 0.450403 15.5263 0.274587 15.3505C0.098772 15.1746 0 14.9362 0 14.6875C0 14.4389 0.098772 14.2005 0.274587 14.0246C0.450403 13.8488 0.68886 13.75 0.9375 13.75H18.4375C18.6861 13.75 18.9246 13.8488 19.1004 14.0246C19.2762 14.2005 19.375 14.4389 19.375 14.6875Z" fill="#F59E0B"/>
</svg>
,
          title: 'Independence from Police Control',
          desc: 'Aegis is managed by an independent oversight body. Police are users, not owners. This prevents data manipulation entirely.',
          num: '01',
        },
        {
          icon: <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.75 5.625H5V3.75C5 3.08696 5.26339 2.45107 5.73223 1.98223C6.20107 1.51339 6.83696 1.25 7.5 1.25C8.70078 1.25 9.78125 2.10938 10.0125 3.24922C10.0468 3.41029 10.1433 3.55129 10.2811 3.64159C10.4188 3.73189 10.5866 3.76419 10.748 3.73145C10.9094 3.69872 11.0514 3.60361 11.143 3.46679C11.2347 3.32997 11.2686 3.1625 11.2375 3.00078C10.8844 1.26172 9.3125 0 7.5 0C6.50576 0.00103406 5.55253 0.396454 4.84949 1.09949C4.14645 1.80253 3.75103 2.75576 3.75 3.75V5.625H1.25C0.918479 5.625 0.600537 5.7567 0.366116 5.99112C0.131696 6.22554 0 6.54348 0 6.875V15.625C0 15.9565 0.131696 16.2745 0.366116 16.5089C0.600537 16.7433 0.918479 16.875 1.25 16.875H13.75C14.0815 16.875 14.3995 16.7433 14.6339 16.5089C14.8683 16.2745 15 15.9565 15 15.625V6.875C15 6.54348 14.8683 6.22554 14.6339 5.99112C14.3995 5.7567 14.0815 5.625 13.75 5.625ZM8.125 11.768V13.75C8.125 13.9158 8.05915 14.0747 7.94194 14.1919C7.82473 14.3092 7.66576 14.375 7.5 14.375C7.33424 14.375 7.17527 14.3092 7.05806 14.1919C6.94085 14.0747 6.875 13.9158 6.875 13.75V11.768C6.45799 11.6205 6.10653 11.3304 5.88273 10.9489C5.65893 10.5674 5.57721 10.1191 5.652 9.68314C5.7268 9.2472 5.95329 8.85174 6.29146 8.56665C6.62963 8.28156 7.0577 8.1252 7.5 8.1252C7.9423 8.1252 8.37037 8.28156 8.70854 8.56665C9.04671 8.85174 9.2732 9.2472 9.348 9.68314C9.42279 10.1191 9.34107 10.5674 9.11727 10.9489C8.89347 11.3304 8.54201 11.6205 8.125 11.768Z" fill="#F59E0B"/>
</svg>
,
          title: 'Open Source & Auditable',
          desc: 'All code is publicly available and subject to regular third-party security audits. No backdoors, ever.',
          num: '02',
        },
        {
          icon: <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.8665 4.67987L17.8728 0.69081C17.7993 0.543987 17.6977 0.41307 17.5736 0.305535C17.4496 0.198001 17.3056 0.115955 17.1498 0.0640836C16.9941 0.0122122 16.8296 -0.00846893 16.6659 0.00322132C16.5021 0.0149116 16.3423 0.0587444 16.1954 0.132216L14.2525 1.10331L10.1595 0.0204974C10.0545 -0.00683248 9.94422 -0.00683248 9.8392 0.0204974L5.74623 1.10331L3.80326 0.132216C3.65645 0.0587444 3.4966 0.0149116 3.33285 0.00322132C3.1691 -0.00846893 3.00465 0.0122122 2.84889 0.0640836C2.69313 0.115955 2.54911 0.198001 2.42506 0.305535C2.30102 0.41307 2.19937 0.543987 2.12592 0.69081L0.132168 4.67909C0.0586961 4.8259 0.0148635 4.98575 0.00317326 5.1495C-0.00851699 5.31325 0.0121641 5.47771 0.0640355 5.63346C0.115907 5.78922 0.197953 5.93324 0.305487 6.05729C0.413022 6.18134 0.543939 6.28299 0.690762 6.35643L2.80014 7.4119L7.13529 10.508C7.19921 10.5534 7.271 10.5865 7.34701 10.6057L12.347 11.8557C12.4517 11.8819 12.5614 11.8806 12.6655 11.8519C12.7696 11.8231 12.8644 11.7679 12.9408 11.6916L16.0658 8.56659L17.2439 7.38847L19.3079 6.35643C19.6043 6.2081 19.8296 5.94817 19.9343 5.63379C20.0391 5.3194 20.0147 4.97629 19.8665 4.67987ZM15.5783 7.2869L12.89 5.13378C12.7695 5.03733 12.6177 4.98884 12.4637 4.99764C12.3096 5.00644 12.1643 5.0719 12.0556 5.18143C10.6642 6.583 9.11342 6.40565 8.12436 5.78065L11.5025 2.4994H13.9876L16.1134 6.75019L15.5783 7.2869ZM12.3072 10.5572L7.76654 9.42206L3.92279 6.67675L6.11029 2.30175L9.99936 1.27128L10.765 1.47362L7.24936 4.88612L7.24311 4.89315C7.11077 5.02549 7.00983 5.18586 6.94775 5.36242C6.88567 5.53898 6.86404 5.72722 6.88443 5.91327C6.90483 6.09931 6.96674 6.27839 7.0656 6.43731C7.16446 6.59622 7.29774 6.73091 7.45561 6.83143C9.06186 7.85722 11.0001 7.69081 12.5267 6.44081L14.6869 8.17597L12.3072 10.5572ZM10.2978 13.276C10.264 13.411 10.1861 13.531 10.0764 13.6168C9.96675 13.7025 9.83156 13.7492 9.69232 13.7494C9.64097 13.7494 9.5898 13.7431 9.53998 13.7307L6.28139 12.9158C6.20525 12.897 6.1334 12.8639 6.06967 12.8182L4.01107 11.3478C3.8845 11.2485 3.80113 11.1041 3.77834 10.9448C3.75555 10.7855 3.79509 10.6235 3.88872 10.4926C3.98236 10.3617 4.12287 10.272 4.281 10.2421C4.43914 10.2122 4.6027 10.2445 4.73764 10.3322L6.69936 11.7338L9.84311 12.5182C10.0039 12.5584 10.1421 12.6608 10.2274 12.8029C10.3126 12.945 10.338 13.1152 10.2978 13.276Z" fill="#F59E0B"/>
</svg>
,
          title: 'Multi-Stakeholder Governance',
          desc: 'The board includes civil society, police reps, tech experts, and community leaders— no single party holds veto power.',
          num: '03',
        },
        {
          icon: <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.75 0H1.25C0.918479 0 0.600537 0.131696 0.366116 0.366116C0.131696 0.600537 0 0.918479 0 1.25V5.625C0 9.74375 1.99375 12.2398 3.66641 13.6086C5.46797 15.082 7.26016 15.582 7.33828 15.6031C7.4457 15.6323 7.55898 15.6323 7.66641 15.6031C7.74453 15.582 9.53438 15.082 11.3383 13.6086C13.0063 12.2398 15 9.74375 15 5.625V1.25C15 0.918479 14.8683 0.600537 14.6339 0.366116C14.3995 0.131696 14.0815 0 13.75 0ZM13.75 5.625C13.75 6.99531 13.512 8.24115 13.0359 9.3625L7.85859 5.73828C7.75351 5.66466 7.62831 5.62518 7.5 5.62518C7.37169 5.62518 7.24649 5.66466 7.14141 5.73828L1.96328 9.3625C1.48906 8.24375 1.25 6.99531 1.25 5.625V1.25H13.75V5.625Z" fill="#F59E0B"/>
</svg>
,
          title: 'GDPR-Level Data Protection',
          desc: 'Data minimisation by design, regular purging, zero third-party sharing. Privacy is the default, not a setting.',
          num: '04',
        },
        {
          icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.6689 1.4851C5.63812 1.40887 5.62266 1.32733 5.62339 1.24512C5.62413 1.16292 5.64105 1.08166 5.67318 1.006C5.73809 0.853185 5.86104 0.732415 6.01499 0.670255C6.16894 0.608095 6.34128 0.609637 6.49409 0.674542C6.6469 0.739447 6.76767 0.862399 6.82983 1.01635L7.45483 2.57885C7.48561 2.65508 7.50108 2.73662 7.50034 2.81883C7.4996 2.90103 7.48269 2.98228 7.45055 3.05795C7.41841 3.13361 7.37168 3.20221 7.31304 3.25982C7.25439 3.31742 7.18497 3.36291 7.10874 3.39369C7.03251 3.42447 6.95097 3.43993 6.86876 3.4392C6.78656 3.43846 6.70531 3.42154 6.62964 3.38941C6.55398 3.35727 6.48538 3.31054 6.42777 3.25189C6.37017 3.19325 6.32468 3.12383 6.2939 3.0476L5.6689 1.4851ZM1.01499 6.83119L2.57749 7.45619C2.65372 7.48697 2.73526 7.50243 2.81747 7.5017C2.89967 7.50096 2.98093 7.48404 3.05659 7.45191C3.13226 7.41977 3.20085 7.37304 3.25846 7.31439C3.31606 7.25575 3.36156 7.18633 3.39233 7.1101C3.42311 7.03387 3.43858 6.95233 3.43784 6.87012C3.4371 6.78792 3.42018 6.70666 3.38805 6.631C3.35591 6.55533 3.30918 6.48674 3.25054 6.42913C3.19189 6.37152 3.12247 6.32603 3.04624 6.29525L1.48374 5.67025C1.40751 5.63948 1.32597 5.62401 1.24376 5.62475C1.16156 5.62548 1.08031 5.6424 1.00464 5.67454C0.928975 5.70668 0.860381 5.75341 0.802774 5.81205C0.745167 5.8707 0.699675 5.94012 0.668897 6.01635C0.606737 6.1703 0.608279 6.34264 0.673184 6.49545C0.738089 6.64826 0.861041 6.76903 1.01499 6.83119ZM16.4837 10.6703L14.9212 10.0453C14.7673 9.9831 14.595 9.98464 14.4421 10.0495C14.2893 10.1144 14.1686 10.2374 14.1064 10.3913C14.0442 10.5453 14.0458 10.7176 14.1107 10.8704C14.1756 11.0233 14.2985 11.144 14.4525 11.2062L16.015 11.8312C16.1689 11.8934 16.3413 11.8918 16.4941 11.8269C16.6469 11.762 16.7677 11.639 16.8298 11.4851C16.892 11.3311 16.8905 11.1588 16.8255 11.006C16.7606 10.8532 16.6377 10.7324 16.4837 10.6703ZM11.2048 14.4538C11.1427 14.2999 11.0219 14.1769 10.8691 14.112C10.7163 14.0471 10.5439 14.0456 10.39 14.1078C10.236 14.1699 10.1131 14.2907 10.0482 14.4435C9.98328 14.5963 9.98174 14.7686 10.0439 14.9226L10.6689 16.4851C10.7311 16.639 10.8518 16.762 11.0046 16.8269C11.1575 16.8918 11.3298 16.8934 11.4837 16.8312C11.6377 16.769 11.7606 16.6483 11.8255 16.4954C11.8905 16.3426 11.892 16.1703 11.8298 16.0163L11.2048 14.4538ZM17.3361 0.197599C17.2788 0.136429 17.2097 0.087419 17.133 0.0534855C17.0564 0.019552 16.9737 0.00138861 16.8898 7.65513e-05C16.806 -0.00123551 16.7228 0.0143306 16.6451 0.0458482C16.5674 0.0773659 16.4969 0.124191 16.4376 0.183536L12.3431 4.27807L11.9228 3.85776C11.6906 3.62531 11.4149 3.44092 11.1114 3.31511C10.8079 3.18929 10.4826 3.12454 10.1541 3.12454C9.82551 3.12454 9.5002 3.18929 9.1967 3.31511C8.89321 3.44092 8.61749 3.62531 8.3853 3.85776L7.04155 5.19916C7.0125 5.22818 6.98945 5.26265 6.97372 5.30059C6.958 5.33852 6.9499 5.37919 6.9499 5.42026C6.9499 5.46132 6.958 5.50199 6.97372 5.53992C6.98945 5.57786 7.0125 5.61233 7.04155 5.64135L11.8619 10.4585C11.8909 10.4876 11.9254 10.5106 11.9633 10.5264C12.0012 10.5421 12.0419 10.5502 12.083 10.5502C12.124 10.5502 12.1647 10.5421 12.2026 10.5264C12.2406 10.5106 12.275 10.4876 12.3041 10.4585L13.6119 9.15072C14.0859 8.68586 14.3607 8.05501 14.3783 7.39135C14.3847 7.05584 14.3232 6.72249 14.1974 6.41139C14.0716 6.10029 13.8841 5.81789 13.6462 5.58119L13.2259 5.16166L17.3041 1.08588C17.4229 0.970525 17.4926 0.813704 17.4986 0.648176C17.5046 0.482648 17.4463 0.321215 17.3361 0.197599ZM5.43999 5.80854C5.38079 5.74931 5.31028 5.70259 5.23267 5.67114C5.15506 5.6397 5.07192 5.62417 4.98818 5.62548C4.90445 5.62679 4.82184 5.64492 4.74525 5.67878C4.66866 5.71264 4.59965 5.76155 4.54233 5.8226C4.43209 5.94621 4.37387 6.10765 4.37984 6.27318C4.38581 6.4387 4.4555 6.59552 4.57437 6.71088L5.05171 7.18822L3.85405 8.38432C3.6167 8.62112 3.42969 8.90349 3.30429 9.21443C3.17889 9.52538 3.11769 9.85848 3.12437 10.1937C3.14086 10.8572 3.41455 11.4883 3.88765 11.9538L4.27827 12.3398L0.193897 16.4171C0.0786548 16.5294 0.00979409 16.6808 0.000967061 16.8414C-0.00785996 17.0021 0.0439912 17.1601 0.146241 17.2843C0.202392 17.3495 0.271383 17.4023 0.348898 17.4396C0.426412 17.4768 0.510781 17.4977 0.596726 17.5008C0.68267 17.504 0.768341 17.4894 0.848377 17.4579C0.928413 17.4264 1.00109 17.3788 1.06187 17.3179L5.15562 13.2234L5.57515 13.6437C6.04511 14.1115 6.68121 14.3741 7.34429 14.3741C8.00737 14.3741 8.64346 14.1115 9.11343 13.6437L10.3119 12.4468L10.8072 12.9429C10.8652 13.001 10.9342 13.047 11.0101 13.0785C11.0859 13.1099 11.1672 13.1261 11.2494 13.1261C11.3315 13.1261 11.4128 13.1099 11.4887 13.0785C11.5645 13.047 11.6335 13.001 11.6916 12.9429C11.7496 12.8848 11.7957 12.8159 11.8271 12.74C11.8585 12.6642 11.8747 12.5828 11.8747 12.5007C11.8747 12.4186 11.8585 12.3373 11.8271 12.2614C11.7957 12.1855 11.7496 12.1166 11.6916 12.0585L5.43999 5.80854Z" fill="#F59E0B"/>
</svg>
,
          title: 'Offline-First Architecture',
          desc: 'Works via SMS and USSD codes in low-connectivity areas. Designed for real infrastructure — not Silicon Valley assumptions.',
          num: '05',
        },
        {
          icon: <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6241 3.75V3.4375C15.6233 2.76035 15.4225 2.09853 15.0469 1.53508C14.6714 0.971628 14.1377 0.531656 13.513 0.270372C12.8883 0.00908855 12.2004 -0.0618676 11.5355 0.0664082C10.8706 0.194684 10.2584 0.516477 9.77571 0.991406C9.74716 1.02018 9.72459 1.05433 9.7093 1.09187C9.69402 1.12942 9.68632 1.16962 9.68665 1.21016V8.14141C9.6868 8.19775 9.70218 8.253 9.73116 8.30132C9.76014 8.34964 9.80164 8.38922 9.85128 8.41588C9.90092 8.44254 9.95684 8.45528 10.0131 8.45276C10.0694 8.45024 10.124 8.43255 10.171 8.40156C10.7653 8.0205 11.4557 7.81621 12.1616 7.8125C12.3251 7.80946 12.4834 7.86916 12.6042 7.9793C12.7249 8.08945 12.7989 8.24168 12.8109 8.40469C12.8153 8.48948 12.8025 8.5743 12.773 8.65395C12.7436 8.73361 12.6983 8.80644 12.6398 8.868C12.5813 8.92955 12.5109 8.97855 12.4329 9.01199C12.3548 9.04543 12.2708 9.06262 12.1859 9.0625C11.5228 9.0625 10.8869 9.32589 10.4181 9.79473C9.94926 10.2636 9.68587 10.8995 9.68587 11.5625V14.2094C9.6858 14.2561 9.69623 14.3023 9.71637 14.3445C9.73652 14.3867 9.76587 14.4238 9.80227 14.4531C10.2458 14.8202 10.768 15.08 11.3282 15.2124C11.8885 15.3448 12.4717 15.3462 13.0326 15.2165C13.5935 15.0868 14.1169 14.8295 14.5622 14.4646C15.0075 14.0997 15.3626 13.637 15.5999 13.1125C15.6238 13.0598 15.6326 13.0014 15.6253 12.944C15.6179 12.8865 15.5948 12.8323 15.5584 12.7872C15.522 12.7422 15.4738 12.7081 15.4192 12.6888C15.3646 12.6696 15.3057 12.6659 15.2491 12.6781C14.8596 12.7674 14.4613 12.8125 14.0616 12.8125H13.4577C13.2965 12.8145 13.1405 12.7554 13.0209 12.6472C12.9014 12.539 12.8272 12.3896 12.8132 12.2289C12.8075 12.1434 12.8195 12.0577 12.8484 11.977C12.8772 11.8963 12.9223 11.8224 12.981 11.7599C13.0396 11.6975 13.1104 11.6477 13.1891 11.6137C13.2677 11.5797 13.3525 11.5623 13.4382 11.5625H14.0632C14.7162 11.5635 15.3596 11.4058 15.9382 11.1031C16.6234 10.7463 17.1926 10.2015 17.5791 9.53258C17.9656 8.8637 18.1534 8.09847 18.1205 7.32665C18.0875 6.55482 17.8351 5.8084 17.393 5.17491C16.9509 4.54141 16.3373 4.04712 15.6241 3.75ZM14.6866 6.5625H14.3741C13.6282 6.5625 12.9129 6.26618 12.3854 5.73874C11.858 5.21129 11.5616 4.49592 11.5616 3.75V3.4375C11.5616 3.27174 11.6275 3.11277 11.7447 2.99556C11.8619 2.87835 12.0209 2.8125 12.1866 2.8125C12.3524 2.8125 12.5114 2.87835 12.6286 2.99556C12.7458 3.11277 12.8116 3.27174 12.8116 3.4375V3.75C12.8116 3.95519 12.8521 4.15837 12.9306 4.34794C13.0091 4.53751 13.1242 4.70976 13.2693 4.85485C13.5623 5.14788 13.9597 5.3125 14.3741 5.3125H14.6866C14.8524 5.3125 15.0114 5.37835 15.1286 5.49556C15.2458 5.61277 15.3116 5.77174 15.3116 5.9375C15.3116 6.10326 15.2458 6.26223 15.1286 6.37944C15.0114 6.49665 14.8524 6.5625 14.6866 6.5625ZM5.93665 2.76237e-07C5.02528 0.00103416 4.15154 0.36353 3.50711 1.00796C2.86268 1.65239 2.50018 2.52614 2.49915 3.4375V3.75C1.78612 4.04728 1.17264 4.54171 0.730647 5.17528C0.288651 5.80886 0.0364662 6.55533 0.00366471 7.32715C-0.0291368 8.09897 0.158805 8.86414 0.545451 9.53293C0.932097 10.2017 1.50142 10.7464 2.18665 11.1031C2.76522 11.4058 3.40867 11.5635 4.06165 11.5625H4.66555C4.82706 11.5601 4.98349 11.619 5.10335 11.7273C5.22322 11.8355 5.29764 11.9852 5.31165 12.1461C5.31732 12.2316 5.30536 12.3173 5.2765 12.398C5.24765 12.4787 5.20251 12.5526 5.1439 12.6151C5.08528 12.6775 5.01445 12.7273 4.93579 12.7613C4.85713 12.7953 4.77233 12.8127 4.68665 12.8125H4.06165C3.66171 12.8127 3.26305 12.7673 2.87337 12.6773C2.81681 12.665 2.75795 12.6686 2.70333 12.6878C2.64871 12.7069 2.60048 12.7409 2.56403 12.7859C2.52757 12.8308 2.50432 12.885 2.49687 12.9424C2.48941 12.9998 2.49804 13.0582 2.5218 13.1109C2.75909 13.6356 3.11418 14.0984 3.55944 14.4635C4.00471 14.8285 4.52817 15.086 5.08913 15.2158C5.65009 15.3457 6.23344 15.3444 6.79383 15.2121C7.35422 15.0799 7.87656 14.8201 8.32024 14.4531C8.35664 14.4238 8.38599 14.3867 8.40614 14.3445C8.42629 14.3023 8.43671 14.2561 8.43665 14.2094V11.5625C8.43665 10.8995 8.17325 10.2636 7.70441 9.79473C7.23557 9.32589 6.59969 9.0625 5.93665 9.0625C5.85173 9.06262 5.76769 9.04543 5.68964 9.01199C5.61159 8.97855 5.54117 8.92955 5.48269 8.868C5.4242 8.80644 5.37887 8.73361 5.34946 8.65395C5.32006 8.5743 5.30719 8.48948 5.31165 8.40469C5.32361 8.24154 5.39769 8.0892 5.51861 7.97903C5.63953 7.86886 5.7981 7.80926 5.96165 7.8125C6.66761 7.81621 7.35797 8.0205 7.95227 8.40156C7.99933 8.43255 8.05388 8.45024 8.11017 8.45276C8.16646 8.45528 8.22238 8.44254 8.27201 8.41588C8.32165 8.38922 8.36315 8.34964 8.39214 8.30132C8.42112 8.253 8.4365 8.19775 8.43665 8.14141V1.21016C8.43692 1.12813 8.40493 1.04928 8.34758 0.990625C7.70586 0.355644 6.83943 -0.00036201 5.93665 2.76237e-07ZM6.56165 3.75C6.56165 4.49592 6.26533 5.21129 5.73788 5.73874C5.21044 6.26618 4.49507 6.5625 3.74915 6.5625H3.43665C3.27089 6.5625 3.11192 6.49665 2.9947 6.37944C2.87749 6.26223 2.81165 6.10326 2.81165 5.9375C2.81165 5.77174 2.87749 5.61277 2.9947 5.49556C3.11192 5.37835 3.27089 5.3125 3.43665 5.3125H3.74915C3.95434 5.3125 4.15752 5.27208 4.34709 5.19356C4.53666 5.11504 4.70891 4.99995 4.854 4.85485C4.99909 4.70976 5.11419 4.53751 5.19271 4.34794C5.27123 4.15837 5.31165 3.95519 5.31165 3.75V3.4375C5.31165 3.27174 5.37749 3.11277 5.4947 2.99556C5.61192 2.87835 5.77089 2.8125 5.93665 2.8125C6.10241 2.8125 6.26138 2.87835 6.37859 2.99556C6.4958 3.11277 6.56165 3.27174 6.56165 3.4375V3.75Z" fill="#F59E0B"/>
</svg>
,
          title: 'AI Moderation + Human Oversight',
          desc: 'ML flags hate speech and calls to violence — but human moderators make final calls. No automated removal of legitimate reports.',
          num: '06',
        },
      ].map((item, i) => (
        <div key={i} className={styles.whyCard}>
          <div className={styles.whyCardNum}>{item.num}</div>
          <div className={styles.whyCardHeader}>
            <div className={styles.whyIconBox}>
              <span className={styles.whyIconEmoji}>{item.icon}</span>
            </div>
            <h4 className={styles.whyCardTitle}>{item.title}</h4>
          </div>
          <p className={styles.whyCardDesc}>{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Roadmap = () => (
  <section id="roadmap" className={styles.roadmap}>
    <div className={styles.roadmapHeader}>
      <div className={styles.sectionTag}>PHASED ROLLOUT STRATEGY</div>
      <h2 className={styles.roadmapTitle}>From Pilot to National Scale</h2>
      <p className={styles.roadmapDesc}>
        A measured, evidence-driven expansion — piloting in communities before
        scaling, learning at every stage.
      </p>
    </div>

    <div className={styles.roadmapGrid}>
      {[
        {
          phase: 'PHASE 1',
          name: 'Pilot',
          timeline: 'Months 0 – 6',
          items: [
            '2–3 communities with diverse profiles',
            'Launch SafeReport + Transparency Dashboard',
            'Partner with reform-committed police',
            'Measure response times & sentiment',
            'Baseline vigilante justice tracking',
          ],
        },
        {
          phase: 'PHASE 2',
          name: 'Expand',
          timeline: 'Months 6 – 18',
          items: [
            'Add CommunityWatch network',
            'Scale to additional communities',
            'Onboard more police departments',
            'Refine AI moderation on real data',
            'Publish open-source learnings',
          ],
        },
        {
          phase: 'PHASE 3',
          name: 'National Scale',
          timeline: 'Months 18+',
          items: [
            'Full trust-building feature suite',
            'Integration with courts & legal aids',
            'Open API for NGOs and government',
            'Regional replication in other nations',
            'SDG 16 impact reporting',
          ],
        },
      ].map((p, i) => (
        <div key={i} className={styles.phaseCol}>
          <div className={styles.phaseTag}>{p.phase}</div>
          <h3 className={styles.phaseName}>{p.name}</h3>
          <p className={styles.phaseTimeline}>{p.timeline}</p>
          <ul className={styles.phaseList}>
            {p.items.map((item, j) => (
              <li key={j} className={styles.phaseItem}>
                <span className={styles.phaseArrow}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.13561e-07 5.43945V4.38875H7.7007L3.8171 0.717954L4.522 -0.000245784L9.31 4.60155V5.18675L4.522 9.80185L3.8038 9.07035L7.6608 5.43945H6.13561e-07Z" fill="#00D4AA"/>
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

const RevenueModel = () => (
  <section className={styles.revenue}>
    <div className={styles.revenueHeader}>
      <div className={styles.sectionTag}>SUSTAINABILITY &amp; FUNDING</div>
      <h2 className={styles.revenueTitle}>A Diversified Model Built to Last</h2>
      <p className={styles.revenueDesc}>
        Not dependent on any single source — combining grants, partnerships, and
        earned revenue for long-term independence.
      </p>
    </div>

    <div className={styles.revenueGrid}>
      {[
        {
          icon: <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40.25" height="40.25" rx="4" fill="#00D4AA" fill-opacity="0.12"/>
<path d="M20.125 12C18.518 12 16.9471 12.4765 15.611 13.3693C14.2748 14.2621 13.2334 15.531 12.6185 17.0157C12.0035 18.5003 11.8426 20.134 12.1561 21.7101C12.4696 23.2862 13.2435 24.7339 14.3798 25.8702C15.5161 27.0065 16.9638 27.7804 18.5399 28.0939C20.116 28.4074 21.7497 28.2465 23.2343 27.6315C24.719 27.0166 25.9879 25.9752 26.8807 24.639C27.7735 23.3029 28.25 21.732 28.25 20.125C28.2477 17.9708 27.391 15.9055 25.8677 14.3823C24.3445 12.859 22.2792 12.0023 20.125 12ZM14.9914 24.693L15.1883 24.5641C15.3602 24.4507 15.5014 24.2965 15.5994 24.1154C15.6974 23.9343 15.7492 23.7317 15.75 23.5258L15.7664 20.6953L17.4039 18.25C17.412 18.2561 17.4203 18.2619 17.4289 18.2672L18.9656 19.2727C19.2232 19.4544 19.54 19.5317 19.8523 19.4891L22.3125 19.1555C22.6159 19.115 22.8939 18.9646 23.0938 18.7328L24.8258 16.7203C25.0195 16.4934 25.1256 16.2046 25.125 15.9062V15.4117C25.9704 16.3061 26.5598 17.4113 26.8315 18.6116C27.1032 19.8118 27.0473 21.0631 26.6695 22.2344L25.4086 21.0813C25.2333 20.9203 25.0157 20.8128 24.7814 20.7713C24.5471 20.7298 24.3059 20.756 24.0859 20.8469L21.7063 21.8352C21.5073 21.9187 21.3332 22.052 21.2007 22.2224C21.0682 22.3928 20.9819 22.5944 20.95 22.8078L20.7633 24.0727C20.7184 24.3771 20.7874 24.6874 20.9571 24.9441C21.1267 25.2009 21.3851 25.386 21.6828 25.4641L23.3594 25.9062L23.5438 26.0914C22.1747 26.8769 20.5768 27.1667 19.0191 26.912C17.4614 26.6573 16.039 25.8736 14.9914 24.693Z" fill="#F59E0B"/>
</svg>
,
          title: 'International Development Grants',
          desc: 'SDG 16-aligned funding from the UN, World Bank, and Gates Foundation.',
        },
        {
          icon: <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="43.375" height="39.625" rx="4" fill="#00D4AA" fill-opacity="0.12"/>
<path d="M13.5625 18.875H15.125V22.625H14.1875C13.9389 22.625 13.7004 22.7238 13.5246 22.8996C13.3488 23.0755 13.25 23.3139 13.25 23.5625C13.25 23.8112 13.3488 24.0496 13.5246 24.2255C13.7004 24.4013 13.9389 24.5 14.1875 24.5H29.1875C29.4361 24.5 29.6746 24.4013 29.8504 24.2255C30.0262 24.0496 30.125 23.8112 30.125 23.5625C30.125 23.3139 30.0262 23.0755 29.8504 22.8996C29.6746 22.7238 29.4361 22.625 29.1875 22.625H28.25V18.875H29.8125C30.0166 18.8751 30.2152 18.8085 30.378 18.6853C30.5408 18.5622 30.659 18.3893 30.7146 18.1929C30.7702 17.9965 30.7602 17.7873 30.6861 17.5971C30.6119 17.4069 30.4778 17.2461 30.3039 17.1391L22.1789 12.1391C22.0311 12.0482 21.861 12 21.6875 12C21.514 12 21.3439 12.0482 21.1961 12.1391L13.0711 17.1391C12.8972 17.2461 12.7631 17.4069 12.6889 17.5971C12.6148 17.7873 12.6048 17.9965 12.6604 18.1929C12.716 18.3893 12.8342 18.5622 12.997 18.6853C13.1598 18.8085 13.3584 18.8751 13.5625 18.875ZM17 18.875H18.875V22.625H17V18.875ZM22.625 18.875V22.625H20.75V18.875H22.625ZM26.375 22.625H24.5V18.875H26.375V22.625ZM21.6875 14.0383L26.5 17H16.875L21.6875 14.0383ZM31.375 26.6875C31.375 26.9362 31.2762 27.1746 31.1004 27.3505C30.9246 27.5263 30.6861 27.625 30.4375 27.625H12.9375C12.6889 27.625 12.4504 27.5263 12.2746 27.3505C12.0988 27.1746 12 26.9362 12 26.6875C12 26.4389 12.0988 26.2005 12.2746 26.0246C12.4504 25.8488 12.6889 25.75 12.9375 25.75H30.4375C30.6861 25.75 30.9246 25.8488 31.1004 26.0246C31.2762 26.2005 31.375 26.4389 31.375 26.6875Z" fill="#F59E0B"/>
</svg>
,
          title: 'Government Partnerships',
          desc: 'Police departments pay for premium dashboard and analytics tools.',
        },
        {
          icon: <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40.3625" height="40.25" rx="4" fill="#00D4AA" fill-opacity="0.12"/>
<path d="M24.3192 10.125H16.0433C15.4032 10.125 14.7892 10.3793 14.3365 10.832C13.8839 11.2847 13.6295 11.8986 13.6295 12.5388V27.7112C13.6295 28.3514 13.8839 28.9653 14.3365 29.418C14.7892 29.8707 15.4032 30.125 16.0433 30.125H24.3192C24.9594 30.125 25.5733 29.8707 26.026 29.418C26.4787 28.9653 26.733 28.3514 26.733 27.7112V12.5388C26.733 11.8986 26.4787 11.2847 26.026 10.832C25.5733 10.3793 24.9594 10.125 24.3192 10.125ZM24.664 27.7112C24.664 27.8027 24.6277 27.8904 24.563 27.955C24.4984 28.0197 24.4107 28.056 24.3192 28.056H16.0433C15.9519 28.056 15.8642 28.0197 15.7995 27.955C15.7348 27.8904 15.6985 27.8027 15.6985 27.7112V12.5388C15.6985 12.4473 15.7348 12.3596 15.7995 12.295C15.8642 12.2303 15.9519 12.194 16.0433 12.194H24.3192C24.4107 12.194 24.4984 12.2303 24.563 12.295C24.6277 12.3596 24.664 12.4473 24.664 12.5388V27.7112ZM21.5606 14.9526C21.5606 15.2254 21.4797 15.4921 21.3281 15.7189C21.1766 15.9457 20.9611 16.1225 20.7091 16.2269C20.4571 16.3313 20.1797 16.3586 19.9122 16.3054C19.6446 16.2522 19.3989 16.1208 19.206 15.9279C19.0131 15.735 18.8817 15.4892 18.8285 15.2217C18.7752 14.9541 18.8026 14.6768 18.907 14.4247C19.0114 14.1727 19.1881 13.9573 19.415 13.8057C19.6418 13.6542 19.9085 13.5733 20.1813 13.5733C20.5471 13.5733 20.8979 13.7186 21.1566 13.9773C21.4153 14.2359 21.5606 14.5868 21.5606 14.9526Z" fill="#F59E0B"/>
</svg>
,
          title: 'CSR Partnerships',
          desc: 'Telecom companies provide free SMS; tech firms contribute cloud credits.',
        },
        {
          icon: <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40.25" height="40.25" rx="4" fill="#00D4AA" fill-opacity="0.12"/>
<path d="M29.1517 18.1171L27.3278 14.4679C27.2606 14.3336 27.1676 14.2138 27.0541 14.1154C26.9407 14.0171 26.8089 13.942 26.6664 13.8946C26.5239 13.8471 26.3735 13.8282 26.2237 13.8389C26.0739 13.8496 25.9277 13.8897 25.7934 13.9569L24.0159 14.8453L20.2716 13.8547C20.1756 13.8297 20.0747 13.8297 19.9786 13.8547L16.2343 14.8453L14.4569 13.9569C14.3226 13.8897 14.1764 13.8496 14.0266 13.8389C13.8768 13.8282 13.7263 13.8471 13.5838 13.8946C13.4414 13.942 13.3096 14.0171 13.1961 14.1154C13.0826 14.2138 12.9897 14.3336 12.9225 14.4679L11.0986 18.1164C11.0314 18.2507 10.9913 18.3969 10.9806 18.5467C10.9699 18.6965 10.9888 18.847 11.0362 18.9895C11.0837 19.132 11.1587 19.2637 11.2571 19.3772C11.3555 19.4907 11.4753 19.5837 11.6096 19.6508L13.5392 20.6164L17.5051 23.4487C17.5635 23.4902 17.6292 23.5205 17.6988 23.5381L22.2728 24.6816C22.3686 24.7056 22.469 24.7044 22.5641 24.6781C22.6593 24.6518 22.7461 24.6013 22.8159 24.5315L25.6747 21.6727L26.7525 20.595L28.6407 19.6508C28.9118 19.5151 29.1179 19.2774 29.2137 18.9898C29.3095 18.7022 29.2872 18.3883 29.1517 18.1171ZM25.2287 20.502L22.7695 18.5323C22.6593 18.4441 22.5204 18.3998 22.3795 18.4078C22.2386 18.4159 22.1056 18.4757 22.0062 18.5759C20.7333 19.8581 19.3147 19.6959 18.4099 19.1241L21.5002 16.1224H23.7736L25.7183 20.011L25.2287 20.502ZM22.2363 23.4937L18.0825 22.4553L14.5663 19.9439L16.5674 15.9416L20.1251 14.9989L20.8255 15.184L17.6094 18.3058L17.6037 18.3122C17.4826 18.4333 17.3903 18.58 17.3335 18.7415C17.2767 18.903 17.2569 19.0752 17.2756 19.2454C17.2942 19.4156 17.3509 19.5794 17.4413 19.7248C17.5317 19.8702 17.6537 19.9934 17.7981 20.0854C19.2675 21.0238 21.0407 20.8715 22.4372 19.728L24.4133 21.3154L22.2363 23.4937ZM20.3981 25.9809C20.3673 26.1044 20.296 26.2142 20.1956 26.2926C20.0953 26.3711 19.9716 26.4138 19.8443 26.414C19.7973 26.414 19.7505 26.4082 19.7049 26.3968L16.7239 25.6514C16.6543 25.6342 16.5885 25.6039 16.5302 25.5621L14.647 24.217C14.5312 24.1261 14.455 23.994 14.4341 23.8483C14.4133 23.7025 14.4494 23.5544 14.5351 23.4346C14.6207 23.3149 14.7493 23.2328 14.894 23.2055C15.0386 23.1782 15.1882 23.2077 15.3117 23.2879L17.1063 24.5701L19.9822 25.2876C20.1293 25.3244 20.2557 25.4181 20.3337 25.5481C20.4117 25.6781 20.4349 25.8338 20.3981 25.9809Z" fill="#F59E0B"/>
</svg>
,
          title: 'NGO & Civil Society Support',
          desc: 'Human rights and anti-corruption organisations provide funding and legitimacy.',
        },
      ].map((item, i) => (
        <div key={i} className={styles.revenueCard}>
          <div className={styles.revenueIconBox}>
            <span className={styles.revenueIconEmoji}>{item.icon}</span>
          </div>
          <div className={styles.revenueCardBody}>
            <h4 className={styles.revenueCardTitle}>{item.title}</h4>
            <p className={styles.revenueCardDesc}>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const AppDownload = () => (
  <section id="mobile-app" className={styles.appDownload}>
    <div className={styles.appDownloadLeft}>
      <div className={styles.sectionTag}>AEGIS MOBILE APP</div>
      <h2 className={styles.appDownloadTitle}>
        Safety Intelligence in Your Pocket
      </h2>
      <p className={styles.appDownloadDesc}>
        Download Aegis and choose your role — whether you're a citizen
        protecting your community or a security officer managing cases,
        your experience is built around you.
      </p>
      <div className={styles.storeButtons}>
        <a href="#" className={styles.storeBtnApple}>
          <svg className={styles.storeBtnIcon} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.15 1.28-2.13 3.81.03 3.02 2.65 4.03 2.68 4.04l-.1.27zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <div className={styles.storeBtnText}>
            <span className={styles.storeBtnSub}>Download on the</span>
            <span className={styles.storeBtnMain}>App Store</span>
          </div>
        </a>
        <a href="#" className={styles.storeBtnGoogle}>
          <svg className={styles.storeBtnIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.18 23.76c.3.16.64.24.99.24.4 0 .8-.11 1.16-.32l12.1-6.93-2.93-2.93-11.32 9.94z" fill="#EA4335"/>
            <path d="M21.6 10.04l-2.48-1.42-3.28 3.28 3.28 3.28 2.51-1.44c.71-.41 1.17-1.16 1.17-2.08 0-.91-.46-1.68-1.2-2.62z" fill="#FBBC04"/>
            <path d="M2.17.54C2.06.75 2 .99 2 1.25v21.5c0 .26.06.5.17.71l.09.08 12.05-12.05v-.28L2.26.46l-.09.08z" fill="#4285F4"/>
            <path d="M17.43 8.62l-3.12-3.12L2.17.54C1.85.28 1.42.22 1.04.42L14.31 13.7l3.12-3.08z" fill="#34A853"/>
          </svg>
          <div className={styles.storeBtnText}>
            <span className={styles.storeBtnSub}>GET IT ON</span>
            <span className={styles.storeBtnMain}>Google Play</span>
          </div>
        </a>
      </div>
    </div>

    {/* Phone image placeholder — replace img src with your actual image */}
    <div className={styles.appDownloadRight}>
      {/* <img
        src=""
        alt="Aegis app screens"
        className={styles.phoneImage}
      /> */}
      <div>
        <svg width="138" height="291" viewBox="0 0 138 291" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="138" height="290.4" rx="16" stroke="#FFFFFF12" stroke-width="2" fill="url(#paint0_linear_176_703)"/>
          <path d="M69.9152 80.1408L75.336 94.1184C75.5451 94.6261 75.7691 94.992 76.008 95.216C76.2469 95.4251 76.4635 95.5371 76.6576 95.552V96C76.12 95.9701 75.4928 95.9552 74.776 95.9552C74.0592 95.9403 73.3275 95.9328 72.5808 95.9328C71.8192 95.9328 71.1024 95.9403 70.4304 95.9552C69.7584 95.9552 69.2208 95.9701 68.8176 96V95.552C69.5792 95.5221 70.0571 95.3952 70.2512 95.1712C70.4603 94.9323 70.4155 94.432 70.1168 93.6704L66.5328 83.7472L66.9808 82.9632L63.8896 91.0048C63.5163 91.9755 63.2848 92.7595 63.1952 93.3568C63.1205 93.9392 63.1579 94.3872 63.3072 94.7008C63.4565 95.0144 63.6955 95.2309 64.024 95.3504C64.3525 95.4699 64.7408 95.5371 65.1888 95.552V96C64.6363 95.9701 64.136 95.9552 63.688 95.9552C63.2549 95.9403 62.7771 95.9328 62.2544 95.9328C61.9707 95.9328 61.6645 95.9403 61.336 95.9552C61.0224 95.9552 60.7536 95.9701 60.5296 96V95.552C60.8731 95.4923 61.2091 95.2757 61.5376 94.9024C61.8811 94.5141 62.232 93.8571 62.5904 92.9312L67.5632 80.1408C67.9216 80.1707 68.3099 80.1856 68.728 80.1856C69.1611 80.1856 69.5568 80.1707 69.9152 80.1408ZM70.6992 89.5488V89.9968H64.024L64.248 89.5488H70.6992Z" fill="#00D4AA"/>
          <path d="M56.7376 124L58.3144 118.96H59.0128L60.5824 124H59.92L59.5528 122.747H57.7672L57.4 124H56.7376ZM58.6456 119.81L57.9184 122.243H59.4016L58.6744 119.81H58.6456ZM62.1564 124V118.96H65.3028V119.507H62.7612V121.185H65.0868V121.732H62.7612V123.453H65.3028V124H62.1564ZM68.684 124.086C68.3288 124.086 68.012 123.983 67.7336 123.777C67.4552 123.566 67.2368 123.266 67.0784 122.877C66.9248 122.488 66.848 122.022 66.848 121.48C66.848 120.942 66.9272 120.479 67.0856 120.09C67.244 119.702 67.4672 119.402 67.7552 119.19C68.048 118.979 68.3936 118.874 68.792 118.874C69.2672 118.874 69.6536 119.013 69.9512 119.291C70.2536 119.57 70.4336 119.944 70.4912 120.414H69.8216C69.7736 120.126 69.6608 119.894 69.4832 119.716C69.3104 119.534 69.08 119.442 68.792 119.442C68.3792 119.442 68.0552 119.622 67.82 119.982C67.5848 120.342 67.4672 120.842 67.4672 121.48C67.4672 122.128 67.5848 122.63 67.82 122.985C68.0552 123.34 68.36 123.518 68.7344 123.518C69.0032 123.518 69.224 123.438 69.3968 123.28C69.5696 123.117 69.6992 122.91 69.7856 122.661C69.8768 122.406 69.9272 122.145 69.9368 121.876H68.8136V121.358H70.556V124H70.0016L69.9512 123.237H69.9224C69.8216 123.496 69.6728 123.702 69.476 123.856C69.284 124.01 69.02 124.086 68.684 124.086ZM72.3244 124V123.474H73.4692V119.486H72.3244V118.96H75.2188V119.486H74.074V123.474H75.2188V124H72.3244ZM78.8592 124.086C78.504 124.086 78.1944 124.019 77.9304 123.885C77.6712 123.75 77.4696 123.563 77.3256 123.323C77.1864 123.083 77.1144 122.802 77.1096 122.481H77.7432C77.748 122.769 77.844 123.018 78.0312 123.23C78.2232 123.436 78.4992 123.539 78.8592 123.539C79.1904 123.539 79.4448 123.46 79.6224 123.302C79.8048 123.138 79.896 122.944 79.896 122.718C79.896 122.531 79.8528 122.375 79.7664 122.25C79.68 122.121 79.5384 122.008 79.3416 121.912C79.1496 121.811 78.8904 121.708 78.564 121.602C78.1032 121.463 77.7672 121.274 77.556 121.034C77.3448 120.794 77.2392 120.496 77.2392 120.141C77.2392 119.901 77.3016 119.685 77.4264 119.493C77.5512 119.301 77.7312 119.15 77.9664 119.039C78.2016 118.929 78.4872 118.874 78.8232 118.874C79.14 118.874 79.416 118.934 79.6512 119.054C79.8912 119.169 80.076 119.332 80.2056 119.543C80.34 119.754 80.4072 119.997 80.4072 120.27H79.7736C79.7736 120.136 79.7376 120.004 79.6656 119.874C79.5936 119.745 79.4856 119.637 79.3416 119.55C79.1976 119.464 79.0152 119.421 78.7944 119.421C78.5304 119.421 78.3096 119.486 78.132 119.615C77.9544 119.74 77.8656 119.913 77.8656 120.134C77.8656 120.302 77.904 120.443 77.9808 120.558C78.0624 120.674 78.1944 120.779 78.3768 120.875C78.5592 120.966 78.8064 121.065 79.1184 121.17C79.4112 121.266 79.6608 121.379 79.8672 121.509C80.0784 121.634 80.2392 121.79 80.3496 121.977C80.4648 122.164 80.5224 122.397 80.5224 122.675C80.5224 122.949 80.4528 123.191 80.3136 123.402C80.1744 123.614 79.98 123.782 79.7304 123.906C79.4808 124.026 79.1904 124.086 78.8592 124.086Z" fill="#6B7280"/>
          <mask id="path-3-inside-1_176_703" fill="white">
          <path d="M24 150C24 143.925 28.9249 139 35 139H103C109.075 139 114 143.925 114 150C114 156.075 109.075 161 103 161H35C28.9249 161 24 156.075 24 150Z"/>
          </mask>
          <path d="M24 150C24 143.925 28.9249 139 35 139H103C109.075 139 114 143.925 114 150C114 156.075 109.075 161 103 161H35C28.9249 161 24 156.075 24 150Z" fill="#00D4AA" fill-opacity="0.12"/>
          <path d="M24 150M114 150M114 150M24 150M35 139V140H103V139V138H35V139ZM114 150M103 161V160H35V161V162H103V161ZM24 150M35 161V160C29.4772 160 25 155.523 25 150H24H23C23 156.627 28.3726 162 35 162V161ZM114 150H113C113 155.523 108.523 160 103 160V161V162C109.627 162 115 156.627 115 150H114ZM103 139V140C108.523 140 113 144.477 113 150H114H115C115 143.373 109.627 138 103 138V139ZM35 139V138C28.3726 138 23 143.373 23 150H24H25C25 144.477 29.4772 140 35 140V139Z" fill="#00D4AA" fill-opacity="0.25" mask="url(#path-3-inside-1_176_703)"/>
          <path d="M36.796 152.086C36.388 152.086 36.0352 151.978 35.7376 151.762C35.4448 151.546 35.2192 151.244 35.0608 150.855C34.9072 150.466 34.8304 150.008 34.8304 149.48C34.8304 148.957 34.9072 148.501 35.0608 148.112C35.2192 147.718 35.4448 147.414 35.7376 147.198C36.0352 146.982 36.388 146.874 36.796 146.874C37.3144 146.874 37.732 147.018 38.0488 147.306C38.3656 147.589 38.5504 147.968 38.6032 148.443H37.9336C37.8856 148.16 37.7656 147.922 37.5736 147.73C37.3816 147.538 37.1224 147.442 36.796 147.442C36.3784 147.442 36.0496 147.625 35.8096 147.99C35.5696 148.35 35.4496 148.846 35.4496 149.48C35.4496 150.118 35.5696 150.618 35.8096 150.978C36.0496 151.338 36.3784 151.518 36.796 151.518C37.1368 151.518 37.3984 151.426 37.5808 151.244C37.768 151.062 37.8856 150.826 37.9336 150.538H38.6032C38.5264 151.018 38.3344 151.398 38.0272 151.676C37.7248 151.95 37.3144 152.086 36.796 152.086ZM40.098 152V151.482H41.0124V149.127C41.0124 149.007 40.9548 148.947 40.8396 148.947H40.1916V148.429H41.0628C41.2212 148.429 41.3484 148.472 41.4444 148.558C41.5404 148.645 41.5884 148.772 41.5884 148.94V149.091H41.6172C41.6748 148.851 41.7828 148.666 41.9412 148.537C42.1044 148.407 42.33 148.342 42.618 148.342H43.2732V148.983H42.5316C42.2388 148.983 42.0132 149.082 41.8548 149.278C41.6964 149.47 41.6172 149.718 41.6172 150.02V151.482H42.7404V152H40.098ZM46.5032 147.795C46.3592 147.795 46.2392 147.747 46.1432 147.651C46.0472 147.555 45.9992 147.44 45.9992 147.306C45.9992 147.166 46.0472 147.051 46.1432 146.96C46.2392 146.864 46.3592 146.816 46.5032 146.816C46.6424 146.816 46.76 146.864 46.856 146.96C46.9568 147.051 47.0072 147.166 47.0072 147.306C47.0072 147.44 46.9568 147.555 46.856 147.651C46.76 147.747 46.6424 147.795 46.5032 147.795ZM45.1064 152V151.482H46.244V149.127C46.244 149.007 46.184 148.947 46.064 148.947H45.2288V148.429H46.208C46.6352 148.429 46.8488 148.642 46.8488 149.07V151.482H47.9864V152H45.1064ZM49.5459 152V148.429H50.0427L50.1075 148.846H50.1435C50.2059 148.702 50.2995 148.582 50.4243 148.486C50.5539 148.39 50.7099 148.342 50.8923 148.342C51.0747 148.342 51.2283 148.388 51.3531 148.479C51.4827 148.566 51.5763 148.688 51.6339 148.846H51.6627C51.7251 148.702 51.8259 148.582 51.9651 148.486C52.1043 148.39 52.2723 148.342 52.4691 148.342C52.7427 148.342 52.9467 148.436 53.0811 148.623C53.2203 148.806 53.2899 149.05 53.2899 149.358V152H52.6995V149.451C52.6995 149.278 52.6635 149.142 52.5915 149.041C52.5243 148.94 52.4139 148.89 52.2603 148.89C52.1019 148.89 51.9723 148.95 51.8715 149.07C51.7707 149.19 51.7203 149.36 51.7203 149.581V152H51.1227V149.451C51.1227 149.278 51.0891 149.142 51.0219 149.041C50.9547 148.94 50.8443 148.89 50.6907 148.89C50.5323 148.89 50.4003 148.95 50.2947 149.07C50.1939 149.19 50.1435 149.36 50.1435 149.581V152H49.5459ZM56.3687 152.086C56.0327 152.086 55.7351 152.01 55.4759 151.856C55.2215 151.698 55.0199 151.479 54.8711 151.201C54.7223 150.918 54.6479 150.589 54.6479 150.214C54.6479 149.84 54.7199 149.514 54.8639 149.235C55.0127 148.952 55.2167 148.734 55.4759 148.58C55.7351 148.422 56.0375 148.342 56.3831 148.342C56.7287 148.342 57.0239 148.422 57.2687 148.58C57.5135 148.734 57.7007 148.938 57.8303 149.192C57.9599 149.446 58.0247 149.72 58.0247 150.013C58.0247 150.066 58.0223 150.118 58.0175 150.171C58.0175 150.224 58.0175 150.284 58.0175 150.351H55.2455C55.2599 150.615 55.3199 150.836 55.4255 151.014C55.5359 151.186 55.6727 151.316 55.8359 151.402C56.0039 151.489 56.1815 151.532 56.3687 151.532C56.6327 151.532 56.8391 151.477 56.9879 151.366C57.1367 151.256 57.2495 151.102 57.3263 150.906H57.9239C57.8423 151.237 57.6719 151.518 57.4127 151.748C57.1535 151.974 56.8055 152.086 56.3687 152.086ZM56.3687 148.882C56.0903 148.882 55.8455 148.966 55.6343 149.134C55.4279 149.302 55.3007 149.538 55.2527 149.84H57.4271C57.4079 149.542 57.2999 149.31 57.1031 149.142C56.9111 148.969 56.6663 148.882 56.3687 148.882ZM64.5495 152V146.96H66.0975C66.4863 146.96 66.8055 147.025 67.0551 147.154C67.3095 147.284 67.4991 147.462 67.6239 147.687C67.7487 147.908 67.8111 148.16 67.8111 148.443C67.8111 148.774 67.7247 149.067 67.5519 149.322C67.3839 149.571 67.1247 149.746 66.7743 149.847L67.8687 152H67.1487L66.1335 149.934H66.0975H65.1543V152H64.5495ZM65.1543 149.379H66.0759C66.4599 149.379 66.7407 149.293 66.9183 149.12C67.1007 148.942 67.1919 148.717 67.1919 148.443C67.1919 148.155 67.1031 147.927 66.9255 147.759C66.7527 147.591 66.4671 147.507 66.0687 147.507H65.1543V149.379ZM71.0483 152.086C70.7123 152.086 70.4147 152.01 70.1555 151.856C69.9011 151.698 69.6995 151.479 69.5507 151.201C69.4019 150.918 69.3275 150.589 69.3275 150.214C69.3275 149.84 69.3995 149.514 69.5435 149.235C69.6923 148.952 69.8963 148.734 70.1555 148.58C70.4147 148.422 70.7171 148.342 71.0627 148.342C71.4083 148.342 71.7035 148.422 71.9483 148.58C72.1931 148.734 72.3803 148.938 72.5099 149.192C72.6395 149.446 72.7043 149.72 72.7043 150.013C72.7043 150.066 72.7019 150.118 72.6971 150.171C72.6971 150.224 72.6971 150.284 72.6971 150.351H69.9251C69.9395 150.615 69.9995 150.836 70.1051 151.014C70.2155 151.186 70.3523 151.316 70.5155 151.402C70.6835 151.489 70.8611 151.532 71.0483 151.532C71.3123 151.532 71.5187 151.477 71.6675 151.366C71.8163 151.256 71.9291 151.102 72.0059 150.906H72.6035C72.5219 151.237 72.3515 151.518 72.0923 151.748C71.8331 151.974 71.4851 152.086 71.0483 152.086ZM71.0483 148.882C70.7699 148.882 70.5251 148.966 70.3139 149.134C70.1075 149.302 69.9803 149.538 69.9323 149.84H72.1067C72.0875 149.542 71.9795 149.31 71.7827 149.142C71.5907 148.969 71.3459 148.882 71.0483 148.882ZM74.3071 153.584V148.429H74.7967L74.8687 149.019H74.9119C75.0031 148.827 75.1495 148.666 75.3511 148.537C75.5527 148.407 75.7903 148.342 76.0639 148.342C76.3519 148.342 76.6111 148.414 76.8415 148.558C77.0767 148.702 77.2615 148.916 77.3959 149.199C77.5303 149.478 77.5975 149.818 77.5975 150.222C77.5975 150.62 77.5279 150.958 77.3887 151.237C77.2543 151.515 77.0671 151.726 76.8271 151.87C76.5919 152.014 76.3207 152.086 76.0135 152.086C75.7399 152.086 75.5071 152.029 75.3151 151.914C75.1279 151.794 74.9935 151.654 74.9119 151.496V153.584H74.3071ZM75.9415 151.51C76.2439 151.51 76.4935 151.405 76.6903 151.194C76.8871 150.978 76.9855 150.651 76.9855 150.214C76.9855 149.778 76.8871 149.454 76.6903 149.242C76.4935 149.026 76.2439 148.918 75.9415 148.918C75.6391 148.918 75.3895 149.026 75.1927 149.242C74.9959 149.454 74.8975 149.778 74.8975 150.214C74.8975 150.651 74.9959 150.978 75.1927 151.194C75.3895 151.405 75.6391 151.51 75.9415 151.51ZM80.7987 152.086C80.4627 152.086 80.1651 152.01 79.9059 151.856C79.6467 151.702 79.4427 151.486 79.2939 151.208C79.1451 150.925 79.0707 150.594 79.0707 150.214C79.0707 149.835 79.1451 149.506 79.2939 149.228C79.4427 148.945 79.6467 148.726 79.9059 148.573C80.1651 148.419 80.4627 148.342 80.7987 148.342C81.1347 148.342 81.4323 148.419 81.6915 148.573C81.9507 148.726 82.1547 148.945 82.3035 149.228C82.4523 149.506 82.5267 149.835 82.5267 150.214C82.5267 150.594 82.4523 150.925 82.3035 151.208C82.1547 151.486 81.9507 151.702 81.6915 151.856C81.4323 152.01 81.1347 152.086 80.7987 152.086ZM80.7987 151.51C81.0051 151.51 81.1923 151.465 81.3603 151.374C81.5283 151.282 81.6603 151.141 81.7563 150.949C81.8571 150.757 81.9075 150.512 81.9075 150.214C81.9075 149.917 81.8571 149.672 81.7563 149.48C81.6603 149.288 81.5283 149.146 81.3603 149.055C81.1923 148.964 81.0051 148.918 80.7987 148.918C80.5971 148.918 80.4123 148.964 80.2443 149.055C80.0763 149.146 79.9419 149.288 79.8411 149.48C79.7403 149.672 79.6899 149.917 79.6899 150.214C79.6899 150.661 79.7979 150.99 80.0139 151.201C80.2299 151.407 80.4915 151.51 80.7987 151.51ZM84.1366 152V151.482H85.051V149.127C85.051 149.007 84.9934 148.947 84.8782 148.947H84.2302V148.429H85.1014C85.2598 148.429 85.387 148.472 85.483 148.558C85.579 148.645 85.627 148.772 85.627 148.94V149.091H85.6558C85.7134 148.851 85.8214 148.666 85.9798 148.537C86.143 148.407 86.3686 148.342 86.6566 148.342H87.3118V148.983H86.5702C86.2774 148.983 86.0518 149.082 85.8934 149.278C85.735 149.47 85.6558 149.718 85.6558 150.02V151.482H86.779V152H84.1366ZM90.9594 152C90.633 152 90.3762 151.921 90.189 151.762C90.0018 151.604 89.9082 151.318 89.9082 150.906V148.947H89.001V148.429H89.541C89.7858 148.429 89.9274 148.309 89.9658 148.069L90.0666 147.514H90.513V148.429H91.9386V148.947H90.513V150.906C90.513 151.107 90.5586 151.249 90.6498 151.33C90.7458 151.412 90.909 151.453 91.1394 151.453H91.9386V152H90.9594ZM95.5142 152.086C95.1782 152.086 94.8806 152.01 94.6214 151.856C94.367 151.698 94.1654 151.479 94.0166 151.201C93.8678 150.918 93.7934 150.589 93.7934 150.214C93.7934 149.84 93.8654 149.514 94.0094 149.235C94.1582 148.952 94.3622 148.734 94.6214 148.58C94.8806 148.422 95.183 148.342 95.5286 148.342C95.8742 148.342 96.1694 148.422 96.4142 148.58C96.659 148.734 96.8462 148.938 96.9758 149.192C97.1054 149.446 97.1702 149.72 97.1702 150.013C97.1702 150.066 97.1678 150.118 97.163 150.171C97.163 150.224 97.163 150.284 97.163 150.351H94.391C94.4054 150.615 94.4654 150.836 94.571 151.014C94.6814 151.186 94.8182 151.316 94.9814 151.402C95.1494 151.489 95.327 151.532 95.5142 151.532C95.7782 151.532 95.9846 151.477 96.1334 151.366C96.2822 151.256 96.395 151.102 96.4718 150.906H97.0694C96.9878 151.237 96.8174 151.518 96.5582 151.748C96.299 151.974 95.951 152.086 95.5142 152.086ZM95.5142 148.882C95.2358 148.882 94.991 148.966 94.7798 149.134C94.5734 149.302 94.4462 149.538 94.3982 149.84H96.5726C96.5534 149.542 96.4454 149.31 96.2486 149.142C96.0566 148.969 95.8118 148.882 95.5142 148.882ZM98.8162 152V151.482H99.7306V149.127C99.7306 149.007 99.673 148.947 99.5578 148.947H98.9098V148.429H99.781C99.9394 148.429 100.067 148.472 100.163 148.558C100.259 148.645 100.307 148.772 100.307 148.94V149.091H100.335C100.393 148.851 100.501 148.666 100.659 148.537C100.823 148.407 101.048 148.342 101.336 148.342H101.991V148.983H101.25C100.957 148.983 100.731 149.082 100.573 149.278C100.415 149.47 100.335 149.718 100.335 150.02V151.482H101.459V152H98.8162Z" fill="#00D4AA"/>
          <rect x="24" y="184.801" width="90" height="2" rx="1" fill="white" fill-opacity="0.06"/>
          <rect x="42.5" y="202.602" width="53" height="2" rx="1" fill="white" fill-opacity="0.06"/>
          <rect x="37.205" y="220.4" width="63.59" height="2" rx="1" fill="white" fill-opacity="0.06"/>
          <defs>
          <linearGradient id="paint0_linear_176_703" x1="14.1127" y1="-5.12021" x2="123.269" y2="295.745" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0D1526"/>
          <stop offset="1" stop-color="#111827"/>
          </linearGradient>
          </defs>
        </svg>
      </div>
      <div>
        <svg width="153" height="323" viewBox="0 0 153 323" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="153" height="322.4" rx="16" stroke="#FFFFFF12" stroke-width="2" fill="url(#paint0_linear_176_717)"/>
          <path d="M77.4152 96.1408L82.836 110.118C83.0451 110.626 83.2691 110.992 83.508 111.216C83.7469 111.425 83.9635 111.537 84.1576 111.552V112C83.62 111.97 82.9928 111.955 82.276 111.955C81.5592 111.94 80.8275 111.933 80.0808 111.933C79.3192 111.933 78.6024 111.94 77.9304 111.955C77.2584 111.955 76.7208 111.97 76.3176 112V111.552C77.0792 111.522 77.5571 111.395 77.7512 111.171C77.9603 110.932 77.9155 110.432 77.6168 109.67L74.0328 99.7472L74.4808 98.9632L71.3896 107.005C71.0163 107.975 70.7848 108.759 70.6952 109.357C70.6205 109.939 70.6579 110.387 70.8072 110.701C70.9565 111.014 71.1955 111.231 71.524 111.35C71.8525 111.47 72.2408 111.537 72.6888 111.552V112C72.1363 111.97 71.636 111.955 71.188 111.955C70.7549 111.94 70.2771 111.933 69.7544 111.933C69.4707 111.933 69.1645 111.94 68.836 111.955C68.5224 111.955 68.2536 111.97 68.0296 112V111.552C68.3731 111.492 68.7091 111.276 69.0376 110.902C69.3811 110.514 69.732 109.857 70.0904 108.931L75.0632 96.1408C75.4216 96.1707 75.8099 96.1856 76.228 96.1856C76.6611 96.1856 77.0568 96.1707 77.4152 96.1408ZM78.1992 105.549V105.997H71.524L71.748 105.549H78.1992Z" fill="#00D4AA"/>
          <path d="M64.2376 140L65.8144 134.96H66.5128L68.0824 140H67.42L67.0528 138.747H65.2672L64.9 140H64.2376ZM66.1456 135.81L65.4184 138.243H66.9016L66.1744 135.81H66.1456ZM69.6564 140V134.96H72.8028V135.507H70.2612V137.185H72.5868V137.732H70.2612V139.453H72.8028V140H69.6564ZM76.184 140.086C75.8288 140.086 75.512 139.983 75.2336 139.777C74.9552 139.566 74.7368 139.266 74.5784 138.877C74.4248 138.488 74.348 138.022 74.348 137.48C74.348 136.942 74.4272 136.479 74.5856 136.09C74.744 135.702 74.9672 135.402 75.2552 135.19C75.548 134.979 75.8936 134.874 76.292 134.874C76.7672 134.874 77.1536 135.013 77.4512 135.291C77.7536 135.57 77.9336 135.944 77.9912 136.414H77.3216C77.2736 136.126 77.1608 135.894 76.9832 135.716C76.8104 135.534 76.58 135.442 76.292 135.442C75.8792 135.442 75.5552 135.622 75.32 135.982C75.0848 136.342 74.9672 136.842 74.9672 137.48C74.9672 138.128 75.0848 138.63 75.32 138.985C75.5552 139.34 75.86 139.518 76.2344 139.518C76.5032 139.518 76.724 139.438 76.8968 139.28C77.0696 139.117 77.1992 138.91 77.2856 138.661C77.3768 138.406 77.4272 138.145 77.4368 137.876H76.3136V137.358H78.056V140H77.5016L77.4512 139.237H77.4224C77.3216 139.496 77.1728 139.702 76.976 139.856C76.784 140.01 76.52 140.086 76.184 140.086ZM79.8244 140V139.474H80.9692V135.486H79.8244V134.96H82.7188V135.486H81.574V139.474H82.7188V140H79.8244ZM86.3592 140.086C86.004 140.086 85.6944 140.019 85.4304 139.885C85.1712 139.75 84.9696 139.563 84.8256 139.323C84.6864 139.083 84.6144 138.802 84.6096 138.481H85.2432C85.248 138.769 85.344 139.018 85.5312 139.23C85.7232 139.436 85.9992 139.539 86.3592 139.539C86.6904 139.539 86.9448 139.46 87.1224 139.302C87.3048 139.138 87.396 138.944 87.396 138.718C87.396 138.531 87.3528 138.375 87.2664 138.25C87.18 138.121 87.0384 138.008 86.8416 137.912C86.6496 137.811 86.3904 137.708 86.064 137.602C85.6032 137.463 85.2672 137.274 85.056 137.034C84.8448 136.794 84.7392 136.496 84.7392 136.141C84.7392 135.901 84.8016 135.685 84.9264 135.493C85.0512 135.301 85.2312 135.15 85.4664 135.039C85.7016 134.929 85.9872 134.874 86.3232 134.874C86.64 134.874 86.916 134.934 87.1512 135.054C87.3912 135.169 87.576 135.332 87.7056 135.543C87.84 135.754 87.9072 135.997 87.9072 136.27H87.2736C87.2736 136.136 87.2376 136.004 87.1656 135.874C87.0936 135.745 86.9856 135.637 86.8416 135.55C86.6976 135.464 86.5152 135.421 86.2944 135.421C86.0304 135.421 85.8096 135.486 85.632 135.615C85.4544 135.74 85.3656 135.913 85.3656 136.134C85.3656 136.302 85.404 136.443 85.4808 136.558C85.5624 136.674 85.6944 136.779 85.8768 136.875C86.0592 136.966 86.3064 137.065 86.6184 137.17C86.9112 137.266 87.1608 137.379 87.3672 137.509C87.5784 137.634 87.7392 137.79 87.8496 137.977C87.9648 138.164 88.0224 138.397 88.0224 138.675C88.0224 138.949 87.9528 139.191 87.8136 139.402C87.6744 139.614 87.48 139.782 87.2304 139.906C86.9808 140.026 86.6904 140.086 86.3592 140.086Z" fill="#6B7280"/>
          <mask id="path-3-inside-1_176_717" fill="white">
          <path d="M22 166C22 159.925 26.9249 155 33 155H120C126.075 155 131 159.925 131 166C131 172.075 126.075 177 120 177H33C26.9249 177 22 172.075 22 166Z"/>
          </mask>
          <path d="M22 166C22 159.925 26.9249 155 33 155H120C126.075 155 131 159.925 131 166C131 172.075 126.075 177 120 177H33C26.9249 177 22 172.075 22 166Z" fill="#3B82F6" fill-opacity="0.12"/>
          <path d="M22 166M131 166M131 166M22 166M33 155V156H120V155V154H33V155ZM131 166M120 177V176H33V177V178H120V177ZM22 166M33 177V176C27.4772 176 23 171.523 23 166H22H21C21 172.627 26.3726 178 33 178V177ZM131 166H130C130 171.523 125.523 176 120 176V177V178C126.627 178 132 172.627 132 166H131ZM120 155V156C125.523 156 130 160.477 130 166H131H132C132 159.373 126.627 154 120 154V155ZM33 155V154C26.3726 154 21 159.373 21 166H22H23C23 160.477 27.4772 156 33 156V155Z" fill="#3B82F6" fill-opacity="0.25" mask="url(#path-3-inside-1_176_717)"/>
          <path d="M34.8104 168.086C34.4552 168.086 34.1456 168.019 33.8816 167.885C33.6224 167.75 33.4208 167.563 33.2768 167.323C33.1376 167.083 33.0656 166.802 33.0608 166.481H33.6944C33.6992 166.769 33.7952 167.018 33.9824 167.23C34.1744 167.436 34.4504 167.539 34.8104 167.539C35.1416 167.539 35.396 167.46 35.5736 167.302C35.756 167.138 35.8472 166.944 35.8472 166.718C35.8472 166.531 35.804 166.375 35.7176 166.25C35.6312 166.121 35.4896 166.008 35.2928 165.912C35.1008 165.811 34.8416 165.708 34.5152 165.602C34.0544 165.463 33.7184 165.274 33.5072 165.034C33.296 164.794 33.1904 164.496 33.1904 164.141C33.1904 163.901 33.2528 163.685 33.3776 163.493C33.5024 163.301 33.6824 163.15 33.9176 163.039C34.1528 162.929 34.4384 162.874 34.7744 162.874C35.0912 162.874 35.3672 162.934 35.6024 163.054C35.8424 163.169 36.0272 163.332 36.1568 163.543C36.2912 163.754 36.3584 163.997 36.3584 164.27H35.7248C35.7248 164.136 35.6888 164.004 35.6168 163.874C35.5448 163.745 35.4368 163.637 35.2928 163.55C35.1488 163.464 34.9664 163.421 34.7456 163.421C34.4816 163.421 34.2608 163.486 34.0832 163.615C33.9056 163.74 33.8168 163.913 33.8168 164.134C33.8168 164.302 33.8552 164.443 33.932 164.558C34.0136 164.674 34.1456 164.779 34.328 164.875C34.5104 164.966 34.7576 165.065 35.0696 165.17C35.3624 165.266 35.612 165.379 35.8184 165.509C36.0296 165.634 36.1904 165.79 36.3008 165.977C36.416 166.164 36.4736 166.397 36.4736 166.675C36.4736 166.949 36.404 167.191 36.2648 167.402C36.1256 167.614 35.9312 167.782 35.6816 167.906C35.432 168.026 35.1416 168.086 34.8104 168.086ZM39.6892 168.086C39.3532 168.086 39.0556 168.01 38.7964 167.856C38.542 167.698 38.3404 167.479 38.1916 167.201C38.0428 166.918 37.9684 166.589 37.9684 166.214C37.9684 165.84 38.0404 165.514 38.1844 165.235C38.3332 164.952 38.5372 164.734 38.7964 164.58C39.0556 164.422 39.358 164.342 39.7036 164.342C40.0492 164.342 40.3444 164.422 40.5892 164.58C40.834 164.734 41.0212 164.938 41.1508 165.192C41.2804 165.446 41.3452 165.72 41.3452 166.013C41.3452 166.066 41.3428 166.118 41.338 166.171C41.338 166.224 41.338 166.284 41.338 166.351H38.566C38.5804 166.615 38.6404 166.836 38.746 167.014C38.8564 167.186 38.9932 167.316 39.1564 167.402C39.3244 167.489 39.502 167.532 39.6892 167.532C39.9532 167.532 40.1596 167.477 40.3084 167.366C40.4572 167.256 40.57 167.102 40.6468 166.906H41.2444C41.1628 167.237 40.9924 167.518 40.7332 167.748C40.474 167.974 40.126 168.086 39.6892 168.086ZM39.6892 164.882C39.4108 164.882 39.166 164.966 38.9548 165.134C38.7484 165.302 38.6212 165.538 38.5732 165.84H40.7476C40.7284 165.542 40.6204 165.31 40.4236 165.142C40.2316 164.969 39.9868 164.882 39.6892 164.882ZM44.604 168.086C44.2824 168.086 43.9944 168.012 43.74 167.863C43.4904 167.714 43.2912 167.501 43.1424 167.222C42.9936 166.939 42.9192 166.603 42.9192 166.214C42.9192 165.826 42.9936 165.492 43.1424 165.214C43.2912 164.93 43.4928 164.714 43.7472 164.566C44.0064 164.417 44.292 164.342 44.604 164.342C45.0456 164.342 45.3984 164.453 45.6624 164.674C45.9264 164.894 46.0944 165.19 46.1664 165.559H45.5472C45.4896 165.362 45.3792 165.206 45.216 165.091C45.0528 164.971 44.8464 164.911 44.5968 164.911C44.4144 164.911 44.2416 164.959 44.0784 165.055C43.9152 165.151 43.7832 165.295 43.6824 165.487C43.5816 165.679 43.5312 165.922 43.5312 166.214C43.5312 166.507 43.5816 166.752 43.6824 166.949C43.7832 167.141 43.9152 167.285 44.0784 167.381C44.2416 167.477 44.4144 167.525 44.5968 167.525C44.8608 167.525 45.0696 167.465 45.2232 167.345C45.3816 167.225 45.4896 167.066 45.5472 166.87H46.1664C46.0752 167.249 45.8952 167.546 45.6264 167.762C45.3624 167.978 45.0216 168.086 44.604 168.086ZM49.1875 168.086C48.7555 168.086 48.4291 167.957 48.2083 167.698C47.9875 167.438 47.8771 167.064 47.8771 166.574V164.429H48.4819V166.502C48.4819 166.819 48.5515 167.069 48.6907 167.251C48.8347 167.429 49.0507 167.518 49.3387 167.518C49.6267 167.518 49.8691 167.422 50.0659 167.23C50.2627 167.033 50.3611 166.752 50.3611 166.387V164.429H50.9659V168H50.4619L50.3971 167.46H50.3611C50.2651 167.633 50.1139 167.782 49.9075 167.906C49.7011 168.026 49.4611 168.086 49.1875 168.086ZM52.7775 168V167.482H53.6919V165.127C53.6919 165.007 53.6343 164.947 53.5191 164.947H52.8711V164.429H53.7423C53.9007 164.429 54.0279 164.472 54.1239 164.558C54.2199 164.645 54.2679 164.772 54.2679 164.94V165.091H54.2967C54.3543 164.851 54.4623 164.666 54.6207 164.537C54.7839 164.407 55.0095 164.342 55.2975 164.342H55.9527V164.983H55.2111C54.9183 164.983 54.6927 165.082 54.5343 165.278C54.3759 165.47 54.2967 165.718 54.2967 166.02V167.482H55.4199V168H52.7775ZM59.1827 163.795C59.0387 163.795 58.9187 163.747 58.8227 163.651C58.7267 163.555 58.6787 163.44 58.6787 163.306C58.6787 163.166 58.7267 163.051 58.8227 162.96C58.9187 162.864 59.0387 162.816 59.1827 162.816C59.3219 162.816 59.4395 162.864 59.5355 162.96C59.6363 163.051 59.6867 163.166 59.6867 163.306C59.6867 163.44 59.6363 163.555 59.5355 163.651C59.4395 163.747 59.3219 163.795 59.1827 163.795ZM57.7859 168V167.482H58.9235V165.127C58.9235 165.007 58.8635 164.947 58.7435 164.947H57.9083V164.429H58.8875C59.3147 164.429 59.5283 164.642 59.5283 165.07V167.482H60.6659V168H57.7859ZM64.4935 168C64.1671 168 63.9103 167.921 63.7231 167.762C63.5359 167.604 63.4423 167.318 63.4423 166.906V164.947H62.5351V164.429H63.0751C63.3199 164.429 63.4615 164.309 63.4999 164.069L63.6007 163.514H64.0471V164.429H65.4727V164.947H64.0471V166.906C64.0471 167.107 64.0927 167.249 64.1839 167.33C64.2799 167.412 64.4431 167.453 64.6735 167.453H65.4727V168H64.4935ZM67.9251 169.584L68.8035 167.654H68.5947L67.1835 164.429H67.8387L69.0123 167.194L70.2507 164.429H70.8843L68.5587 169.584H67.9251ZM77.1715 168V162.96H78.8491C79.2331 162.96 79.5475 163.03 79.7923 163.169C80.0371 163.308 80.2171 163.493 80.3323 163.723C80.4475 163.954 80.5051 164.208 80.5051 164.486C80.5051 164.765 80.4475 165.019 80.3323 165.25C80.2171 165.48 80.0371 165.665 79.7923 165.804C79.5475 165.943 79.2331 166.013 78.8491 166.013H77.7763V168H77.1715ZM77.7763 165.458H78.8347C79.1899 165.458 79.4539 165.37 79.6267 165.192C79.7995 165.01 79.8859 164.774 79.8859 164.486C79.8859 164.198 79.7995 163.963 79.6267 163.781C79.4539 163.598 79.1899 163.507 78.8347 163.507H77.7763V165.458ZM83.7278 168.086C83.3918 168.086 83.0942 168.01 82.835 167.856C82.5806 167.698 82.379 167.479 82.2302 167.201C82.0814 166.918 82.007 166.589 82.007 166.214C82.007 165.84 82.079 165.514 82.223 165.235C82.3718 164.952 82.5758 164.734 82.835 164.58C83.0942 164.422 83.3966 164.342 83.7422 164.342C84.0878 164.342 84.383 164.422 84.6278 164.58C84.8726 164.734 85.0598 164.938 85.1894 165.192C85.319 165.446 85.3838 165.72 85.3838 166.013C85.3838 166.066 85.3814 166.118 85.3766 166.171C85.3766 166.224 85.3766 166.284 85.3766 166.351H82.6046C82.619 166.615 82.679 166.836 82.7846 167.014C82.895 167.186 83.0318 167.316 83.195 167.402C83.363 167.489 83.5406 167.532 83.7278 167.532C83.9918 167.532 84.1982 167.477 84.347 167.366C84.4958 167.256 84.6086 167.102 84.6854 166.906H85.283C85.2014 167.237 85.031 167.518 84.7718 167.748C84.5126 167.974 84.1646 168.086 83.7278 168.086ZM83.7278 164.882C83.4494 164.882 83.2046 164.966 82.9934 165.134C82.787 165.302 82.6598 165.538 82.6118 165.84H84.7862C84.767 165.542 84.659 165.31 84.4622 165.142C84.2702 164.969 84.0254 164.882 83.7278 164.882ZM87.0298 168V167.482H87.9442V165.127C87.9442 165.007 87.8866 164.947 87.7714 164.947H87.1234V164.429H87.9946C88.153 164.429 88.2802 164.472 88.3762 164.558C88.4722 164.645 88.5202 164.772 88.5202 164.94V165.091H88.549C88.6066 164.851 88.7146 164.666 88.873 164.537C89.0362 164.407 89.2618 164.342 89.5498 164.342H90.205V164.983H89.4634C89.1706 164.983 88.945 165.082 88.7866 165.278C88.6282 165.47 88.549 165.718 88.549 166.02V167.482H89.6722V168H87.0298ZM93.5142 168.086C93.0582 168.086 92.6886 167.981 92.4054 167.77C92.127 167.554 91.971 167.258 91.9374 166.884H92.5638C92.5926 167.081 92.6886 167.242 92.8518 167.366C93.0198 167.491 93.2454 167.554 93.5286 167.554C93.7974 167.554 93.9966 167.496 94.1262 167.381C94.2606 167.266 94.3278 167.134 94.3278 166.985C94.3278 166.783 94.2486 166.646 94.0902 166.574C93.9318 166.498 93.6942 166.44 93.3774 166.402C92.9982 166.358 92.6838 166.255 92.4342 166.092C92.1846 165.929 92.0598 165.684 92.0598 165.358C92.0598 165.065 92.1822 164.822 92.427 164.63C92.6718 164.438 93.0054 164.342 93.4278 164.342C93.8454 164.342 94.1742 164.438 94.4142 164.63C94.6542 164.818 94.791 165.086 94.8246 165.437H94.227C94.2126 165.264 94.1286 165.127 93.975 165.026C93.8262 164.921 93.639 164.868 93.4134 164.868C93.1782 164.868 92.9958 164.914 92.8662 165.005C92.7366 165.091 92.6718 165.206 92.6718 165.35C92.6718 165.494 92.7438 165.614 92.8878 165.71C93.0366 165.802 93.2694 165.862 93.5862 165.89C93.8358 165.919 94.0638 165.967 94.2702 166.034C94.4766 166.102 94.6398 166.207 94.7598 166.351C94.8846 166.495 94.947 166.697 94.947 166.956C94.9518 167.172 94.8918 167.366 94.767 167.539C94.647 167.707 94.479 167.842 94.263 167.942C94.047 168.038 93.7974 168.086 93.5142 168.086ZM98.3714 168.086C98.0354 168.086 97.7378 168.01 97.4786 167.856C97.2194 167.702 97.0154 167.486 96.8666 167.208C96.7178 166.925 96.6434 166.594 96.6434 166.214C96.6434 165.835 96.7178 165.506 96.8666 165.228C97.0154 164.945 97.2194 164.726 97.4786 164.573C97.7378 164.419 98.0354 164.342 98.3714 164.342C98.7074 164.342 99.005 164.419 99.2642 164.573C99.5234 164.726 99.7274 164.945 99.8762 165.228C100.025 165.506 100.099 165.835 100.099 166.214C100.099 166.594 100.025 166.925 99.8762 167.208C99.7274 167.486 99.5234 167.702 99.2642 167.856C99.005 168.01 98.7074 168.086 98.3714 168.086ZM98.3714 167.51C98.5778 167.51 98.765 167.465 98.933 167.374C99.101 167.282 99.233 167.141 99.329 166.949C99.4298 166.757 99.4802 166.512 99.4802 166.214C99.4802 165.917 99.4298 165.672 99.329 165.48C99.233 165.288 99.101 165.146 98.933 165.055C98.765 164.964 98.5778 164.918 98.3714 164.918C98.1698 164.918 97.985 164.964 97.817 165.055C97.649 165.146 97.5146 165.288 97.4138 165.48C97.313 165.672 97.2626 165.917 97.2626 166.214C97.2626 166.661 97.3706 166.99 97.5866 167.201C97.8026 167.407 98.0642 167.51 98.3714 167.51ZM101.738 168V164.429H102.242L102.307 164.969H102.343C102.439 164.796 102.59 164.65 102.797 164.53C103.003 164.405 103.241 164.342 103.509 164.342C103.946 164.342 104.273 164.472 104.489 164.731C104.709 164.99 104.82 165.365 104.82 165.854V168H104.215V165.926C104.215 165.61 104.145 165.362 104.006 165.185C103.867 165.002 103.651 164.911 103.358 164.911C103.075 164.911 102.835 165.01 102.638 165.206C102.441 165.398 102.343 165.677 102.343 166.042V168H101.738ZM106.631 168V164.429H107.135L107.2 164.969H107.236C107.332 164.796 107.483 164.65 107.69 164.53C107.896 164.405 108.134 164.342 108.403 164.342C108.839 164.342 109.166 164.472 109.382 164.731C109.603 164.99 109.713 165.365 109.713 165.854V168H109.108V165.926C109.108 165.61 109.039 165.362 108.899 165.185C108.76 165.002 108.544 164.911 108.251 164.911C107.968 164.911 107.728 165.01 107.531 165.206C107.335 165.398 107.236 165.677 107.236 166.042V168H106.631ZM113.087 168.086C112.751 168.086 112.453 168.01 112.194 167.856C111.94 167.698 111.738 167.479 111.589 167.201C111.441 166.918 111.366 166.589 111.366 166.214C111.366 165.84 111.438 165.514 111.582 165.235C111.731 164.952 111.935 164.734 112.194 164.58C112.453 164.422 112.756 164.342 113.101 164.342C113.447 164.342 113.742 164.422 113.987 164.58C114.232 164.734 114.419 164.938 114.549 165.192C114.678 165.446 114.743 165.72 114.743 166.013C114.743 166.066 114.741 166.118 114.736 166.171C114.736 166.224 114.736 166.284 114.736 166.351H111.964C111.978 166.615 112.038 166.836 112.144 167.014C112.254 167.186 112.391 167.316 112.554 167.402C112.722 167.489 112.9 167.532 113.087 167.532C113.351 167.532 113.557 167.477 113.706 167.366C113.855 167.256 113.968 167.102 114.045 166.906H114.642C114.561 167.237 114.39 167.518 114.131 167.748C113.872 167.974 113.524 168.086 113.087 168.086ZM113.087 164.882C112.809 164.882 112.564 164.966 112.353 165.134C112.146 165.302 112.019 165.538 111.971 165.84H114.145C114.126 165.542 114.018 165.31 113.821 165.142C113.629 164.969 113.385 164.882 113.087 164.882ZM116.324 168V167.482H117.541V163.514C117.541 163.394 117.481 163.334 117.361 163.334H116.454V162.816H117.505C117.711 162.816 117.87 162.871 117.98 162.982C118.091 163.092 118.146 163.25 118.146 163.457V167.482H119.363V168H116.324Z" fill="#3B82F6"/>
          <rect x="52.3051" y="200.801" width="48.39" height="2" rx="1" fill="#00D4AA"/>
          <rect x="43.225" y="218.602" width="66.55" height="2" rx="1" fill="white" fill-opacity="0.06"/>
          <rect x="37.1801" y="236.4" width="78.64" height="2" rx="1" fill="white" fill-opacity="0.06"/>
          <defs>
          <linearGradient id="paint0_linear_176_717" x1="15.6461" y1="-5.68414" x2="136.955" y2="328.229" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0D1526"/>
          <stop offset="1" stop-color="#111827"/>
          </linearGradient>
          </defs>
        </svg>
      </div>
      
    </div>
  </section>
);

const CTA = () => (
  <section className={styles.cta}>
    <div className={styles.ctaBadge}>
      <span className={styles.ctaBadgeIcon}>⚖️</span>
      <span className={styles.ctaBadgeText}>SDG 16 — PEACE, JUSTICE &amp; STRONG INSTITUTIONS</span>
    </div>

    <h2 className={styles.ctaTitle}>Ready to Help Bridge the Gap?</h2>

    <p className={styles.ctaDesc}>
      Aegis has the potential to transform community policing, reduce
      crime, and strengthen democratic institutions. We're looking for
      partners, funders, and implementers.
    </p>

    <div className={styles.ctaActions}>
      <a href="#" className={styles.ctaBtnPrimary}>PARTNER WITH US</a>
      <a href="#" className={styles.ctaBtnOutline}>
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.2766 0H2.54632C1.871 0 1.22333 0.268273 0.745801 0.745801C0.268273 1.22333 0 1.871 0 2.54632V18.5518C0 19.2271 0.268273 19.8748 0.745801 20.3523C1.22333 20.8298 1.871 21.0981 2.54632 21.0981H11.2766C11.9519 21.0981 12.5996 20.8298 13.0771 20.3523C13.5546 19.8748 13.8229 19.2271 13.8229 18.5518V2.54632C13.8229 1.871 13.5546 1.22333 13.0771 0.745801C12.5996 0.268273 11.9519 0 11.2766 0ZM11.6403 18.5518C11.6403 18.6483 11.602 18.7408 11.5338 18.809C11.4656 18.8772 11.3731 18.9156 11.2766 18.9156H2.54632C2.44985 18.9156 2.35732 18.8772 2.28911 18.809C2.22089 18.7408 2.18256 18.6483 2.18256 18.5518V2.54632C2.18256 2.44985 2.22089 2.35733 2.28911 2.28911C2.35732 2.22089 2.44985 2.18256 2.54632 2.18256H11.2766C11.3731 2.18256 11.4656 2.22089 11.5338 2.28911C11.602 2.35733 11.6403 2.44985 11.6403 2.54632V18.5518ZM8.36649 5.09265C8.36649 5.38043 8.28116 5.66175 8.12127 5.90103C7.96139 6.14031 7.73415 6.3268 7.46827 6.43693C7.2024 6.54706 6.90984 6.57588 6.62759 6.51973C6.34534 6.46359 6.08607 6.32501 5.88258 6.12152C5.67909 5.91803 5.54051 5.65876 5.48437 5.37651C5.42822 5.09426 5.45704 4.8017 5.56717 4.53583C5.6773 4.26995 5.86379 4.04271 6.10307 3.88283C6.34235 3.72294 6.62367 3.63761 6.91145 3.63761C7.29735 3.63761 7.66745 3.7909 7.94032 4.06378C8.21319 4.33665 8.36649 4.70675 8.36649 5.09265Z" fill="#E5E7EB"/>
        </svg>
        DOWNLOAD AEGIS
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerLogo}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="6.19394" fill="#00D4AA"/>
      <path d="M21.1977 13.2321L26.7923 27.6577C27.008 28.1817 27.2392 28.5593 27.4858 28.7905C27.7324 29.0062 27.9559 29.1218 28.1562 29.1372V29.5996C27.6014 29.5688 26.9541 29.5534 26.2143 29.5534C25.4745 29.538 24.7194 29.5303 23.9488 29.5303C23.1627 29.5303 22.423 29.538 21.7294 29.5534C21.0359 29.5534 20.4811 29.5688 20.0649 29.5996V29.1372C20.8509 29.1064 21.3441 28.9754 21.5445 28.7442C21.7602 28.4977 21.714 27.9813 21.4058 27.1953L17.7069 16.9541L18.1693 16.1449L14.979 24.4443C14.5937 25.4461 14.3548 26.2552 14.2623 26.8717C14.1853 27.4728 14.2238 27.9351 14.3779 28.2588C14.532 28.5824 14.7786 28.8059 15.1177 28.9292C15.4567 29.0525 15.8575 29.1218 16.3198 29.1372V29.5996C15.7496 29.5688 15.2333 29.5534 14.7709 29.5534C14.324 29.538 13.8308 29.5303 13.2914 29.5303C12.9985 29.5303 12.6826 29.538 12.3435 29.5534C12.0199 29.5534 11.7424 29.5688 11.5113 29.5996V29.1372C11.8657 29.0756 12.2125 28.8521 12.5516 28.4668C12.9061 28.0661 13.2682 27.388 13.6381 26.4324L18.7703 13.2321C19.1402 13.2629 19.5409 13.2783 19.9725 13.2783C20.4194 13.2783 20.8278 13.2629 21.1977 13.2321ZM22.0068 22.9416V23.404H15.1177L15.3489 22.9416H22.0068Z" fill="#0A0F1E"/>
      </svg>
      <span className={styles.footerLogoText}>AEGIS</span>
    </div>

    <div className={styles.footerMeta}>
      Proposal Date: January 28, 2026 · Research: Group 10 (2026)
    </div>

    <div className={styles.footerTags}>
      SDG 16 · Peace · Justice · Strong Institutions
    </div>
  </footer>
);

export default function AegisLanding() {
  return (
    <div className={styles.root}>
      <Navbar />
      <Hero />
      <TwoRoles />
      <ViciousCycle />
      <ThreeApps />
      <FourLayers />
      <WhyAegis />
      <Roadmap />
      <RevenueModel />
      <AppDownload />
      <CTA />
      <Footer />
    </div>
  );
}