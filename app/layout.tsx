import type { Metadata, Viewport } from "next";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";

const siteUrl = "https://europeanentryhub.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#041426",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "European Entry Hub | Fulfillment & Logistics in Poland",
    template: "%s | European Entry Hub",
  },
  description:
    "European Entry Hub provides warehousing, fulfillment, pick & pack, shipping and returns handling in Central Poland for manufacturers selling across Europe.",
  applicationName: "European Entry Hub",
  authors: [{ name: "European Entry Hub" }],
  creator: "European Entry Hub",
  publisher: "European Entry Hub",
  keywords: [
    "European fulfillment",
    "fulfillment Poland",
    "warehouse Poland",
    "logistics Europe",
    "pick and pack Europe",
    "EU fulfillment center",
    "returns handling Europe",
    "warehouse for Chinese manufacturers",
    "European Entry Hub",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "European Entry Hub | Fulfillment & Logistics in Poland",
    description:
      "A logistics and fulfillment base in Central Poland for international manufacturers selling in Europe.",
    url: siteUrl,
    siteName: "European Entry Hub",
    images: [
      {
        url: "/images/eeh-hero-bg.png.png",
        width: 1200,
        height: 630,
        alt: "European Entry Hub logistics and fulfillment in Poland",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "European Entry Hub | Fulfillment & Logistics in Poland",
    description:
      "Warehousing, fulfillment and delivery operations from Central Poland across Europe.",
    images: ["/images/eeh-hero-bg.png.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "European Entry Hub",
  url: siteUrl,
  email: "contact@europeanentryhub.com",
  areaServed: "Europe",
};

const logisticsSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "European Entry Hub",
  url: siteUrl,
  email: "contact@europeanentryhub.com",
  image: `${siteUrl}/images/eeh-hero-bg.png.png`,
  description:
    "Warehousing, fulfillment, pick and pack, shipping and returns handling in Central Poland for manufacturers selling across Europe.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Łódź Region",
    addressCountry: "PL",
  },
  areaServed: [
    {
      "@type": "Place",
      name: "European Union",
    },
    {
      "@type": "Place",
      name: "Europe",
    },
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Warehousing" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fulfillment" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pick and pack" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Returns handling" } },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <CookieBanner />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(logisticsSchema),
          }}
        />
      </body>
    </html>
  );
}
