"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Wedding Catering",
    badge: "💍 Wedding",
    image: "/images/service/wedding.jpg",
    description:
      "Elegant dining experiences crafted to make your wedding celebration unforgettable.",
    href: "/services/wedding",
  },
  {
    title: "Corporate Catering",
    badge: "🏢 Corporate",
    image: "/images/service/corporate.jpg",
    description:
      "Professional catering solutions for meetings, conferences, and corporate events.",
    href: "/services/corporate",
  },
  {
    title: "Birthday Parties",
    badge: "🎂 Birthday",
    image: "/images/service/birthday.jpg",
    description:
      "Delicious menus and vibrant food presentations for birthdays of every age.",
    href: "/service/birthday",
  },
  {
    title: "Private Events",
    badge: "🎉 Private",
    image: "/images/service/private-event.jpg",
    description:
      "Personalized catering services for family gatherings and exclusive celebrations.",
    href: "/services/private-events",
  },
  {
    title: "Outdoor Catering",
    badge: "🌳 Outdoor",
    image: "/images/service/outdoor.jpg",
    description:
      "Freshly prepared meals served perfectly for outdoor functions and garden events.",
    href: "/services/outdoor",
  },
  {
    title: "Festival Catering",
    badge: "🍽 Festival",
    image: "/images/service/festival Catering.jpg",
    description:
      "Large-scale catering with exceptional taste and flawless event execution.",
    href: "/services/festival",
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 via-black to-neutral-950 py-28 lg:py-32 text-neutral-100">
      
      {/* Background Ambient Radiance Elements */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-orange-950/20 blur-3xl opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-32 h-[30rem] w-[30rem] rounded-full bg-red-950/20 blur-3xl opacity-30"
      />
      <div
        aria-hidden="true"
        className="absolute right-20 top-40 h-48 w-48 rounded-full border-[25px] border-orange-500/10 opacity-20"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-orange-500/10 border border-orange-500/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
            Catering Solutions For{" "}
            <span className="text-orange-500">Every Occasion</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Whether you're planning an intimate family gathering or a grand
            celebration, our experienced team delivers exceptional food and
            outstanding service tailored to your event.
          </p>
        </motion.div>

        {/* Services Grid Layout */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group cursor-pointer block overflow-hidden rounded-3xl border border-neutral-900 bg-neutral-900/30 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-neutral-800 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
            >
              <Link href={service.href} className="block w-full h-full">
                
                {/* Media Presentation Layer */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.12]"
                  />

                  {/* Enhanced Multilayer Overlay Mask Animation */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/40" />

                  {/* 1️⃣ Unique Contextual Category Badge */}
                  <div className="absolute left-6 top-6 rounded-full bg-neutral-950/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-orange-400 backdrop-blur transition duration-300 group-hover:bg-orange-500 group-hover:text-white border border-neutral-800 group-hover:border-transparent">
                    {service.badge}
                  </div>

                  {/* Card Header Content Wrapper */}
                  <div className="absolute bottom-6 left-6 right-6">
                    {/* 2️⃣ Title with contextual Icon integration */}
                    <h3 className="text-3xl font-bold text-white transition-colors duration-300 group-hover:text-orange-400">
                      {service.title}
                    </h3>

                    {/* Micro-geometric Accent Scale Animation Line */}
                    <div className="mt-2 h-1 w-16 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-24" />
                  </div>
                </div>

                {/* Card Context / Text Section */}
                <div className="p-7">
                  {/* 3️⃣ Cleaner layout prioritizing modern whitespace rules over old <hr /> dividers */}
                  <p className="leading-7 text-neutral-400 text-sm md:text-base">
                    {service.description}
                  </p>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call-To-Action Layout Container */}
        {/* Removed Explore All Services Button */}
      </div>
    </section>
  );
}