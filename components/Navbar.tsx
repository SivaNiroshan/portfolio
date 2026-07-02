export default function Navbar() {
  const link =
    "px-3 py-2 rounded-lg hover:bg-[#F2E9E4] hover:text-black transition text-[#FFEDDA]";
  return (
    <header className="sticky top-0 z-50 border-b border-[#16e6d8]/50 bg-[#17172b]/90 text-[#FFEDDA] backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 p-4">
        <a href="https://www.linkedin.com/in/sivarajah-niroshan-a3214a268/" className="font-bold text-lg text-[#FFEDDA]">
          Niroshan Sivarajah
        </a>
        <div className="hidden gap-2 text-sm md:flex">
          <a className={link} href="#about">About</a>
          <a className={link} href="#projects">Projects</a>
          <a className={link} href="#experience">Experience</a>
          <a className={link} href="#contact">Contact</a>
          <a
            className={link + " border border-[#FFEDDA]"}
            href="/Niroshan Sivarajah CV.pdf"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
