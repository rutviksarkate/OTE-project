import ExecutionRail from "@/components/engineering/ExecutionRail";
import JsonLd from "@/components/ui/JsonLd";
import PageIntro from "@/components/ui/PageIntro";
import { buildMeta } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Project management", href: "/project-management" },
];

export const metadata = buildMeta({
  title: "Project management",
  description: "Project management consultancy and execution support from bid engineering through start-up, including Bushehr Refinery.",
  path: "/project-management",
});

export default function ProjectManagementPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow="Project management"
        title="Control of a scope, from the first diagram to handover."
        lede="Ten stages of execution support, from hazard identification to start-up. Bushehr Refinery is a consultancy engagement in this line of work."
        crumbs={crumbs}
      />
      <div className="mx-auto max-w-7xl px-5 py-16">
        <ExecutionRail />
      </div>
    </>
  );
}
