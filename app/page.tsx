import Image from "next/image";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Mail} from "lucide-react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero / Intro */}
      <section className="mx-auto max-w-6xl px-4 pt-20 pb-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">Hi, I&apos;m Niroshan 👋</h1>
          <p className="mt-4 text-[#FFEDDA]">
            Final-year CSE undergraduate at the University of Moratuwa and aspiring software engineer. Former intern at ZeroBeta.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-4 py-2 rounded-lg border">View Projects</a>
            <a href="mailto:sniroshan1964@gmail.com" className="px-4 py-2 rounded-lg bg-[#16e6d8] text-black">Hire Me</a>
          </div>
        </div>
        <div className="justify-self-center">
          <Image src="/my-photo.jpg" alt="Niroshan photo" width={220} height={220}  />
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <p className="max-w-3xl text-[#FFEDDA]">
          I&apos;m passionate about building end-to-end solutions — from intuitive frontend interfaces to scalable backend systems. Skilled in Java, JavaScript, TypeScript, Spring Boot, Node.js, React, Next.js, MySQL, and MongoDB, I enjoy solving problems and working in Agile teams..
        </p>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(p => <ProjectCard key={p.title} p={p} />)}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Experience">
        <ul className="space-y-4">
          <li className="rounded-2xl border p-5">
            <div className="flex justify-between">
              <strong>ZeroBeta — Software Engineering Intern</strong>
              <span className="text-sm text-[#F2E9E4]">Dec 2024 - May 2025</span>
            </div>
            <p className="mt-2 text-sm text-[#FFEDDA]">
              Developed and integrated polygon smart contract APIs, enhancing platform functionality and user experience.
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
            <a
              className="underline"
              href="tel:+94762200163"
            >
              +94 76 2200163
            </a>
          </p>
        </div>
      </Section>


      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl p-4 text-sm text-[#F2E9E4] text-center">
          © {new Date().getFullYear()} Sivarajah Niroshan· Built with Next.js & Tailwind
        </div>
      </footer>
    </>
  );
}
