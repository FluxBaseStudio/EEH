"use client";

import Link from "next/link";

export default function Page() {
  return (
    <main className="subpage">
      <nav className="subnav">
        <Link href="/" className="logo">
          <strong>EEH</strong>
          <span>
            EUROPEAN
            <br />
            ENTRY HUB
          </span>
        </Link>
        <Link href="/" className="back">
          Back To Homepage
        </Link>
      </nav>

      <header className="hero">
        <small>DATA PROTECTION</small>
        <h1>GDPR</h1>
        <p>
          Information about how European Entry Hub may process personal data in
          accordance with GDPR and applicable data protection rules.
        </p>
      </header>

      <div className="content">
        <div className="page-actions">
          <Link href="/" className="button">
            ← Back To Homepage
          </Link>
        </div>

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
              <a href="mailto:contact@europeanentryhub.com">
                contact@europeanentryhub.com
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
              <a href="mailto:contact@europeanentryhub.com">
                contact@europeanentryhub.com
              </a>
            </p>
          </section>
        </div>

        <section className="cta">
          <h2>Your Data. Protected.</h2>
          <p>
            European Entry Hub is committed to handling business inquiries and
            personal information responsibly, securely and transparently.
          </p>

          <Link href="/" className="button">
            Back To Homepage
          </Link>
        </section>
      </div>

      <style jsx global>{`
        :root {
          --navy: #061f3b;
          --dark: #041426;
          --blue: #0c4f8f;
          --muted: #607286;
          --bg: #f4f7fa;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: var(--bg);
          color: var(--dark);
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .subpage {
          min-height: 100vh;
          background:
            radial-gradient(circle at 10% 0%, rgba(12, 79, 143, 0.1), transparent 26%),
            linear-gradient(180deg, #ffffff 0%, #f4f7fa 100%);
        }

        .subnav {
          min-height: 74px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 34px;
          background: #031121;
          color: white;
        }

        .logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 950;
        }

        .logo strong {
          font-size: 42px;
          line-height: 0.8;
          letter-spacing: -0.08em;
        }

        .logo span {
          font-size: 10px;
          line-height: 1.05;
          letter-spacing: 0.04em;
        }

        .back {
          border: 2px solid rgba(255, 255, 255, 0.75);
          padding: 10px 16px;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 950;
          transition: 0.2s ease;
        }

        .back:hover {
          background: white;
          color: var(--navy);
          transform: translateY(-2px);
        }

        .hero {
          padding: 86px 72px 54px;
          color: white;
          background:
            linear-gradient(90deg, rgba(3, 20, 38, 0.94), rgba(3, 20, 38, 0.72)),
            url("/images/eeh-hero-bg.png.png") center / cover no-repeat;
        }

        .hero small {
          color: #9bd4ff;
          font-size: 13px;
          font-weight: 950;
          letter-spacing: 0.2em;
        }

        h1 {
          max-width: 980px;
          margin: 18px 0 0;
          font-size: clamp(44px, 5vw, 78px);
          line-height: 0.98;
          letter-spacing: -0.06em;
        }

        .hero p {
          max-width: 760px;
          margin: 24px 0 0;
          color: rgba(255, 255, 255, 0.82);
          font-size: 20px;
          line-height: 1.45;
          font-weight: 700;
        }

        .content {
          max-width: 1120px;
          margin: 0 auto;
          padding: 64px 28px 86px;
        }

        .page-actions {
          margin-bottom: 28px;
        }

        .legal {
          display: grid;
          gap: 18px;
        }

        .legal section {
          padding: 30px;
          background: white;
          border: 1px solid rgba(6, 31, 59, 0.08);
          box-shadow: 0 18px 48px rgba(6, 31, 59, 0.06);
        }

        .legal h2 {
          margin: 0 0 12px;
          color: var(--navy);
          font-size: 26px;
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
          font-size: 16px;
          line-height: 1.65;
          font-weight: 650;
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

        .cta {
          margin-top: 28px;
          padding: 34px;
          color: white;
          background:
            linear-gradient(90deg, rgba(2, 15, 28, 0.95), rgba(2, 15, 28, 0.72)),
            url("/images/eeh-cta-bg.png.png") center / cover no-repeat;
        }

        .cta h2 {
          margin: 0;
          font-size: 34px;
          letter-spacing: -0.045em;
        }

        .cta p {
          max-width: 680px;
          color: rgba(255, 255, 255, 0.78);
        }

        .button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 14px;
          padding: 13px 20px;
          background: #0c4f8f;
          border: 2px solid #8fc6ff;
          color: white;
          font-weight: 950;
          border-radius: 4px;
          transition: 0.2s ease;
        }

        .button:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 38px rgba(12, 79, 143, 0.22);
        }

        @media (max-width: 800px) {
          .subnav {
            padding: 16px 20px;
            gap: 16px;
          }

          .hero {
            padding: 58px 22px 42px;
          }

          .content {
            padding: 42px 20px 70px;
          }

          h1 {
            font-size: 42px;
          }

          .legal section {
            padding: 24px;
          }
        }
      `}</style>
    </main>
  );
}
