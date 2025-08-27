export default function SomaSoundTherapyPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Soma Sound Therapy</h1>
        <p className="text-xl mb-8">Vibro-acoustic sound & light therapy for healing and relaxation.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Therapy Benefits</h2>
            <ul className="space-y-2">
              <li>• Deep relaxation and stress relief</li>
              <li>• Improved sleep quality</li>
              <li>• Enhanced meditation experiences</li>
              <li>• Pain management support</li>
              <li>• Emotional balance and healing</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Session Types</h2>
            <ul className="space-y-2">
              <li>• Individual therapy sessions</li>
              <li>• Group meditation classes</li>
              <li>• Custom frequency programs</li>
              <li>• Guided sound journeys</li>
              <li>• Wellness workshops</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
