import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type QuotePayload = {
  form: {
    companyName: string;
    country: string;
    website: string;
    sellsInEurope: string;
    monthlyOrders: string;
    palletsStored: string;
    services: string[];
    contactPerson: string;
    email: string;
    phone: string;
    message: string;
  };
  quote: {
    parcelsMin: number;
    parcelsMax: number;
    parcelPrice: number;
    palletsMin: number;
    palletsMax: number;
    palletPrice: number;
    fulfillmentTotalMin: number;
    fulfillmentTotalMax: number;
    storageTotalMin: number;
    storageTotalMax: number;
    returnsTotalMin: number;
    returnsTotalMax: number;
    totalMin: number;
    totalMax: number;
  };
};

function eur(value: number) {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function eurRange(min: number, max: number) {
  if (min === max) return eur(min);
  return `${eur(min)} – ${eur(max)}`;
}

function emailShell(title: string, content: string) {
  return `
  <div style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;color:#111827;">
    <div style="max-width:680px;margin:0 auto;padding:32px 18px;">
      <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:24px;overflow:hidden;box-shadow:0 24px 70px rgba(15,23,42,.10);">
        <div style="background:#0f172a;color:#ffffff;padding:28px 30px;">
          <div style="font-size:13px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#93c5fd;">European Entry Hub</div>
          <h1 style="margin:10px 0 0;font-size:30px;line-height:1.05;letter-spacing:-.04em;">${title}</h1>
        </div>
        <div style="padding:30px;">
          ${content}
        </div>
      </div>
    </div>
  </div>`;
}

export async function POST(request: Request) {
  try {
    const { form, quote } = (await request.json()) as QuotePayload;

    if (!form.email || !form.companyName || !form.contactPerson) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || "true") === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const ownerEmail = process.env.QUOTE_OWNER_EMAIL || process.env.SMTP_USER;
    const from = process.env.SMTP_FROM || process.env.SMTP_USER;

    if (!ownerEmail || !from) {
      return NextResponse.json({ error: "Missing email configuration" }, { status: 500 });
    }

    const estimateRange = eurRange(quote.totalMin, quote.totalMax);

    const ownerHtml = emailShell(
      "New quote request",
      `
      <p style="font-size:16px;line-height:1.7;margin:0 0 20px;">A new automated quote request has been submitted.</p>

      <h2 style="font-size:18px;margin:24px 0 12px;">Client details</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:10px;border-bottom:1px solid #e5e7eb;color:#6b7280;">Company</td><td style="padding:10px;border-bottom:1px solid #e5e7eb;font-weight:700;">${form.companyName}</td></tr>
        <tr><td style="padding:10px;border-bottom:1px solid #e5e7eb;color:#6b7280;">Country</td><td style="padding:10px;border-bottom:1px solid #e5e7eb;font-weight:700;">${form.country}</td></tr>
        <tr><td style="padding:10px;border-bottom:1px solid #e5e7eb;color:#6b7280;">Contact person</td><td style="padding:10px;border-bottom:1px solid #e5e7eb;font-weight:700;">${form.contactPerson}</td></tr>
        <tr><td style="padding:10px;border-bottom:1px solid #e5e7eb;color:#6b7280;">Email</td><td style="padding:10px;border-bottom:1px solid #e5e7eb;font-weight:700;">${form.email}</td></tr>
        <tr><td style="padding:10px;border-bottom:1px solid #e5e7eb;color:#6b7280;">Phone</td><td style="padding:10px;border-bottom:1px solid #e5e7eb;font-weight:700;">${form.phone || "-"}</td></tr>
        <tr><td style="padding:10px;border-bottom:1px solid #e5e7eb;color:#6b7280;">Website</td><td style="padding:10px;border-bottom:1px solid #e5e7eb;font-weight:700;">${form.website || "-"}</td></tr>
      </table>

      <h2 style="font-size:18px;margin:24px 0 12px;">Quote data</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:10px;border-bottom:1px solid #e5e7eb;color:#6b7280;">Sells in Europe</td><td style="padding:10px;border-bottom:1px solid #e5e7eb;font-weight:700;">${form.sellsInEurope}</td></tr>
        <tr><td style="padding:10px;border-bottom:1px solid #e5e7eb;color:#6b7280;">Monthly orders</td><td style="padding:10px;border-bottom:1px solid #e5e7eb;font-weight:700;">${form.monthlyOrders}</td></tr>
        <tr><td style="padding:10px;border-bottom:1px solid #e5e7eb;color:#6b7280;">Pallets stored</td><td style="padding:10px;border-bottom:1px solid #e5e7eb;font-weight:700;">${form.palletsStored}</td></tr>
        <tr><td style="padding:10px;border-bottom:1px solid #e5e7eb;color:#6b7280;">Services</td><td style="padding:10px;border-bottom:1px solid #e5e7eb;font-weight:700;">${form.services.join(", ")}</td></tr>
        <tr><td style="padding:10px;border-bottom:1px solid #e5e7eb;color:#6b7280;">Message</td><td style="padding:10px;border-bottom:1px solid #e5e7eb;font-weight:700;">${form.message || "-"}</td></tr>
      </table>

      <div style="margin-top:24px;padding:20px;border-radius:18px;background:#eef4ff;border:1px solid #dbeafe;">
        <div style="font-size:13px;color:#1d4ed8;font-weight:800;text-transform:uppercase;letter-spacing:.08em;">Automatic estimate range</div>
        <div style="font-size:34px;font-weight:900;letter-spacing:-.04em;margin-top:6px;">${estimateRange} / month</div>
      </div>
      `
    );

    const thanksHtml = emailShell(
      "Thank you for contacting us",
      `
      <p style="font-size:16px;line-height:1.7;margin:0;">Thank you for your interest in European Entry Hub.</p>
      <p style="font-size:16px;line-height:1.7;">We have received your request and our team will review your business requirements shortly.</p>
      <p style="font-size:16px;line-height:1.7;">Your preliminary quote range is being sent in a separate email, so you can easily return to it later.</p>
      `
    );

    const quoteHtml = emailShell(
      "Your preliminary fulfillment estimate",
      `
      <p style="font-size:16px;line-height:1.7;margin:0 0 20px;">Below is your automatically generated monthly estimate range.</p>

      <div style="padding:22px;border-radius:20px;background:#0f172a;color:#ffffff;margin-bottom:22px;">
        <div style="font-size:13px;color:#93c5fd;font-weight:800;text-transform:uppercase;letter-spacing:.08em;">Estimated monthly cost range</div>
        <div style="font-size:42px;font-weight:900;letter-spacing:-.05em;margin-top:8px;">${estimateRange}</div>
      </div>

      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr>
          <td style="padding:12px;border-bottom:1px solid #e5e7eb;color:#6b7280;">Storage</td>
          <td style="padding:12px;border-bottom:1px solid #e5e7eb;font-weight:800;text-align:right;">${quote.palletsMin}–${quote.palletsMax} pallets × ${eur(quote.palletPrice)} = ${eurRange(quote.storageTotalMin, quote.storageTotalMax)}</td>
        </tr>
        <tr>
          <td style="padding:12px;border-bottom:1px solid #e5e7eb;color:#6b7280;">Fulfillment</td>
          <td style="padding:12px;border-bottom:1px solid #e5e7eb;font-weight:800;text-align:right;">${quote.parcelsMin}–${quote.parcelsMax} parcels × ${eur(quote.parcelPrice)} = ${eurRange(quote.fulfillmentTotalMin, quote.fulfillmentTotalMax)}</td>
        </tr>
        <tr>
          <td style="padding:12px;border-bottom:1px solid #e5e7eb;color:#6b7280;">Returns handling estimate</td>
          <td style="padding:12px;border-bottom:1px solid #e5e7eb;font-weight:800;text-align:right;">${eurRange(quote.returnsTotalMin, quote.returnsTotalMax)}</td>
        </tr>
      </table>

      <div style="margin-top:22px;padding:18px;border-radius:18px;background:#ecfdf5;color:#047857;font-weight:800;line-height:1.6;">
        This is a preliminary range based on the lowest and highest volume inside the selected category. Final pricing depends on exact product dimensions, handling requirements and operational scope.
      </div>

      <div style="margin-top:14px;padding:18px;border-radius:18px;background:#eff6ff;color:#1d4ed8;font-weight:800;line-height:1.6;">
        No hidden warehouse costs. Carrier shipping costs are billed separately at actual carrier rates.
      </div>
      `
    );

    await transporter.sendMail({
      from,
      to: ownerEmail,
      subject: `New EEH Quote Request - ${form.companyName}`,
      html: ownerHtml,
    });

    await transporter.sendMail({
      from,
      to: form.email,
      subject: "Thank you for contacting European Entry Hub",
      html: thanksHtml,
    });

    await transporter.sendMail({
      from,
      to: form.email,
      subject: "Your Preliminary European Fulfillment Estimate",
      html: quoteHtml,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "Unable to send quote request" }, { status: 500 });
  }
}
