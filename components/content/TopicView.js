import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/ui/JsonLd";
import PageIntro from "@/components/ui/PageIntro";
import { breadcrumbSchema } from "@/lib/schema";

export default function TopicView({ topic }) {
  const crumbs = [
    { name: "Home", href: "/" },
    topic.parent,
    { name: topic.title, href: topic.path },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro eyebrow={topic.eyebrow} title={topic.headline} lede={topic.lede} crumbs={crumbs} />
      <article className="mx-auto grid max-w-7xl items-start gap-12 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          {topic.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-base leading-relaxed text-steel first:mt-0 md:text-lg">
              {paragraph}
            </p>
          ))}
          <ul className="mt-8 space-y-3">
            {topic.points.map((point) => (
              <li key={point} className="border-l-2 border-bronze pl-4 text-sm leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn-accent mt-10">
            Request an Enquiry
          </Link>
        </div>
        <figure>
          <div className="media-frame relative aspect-[4/3] overflow-hidden bg-navy">
            <Image src={topic.image} alt={topic.imageAlt} fill sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
          </div>
        </figure>
      </article>
    </>
  );
}
