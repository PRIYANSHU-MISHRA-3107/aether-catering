"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";

const timeline = [
  {
    year: "2010",
    title: "Our Journey Began",
    description:
      "Started as a small family catering service with a passion for authentic food and warm hospitality.",
  },
  {
    year: "2015",
    title: "Growing Trust",
    description:
      "Successfully catered more than 100 events and expanded our team of professional chefs.",
  },
  {
    year: "2020",
    title: "Expansion",
    description:
      "Introduced premium buffet setups, live counters, and customized catering solutions.",
  },
  {
    year: "Today",
    title: "Creating Memories",
    description:
      "Proudly serving weddings, corporate events, birthdays, and festivals with excellence.",
  },
];

export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-[#090909] py-28">
      {/* Background Ambience Underlay */}
      <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Component Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-orange-400">
            <BookOpen size={16} />
            Our Story
          </div>
          <h2 className="mt-6 text-5xl font-bold text-white">
            From Passion <span className="block text-orange-500">To Perfection</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
            Every successful event begins with great food and genuine hospitality.
            Our journey has always been about bringing people together through
            memorable dining experiences.
          </p>
        </motion.div>

        {/* Core Media / Data Section Layout Split */}
        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
          
          {/* Left Column Layout: Graphic Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[32px] bg-orange-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px]">
              <Image
                src="/images/about/our-story.jpg"
                alt="Our Story"
                width={700}
                height={850}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column Layout: Animated Dynamic Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Structural Vertical Segment Timeline Node Line */}
            <div className="absolute left-[22px] top-0 h-full w-[2px] bg-gradient-to-b from-orange-500 via-orange-400/50 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                  }}
                  className="relative flex gap-8"
                >
                  {/* Timeline Dot Anchor Marker */}
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-4 border-[#090909] bg-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.45)]">
                    <div className="h-3 w-3 rounded-full bg-white" />
                  </div>

                  {/* Context Metadata Info Display Box */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex-1 rounded-3xl border border-white/10 bg-[#111111] p-7 transition-all duration-300 hover:border-orange-500/30"
                  >
                    <span className="inline-flex rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
                      {item.year}
                    </span>
                    <h3 className="mt-5 text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 leading-8 text-gray-400">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Nested High Conversion Target Block */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16 rounded-[28px] border border-orange-500/20 bg-gradient-to-r from-orange-500/10 via-[#111111] to-orange-500/10 p-8"
            >
              <h3 className="text-3xl font-bold text-white">
                And Our Story Continues...
              </h3>
              <p className="mt-4 leading-8 text-gray-400">
                Every celebration adds a new chapter to our journey. We remain
                committed to serving exceptional food, warm hospitality, and
                unforgettable experiences for every client we have the privilege
                to serve.
              </p>
              <button className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30">
                Discover Our Services
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Decorative Outer Layout Shading Elements */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
    </section>
  );
}