"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    id: "testimonial-aarav-sharma",
    name: "Aarav Sharma",
    role: "Wedding Client",
    text: "The food quality and service were absolutely outstanding. Everything was perfectly organized and on time.",
    rating: 5,
  },
  {
    id: "testimonial-priya-nair",
    name: "Priya Nair",
    role: "Corporate Event",
    text: "Professional team and seamless execution. Our corporate event went smoothly without any issues.",
    rating: 5,
  },
  {
    id: "testimonial-rahul-verma",
    name: "Rahul Verma",
    role: "Private Party",
    text: "Amazing experience. The menu customization and taste exceeded our expectations completely.",
    rating: 5,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.215, 0.61, 0.355, 1],
      delay: index * 0.08,
    },
  }),
};

export default function Testimonials() {
  const sectionId = useId();

  return (
    <section 
      aria-labelledby={`heading-${sectionId}`} 
      className="bg-[#0B0B0B] text-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 
            id={`heading-${sectionId}`}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            What Our <span className="text-[#F97316]">Clients Say</span>
          </h2>
          <p className="mt-4 text-base text-gray-400 md:text-lg">
            Real feedback from clients who trusted us with their special events.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {TESTIMONIALS.map((item, index) => {
            const currentRating = item.rating ?? 5;
            
            return (
              <motion.blockquote
                key={item.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={cardVariants}
                className="group relative flex flex-col justify-between rounded-xl border border-[#2a2a2a] bg-[#161616] p-6 transition-colors duration-300 hover:border-[#F97316]/40"
              >
                <div>
                  <div 
                    aria-label={`Rated ${currentRating} out of 5 stars`} 
                    className="mb-4 flex items-center gap-1 text-[#F97316]"
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < currentRating ? "fill-current" : "text-gray-700"} 
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed text-gray-300 md:text-base">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>

                <footer className="mt-8 border-t border-[#2a2a2a] pt-4 group-hover:border-[#F97316]/20 transition-colors duration-300">
                  <cite className="not-italic font-semibold text-white block">
                    {item.name}
                  </cite>
                  <p className="text-xs text-gray-500 mt-0.5">{item.role}</p>
                </footer>
              </motion.blockquote>
            );
          })}
        </div>

      </div>
    </section>
  );
}