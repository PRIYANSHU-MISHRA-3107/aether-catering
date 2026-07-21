"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, CalendarDays, ArrowRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#090909] pt-36 pb-20">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-400"
        >
          <Phone size={16} />
          Contact Our Catering Team
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl"
        >
          Let's Talk About
          <span className="block text-orange-500">
            Your Next Event
          </span>
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-gray-400"
        >
          Have questions about our catering services or ready to plan your
          celebration? Our team is here to help you choose the perfect menu
          and create an unforgettable event.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <a
            href="tel:+919876543210"
            className="group inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-orange-600"
          >
            <Phone size={18} />
            Call Now

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <Link
            href="/Booking"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-orange-500 hover:bg-white/5"
          >
            <CalendarDays size={18} />
            Book Catering
          </Link>
        </motion.div>
      </div>
    </section>
  );
}