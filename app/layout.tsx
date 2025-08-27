// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LogoBanner from "./components/LogoBanner";

export const metadata: Metadata = {
  title: "SERA PHI – Immersive Video Event Venue & Vibroacoustic Music Studio (Philadelphia)",
  description: "Holographic events & classes, vibroacoustic sound therapy, and superfood elixirs in Philadelphia."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white">
        <LogoBanner />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
