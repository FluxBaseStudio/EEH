import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      company,
      message,
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields",
        },
        {
          status: 400,
        }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: "office@eu-entryhub.com",
      subject: `New Contact Form - ${company || name}`,
      html: `
        <h2>New Contact Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "-"}</p>

        <hr />

        <p>${message}</p>
      `,
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Thank you for contacting European Entry Hub",
      html: `
        <h2>Thank you for contacting EEH</h2>

        <p>We have received your message.</p>

        <p>
          Our team will review your request and contact you shortly.
        </p>

        <p>
          European Entry Hub
        </p>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Server error",
      },
      {
        status: 500,
      }
    );
  }
}