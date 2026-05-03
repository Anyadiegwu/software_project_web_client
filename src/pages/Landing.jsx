import React, { useState } from "react";
import styles from "./AegisLanding.module.css";
import logo from "../images/image.png";

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.navLeft}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>
            <img src={logo} alt="Aegis Logo" />
        </span>
        <span className={styles.logoText}>Aegis</span>
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#">PROBLEM</a></li>
        <li><a href="#">SOLUTION</a></li>
        <li><a href="#">ARCHITECTURE</a></li>
        <li><a href="#">ROADMAP</a></li>
        <li><a href="#">MOBILE APP</a></li>
      </ul>
    </div>
    <div className={styles.navRight}>
      <a href="/select-role" className={styles.btnOutline}>Sign UP</a>
      <a href="#" className={styles.navCta}>DOWNLOAD AEGIS</a>
    </div>
  </nav>
);

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.heroBreadcrumb}>
      <span>SDG 16</span> <span>PEACE,</span> <span>JUSTICE & STRONG INSTITUTION .</span> <span>JAN 2026</span>
    </div>
    <div className={styles.heroContent}>
      <div className={styles.heroLeft}>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleGreen}>Aegis</span> – Building Trust Through Technology
        </h1>
        <p className={styles.heroDesc}>
          A hybrid mobile platform and web ecosystem bridging the gap between security agencies and citizens in developing nations. Two roles. One mission.
        </p>
        <div className={styles.heroActions}>
          <a href="#" className={styles.btnPrimary}>EXPLORE THE PLATFORM</a>
          <a href="#" className={styles.btnSecondary}>
            <span className={styles.downloadIcon}>📱</span> DOWNLOAD AEGIS
          </a>
          <a href="#" className={styles.btnText}>READ THE RESEARCH</a>
        </div>
        <div className={styles.heroStats}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>1<span className={styles.statSup}>:</span>618</span>
            <span className={styles.statLabel}>CURRENT POLICE-TO-POPULATION RATIO</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>#1</span>
            <span className={styles.statLabel}>OBSTACLE IS BROKEN TRUST</span>
         </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>3</span>
            <span className={styles.statLabel}>INTERCONNECTED APPLICATIONS IN ONE ECOSYSTEM</span>
            </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>&</span>
            <span className={styles.statLabel}>POTENTIAL FOR NATIONAL & REGIONAL SCALE</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TwoRoles = () => (
  <section className={styles.twoRoles}>
    <div className={styles.twoRolesLeft}>
      <h2 className={styles.sectionTitle}>One App, Two Roles, Built for Both Sides of Safety.</h2>
      <p className={styles.sectionDesc}>
        Aegis serves both citizens and first responders. Citizens report incidents anonymously with full privacy. High-grade real-time community through the same unified interface.
      </p> 
    </div>
    <div className={styles.twoRolesRight}>
      <div className={styles.roleCard}>
        <span className={styles.roleIcon}>🚨</span>
        <span>Crime Response</span>
      </div>
      <div className={styles.roleCard}>
        <span className={styles.roleIcon}>🛡️</span>
        <span>Security Personnel</span>
      </div>
    </div>
  </section>
);

