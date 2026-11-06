"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const reduce = useReducedMotion();
  const item = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-navy text-white">
      <div className="hero-mask absolute inset-0">
        <Image
          src="/images/company/bg-25.jpg"
          alt="A coastal process plant."
          fill
          priority
          quality={100}
          sizes="100vw"
          className="hero-photo object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20" />
      </div>
      <motion.div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col justify-end px-5 pb-20 pt-16" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
        <motion.p variants={item} className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze">
          Offshore · Refinery · Energy
        </motion.p>
        <motion.h1 variants={item} className="mt-5 max-w-5xl font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
          Engineering complexity. Delivering confidence.
        </motion.h1>
        <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
          Integrated engineering, project management and execution support across offshore, oil and gas, refining and energy infrastructure.
        </motion.p>
        <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
          <Link href="/capabilities" className="bg-bronze px-5 py-3 text-sm font-semibold text-navy transition hover:bg-white">
            Explore our capabilities
          </Link>
          <Link href="/projects" className="border border-white/40 px-5 py-3 text-sm font-semibold transition hover:border-bronze hover:text-bronze">
            View project experience
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
