import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jakub Petergáč / Fullstack Developer",
  description: "Let's work together & grow together.",
  icons: {
    icon: "./logo.ico",
    apple: "./logo.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@petergacjakub",
    creator: "@petergacjakub",
    title: "Jakub Petergáč / Fullstack Developer",
    description: "Let's work together & grow together.",
    images: [
      {
        url: "./thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Jakub Petergáč",
      },
    ],
  },
  openGraph: {
    siteName: "Jakub Petergáč",
    title: "Jakub Petergáč / Fullstack Developer",
    type: "website",
    description: "Let's work together & grow together.",
    images: [
      {
        url: "./thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Jakub Petergáč",
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
