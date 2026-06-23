"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, X } from "lucide-react";

const CONSENT_KEY = "eeh-cookie-consent";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem(CONSENT_KEY);

    if (!savedConsent) {
      const timer = window.setTimeout(() => setIsVisible(true), 700);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const saveConsent = (value: "accepted" | "rejected") => {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({
        value,
        date: new Date().toISOString(),
      })
    );

    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookieOverlay" role="dialog" aria-modal="true" aria-labelledby="cookieTitle">
      <div className="cookieBackdrop" onClick={() => saveConsent("rejected")} />

      <section className="cookieModal">
        <button
          type="button"
          className="cookieClose"
          aria-label="Close cookie notice"
          onClick={() => saveConsent("rejected")}
        >
          <X size={18} />
        </button>

        <div className="cookieIcon">
          <Cookie size={30} />
        </div>

        <span className="cookieEyebrow">
          Privacy preferences
        </span>

        <h2 id="cookieTitle">Cookies & website data</h2>

        <p>
          We use essential cookies to keep this website stable and secure.
          Optional analytics may be added later to improve the website experience.
          You can accept or reject optional cookies now.
        </p>

        <div className="cookieInfo">
          <div>
            <ShieldCheck size={18} />
            <span>Essential cookies are always active.</span>
          </div>

          <div>
            <Cookie size={18} />
            <span>No advertising tracking is enabled at this stage.</span>
          </div>
        </div>

        <div className="cookieActions">
          <button type="button" className="cookieReject" onClick={() => saveConsent("rejected")}>
            Reject optional
          </button>

          <button type="button" className="cookieAccept" onClick={() => saveConsent("accepted")}>
            Accept cookies
          </button>
        </div>

        <p className="cookieLegal">
          Read more in our <Link href="/cookie-policy">Cookie Policy</Link> and{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
      </section>

      <style jsx global>{`
        .cookieOverlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: grid;
          place-items: center;
          padding: 22px;
        }

        .cookieBackdrop {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 50% 20%, rgba(155, 212, 255, 0.16), transparent 30%),
            rgba(2, 9, 16, 0.68);
          backdrop-filter: blur(12px);
        }

        .cookieModal {
          position: relative;
          width: min(620px, 100%);
          padding: 34px;
          color: #ffffff;
          border-radius: 26px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background:
            linear-gradient(135deg, rgba(4, 20, 38, 0.96), rgba(8, 44, 81, 0.93)),
            radial-gradient(circle at 20% 0%, rgba(155, 212, 255, 0.20), transparent 32%);
          box-shadow: 0 40px 110px rgba(0, 0, 0, 0.42);
          overflow: hidden;
          animation: cookieEnter 0.34s ease both;
        }

        .cookieModal::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(rgba(255, 255, 255, 0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.055) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(180deg, #000, transparent 72%);
        }

        .cookieModal > * {
          position: relative;
          z-index: 1;
        }

        .cookieClose {
          position: absolute;
          top: 18px;
          right: 18px;
          z-index: 2;
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 999px;
          color: rgba(255, 255, 255, 0.78);
          background: rgba(255, 255, 255, 0.08);
          cursor: pointer;
          transition: 0.2s ease;
        }

        .cookieClose:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.14);
          transform: rotate(5deg);
        }

        .cookieIcon {
          width: 62px;
          height: 62px;
          display: grid;
          place-items: center;
          margin-bottom: 22px;
          border-radius: 18px;
          color: #041426;
          background: linear-gradient(135deg, #ffffff, #9bd4ff);
          box-shadow: 0 18px 40px rgba(155, 212, 255, 0.22);
        }

        .cookieEyebrow {
          display: inline-flex;
          margin-bottom: 12px;
          color: #9bd4ff;
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .cookieModal h2 {
          margin: 0;
          max-width: 480px;
          font-size: clamp(34px, 5vw, 52px);
          line-height: 0.96;
          letter-spacing: -0.055em;
          font-weight: 950;
        }

        .cookieModal p {
          margin: 18px 0 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: 16px;
          line-height: 1.55;
          font-weight: 650;
        }

        .cookieInfo {
          display: grid;
          gap: 10px;
          margin-top: 24px;
        }

        .cookieInfo div {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 13px 14px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.065);
          color: rgba(255, 255, 255, 0.82);
          font-size: 13px;
          font-weight: 820;
        }

        .cookieInfo svg {
          color: #9bd4ff;
          flex: 0 0 auto;
        }

        .cookieActions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 28px;
        }

        .cookieActions button {
          height: 54px;
          border-radius: 15px;
          font-size: 15px;
          font-weight: 950;
          cursor: pointer;
          transition: 0.22s ease;
        }

        .cookieReject {
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.28);
          background: rgba(255, 255, 255, 0.08);
        }

        .cookieAccept {
          color: #041426;
          border: 0;
          background: linear-gradient(135deg, #ffffff, #9bd4ff);
          box-shadow: 0 18px 40px rgba(155, 212, 255, 0.22);
        }

        .cookieActions button:hover {
          transform: translateY(-3px);
        }

        .cookieLegal {
          margin-top: 18px !important;
          font-size: 12px !important;
          color: rgba(255, 255, 255, 0.54) !important;
        }

        .cookieLegal a {
          color: #9bd4ff;
          font-weight: 900;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        @keyframes cookieEnter {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 620px) {
          .cookieOverlay {
            align-items: end;
            padding: 14px;
          }

          .cookieModal {
            padding: 26px 20px 22px;
            border-radius: 22px;
          }

          .cookieActions {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
