"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  ChefHat,
  Leaf,
  Flame,
  Award,
} from "lucide-react";

const featuredDish = {
  name: "Butter Paneer Deluxe",
  image: "/images/menu/signature/butter-paneer.png",
  rating: "4.9",
  reviews: "250+ Reviews",
  description:
    "A luxurious blend of soft paneer cubes simmered in our rich tomato and butter gravy, finished with fresh cream and aromatic Indian spices.",
  tags: [
    "Pure Vegetarian",
    "Chef Recommended",
    "Best Seller",
  ],
};

const dishes = [
  {
    title: "Chef's Signature",
    icon: ChefHat,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    image: "/images/menu/signature/butter-paneer.png",
    dish: "Butter Paneer",
    description:
      "Our signature creamy paneer recipe loved at premium weddings and celebrations.",
  },
  {
    title: "Guest Favorite",
    icon: Flame,
    color: "text-red-400",
    bg: "bg-red-500/10",
    image: "/images/menu/signature/biryani.png",
    dish: "Veg Biryani",
    description:
      "Aromatic basmati rice layered with vegetables and authentic spices.",
  },
  {
    title: "Seasonal Special",
    icon: Leaf,
    color: "text-green-400",
    bg: "bg-green-500/10",
    image: "/images/menu/signature/salad.png",
    dish: "Garden Fresh Salad",
    description:
      "Fresh seasonal vegetables served with our homemade signature dressing.",
  },
  {
    title: "Festival Favorite",
    icon: Award,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    image: "/images/menu/signature/gulab-jamun.png",
    dish: "Gulab Jamun",
    description:
      "Soft milk dumplings served warm in saffron infused sugar syrup.",
  },
];

export default function SignatureDishes() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-28 select-none">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-40 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/5 blur-[180px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm text-orange-400">
            <Award size={16} />
            Signature Collection
          </div>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Our Most Loved{" "}
            <span className="block text-orange-500">Signature Dishes</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
            Crafted using premium ingredients, perfected by our chefs, and loved
            by thousands of guests across weddings, corporate events and
            celebrations.
          </p>
        </motion.div>

        {/* Featured Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#141414] via-[#111111] to-[#090909] shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Side Grid Block */}
            <div className="relative flex items-center justify-center p-12 min-h-[550px]">
              <div className="absolute h-[350px] w-[350px] rounded-full bg-orange-500/15 blur-[90px] pointer-events-none" />

              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 h-[320px] w-[320px] sm:h-[420px] sm:w-[420px]"
              >
                <Image
                  src={featuredDish.image}
                  alt={featuredDish.name}
                  fill
                  priority
                  className="object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                />
              </motion.div>
            </div>

            {/* Content Side Grid Block */}
            <div className="flex flex-col justify-center p-8 sm:p-12 border-t border-white/5 lg:border-t-0 lg:border-l">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
                <ChefHat size={15} />
                Chef's Recommendation
              </div>

              <h3 className="mt-6 text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                {featuredDish.name}
              </h3>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className="fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>
                <span className="font-semibold text-white">
                  {featuredDish.rating}
                </span>
                <span className="text-gray-500">({featuredDish.reviews})</span>
              </div>

              <p className="mt-8 leading-relaxed text-gray-400 font-light tracking-wide text-base sm:text-lg">
                {featuredDish.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {featuredDish.tags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
                  >
                    <Leaf size={15} className="text-orange-400" />
                    <span className="text-sm font-medium text-gray-300">{tag}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="mt-10 w-full sm:w-fit rounded-xl bg-orange-500 px-8 py-4 font-bold text-white shadow-xl shadow-orange-500/20 transition-all hover:bg-orange-600"
              >
                View Full Menu
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Small Signature Dishes Grid Showcase */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {dishes.map((dish, index) => {
            const Icon = dish.icon;
            
            return (
              <motion.div
                key={dish.dish}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.5,
                }}
                whileHover={{ y: -8 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#141414] via-[#111111] to-[#090909] shadow-xl"
              >
                <div className="relative h-60 overflow-hidden bg-gradient-to-b from-white/[0.01] to-transparent">
                  <Image
                    src={dish.image}
                    alt={dish.dish}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  {/* Dynamic Custom Badge Row */}
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <p className={`text-xs uppercase tracking-[0.25em] font-semibold ${dish.color}`}>
                      {dish.title}
                    </p>
                    <div className={`p-2 rounded-lg shrink-0 ${dish.bg}`}>
                      <Icon className={`w-5 h-5 ${dish.color}`} />
                    </div>
                  </div>

                  {/* Header */}
                  <h4 className="mt-2 text-xl font-bold text-white">
                    {dish.dish}
                  </h4>

                  {/* Description */}
                  <p className="mt-4 text-gray-400 leading-7 text-sm font-light flex-1">
                    {dish.description}
                  </p>

                  {/* Bottom Action Trigger */}
                  <button className="mt-6 text-sm font-bold text-orange-400 transition hover:text-orange-300 text-left">
                    Explore Dish &rarr;
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Layout Line */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
    </section>
  );
}