const ViciousCycle = () => (
  <section className={styles.vicious}>
    <div className={styles.viciousHeader}>
      <h2 className={styles.sectionTitle}>A Vicious Cycle That Defeats Itself</h2>
      <p className={styles.sectionDesc}>
        Residents don't trust the system enough to report — Agencies claim they can't improve without data. Neither side moves first, and communities stay unsafe.
      </p>
    </div>
    <div className={styles.viciousGrid}>
      <div className={styles.viciousLeft}>
        <div className={styles.quoteBox}>
          <p>"I witnessed corruption personally, yet felt I had no information provided to the description to the force of a similar nature to a lawful complaint."</p>
        </div>
        <div className={styles.breakdownLoop}>
          <h4 className={styles.loopTitle}>The Breakdown Loop</h4>
          <p className={styles.loopDesc}>When reporting fails to prevent crime, trust fails to surface information...</p>
          <ul className={styles.loopList}>
            <li><span className={styles.loopDot} style={{background:'#ff4444'}} />Police are seen as ineffective or inaccessible to approach</li>
            <li><span className={styles.loopDot} style={{background:'#ffaa00'}} />Victims and witnesses stay silent out of fear or distrust</li>
            <li><span className={styles.loopDot} style={{background:'#00ccaa'}} />Perpetrators go unchecked — crime and corruption continue</li>
            <li><span className={styles.loopDot} style={{background:'#4488ff'}} />Crime data never materializes or is never recorded</li>
          </ul>
        </div>
      </div>
      <div className={styles.viciousRight}>
        <div className={styles.issuesList}>
          {[
            { color: '#ff4444', label: 'Rampant Acts of Corruption & Bribery' },
            { color: '#ff8800', label: 'Police Brutality & Institutional Violence' },
            { color: '#ffcc00', label: 'Police Loss of Weapons & Uniforms' },
            { color: '#44bb44', label: 'Insufficient Funding & Consequent Training' },
            { color: '#00aacc', label: 'Lack of Manpower: Personnel & Equipment Issues' },
            { color: '#8844ff', label: 'Deportation: Legislation Shortfalls for Irregular Issues' },
            { color: '#ff4488', label: "Deportation & Legislation Shortfalls for Irregular Issues" },
          ].map((item, i) => (
            <div key={i} className={styles.issueItem}>
              <span className={styles.issueBar} style={{background: item.color}} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ThreeApps = () => (
  <section className={styles.threeApps}>
    <div className={styles.threeAppsHeader}>
      <h2 className={styles.sectionTitle}>Three Apps. One Ecosystem. One Goal.</h2>
      <p className={styles.sectionDesc}>
        Aegis isn't a single product. It's an operating system — spanning citizen reporting, community watch networks, and police management built to holistically tackle trust and safety across communities.
      </p>
    </div>
    <div className={styles.appsGrid}>
      {[
        {
          tag: 'APP 1',
          icon: '🛡️',
          name: 'SafePort',
          color: '#00e5cc',
          desc: 'A secure, anonymous reporting platform for citizens to submit safety concerns directly to trusted authorities — with full privacy protections and real-time response tracking.',
          features: [
            'Anonymous, encrypted incident reporting',
            'GPS-tagged submissions with media attachments',
            'Real-time case tracking and updates',
            'Multi-language support for local access',
            'One-click emergency SOS escalation',
          ]
        },
        {
          tag: 'APP 2',
          icon: '👁️',
          name: 'CommunityWatch',
          color: '#ffaa00',
          desc: 'A neighborhood safety intelligence layer where verified community members log incidents, share alerts, and build a live safety map — enabling coordinated community responses.',
          features: [
            'Verified community member network',
            'Live incident mapping and safety alerts',
            'Community safety scoring by zone',
            'Peer-to-peer anonymous tip sharing',
            'Moderated reporting to prevent misuse',
          ]
        },
        {
          tag: 'APP 3 · 4',
          icon: '🔗',
          name: 'PoliceConnect',
          color: '#4488ff',
          desc: 'A powerful command dashboard for law enforcement agencies to receive validated reports, dispatch resources, manage cases, and close the loop with transparent citizen feedback.',
          features: [
            'Unified report management dashboard',
            'Automated triage and case prioritization',
            'Officer deployment and GPS tracking',
            'Transparent citizen-facing case updates',
            'Performance analytics and accountability metrics',
          ]
        },
      ].map((app, i) => (
        <div key={i} className={styles.appCard}>
          <div className={styles.appTag}>{app.tag}</div>
          <div className={styles.appIcon} style={{color: app.color}}>{app.icon}</div>
          <h3 className={styles.appName} style={{color: app.color}}>{app.name}</h3>
          <p className={styles.appDesc}>{app.desc}</p>
          <ul className={styles.appFeatures}>
            {app.features.map((f, j) => (
              <li key={j}><span className={styles.featureDot} style={{background: app.color}} />{f}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

const FourLayers = () => (
  <section className={styles.fourLayers}>
    <div className={styles.fourLayersLeft}>
      <h2 className={styles.sectionTitle}>Four Layers of Trust-Building</h2>
      <p className={styles.sectionDesc}>
        Our framework addresses systemic failure points — from citizen reporting infrastructure right through transparent accountability tools.
      </p>
      <div className={styles.layersList}>
        {[
          { name: 'Safe Reporting Channel', desc: 'Citizens can report without fear — full anonymization and encryption applied at entry point.' },
          { name: 'Community Safety Network', desc: 'The wider community becomes active participants — verifying incidents and keeping neighborhoods informed.' },
          { name: 'Transparency Dashboard', desc: 'Agencies publish response rates and case outcomes — restoring public confidence through measurable results.' },
          { name: 'Trust-Building Features', desc: 'Cross-stakeholder accountability measures ensure no single actor can corrupt or suppress safety data.' },
        ].map((layer, i) => (
          <div key={i} className={styles.layerItem}>
            <div className={styles.layerLabel}>LAYER {i + 1}</div>
            <h4 className={styles.layerName}>{layer.name}</h4>
            <p className={styles.layerDesc}>{layer.desc}</p>
          </div>
        ))}
      </div>
    </div>
    <div className={styles.fourLayersRight}>
      {[
        'End-to-end encrypted reports with zero personally identifiable data stored',
        'Multi-party verification prevents false reporting and manipulation',
        'Immutable audit logs ensure accountability for all parties',
        'Real-time response metrics published to public transparency portal',
        'Third-party civil society audits of agency performance data',
        'Algorithmic bias detection built into case routing systems',
        'Automated SLA timers trigger escalation when cases stall',
        'Citizen satisfaction scores feed back into agency accountability ratings',
      ].map((feat, i) => (
        <div key={i} className={styles.rightFeature}>
          <span className={styles.checkIcon}>✓</span>
          <span>{feat}</span>
        </div>
      ))}
    </div>
  </section>
);

const WhyAegis = () => (
  <section className={styles.whyAegis}>
    <div className={styles.whyHeader}>
      <h2 className={styles.sectionTitle}>What Makes Aegis Work Where Others Failed</h2>
      <p className={styles.sectionDesc}>Six structural advantages that separate Aegis from failed hotlines and disconnected reporting systems.</p>
    </div>
    <div className={styles.whyGrid}>
      {[
        { icon: '🔒', title: 'Independence from Police Control', desc: "Aegis isn't run by the police. It's governed by independent civil society bodies — meaning agencies can't suppress or alter reports." },
        { icon: '🌐', title: 'Open Source & Auditable', desc: 'All core components are open source and independently auditable — communities can verify exactly how their data is handled.' },
        { icon: '📋', title: 'GDPR-Level Data Protection', desc: 'We apply EU-grade data protections in all markets — your identity is never stored, sold, or accessible to government authorities.' },
        { icon: '📡', title: 'Offline-First Architecture', desc: 'Designed to function in low-connectivity environments — submissions queue locally and sync when connectivity is restored.' },
        { icon: '🏛️', title: 'Multi-Stakeholder Governance', desc: 'Decisions about the platform are made by citizens, civil society, academia, and government in equal measure — no single party holds control.' },
        { icon: '👥', title: 'Moderation + Human Oversight', desc: 'AI-assisted triage is always reviewed by trained human moderators before cases reach law enforcement — preventing algorithmic bias.' },
      ].map((item, i) => (
        <div key={i} className={styles.whyCard}>
          <div className={styles.whyIcon}>{item.icon}</div>
          <h4 className={styles.whyTitle}>{item.title}</h4>
          <p className={styles.whyDesc}>{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Roadmap = () => (
  <section className={styles.roadmap}>
    <div className={styles.roadmapHeader}>
      <h2 className={styles.sectionTitle}>From Pilot to National Scale</h2>
      <p className={styles.sectionDesc}>A carefully staged rollout that builds trust at each phase before expanding.</p>
    </div>
    <div className={styles.roadmapGrid}>
      {[
        {
          phase: 'PHASE 1',
          name: 'Pilot',
          color: '#00e5cc',
          items: [
            'Deploy in 2 cities with partner NGOs',
            'Onboard 500 early adopter citizens',
            'Train 3 police divisions on dashboard',
            'Measure baseline reporting rates',
            'Iterate on UX based on field feedback',
          ]
        },
        {
          phase: 'PHASE 2',
          name: 'Expand',
          color: '#ffaa00',
          items: [
            'Extend to 5 additional urban centers',
            'Launch CommunityWatch layer',
            'Partner with 2 government ministries',
            'Open source the core platform',
            'Publish first transparency report',
          ]
        },
        {
          phase: 'PHASE 3',
          name: 'National Scale',
          color: '#4488ff',
          items: [
            'National rollout across all major regions',
            'Integrate with national emergency systems',
            'Launch multi-language support (12 languages)',
            'Establish independent oversight board',
            'Export model to neighboring countries',
          ]
        },
      ].map((phase, i) => (
        <div key={i} className={styles.phaseCard}>
          <div className={styles.phaseTag} style={{color: phase.color}}>{phase.phase}</div>
          <h3 className={styles.phaseName} style={{color: phase.color}}>{phase.name}</h3>
          <ul className={styles.phaseList}>
            {phase.items.map((item, j) => (
              <li key={j}><span className={styles.phaseDot} style={{background: phase.color}} />{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

const RevenueModel = () => (
  <section className={styles.revenue}>
    <div className={styles.revenueLeft}>
      <h2 className={styles.sectionTitle}>A Diversified Model Built to Last</h2>
      <p className={styles.sectionDesc}>
        Built on multiple revenue streams — ensuring financial independence, eliminating conflicts of interest, and sustaining long-term operations without government dependency.
      </p>
    </div>
    <div className={styles.revenueRight}>
      <div className={styles.revenueGrid}>
        {[
          { icon: '💰', title: 'International Development Grants', desc: 'Funding from multilateral development banks and international NGOs supporting civic tech in emerging markets.' },
          { icon: '🏛️', title: 'Government Partnerships', desc: 'SaaS licensing agreements with state and federal agencies for the PoliceConnect dashboard.' },
          { icon: '🤝', title: 'CSO Partnerships', desc: 'Revenue sharing with civil society organizations that deploy and manage local Aegis implementations.' },
          { icon: '📊', title: 'NGO & Civil Society Support', desc: 'Aggregate (anonymized) safety data reports and API access for academic researchers and urban planners.' },
        ].map((item, i) => (
          <div key={i} className={styles.revenueCard}>
            <div className={styles.revenueIcon}>{item.icon}</div>
            <div>
              <h4 className={styles.revenueTitle}>{item.title}</h4>
              <p className={styles.revenueDesc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AppDownload = () => (
  <section className={styles.appDownload}>
    <div className={styles.appDownloadLeft}>
      <h2 className={styles.sectionTitle}>Safety Intelligence in Your Pocket</h2>
      <p className={styles.sectionDesc}>
        Download Aegis and join thousands of citizens building safer communities — one verified report at a time.
      </p>
      <div className={styles.storeButtons}>
        <a href="#" className={styles.storeBtn}>
          <span>🍎</span> App Store
        </a>
        <a href="#" className={styles.storeBtn}>
          <span>▶</span> Google Play
        </a>
      </div>
    </div>
    <div className={styles.appDownloadRight}>
      <div className={styles.phoneMockup}>
        <div className={styles.phoneScreen}>
          <div className={styles.phoneHeader}>
            <span className={styles.phoneLogoSmall}>⬡ aegis</span>
          </div>
          <div className={styles.phoneContent}>
            <div className={styles.phoneCard} />
            <div className={styles.phoneCard} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className={styles.cta}>
    <h2 className={styles.ctaTitle}>Ready to Help Bridge the Gap?</h2>
    <p className={styles.ctaDesc}>
      Whether you're a government agency, NGO, researcher, or concerned citizen — Aegis has a role for you. Join us in building the infrastructure for safer communities across Africa.
    </p>
    <div className={styles.ctaActions}>
      <a href="#" className={styles.btnPrimary}>Get Started</a>
      <a href="#" className={styles.btnOutline}>📎 Learn More</a>
    </div>
  </section>
);

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerLogo}>
      <span className={styles.logoIcon}>⬡</span>
      <span className={styles.logoText}>aegis</span>
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