import Image from "next/image";
import Link from "next/link";
export default function SomaIndex() {
  const cards = [
    { href: "/soma/sound-therapy", title: "Sound Therapy", img: "/images/piano.jpg", desc: "Vibroacoustic sound & light sessions." },
    { href: "/soma/superfoods-elixirs", title: "Superfoods & Elixirs", img: "/images/elixirbar.jpeg", desc: "High-vibe drinks and herbal blends." },
  ];
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {cards.map(c => (
        <Link key={c.href} href={c.href} className="group rounded-2xl overflow-hidden border border-white/10">
          <div className="relative h-48">
            <Image src={c.img} alt={c.title} fill className="object-cover group-hover:scale-105 transition-transform" />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold">{c.title}</h2>
            <p className="text-white/70 mt-1">{c.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
