import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="rounded-2xl border p-5 hover:shadow transition">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{p.title}</h3>
        <div className="flex gap-2 text-sm">
          {p.link && <a className="underline" href={p.link} target="_blank">Live</a>}
          {p.repo && <a className="underline" href={p.repo} target="_blank">Code</a>}
        </div>
      </div>
      <p className="mt-2 text-[#FFEDDA] text-sm">{p.description}</p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-[#FFEDDA]">
        {p.tech.map(t => (
          <span key={t} className="rounded-full border px-2 py-1">{t}</span>
        ))}
      </div>
    </div>
  );
}
