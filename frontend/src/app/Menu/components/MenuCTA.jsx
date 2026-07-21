"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Calendar, Utensils, Clock } from "lucide-react";
import Link from "next/link";

export default function MenuCTA() {
  return (
    <section className="relative overflow-hidden bg-[#090909] py-28">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#171717] via-[#111111] to-[#0d0d0d] p-10 md:p-16"
        >
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-400">
              Ready To Serve
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
              Let's Create Your{" "}
              <span className="block text-orange-500">Perfect Menu</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Every event is unique. Tell us your guest count, preferences and
              budget, and our chefs will prepare a customized menu designed
              especially for your celebration.
            </p>

            {/* Call To Action Buttons */}
            <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/20"
              >
                Book Consultation
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="tel:+919999999999"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-[#181818] px-8 py-4 font-semibold text-white transition hover:border-orange-500/30"
              >
                <Phone size={18} />
                Call Now
              </Link>
            </div>

            {/* Feature Cards Grid */}
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {/* Feature 1 */}
              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/10 bg-[#161616] p-6"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10">
                  <Calendar size={24} className="text-orange-400" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  Custom Menus
                </h3>
                <p className="mt-3 leading-7 text-gray-400 text-sm md:text-base">
                  Every menu is tailored to your event type, guest count,
                  dietary preferences and budget.
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/10 bg-[#161616] p-6"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10">
                  <Utensils size={24} className="text-orange-400" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  Fresh Every Time
                </h3>
                <p className="mt-3 leading-7 text-gray-400 text-sm md:text-base">
                  We prepare every dish using fresh ingredients to ensure
                  exceptional taste and premium quality.
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/10 bg-[#161616] p-6"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10">
                  <Clock size={24} className="text-orange-400" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  On-Time Service
                </h3>
                <p className="mt-3 leading-7 text-gray-400 text-sm md:text-base">
                  From preparation to serving, our team ensures smooth,
                  punctual and professional event execution.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Shading Underlays */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
    </section>
  );
}