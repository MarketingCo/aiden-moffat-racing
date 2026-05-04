import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: [
    { path: "./fonts/geist-latin.woff2", weight: "100 900", style: "normal" },
    { path: "./fonts/geist-latin-ext.woff2", weight: "100 900", style: "normal" },
  ],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aidenmoffat.co.uk'),
  title: "Aiden Moffat | Official Website | BTCC Race Driver",
  description:
    "Official website of Aiden Moffat, BTCC racing driver for Power Maxed Racing. Experience professional race training, one-on-one coaching, group track days, and follow the 2026 Kwik Fit British Touring Car Championship season.",
  keywords: [
    "Aiden Moffat",
    "BTCC",
    "British Touring Car Championship",
    "Power Maxed Racing",
    "Audi S3",
    "race driver",
    "race training",
    "motorsport coaching",
    "track day",
    "LKQ Euro Car Parts",
  ],
  authors: [{ name: "Aiden Moffat Racing" }],
  creator: "Aiden Moffat Racing",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://aiden-moffat-racing.vercel.app",
    siteName: "Aiden Moffat Racing",
    title: "Aiden Moffat | BTCC Race Driver & Motorsport Coach",
    description:
      "Follow Aiden Moffat's 2026 BTCC campaign with Power Maxed Racing and book professional race training with one of British motorsport's most experienced drivers.",
    images: [
      {
        url: "/images/Aiden_Trophy.jpg",
        width: 1200,
        height: 630,
        alt: "Aiden Moffat — BTCC Racing Driver",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aiden Moffat | BTCC Race Driver",
    description:
      "Official website of Aiden Moffat. 13 BTCC seasons, Power Maxed Racing, Audi S3 Saloon. Book professional race training today.",
    creator: "@AidenMoffat16",
    images: ["/images/Aiden_Trophy.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://aiden-moffat-racing.vercel.app",
  },
};

import GlobalEliteEffects from "@/components/GlobalEliteEffects";
import { RaceModeProvider } from "@/components/RaceModeContext";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Aiden Moffat Racing",
  description:
    "Professional motorsport coaching and race training services offered by BTCC driver Aiden Moffat. One-on-one sessions, group track days, and advanced simulator training.",
  url: "https://aiden-moffat-racing.vercel.app",
  email: "info@aidenmoffat.com",
  founder: {
    "@type": "Person",
    name: "Aiden Moffat",
    jobTitle: "BTCC Racing Driver & Motorsport Coach",
    sameAs: [
      "https://aiden-moffat-racing.vercel.app/AidenMoffat16",
      "https://aiden-moffat-racing.vercel.app/aidenmoffat16",
      "https://aiden-moffat-racing.vercel.app/AidenMoffatRacing",
    ],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
    addressRegion: "United Kingdom",
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  priceRange: "££",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Race Training Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "One-on-One Racing Coaching",
          description:
            "Personalised high-performance coaching with full data breakdown and live radio coaching.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Group Track Days",
          description:
            "Dynamic group training sessions with race craft tactics and pit-stop workshops.",
          price: "450",
          priceCurrency: "GBP",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Advanced Simulator Training",
          description:
            "Professional-grade simulator sessions for circuit familiarisation and off-season preparation.",
          price: "150",
          priceCurrency: "GBP",
          unitCode: "HUR",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black">
        <RaceModeProvider>
          <GlobalEliteEffects>
            {children}
          </GlobalEliteEffects>
        </RaceModeProvider>
      </body>
    </html>
  );
}
