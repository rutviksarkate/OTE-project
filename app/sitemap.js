import { projects } from "@/data/projects";
import { company } from "@/lib/site";

const paths = [
  ["/", 1],
  ["/engineering-epc", 0.9],
  ["/engineering-disciplines", 0.9],
  ["/project-management", 0.9],
  ["/industries", 0.9],
  ["/capabilities", 0.9],
  ["/quality-safety", 0.9],
  ["/certifications", 0.9],
  ["/contact", 0.9],
  ["/projects", 0.8],
  ["/about", 0.6],
  ["/vision-mission-values", 0.6],
  ["/careers-enquiries", 0.4],
  ["/privacy-policy", 0.3],
];

export default function sitemap() {
  const lastModified = new Date("2026-11-06");
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
