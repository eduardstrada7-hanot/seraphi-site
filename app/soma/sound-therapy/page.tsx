import Image from "next/image";
export const metadata = { title: "Soma – Sound Therapy" };
export default function Page() {
  return (
    <article className="prose prose-invert max-w-3xl">
      <Image src="/images/singer.jpg" alt="Sound therapy" width={1200} height={800} className="rounded-2xl border border-white/10 mb-6" />
      <h2>Sound Therapy</h2>
      <p>Vibroacoustic sound & light sessions designed to relax the nervous system and restore balance.</p>
      <ul>
        <li>Personalized session (60–90 min)</li>
        <li>Breath, tone & guided rest</li>
        <li>Optional vibroacoustic stage</li>
      </ul>
    </article>
  );
}
