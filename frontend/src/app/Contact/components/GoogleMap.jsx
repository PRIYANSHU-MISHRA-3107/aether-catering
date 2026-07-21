"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  Clock3,
  Phone,
} from "lucide-react";

export default function GoogleMap() {
  return (
    <section className="relative overflow-hidden bg-[#090909] py-24">
      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-14 text-center">
          <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
            Find Us
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white">
            Visit Our Office
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            We'd love to meet you in person. Visit our office to discuss
            your event, taste sample menus, and plan every detail together.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">

          {/* Left Info */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="space-y-6"
          >

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10">

                <MapPin className="text-orange-500" />

              </div>

              <h3 className="text-xl font-bold text-white">

                Office Address

              </h3>

              <p className="mt-3 leading-7 text-gray-400">

               ...............
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10">

                <Clock3 className="text-orange-500" />

              </div>

              <h3 className="text-xl font-bold text-white">

                Working Hours

              </h3>

              <p className="mt-3 text-gray-400">

                Monday - Sunday

              </p>

              <p className="text-gray-300">

                9:00 AM - 8:00 PM

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10">

                <Phone className="text-orange-500" />

              </div>

              <h3 className="text-xl font-bold text-white">

                Need Directions?

              </h3>

              <a
              href=""
                className="mt-3 inline-block text-orange-400 hover:text-orange-300"
              >
                +91 9192.......
              </a>

            </div>

          </motion.div>

          {/* Google Map */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="lg:col-span-2"
          >

            <div className="overflow-hidden rounded-[32px] border border-white/10">

              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb="
                width="100%"
                height="550"
                loading="lazy"
                className="border-0"
              />

            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=-49.3315,-72.8863"
              target="_blank"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              <Navigation size={18} />

              Open in Google Maps

            </a>

          </motion.div>

        </div>

      </div>

    </section>
  );
}