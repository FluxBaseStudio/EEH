"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export default function Page() {
  return (
    <main className="privacy-page">
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

      <section className="privacy-hero">
        <div className="privacy-grid" />

        <div className="privacy-hero-content">
          <span className="eeh-kicker">LEGAL NOTICE</span>
          <h1>Privacy Policy</h1>
          <p>
            Information about how European Entry Hub may collect, use, store and
            protect information submitted through this website.
          </p>

          <div className="privacy-hero-points">
            <span>
              <CheckCircle2 size={18} />
              Responsible data use
            </span>
            <span>
              <CheckCircle2 size={18} />
              Secure communication
            </span>
            <span>
              <CheckCircle2 size={18} />
              Clear privacy rules
            </span>
          </div>
        </div>

        <div className="privacy-hero-card" aria-hidden="true">
          <ShieldCheck size={86} strokeWidth={1.35} />
          <strong>PRIVACY</strong>
          <span>European Entry Hub</span>
        </div>
      </section>

      <section className="privacy-intro">
        <span className="eeh-kicker dark">PRIVACY POLICY</span>
        <h2>Your information. Handled clearly and responsibly.</h2>
        <p>
          This Privacy Policy explains what information may be collected, how it
          may be used and how EEH protects communication submitted through the
          website.
        </p>
      </section>

      <div className="privacy-content">
        <div className="legal">
          <section>
            <h2>1. Introduction</h2>
            <p>
              European Entry Hub (&quot;EEH&quot;) respects the privacy of all
              website visitors, business partners and potential clients. This
              Privacy Policy explains how information may be collected, used,
              stored and protected when using the EEH website.
            </p>
          </section>

          <section>
            <h2>2. Website Purpose</h2>
            <p>
              The website presents warehousing, fulfillment, logistics and
              operational support services for international manufacturers
              entering or operating within the European market.
            </p>
          </section>

          <section>
            <h2>3. Information We May Collect</h2>
            <p>
              Depending on how visitors interact with the website, EEH may
              collect:
            </p>
            <ul>
              <li>Full name</li>
              <li>Company name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Message content submitted through website forms</li>
              <li>Technical website usage data</li>
              <li>Analytics information, if analytics tools are enabled</li>
            </ul>
          </section>

          <section>
            <h2>4. How Information Is Used</h2>
            <p>Information may be used to:</p>
            <ul>
              <li>Respond to inquiries</li>
              <li>Prepare business proposals</li>
              <li>Provide logistics and fulfillment information</li>
              <li>Maintain communication with potential clients</li>
              <li>Improve website functionality and performance</li>
              <li>Protect the website from misuse or technical abuse</li>
              <li>Meet legal or administrative obligations</li>
            </ul>
          </section>

          <section>
            <h2>5. Contact Forms</h2>
            <p>
              Information submitted through contact forms is used to respond to
              inquiries, evaluate cooperation opportunities and maintain business
              communication.
            </p>
            <p>
              Website forms should not be used to submit sensitive personal
              information, confidential trade secrets or unnecessary private
              data.
            </p>
          </section>

          <section>
            <h2>6. Legal Basis For Processing</h2>
            <p>
              Personal data may be processed based on legitimate business
              interest, consent, contractual necessity or legal obligation,
              depending on the purpose and context of the interaction.
            </p>
          </section>

          <section>
            <h2>7. Data Storage And Security</h2>
            <p>
              EEH applies reasonable technical and organizational measures
              designed to protect information against unauthorized access,
              accidental loss, misuse, alteration or disclosure.
            </p>
          </section>

          <section>
            <h2>8. Third-Party Services</h2>
            <p>
              The website may use third-party providers including hosting
              companies, email delivery services, analytics platforms,
              cybersecurity tools and website performance monitoring solutions.
            </p>
            <p>
              These providers may process information according to their own
              privacy policies and applicable data protection rules.
            </p>
          </section>

          <section>
            <h2>9. Cookies And Similar Technologies</h2>
            <p>
              The website may use cookies and similar technologies to improve
              functionality, security, user experience and website performance.
            </p>
            <p>
              Additional details are available in the{" "}
              <Link href="/cookie-policy">Cookie Policy</Link>.
            </p>
          </section>

          <section>
            <h2>10. Data Retention</h2>
            <p>
              Information is retained only for as long as necessary to fulfill
              business, operational, administrative or legal purposes.
            </p>
          </section>

          <section>
            <h2>11. International Data Transfers</h2>
            <p>
              If services located outside the European Economic Area are used,
              appropriate safeguards should be applied to protect personal data
              according to applicable data protection requirements.
            </p>
          </section>

          <section>
            <h2>12. User Rights</h2>
            <p>Depending on applicable laws, users may have the right to:</p>
            <ul>
              <li>Access information about their personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of personal data</li>
              <li>Request restriction of processing</li>
              <li>Object to processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Submit a complaint to a supervisory authority</li>
            </ul>
          </section>

          <section>
            <h2>13. Children&apos;s Privacy</h2>
            <p>
              The EEH website is intended for business users and is not directed
              to children. EEH does not intentionally collect personal
              information from children.
            </p>
          </section>

          <section>
            <h2>14. Policy Updates</h2>
            <p>
              EEH may update this Privacy Policy when business operations,
              technology, website features or legal requirements change. Updated
              versions will be published on this page.
            </p>
          </section>

          <section>
            <h2>15. Contact</h2>
            <p>Questions regarding privacy matters may be directed to:</p>
            <p>
              <a href="mailto:office@eu-entryhub.com">
                office@eu-entryhub.com
              </a>
            </p>
          </section>
        </div>

        <section className="privacy-cta">
          <div>
            <span className="eeh-kicker">CONTACT</span>
            <h2>Questions about privacy?</h2>
            <p>
              Contact European Entry Hub for privacy, business inquiry or data
              protection questions.
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

        .privacy-page {
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

        .privacy-hero {
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

        .privacy-grid {
          position: absolute;
          inset: 74px 0 0;
          opacity: 0.24;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: linear-gradient(90deg, #000, transparent 86%);
        }

        .privacy-hero-content {
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

        .privacy-hero h1 {
          margin: 0;
          font-size: clamp(48px, 7vw, 104px);
          line-height: 0.9;
          letter-spacing: -0.07em;
          font-weight: 950;
          text-shadow: 0 12px 34px rgba(0, 0, 0, 0.24);
        }

        .privacy-hero p {
          max-width: 680px;
          margin: 28px 0 0;
          color: rgba(255, 255, 255, 0.9);
          font-size: 20px;
          line-height: 1.45;
          font-weight: 750;
        }

        .privacy-hero-points {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 34px;
        }

        .privacy-hero-points span {
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

        .privacy-hero-card {
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

        .privacy-hero-card svg {
          color: #d9e9f7;
        }

        .privacy-hero-card strong {
          font-size: 26px;
          font-weight: 950;
          letter-spacing: -0.04em;
        }

        .privacy-hero-card span {
          color: rgba(255, 255, 255, 0.72);
          font-size: 13px;
          font-weight: 800;
        }

        .privacy-intro {
          max-width: 1120px;
          margin: 0 auto;
          padding: 58px 28px 20px;
        }

        .privacy-intro h2 {
          max-width: 760px;
          margin: 0;
          color: var(--navy);
          font-size: clamp(34px, 4vw, 56px);
          line-height: 0.98;
          font-weight: 950;
          letter-spacing: -0.055em;
        }

        .privacy-intro p {
          max-width: 720px;
          margin: 20px 0 0;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.55;
          font-weight: 750;
        }

        .privacy-content {
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

        .privacy-cta {
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

        .privacy-cta h2 {
          margin: 0;
          font-size: clamp(30px, 4vw, 44px);
          line-height: 1;
          font-weight: 950;
          letter-spacing: -0.05em;
        }

        .privacy-cta p {
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

          .privacy-hero {
            grid-template-columns: 1fr;
            padding: 116px 24px 56px;
          }

          .privacy-hero-card {
            display: none;
          }

          .legal {
            grid-template-columns: 1fr;
          }

          .privacy-cta {
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

          .privacy-hero h1 {
            font-size: 52px;
          }

          .privacy-hero p {
            font-size: 17px;
          }

          .privacy-hero-points {
            flex-direction: column;
          }

          .privacy-intro {
            padding: 44px 20px 10px;
          }

          .privacy-content {
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
