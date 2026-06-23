"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PackageOpen } from "lucide-react";
import "./quote.css";

type FormState = {
  companyName: string;
  country: string;
  website: string;
  sellsInEurope: string;
  monthlyOrders: string;
  palletsStored: string;
  productCategories: string[];
  packageSize: string;
  services: string[];
  contactPerson: string;
  email: string;
  phone: string;
  message: string;
};

type QuoteData = {
  parcels: number;
  parcelPrice: number;
  pallets: number;
  palletPrice: number;
  fulfillmentTotal: number;
  storageTotal: number;
  returnsTotal: number;
  total: number;
};

const initialState: FormState = {
  companyName: "",
  country: "",
  website: "",
  sellsInEurope: "",
  monthlyOrders: "",
  palletsStored: "",
  productCategories: [],
  packageSize: "",
  services: [],
  contactPerson: "",
  email: "",
  phone: "",
  message: "",
};

const orderOptions = [
  { label: "0–100 parcels", value: "0-100", average: 50, price: 4.5 },
  { label: "100–500 parcels", value: "100-500", average: 300, price: 3.5 },
  { label: "500–1000 parcels", value: "500-1000", average: 750, price: 3.0 },
  { label: "1000–3000 parcels", value: "1000-3000", average: 2000, price: 2.7 },
  { label: "3000+ parcels", value: "3000+", average: 4000, price: 2.4 },
];

const palletOptions = [
  { label: "1–5 pallets", value: "1-5", average: 3, price: 35 },
  { label: "6–15 pallets", value: "6-15", average: 10, price: 30 },
  { label: "16–30 pallets", value: "16-30", average: 23, price: 27 },
  { label: "31–60 pallets", value: "31-60", average: 45, price: 24 },
  { label: "60+ pallets", value: "60+", average: 80, price: 22 },
];

const productCategoryOptions = [
  { label: "Electronics", value: "Electronics", description: "Devices, accessories, gadgets and electronic components." },
  { label: "Home & Living", value: "Home & Living", description: "Home goods, decor, small household items and lifestyle products." },
  { label: "Beauty & Personal Care", value: "Beauty & Personal Care", description: "Cosmetics, personal care products and beauty accessories." },
  { label: "Fashion & Accessories", value: "Fashion & Accessories", description: "Clothing, bags, accessories and lightweight textile products." },
  { label: "Sports & Outdoor", value: "Sports & Outdoor", description: "Sport goods, outdoor accessories and hobby products." },
  { label: "Other", value: "Other", description: "Other product categories requiring individual review." },
];

const packageSizeOptions = [
  {
    label: "Small",
    value: "Small",
    description: "All dimensions are smaller than:",
    details: ["Length < 25 cm", "Width < 15 cm", "Height < 10 cm"],
  },
  {
    label: "Medium",
    value: "Medium",
    description: "Dimensions fit within:",
    details: ["Length 25–60 cm", "Width 15–40 cm", "Height 10–40 cm"],
  },
  {
    label: "Large",
    value: "Large",
    description: "At least one dimension is larger than:",
    details: ["Length > 60 cm", "Width > 40 cm", "Height > 40 cm"],
  },
];

const serviceOptions = [
  "Warehousing",
  "Pick & Pack",
  "Returns Handling",
  "Quality Control",
  "Repacking / Relabeling",
  "Inventory Reporting",
];

const steps = ["Business", "Volume", "Storage", "Category", "Size", "Services", "Contact", "Quote"];

