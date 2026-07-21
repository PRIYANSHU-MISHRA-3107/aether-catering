'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background Image */}

      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full w-full"
        >
          <Image
            src="/images/final-cta.jpg"
            alt="Luxury Catering Experience"
            fill
            priority={false}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Overlays */}

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Content */}

      <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 md:px-12 lg:px-24">

        <div className="max-w-7xl">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 block text-xs uppercase tracking-[0.35em] text-amber-500"
          >
            Let's Create Something Remarkable
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-6xl text-5xl font-light leading-[0.9] tracking-tight md:text-7xl lg:text-[8rem]"
          >
            Ready To Create
            <br />
            <span className="font-serif italic text-zinc-300">
              Something Extraordinary?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
            className="mt-8 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg"
          >
            Whether it's an intimate gathering, a luxury wedding,
            or a large-scale corporate celebration, our team is ready
            to craft an unforgettable culinary experience.
          </motion.p>

          {/* CTA */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="mt-14"
          >
            <Link
              href="/contact"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/15
                bg-white
                px-8
                py-5
                text-sm
                font-medium
                uppercase
                tracking-[0.15em]
                text-black
                transition-all
                duration-500
                hover:scale-[1.03]
              "
            >
              Plan Your Event

              <ArrowUpRight
                className="
                  h-5
                  w-5
                  transition-transform
                  duration-500
                  group-hover:rotate-45
                "
              />
            </Link>
          </motion.div>
        </div>

        {/* Bottom Strip */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.6,
            duration: 1,
          }}
          className="
            absolute
            bottom-0
            left-0
            right-0
            border-t
            border-white/10
          "
        >
          <div className="flex flex-col gap-6 px-6 py-8 text-xs uppercase tracking-[0.25em] text-zinc-500 md:flex-row md:items-center md:justify-between md:px-12 lg:px-24">

            <span>Delhi NCR</span>

            <span>Luxury Catering Experiences</span>

            <span>Established 2010</span>

          </div>
        </motion.div>

      </div>
    </section>
  );
}