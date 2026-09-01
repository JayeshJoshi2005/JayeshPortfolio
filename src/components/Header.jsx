"use client";
import Link from "next/link";
export default function Header() {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
    window.location.reload();
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 72;
    const targetY =
      el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: Math.max(targetY, 0),
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-[2px] bg-transparent rounded-b-lg border-b border-white/5">
      <div className="flex items-center justify-between max-w-8xl mx-auto px-6 py-1">
        {/* Left - Name */}
        <button
          onClick={handleLogoClick}
          className="cursor-pointer"
          aria-label="Reload page and go to top"
        >
          <img src="/JJpng.png" alt="JJ Logo" className="w-20 flex items-center" />
        </button>

        {/* Middle - Nav */}
        <nav className="hidden md:flex gap-10 text-lg text-white font-light">
          {["home", "skills", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="capitalize tracking-wide hover:text-[#7F5AF0] transition-colors duration-200 cursor-pointer"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Right - Resume */}
        <Link
          href="/Jayesh_Joshi_Resume.pdf"
          target="_blank"
          className="flex items-center gap-2 text-lg text-white border border-white/20 px-4 py-2 rounded-full hover:bg-[#7F5AF0] hover:scale-105 transition-all duration-300 shadow-sm"
        >
          <img
            src="/cv.svg"
            alt="CV"
            className="w-5 h-5"
            style={{ filter: "invert(1)" }} // turns black SVG to white
          />
          Resume
        </Link>
      </div>
    </header>
  );
}
