"use client";

import Link from "next/link";
import { CheckCircle2, Cookie, Settings2 } from "lucide-react";

export default function Page() {
  return (
    <main className="cookie-page">
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

      <section className="cookie-hero">
        <div className="cookie-grid" />

        <div className="cookie-hero-content">
          <span className="eeh-kicker">LEGAL</span>
          <h1>Cookie Policy</h1>
          <p>
            Information about how European Entry Hub may use cookies and similar
            technologies on this website.
          </p>

          <div className="cookie-hero-points">
            <span>
              <CheckCircle2 size={18} />
              Essential cookies
            </span>
            <span>
              <CheckCircle2 size={18} />
              Consent-based analytics
            </span>
            <span>
              <CheckCircle2 size={18} />
              Clear cookie control
            </span>
          </div>
        </div>

        <div className="cookie-hero-card" aria-hidden="true">
          <Cookie size={86} strokeWidth={1.35} />
          <strong>COOKIE CONTROL</strong>
          <span>European Entry Hub</span>
        </div>
      </section>

      <section className="cookie-intro">
        <span className="eeh-kicker dark">COOKIE NOTICE</span>
        <h2>Cookies. Clear, minimal and controlled.</h2>
        <p>
          This Cookie Policy explains what cookies may be used, why they matter
          and how visitors can manage cookie preferences on the EEH website.
        </p>
      </section>

      <div className="cookie-content">
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
              <a href="mailto:office@eu-entryhub.com">
                office@eu-entryhub.com
              </a>
            </p>
          </section>
        
        </div>

        <section className="cookie-cta">
          <div>
            <span className="eeh-kicker">CONTACT</span>
            <h2>Questions about cookies?</h2>
            <p>
              Contact European Entry Hub for cookie policy, privacy or website
              technology questions.
            </p>
          </div>

          <a href="mailto:office@eu-entryhub.com" className="eeh-button eeh-button-primary">
            office@eu-entryhub.com <Settings2 size={18} />
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

        .cookie-page {
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

        .cookie-hero {
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

        .cookie-grid {
          position: absolute;
          inset: 74px 0 0;
          opacity: 0.24;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: linear-gradient(90deg, #000, transparent 86%);
        }

        .cookie-hero-content {
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

        .cookie-hero h1 {
          margin: 0;
          font-size: clamp(56px, 8vw, 112px);
          line-height: 0.9;
          letter-spacing: -0.07em;
          font-weight: 950;
          text-shadow: 0 12px 34px rgba(0, 0, 0, 0.24);
        }

        .cookie-hero p {
          max-width: 680px;
          margin: 28px 0 0;
          color: rgba(255, 255, 255, 0.9);
          font-size: 20px;
          line-height: 1.45;
          font-weight: 750;
        }

        .cookie-hero-points {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 34px;
        }

        .cookie-hero-points span {
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

        .cookie-hero-card {
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

        .cookie-hero-card svg {
          color: #d9e9f7;
        }

        .cookie-hero-card strong {
          font-size: 26px;
          font-weight: 950;
          letter-spacing: -0.04em;
        }

        .cookie-hero-card span {
          color: rgba(255, 255, 255, 0.72);
          font-size: 13px;
          font-weight: 800;
        }

        .cookie-intro {
          max-width: 1120px;
          margin: 0 auto;
          padding: 58px 28px 20px;
        }

        .cookie-intro h2 {
          max-width: 760px;
          margin: 0;
          color: var(--navy);
          font-size: clamp(34px, 4vw, 56px);
          line-height: 0.98;
          font-weight: 950;
          letter-spacing: -0.055em;
        }

        .cookie-intro p {
          max-width: 720px;
          margin: 20px 0 0;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.55;
          font-weight: 750;
        }

        .cookie-content {
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

        .cookie-cta {
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

        .cookie-cta h2 {
          margin: 0;
          font-size: clamp(30px, 4vw, 44px);
          line-height: 1;
          font-weight: 950;
          letter-spacing: -0.05em;
        }

        .cookie-cta p {
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

          .cookie-hero {
            grid-template-columns: 1fr;
            padding: 116px 24px 56px;
          }

          .cookie-hero-card {
            display: none;
          }

          .legal {
            grid-template-columns: 1fr;
          }

          .cookie-cta {
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

          .cookie-hero h1 {
            font-size: 58px;
          }

          .cookie-hero p {
            font-size: 17px;
          }

          .cookie-hero-points {
            flex-direction: column;
          }

          .cookie-intro {
            padding: 44px 20px 10px;
          }

          .cookie-content {
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
