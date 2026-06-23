"use client";

import Link from "next/link";

export default function Page() {
  return (
    <main className="subpage">

      <nav className="subnav">
        <Link href="/" className="logo">
          <strong>EEH</strong>
          <span>EUROPEAN<br />ENTRY HUB</span>
        </Link>
        <Link href="/#contact" className="back">Contact Us</Link>
      </nav>

      <header className="hero">
        <small>WHAT EEH HANDLES</small>
        <h1>Services</h1>
        <p>Operational logistics services for manufacturers selling across Europe.</p>
      </header>

      <div className="content">

        <div className="grid">
          <article className="card"><h2>Warehousing</h2><p>Secure storage for manufacturers who want their products available locally in Europe.</p></article>
          <article className="card"><h2>Fulfillment</h2><p>Order handling after the manufacturer receives orders through their own sales channels.</p></article>
          <article className="card"><h2>Pick & Pack</h2><p>Products are prepared, packed, labelled and handed over for shipment.</p></article>
          <article className="card"><h2>Returns Handling</h2><p>European customers can return products locally instead of sending them overseas.</p></article>
          <article className="card"><h2>Inventory Support</h2><p>Operational control for products stored in the EEH warehouse in Poland.</p></article>
          <article className="card"><h2>Shipping Across Europe</h2><p>A Polish base enables faster delivery across EU markets.</p></article>
        </div>
        <section className="cta">
          <h2>Need a local fulfillment base?</h2>
          <p>EEH is built for manufacturers that already sell in Europe and need logistics, not marketing.</p>
          <Link href="/#contact" className="button">Contact Us</Link>
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

        * { box-sizing: border-box; }

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
            radial-gradient(circle at 10% 0%, rgba(12, 79, 143, 0.10), transparent 26%),
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
          border: 2px solid rgba(255,255,255,.75);
          padding: 10px 16px;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 950;
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
          letter-spacing: .2em;
        }

        h1 {
          max-width: 980px;
          margin: 18px 0 0;
          font-size: clamp(44px, 5vw, 78px);
          line-height: .98;
          letter-spacing: -.06em;
        }

        .hero p {
          max-width: 760px;
          margin: 24px 0 0;
          color: rgba(255,255,255,.82);
          font-size: 20px;
          line-height: 1.45;
          font-weight: 700;
        }

        .content {
          max-width: 1120px;
          margin: 0 auto;
          padding: 64px 28px 86px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .card {
          padding: 30px;
          background: white;
          border: 1px solid rgba(6,31,59,.08);
          box-shadow: 0 18px 48px rgba(6,31,59,.07);
        }

        .card h2, .card h3 {
          margin: 0 0 14px;
          color: var(--navy);
          font-size: 28px;
          line-height: 1.05;
          letter-spacing: -.04em;
        }

        .card p, .card li {
          color: var(--muted);
          font-size: 16px;
          line-height: 1.6;
          font-weight: 650;
        }

        .card ul {
          margin: 0;
          padding-left: 18px;
        }

        .legal {
          display: grid;
          gap: 18px;
        }

        .legal section {
          padding: 30px;
          background: white;
          border: 1px solid rgba(6,31,59,.08);
          box-shadow: 0 18px 48px rgba(6,31,59,.06);
        }

        .legal h2 {
          margin: 0 0 12px;
          color: var(--navy);
          font-size: 26px;
          letter-spacing: -.035em;
        }

        .legal p, .legal li {
          color: var(--muted);
          font-size: 16px;
          line-height: 1.65;
          font-weight: 650;
        }

        .legal ul {
          margin: 0;
          padding-left: 20px;
        }

        .cta {
          margin-top: 28px;
          padding: 34px;
          color: white;
          background:
            linear-gradient(90deg, rgba(2,15,28,.95), rgba(2,15,28,.72)),
            url("/images/eeh-cta-bg.png.png") center / cover no-repeat;
        }

        .cta h2 {
          margin: 0;
          font-size: 34px;
          letter-spacing: -.045em;
        }

        .cta p {
          max-width: 680px;
          color: rgba(255,255,255,.78);
        }

        .button {
          display: inline-flex;
          margin-top: 14px;
          padding: 13px 20px;
          background: #0c4f8f;
          border: 2px solid #8fc6ff;
          color: white;
          font-weight: 950;
          border-radius: 4px;
        }

        @media (max-width: 800px) {
          .subnav { padding: 16px 20px; gap: 16px; }
          .hero { padding: 58px 22px 42px; }
          .content { padding: 42px 20px 70px; }
          .grid { grid-template-columns: 1fr; }
          h1 { font-size: 42px; }
        }
      `}</style>

    </main>
  );
}
