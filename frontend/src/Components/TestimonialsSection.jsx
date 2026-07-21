'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'The food was exceptional and the execution was flawless from start to finish. Our guests are still talking about it months later.',
    name: 'Rajesh Mehta',
    role: 'Royal Heritage Wedding',
    location: 'Jaipur',
  },
  {
    id: 2,
    quote:
      'Professional, organized, and incredibly detail-oriented. The team handled every challenge seamlessly and exceeded expectations.',
    name: 'Priya Sharma',
    role: 'Corporate Leadership Summit',
    location: 'New Delhi',
  },
  {
    id: 3,
    quote:
      'Every dish felt curated, every interaction felt personal, and every moment reflected true hospitality excellence.',
    name: 'Aman Kapoor',
    role: 'Private Dining Experience',
    location: 'Gurugram',
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-black text-white border-b border-zinc-900">
      <div className="grid lg:grid-cols-[35%_65%]">

        {/* LEFT SIDEBAR */}

        <div className="border-b lg:border-b-0 lg:border-r border-zinc-900 p-8 md:p-12 lg:p-16">

          <span className="text-[11px] uppercase tracking-[0.3em] text-amber-500 block mb-8">
            Client Stories
          </span>

          <h2 className="text-5xl md:text-6xl leading-[0.9] tracking-tight font-light">
            Trusted
            <br />
            <span className="font-serif italic text-zinc-400">
              Experiences
            </span>
          </h2>

          <p className="text-zinc-500 leading-relaxed mt-10 max-w-sm">
            Every celebration leaves behind stories, memories,
            and experiences that continue long after the final course.
          </p>

          <div className="mt-16 pt-8 border-t border-zinc-900">

            <div className="mb-6">
              <p className="text-3xl font-light">850+</p>
              <p className="text-xs uppercase tracking-widest text-zinc-600 mt-2">
                Events Delivered
              </p>
            </div>

            <div>
              <p className="text-3xl font-light">98%</p>
              <p className="text-xs uppercase tracking-widest text-zinc-600 mt-2">
                Client Retention
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div className="relative flex flex-col justify-between min-h-[700px] p-8 md:p-12 lg:p-16">

          <AnimatePresence mode="wait">

            <motion.div
              key={TESTIMONIALS[active].id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-4xl"
            >

              {/* Stars */}

              <div className="flex gap-2 mb-10">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-amber-500 text-amber-500"
                  />
                ))}
              </div>

              {/* Quote */}

              <blockquote className="text-3xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight font-light">
                “{TESTIMONIALS[active].quote}”
              </blockquote>

              {/* Author */}

              <div className="mt-12">

                <h3 className="text-xl text-white">
                  {TESTIMONIALS[active].name}
                </h3>

                <p className="text-zinc-500 mt-2">
                  {TESTIMONIALS[active].role}
                </p>

                <p className="text-zinc-600 text-sm mt-1">
                  {TESTIMONIALS[active].location}
                </p>

              </div>

            </motion.div>

          </AnimatePresence>

          {/* NAVIGATION */}

          <div className="flex items-center justify-between pt-10 border-t border-zinc-900 mt-16">

            <div className="flex gap-4">

              {TESTIMONIALS.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActive(index)}
                  className={`
                    w-12 h-12
                    border
                    text-sm
                    transition-all
                    duration-300
                    ${
                      active === index
                        ? 'border-amber-500 text-white'
                        : 'border-zinc-800 text-zinc-500 hover:border-zinc-600'
                    }
                  `}
                >
                  0{index + 1}
                </button>
              ))}

            </div>

            <div className="text-zinc-600 text-sm tracking-widest uppercase">
              Client Testimonials
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}