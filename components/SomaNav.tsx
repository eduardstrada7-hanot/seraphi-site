"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function SomaNav() {
  const path = usePathname();
  const items = [
    { href: "/soma", label: "Overview" },
    { href: "/soma/sound-therapy", label: "Sound Therapy" },
    { href: "/soma/superfoods-elixirs", label: "Superfoods & Elixirs" },
  ];
  return (
    <nav className="mt-6 flex gap-3 text-sm">
      {items.map(i => {
        const active = path === i.href;
        return (
          <Link
            key={i.href}
            href={i.href}
            className={`px-3 py-1.5 rounded-full border ${active ? "bg-white text-black" : "bg-white/5 text-white/90 border-white/10 hover:bg-white/10"}`}
          >
            {i.label}
          </Link>
        );
      })}
    </nav>
  );
}
