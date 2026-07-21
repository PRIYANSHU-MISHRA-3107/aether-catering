"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const contactCards = [
  {
    title: "Call Us",
    description: "Speak directly with our catering experts.",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    icon: Phone,
  },
  {
    title: "Email Us",
    description: "Send us your event requirements anytime.",
    value: "hello@yourcatering.com",
    href: "mailto:hello@yourcatering.com",
    icon: Mail,
  },
  {
    title: "Visit Us",
    description: "Rourkela, Odisha, India",
    value: "Open Google Maps",
    href: "https://maps.google.com",
    icon: MapPin,
  },
  {
    title: "Working Hours",
    description: "We're available throughout the week.",
    value: "Mon - Sun • 9:00 AM - 8:00 PM",
    href: "#",
    icon: Clock3,
  },
];

export default function ContactCards() {
  return (
    <section className="relative bg-[#090909] py-24">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-orange-500/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-14 text-center">
          <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
            Contact Information
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white">
            We're Always Here to Help
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400 leading-8">
            Reach us through your preferred method. Whether you have a
            question or are planning your next event, our team is ready
            to assist you.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.a
                key={card.title}
                href={card.href}
                target={card.title === "Visit Us" ? "_blank" : "_self"}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-7 backdrop-blur-xl"
              >
                {/* Hover Glow */}

                <div className="absolute inset-0 bg-orange-500/0 transition-all duration-500 group-hover:bg-orange-500/5" />

                <div className="relative z-10">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10">
                    <Icon
                      size={30}
                      className="text-orange-500"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {card.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-400">
                    {card.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                    <span className="text-sm font-medium text-orange-400">
                      {card.value}
                    </span>

                    {card.title !== "Working Hours" && (
                      <ArrowUpRight
                        size={20}
                        className="text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    )}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}