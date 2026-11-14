import Link from "next/link";
import JsonLd from "@/components/ui/JsonLd";
import PageIntro from "@/components/ui/PageIntro";
import { company } from "@/lib/site";
import { buildMeta } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Company presentation", href: "/resources/presentation" },
];

const contents = [
  "Company profile and the offices in Ras Al Khaimah, Chennai and Port Harcourt",
  "Engineering disciplines and the path from BID engineering to start-up support",
  "Quality, environmental and occupational health and safety systems",
  "The published project scopes",
];

export const metadata = buildMeta({
  title: "Company presentation",
  description: "Request the OTE Projects company presentation. The file is issued by the company and is not posted on this website.",
  path: "/resources/presentation",
});

export default function PresentationPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow="Resources"
        title="Request the company presentation."
        lede="The official presentation is maintained by the company and sent on request. It is not available as a public download."
        crumbs={crumbs}
      />
      <article className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2">
        <div>
          <p className="leading-relaxed text-steel">
            Use the enquiry if you need the current edition for a bid, a partnership discussion or an introduction to the engineering team. Say who the presentation is for and which industry it should speak to.
          </p>
          <ol className="mt-8 space-y-4">
            {contents.map((item, index) => (
              <li key={item} className="grid grid-cols-[3rem_1fr] gap-3">
                <span className="font-display text-2xl text-bronze">{String(index + 1).padStart(2, "0")}</span>
                <span className="pt-1 leading-relaxed">{item}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="bg-navy p-8 text-white md:p-10">
          <h2 className="font-display text-3xl">Ask for the current edition</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            The form opens your email to {company.email}. Nothing is stored on the website.
          </p>
          <Link href="/contact" className="btn-accent mt-8">
            Request an Enquiry
          </Link>
        </div>
      </article>
    </>
  );
}
