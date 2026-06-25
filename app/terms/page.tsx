"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText } from "lucide-react";

export default function Page() {
  return (
    <main className="terms-page">
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

      <section className="terms-hero">
        <div className="terms-grid" />

        <div className="terms-hero-content">
          <span className="eeh-kicker">LEGAL TERMS</span>
          <h1>Terms &amp; Conditions</h1>
          <p>
            Website terms for European Entry Hub visitors, business inquiries and
            informational use of this website.
          </p>

          <div className="terms-hero-points">
            <span>
              <CheckCircle2 size={18} />
              Clear website rules
            </span>
            <span>
              <CheckCircle2 size={18} />
              Business inquiry terms
            </span>
            <span>
              <CheckCircle2 size={18} />
              Transparent legal notice
            </span>
          </div>
        </div>

        <div className="terms-hero-card" aria-hidden="true">
          <FileText size={86} strokeWidth={1.35} />
          <strong>LEGAL NOTICE</strong>
          <span>European Entry Hub</span>
        </div>
      </section>

      <section className="terms-intro">
        <span className="eeh-kicker dark">WEBSITE TERMS</span>
        <h2>Clear terms for visitors and business communication.</h2>
        <p>
          These Terms &amp; Conditions explain the rules for using the EEH website,
          submitting inquiries and reading business information presented online.
        </p>
      </section>

      <div className="terms-content">
        <div className="legal">
          <section>
            <h2>1. Acceptance Of Terms</h2>
            <p>
              By accessing and using the European Entry Hub (&quot;EEH&quot;)
              website, users agree to these Terms &amp; Conditions and all
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
              EEH reserves the right to update these Terms &amp; Conditions at any
              time. Updated versions will become effective upon publication on
              the website.
            </p>
          </section>

          <section>
            <h2>14. Governing Law</h2>
            <p>
              These Terms &amp; Conditions shall be governed by and interpreted in
              accordance with applicable laws of the Republic of Poland and
              relevant European Union regulations.
            </p>
          </section>

          <section>
            <h2>15. Contact Information</h2>
            <p>
              Questions regarding these Terms &amp; Conditions may be directed to:
            </p>
            <p>
              <a href="mailto:office@eu-entryhub.com">
                office@eu-entryhub.com
              </a>
            </p>
          </section>
        </div>

        <section className="terms-cta">
          <div>
            <span className="eeh-kicker">CONTACT</span>
            <h2>Questions about these terms?</h2>
            <p>
              Contact European Entry Hub for website terms, business inquiries
              or cooperation details.
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

        .terms-page {
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

        .terms-hero {
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

        .terms-grid {
          position: absolute;
          inset: 74px 0 0;
          opacity: 0.24;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: linear-gradient(90deg, #000, transparent 86%);
        }

        .terms-hero-content {
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

        .terms-hero h1 {
          margin: 0;
          font-size: clamp(48px, 7vw, 98px);
          line-height: 0.9;
          letter-spacing: -0.07em;
          font-weight: 950;
          text-shadow: 0 12px 34px rgba(0, 0, 0, 0.24);
        }

        .terms-hero p {
          max-width: 680px;
          margin: 28px 0 0;
          color: rgba(255, 255, 255, 0.9);
          font-size: 20px;
          line-height: 1.45;
          font-weight: 750;
        }

        .terms-hero-points {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 34px;
        }

        .terms-hero-points span {
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

        .terms-hero-card {
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

        .terms-hero-card svg {
          color: #d9e9f7;
        }

        .terms-hero-card strong {
          font-size: 26px;
          font-weight: 950;
          letter-spacing: -0.04em;
        }

        .terms-hero-card span {
          color: rgba(255, 255, 255, 0.72);
          font-size: 13px;
          font-weight: 800;
        }

        .terms-intro {
          max-width: 1120px;
          margin: 0 auto;
          padding: 58px 28px 20px;
        }

        .terms-intro h2 {
          max-width: 760px;
          margin: 0;
          color: var(--navy);
          font-size: clamp(34px, 4vw, 56px);
          line-height: 0.98;
          font-weight: 950;
          letter-spacing: -0.055em;
        }

        .terms-intro p {
          max-width: 720px;
          margin: 20px 0 0;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.55;
          font-weight: 750;
        }

        .terms-content {
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

        .terms-cta {
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

        .terms-cta h2 {
          margin: 0;
          font-size: clamp(30px, 4vw, 44px);
          line-height: 1;
          font-weight: 950;
          letter-spacing: -0.05em;
        }

        .terms-cta p {
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

          .terms-hero {
            grid-template-columns: 1fr;
            padding: 116px 24px 56px;
          }

          .terms-hero-card {
            display: none;
          }

          .legal {
            grid-template-columns: 1fr;
          }

          .terms-cta {
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

          .terms-hero h1 {
            font-size: 48px;
          }

          .terms-hero p {
            font-size: 17px;
          }

          .terms-hero-points {
            flex-direction: column;
          }

          .terms-intro {
            padding: 44px 20px 10px;
          }

          .terms-content {
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
