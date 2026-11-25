"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const marks = ["Headquarters in Ras Al Khaimah", "Branch offices in Chennai and Port Harcourt", "Multidisciplinary engineering disciplines", "ISO 9001 · 14001 · 45001"];

export default function Hero() {
  const reduce = useReducedMotion();
  const item = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative isolate min-h-[calc(100svh-var(--header-offset))] overflow-hidden bg-navy text-white">
      <div className="hero-mask absolute inset-0">
        <Image
          src="/images/company/bg-25.jpg"
          alt="A coastal process plant, with pipe racks, columns and shipping offshore."
          fill
          priority
          quality={75}
          sizes="100vw"
          className="hero-photo object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071422] via-[#071422]/80 to-[#071422]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071422]/80 via-transparent to-[#071422]/30" />
      </div>
      <motion.div
        className="relative mx-auto flex min-h-[calc(100svh-var(--header-offset))] max-w-7xl flex-col justify-end px-5 pb-14 pt-12 md:pb-20"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.p variants={item} className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">
          Offshore · Refining · Energy
        </motion.p>
        <motion.h1 variants={item} className="mt-4 max-w-4xl font-display text-4xl leading-[1.08] text-white md:text-6xl">
          Engineering and execution support for industrial energy projects.
        </motion.h1>
        <motion.p variants={item} className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
          OTE Projects FZ LLC provides Project Management Consultancy (PMC), multidisciplinary engineering and EPC support for FPSO, offshore facilities, refinery modifications and energy infrastructure.
        </motion.p>
        <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-accent">
            Request an Enquiry
          </Link>
          <Link href="/projects" className="btn-ghost">
            View project experience
          </Link>
        </motion.div>
        <motion.ul variants={item} className="mt-12 grid gap-3 border-t border-white/15 pt-5 sm:grid-cols-2 lg:grid-cols-4">
          {marks.map((mark) => (
            <li key={mark} className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              {mark}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