function eur(value: number) {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function QuotePage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const selectedOrders = orderOptions.find((item) => item.value === form.monthlyOrders);
  const selectedPallets = palletOptions.find((item) => item.value === form.palletsStored);

  const quote: QuoteData = useMemo(() => {
    const parcels = selectedOrders?.average ?? 0;
    const parcelPrice = selectedOrders?.price ?? 0;
    const pallets = selectedPallets?.average ?? 0;
    const palletPrice = selectedPallets?.price ?? 0;

    const fulfillmentTotal = parcels * parcelPrice;
    const storageTotal = pallets * palletPrice;
    const returnsTotal = form.services.includes("Returns Handling")
      ? Math.round(parcels * 0.05 * 3)
      : 0;

    return {
      parcels,
      parcelPrice,
      pallets,
      palletPrice,
      fulfillmentTotal,
      storageTotal,
      returnsTotal,
      total: fulfillmentTotal + storageTotal + returnsTotal,
    };
  }, [selectedOrders, selectedPallets, form.services]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleService(service: string) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((item) => item !== service)
        : [...prev.services, service],
    }));
  }

  function toggleProductCategory(category: string) {
    setForm((prev) => ({
      ...prev,
      productCategories: prev.productCategories.includes(category)
        ? prev.productCategories.filter((item) => item !== category)
        : [...prev.productCategories, category],
    }));
  }

  function canGoNext() {
    if (step === 0) return form.companyName && form.country && form.sellsInEurope;
    if (step === 1) return form.monthlyOrders;
    if (step === 2) return form.palletsStored;
    if (step === 3) return form.productCategories.length > 0;
    if (step === 4) return form.packageSize;
    if (step === 5) return form.services.length > 0;
    if (step === 6) return form.contactPerson && form.email;
    return true;
  }

  async function submitQuote() {
    setStatus("sending");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form, quote }),
      });

      if (!response.ok) throw new Error("Quote request failed");

      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <main className="quote-page">
      <nav className="quote-nav">
        <Link href="/" className="quote-logo">
          <strong>EEH</strong>
          <span>European Entry Hub</span>
        </Link>

        <div className="quote-nav-links">
          <Link href="/">Home</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#contact">Contact</Link>
          <Link href="/quote" className="quote-nav-cta">Free Quote</Link>
        </div>
      </nav>

      <section className="quote-hero">
        <span>Free European Fulfillment Estimate</span>
        <h1>Get a clear monthly quote for storing and shipping products across Europe.</h1>
        <p>
          Complete the form below. You will see your estimate instantly, and a
          detailed version will also be sent to your email.
        </p>
      </section>

      <section className="quote-shell">
        <div className="quote-card">
          <div className="quote-progress">
            <div className="quote-progress-line">
              <span style={{ width: `${progress}%` }} />
            </div>

            <div className="quote-steps">
              {steps.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  className={index <= step ? "active" : ""}
                  onClick={() => setStep(index)}
                >
                  <span>{index + 1}</span>
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="quote-layout">
            <div className="quote-main">
              {step === 0 && (
                <div className="quote-step">
                  <h2>Your business</h2>
                  <p>Tell us who you are and where your company operates.</p>

                  <div className="field-grid">
                    <label>
                      Company name
                      <input
                        value={form.companyName}
                        onChange={(e) => updateField("companyName", e.target.value)}
                        placeholder="ABC Electronics Ltd."
                      />
                    </label>

                    <label>
                      Country
                      <input
                        value={form.country}
                        onChange={(e) => updateField("country", e.target.value)}
                        placeholder="China"
                      />
                    </label>

                    <label>
                      Website / sales channel
                      <input
                        value={form.website}
                        onChange={(e) => updateField("website", e.target.value)}
                        placeholder="https://..."
                      />
                    </label>

                    <label>
                      Do you already sell in Europe?
                      <select
                        value={form.sellsInEurope}
                        onChange={(e) => updateField("sellsInEurope", e.target.value)}
                      >
                        <option value="">Select answer</option>
                        <option value="Yes">Yes</option>
                        <option value="Preparing">No, we are preparing</option>
                        <option value="Researching">Just researching</option>
                      </select>
                    </label>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="quote-step">
                  <h2>Monthly parcel volume</h2>
                  <p>Choose the range closest to your expected monthly volume.</p>

                  <div className="option-grid">
                    {orderOptions.map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        className={form.monthlyOrders === item.value ? "selected" : ""}
                        onClick={() => updateField("monthlyOrders", item.value)}
                      >
                        <strong>{item.label}</strong>
                        <span>{eur(item.price)} / parcel</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="quote-step">
                  <h2>Pallets stored</h2>
                  <p>All standard warehouse handling costs are included in the pallet rate.</p>

                  <div className="option-grid">
                    {palletOptions.map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        className={form.palletsStored === item.value ? "selected" : ""}
                        onClick={() => updateField("palletsStored", item.value)}
                      >
                        <strong>{item.label}</strong>
                        <span>{eur(item.price)} / pallet / month</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="quote-step">
                  <h2>Product categories</h2>
                  <p>Select one or more categories that best describe the products you want to store in Europe.</p>

                  <div className="option-grid">
                    {productCategoryOptions.map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        className={form.productCategories.includes(item.value) ? "selected" : ""}
                        onClick={() => toggleProductCategory(item.value)}
                      >
                        <strong>{item.label}</strong>
                        <span>{item.description}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="quote-step">
                  <h2>Average package size</h2>
                  <p>Choose the average size of one parcel. This helps us review handling and warehouse flow.</p>

                  <div className="size-option-grid">
                    {packageSizeOptions.map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        className={form.packageSize === item.value ? "selected" : ""}
                        onClick={() => updateField("packageSize", item.value)}
                      >
                        <span className="size-radio" />
                        <PackageOpen size={54} strokeWidth={1.7} />
                        <strong>{item.label}</strong>
                        <em>{item.description}</em>

                        <div className="size-details">
                          {item.details.map((detail) => (
                            <p key={detail}>{detail}</p>
                          ))}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="quote-step">
                  <h2>Required services</h2>
                  <p>Select everything you need from the European Entry Hub team.</p>

                  <div className="option-grid">
                    {serviceOptions.map((service) => (
                      <button
                        key={service}
                        type="button"
                        className={form.services.includes(service) ? "selected" : ""}
                        onClick={() => toggleService(service)}
                      >
                        <strong>{service}</strong>
                        <span>Included in your operational setup</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 6 && (
                <div className="quote-step">
                  <h2>Contact details</h2>
                  <p>Your estimate will wait for you in your email inbox after submitting.</p>

                  <div className="field-grid">
                    <label>
                      Contact person
                      <input
                        value={form.contactPerson}
                        onChange={(e) => updateField("contactPerson", e.target.value)}
                        placeholder="John Chen"
                      />
                    </label>

                    <label>
                      Email
                      <input
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="john@company.com"
                        type="email"
                      />
                    </label>

                    <label>
                      Phone / WhatsApp
                      <input
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="+86..."
                      />
                    </label>

                    <label>
                      Additional message
                      <textarea
                        value={form.message}
                        onChange={(e) => updateField("message", e.target.value)}
                        placeholder="Tell us anything important about your products or logistics."
                      />
                    </label>
                  </div>
                </div>
              )}

              {step === 7 && (
                <div className="quote-step final-step">
                  <span className="final-badge">Your estimate is ready</span>
                  <h2>{eur(quote.total)} / month</h2>
                  <p>
                    This estimate includes pallet storage, standard warehouse handling,
                    pick & pack operations, packaging preparation, inventory reporting
                    and selected operational services.
                  </p>

                  <div className="quote-breakdown">
                    <div>
                      <span>Storage</span>
                      <strong>
                        {quote.pallets} pallets × {eur(quote.palletPrice)} = {eur(quote.storageTotal)}
                      </strong>
                    </div>

                    <div>
                      <span>Fulfillment</span>
                      <strong>
                        {quote.parcels} parcels × {eur(quote.parcelPrice)} = {eur(quote.fulfillmentTotal)}
                      </strong>
                    </div>

                    {quote.returnsTotal > 0 && (
                      <div>
                        <span>Returns handling estimate</span>
                        <strong>{eur(quote.returnsTotal)}</strong>
                      </div>
                    )}

                    <div className="total-row">
                      <span>Total estimate</span>
                      <strong>{eur(quote.total)} / month</strong>
                    </div>
                  </div>

                  <div className="quote-selected-data">
                    <div>
                      <span>Product categories</span>
                      <strong>{form.productCategories.join(", ")}</strong>
                    </div>
                    <div>
                      <span>Average package size</span>
                      <strong>{form.packageSize}</strong>
                    </div>
                  </div>

                  <div className="quote-notice">
                    No hidden warehouse costs. Carrier shipping costs are billed separately
                    at actual carrier rates.
                  </div>

                  {status === "sent" ? (
                    <div className="success-box">
                      Your quote request has been sent. A detailed estimate is waiting for you in your email.
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="submit-quote"
                      onClick={submitQuote}
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? "Sending..." : "Send quote to my email"}
                    </button>
                  )}

                  {status === "error" && (
                    <p className="error-text">Something went wrong. Please try again.</p>
                  )}
                </div>
              )}

              <div className="quote-controls">
                <button
                  type="button"
                  className="ghost-button"
                  onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
                  disabled={step === 0}
                >
                  Back
                </button>

                {step < steps.length - 1 && (
                  <button
                    type="button"
                    className="next-button"
                    onClick={() => setStep((prev) => Math.min(prev + 1, steps.length - 1))}
                    disabled={!canGoNext()}
                  >
                    Continue
                  </button>
                )}
              </div>
            </div>

            <aside className="quote-summary">
              <span>Live estimate</span>
              <strong>{eur(quote.total)} / month</strong>

              <div>
                <small>Monthly parcels</small>
                <p>{selectedOrders?.label ?? "Not selected yet"}</p>
              </div>

              <div>
                <small>Stored pallets</small>
                <p>{selectedPallets?.label ?? "Not selected yet"}</p>
              </div>

              <div>
                <small>Product categories</small>
                <p>{form.productCategories.length ? form.productCategories.join(", ") : "Not selected yet"}</p>
              </div>

              <div>
                <small>Package size</small>
                <p>{form.packageSize || "Not selected yet"}</p>
              </div>

              <div>
                <small>Services</small>
                <p>{form.services.length ? form.services.join(", ") : "Not selected yet"}</p>
              </div>

              <div className="summary-mail">
                After submitting, the full estimate will also be sent to your email.
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
