"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/engineering-epc", label: "Engineering" },
  { href: "/engineering-disciplines", label: "Disciplines" },
  { href: "/projects", label: "Projects" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/careers-enquiries", label: "Careers" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const bar = document.getElementById("scroll-progress");
      if (bar) bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-navy">
      <div id="scroll-progress" className="nav-progress absolute inset-x-0 top-0 h-0.5 bg-bronze" />
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Link href="/" className="inline-flex items-center" aria-label="OTE Projects home">
          <Image src="/images/brand/ote-projects-logo-light.png" alt="OTE Projects" width={168} height={46} priority className="h-9 w-auto" />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((link) => {
            const current = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link key={link.href} href={link.href} className="group relative text-sm text-white/85 transition-colors duration-500 hover:text-white">
                {link.label}
                <span className={`absolute -bottom-2 left-0 h-px bg-bronze transition-all duration-700 ease-out ${current ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            );
          })}
          <Link href="/contact" className="bg-bronze px-4 py-2 text-sm font-semibold text-navy transition hover:bg-white">
            Contact
          </Link>
        </nav>
        <button type="button" className="text-white lg:hidden" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open ? (
        <nav className="border-t border-white/10 px-5 py-4 lg:hidden" aria-label="Mobile">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="block border-b border-white/10 py-3 text-white">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="mt-4 inline-flex bg-bronze px-4 py-2 text-sm font-semibold text-navy">
            Contact
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
