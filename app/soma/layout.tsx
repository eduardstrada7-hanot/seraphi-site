export const metadata = { title: "Soma – SERA PHI" };
import SomaNav from "@/components/SomaNav";
export default function SomaLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">Soma</h1>
      <p className="mt-2 text-white/80">Explore our somatic offerings.</p>
      <SomaNav />
      <div className="mt-8">{children}</div>
    </section>
  );
}
