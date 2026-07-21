'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const EVENTS = [
  {
    id: 1,
    title: 'Royal Heritage Wedding',
    guests: '1200+ Guests',
    location: 'Jaipur',
    image: '/images/hero/wedding-event.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'Corporate Leadership Summit',
    guests: '500+ Guests',
    location: 'New Delhi',
    image: '/images/hero/corporate-event.jpg',
  },
  {
    id: 3,
    title: 'Luxury Garden Reception',
    guests: '300+ Guests',
    location: 'Gurugram',
    image: '/images/hero/garden-event.jpg',
  },
];

export default function FeaturedEvents() {
  return (
    <section className="border-b border-zinc-900 bg-black text-white">

      <div className="grid lg:grid-cols-[35%_65%]">

        {/* LEFT SIDEBAR */}

        <div className="border-b lg:border-b-0 lg:border-r border-zinc-900 p-8 md:p-12 lg:p-16">

          <span className="text-[11px] uppercase tracking-[0.3em] text-amber-500 block mb-8">
            Featured Events
          </span>

          <h2 className="text-5xl md:text-6xl leading-[0.9] tracking-tight font-light">
            Moments
            <br />
            <span className="font-serif italic text-zinc-400">
              We're Proud Of
            </span>
          </h2>

          <p className="text-zinc-500 leading-relaxed mt-10 max-w-sm">
            Every event becomes a reflection of our commitment
            to exceptional hospitality, culinary excellence,
            and flawless execution.
          </p>

          <div className="mt-16 pt-8 border-t border-zinc-900">

            <div className="flex items-center justify-between mb-6">
              <span className="text-zinc-500 text-sm">
                Events Executed
              </span>

              <span className="text-2xl font-light">
                850+
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-zinc-500 text-sm">
                Guests Served
              </span>

              <span className="text-2xl font-light">
                85K+
              </span>
            </div>

          </div>
        </div>

        {/* RIGHT CONTENT */}

        <div className="p-8 md:p-12 lg:p-16">

          {/* FEATURED EVENT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="group cursor-pointer mb-8"
          >

            <div className="relative aspect-[16/9] overflow-hidden">

              <Image
                src={EVENTS[0].image}
                alt={EVENTS[0].title}
                fill
                sizes="100vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">

                <div className="flex justify-between items-end gap-6">

                  <div>
                    <p className="text-zinc-300 text-sm uppercase tracking-widest mb-3">
                      Featured Event
                    </p>

                    <h3 className="text-3xl md:text-5xl tracking-tight mb-3">
                      {EVENTS[0].title}
                    </h3>

                    <div className="flex gap-4 text-zinc-300 text-sm">
                      <span>{EVENTS[0].guests}</span>
                      <span>•</span>
                      <span>{EVENTS[0].location}</span>
                    </div>
                  </div>

                  <ArrowUpRight
                    className="
                      w-7
                      h-7
                      transition-transform
                      duration-500
                      group-hover:rotate-45
                    "
                  />

                </div>

              </div>

            </div>

          </motion.div>

          {/* SMALL EVENTS */}

          <div className="grid md:grid-cols-2 gap-6">

            {EVENTS.slice(1).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
                className="group cursor-pointer"
              >

                <div className="relative aspect-[4/3] overflow-hidden mb-5">

                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="50vw"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-black/25" />

                </div>

                <div className="flex justify-between items-start">

                  <div>
                    <h4 className="text-xl tracking-tight mb-2">
                      {event.title}
                    </h4>

                    <div className="flex gap-3 text-zinc-500 text-sm">
                      <span>{event.guests}</span>
                      <span>•</span>
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <ArrowUpRight
                    className="
                      w-5
                      h-5
                      text-zinc-500
                      transition-transform
                      duration-500
                      group-hover:rotate-45
                    "
                  />

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}