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
        <h1>Terms & Conditions</h1>
        <p>
          Website terms for European Entry Hub visitors, business inquiries and
          informational use of this website.
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
            <h2>1. Acceptance Of Terms</h2>
            <p>
              By accessing and using the European Entry Hub (&quot;EEH&quot;)
              website, users agree to these Terms & Conditions and all
              applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2>2. Website Purpose</h2>
            <p>
              The EEH website provides information about warehousing,
              fulfillment, logistics, inventory handling, shipping and
              operational support services for manufacturers and businesses
              operating within the European market.
            </p>
          </section>

          <section>
            <h2>3. Informational Nature Of Content</h2>
            <p>
              All content presented on this website is provided for
              informational purposes only and should not be interpreted as legal,
              financial, tax, commercial or investment advice.
            </p>
            <p>
              Information may be updated, modified or removed without prior
              notice.
            </p>
          </section>

          <section>
            <h2>4. No Contractual Relationship</h2>
            <p>
              Use of this website does not create any contractual, partnership,
              agency, employment or joint venture relationship between EEH and
              website visitors.
            </p>
            <p>
              A contractual relationship may only arise through a separately
              executed agreement between the parties.
            </p>
          </section>

          <section>
            <h2>5. User Responsibilities</h2>
            <p>Users agree to use the website in a lawful manner and shall not:</p>
            <ul>
              <li>Attempt unauthorized access to systems or data</li>
              <li>Interfere with website operation</li>
              <li>Distribute malicious software</li>
              <li>Provide false or misleading information</li>
              <li>Use the website for unlawful purposes</li>
            </ul>
          </section>

          <section>
            <h2>6. Intellectual Property</h2>
            <p>
              Unless otherwise stated, all website content including text,
              graphics, branding, design elements, logos and visual materials
              are owned by EEH or used under appropriate rights.
            </p>
            <p>
              Unauthorized copying, reproduction, distribution or commercial use
              is prohibited without written permission.
            </p>
          </section>

          <section>
            <h2>7. Third-Party Links</h2>
            <p>
              The website may contain links to third-party websites. EEH is not
              responsible for the content, accuracy, security or privacy
              practices of external websites.
            </p>
          </section>

          <section>
            <h2>8. Service Availability</h2>
            <p>
              EEH aims to maintain website availability but does not guarantee
              uninterrupted access. Maintenance, updates, technical issues or
              external factors may temporarily affect availability.
            </p>
          </section>

          <section>
            <h2>9. Limitation Of Liability</h2>
            <p>
              To the maximum extent permitted by law, EEH shall not be liable
              for direct, indirect, incidental, consequential or special damages
              arising from the use or inability to use this website.
            </p>
          </section>

          <section>
            <h2>10. Accuracy Of Information</h2>
            <p>
              While reasonable efforts are made to maintain accurate
              information, EEH does not guarantee completeness, accuracy or
              timeliness of website content.
            </p>
          </section>

          <section>
            <h2>11. Business Inquiries</h2>
            <p>
              Messages submitted through contact forms or email are treated as
              business inquiries. Sending an inquiry does not guarantee
              acceptance of cooperation or create any obligation for EEH to
              provide services.
            </p>
          </section>

          <section>
            <h2>12. Privacy And Data Protection</h2>
            <p>
              Use of the website is also governed by the{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>,{" "}
              <Link href="/cookie-policy">Cookie Policy</Link> and{" "}
              <Link href="/gdpr">GDPR</Link> information pages available on
              this website.
            </p>
          </section>

          <section>
            <h2>13. Changes To These Terms</h2>
            <p>
              EEH reserves the right to update these Terms & Conditions at any
              time. Updated versions will become effective upon publication on
              the website.
            </p>
          </section>

          <section>
            <h2>14. Governing Law</h2>
            <p>
              These Terms & Conditions shall be governed by and interpreted in
              accordance with applicable laws of the Republic of Poland and
              relevant European Union regulations.
            </p>
          </section>

          <section>
            <h2>15. Contact Information</h2>
            <p>
              Questions regarding these Terms & Conditions may be directed to:
            </p>
            <p>
              <a href="mailto:contact@europeanentryhub.com">
                contact@europeanentryhub.com
              </a>
            </p>
          </section>
        </div>

        <section className="cta">
          <h2>Transparent Business Operations.</h2>
          <p>
            European Entry Hub is committed to clear communication, transparent
            processes and professional logistics support for international
            manufacturers.
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
