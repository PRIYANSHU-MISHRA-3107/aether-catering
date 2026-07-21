"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CalendarDays,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function BookingHero() {
  return (
    <section className="relative overflow-hidden bg-[#090909] pt-36 pb-24">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[150px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-400">

              <CalendarDays size={16} />

              Premium Catering Booking

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">

              Plan Your

              <span className="block text-orange-500">

                Perfect Event

              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

              Book your catering in just a few simple steps.
              Choose your package, customize your menu,
              and reserve your preferred date with confidence.

            </p>

            {/* CTA */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="#booking-form"
                className="group inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-orange-600"
              >
                Start Booking

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </Link>

              <Link
                href="/packages"
                className="rounded-xl border border-white/10 px-8 py-4 font-semibold text-white transition hover:border-orange-500 hover:bg-white/5"
              >
                View Packages
              </Link>

            </div>

            {/* Features */}

            <div className="mt-12 flex flex-wrap gap-4">

              {[
                "Easy Booking",
                "Custom Menu",
                "Instant Estimate",
                "Secure Advance",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
                >

                  <CheckCircle2
                    size={16}
                    className="text-orange-500"
                  />

                  <span className="text-sm text-gray-300">

                    {item}

                  </span>

                </div>

              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: .95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8 }}
            className="relative flex justify-center"
          >

            {/* Glow */}

            <div className="absolute h-[450px] w-[450px] rounded-full bg-orange-500/20 blur-[120px]" />

            {/* Glass Card */}

            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-xl">

              <Image
                src="/images/booking/catering-setup.png"
                alt="Luxury Catering Setup"
                width={650}
                height={650}
                priority
                className="drop-shadow-[0_30px_60px_rgba(0,0,0,.55)]"
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}