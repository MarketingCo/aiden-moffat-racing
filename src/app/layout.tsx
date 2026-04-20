import type { Metadata } from "next";
import { Rajdhani, Geist_Mono } from "next/font/google";
import "./globals.css";

const headingFont = Rajdhani({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const bodyFont = Geist_Mono({
  variable: "--font-body",
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
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#1A1A1A] font-body">
        <RaceModeProvider>
          <GlobalEliteEffects>
            {children}
          </GlobalEliteEffects>
        </RaceModeProvider>
      </body>
    </html>
  );
}
