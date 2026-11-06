import ProjectIndex from "@/components/projects/ProjectIndex";
import JsonLd from "@/components/ui/JsonLd";
import PageIntro from "@/components/ui/PageIntro";
import { buildMeta } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
];

export const metadata = buildMeta({
  title: "Projects",
  description: "Project experience: FPSO Mystras, Hawax and Bushehr Refinery.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow="Projects"
        title="Project experience."
        lede="FPSO Mystras, Hawax and Bushehr Refinery."
        crumbs={crumbs}
      />
      <div className="mx-auto max-w-7xl px-5 py-16">
        <ProjectIndex />
      </div>
    </>
  );
}
