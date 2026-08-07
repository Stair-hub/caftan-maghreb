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

import { Amiri } from "next/font/google";
const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["latin", "arabic"],
  variable: "--font-amiri",
});

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GradientBackground } from "@/components/ui/sunset";

export const metadata: Metadata = {
  title: "Atelier Tifawin | Créations Orientales",
  description: "L'élégance maghrébine réinventée. Caftans, Djellabas, Jabadors modernes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${amiri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-transparent">
        <div className="fixed inset-0 -z-50">
          <GradientBackground className="w-full h-full" />
        </div>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
