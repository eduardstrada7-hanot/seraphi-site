import Image from "next/image";
import Link from "next/link";

export default function LogoBanner() {
  return (
    <div className="bg-gradient-to-b from-violet-900/40 to-transparent border-b border-white/10">
      <div className="container mx-auto flex justify-center py-3">
        <Link href="/" aria-label="Go to SERA PHI home">
          <Image
            src="/images/seraphi-logo.png"
            alt="SERA PHI logo"
            width={975}
            height={180}
            priority
            className="h-12 w-auto md:h-16"
          />
        </Link>
      </div>
    </div>
  );
}
