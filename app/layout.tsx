// app/layout.tsx
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "SERA PHI",
  description: "Immersive Video Event Venue & Vibroacoustic Music Studio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{background:'#000',color:'#fff'}} className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
