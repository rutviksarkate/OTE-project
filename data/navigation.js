export const utilityLinks = [
  { href: "/careers-enquiries", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export const primaryNav = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    summary: "A UAE engineering company working across offshore facilities, refineries and energy infrastructure.",
    links: [
      { href: "/about", label: "Company Overview", text: "Who the company is, and where it works from." },
      { href: "/leadership", label: "Leadership", text: "General Manager – Projects." },
      { href: "/engineering-disciplines", label: "Our Expertise", text: "Multidisciplinary engineering disciplines, delivered as one set." },
      { href: "/quality-safety", label: "Quality & Safety", text: "ISO 9001, ISO 14001 and ISO 45001." },
    ],
  },
  {
    label: "Capabilities",
    href: "/capabilities",
    summary: "Engineering, procurement support, construction management and commissioning, held in one team.",
    links: [
      { href: "/engineering-epc", label: "Engineering", text: "BID engineering through detailed design, construction support and as-built." },
      { href: "/procurement", label: "Procurement", text: "Requisitions, datasheets and technical bid review." },
      { href: "/construction", label: "Construction", text: "Site engineering, interfaces and supervision." },
      { href: "/modular-solutions", label: "Modular Solutions", text: "Modules, skids and topside packages." },
      { href: "/fabrication", label: "Fabrication", text: "Steel definition, take-offs and yard interface." },
      { href: "/project-management", label: "Project Management", text: "Control of a scope through handover." },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    summary: "Offshore oil and gas, refining, petrochemicals and the infrastructure around an operating plant.",
    links: [
      { href: "/industries/oil-gas", label: "Oil & Gas", text: "Floating and fixed facilities." },
      { href: "/industries/petrochemicals", label: "Petrochemicals", text: "Process-plant engineering." },
      { href: "/industries/energy", label: "Energy", text: "Refining and plant utilities." },
      { href: "/industries/industrial-infrastructure", label: "Industrial Infrastructure", text: "Storage, transfer and facility steel." },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    summary: "Three scopes are published: FPSO Mystras, Hawax and Bushehr Refinery.",
    links: [
      { href: "/projects", label: "Project Portfolio", text: "FPSO Mystras, Hawax and Bushehr Refinery." },
      { href: "/project-experience", label: "Project Experience", text: "What each published scope covered." },
    ],
  },
  {
    label: "Resources",
    href: "/resources/presentation",
    summary: "The company presentation is issued on request. Public news is posted only when there is an announcement.",
    links: [
      { href: "/resources/presentation", label: "Company Presentation", text: "Request the current presentation." },
      { href: "/resources/news", label: "News & Updates", text: "Public announcements." },
    ],
  },
];

export function isCurrent(pathname, href) {
  if (!href) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function itemIsActive(pathname, item) {
  if (isCurrent(pathname, item.href)) return true;
  return item.links?.some((link) => isCurrent(pathname, link.href)) || false;
}
