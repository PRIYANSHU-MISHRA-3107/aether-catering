'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Initial Consultation',
    description:
      'Understanding your event goals, venue requirements, guest profile, and service expectations.',
    image: '/images/hero/process-consultation.jpg',
  },
  {
    number: '02',
    title: 'Menu Curation',
    description:
      'Designing a tailored culinary experience aligned with your event theme and audience.',
    image: '/images/hero/process-menu.jpg',
  },
  {
    number: '03',
    title: 'Operational Planning',
    description:
      'Coordinating staffing, logistics, service flow, kitchen infrastructure, and execution plans.',
    image: '/images/hero/process-planning.jpg',
  },
  {
    number: '04',
    title: 'Event Execution',
    description:
      'Delivering a seamless guest experience through precision service and flawless coordination.',
    image: '/images/hero/process-execution.jpg',
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(PROCESS_STEPS[0]);

  return (
    <section className="border-b border-zinc-900 bg-black text-white">
      <div className="grid lg:grid-cols-[35%_65%]">

        {/* LEFT SIDE */}

        <div className="border-b lg:border-b-0 lg:border-r border-zinc-900 p-8 md:p-12 lg:p-16">

          <span className="text-[11px] uppercase tracking-[0.3em] text-amber-500 block mb-8">
            Our Process
          </span>

          <h2 className="text-5xl md:text-6xl leading-[0.9] tracking-tight font-light mb-16">
            Four Simple
            <br />
            <span className="font-serif italic text-zinc-400">
              Steps
            </span>
          </h2>

          <div>

            {PROCESS_STEPS.map((step) => {
              const isActive = activeStep.number === step.number;

              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(step)}
                  className={`
                    border-b border-zinc-900
                    py-8
                    cursor-pointer
                    transition-all duration-500
                    ${
                      isActive
                        ? 'opacity-100'
                        : 'opacity-40 hover:opacity-80'
                    }
                  `}
                >
                  <span
                    className={`
                      text-xs
                      tracking-[0.3em]
                      block
                      mb-3
                      transition-colors
                      duration-500
                      ${
                        isActive
                          ? 'text-amber-500'
                          : 'text-zinc-600'
                      }
                    `}
                  >
                    {step.number}
                  </span>

                  <h3
                    className={`
                      text-xl
                      mb-3
                      transition-colors
                      duration-500
                      ${
                        isActive
                          ? 'text-white'
                          : 'text-zinc-400'
                      }
                    `}
                  >
                    {step.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-zinc-500 max-w-md">
                    {step.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="relative min-h-[700px] overflow-hidden">

          <AnimatePresence mode="wait">

            <motion.div
              key={activeStep.image}
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
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute inset-0"
            >
              <Image
                src={activeStep.image}
                alt={activeStep.title}
                fill
                priority
                sizes="65vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/15" />

              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10" />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />
            </motion.div>

          </AnimatePresence>

          {/* CONTENT OVERLAY */}

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16 z-20">

            <motion.div
              key={activeStep.title}
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
              className="max-w-xl"
            >
              <span className="text-[11px] uppercase tracking-[0.3em] text-amber-500 block mb-4">
                {activeStep.number}
              </span>

              <h3 className="text-4xl md:text-5xl tracking-tight mb-5">
                {activeStep.title}
              </h3>

              <p className="text-zinc-300 leading-relaxed">
                {activeStep.description}
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}