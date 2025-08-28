import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/80 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-white/70">
              <p>1234 Immersive Way</p>
              <p>Philadelphia, PA 19123</p>
              <p>Phone: (215) 555-0123</p>
              <p>Email: info@seraphi.org</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/music-studio" className="block text-white/70 hover:text-white transition-colors">
                Music Studio
              </Link>
              <Link href="/video-event-venue" className="block text-white/70 hover:text-white transition-colors">
                Video Event Venue
              </Link>
              <Link href="/soma-sound-therapy" className="block text-white/70 hover:text-white transition-colors">
                Sound Therapy
              </Link>
              <Link href="/booking" className="block text-white/70 hover:text-white transition-colors">
                Book Now
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link href="/terms-of-use" className="block text-white/70 hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link href="/privacy-policy" className="block text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
          <p>&copy; 2024 SERA PHI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
