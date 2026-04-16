import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aiden Moffat | Official Website | BTCC Race Driver",
  description: "Official website of Aiden Moffat, BTCC race car driver for Power Maxed Racing. Specialized one-on-one race training, group sessions, and 2026 season updates.",
};

import GlobalEliteEffects from "@/components/GlobalEliteEffects";
import { RaceModeProvider } from "@/components/RaceModeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
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
