"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Soup,
  UtensilsCrossed,
  Wheat,
  CookingPot,
  CakeSlice,
  Coffee,
  ArrowRight,
  ChefHat,
  Check,
} from "lucide-react";

// Static data structure
const categories = [
  {
    id: 1,
    title: "Starters",
    icon: Soup,
    labelSuffix: "Dishes",
    description: "Begin every celebration with delicious appetizers crafted to awaken every guest's appetite.",
    dishes: [
      { name: "Paneer Tikka", image: "/images/menu/starters/paneer-tikkaa.png" },
      { name: "Hara Bhara Kabab", image: "/images/menu/starters/hara-bharaa.png" },
      { name: "Spring Roll", image: "/images/menu/starters/spring-roll.png" },
      { name: "Veg Manchurian", image: "/images/menu/starters/manchurian.png" },
      { name: "Corn Cheese Balls", image: "/images/menu/starters/cheese-balls.png" },
      { name: "Chilli Paneer", image: "/images/menu/starters/chilli-paneer.png" },
    ],
  },
  {
    id: 2,
    title: "Main Course",
    icon: UtensilsCrossed,
    labelSuffix: "Dishes",
    description: "Our signature main course features rich curries, authentic Indian classics, and premium chef-crafted specialties.",
    dishes: [
      { name: "Butter Paneer", image: "/images/menu/main/butter-paneer.png" },
      { name: "Dal Makhani", image: "/images/menu/main/dal-makhani.png" },
      { name: "Kadai Paneer", image: "/images/menu/main/kadai-paneer.png" },
      { name: "Mix Veg", image: "/images/menu/main/mix-veg.png" },
      { name: "Veg Biryani", image: "/images/menu/main/veg-biryani.png" },
      { name: "Malai Kofta", image: "/images/menu/main/malai-kofta.png" },
    ],
  },
  {
    id: 3,
    title: "Breads",
    icon: Wheat,
    labelSuffix: "Varieties",
    description: "Freshly baked breads prepared in traditional tandoors for the perfect dining experience.",
    dishes: [
      { name: "Butter Naan", image: "/images/menu/breads/butter-naan.png" },
      { name: "Garlic Naan", image: "/images/menu/breads/garlic-naan.png" },
      { name: "Tandoori Roti", image: "/images/menu/breads/tandoori-roti.png" },
      { name: "Lachha Paratha", image: "/images/menu/breads/lachha-paratha.png" },
      { name: "Missi Roti", image: "/images/menu/breads/missi-roti.png" },
      { name: "Kulcha", image: "/images/menu/breads/kulcha.png" },
    ],
  },
  {
    id: 4,
    title: "Rice",
    icon: CookingPot,
    labelSuffix: "Options",
    description: "Aromatic rice dishes prepared with premium grains and traditional spices.",
    dishes: [
      { name: "Veg Biryani", image: "/images/menu/rice/veg-biryani.png" },
      { name: "Jeera Rice", image: "/images/menu/rice/jeera-rice.png" },
      { name: "Veg Pulao", image: "/images/menu/rice/veg-pulao.png" },
      { name: "Steamed Rice", image: "/images/menu/rice/steamed-rice.png" },
      { name: "Peas Pulao", image: "/images/menu/rice/peas-pulao.png" },
      { name: "Kashmiri Pulao", image: "/images/menu/rice/kashmiri-pulao.png" },
    ],
  },
  {
    id: 5,
    title: "Desserts",
    icon: CakeSlice,
    labelSuffix: "Desserts",
    description: "End every celebration with handcrafted sweets and premium desserts loved by every generation.",
    dishes: [
      { name: "Gulab Jamun", image: "/images/menu/desserts/gulab-jamun.png" },
      { name: "Rasmalai", image: "/images/menu/desserts/rasmalai.png" },
      { name: "Ice Cream", image: "/images/menu/desserts/ice-cream.png" },
      { name: "Brownie", image: "/images/menu/desserts/brownie.png" },
      { name: "Gajar Halwa", image: "/images/menu/desserts/gajar-halwa.png" },
      { name: "Chocolate Mousse", image: "/images/menu/desserts/mousse.png" },
    ],
  },
  {
    id: 6,
    title: "Beverages",
    icon: Coffee,
    labelSuffix: "Drinks",
    description: "Refreshing beverages perfectly paired with every meal and every celebration.",
    dishes: [
      { name: "Fresh Lime", image: "/images/menu/beverages/fresh-lime.png" },
      { name: "Cold Coffee", image: "/images/menu/beverages/cold-coffee.png" },
      { name: "Mango Shake", image: "/images/menu/beverages/mango-shake.png" },
      { name: "Soft Drinks", image: "/images/menu/beverages/soft-drinks.png" },
      { name: "Masala Chaas", image: "/images/menu/beverages/masala-chaas.png" },
      { name: "Mocktails", image: "/images/menu/beverages/mocktails.png" },
    ],
  },
];

