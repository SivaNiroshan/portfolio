export default function Navbar() {
  const link =
    "px-4 py-2 rounded-lg hover:bg-[#F2E9E4] hover:text-black transition text-[#FFEDDA]";
  return (
    <header className="sticky top-0 z-50 bg-[#222232] text-[#FFEDDA] border-b border-[#16e6d8]">
      <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
        <a href="https://www.linkedin.com/in/sivarajah-niroshan-a3214a268/" className="font-bold text-lg text-[#FFEDDA]">
          Sivarajah Niroshan
        </a>
        <div className="flex gap-2 text-sm">
          <a className={link} href="#about">About</a>
          <a className={link} href="#projects">Projects</a>
          <a className={link} href="#experience">Experience</a>
          <a className={link} href="#contact">Contact</a>
          <a
            className={link + " border border-[#FFEDDA]"}
            href="/Niroshan S_ CV.pdf"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
