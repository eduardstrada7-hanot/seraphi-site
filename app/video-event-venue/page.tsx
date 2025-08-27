export default function VideoEventVenuePage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Video Event Venue</h1>
        <p className="text-xl mb-8">Immersive holographic events and experiences in Philadelphia.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Venue Features</h2>
            <ul className="space-y-2">
              <li>• Holographic projection systems</li>
              <li>• Immersive video environments</li>
              <li>• State-of-the-art sound system</li>
              <li>• Flexible event spaces</li>
              <li>• Professional lighting setup</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Perfect For</h2>
            <ul className="space-y-2">
              <li>• Corporate events</li>
              <li>• Art installations</li>
              <li>• Music performances</li>
              <li>• Film screenings</li>
              <li>• Private parties</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
