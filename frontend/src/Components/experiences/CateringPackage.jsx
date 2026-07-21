"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Check, ArrowRight, HeartHandshake } from "lucide-react";

// ============================================================================
// Configuration Data
// ============================================================================
const featuredPackage = {
  title: "Wedding Catering",
  image: "/images/menu/packages/wedding-package.jpg",
  guests: "200 - 3000 Guests",
  description:
    "Create unforgettable wedding celebrations with premium buffet arrangements, live food counters, elegant presentation and professional service staff.",
  features: [
    "Luxury Buffet Setup",
    "Multiple Live Counters",
    "Professional Service Team",
    "Premium Dessert Station",
    "Customized Wedding Menu",
    "Elegant Food Presentation",
  ],
};

const packages = [
  {
    title: "Corporate Events",
    image: "/images/menu/packages/corporate-package.jpg",
    guests: "50 - 1000 Guests",
    tag: "Business",
  },
  {
    title: "Birthday Parties",
    image: "/images/menu/packages/birthday-package.jpg",
    guests: "20 - 300 Guests",
    tag: "Celebration",
  },
  {
    title: "Festival Events",
    image: "/images/menu/packages/festival-package.jpg",
    guests: "100 - 5000 Guests",
    tag: "Traditional",
  },
];

// ============================================================================
// Main Component
// ============================================================================
export default function CateringPackages() {
  return (
    <section className="relative overflow-hidden bg-[#090909] py-28">
      {/* Background Radial Ambient Glow */}
      <div className="absolute left-1/2 top-40 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/5 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Component Title Block Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-orange-400">
            <Sparkles size={16} />
            Event Packages
          </div>
          <h2 className="mt-6 text-5xl font-bold text-white">
            Catering Packages <span className="block text-orange-500">For Every Celebration</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
            Whether it's an intimate family gathering or a grand wedding, our customized catering 
            packages are designed to deliver an exceptional dining experience for every occasion.
          </p>
        </motion.div>

        {/* Featured Card Wrapper Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#171717] via-[#111111] to-[#0b0b0b]"
        >
          <div className="grid lg:grid-cols-2">
            {/* Featured Hero Graphic Column Layout */}
            <div className="relative min-h-[560px] overflow-hidden">
              <Image
                src={featuredPackage.image}
                alt={featuredPackage.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-lg">
                  Most Popular Package
                </span>
              </div>
            </div>

            {/* Featured Specification Metadata & Call-to-Action Info */}
            <div className="flex flex-col justify-center p-12">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-orange-400">
                <HeartHandshake size={16} />
                Premium Wedding Package
              </div>
              <h3 className="mt-6 text-4xl font-bold text-white">
                {featuredPackage.title}
              </h3>
              <p className="mt-3 font-semibold text-orange-400">
                Perfect For {featuredPackage.guests}
              </p>
              <p className="mt-6 leading-8 text-gray-400">
                {featuredPackage.description}
              </p>

              {/* Dynamic Feature Subgrid Loop */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {featuredPackage.features.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="rounded-full bg-orange-500/10 p-2">
                      <Check size={15} className="text-orange-400" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              {/* Functional Interaction Link */}
              <button className="group mt-10 inline-flex w-fit items-center gap-2 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-xl shadow-orange-500/10 transition-all duration-300 hover:bg-orange-600 hover:shadow-orange-500/30">
                Request Custom Quote
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Alternate Generic Service Tier Cards Layout */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: 0.6,
              }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111111] transition-all duration-500 hover:border-orange-500/30"
            >
              {/* Context Specific Static Card Visual */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-md">
                  {pkg.tag}
                </div>
              </div>

              {/* Static Card Context Strings */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-white">{pkg.title}</h3>
                <p className="mt-3 font-medium text-orange-400">
                  Perfect For {pkg.guests}
                </p>
                <p className="mt-5 leading-7 text-gray-400">
                  Fully customized catering solutions with premium food, professional staff, 
                  elegant presentation and flexible menu options for every occasion.
                </p>

                {/* Card Nested Action Trigger Footer */}
                <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
                  <span className="text-sm text-gray-500">Custom Menu Available</span>
                  <button className="group/button flex items-center gap-2 font-semibold text-orange-400 transition-colors duration-300 hover:text-orange-300">
                    Get Quote
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover/button:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Bottom High-Conversion Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 overflow-hidden rounded-[32px] border border-orange-500/20 bg-gradient-to-r from-orange-500/10 via-[#151515] to-orange-500/10 p-10"
        >
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
                Fully Customized Packages
              </span>
              <h3 className="mt-6 text-4xl font-bold text-white">
                Every Event Deserves Its Own Menu
              </h3>
              <p className="mt-4 max-w-2xl leading-8 text-gray-400">
                We don't believe in one-size-fits-all catering. Every menu is customized according 
                to your guest count, event type, taste, dietary preferences and budget to create a 
                truly memorable dining experience.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group whitespace-nowrap rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Plan Your Event
              <ArrowRight
                size={18}
                className="ml-2 inline transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>
          </div>
        </motion.div>

      </div>

      {/* Decorative Outer Layout Underlays */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
    </section>
  );
}