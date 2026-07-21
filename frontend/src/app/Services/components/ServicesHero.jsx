'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

const SERVICES = [
  {
    title: 'Wedding Experiences',
    subtitle: 'Luxury celebrations',
    href: '/services/wedding',
  },
  {
    title: 'Corporate Events',
    subtitle: 'Executive hospitality',
    href: '/services/corporate',
  },
  {
    title: 'Private Dining',
    subtitle: "Chef's table",
    href: '/services/private-dining',
  },
  {
    title: 'Food Festivals',
    subtitle: 'Large-scale catering',
    href: '/services/festivals',
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function ServicesHero() {
  return (
    <section className="relative h-screen min-h-[900px] overflow-hidden bg-black text-white">

      {/* Background Image */}

      <Image
        src="/images/services/service-hero.jpg"
        alt="Luxury Catering"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

      {/* Grid Texture */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* Main Content */}

      <div className="relative z-20 h-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

        <div className="flex items-center h-[78vh]">

          <div className="max-w-3xl">

            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-block mb-8 text-xs uppercase tracking-[0.35em] text-amber-500"
            >
              Premium Catering Services
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.15}
              className="
                text-6xl
                md:text-7xl
                xl:text-[7rem]
                leading-[0.88]
                tracking-tight
                font-light
              "
            >
              Crafting
              <br />

              <span className="italic font-serif text-amber-400">
                Extraordinary
              </span>

              <br />

              Experiences
            </motion.h1>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="w-28 h-px bg-amber-500 my-10"
            />

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.45}
              className="
                max-w-xl
                text-lg
                text-zinc-300
                leading-relaxed
              "
            >
              Every celebration deserves more than exceptional food.
              We create immersive culinary experiences through bespoke menus,
              refined presentation, and flawless hospitality designed around
              your vision.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.6}
              className="flex flex-wrap gap-5 mt-14"
            >

              <Link
                href="/contact"
                className="
                  group
                  bg-amber-500
                  text-black
                  px-8
                  py-4
                  uppercase
                  tracking-[0.18em]
                  text-sm
                  font-semibold
                  flex
                  items-center
                  gap-3
                  transition-all
                  duration-500
                  hover:bg-white
                "
              >
                Book Consultation

                <ArrowRight
                  className="
                    w-4
                    h-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

            

            </motion.div>

          </div>

        </div>

        {/* Bottom Service Navigation */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
          }}
          className="
            border-t
            border-white/10
            pt-10
          "
        >

           <div className="grid md:grid-cols-4 gap-8">

            {SERVICES.map((service) => (

              <Link
                key={service.title}
                href={service.href}
              >

                <p className="text-white text-lg font-light">
                  {service.title}
                </p>

                <div className="flex items-center justify-between mt-3">

                  <span className="text-sm text-zinc-400">
                    {service.subtitle}
                  </span>

                </div>

              </Link>

            ))}

          </div> 

        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          gap-3
          text-zinc-400
        "
      >

        <span className="text-[11px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <ArrowDown className="w-4 h-4 animate-bounce" />

      </motion.div>

    </section>
  );
}