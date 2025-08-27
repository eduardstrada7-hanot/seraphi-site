export default function MusicStudioPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Music Studio</h1>
        <p className="text-xl mb-8">Professional vibroacoustic recording and mixing studio.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Studio Features</h2>
            <ul className="space-y-2">
              <li>• Vibroacoustic sound system</li>
              <li>• Professional recording equipment</li>
              <li>• Acoustic treatment</li>
              <li>• Mixing and mastering services</li>
              <li>• Instrument rentals available</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Services</h2>
            <ul className="space-y-2">
              <li>• Recording sessions</li>
              <li>• Mixing and mastering</li>
              <li>• Sound design</li>
              <li>• Audio post-production</li>
              <li>• Music production consulting</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
