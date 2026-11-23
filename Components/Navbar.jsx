
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-black/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        
        <Link
          href="#home"
          className="text-2xl font-bold tracking-wide text-white"
        >
          Andile<span className="text-pink-500"></span>
        </Link>

      
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition duration-300 hover:text-pink-400"
            >
              {link.name}
            </Link>
          ))}
        </div>

        
        <Link
          href="#contact"
          className="hidden rounded-lg bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-pink-700 md:block"
        >
          Let&apos;s Talk
        </Link>

      </div>
    </nav>
  );
}
