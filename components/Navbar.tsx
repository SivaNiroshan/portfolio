export default function Navbar() {
  const link = "px-4 py-2 rounded-lg hover:bg-gray-100 transition";
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
        <a href="#" className="font-bold text-lg">Sivarajah Niroshan</a>
        <div className="flex gap-2 text-sm">
          <a className={link} href="#about">About</a>
          <a className={link} href="#projects">Projects</a>
          <a className={link} href="#experience">Experience</a>
          <a className={link} href="#contact">Contact</a>
          <a className={link + " border"} href="/Niroshan S_ CV.pdf" target="_blank">Resume</a>
        </div>
      </nav>
    </header>
  );
}