export default function MenuCategories() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeDish, setActiveDish] = useState(categories[0].dishes[0]);

  // Industry Standard: Handle atomic state modifications directly within the interactive click handler
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category?.dishes?.length > 0) {
      setActiveDish(category.dishes[0]);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#090909] py-28 select-none">
      {/* Ambient Background Glow */}
      <div className="absolute left-1/2 top-40 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-orange-500/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm text-orange-400">
            <ChefHat size={16} />
            Explore Our Menu
          </div>
          <h2 className="mt-6 text-5xl font-bold text-white">
            Discover Every{" "}
            <span className="block text-orange-500">Culinary Collection</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-gray-400 leading-8">
            Browse thoughtfully curated food categories designed for weddings, corporate events, and premium private catering celebrations.
          </p>
        </div>

        <div className="grid gap-14 lg:grid-cols-12">
          {/* LEFT: CATEGORY BUTTON LIST */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              {categories.map((item) => {
                const Icon = item.icon;
                const isSelected = activeCategory.id === item.id;
                return (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleCategoryChange(item)}
                    className={`w-full rounded-2xl border p-5 text-left transition-all duration-300 ${
                      isSelected
                        ? "border-orange-500 bg-orange-500 text-white shadow-xl shadow-orange-500/20"
                        : "border-white/5 bg-[#121212] text-gray-300 hover:border-orange-500/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`rounded-xl p-3 ${isSelected ? "bg-white/20" : "bg-orange-500/10"}`}>
                          <Icon size={22} className={isSelected ? "text-white" : "text-orange-400"} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                          <p className="text-sm opacity-70">
                            {item.dishes?.length || 0}+ {item.labelSuffix}
                          </p>
                        </div>
                      </div>
                      <ArrowRight size={18} />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: ANIMATED DISPLAY PREVIEW */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory.id}_${activeDish?.name}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0b0b0b] shadow-2xl"
              >
                <div className="grid md:grid-cols-2">
                  {/* DYNAMIC IMAGE INTERFACE */}
                  <div className="relative h-[350px] md:h-[480px] bg-gradient-to-br from-orange-500/5 via-transparent to-transparent">
                    {activeDish?.image && (
                      <Image
                        key={`${activeDish.name}-${activeDish.image}`}
                        src={activeDish.image}
                        alt={activeDish.name}
                        fill
                        priority
                        className="object-contain p-12 filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.7)]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                  </div>

                  {/* ACTIVE VIEW DETAIL COLUMN */}
                  <div className="flex flex-col justify-center p-8 sm:p-10">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-400">
                      Premium Selection
                    </span>

                    <h3 className="mt-5 text-4xl font-black tracking-tight text-white">
                      {activeCategory.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-400 font-light">
                      {activeCategory.description}
                    </p>

                    <div className="my-6 h-px w-full bg-gradient-to-r from-orange-500/20 via-white/10 to-transparent" />

                    {/* SELECTABLE DISH LIST MATRIX */}
                    <div>
                      <h4 className="mb-4 text-xs uppercase tracking-widest font-bold text-gray-500">
                        Select Dish to Preview Image
                      </h4>

                      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {(activeCategory?.dishes || []).map((dishItem) => {
                          const isDishActive = activeDish?.name === dishItem.name;
                          return (
                            <button
                              key={dishItem.name}
                              onClick={() => setActiveDish(dishItem)}
                              className={`flex items-center gap-3 rounded-xl border p-3 text-left transition-all duration-200 ${
                                isDishActive
                                  ? "border-orange-500/40 bg-orange-500/10 text-white shadow-md shadow-orange-500/5"
                                  : "border-white/5 bg-white/[0.02] text-gray-400 hover:border-white/10 hover:bg-white/[0.04]"
                              }`}
                            >
                              <div className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors ${
                                isDishActive ? "bg-orange-500 text-white" : "bg-white/5"
                              }`}>
                                <Check size={12} className={isDishActive ? "opacity-100" : "opacity-20"} />
                              </div>
                              <span className={`text-xs font-medium transition-colors ${isDishActive ? "text-orange-400 font-bold" : ""}`}>
                                {dishItem.name}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* FOOTER METRICS INFO PANEL */}
                    <div className="mt-8 flex flex-col gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-gray-500 font-bold">Total Customizations</p>
                        <h5 className="mt-0.5 text-base font-bold text-white">
                          {activeCategory.dishes?.length || 0}+ Available Options
                        </h5>
                      </div>

                      <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-xs font-bold text-white transition-all duration-300 hover:bg-orange-600 shadow-lg shadow-orange-500/15">
                        Customize Menu Options
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
    </section>
  );
}