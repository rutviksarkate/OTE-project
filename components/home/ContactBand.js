import Image from "next/image";
import Link from "next/link";

export default function ContactBand() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <Image
        src="/images/library/pumpjack.jpg"
        alt="A beam pump in an oil field. Context photograph, not an OTE project."
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#071422]/80" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-5 py-20 md:flex-row md:items-end md:justify-between lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Contact</p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">Bring a scope, a site and the discipline you need.</h2>
          <p className="mt-5 max-w-xl text-white/75">Write to the Ras Al Khaimah headquarters. Enquiries open in your email application. The site does not store the message.</p>
        </div>
        <Link href="/contact" className="btn-accent shrink-0">
          Contact OTE Projects
        </Link>
      </div>
    </section>
  );
}
