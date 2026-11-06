import JsonLd from "@/components/ui/JsonLd";
import PageIntro from "@/components/ui/PageIntro";
import { company } from "@/lib/site";
import { buildMeta } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Privacy", href: "/privacy-policy" },
];

export const metadata = buildMeta({
  title: "Privacy policy",
  description: "How OTE Projects handles project enquiries and career applications.",
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro eyebrow="Privacy" title="How enquiries are handled." lede="The details you send are used to reply to you." crumbs={crumbs} />
      <article className="mx-auto max-w-3xl space-y-4 px-5 py-16 leading-relaxed text-steel">
        <p>A project enquiry opens Gmail with your name, email, organisation and message, addressed to {company.email}. An application opens Gmail with a short message to the same address. Attach a CV before you send it.</p>
        <p>The website does not receive or keep a copy. You send the message from your own Gmail account.</p>
      </article>
    </>
  );
}
