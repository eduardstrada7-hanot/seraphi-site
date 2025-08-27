import Image from "next/image";
export const metadata = { title: "Soma – Superfoods & Elixirs" };
export default function Page() {
  return (
    <article className="prose prose-invert max-w-3xl">
      <Image src="/images/elixirbar.jpeg" alt="Superfoods & Elixirs" width={1200} height={800} className="rounded-2xl border border-white/10 mb-6" />
      <h2>Superfoods & Elixirs</h2>
      <p>Herbal elixirs and nutrient-dense refreshments to fuel creativity and recovery.</p>
      <ul>
        <li>Seasonal herbal blends</li>
        <li>Adaptogens & nootropics</li>
        <li>Non-alcoholic bar for events</li>
      </ul>
    </article>
  );
}
