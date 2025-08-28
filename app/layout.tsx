import "./globals.css";
export const metadata = { title: "SERA PHI", description: "Immersive Video Event Venue & Vibroacoustic Music Studio" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang='en'><body style={{background:'#000',color:'#fff'}}>{children}</body></html>);
}
