import Lifecycle from "@/components/engineering/Lifecycle";
import JsonLd from "@/components/ui/JsonLd";
import PageIntro from "@/components/ui/PageIntro";
import { buildMeta } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Engineering", href: "/engineering-epc" },
];

export const metadata = buildMeta({
  title: "Engineering and execution support",
  description: "BID, Pre-FEED, FEED, detailed engineering, procurement support, construction, commissioning and start-up support for offshore and refinery projects.",
  path: "/engineering-epc",
});

export default function EngineeringPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={serviceSchema({ name: "Engineering and execution support", description: "Multidisciplinary engineering across the project lifecycle.", path: "/engineering-epc" })} />
      <PageIntro
        eyebrow="Engineering"
        title="From a bid through start-up."
        lede="Engineering and execution support across the life of a project, including procurement support, construction, commissioning and start-up."
        crumbs={crumbs}
      />
      <div className="mx-auto max-w-7xl px-5 py-16">
        <Lifecycle />
      </div>
    </>
  );
}
