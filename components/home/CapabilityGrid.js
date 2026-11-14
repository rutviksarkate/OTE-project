import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { capabilities } from "@/data/capabilities";

export default function CapabilityGrid({ heading = true }) {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
        {heading ? (
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Capabilities</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight text-navy md:text-5xl">Engineering through to start-up, in one team.</h2>
          </Reveal>
        ) : null}
        <div className={`grid gap-5 md:grid-cols-2 xl:grid-cols-3 ${heading ? "mt-12" : ""}`}>
          {capabilities.map((item, index) => (
            <Reveal key={item.slug} delay={index * 70}>
              <article className="group flex h-full flex-col bg-white">
                <div className="media-frame relative aspect-[16/10] overflow-hidden">
                  <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl text-navy">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-steel">{item.text}</p>
                  <Link href={item.href} className="mt-5 inline-flex text-sm font-semibold text-navy underline decoration-bronze underline-offset-4">
                    Read more
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
