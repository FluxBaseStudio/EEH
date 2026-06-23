"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Building2,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Globe2,
  Headphones,
  Mail,
  Menu,
  MapPin,
  PackageCheck,
  PackageOpen,
  Phone,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Warehouse,
  X,
} from "lucide-react";

const contactEmail = "office@eu-entryhub.com";
const contactPhone = "+48 609 929 042";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const processSteps = [
  { number: "1", icon: Boxes, title: "Send inventory", text: "to EEH Poland" },
  { number: "2", icon: Warehouse, title: "We store", text: "your products" },
  { number: "3", icon: ShoppingCart, title: "You receive", text: "customer orders" },
  { number: "4", icon: PackageCheck, title: "EEH picks,", text: "packs and ships" },
  { number: "5", icon: Truck, title: "Customer receives", text: "delivery in 2–3 days" },
];

const services = [
  { icon: Warehouse, title: "Warehousing", text: "Secure local stock storage in Central Poland." },
  { icon: PackageOpen, title: "Fulfillment", text: "Order processing from your existing sales channels." },
  { icon: ClipboardList, title: "Inventory Management", text: "Clear stock control and operational visibility." },
  { icon: PackageCheck, title: "Pick & Pack", text: "Prepared, packed and labelled for shipment." },
  { icon: Truck, title: "Shipping", text: "Fast delivery routes across the European Union." },
  { icon: Boxes, title: "Returns Handling", text: "Local returns support for European customers." },
  { icon: Headphones, title: "Operational Support", text: "A practical logistics partner on the ground." },
  { icon: Globe2, title: "Distribution Across Europe", text: "One Polish base serving multiple EU markets." },
];

const advantages = [
  {
    icon: MapPin,
    title: "Strategic Location",
    text: "Central Poland, close to key European transport corridors.",
  },
  {
    icon: Clock3,
    title: "Fast Delivery",
    text: "2–3 day delivery instead of long international shipping times.",
  },
  {
    icon: Boxes,
    title: "Cost Efficient",
    text: "Store in Europe once and reduce repeated cross-border shipping.",
  },
  {
    icon: Globe2,
    title: "Flexible & Scalable",
    text: "Start with practical storage and grow operations step by step.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Operations",
    text: "Warehousing, packing and returns handled with clear processes.",
  },
  {
    icon: Headphones,
    title: "Professional Support",
    text: "Operational help for manufacturers entering the European market.",
  },
];

const metrics = [
  { value: "900 m²", label: "high-storage warehouse" },
  { value: "300 m²", label: "office and operations space" },
  { value: "2–3 days", label: "typical EU delivery time" },
];

const trustPoints = [
  "No marketplace dependency",
  "No marketing or sales takeover",
  "Manufacturer keeps brand control",
  "EEH handles the operational layer",
];

const faqItems = [
  {
    question: "Does EEH sell products for manufacturers?",
    answer:
      "No. The manufacturer remains responsible for sales, marketing, product development and customer acquisition. EEH handles warehousing, fulfillment, shipping and returns.",
  },
  {
    question: "Who is EEH designed for?",
    answer:
      "EEH is designed for manufacturers from China, Taiwan, Korea and other international markets that already sell in Europe and need a local operational base.",
  },
  {
    question: "Where is the warehouse located?",
    answer:
      "The operational base is located in Central Poland, in the Łódź region, with strong access to European transport routes.",
  },
];


