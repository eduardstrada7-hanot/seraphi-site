import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">SERA PHI</h1>
          <p className="text-xl md:text-2xl opacity-80 mb-8 max-w-2xl mx-auto">
            Immersive Video Event Venue & Vibroacoustic Music Studio
          </p>
          <div className="space-x-4">
            <Link 
              href="/booking" 
              className="inline-block px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors"
            >
              Book Now
            </Link>
            <Link 
              href="/our-story" 
              className="inline-block px-8 py-4 border border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Music Studio */}
            <div className="text-center p-8 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-2xl font-semibold mb-4">Music Studio</h3>
              <p className="text-white/70 mb-6">
                Professional vibroacoustic recording and mixing studio with state-of-the-art equipment.
              </p>
              <Link 
                href="/music-studio" 
                className="inline-block px-6 py-3 border border-white text-white rounded-full hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Video Event Venue */}
            <div className="text-center p-8 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-2xl font-semibold mb-4">Video Event Venue</h3>
              <p className="text-white/70 mb-6">
                Immersive holographic events and experiences with cutting-edge projection technology.
              </p>
              <Link 
                href="/video-event-venue" 
                className="inline-block px-6 py-3 border border-white text-white rounded-full hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Sound Therapy */}
            <div className="text-center p-8 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-2xl font-semibold mb-4">Soma Sound Therapy</h3>
              <p className="text-white/70 mb-6">
                Vibro-acoustic sound & light therapy for healing, relaxation, and wellness.
              </p>
              <Link 
                href="/soma-sound-therapy" 
                className="inline-block px-6 py-3 border border-white text-white rounded-full hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience SERA PHI?</h2>
          <p className="text-xl text-white/70 mb-8">
            Book your session today and discover the intersection of technology, art, and wellness.
          </p>
          <Link 
            href="/booking" 
            className="inline-block px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors"
          >
            Book Your Session
          </Link>
        </div>
      </section>
    </main>
  );
}
