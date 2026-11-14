import Image from "next/image";
import Link from "next/link";
import { primaryNav } from "@/data/navigation";
import { capabilities } from "@/data/capabilities";
import { industries } from "@/data/industries";
import { company, offices } from "@/lib/site";

const about = primaryNav.find((item) => item.label === "About Us");

export default function Footer() {
  return (
    <footer className="bg-[#071422] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Image src="/images/brand/ote-projects-logo-light.png" alt="OTE Projects" width={168} height={46} className="h-9 w-auto" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
            {company.legalName} provides multidisciplinary engineering, project management, procurement support, construction management and commissioning for offshore facilities, refinery modifications and energy infrastructure.
          </p>
        </div>
        <div className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {about.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/vision-mission-values" className="transition-colors hover:text-white">
                Vision
              </Link>
            </li>
            <li>
              <Link href="/careers-enquiries" className="transition-colors hover:text-white">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">Capabilities</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {capabilities.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">Industries</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {industries.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-4 text-sm text-white/75">
            {offices.map((office) => (
              <p key={office.id}>
                <span className="text-white">{office.city}</span>
                <span className="text-white/50"> · {office.country}</span>
              </p>
            ))}
            <a href={`mailto:${company.email}`} className="inline-block text-bronze transition-colors hover:text-white">
              {company.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {company.legalName}</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy policy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
