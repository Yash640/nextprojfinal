import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Originik — Wholesome Foods",
  description: "Discover dry fruits, millets, masale, snacks and pickles at Originik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[radial-gradient(ellipse_100%_60%_at_50%_-10%,rgba(16,185,129,0.12),transparent),radial-gradient(ellipse_80%_40%_at_10%_20%,rgba(34,197,94,0.08),transparent),radial-gradient(ellipse_80%_40%_at_90%_30%,rgba(6,182,212,0.08),transparent)]`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
