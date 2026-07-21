"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative bg-[#0B0B0B] py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-120px] left-[-120px] h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[140px]" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-[#2A2A2A] bg-[#161616] p-10 md:p-16 text-center shadow-2xl"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              Let’s Make It Memorable
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Ready to Plan Your{" "}
            <span className="text-orange-500">Perfect Event?</span>
          </h2>

          {/* Description */}
          <p className="mt-6 mx-auto max-w-3xl text-gray-400 text-lg leading-8">
            From weddings to corporate events, birthdays, and private parties —
            we deliver premium catering with exceptional taste, elegant
            presentation, and flawless service that your guests will remember.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/Booking"
              className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:scale-105"
            >
              Book Your Event
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/Contact"
              className="inline-flex items-center gap-2 rounded-full border border-orange-500 px-8 py-4 text-lg font-semibold text-orange-400 transition-all duration-300 hover:bg-orange-500 hover:text-white"
            >
              <Phone size={18} />
              Get Free Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}