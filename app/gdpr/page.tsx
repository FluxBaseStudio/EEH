"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export default function Page() {
  return (
    <main className="gdpr-page">
      <header className="eeh-navbar">
        <Link href="/" className="eeh-logo" aria-label="European Entry Hub home">
          <span className="eeh-logo-main">EEH</span>
          <span className="eeh-logo-side">
            EUROPEAN
            <br />
            ENTRY HUB
          </span>
        </Link>

        <nav className="eeh-nav" aria-label="Main navigation">
          <Link href="/#services">Services</Link>
          <Link href="/#facility">Facility</Link>
          <Link href="/#operations">Capacity</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <Link href="/" className="eeh-nav-button">
          Back To Homepage
        </Link>
      </header>

      <section className="gdpr-hero">
        <div className="gdpr-grid" />

        <div className="gdpr-hero-content">
          <span className="eeh-kicker">DATA PROTECTION</span>
          <h1>GDPR</h1>
          <p>
            Information about how European Entry Hub may process personal data in
            accordance with GDPR and applicable data protection rules.
          </p>

          <div className="gdpr-hero-points">
            <span>
              <CheckCircle2 size={18} />
              Transparent processing
            </span>
            <span>
              <CheckCircle2 size={18} />
              Secure business communication
            </span>
            <span>
              <CheckCircle2 size={18} />
              GDPR rights explained
            </span>
          </div>
        </div>

        <div className="gdpr-hero-card" aria-hidden="true">
          <ShieldCheck size={86} strokeWidth={1.35} />
          <strong>DATA SECURITY</strong>
          <span>European Entry Hub</span>
        </div>
      </section>

      <section className="gdpr-intro">
        <span className="eeh-kicker dark">PRIVACY NOTICE</span>
        <h2>Your data. Protected and handled responsibly.</h2>
        <p>
          This GDPR notice explains what data may be collected, why it may be
          processed and what rights users have when interacting with EEH.
        </p>
      </section>

      <div className="gdpr-content">
        <div className="legal">
          <section>
            <h2>1. Introduction</h2>
            <p>
              European Entry Hub (&quot;EEH&quot;) respects the privacy of all
              website visitors, business partners and potential clients. This
              page explains how personal data may be processed in accordance
              with the General Data Protection Regulation (GDPR) and other
              applicable data protection laws.
            </p>
          </section>

          <section>
            <h2>2. Personal Data We May Collect</h2>
            <p>
              Depending on the interaction with the website, EEH may collect:
            </p>
            <ul>
              <li>Full name</li>
              <li>Company name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Message content submitted through contact forms</li>
              <li>Technical website usage information</li>
            </ul>
          </section>

          <section>
            <h2>3. Purpose Of Processing</h2>
            <p>Personal data may be processed for the following purposes:</p>
            <ul>
              <li>Responding to inquiries</li>
              <li>Preparing business proposals</li>
              <li>Providing logistics and fulfillment information</li>
              <li>Maintaining communication with potential clients</li>
              <li>Improving website functionality and security</li>
              <li>Meeting legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>4. Legal Basis For Processing</h2>
            <p>
              Personal data may be processed based on legitimate business
              interest, contractual necessity, legal obligations or the consent
              of the individual, depending on the specific situation and purpose
              of processing.
            </p>
          </section>

          <section>
            <h2>5. Data Controller</h2>
            <p>
              The final data controller details should be updated after the
              client provides official company registration information,
              including company name, registered address, tax identification
              number and final contact email.
            </p>
            <p>Temporary contact information:</p>
            <p>
              <a href="mailto:office@eu-entryhub.com">
                office@eu-entryhub.com
              </a>
            </p>
          </section>

          <section>
            <h2>6. Data Retention</h2>
            <p>
              Personal data will only be retained for as long as necessary to
              fulfill the purpose for which it was collected, comply with legal
              obligations, maintain business communication or resolve disputes.
            </p>
          </section>

          <section>
            <h2>7. Data Sharing</h2>
            <p>
              EEH does not sell personal information. Data may be shared with
              trusted service providers involved in website hosting, email
              communication, cybersecurity, analytics, legal compliance or
              operational support where necessary.
            </p>
          </section>

          <section>
            <h2>8. International Transfers</h2>
            <p>
              If third-party services located outside the European Economic Area
              are used, appropriate safeguards should be implemented to ensure
              adequate protection of personal data in accordance with applicable
              data protection laws.
            </p>
          </section>

          <section>
            <h2>9. Your Rights Under GDPR</h2>
            <p>
              Depending on applicable law and the specific processing activity,
              users may have the following rights:
            </p>
            <ul>
              <li>Right of access</li>
              <li>Right to rectification</li>
              <li>Right to erasure</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object</li>
              <li>Right to withdraw consent</li>
              <li>Right to lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <section>
            <h2>10. Security Measures</h2>
            <p>
              EEH applies reasonable technical and organizational measures
              designed to protect personal data against unauthorized access,
              accidental loss, misuse, alteration or disclosure.
            </p>
          </section>

          <section>
            <h2>11. Website Forms</h2>
            <p>
              When a visitor submits a form on the EEH website, the provided
              information may be used to respond to the inquiry and assess
              potential cooperation. Form backend and email delivery details
              should be finalized after the client provides the official mailbox.
            </p>
          </section>

          <section>
            <h2>12. Cookies And Analytics</h2>
            <p>
              The website may use essential cookies and, if enabled in the
              future, analytics tools such as Google Analytics, Google Search
              Console or Microsoft Clarity. Optional analytics should only be
              used with proper disclosure and consent where required.
            </p>
          </section>

          <section>
            <h2>13. Changes To This GDPR Notice</h2>
            <p>
              This notice may be updated periodically to reflect operational,
              legal or technical changes. The latest version will always be
              available on this page.
            </p>
          </section>

          <section>
            <h2>14. Contact</h2>
            <p>
              Questions regarding personal data processing may be directed to:
            </p>
            <p>
              <a href="mailto:office@eu-entryhub.com">
                office@eu-entryhub.com
              </a>
            </p>
          </section>
        </div>

        <section className="gdpr-cta">
          <div>
            <span className="eeh-kicker">CONTACT</span>
            <h2>Questions about personal data?</h2>
            <p>
              Contact European Entry Hub for privacy, business inquiry or data
              processing questions.
            </p>
          </div>

          <a href="mailto:office@eu-entryhub.com" className="eeh-button eeh-button-primary">
            office@eu-entryhub.com <ArrowRight size={18} />
          </a>
        </section>
      </div>

      <style jsx global>{`
        :root {
          --navy: #061f3b;
          --navy-dark: #041426;
          --blue: #0c4f8f;
          --ice: #eef7ff;
          --white: #ffffff;
          --muted: #5e7287;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #f4f7fa;
          color: var(--navy-dark);
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .gdpr-page {
          min-height: 100vh;
          overflow-x: hidden;
          background:
            radial-gradient(circle at 12% 8%, rgba(12, 79, 143, 0.12), transparent 28%),
            linear-gradient(180deg, #ffffff 0%, #f4f7fa 42%, #eef3f8 100%);
        }

        .eeh-navbar {
          position: fixed;
          inset: 0 0 auto;
          height: 74px;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 0 34px;
          color: #fff;
          background: rgba(3, 17, 33, 0.94);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .eeh-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #fff;
          letter-spacing: 0.04em;
        }

        .eeh-logo-main {
          font-size: 42px;
          line-height: 0.8;
          font-weight: 950;
          letter-spacing: -0.08em;
        }

        .eeh-logo-side {
          font-size: 10px;
          line-height: 1.05;
          font-weight: 900;
        }

        .eeh-nav {
          display: flex;
          align-items: center;
          gap: 38px;
          font-size: 13px;
          font-weight: 850;
        }

        .eeh-nav a {
          opacity: 0.92;
          transition: 0.2s ease;
        }

        .eeh-nav a:hover {
          opacity: 1;
          color: #bfe5ff;
          transform: translateY(-1px);
        }

        .eeh-nav-button {
          border: 2px solid rgba(255, 255, 255, 0.8);
          padding: 10px 18px;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 950;
          transition: 0.2s ease;
          white-space: nowrap;
        }

        .eeh-nav-button:hover {
          background: #fff;
          color: var(--navy);
        }

        .gdpr-hero {
          position: relative;
          min-height: 520px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(280px, 420px);
          align-items: center;
          gap: 44px;
          padding: 134px 58px 72px;
          color: #fff;
          background:
            linear-gradient(90deg, rgba(3, 20, 38, 0.94) 0%, rgba(3, 20, 38, 0.78) 48%, rgba(3, 20, 38, 0.42) 100%),
            url("/images/eeh-hero-bg.png.png") center / cover no-repeat;
          overflow: hidden;
        }

        .gdpr-grid {
          position: absolute;
          inset: 74px 0 0;
          opacity: 0.24;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: linear-gradient(90deg, #000, transparent 86%);
        }

        .gdpr-hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
        }

        .eeh-kicker {
          display: inline-flex;
          margin-bottom: 20px;
          color: #9bd4ff;
          font-size: 13px;
          font-weight: 950;
          letter-spacing: 0.2em;
        }

        .eeh-kicker.dark {
          color: var(--blue);
        }

        .gdpr-hero h1 {
          margin: 0;
          font-size: clamp(56px, 8vw, 112px);
          line-height: 0.9;
          letter-spacing: -0.07em;
          font-weight: 950;
          text-shadow: 0 12px 34px rgba(0, 0, 0, 0.24);
        }

        .gdpr-hero p {
          max-width: 680px;
          margin: 28px 0 0;
          color: rgba(255, 255, 255, 0.9);
          font-size: 20px;
          line-height: 1.45;
          font-weight: 750;
        }

        .gdpr-hero-points {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 34px;
        }

        .gdpr-hero-points span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 14px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          color: rgba(255, 255, 255, 0.86);
          font-size: 13px;
          font-weight: 850;
        }

        .gdpr-hero-card {
          position: relative;
          z-index: 2;
          min-height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 12px;
          background:
            linear-gradient(180deg, rgba(13, 45, 74, 0.92), rgba(4, 18, 32, 0.96)),
            repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.06) 0 1px, transparent 1px 70px);
          box-shadow: 0 34px 90px rgba(0, 0, 0, 0.32);
          text-align: center;
        }

        .gdpr-hero-card svg {
          color: #d9e9f7;
        }

        .gdpr-hero-card strong {
          font-size: 26px;
          font-weight: 950;
          letter-spacing: -0.04em;
        }

        .gdpr-hero-card span {
          color: rgba(255, 255, 255, 0.72);
          font-size: 13px;
          font-weight: 800;
        }

        .gdpr-intro {
          max-width: 1120px;
          margin: 0 auto;
          padding: 58px 28px 20px;
        }

        .gdpr-intro h2 {
          max-width: 760px;
          margin: 0;
          color: var(--navy);
          font-size: clamp(34px, 4vw, 56px);
          line-height: 0.98;
          font-weight: 950;
          letter-spacing: -0.055em;
        }

        .gdpr-intro p {
          max-width: 720px;
          margin: 20px 0 0;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.55;
          font-weight: 750;
        }

        .gdpr-content {
          max-width: 1120px;
          margin: 0 auto;
          padding: 32px 28px 86px;
        }

        .legal {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .legal section {
          position: relative;
          min-height: 100%;
          padding: 30px;
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid rgba(7, 31, 59, 0.08);
          box-shadow: 0 14px 34px rgba(8, 30, 55, 0.07);
          transition: 0.22s ease;
        }

        .legal section:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 44px rgba(8, 30, 55, 0.11);
        }

        .legal h2 {
          margin: 0 0 14px;
          color: var(--navy);
          font-size: 25px;
          line-height: 1.05;
          font-weight: 950;
          letter-spacing: -0.035em;
        }

        .legal h3 {
          margin: 22px 0 8px;
          color: var(--navy);
          font-size: 19px;
          letter-spacing: -0.025em;
        }

        .legal p,
        .legal li {
          color: var(--muted);
          font-size: 15px;
          line-height: 1.65;
          font-weight: 700;
        }

        .legal p {
          margin: 0 0 12px;
        }

        .legal p:last-child {
          margin-bottom: 0;
        }

        .legal ul {
          margin: 0;
          padding-left: 20px;
        }

        .legal a {
          color: var(--blue);
          font-weight: 900;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .gdpr-cta {
          margin-top: 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 26px;
          padding: 36px;
          color: #fff;
          background:
            linear-gradient(90deg, rgba(2, 15, 28, 0.95), rgba(2, 15, 28, 0.72)),
            url("/images/eeh-cta-bg.png.png") center / cover no-repeat;
        }

        .gdpr-cta h2 {
          margin: 0;
          font-size: clamp(30px, 4vw, 44px);
          line-height: 1;
          font-weight: 950;
          letter-spacing: -0.05em;
        }

        .gdpr-cta p {
          max-width: 620px;
          margin: 16px 0 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: 16px;
          line-height: 1.5;
          font-weight: 750;
        }

        .eeh-button {
          min-width: 190px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 13px 22px;
          border-radius: 4px;
          font-size: 15px;
          font-weight: 950;
          transition: 0.22s ease;
          white-space: nowrap;
        }

        .eeh-button-primary {
          background: #0c4f8f;
          border: 2px solid #8fc6ff;
          color: #fff;
          box-shadow: 0 16px 34px rgba(0, 70, 150, 0.28);
        }

        .eeh-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 44px rgba(0, 60, 120, 0.36);
        }

        @media (max-width: 980px) {
          .eeh-nav {
            display: none;
          }

          .gdpr-hero {
            grid-template-columns: 1fr;
            padding: 116px 24px 56px;
          }

          .gdpr-hero-card {
            display: none;
          }

          .legal {
            grid-template-columns: 1fr;
          }

          .gdpr-cta {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 640px) {
          .eeh-navbar {
            height: auto;
            min-height: 74px;
            padding: 14px 18px;
          }

          .eeh-logo-main {
            font-size: 36px;
          }

          .eeh-nav-button {
            padding: 9px 12px;
            font-size: 12px;
          }

          .gdpr-hero h1 {
            font-size: 58px;
          }

          .gdpr-hero p {
            font-size: 17px;
          }

          .gdpr-hero-points {
            flex-direction: column;
          }

          .gdpr-intro {
            padding: 44px 20px 10px;
          }

          .gdpr-content {
            padding: 28px 20px 70px;
          }

          .legal section {
            padding: 24px;
          }
        }
      `}</style>
    </main>
  );
}
