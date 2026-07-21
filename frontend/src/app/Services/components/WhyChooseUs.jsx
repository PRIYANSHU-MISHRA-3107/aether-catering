"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Leaf,
  Users,
  UtensilsCrossed,
  Wallet,
  ShieldCheck,
  Clock,
} from "lucide-react";

const items = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    desc: "We use high-quality, farm-fresh ingredients for every dish.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    desc: "Skilled chefs and staff with years of catering experience.",
  },
  {
    icon: UtensilsCrossed,
    title: "Customized Menus",
    desc: "Menus tailored to your event, taste, and budget.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    desc: "Premium service that fits different budget ranges.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Kitchen",
    desc: "Strict hygiene and food safety standards in all preparation.",
  },
  {
    icon: Clock,
    title: "On-Time Service",
    desc: "We value your time and ensure punctual delivery and setup.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#0B0B0B] text-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/service/why-choose-us.jpg"
            alt="Why Choose Us"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Content Side */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6"
          >
            Why <span className="text-[#F97316]">Choose Us</span>
          </motion.h2>

          <p className="text-gray-300 mb-8">
            We focus on quality, trust, and flawless execution to make every
            event memorable and stress-free.
          </p>

          <div className="space-y-5">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-4"
                >
                  {/* Icon */}
                  <div className="p-2 rounded-full bg-[#161616] text-[#F97316]">
                    <Icon size={18} />
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}