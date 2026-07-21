"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ChefHat,
  Leaf,
  Clock3,
  UtensilsCrossed,
  ArrowRight,
  Award,
  CalendarDays,
  Users,
  Smile,
} from "lucide-react";

// Main features data
const features = [
  {
    icon: ChefHat,
    title: "Experienced Chefs",
    description:
      "Our skilled culinary team prepares every dish with passion, precision, and years of professional experience.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "We source premium-quality ingredients daily to ensure freshness, taste, and exceptional food quality.",
  },
  {
    icon: Clock3,
    title: "On-Time Service",
    description:
      "From preparation to serving, our team is committed to delivering every event on schedule.",
  },
  {
    icon: UtensilsCrossed,
    title: "Customized Menus",
    description:
      "Whether it's a wedding, corporate event, or family celebration, we create menus tailored to your needs.",
  },
];

// Stats grid data
const stats = [
  {
    icon: Award,
    number: "15+",
    label: "Years of Experience",
  },
  {
    icon: CalendarDays,
    number: "500+",
    label: "Events Completed",
  },
  {
    icon: Users,
    number: "25+",
    label: "Expert Chefs",
  },
  {
    icon: Smile,
    number: "10k+",
    label: "Happy Customers",
  },
];

export default function AboutCompany() {
  return (
    <section className="relative overflow-hidden bg-black py-28 lg:py-32 text-neutral-100">
      {/* Dark Theme Ambient Glow Backdrops */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-orange-950/20 blur-3xl opacity-60" />
      <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-red-950/20 blur-3xl opacity-50" />
      
      {/* Subtle Decorative Circle */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-5">
        <div className="h-72 w-72 rounded-full border-[30px] border-orange-500" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Left Side: Image Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="group relative aspect-[10/10] overflow-hidden rounded-3xl border border-neutral-800 shadow-2xl">
              <Image
                src="/images/service/about-company.jpg"
                alt="Professional Catering Team"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 contrast-105"
              />
              {/* Darkening Gradient Overlay for Premium Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent" />
            </div>

            {/* Responsive Experience Badge */}
            <div className="absolute bottom-4 right-4 rounded-2xl bg-orange-500 px-6 py-4 text-white shadow-2xl md:-bottom-8 md:-right-6 md:px-8 md:py-5">
              <h2 className="text-2xl font-bold md:text-3xl">15+</h2>
              <p className="text-xs tracking-wide opacity-90 md:text-sm">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Right Side: Text & Features Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Small Heading */}
            <span className="rounded-full bg-orange-500/10 border border-orange-500/20 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-orange-400">
              About Company
            </span>

            {/* Main Heading */}
            <h2 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
              Creating Exceptional Catering Experiences for Every Occasion
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg leading-8 text-neutral-400">
              We believe every celebration deserves unforgettable food and
              outstanding service. With years of experience in premium catering,
              our dedicated team combines fresh ingredients, creative menus, and
              flawless execution to make every event memorable.
            </p>

            {/* Features List */}
            <div className="mt-10 space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 rounded-2xl p-4 transition-all duration-300 border border-transparent hover:border-neutral-800 hover:bg-neutral-900/40 hover:shadow-lg"
                  >
                    <div className="rounded-xl bg-orange-500/10 p-3 text-orange-400 border border-orange-500/20">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-neutral-100">
                        <CheckCircle2 size={18} className="text-emerald-500" />
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-neutral-400 leading-7 text-sm md:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="group rounded-3xl border border-neutral-800/60 bg-neutral-900/30 backdrop-blur-sm p-8 text-center shadow-xl transition-all duration-300 hover:border-orange-500/40 hover:bg-neutral-900/60 hover:shadow-2xl"
              >
                {/* Icon Box with fluid transitions mapping into dark mode */}
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/20 transition-all duration-300 group-hover:rotate-6 group-hover:bg-orange-500 group-hover:text-white group-hover:border-transparent">
                  <Icon size={30} />
                </div>

                <h3 className="text-4xl font-bold text-white tracking-tight">
                  {item.number}
                </h3>

                <p className="mt-2 text-neutral-400 text-sm font-medium">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}