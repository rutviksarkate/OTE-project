import Link from "next/link";
import JsonLd from "@/components/ui/JsonLd";
import PageIntro from "@/components/ui/PageIntro";
import { buildMeta } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "News and updates", href: "/resources/news" },
];

export const metadata = buildMeta({
  title: "News and updates",
  description: "Public announcements from OTE Projects. No announcement is posted at this time.",
  path: "/resources/news",
});

export default function NewsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow="Resources"
        title="News and updates."
        lede="Public announcements will be posted here. There are none at this time."
        crumbs={crumbs}
      />
      <article className="mx-auto max-w-3xl px-5 py-16">
        <p className="leading-relaxed text-steel">
          The company does not publish a news archive on this website yet. For a current introduction, request the company presentation or write with a project enquiry.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/resources/presentation" className="btn-accent">
            Company presentation
          </Link>
          <Link href="/contact" className="inline-flex items-center text-sm font-semibold text-navy underline decoration-bronze underline-offset-4">
            Contact
          </Link>
        </div>
      </article>
    </>
  );
}
