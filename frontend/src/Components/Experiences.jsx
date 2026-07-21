'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const EXPERIENCES = [
  {
    id: '01',
    category: 'Celebrations',
    title: 'Wedding Experiences',
    description:
      'From destination weddings to intimate family gatherings, we orchestrate culinary experiences with precision, elegance, and flawless execution.',
    metric: '2500+',
    metricLabel: 'Guest Capacity',
    image: '/images/hero/Wedding.jpg',
    href: '/experiences/weddings',
  },
  {
    id: '02',
    category: 'Corporate',
    title: 'Corporate Summits',
    description:
      'Executive dining, conferences, launches, and leadership retreats executed with absolute punctuality and premium hospitality.',
    metric: '0 Min',
    metricLabel: 'Delay Tolerance',
    image: '/images/hero/corporate.jpg',
    href: '/experiences/corporate',
  },
  {
    id: '03',
    category: 'Private Dining',
    title: 'Chef Table Experiences',
    description:
      'Highly personalized menus crafted for intimate gatherings, villas, estates, and exclusive celebrations.',
    metric: '100%',
    metricLabel: 'Custom Menus',
    image: '/images/hero/private.jpg',
    href: '/experiences/private',
  },
  {
    id: '04',
    category: 'Festivals',
    title: 'Artisanal Food Festivals',
    description:
      'Large-scale food experiences designed to maintain consistency, speed, and unforgettable guest engagement.',
    metric: '15+',
    metricLabel: 'Live Stations',
    image: '/images/hero/festival.jpg',
    href: '/experiences/festival',
  },
];

const rowVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ExperienceShowcase() {
  return (
    <section className="bg-black text-white py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

        {/* GRID */}
        <div className="grid lg:grid-cols-[380px_1fr] gap-16">

          {/* STICKY SIDEBAR */}
          <aside className="lg:sticky lg:top-24 h-fit">

            <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 block mb-6">
              Our Expertise
            </span>

            <h2 className="text-5xl md:text-6xl xl:text-7xl leading-[0.9] tracking-tight font-light">
              Catering For
              <br />
              <span className="italic font-serif text-amber-500">
                Every Occasion
              </span>
            </h2>

            <p className="mt-8 text-zinc-400 leading-relaxed max-w-sm">
              Premium culinary experiences engineered for weddings,
              corporate events, private dining, and large-scale festivals.
            </p>

            {/* STATS */}
            <div className="mt-16 space-y-8">

              <div>
                <div className="text-4xl font-light">85K+</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500">
                  Guests Served
                </div>
              </div>

              <div>
                <div className="text-4xl font-light">15+</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500">
                  Years Experience
                </div>
              </div>

              <div>
                <div className="text-4xl font-light">500+</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500">
                  Events Executed
                </div>
              </div>

            </div>

            {/* QUOTE */}
            <div className="mt-16 border-l border-amber-500 pl-5">
              <p className="text-zinc-300 leading-relaxed">
                We don't simply serve food.
                We design experiences that become part of life's most important memories.
              </p>
            </div>

          </aside>

          {/* EXPERIENCE LIST */}
          <div className="border border-zinc-900 rounded-3xl  overflow-hidden">

            {EXPERIENCES.map((item, index) => (
              <motion.div
                key={item.id}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className={`group ${
                  index !== EXPERIENCES.length - 1
                    ? 'border-b border-zinc-900'
                    : ''
                }`}
              >
                <div className="grid lg:grid-cols-[100px_1fr_420px_80px] items-center min-h-[320px]">

                  {/* NUMBER */}
                  <div className="hidden lg:flex justify-center">
                    <span className="text-zinc-600 text-sm tracking-widest font-mono">
                      {item.id}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="px-8 py-10 lg:px-0 lg:pr-10">

                    <span className="text-xs uppercase tracking-[0.2em] text-amber-500 block mb-4">
                      {item.category}
                    </span>

                    <h3 className="text-3xl md:text-5xl tracking-tight leading-none mb-5">
                      {item.title}
                    </h3>

                    <p className="text-zinc-400 max-w-xl leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-8 flex items-end gap-6">

                      <div>
                        <div className="text-3xl font-light">
                          {item.metric}
                        </div>

                        <div className="text-xs uppercase tracking-widest text-zinc-500 mt-2">
                          {item.metricLabel}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* IMAGE */}
                 
                 
               {/* IMAGE */}
<div className="p-4">
  <div className="relative h-[350px] lg:h-[380px] rounded-3xl overflow-hidden">

    <Image
      src={item.image}
      alt={item.title}
      fill
      className="
        object-cover
        brightness-90
        transition-all
        duration-700
        ease-out
        group-hover:scale-105
        group-hover:brightness-100
      "
    />

    <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />

  </div>
</div>
              

                  {/* CTA */}
                  <div className="hidden lg:flex justify-center">

                    <Link
                      href={item.href}
                      className="
                        w-14
                        h-14
                        rounded-full
                        border
                        border-zinc-800
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-500
                        group-hover:bg-white
                        group-hover:text-black
                        group-hover:border-white
                      "
                    >
                      <ArrowUpRight
                        className="
                          w-5
                          h-5
                          transition-transform
                          duration-500
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      />
                    </Link>

                  </div>

                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}