"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { company } from "@/lib/site";
import { isCurrent, itemIsActive, primaryNav, utilityLinks } from "@/data/navigation";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState(null);
  const [mobileSection, setMobileSection] = useState(null);
  const headerRef = useRef(null);
  const baseId = useId();

  useEffect(() => {
    setOpen(false);
    setPanel(null);
    setMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") {
        setPanel(null);
        setOpen(false);
      }
    }
    function onPointer(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) setPanel(null);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  function showPanel(label) {
    setPanel(label);
  }

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      <div className="hidden border-b border-white/10 bg-[#071422] text-white/75 md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5 text-[11px] font-semibold uppercase tracking-[0.16em]">
          <p>Ras Al Khaimah · Chennai · Port Harcourt</p>
          <div className="flex items-center gap-5">
            <a href={`mailto:${company.email}`} className="transition-colors hover:text-white">
              {company.email}
            </a>
            {utilityLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="relative border-b border-white/10 bg-navy/95 text-white backdrop-blur-md" onMouseLeave={() => setPanel(null)}>
        <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-6 px-5">
          <Link href="/" className="inline-flex shrink-0 items-center" aria-label="OTE Projects home">
            <Image src="/images/brand/ote-projects-logo-light.png" alt="OTE Projects" width={168} height={46} priority className="h-9 w-auto" />
          </Link>
          <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
            {primaryNav.map((item) => {
              const active = itemIsActive(pathname, item);
              const expanded = panel === item.label;
              if (!item.links) {
                return (
                  <Link key={item.label} href={item.href} className={`nav-link ${active ? "is-active" : ""}`}>
                    {item.label}
                  </Link>
                );
              }
              return (
                <div key={item.label} className="static" onMouseEnter={() => showPanel(item.label)}>
                  <button
                    type="button"
                    className={`nav-link inline-flex items-center gap-1 ${active || expanded ? "is-active" : ""}`}
                    aria-expanded={expanded}
                    aria-haspopup="true"
                    aria-controls={`${baseId}-${item.label}`}
                    onFocus={() => showPanel(item.label)}
                    onClick={() => setPanel(expanded ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  <div id={`${baseId}-${item.label}`} className={`mega-panel ${expanded ? "is-open" : ""}`}>
                    <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 lg:grid-cols-[16rem_1fr]">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">{item.label}</p>
                        <p className="mt-3 text-sm leading-relaxed text-steel">{item.summary}</p>
                        <Link href={item.href} className="mt-5 inline-flex text-sm font-semibold text-navy underline decoration-bronze underline-offset-4">
                          Overview
                        </Link>
                      </div>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {item.links.map((link) => (
                          <li key={link.href}>
                            <Link href={link.href} className={`mega-link ${isCurrent(pathname, link.href) ? "is-active" : ""}`} onClick={() => setPanel(null)}>
                              <span className="block text-sm font-semibold text-navy">{link.label}</span>
                              <span className="mt-1 block text-sm leading-relaxed text-steel">{link.text}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/contact" className="btn-accent hidden sm:inline-flex">
              Request an Enquiry
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center text-white xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {open ? (
        <nav id="mobile-nav" className="max-h-[calc(100svh-4.25rem)] overflow-y-auto border-t border-white/10 bg-navy px-5 py-4 xl:hidden" aria-label="Mobile">
          {primaryNav.map((item) =>
            item.links ? (
              <div key={item.label} className="border-b border-white/10">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold text-white"
                  aria-expanded={mobileSection === item.label}
                  onClick={() => setMobileSection((current) => (current === item.label ? null : item.label))}
                >
                  {item.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileSection === item.label ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
                {mobileSection === item.label ? (
                  <div className="grid gap-1 pb-3">
                    <Link href={item.href} className="py-2 text-sm text-white/80">
                      Overview
                    </Link>
                    {item.links.map((link) => (
                      <Link key={link.href} href={link.href} className="py-2 text-sm text-white/80">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link key={item.label} href={item.href} className="block border-b border-white/10 py-3 text-sm font-semibold text-white">
                {item.label}
              </Link>
            ),
          )}
          <Link href="/contact" className="btn-accent mt-4">
            Request an Enquiry
          </Link>
          <a href={`mailto:${company.email}`} className="mt-4 block text-sm text-white/70">
            {company.email}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
