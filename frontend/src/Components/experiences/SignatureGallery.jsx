'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const GALLERY_IMAGES = [
  {
    id: 1,
    src: '/images/hero/chef.jpg',
    alt: 'Chef preparing signature dishes',
  },
  {
    id: 2,
    src: '/images/hero/plated-dish.jpg',
    alt: 'Luxury plated cuisine',
  },
  {
    id: 3,
    src: '/images/hero/event-dinner.jpg',
    alt: 'Luxury dining experience',
  },
  {
    id: 4,
    src: '/images/hero/dessert.jpg',
    alt: 'Premium dessert presentation',
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function SignatureGallery() {
  return (
    <section className="border-b border-zinc-900">
      <div className="grid lg:grid-cols-[32%_68%]">

        {/* LEFT PANEL */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            border-b
            lg:border-b-0
            lg:border-r
            border-zinc-900
            p-8
            md:p-12
            lg:p-16
            flex
            flex-col
            justify-between
            min-h-[700px]
          "
        >
          <div>

            <span
              className="
                text-[11px]
                uppercase
                tracking-[0.3em]
                text-amber-500
                block
                mb-8
              "
            >
              Our Signature
            </span>

            <h2
              className="
                text-5xl
                md:text-6xl
                xl:text-7xl
                leading-[0.9]
                tracking-tight
                font-light
              "
            >
              Culinary Art,
              <br />
              <span className="font-serif italic text-zinc-400">
                Timeless Memories
              </span>
            </h2>

            <p
              className="
                mt-8
                max-w-sm
                text-zinc-500
                leading-relaxed
              "
            >
              Every event we curate blends culinary craftsmanship,
              refined presentation, and seamless execution into an
              experience guests remember long after the final course.
            </p>
          </div>

          <div className="mt-16">

            <Link
              href="/gallery"
              className="
                group
                inline-flex
                items-center
                gap-3
                text-sm
                uppercase
                tracking-[0.2em]
                text-white
              "
            >
              Explore Gallery

              <ArrowUpRight
                className="
                  w-4
                  h-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>

            <div
              className="
                mt-12
                pt-8
                border-t
                border-zinc-900
              "
            >
              <div className="flex gap-10">

                <div>
                  <p className="text-3xl font-light">85K+</p>
                  <p className="text-xs uppercase tracking-widest text-zinc-600 mt-2">
                    Guests Served
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-light">15+</p>
                  <p className="text-xs uppercase tracking-widest text-zinc-600 mt-2">
                    Years
                  </p>
                </div>

              </div>
            </div>

          </div>
        </motion.div>

        {/* RIGHT IMAGE GRID */}

        <div className="grid grid-cols-2 gap-2 p-2 rounded-2xl">

          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              className="
                group
                relative
                aspect-square
                overflow-hidden
                border-zinc-900
              "
            >
              {/* Internal Borders */}

              {index === 0 && (
                <>
                  <div className="absolute right-0 top-0 h-full w-px bg-zinc-900 z-20" />
                  <div className="absolute left-0 bottom-0 w-full h-px bg-zinc-900 z-20" />
                </>
              )}

              {index === 1 && (
                <div className="absolute left-0 bottom-0 w-full h-px bg-zinc-900 z-20" />
              )}

              {index === 2 && (
                <div className="absolute right-0 top-0 h-full w-px bg-zinc-900 z-20" />
              )}

              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="50vw"
                className="
                  object-cover
                  transition-all
                  duration-1000
                  ease-out
                  group-hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-black/20
                  group-hover:bg-black/5
                  transition-all
                  duration-700
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/40
                  to-transparent
                "
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}