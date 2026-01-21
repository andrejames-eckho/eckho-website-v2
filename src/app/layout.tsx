import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import DynamicBackground from "@/components/DynamicBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eckho Systems | Engineering the Extraordinary",
  description: "Eckho Systems is a premium custom software development company focused on human-centric engineering and technical authority.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-eckho-dark selection:bg-eckho-electric/30 selection:text-eckho-electric`}
      >
        <SmoothScroll>
          <DynamicBackground />
          <div className="relative z-10 min-h-screen">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
