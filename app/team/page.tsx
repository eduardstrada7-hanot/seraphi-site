export default function TeamPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Our Team</h1>
        <p className="text-xl mb-8">Meet the passionate individuals behind SERA PHI.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Founder & CEO</h3>
            <p className="text-white/70">Visionary leader and creative director</p>
          </div>
          
          <div className="text-center">
            <div className="w-32 h-32 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🎵</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Studio Director</h3>
            <p className="text-white/70">Audio engineer and sound therapist</p>
          </div>
          
          <div className="text-center">
            <div className="w-32 h-32 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🎬</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Technical Director</h3>
            <p className="text-white/70">Immersive technology specialist</p>
          </div>
          
          <div className="text-center">
            <div className="w-32 h-32 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Wellness Coordinator</h3>
            <p className="text-white/70">Sound therapy and wellness expert</p>
          </div>
          
          <div className="text-center">
            <div className="w-32 h-32 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Creative Director</h3>
            <p className="text-white/70">Visual artist and event designer</p>
          </div>
          
          <div className="text-center">
            <div className="w-32 h-32 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">💼</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Operations Manager</h3>
            <p className="text-white/70">Venue and event coordination</p>
          </div>
        </div>
      </div>
    </main>
  );
}
