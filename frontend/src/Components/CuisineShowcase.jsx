'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CUISINES = [
  {
    id: '01',
    title: 'Indian Heritage',
    description:
      'Traditional regional flavors reimagined through modern presentation and large-scale execution.',
    image:
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1400&q=80',
  },
  {
    id: '02',
    title: 'Continental Dining',
    description:
      'Elegant plated experiences crafted for luxury weddings, private events, and executive gatherings.',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?w=1400&q=80',
  },
  {
    id: '03',
    title: 'Asian Collection',
    description:
      'Live sushi counters, wok stations, and curated East Asian dining experiences.',
    image:
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1400&q=80',
  },
  {
    id: '04',
    title: 'Artisan Desserts',
    description:
      'Luxury dessert architecture featuring handcrafted pastries and modern sweet creations.',
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1400&q=80',
  },
];

export default function CuisineShowcase() {
  return (
    <section className="bg-black text-white py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Header */}

        <div className="mb-24">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-500 block mb-4">
            Culinary Collection
          </span>

          <h2 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight font-light">
            Signature
            <br />
            <span className="italic font-serif">
              Cuisine Experiences
            </span>
          </h2>
        </div>

        {/* Cards */}

        <div className="space-y-12">
          {CUISINES.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              <div className="relative h-[70vh] rounded-[32px] overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    brightness-50
                    transition-all
                    duration-1000
                    group-hover:scale-105
                    group-hover:brightness-75
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

                <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col justify-between">

                  <div className="flex justify-between items-start">
                    <span className="text-zinc-500 font-mono text-sm">
                      {item.id}
                    </span>

                    <ArrowUpRight
                      className="
                        w-8
                        h-8
                        text-white
                        transition-transform
                        duration-500
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </div>

                  <div className="max-w-3xl">
                    <h3 className="text-4xl md:text-6xl lg:text-7xl tracking-tight leading-none mb-6">
                      {item.title}
                    </h3>

                    <p className="text-zinc-300 text-lg max-w-xl leading-relaxed">
                      {item.description}
                    </p>

                    <Link
                      href="/menu"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        mt-8
                        text-sm
                        uppercase
                        tracking-widest
                        text-amber-500
                      "
                    >
                      Explore Collection
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}