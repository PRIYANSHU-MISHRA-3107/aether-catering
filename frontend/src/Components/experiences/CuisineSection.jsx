'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const CUISINES = [
  {
    id: 1,
    title: 'Indian Heritage',
    metric: '300+ Regional Dishes',
    description:
      'Traditional recipes reimagined through refined presentation and modern culinary execution.',
    image: '/images/hero/cuisine-indian.jpg',
  },
  {
    id: 2,
    title: 'Asian Inspirations',
    metric: '50+ Signature Menus',
    description:
      'Pan-Asian flavors curated for luxury events, private dining experiences, and corporate hospitality.',
    image: '/images/hero/cuisine-asian.jpg',
  },
  {
    id: 3,
    title: 'Continental Classics',
    metric: '100+ Premium Recipes',
    description:
      'Elegant European and international cuisine designed for sophisticated celebrations.',
    image: '/images/hero/cuisine-continental.jpg',
  },
  {
    id: 4,
    title: 'Artisanal Desserts',
    metric: '80+ Dessert Concepts',
    description:
      'Luxury dessert experiences crafted with attention to flavor, texture, and presentation.',
    image: '/images/hero/cuisine-dessert.jpg',
  },
  {
    id: 5,
    title: 'Live Food Theatre',
    metric: '15+ Live Stations',
    description:
      'Interactive culinary stations that transform food preparation into guest entertainment.',
    image: '/images/hero/cuisine-live.jpg',
  },
];

export default function CuisineSection() {
  const [activeCuisine, setActiveCuisine] = useState(CUISINES[0]);

  return (
    <section className="bg-black text-white border-b border-zinc-900">
      <div className="grid lg:grid-cols-[35%_65%]">

        {/* LEFT SIDEBAR */}

        <div className="border-b lg:border-b-0 lg:border-r border-zinc-900 p-8 md:p-12 lg:p-16">

          <span className="text-[11px] uppercase tracking-[0.3em] text-amber-500 block mb-8">
            Culinary Expertise
          </span>

          <h2 className="text-5xl md:text-6xl leading-[0.9] tracking-tight font-light">
            Flavors
            <br />
            <span className="font-serif italic text-zinc-400">
              Without Borders
            </span>
          </h2>

          <p className="text-zinc-500 leading-relaxed mt-10 max-w-sm">
            Every menu is tailored to the occasion, balancing regional authenticity,
            contemporary presentation, and memorable guest experiences.
          </p>

          <div className="mt-16 pt-8 border-t border-zinc-900">

            <div className="mb-6">
              <p className="text-3xl font-light">500+</p>
              <p className="text-xs uppercase tracking-widest text-zinc-600 mt-2">
                Signature Dishes
              </p>
            </div>

            <div>
              <p className="text-3xl font-light">15+</p>
              <p className="text-xs uppercase tracking-widest text-zinc-600 mt-2">
                Cuisine Styles
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div className="grid lg:grid-cols-[40%_60%] min-h-[850px]">

          {/* LIST */}

          <div className="border-b lg:border-b-0 lg:border-r border-zinc-900">

            {CUISINES.map((cuisine) => {
              const isActive = cuisine.id === activeCuisine.id;

              return (
                <div
                  key={cuisine.id}
                  onMouseEnter={() => setActiveCuisine(cuisine)}
                  className={`
                    px-8
                    md:px-12
                    py-8
                    border-b
                    border-zinc-900
                    cursor-pointer
                    transition-all
                    duration-500
                    ${
                      isActive
                        ? 'opacity-100'
                        : 'opacity-40 hover:opacity-80'
                    }
                  `}
                >
                  <h3
                    className={`
                      text-2xl
                      md:text-3xl
                      tracking-tight
                      transition-colors
                      duration-500
                      ${
                        isActive
                          ? 'text-white'
                          : 'text-zinc-500'
                      }
                    `}
                  >
                    {cuisine.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* IMAGE PANEL */}

          <div className="relative overflow-hidden">

            <AnimatePresence mode="wait">

              <motion.div
                key={activeCuisine.image}
                initial={{
                  opacity: 0,
                  scale: 1.05,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="absolute inset-0"
              >
                <Image
                  src={activeCuisine.image}
                  alt={activeCuisine.title}
                  fill
                  sizes="60vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/10" />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
              </motion.div>

            </AnimatePresence>

            {/* CONTENT OVERLAY */}

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16 z-20">

              <motion.div
                key={activeCuisine.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                <span className="text-amber-500 text-xs uppercase tracking-[0.3em] block mb-4">
                  Featured Cuisine
                </span>

                <h3 className="text-4xl md:text-5xl tracking-tight mb-4">
                  {activeCuisine.title}
                </h3>

                <p className="text-xl text-white mb-6">
                  {activeCuisine.metric}
                </p>

                <p className="max-w-xl text-zinc-300 leading-relaxed">
                  {activeCuisine.description}
                </p>
              </motion.div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}