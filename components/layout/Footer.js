import Image from "next/image";
import Link from "next/link";
import { offices, company } from "@/lib/site";

const links = [
  ["/about", "About"],
  ["/vision-mission-values", "Vision"],
  ["/engineering-epc", "Engineering"],
  ["/project-management", "Project management"],
  ["/projects", "Projects"],
  ["/capabilities", "Capabilities"],
  ["/quality-safety", "Quality and safety"],
  ["/certifications", "Certifications"],
  ["/careers-enquiries", "Careers"],
  ["/contact", "Contact"],
  ["/privacy-policy", "Privacy"],
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Image src="/images/brand/ote-projects-logo-light.png" alt="OTE Projects" width={168} height={46} className="h-9 w-auto" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
            {company.legalName} provides multidisciplinary engineering and project-execution support for offshore facilities, refinery modifications and energy infrastructure.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">Navigate</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/75">
            {links.map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">Offices</p>
          <ul className="mt-4 space-y-4 text-sm text-white/75">
            {offices.map((office) => (
              <li key={office.id}>
                <p className="text-white">{office.city}</p>
                <p>{office.country}</p>
              </li>
            ))}
          </ul>
          <a href={`mailto:${company.email}`} className="mt-5 inline-block text-sm text-bronze hover:text-white">
            {company.email}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-5 text-xs text-white/45">© 2026 {company.legalName}</p>
      </div>
    </footer>
  );
}
