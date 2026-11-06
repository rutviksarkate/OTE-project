import Image from "next/image";
import Link from "next/link";
import DisciplineStudio from "@/components/home/DisciplineStudio";
import Hero from "@/components/home/Hero";
import Lifecycle from "@/components/engineering/Lifecycle";
import Reveal from "@/components/ui/Reveal";
import { certifications } from "@/data/certifications";
import { projects } from "@/data/projects";

const ribbon = ["FPSO topsides", "Refinery brownfield", "Pre-FEED", "FEED", "Detailed engineering", "Commissioning", "Naval architecture", "Technical safety"];
import { buildMeta } from "@/lib/metadata";

export const metadata = buildMeta({
  title: "Offshore Engineering and Project Management",
  description:
    "OTE Projects provides multidisciplinary engineering, project management and execution support for offshore facilities, refinery modifications and energy infrastructure. Headquarters in Ras Al Khaimah.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="marquee overflow-hidden border-y border-line bg-white py-4">
        <div className="marquee-track flex w-max gap-10">
          {[...ribbon, ...ribbon].map((item, index) => (
            <span key={`${item}-${index}`} className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
              {item}
              <span className="ml-10 text-bronze">/</span>
            </span>
          ))}
        </div>
      </div>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">The company</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-navy md:text-5xl">An engineering team for offshore and refinery work that has to stay understandable.</h2>
          <p className="mt-6 text-lg leading-relaxed text-steel">
            OTE Projects FZ LLC provides multidisciplinary engineering, project management, procurement support, construction management and commissioning support for offshore facilities, brownfield refinery modifications and the utilities that keep a plant running.
          </p>
          <Link href="/about" className="mt-6 inline-flex text-sm font-semibold text-navy underline decoration-bronze underline-offset-4">
            About the company
          </Link>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src="/images/company/blog-2.jpg"
              alt="Piping and valves on an offshore deck."
              fill
              quality={100}
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="border-y border-line bg-navy text-white">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          {[
            ["01", "Projects", ["Fixed platforms, topsides, jackets and MOPUs", "FPSO, FSO, FSRU and FPU", "Offshore and onshore brownfield", "Modular onshore facilities", "Refinery brownfield"]],
            ["02", "Disciplines", ["Process, mechanical and piping", "Structural and electrical", "Instrumentation and control", "Technical safety", "Naval architecture and marine"]],
            ["03", "Activities", ["Pre-FEED, FEED, detailed and as-built", "Surveys, reviews and adequacy checks", "Refurbishment advisory", "Construction management and procurement assistance", "Commissioning, start-up and operations support"]],
          ].map(([number, title, items]) => (
            <article key={title} className="border-white/10 px-8 py-14 md:border-l first:md:border-l-0">
              <p className="font-display text-5xl text-bronze">{number}</p>
              <h2 className="mt-6 font-display text-3xl">{title}</h2>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/75">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">Lifecycle</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl text-navy md:text-5xl">From a bid to start-up, in one engineering line.</h2>
          </Reveal>
          <div className="mt-12">
            <Lifecycle />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">Disciplines</p>
          <h2 className="mt-3 font-display text-4xl text-navy md:text-5xl">Eight disciplines. One coordinated set.</h2>
        </Reveal>
        <div className="mt-10">
          <DisciplineStudio />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">Published work</p>
          <h2 className="mt-3 font-display text-4xl text-navy md:text-5xl">Selected project experience.</h2>
        </div>
        {projects.map((project, index) => (
          <article key={project.slug} className="border-t border-white/10 bg-navy text-white">
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-2">
              {project.image ? (
                <div className={`relative aspect-[16/10] overflow-hidden ${index % 2 ? "lg:order-2" : ""}`}>
                  <Image src={project.image} alt={project.imageAlt} fill quality={100} sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
                </div>
              ) : null}
              <div className={project.image ? "" : "lg:col-span-2"}>
                <p className="text-xs uppercase tracking-[0.2em] text-bronze">{project.category}</p>
                <h3 className="mt-4 font-display text-5xl">{project.name}</h3>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">{project.summary}</p>
                <Link href={`/projects/${project.slug}`} className="mt-8 inline-flex text-sm font-semibold text-bronze">
                  Open the case
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src="/images/company/fpso.jpg"
              alt="A floating production unit at sea, with a flare burning from the boom."
              fill
              quality={100}
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">Offshore</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Floating and fixed facilities, engineered as one interface.</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              Offshore work covers FPSO, FSO, FSRU and FLNG-related engineering, mobile offshore production units, platforms, topsides and marine interfaces.
            </p>
            <Link href="/industries" className="mt-6 inline-flex text-sm font-semibold text-bronze">
              Industries
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2">
          <div className="lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">Refinery</p>
            <h2 className="mt-3 font-display text-4xl text-navy">Brownfield work on plants that stay in service.</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-steel">
              Refinery work covers modifications, turnaround engineering and project management consultancy. Bushehr Refinery is a consultancy engagement in this line of work.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden lg:order-2">
            <Image
              src="/images/company/blog-4.jpg"
              alt="A process vessel and flare on an industrial deck."
              fill
              quality={100}
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-[280px_1fr]">
          <div className="photo-frame relative mx-auto h-[360px] w-[260px] overflow-hidden">
            <Image src="/images/leadership/rajesh-m-sarkate.jpg" alt="Rajesh M. Sarkate, General Manager – Projects." fill quality={100} sizes="280px" className="object-cover object-top" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">Leadership</p>
            <h2 className="mt-3 font-display text-4xl text-navy md:text-5xl">Rajesh M. Sarkate</h2>
            <p className="mt-2 text-steel">General Manager – Projects</p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel">
              More than 29 years leading EPC, greenfield and brownfield work, from FEED through commissioning, across offshore, FPSO, FLNG, refining and petrochemicals. Companies named in that career are prior experience. They are not a client list of OTE Projects.
            </p>
            <Link href="/about" className="mt-6 inline-flex text-sm font-semibold text-navy underline decoration-bronze underline-offset-4">
              Read the profile
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">Management systems</p>
        <h2 className="mt-3 font-display text-4xl text-navy">Certified quality, environment and safety.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {certifications.map((item) => (
            <article key={item.slug} className="border-t-2 border-bronze bg-white p-6">
              <h3 className="font-display text-2xl text-navy">{item.standard}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.14em] text-steel">{item.system}</p>
              <p className="mt-6 font-display text-lg text-bronze">{item.number}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-24 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl font-display text-5xl leading-none">Let&apos;s engineer what comes next.</h2>
          <Link href="/contact" className="bg-bronze px-6 py-3 text-sm font-semibold text-navy">
            Discuss your project
          </Link>
        </div>
      </section>
    </>
  );
}
