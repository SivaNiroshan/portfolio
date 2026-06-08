export default function Section({
  id,
  title,
  children,
}: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12">
      <h2 className="mb-6 text-2xl font-semibold text-[#16e6d8] md:text-3xl">{title}</h2>
      {children}
    </section>
  );
}
