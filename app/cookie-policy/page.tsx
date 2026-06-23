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
        <h1>Cookie Policy</h1>
        <p>
          Information about how European Entry Hub may use cookies and similar
          technologies on this website.
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
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on a visitor&apos;s device
              when using the European Entry Hub website. They help websites
              function correctly, improve security, remember preferences and
              support performance analysis.
            </p>
          </section>

          <section>
            <h2>2. Types Of Cookies We May Use</h2>

            <h3>Necessary Cookies</h3>
            <p>
              Necessary cookies are required for the website to function
              correctly. They may support page navigation, security, basic
              functionality, form protection and cookie consent storage.
            </p>

            <h3>Analytics Cookies</h3>
            <p>
              Analytics cookies may be used to understand how visitors interact
              with the website, which pages are viewed most often and how the
              website can be improved. These cookies should only be enabled
              after the final analytics provider and consent rules are confirmed.
            </p>

            <h3>Performance Cookies</h3>
            <p>
              Performance cookies may help measure loading speed, technical
              stability and general website usability.
            </p>

            <h3>Marketing Cookies</h3>
            <p>
              Marketing cookies are not required for the basic operation of the
              website. They may be used in the future to measure campaign
              performance or understand traffic sources, only if such tools are
              added and properly disclosed.
            </p>
          </section>

          <section>
            <h2>3. Essential Cookies</h2>
            <p>
              Essential cookies may always remain active because they are needed
              to keep the website stable, secure and usable. These cookies do
              not require separate consent when they are strictly necessary for
              website operation.
            </p>
          </section>

          <section>
            <h2>4. Optional Cookies</h2>
            <p>
              Optional cookies, such as analytics or marketing cookies, should
              only be used when the visitor has given consent through the cookie
              banner or another consent mechanism available on the website.
            </p>
          </section>

          <section>
            <h2>5. Cookie Consent</h2>
            <p>
              The website may display a cookie banner allowing visitors to
              accept or reject optional cookies. The selected preference may be
              stored locally so the banner does not appear on every visit.
            </p>
          </section>

          <section>
            <h2>6. Third-Party Services</h2>
            <p>
              The website may use third-party services such as Google Search
              Console, Google Analytics, Microsoft Clarity, hosting providers,
              security tools or other analytics and performance services. These
              providers may process cookies or similar technologies according to
              their own privacy and cookie policies.
            </p>
          </section>

          <section>
            <h2>7. Managing Cookies</h2>
            <p>
              Visitors can control, block or delete cookies through their browser
              settings. Disabling some cookies may affect website functionality,
              form operation or user experience.
            </p>
          </section>

          <section>
            <h2>8. Data Security</h2>
            <p>
              Cookies used by European Entry Hub are not intended to collect
              sensitive personal information. Their purpose is to support website
              operation, security, performance and user experience.
            </p>
          </section>

          <section>
            <h2>9. Changes To This Cookie Policy</h2>
            <p>
              European Entry Hub may update this Cookie Policy when the website,
              technology stack, analytics tools or legal requirements change.
              Updated versions will be published on this page.
            </p>
          </section>

          <section>
            <h2>10. Contact</h2>
            <p>
              For questions regarding this Cookie Policy, contact European Entry
              Hub at:
            </p>
            <p>
              <a href="mailto:contact@europeanentryhub.com">
                contact@europeanentryhub.com
              </a>
            </p>
          </section>
        </div>

        <section className="cta">
          <h2>Return to European Entry Hub.</h2>
          <p>
            Go back to the main website to learn more about warehousing,
            fulfillment and logistics support in Central Poland.
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
