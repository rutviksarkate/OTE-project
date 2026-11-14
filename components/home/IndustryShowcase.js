import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { industries } from "@/data/industries";

export default function IndustryShowcase() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Industries</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight text-navy md:text-5xl">Where the engineering is applied.</h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {industries.map((item, index) => (
            <Reveal key={item.slug} delay={index * 80}>
              <Link href={item.href} className="group relative block min-h-72 overflow-hidden bg-navy text-white">
                <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071422] via-[#071422]/25 to-transparent" />
                <div className="relative flex min-h-72 flex-col justify-end p-7">
                  <h3 className="font-display text-3xl">{item.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">{item.text}</p>
                  <span className="mt-4 text-sm font-semibold text-bronze">View industry</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
