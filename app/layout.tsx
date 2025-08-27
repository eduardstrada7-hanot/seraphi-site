// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SERA PHI – Immersive Video Event Venue & Vibroacoustic Music Studio (Philadelphia)",
  description: "Holographic events & classes, vibroacoustic sound therapy, and superfood elixirs in Philadelphia."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{backgroundColor:'#000', color:'#fff'}}>{children}</body>
    </html>
  );
}
