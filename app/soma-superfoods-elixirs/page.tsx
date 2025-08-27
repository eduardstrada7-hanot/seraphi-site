export default function SomaSuperfoodsElixirsPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Soma Superfoods & Elixirs</h1>
        <p className="text-xl mb-8">Nutrient-rich superfood elixirs for vitality and wellness.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Elixir Benefits</h2>
            <ul className="space-y-2">
              <li>• Enhanced energy and vitality</li>
              <li>• Immune system support</li>
              <li>• Mental clarity and focus</li>
              <li>• Natural detoxification</li>
              <li>• Holistic wellness support</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Elixirs</h2>
            <ul className="space-y-2">
              <li>• Vitality Boost Blend</li>
              <li>• Mind Clarity Formula</li>
              <li>• Immune Defense Mix</li>
              <li>• Detox Cleanse Elixir</li>
              <li>• Custom formulations</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