export default function HomePage() {
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      setSent(true);
      form.reset();

      window.setTimeout(() => {
        setSent(false);
      }, 3200);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="eeh-page">
      <motion.header
        className="eeh-navbar"
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <Link href="/" className="eeh-logo" aria-label="European Entry Hub home">
          <span className="eeh-logo-main">EEH</span>
          <span className="eeh-logo-side">
            EUROPEAN
            <br />
            ENTRY HUB
          </span>
        </Link>

        <nav className="eeh-nav">
          <Link href="/">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#why">Why EEH</Link>
          <Link href="#location">Location</Link>
          <Link href="#about">About Us</Link>
          <Link href="#contact">Contact</Link>
          <Link href="/quote">Free Quote</Link>
        </nav>

        <Link href="/quote" className="eeh-nav-button">
          Free Quote
        </Link>

        <button
          type="button"
          className="eeh-menu-button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <motion.nav
          className={menuOpen ? "eeh-mobile-menu open" : "eeh-mobile-menu"}
          initial={false}
          animate={menuOpen ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: -12, pointerEvents: "none" }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="#services" onClick={closeMenu}>Services</Link>
          <Link href="#why" onClick={closeMenu}>Why EEH</Link>
          <Link href="#location" onClick={closeMenu}>Location</Link>
          <Link href="#about" onClick={closeMenu}>About Us</Link>
          <Link href="#contact" onClick={closeMenu}>Contact</Link>
          <Link href="/quote" onClick={closeMenu}>Free Quote</Link>
        </motion.nav>
      </motion.header>

      <section className="eeh-hero" id="home">
        <div className="eeh-hero-grid" />
        <motion.div
          className="eeh-hero-content"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <span className="eeh-kicker">POLAND-BASED EU FULFILLMENT</span>
          <h1>
            Warehouse in Europe.
            <br />
            Delivery Across Europe.
          </h1>

          <p>
            European Entry Hub provides warehousing, fulfillment and operational
            logistics for international manufacturers selling across the
            European Union.
          </p>

          <div className="eeh-hero-actions">
            <Link href="/quote" className="eeh-button eeh-button-primary">
              Get Free Quote <ArrowRight size={18} />
            </Link>
            <Link href="#process" className="eeh-button eeh-button-secondary">
              Learn More
            </Link>
          </div>

          <div className="eeh-hero-stats">
            <div>
              <strong>2–3</strong>
              <span>days delivery in Europe</span>
            </div>
            <div>
              <strong>EU</strong>
              <span>local operational base</span>
            </div>
            <div>
              <strong>PL</strong>
              <span>central warehouse location</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="eeh-hero-visual"
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
        >
          <div className="eeh-warehouse-card">
            <div className="eeh-warehouse-roof" />
            <div className="eeh-warehouse-sign">EEH</div>
            <div className="eeh-loading-bays">
              <span />
              <span />
              <span />
              <span />
            </div>
            <Truck className="eeh-truck" size={118} strokeWidth={1.35} />
          </div>

          <div className="eeh-europe-network">
            <span className="eeh-network-dot main" />
            <span className="eeh-network-dot dot-a" />
            <span className="eeh-network-dot dot-b" />
            <span className="eeh-network-dot dot-c" />
            <span className="eeh-network-dot dot-d" />
            <span className="eeh-network-line line-a" />
            <span className="eeh-network-line line-b" />
            <span className="eeh-network-line line-c" />
            <span className="eeh-network-line line-d" />
          </div>
        </motion.div>
      </section>

      <section className="eeh-microbar" aria-label="Key EEH operating model points">
        {trustPoints.map((point) => (
          <span key={point}>
            <CheckCircle2 size={17} />
            {point}
          </span>
        ))}
      </section>


      <section className="eeh-seo-text" aria-label="European fulfillment SEO summary">
        <h2>European fulfillment and logistics from Poland</h2>
        <p>
          European Entry Hub provides warehousing in Poland, EU fulfillment,
          pick and pack services, shipping across Europe and returns handling
          for manufacturers from China, Taiwan, Korea and other international
          markets selling products in the European Union.
        </p>
      </section>

      <section className="eeh-process" id="process">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
        >
          HOW IT WORKS
        </motion.h2>

        <div className="eeh-process-row">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                className="eeh-process-item"
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <span className="eeh-process-number">{step.number}</span>
                <Icon size={58} strokeWidth={1.8} />
                <strong>{step.title}</strong>
                <p>{step.text}</p>
                {index < processSteps.length - 1 && <span className="eeh-arrow">→</span>}
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="eeh-services" id="services">
        <motion.div
          className="eeh-section-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <h2>OUR SERVICES</h2>
          <p>No marketplace, no ads, no customer acquisition. EEH focuses only on the operational layer.</p>
        </motion.div>

        <div className="eeh-services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                className="eeh-service-card"
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Icon size={58} strokeWidth={1.65} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="eeh-why" id="why">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          WHY EEH
        </motion.h2>

        <div className="eeh-why-grid">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="eeh-why-card"
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <Icon size={48} strokeWidth={1.7} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="eeh-location" id="location">
        <motion.div
          className="eeh-location-copy"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eeh-kicker dark">CENTRAL POLAND</span>
          <h2>
            AT THE HEART
            <br />
            OF EUROPE
          </h2>

          <p>
            Our warehouse in Wola Zaradzyńska, Łódź Region, Poland provides the
            perfect central location to store, fulfill and deliver across Europe
            within 2–3 days.
          </p>

          <ul>
            <li><CheckCircle2 size={20} /> Central European Location</li>
            <li><CheckCircle2 size={20} /> Excellent Infrastructure</li>
            <li><CheckCircle2 size={20} /> Major Transport Connections</li>
            <li><CheckCircle2 size={20} /> Expansion-Ready Facility</li>
          </ul>

          <div className="eeh-location-metrics">
            {metrics.map((metric) => (
              <div key={metric.value}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="eeh-map-visual">
          <div className="eeh-map-card"></div>
        </div>
      </section>

      <section className="eeh-cta" id="about">
        <motion.div
          className="eeh-cta-copy"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65 }}
        >
          <h2>
            You sell.
            <br />
            We store.
            <br />
            We fulfill.
            <br />
            We deliver.
          </h2>

          <p>Your European warehouse and fulfillment partner.</p>

          <div className="eeh-hero-actions">
            <Link href="#contact" className="eeh-button eeh-button-primary">
              Contact Us <ArrowRight size={18} />
            </Link>
            <Link href="#services" className="eeh-button eeh-button-secondary">
              Learn More
            </Link>
          </div>
        </motion.div>

        <div className="eeh-cta-strip">
          <span><Building2 size={28} /> STORE ONCE</span>
          <span><Truck size={28} /> DELIVER EVERYWHERE</span>
          <span><Clock3 size={28} /> 2–3 DAYS ACROSS EUROPE</span>
        </div>
      </section>

      <section className="eeh-faq" id="faq">
        <motion.div
          className="eeh-section-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <span className="eeh-kicker dark">CLARITY FIRST</span>
          <h2>WHAT EEH DOES AND DOES NOT DO</h2>
          <p>
            A precise operating model for manufacturers that need logistics in Europe,
            not another sales platform.
          </p>
        </motion.div>

        <div className="eeh-faq-grid">
          {faqItems.map((item, index) => (
            <motion.article
              className="eeh-faq-card"
              key={item.question}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <span>0{index + 1}</span>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="eeh-contact" id="contact">
        <motion.div
          className="eeh-contact-info"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eeh-small-label">CONTACT</span>
          <h2>Start your European logistics base.</h2>
          <p>
            Tell us what you sell, where your customers are located and how much
            inventory you want to store in Poland. We will prepare the next step.
          </p>

          <div className="eeh-contact-points">
            <div><Mail /><span>{contactEmail}</span></div>
            <div><Phone /><span>{contactPhone}</span></div>
            <div><MapPin /><span>Central Poland, Łódź Region</span></div>
          </div>
        </motion.div>

        <motion.form
          className="eeh-form"
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="eeh-form-grid">
            <label>
              Full name
              <input type="text" name="name" placeholder="John Smith" autoComplete="name" required />
            </label>

            <label>
              Email address
              <input type="email" name="email" placeholder="john@company.com" autoComplete="email" required />
            </label>
          </div>

          <label>
            Company
            <input type="text" name="company" placeholder="Company name" autoComplete="organization" />
          </label>

          <label>
            Message
            <textarea
              name="message"
              placeholder="Tell us about your products, monthly order volume and target countries..."
              rows={6}
              required
            />
          </label>

          <button
            type="submit"
            aria-label="Send contact message"
            className={sent ? "success-button" : ""}
          >
            {sent ? (
              <>
                <CheckCircle2 size={20} />
                Successfully Sent
              </>
            ) : (
              <>
                Send Message
                <PackageCheck size={20} />
              </>
            )}
          </button>

        
          
        </motion.form>
      </section>


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <footer className="eeh-footer">
        <div>
          <Link href="/" className="eeh-logo eeh-footer-logo">
            <span className="eeh-logo-main">EEH</span>
            <span className="eeh-logo-side">EUROPEAN<br />ENTRY HUB</span>
          </Link>
          <p>
            Warehousing, fulfillment and operational logistics for manufacturers
            entering the European market.
          </p>
          <a className="eeh-footer-mail" href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a className="eeh-footer-mail" href="tel:+48609929042">{contactPhone}</a>
        </div>

        <div>
          <h3>Navigation</h3>
          <Link href="/">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#why">Why EEH</Link>
          <Link href="#location">Location</Link>
          <Link href="#contact">Contact</Link>
          <Link href="/quote">Free Quote</Link>
        </div>

        <div>
          <h3>Information</h3>
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
          <Link href="/gdpr">GDPR</Link>
        </div>

        <div className="eeh-rights">© 2026 European Entry Hub. All rights reserved.</div>
      </footer>

      <style jsx global>{`
        :root {
          --navy: #061f3b;
          --navy-dark: #041426;
          --navy-soft: #102f4f;
          --blue: #0c4f8f;
          --ice: #eef7ff;
          --white: #ffffff;
          --muted: #5e7287;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: #f4f7fa;
          color: var(--navy-dark);
          font-family: Arial, Helvetica, sans-serif;
        }
        a { color: inherit; text-decoration: none; }
        button, input, textarea { font: inherit; }
        .eeh-page { min-height: 100vh; overflow-x: hidden; background: #f4f7fa; }

        .eeh-navbar {
          position: fixed;
          inset: 0 0 auto;
          height: 74px;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 34px;
          color: #fff;
          background: rgba(3, 17, 33, 0.94);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,.1);
        }

        .eeh-logo { display: inline-flex; align-items: center; gap: 10px; color: #fff; letter-spacing: .04em; }
        .eeh-logo-main { font-size: 42px; line-height: .8; font-weight: 950; }
        .eeh-logo-side { font-size: 10px; line-height: 1.05; font-weight: 900; }
        .eeh-nav { display: flex; align-items: center; gap: 38px; font-size: 13px; font-weight: 850; }
        .eeh-nav a { opacity: .92; transition: .2s ease; }
        .eeh-nav a:hover { opacity: 1; color: #bfe5ff; transform: translateY(-1px); }
        .eeh-nav-button {
          border: 2px solid rgba(255,255,255,.8);
          padding: 10px 18px;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 950;
          transition: .2s ease;
        }
        .eeh-nav-button:hover { background: #fff; color: var(--navy); }

        .eeh-hero {
          position: relative;
          min-height: 650px;
          display: grid;
          grid-template-columns: minmax(0, .9fr) minmax(420px, .95fr);
          align-items: center;
          gap: 30px;
          padding: 120px 58px 70px;
          color: #fff;
          background:
            linear-gradient(
              90deg,
              rgba(3, 20, 38, 0.92) 0%,
              rgba(3, 20, 38, 0.75) 35%,
              rgba(3, 20, 38, 0.35) 100%
            ),
            url("/images/eeh-hero-bg.png.png") center / cover no-repeat;
          overflow: hidden;
        }

        .eeh-hero-grid {
          position: absolute;
          inset: 74px 0 0;
          opacity: .24;
          background-image:
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: linear-gradient(90deg, #000, transparent 86%);
        }

        .eeh-kicker {
          display: inline-flex;
          margin-bottom: 20px;
          color: #9bd4ff;
          font-size: 13px;
          font-weight: 950;
          letter-spacing: .2em;
        }

        .eeh-kicker.dark { color: var(--blue); }

        .eeh-hero-content { position: relative; z-index: 2; max-width: 680px; }
        .eeh-hero h1 {
          margin: 0;
          font-size: clamp(46px, 5vw, 78px);
          line-height: 1.03;
          letter-spacing: -.055em;
          font-weight: 950;
          text-shadow: 0 12px 34px rgba(0,0,0,.24);
        }
        .eeh-hero p {
          max-width: 485px;
          margin: 30px 0 0;
          font-size: 20px;
          line-height: 1.42;
          font-weight: 750;
          color: rgba(255,255,255,.9);
        }
        .eeh-hero-actions { display: flex; gap: 14px; margin-top: 38px; flex-wrap: wrap; }
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
          transition: .22s ease;
        }
        .eeh-button-primary {
          background: #0c4f8f;
          border: 2px solid #8fc6ff;
          color: #fff;
          box-shadow: 0 16px 34px rgba(0,70,150,.28);
        }
        .eeh-button-secondary {
          border: 2px solid rgba(255,255,255,.75);
          color: #fff;
          background: rgba(2,14,26,.34);
        }
        .eeh-button:hover { transform: translateY(-3px); box-shadow: 0 20px 44px rgba(0,60,120,.36); }

        .eeh-hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          max-width: 590px;
          margin-top: 38px;
        }
        .eeh-hero-stats div {
          padding: 16px;
          border: 1px solid rgba(255,255,255,.18);
          background: rgba(255,255,255,.08);
          backdrop-filter: blur(10px);
        }
        .eeh-hero-stats strong {
          display: block;
          font-size: 32px;
          line-height: 1;
          font-weight: 950;
          color: #fff;
        }
        .eeh-hero-stats span {
          display: block;
          margin-top: 8px;
          font-size: 12px;
          line-height: 1.25;
          color: rgba(255,255,255,.72);
          font-weight: 800;
        }

        .eeh-hero-visual {
          position: relative;
          z-index: 2;
          min-height: 430px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .eeh-warehouse-card {
          position: relative;
          width: min(580px, 100%);
          height: 330px;
          border-radius: 12px;
          background:
            linear-gradient(180deg, rgba(13,45,74,.92), rgba(4,18,32,.96)),
            repeating-linear-gradient(90deg, rgba(255,255,255,.06) 0 1px, transparent 1px 70px);
          box-shadow: 0 34px 90px rgba(0,0,0,.32);
          border: 1px solid rgba(255,255,255,.16);
          overflow: hidden;
        }
        .eeh-warehouse-roof {
          position: absolute;
          inset: 0 0 auto;
          height: 76px;
          background: linear-gradient(135deg, #173d60, #061728);
          border-bottom: 1px solid rgba(255,255,255,.15);
        }
        .eeh-warehouse-sign {
          position: absolute;
          right: 36px;
          top: 92px;
          color: rgba(255,255,255,.9);
          font-size: 64px;
          font-weight: 950;
          letter-spacing: -.08em;
        }
        .eeh-loading-bays {
          position: absolute;
          left: 34px;
          right: 34px;
          bottom: 36px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .eeh-loading-bays span {
          height: 112px;
          border-radius: 4px 4px 0 0;
          border: 1px solid rgba(255,255,255,.16);
          background: linear-gradient(180deg, rgba(255,255,255,.12), rgba(0,0,0,.2));
        }
        .eeh-truck {
          position: absolute;
          left: 48px;
          bottom: 16px;
          color: #d9e9f7;
          filter: drop-shadow(0 16px 24px rgba(0,0,0,.35));
        }

        .eeh-europe-network {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .eeh-network-dot {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: #a9ddff;
          box-shadow: 0 0 22px #a9ddff;
        }
        .eeh-network-dot.main { width: 20px; height: 20px; right: 24%; top: 42%; background: #fff; }
        .dot-a { right: 8%; top: 22%; }
        .dot-b { right: 12%; top: 70%; }
        .dot-c { right: 38%; top: 18%; }
        .dot-d { right: 42%; top: 76%; }
        .eeh-network-line {
          position: absolute;
          height: 2px;
          width: 190px;
          right: 18%;
          top: 45%;
          background: linear-gradient(90deg, transparent, rgba(169,221,255,.8));
          transform-origin: right center;
        }
        .line-a { transform: rotate(-34deg); }
        .line-b { transform: rotate(24deg); }
        .line-c { transform: rotate(-88deg); width: 150px; }
        .line-d { transform: rotate(74deg); width: 160px; }

        .eeh-process, .eeh-services {
          background: #fff;
          padding: 50px 64px 56px;
          text-align: center;
        }
        .eeh-process h2, .eeh-section-head h2, .eeh-why h2 {
          margin: 0 0 18px;
          color: var(--navy);
          font-size: 36px;
          line-height: 1;
          font-weight: 950;
          letter-spacing: -.03em;
        }
        .eeh-section-head { max-width: 760px; margin: 0 auto 36px; }
        .eeh-section-head p {
          margin: 0;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.5;
          font-weight: 750;
        }
        .eeh-process-row {
          max-width: 1120px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 32px;
        }
        .eeh-process-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 190px;
          color: var(--navy-dark);
        }
        .eeh-process-number {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          margin-bottom: 24px;
          border-radius: 999px;
          background: var(--navy);
          color: #fff;
          font-size: 24px;
          font-weight: 950;
          box-shadow: 0 10px 22px rgba(3,24,47,.22);
        }
        .eeh-process-item svg { color: var(--navy); margin-bottom: 18px; }
        .eeh-process-item strong { display: block; font-size: 17px; font-weight: 950; line-height: 1.15; }
        .eeh-process-item p { margin: 2px 0 0; font-size: 16px; line-height: 1.2; font-weight: 800; }
        .eeh-arrow { position: absolute; right: -24px; top: 84px; color: var(--navy); font-size: 34px; font-weight: 400; }

        .eeh-services {
          background: linear-gradient(180deg, #f9fbfd 0%, #edf3f8 100%);
          padding-top: 54px;
          padding-bottom: 62px;
        }
        .eeh-services-grid {
          max-width: 1120px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .eeh-service-card {
          min-height: 210px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 24px 20px;
          background: rgba(255,255,255,.96);
          border: 1px solid rgba(7,31,59,.08);
          box-shadow: 0 14px 34px rgba(8,30,55,.07);
        }
        .eeh-service-card svg { color: var(--navy); }
        .eeh-service-card h3 {
          max-width: 210px;
          margin: 0;
          color: var(--navy-dark);
          font-size: 20px;
          line-height: 1.05;
          font-weight: 950;
        }
        .eeh-service-card p {
          margin: 0;
          color: #607286;
          font-size: 13px;
          line-height: 1.35;
          font-weight: 750;
        }

        .eeh-why {
          position: relative;
          padding: 46px 0 0;
          color: #fff;
          text-align: center;
          background:
            linear-gradient(
              90deg,
              rgba(3, 20, 39, 0.92),
              rgba(3, 20, 39, 0.80)
            ),
            url("/images/eeh-why-bg.png.png") center / cover no-repeat;
        }
        .eeh-why h2 { color: #fff; margin-bottom: 32px; }
        .eeh-why-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          min-height: 250px;
        }
        .eeh-why-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 22px 20px 26px;
          border-right: 1px solid rgba(255,255,255,.18);
          background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,0));
        }
        .eeh-why-card svg { margin-bottom: 14px; color: #fff; }
        .eeh-why-card h3 {
          min-height: 42px;
          margin: 0 0 12px;
          font-size: 20px;
          line-height: 1.05;
          font-weight: 950;
        }
        .eeh-why-card p {
          max-width: 180px;
          margin: 0;
          font-size: 14px;
          line-height: 1.28;
          font-weight: 750;
          color: rgba(255,255,255,.78);
        }

        .eeh-location {
          min-height: 520px;
          display: grid;
          grid-template-columns: .82fr 1.18fr;
          align-items: stretch;
          background: #f6f9fc;
        }
        .eeh-location-copy {
          padding: 74px 40px 55px 72px;
          z-index: 2;
        }
        .eeh-location h2 {
          margin: 0 0 24px;
          color: var(--navy);
          font-size: clamp(42px, 4vw, 58px);
          line-height: .98;
          letter-spacing: -.045em;
          font-weight: 950;
        }
        .eeh-location p {
          max-width: 430px;
          margin: 0 0 30px;
          color: var(--navy-dark);
          font-size: 19px;
          line-height: 1.35;
          font-weight: 750;
        }
        .eeh-location ul {
          display: grid;
          gap: 15px;
          margin: 0;
          padding: 0;
          list-style: none;
          color: var(--navy-dark);
          font-size: 16px;
          font-weight: 900;
        }
        .eeh-location li { display: flex; align-items: center; gap: 12px; }
        .eeh-location li svg { color: var(--navy); }

        .eeh-map-visual {
          position: relative;
          min-height: 520px;
          display: grid;
          place-items: center;
          overflow: hidden;
          background: url("/images/eeh-map-bg.png.png") center / cover no-repeat;
        }
        .eeh-map-card {
          width: min(720px, 92%);
          height: 410px;
          border-radius: 24px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(6, 31, 59, 0.08);
          box-shadow: 0 24px 70px rgba(6, 31, 59, 0.12);
          backdrop-filter: blur(4px);
        }
        .eeh-map-label {
          position: absolute;
          left: 54%;
          top: 53%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 13px;
          font-weight: 950;
          letter-spacing: .13em;
        }
        .eeh-map-pin {
          position: absolute;
          top: 43%;
          left: 54%;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #ff9d00;
          border: 4px solid #fff;
          box-shadow: 0 0 0 14px rgba(255,157,0,.15);
          z-index: 3;
        }
        .eeh-map-pulse {
          position: absolute;
          top: calc(43% - 28px);
          left: calc(54% - 28px);
          width: 84px;
          height: 84px;
          border-radius: 50%;
          border: 2px solid rgba(255,157,0,.45);
          animation: eehPulse 2.2s infinite;
        }
        .route {
          position: absolute;
          left: 56%;
          top: 48%;
          height: 2px;
          width: 220px;
          background: linear-gradient(90deg, rgba(12,79,143,.75), transparent);
          transform-origin: left center;
        }
        .r1 { transform: rotate(-22deg); }
        .r2 { transform: rotate(15deg); }
        .r3 { transform: rotate(45deg); width: 180px; }
        .r4 { transform: rotate(-58deg); width: 190px; }
        .r5 { transform: rotate(170deg); width: 245px; }


        .eeh-map-label,
        .eeh-map-pin,
        .eeh-map-pulse,
        .route {
          display: none;
        }

        @keyframes eehPulse {
          0% { transform: scale(.8); opacity: .9; }
          100% { transform: scale(1.65); opacity: 0; }
        }

        .eeh-cta {
          position: relative;
          min-height: 350px;
          display: flex;
          align-items: stretch;
          color: #fff;
          background:
            linear-gradient(
              90deg,
              rgba(2, 15, 28, 0.96) 0%,
              rgba(2, 15, 28, 0.78) 35%,
              rgba(2, 15, 28, 0.20) 100%
            ),
            url("/images/eeh-cta-bg.png.png") center / cover no-repeat;
        }
        .eeh-cta-copy {
          position: relative;
          z-index: 2;
          width: 42%;
          min-width: 420px;
          padding: 38px 38px 32px 72px;
          background: linear-gradient(90deg, rgba(3,18,34,.9), rgba(3,18,34,.34));
        }
        .eeh-cta h2 {
          margin: 0;
          font-size: clamp(44px, 4vw, 64px);
          line-height: .88;
          letter-spacing: -.055em;
          font-weight: 950;
        }
        .eeh-cta p {
          max-width: 350px;
          margin: 24px 0 0;
          font-size: 18px;
          line-height: 1.25;
          font-weight: 800;
        }
        .eeh-cta-strip {
          position: absolute;
          right: 42px;
          bottom: 30px;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 34px;
          color: #fff;
          font-size: 13px;
          font-weight: 950;
        }
        .eeh-cta-strip span {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding-right: 32px;
          border-right: 1px solid rgba(255,255,255,.5);
        }
        .eeh-cta-strip span:last-child { border-right: 0; padding-right: 0; }

        .eeh-contact {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 42px;
          padding: 92px 72px;
          color: #fff;
          background:
            radial-gradient(circle at 10% 20%, rgba(80,164,255,.18), transparent 28%),
            linear-gradient(135deg, #041426, #082c51 55%, #03111f);
        }
        .eeh-small-label {
          display: inline-flex;
          margin-bottom: 18px;
          color: #9bd4ff;
          font-size: 13px;
          font-weight: 950;
          letter-spacing: .2em;
        }
        .eeh-contact-info h2 {
          max-width: 560px;
          margin: 0;
          font-size: clamp(42px, 4vw, 68px);
          line-height: .96;
          letter-spacing: -.055em;
          font-weight: 950;
        }
        .eeh-contact-info p {
          max-width: 540px;
          margin: 24px 0 34px;
          color: rgba(255,255,255,.78);
          font-size: 18px;
          line-height: 1.55;
          font-weight: 650;
        }
        .eeh-contact-points { display: grid; gap: 16px; }
        .eeh-contact-points div { display: flex; align-items: center; gap: 14px; font-weight: 850; }
        .eeh-contact-points svg {
          width: 38px;
          height: 38px;
          padding: 8px;
          border-radius: 12px;
          background: rgba(255,255,255,.1);
          color: #9bd4ff;
        }

        .eeh-form {
          padding: 34px;
          border-radius: 24px;
          background: rgba(255,255,255,.09);
          border: 1px solid rgba(255,255,255,.18);
          box-shadow: 0 28px 90px rgba(0,0,0,.24);
          backdrop-filter: blur(18px);
        }
        .eeh-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .eeh-form label {
          display: grid;
          gap: 9px;
          margin-bottom: 18px;
          color: rgba(255,255,255,.78);
          font-size: 14px;
          font-weight: 900;
        }
        .eeh-form input, .eeh-form textarea {
          width: 100%;
          border: 1px solid rgba(255,255,255,.18);
          outline: none;
          border-radius: 14px;
          background: rgba(255,255,255,.09);
          color: #fff;
          padding: 16px 17px;
          transition: .2s ease;
          resize: vertical;
        }
        .eeh-form input::placeholder, .eeh-form textarea::placeholder { color: rgba(255,255,255,.42); }
        .eeh-form input:focus, .eeh-form textarea:focus {
          border-color: #9bd4ff;
          box-shadow: 0 0 0 4px rgba(155,212,255,.12);
          background: rgba(255,255,255,.13);
        }
        .eeh-form button {
          width: 100%;
          height: 58px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 0;
          border-radius: 16px;
          color: #041426;
          background: linear-gradient(135deg, #ffffff, #9bd4ff);
          font-size: 16px;
          font-weight: 950;
          cursor: pointer;
          transition: .22s ease;
        }
        .eeh-form button:hover { transform: translateY(-3px); box-shadow: 0 18px 40px rgba(155,212,255,.24); }

        .eeh-footer {
          display: grid;
          grid-template-columns: 1.2fr .7fr .8fr;
          gap: 50px;
          position: relative;
          padding: 50px 72px 78px;
          color: #dce8f2;
          background: #020910;
          border-top: 1px solid rgba(255,255,255,.08);
        }
        .eeh-footer-logo { margin-bottom: 20px; }
        .eeh-footer p {
          max-width: 410px;
          margin: 0;
          color: #9aadbd;
          line-height: 1.5;
          font-weight: 650;
        }
        .eeh-footer h3 {
          margin: 0 0 18px;
          color: #fff;
          font-size: 20px;
          text-transform: uppercase;
        }
        .eeh-footer a:not(.eeh-logo) {
          display: block;
          width: fit-content;
          margin-bottom: 11px;
          color: #b9c8d5;
          font-size: 16px;
          font-weight: 800;
        }
        .eeh-footer-mail { margin-top: 18px; color: #9bd4ff !important; }
        .eeh-footer a:hover { color: #fff; }
        .eeh-rights {
          position: absolute;
          left: 72px;
          right: 72px;
          bottom: 22px;
          padding-top: 20px;
          color: #73889a;
          font-size: 14px;
          border-top: 1px solid rgba(255,255,255,.08);
        }


        .eeh-hero-visual {
          display: none;
        }

        .eeh-hero-content {
          padding: 34px 36px;
          border-left: 1px solid rgba(255, 255, 255, 0.22);
          background: linear-gradient(90deg, rgba(3, 20, 38, 0.18), rgba(3, 20, 38, 0));
        }

        .eeh-location {
          background: #f4f8fb;
        }

        .eeh-map-visual::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(246, 249, 252, 0.15), rgba(246, 249, 252, 0));
          pointer-events: none;
        }

        .eeh-cta::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 72% 50%, rgba(155, 212, 255, 0.18), transparent 28%);
          pointer-events: none;
        }


        .eeh-navbar::after {
          content: "";
          position: absolute;
          left: 34px;
          right: 34px;
          bottom: -1px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(155, 212, 255, 0.55), transparent);
        }

        .eeh-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 16% 22%, rgba(155, 212, 255, 0.22), transparent 20%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.22));
          pointer-events: none;
          z-index: 1;
        }

        .eeh-hero-content {
          max-width: 720px;
          border-radius: 22px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.18);
          backdrop-filter: blur(4px);
        }

        .eeh-microbar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: #061f3b;
          color: #fff;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .eeh-microbar span {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 70px;
          padding: 18px;
          background: rgba(255, 255, 255, 0.045);
          color: rgba(255, 255, 255, 0.88);
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .eeh-microbar svg {
          color: #9bd4ff;
          flex: 0 0 auto;
        }

        .eeh-process {
          position: relative;
          overflow: hidden;
        }

        .eeh-process::before,
        .eeh-services::before,
        .eeh-faq::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 10% 0%, rgba(12, 79, 143, 0.07), transparent 25%),
            radial-gradient(circle at 90% 100%, rgba(12, 79, 143, 0.06), transparent 28%);
        }

        .eeh-process > *,
        .eeh-services > *,
        .eeh-faq > * {
          position: relative;
          z-index: 1;
        }

        .eeh-process-item,
        .eeh-service-card,
        .eeh-why-card,
        .eeh-faq-card {
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
        }

        .eeh-process-item:hover {
          transform: translateY(-4px);
        }

        .eeh-process-item:hover .eeh-process-number {
          background: #0c4f8f;
        }

        .eeh-service-card:hover {
          border-color: rgba(12, 79, 143, 0.22);
          box-shadow: 0 26px 60px rgba(8, 30, 55, 0.12);
        }

        .eeh-why-card {
          backdrop-filter: blur(2px);
        }

        .eeh-why-card:hover {
          background: linear-gradient(180deg, rgba(255,255,255,.12), rgba(255,255,255,.03));
        }

        .eeh-location {
          position: relative;
          overflow: hidden;
        }

        .eeh-location::before {
          content: "";
          position: absolute;
          inset: 0 auto 0 0;
          width: 42%;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.84), rgba(255, 255, 255, 0));
          pointer-events: none;
        }

        .eeh-location-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          max-width: 480px;
          margin-top: 32px;
        }

        .eeh-location-metrics div {
          padding: 18px 15px;
          background: #fff;
          border: 1px solid rgba(6, 31, 59, 0.08);
          box-shadow: 0 16px 40px rgba(6, 31, 59, 0.06);
        }

        .eeh-location-metrics strong {
          display: block;
          color: var(--navy);
          font-size: 24px;
          line-height: 1;
          font-weight: 950;
          letter-spacing: -0.04em;
        }

        .eeh-location-metrics span {
          display: block;
          margin-top: 8px;
          color: #607286;
          font-size: 12px;
          line-height: 1.25;
          font-weight: 850;
          text-transform: uppercase;
        }

        .eeh-map-card {
          display: none;
        }

        .eeh-map-visual {
          box-shadow: inset 18px 0 80px rgba(244, 248, 251, 0.78);
        }

        .eeh-cta-copy {
          box-shadow: 42px 0 100px rgba(2, 15, 28, 0.38);
        }

        .eeh-faq {
          position: relative;
          padding: 68px 72px 78px;
          background: #f7fafc;
          text-align: center;
          overflow: hidden;
        }

        .eeh-faq-grid {
          max-width: 1120px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          text-align: left;
        }

        .eeh-faq-card {
          min-height: 255px;
          padding: 28px;
          background: #fff;
          border: 1px solid rgba(6, 31, 59, 0.08);
          box-shadow: 0 18px 48px rgba(6, 31, 59, 0.07);
        }

        .eeh-faq-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 30px 70px rgba(6, 31, 59, 0.12);
          border-color: rgba(12, 79, 143, 0.18);
        }

        .eeh-faq-card span {
          display: inline-flex;
          margin-bottom: 20px;
          color: #0c4f8f;
          font-size: 14px;
          font-weight: 950;
          letter-spacing: 0.16em;
        }

        .eeh-faq-card h3 {
          margin: 0 0 14px;
          color: var(--navy);
          font-size: 22px;
          line-height: 1.05;
          font-weight: 950;
          letter-spacing: -0.035em;
        }

        .eeh-faq-card p {
          margin: 0;
          color: #607286;
          font-size: 15px;
          line-height: 1.5;
          font-weight: 700;
        }

        .eeh-form-note {
          margin: 14px 0 0;
          color: rgba(255, 255, 255, 0.52);
          font-size: 12px;
          line-height: 1.35;
          font-weight: 700;
          text-align: center;
        }

        .eeh-footer {
          background:
            radial-gradient(circle at 18% 0%, rgba(12, 79, 143, 0.18), transparent 28%),
            #020910;
        }


        .success-button {
          background: linear-gradient(135deg, #22c55e, #16a34a) !important;
          color: #ffffff !important;
          animation: successPop 0.38s ease both;
          box-shadow: 0 18px 44px rgba(34, 197, 94, 0.28) !important;
        }

        .success-button svg {
          animation: successIcon 0.45s ease both;
        }

        @keyframes successPop {
          0% {
            transform: scale(0.94);
            opacity: 0.74;
          }

          60% {
            transform: scale(1.025);
            opacity: 1;
          }

          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes successIcon {
          0% {
            transform: scale(0.4) rotate(-18deg);
            opacity: 0;
          }

          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        .eeh-form-note {
          min-height: 18px;
          margin: 14px 0 0;
          color: rgba(255, 255, 255, 0.52);
          font-size: 12px;
          line-height: 1.35;
          font-weight: 700;
          text-align: center;
          opacity: 0.72;
          transition: 0.22s ease;
        }

        .eeh-form-note.visible {
          color: rgba(187, 247, 208, 0.96);
          opacity: 1;
          animation: noteSlide 0.35s ease both;
        }

        @keyframes noteSlide {
          from {
            transform: translateY(6px);
            opacity: 0;
          }

          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .eeh-seo-text {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .eeh-form input:valid,
        .eeh-form textarea:valid {
          border-color: rgba(155, 212, 255, 0.30);
        }


        .eeh-menu-button {
          display: none;
          width: 44px;
          height: 44px;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 12px;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
          cursor: pointer;
          transition: 0.22s ease;
        }

        .eeh-menu-button:hover {
          background: rgba(255, 255, 255, 0.14);
          transform: translateY(-2px);
        }

        .eeh-mobile-menu {
          display: none;
        }



        /* LIGHTER PREMIUM THEME OVERRIDES */
        :root {
          --navy: #08294a;
          --navy-dark: #06192d;
          --navy-soft: #e9f3fb;
          --blue: #2563eb;
          --blue-light: #60a5fa;
          --ice: #f8fbff;
          --white: #ffffff;
          --muted: #607286;
        }

        body,
        .eeh-page {
          background: #fbfdff;
          color: var(--navy-dark);
        }

        .eeh-navbar {
          color: var(--navy);
          background: rgba(255, 255, 255, 0.94);
          border-bottom: 1px solid rgba(8, 41, 74, 0.08);
          box-shadow: 0 12px 35px rgba(8, 41, 74, 0.06);
        }

        .eeh-logo,
        .eeh-nav a {
          color: var(--navy);
        }

        .eeh-nav a:hover {
          color: var(--blue);
        }

        .eeh-nav-button {
          color: var(--navy);
          border-color: rgba(8, 41, 74, 0.18);
          background: #ffffff;
          box-shadow: 0 10px 28px rgba(8, 41, 74, 0.07);
        }

        .eeh-nav-button:hover {
          color: #ffffff;
          background: var(--blue);
          border-color: var(--blue);
        }

        .eeh-menu-button {
          color: var(--navy);
          border-color: rgba(8, 41, 74, 0.14);
          background: rgba(255, 255, 255, 0.9);
        }

        .eeh-menu-button:hover {
          background: #eef6ff;
        }

        .eeh-navbar::after {
          background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.35), transparent);
        }

        .eeh-hero {
          color: var(--navy-dark);
          background:
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.94) 0%,
              rgba(255, 255, 255, 0.82) 42%,
              rgba(255, 255, 255, 0.38) 100%
            ),
            url("/images/eeh-hero-bg.png.png") center / cover no-repeat;
        }

        .eeh-hero::before {
          background:
            radial-gradient(circle at 16% 22%, rgba(96, 165, 250, 0.24), transparent 22%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.24));
        }

        .eeh-hero-grid {
          opacity: 0.32;
          background-image:
            linear-gradient(rgba(8, 41, 74, 0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(8, 41, 74, 0.055) 1px, transparent 1px);
        }

        .eeh-kicker,
        .eeh-small-label {
          color: var(--blue);
        }

        .eeh-hero h1 {
          color: var(--navy-dark);
          text-shadow: none;
        }

        .eeh-hero p {
          color: #425a70;
        }

        .eeh-hero-content {
          background: rgba(255, 255, 255, 0.78);
          border: 1px solid rgba(8, 41, 74, 0.08);
          box-shadow: 0 30px 90px rgba(8, 41, 74, 0.12);
          backdrop-filter: blur(20px);
        }

        .eeh-button-primary {
          color: #ffffff;
          background: linear-gradient(135deg, #2563eb, #60a5fa);
          border: 2px solid rgba(96, 165, 250, 0.9);
          box-shadow: 0 18px 38px rgba(37, 99, 235, 0.22);
        }

        .eeh-button-secondary {
          color: var(--navy);
          background: #ffffff;
          border: 2px solid rgba(8, 41, 74, 0.12);
          box-shadow: 0 12px 30px rgba(8, 41, 74, 0.06);
        }

        .eeh-hero-stats div {
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(8, 41, 74, 0.08);
          box-shadow: 0 16px 42px rgba(8, 41, 74, 0.08);
        }

        .eeh-hero-stats strong {
          color: var(--navy);
        }

        .eeh-hero-stats span {
          color: #607286;
        }

        .eeh-microbar {
          color: var(--navy);
          background: #edf6ff;
          border-color: rgba(8, 41, 74, 0.08);
        }

        .eeh-microbar span {
          color: var(--navy);
          background: rgba(255, 255, 255, 0.78);
        }

        .eeh-microbar svg {
          color: var(--blue);
        }

        .eeh-process,
        .eeh-services,
        .eeh-faq {
          background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
        }

        .eeh-service-card,
        .eeh-faq-card,
        .eeh-location-metrics div {
          background: rgba(255, 255, 255, 0.98);
          border-color: rgba(8, 41, 74, 0.075);
          box-shadow: 0 18px 48px rgba(8, 41, 74, 0.07);
        }

        .eeh-process-number {
          background: linear-gradient(135deg, #2563eb, #60a5fa);
          box-shadow: 0 12px 26px rgba(37, 99, 235, 0.18);
        }

        .eeh-process-item svg,
        .eeh-service-card svg,
        .eeh-location li svg {
          color: var(--blue);
        }

        .eeh-why {
          color: var(--navy-dark);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(243, 249, 255, 0.92)),
            url("/images/eeh-why-bg.png.png") center / cover no-repeat;
        }

        .eeh-why h2,
        .eeh-why-card h3 {
          color: var(--navy);
        }

        .eeh-why-grid {
          gap: 18px;
          padding: 0 64px 54px;
        }

        .eeh-why-card {
          color: var(--navy-dark);
          border: 1px solid rgba(8, 41, 74, 0.08);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 18px 48px rgba(8, 41, 74, 0.08);
          backdrop-filter: blur(14px);
        }

        .eeh-why-card svg {
          color: var(--blue);
        }

        .eeh-why-card p {
          color: #607286;
        }

        .eeh-why-card:hover {
          background: #ffffff;
          box-shadow: 0 28px 68px rgba(8, 41, 74, 0.12);
        }

        .eeh-location {
          background: #f8fbff;
        }

        .eeh-map-visual::before {
          background: linear-gradient(90deg, rgba(248, 251, 255, 0.58), rgba(248, 251, 255, 0.08));
        }

        .eeh-cta {
          color: var(--navy-dark);
          background:
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.94) 0%,
              rgba(255, 255, 255, 0.76) 46%,
              rgba(255, 255, 255, 0.18) 100%
            ),
            url("/images/eeh-cta-bg.png.png") center / cover no-repeat;
        }

        .eeh-cta-copy {
          background: rgba(255, 255, 255, 0.82);
          box-shadow: 42px 0 100px rgba(8, 41, 74, 0.12);
          backdrop-filter: blur(18px);
        }

        .eeh-cta h2,
        .eeh-cta p {
          color: var(--navy-dark);
        }

        .eeh-cta-strip {
          color: var(--navy);
          background: rgba(255, 255, 255, 0.84);
          padding: 14px 18px;
          border-radius: 18px;
          box-shadow: 0 18px 48px rgba(8, 41, 74, 0.1);
          backdrop-filter: blur(14px);
        }

        .eeh-cta-strip span {
          border-right-color: rgba(8, 41, 74, 0.16);
        }

        .eeh-contact {
          color: var(--navy-dark);
          background:
            radial-gradient(circle at 10% 20%, rgba(96, 165, 250, 0.20), transparent 28%),
            linear-gradient(180deg, #ffffff, #eef6ff);
        }

        .eeh-contact-info p {
          color: #526a80;
        }

        .eeh-contact-points div {
          color: var(--navy);
        }

        .eeh-contact-points svg {
          color: var(--blue);
          background: rgba(37, 99, 235, 0.08);
        }

        .eeh-form {
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid rgba(8, 41, 74, 0.08);
          box-shadow: 0 28px 80px rgba(8, 41, 74, 0.10);
        }

        .eeh-form label {
          color: var(--navy);
        }

        .eeh-form input,
        .eeh-form textarea {
          color: var(--navy-dark);
          background: #f8fbff;
          border: 1px solid rgba(8, 41, 74, 0.12);
        }

        .eeh-form input::placeholder,
        .eeh-form textarea::placeholder {
          color: #8da0b0;
        }

        .eeh-form input:focus,
        .eeh-form textarea:focus {
          background: #ffffff;
          border-color: var(--blue-light);
          box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.18);
        }

        .eeh-form button {
          color: #ffffff;
          background: linear-gradient(135deg, #2563eb, #60a5fa);
          box-shadow: 0 18px 38px rgba(37, 99, 235, 0.20);
        }

        .eeh-form-note {
          color: #6b7f91;
        }

        .eeh-form-note.visible {
          color: #15803d;
        }

        .eeh-footer {
          background:
            radial-gradient(circle at 18% 0%, rgba(96, 165, 250, 0.20), transparent 28%),
            #06192d;
        }

        @media (max-width: 1100px) {
          .eeh-navbar { height: auto; min-height: 76px; gap: 16px; flex-wrap: wrap; padding: 16px 22px; }
          .eeh-nav { order: 3; width: 100%; justify-content: center; gap: 20px; flex-wrap: wrap; }
          .eeh-hero { grid-template-columns: 1fr; padding: 145px 28px 64px; }
          .eeh-hero-visual { min-height: 330px; }
          .eeh-process-row { grid-template-columns: repeat(2, 1fr); }
          .eeh-arrow { display: none; }
          .eeh-services-grid { grid-template-columns: repeat(2, 1fr); }
          .eeh-why-grid { grid-template-columns: repeat(3, 1fr); }
          .eeh-location, .eeh-contact { grid-template-columns: 1fr; }
          .eeh-cta-copy { width: 100%; min-width: 0; }
          .eeh-cta-strip { position: relative; right: auto; bottom: auto; align-self: flex-end; margin: 0 28px 26px auto; flex-wrap: wrap; }
          .eeh-footer { grid-template-columns: 1fr 1fr; }

          .eeh-microbar { grid-template-columns: repeat(2, 1fr); }
          .eeh-location-metrics { grid-template-columns: repeat(3, 1fr); }
          .eeh-faq-grid { grid-template-columns: 1fr; }

        }

        @media (max-width: 680px) {
          .eeh-navbar { position: sticky; top: 0; }
          .eeh-logo-main { font-size: 34px; }
          .eeh-nav { display: none; }
          .eeh-nav-button { display: none; }

          .eeh-menu-button {
            display: grid;
          }

          .eeh-mobile-menu {
            position: absolute;
            top: calc(100% + 10px);
            left: 14px;
            right: 14px;
            z-index: 60;
            display: grid;
            gap: 8px;
            padding: 14px;
            border: 1px solid rgba(255, 255, 255, 0.16);
            border-radius: 20px;
            background: rgba(3, 17, 33, 0.96);
            box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
            backdrop-filter: blur(18px);
          }

          .eeh-mobile-menu a {
            display: flex;
            align-items: center;
            min-height: 48px;
            padding: 0 14px;
            border-radius: 13px;
            color: rgba(255, 255, 255, 0.86);
            background: rgba(255, 255, 255, 0.055);
            font-size: 14px;
            font-weight: 900;
          }

          .eeh-mobile-menu a:hover {
            color: #ffffff;
            background: rgba(155, 212, 255, 0.14);
          }

          .eeh-hero { min-height: 760px; padding: 82px 20px 54px; }
          .eeh-hero h1 { font-size: 42px; }
          .eeh-hero p { font-size: 17px; }
          .eeh-hero-stats { grid-template-columns: 1fr; }
          .eeh-button { width: 100%; }
          .eeh-process, .eeh-services { padding: 40px 20px; }
          .eeh-process-row, .eeh-services-grid, .eeh-why-grid { grid-template-columns: 1fr; }
          .eeh-why-card { border-right: 0; border-bottom: 1px solid rgba(255,255,255,.16); }
          .eeh-location-copy { padding: 48px 22px; }
          .eeh-map-visual { min-height: 360px; }
          .eeh-map-card { height: 300px; }
          .eeh-cta { min-height: 520px; align-items: flex-start; }
          .eeh-cta-copy { padding: 42px 22px; }
          .eeh-cta-strip { display: none; }
          .eeh-contact { padding: 58px 20px; }
          .eeh-form { padding: 22px; border-radius: 20px; }
          .eeh-form-grid { grid-template-columns: 1fr; gap: 0; }
          .eeh-footer { grid-template-columns: 1fr; padding: 42px 22px 86px; }

          .eeh-microbar { grid-template-columns: 1fr; }
          .eeh-microbar span { min-height: 58px; justify-content: flex-start; }
          .eeh-location-metrics { grid-template-columns: 1fr; }
          .eeh-faq { padding: 52px 20px; }
          .eeh-faq-card { min-height: auto; padding: 24px; }

          .eeh-rights { left: 22px; right: 22px; }
        }


        /* BUTTON + FORM STYLE MATCHING QUOTE PAGE - NO LAYOUT CHANGES */
        .eeh-nav-button {
          color: #ffffff !important;
          background: #1457ff !important;
          border: 0 !important;
          border-radius: 999px !important;
          padding: 12px 22px !important;
          box-shadow: 0 14px 30px rgba(20, 87, 255, 0.26) !important;
        }

        .eeh-nav-button:hover {
          color: #ffffff !important;
          background: #0f46d8 !important;
          transform: translateY(-1px) !important;
        }

        .eeh-nav a {
          border-radius: 999px !important;
          padding: 10px 14px !important;
        }

        .eeh-nav a:hover {
          color: #1457ff !important;
          background: rgba(20, 87, 255, 0.08) !important;
        }

        .eeh-button {
          border-radius: 999px !important;
          min-height: 52px !important;
          padding: 14px 24px !important;
          font-weight: 950 !important;
        }

        .eeh-button-primary {
          color: #ffffff !important;
          background: linear-gradient(135deg, #1457ff, #54a3ff) !important;
          border: 0 !important;
          box-shadow: 0 18px 38px rgba(20, 87, 255, 0.25) !important;
        }

        .eeh-button-primary:hover {
          color: #ffffff !important;
          background: linear-gradient(135deg, #0f46d8, #3b82f6) !important;
          box-shadow: 0 22px 48px rgba(20, 87, 255, 0.32) !important;
        }

        .eeh-button-secondary {
          color: #111827 !important;
          background: rgba(255, 255, 255, 0.92) !important;
          border: 1px solid rgba(17, 24, 39, 0.10) !important;
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08) !important;
        }

        .eeh-button-secondary:hover {
          color: #1457ff !important;
          background: #ffffff !important;
          border-color: rgba(20, 87, 255, 0.22) !important;
        }

        .eeh-form {
          border-radius: 24px !important;
        }

        .eeh-form input,
        .eeh-form textarea {
          border-radius: 16px !important;
        }

        .eeh-form input:focus,
        .eeh-form textarea:focus {
          border-color: #1457ff !important;
          box-shadow: 0 0 0 4px rgba(20, 87, 255, 0.14) !important;
        }

        .eeh-form button {
          color: #ffffff !important;
          background: linear-gradient(135deg, #1457ff, #54a3ff) !important;
          border-radius: 999px !important;
          box-shadow: 0 18px 38px rgba(20, 87, 255, 0.25) !important;
        }

        .eeh-form button:hover {
          background: linear-gradient(135deg, #0f46d8, #3b82f6) !important;
          box-shadow: 0 22px 48px rgba(20, 87, 255, 0.32) !important;
        }

        .success-button {
          background: linear-gradient(135deg, #16a34a, #22c55e) !important;
          color: #ffffff !important;
        }

        .eeh-menu-button {
          border-radius: 999px !important;
        }

        .eeh-mobile-menu a {
          border-radius: 999px !important;
        }

        .eeh-mobile-menu a:hover {
          color: #1457ff !important;
          background: rgba(20, 87, 255, 0.08) !important;
        }

        .eeh-kicker,
        .eeh-small-label {
          padding: 8px 13px !important;
          border-radius: 999px !important;
          color: #1457ff !important;
          background: rgba(20, 87, 255, 0.10) !important;
          border: 1px solid rgba(20, 87, 255, 0.14) !important;
          width: fit-content !important;
        }

      `}</style>
    </main>
  );
}
