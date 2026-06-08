import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-[#16e6d8]/40 hover:shadow-xl hover:shadow-black/20">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-white">{p.title}</h3>
        <div className="flex gap-2 text-sm">
          {p.link && <a className="underline" href={p.link} target="_blank">Live</a>}
          {p.repo && <a className="underline" href={p.repo} target="_blank">Code</a>}
        </div>
      </div>
      <p className="mt-2 text-[#FFEDDA] text-sm">{p.description}</p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-[#FFEDDA]">
        {p.tech.map(t => (
          <span key={t} className="rounded-full border border-white/15 bg-white/[0.04] px-2 py-1">{t}</span>
        ))}
      </div>
    </div>
  );
}
