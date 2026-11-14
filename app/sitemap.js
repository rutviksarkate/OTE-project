import { projects } from "@/data/projects";
import { company } from "@/lib/site";

const paths = [
  ["/", 1],
  ["/about", 0.8],
  ["/leadership", 0.6],
  ["/engineering-disciplines", 0.8],
  ["/quality-safety", 0.7],
  ["/certifications", 0.6],
  ["/vision-mission-values", 0.5],
  ["/capabilities", 0.9],
  ["/engineering-epc", 0.9],
  ["/procurement", 0.8],
  ["/construction", 0.8],
  ["/modular-solutions", 0.8],
  ["/fabrication", 0.8],
  ["/project-management", 0.8],
  ["/industries", 0.8],
  ["/industries/oil-gas", 0.7],
  ["/industries/petrochemicals", 0.7],
  ["/industries/energy", 0.7],
  ["/industries/industrial-infrastructure", 0.7],
  ["/projects", 0.9],
  ["/project-experience", 0.8],
  ["/resources/presentation", 0.5],
  ["/resources/news", 0.4],
  ["/contact", 0.8],
  ["/careers-enquiries", 0.4],
  ["/privacy-policy", 0.3],
];

export default function sitemap() {
  const lastModified = new Date("2026-11-15");
  const entries = paths.map(([path, priority]) => ({
    url: `${company.url}${path}`,
    lastModified,
    priority,
  }));
  projects.forEach((project) => {
    entries.push({
      url: `${company.url}/projects/${project.slug}`,
      lastModified,
      priority: 0.8,
    });
  });
  return entries;
}
