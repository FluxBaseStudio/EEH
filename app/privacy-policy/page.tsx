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
        <small>LEGAL</small>
        <h1>Privacy Policy</h1>
        <p>
          Information about how European Entry Hub may collect, use, store and
          protect information submitted through this website.
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
              <a href="mailto:contact@europeanentryhub.com">
                contact@europeanentryhub.com
              </a>
            </p>
          </section>
        </div>

        <section className="cta">
          <h2>Your Privacy Matters.</h2>
          <p>
            European Entry Hub is committed to transparent, responsible and
            secure handling of information provided through this website.
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
