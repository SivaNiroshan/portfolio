import Image from "next/image";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero / Intro */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-[1.02fr_0.98fr] md:py-16">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex rounded-full border border-[#16e6d8]/40 bg-[#16e6d8]/10 px-4 py-2 text-sm font-medium text-[#9ffcf5]">
              Final-year CSE undergraduate
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Hi, I&apos;m <span className="text-[#16e6d8]">Niroshan</span>.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#FFEDDA]">
              I build clean, practical web applications with thoughtful frontends,
              reliable backends, and a focus on real product value.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-[#16e6d8] px-5 py-3 font-semibold text-[#111827] shadow-lg shadow-[#16e6d8]/20 transition hover:-translate-y-0.5 hover:bg-[#64fff5]"
              >
                View Projects
                <ArrowUpRight size={18} />
              </a>
              <a
                href="/Niroshan Sivarajah CV.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-lg border border-[#FFEDDA]/40 px-5 py-3 font-semibold text-[#FFEDDA] transition hover:border-[#FFEDDA] hover:bg-white/10"
              >
                Resume
                <Download size={18} />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-[#FFEDDA]">
              <a
                className="rounded-full border border-white/15 p-3 transition hover:border-[#16e6d8] hover:text-[#16e6d8]"
                href="https://www.linkedin.com/in/sivarajahniroshan/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                className="rounded-full border border-white/15 p-3 transition hover:border-[#16e6d8] hover:text-[#16e6d8]"
                href="https://github.com/SivaNiroshan"
                target="_blank"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                className="rounded-full border border-white/15 p-3 transition hover:border-[#16e6d8] hover:text-[#16e6d8]"
                href="mailto:sniroshan1964@gmail.com"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[320px] md:max-w-[360px]">
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-2 shadow-2xl shadow-black/30">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/img1.jpg"
                  alt="Niroshan Sivarajah"
                  fill
                  priority
                  sizes="(min-width: 768px) 360px, 86vw"
                  className="object-cover object-[56%_42%]"
                />
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/15 bg-[#111827]/85 p-3 backdrop-blur">
                <p className="text-sm font-semibold text-white">Niroshan Sivarajah</p>
                <p className="mt-1 text-xs text-[#FFEDDA]">
                  CSE undergraduate, University of Moratuwa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <p className="max-w-3xl text-[#FFEDDA]">
          I&apos;m passionate about building end-to-end solutions, from intuitive
          frontend interfaces to scalable backend systems. Skilled in Java,
          JavaScript, TypeScript, Spring Boot, Node.js, React, Next.js, MySQL, PostgreSQL,
          and MongoDB, I enjoy solving problems and working in Agile teams.
        </p>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Experience">
        <ul className="space-y-4">
          <li className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
              <strong className="text-white">ZeroBeta - Software Engineering Intern</strong>
              <span className="text-sm text-[#F2E9E4]">Dec 2024 - May 2025</span>
            </div>
            <p className="mt-2 text-sm text-[#FFEDDA]">
              Built and optimized backend features, including REST APIs, database
              schemas, and caching layers. Integrated monitoring, logging, and
              dashboard components to deliver real-time system insights.
              Collaborated in an Agile environment, contributing to scalable,
              production-ready services using Java, Spring Boot, MySQL, Redis,
              Docker, and CI/CD tools.
            </p>
          </li>
        </ul>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact">
        <div className="space-y-2 text-[#FFEDDA]">
          <p className="flex items-center gap-2">
            <Mail size={18} />
            <a className="underline" href="mailto:sniroshan1964@gmail.com">
              sniroshan1964@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-2">
            <FaLinkedin size={18} />
            <a
              className="underline"
              href="https://www.linkedin.com/in/sivarajah-niroshan-a3214a268/"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
          <p className="flex items-center gap-2">
            <FaGithub size={18} />
            <a
              className="underline"
              href="https://github.com/SivaNiroshan"
              target="_blank"
            >
              GitHub
            </a>
          </p>
          <p className="flex items-center gap-2">
            <FaWhatsapp size={18} />
            <a className="underline" href="tel:+94762200163">
              +94 76 2200163
            </a>
          </p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl p-4 text-center text-sm text-[#F2E9E4]">
          © {new Date().getFullYear()} Sivarajah Niroshan · Built with Next.js & Tailwind
        </div>
      </footer>
    </>
  );
}
