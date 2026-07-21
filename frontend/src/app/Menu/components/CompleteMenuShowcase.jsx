"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, UtensilsCrossed, Star } from "lucide-react";
import { menuData } from "@/Data/menuData"; 

// ============================================================================
// Dynamic Data Transformations
// ============================================================================

// 1. Flatten the nested categories into a single global array for full catalog searching
const globalMenuItems = menuData.flatMap((category) =>
  category.dishes.map((dish) => ({
    ...dish,
    category: category.title, // Injects "Starters", etc. for context filtering
  }))
);

// 2. Generate filter button tab options dynamically straight from the dataset
const filterTabs = ["All", ...menuData.map((category) => category.title)];

// ============================================================================
// Main Component
// ============================================================================
export default function CompleteMenu() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [visibleItems, setVisibleItems] = useState(6);

  // Core filter logic matching current search token and selected tab
  const filteredItems = useMemo(() => {
    return globalMenuItems.filter((item) => {
      const categoryMatch =
        activeFilter === "All" || item.category === activeFilter;

      const searchMatch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [activeFilter, search]);

  return (
    <section className="relative overflow-hidden bg-[#090909] py-28 select-none">
      {/* Decorative Top Background Ambient Glow */}
      <div className="absolute left-1/2 top-32 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/5 blur-[180px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Header Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm text-orange-400">
            <Sparkles size={16} />
            Complete Collection
          </div>
          <h2 className="mt-6 text-5xl font-bold text-white">
            Explore Our <span className="block text-orange-500">Complete Menu</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-gray-400 leading-8">
            Browse our handcrafted collection of premium dishes, thoughtfully prepared for 
            weddings, corporate events, birthdays, festivals and private celebrations.
          </p>
        </motion.div>

        {/* Search Bar Input */}
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="flex items-center rounded-2xl border border-white/10 bg-[#141414] px-5 py-4">
            <Search className="text-orange-400" size={20} />
            <input
              type="text"
              placeholder="Search your favorite dish..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ml-4 w-full bg-transparent text-white placeholder:text-gray-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {filterTabs.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setVisibleItems(6);
              }}
              className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                  : "border border-white/10 bg-[#141414] text-gray-400 hover:border-orange-500/30 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cards Grid Container */}
        <motion.div layout className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {filteredItems.slice(0, visibleItems).map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.06,
                duration: 0.45,
              }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-[#171717] to-[#101010] shadow-xl transition-all duration-500 hover:border-orange-500/30 hover:shadow-orange-500/10"
            >
              {/* Media Image Wrap */}
              <div className="relative h-72 overflow-hidden bg-neutral-900">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-black/70 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                  {item.category}
                </div>
                {item.badge && (
                  <div className="absolute right-5 top-5 rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-lg">
                    {item.badge}
                  </div>
                )}
              </div>

              {/* Content Specifications */}
              <div className="p-7">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className="fill-orange-400 text-orange-400"
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-400">{item.rating}</span>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.diet === "Veg" 
                      ? "border-green-500/30 bg-green-500/10 text-green-400" 
                      : "border-red-500/30 bg-red-500/10 text-red-400"
                  }`}>
                    {item.diet}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold text-white transition group-hover:text-orange-400">
                  {item.name}
                </h3>
                <p className="mt-4 leading-7 text-gray-400 min-h-[56px]">{item.description}</p>

                {/* Card Footer Actions */}
                <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
                  <span className="text-sm text-gray-500">Premium Collection</span>
                  <button className="group/button flex items-center gap-2 text-sm font-semibold text-orange-400">
                    Explore
                    <UtensilsCrossed
                      size={16}
                      className="transition-transform duration-300 group-hover/button:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty Filter or Empty Search Input State */}
        {filteredItems.length === 0 && (
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-white">No dishes found</h3>
            <p className="mt-4 text-gray-500">
              Try searching with another name or choose another category.
            </p>
          </div>
        )}

        {/* Bottom Metrics Bar Panel & Load More Actions */}
        <div className="mt-16 flex flex-col items-center gap-8">
          <div className="flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-white/10 bg-[#111111]/60 px-8 py-5 backdrop-blur-md">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-orange-400">
                {Math.min(visibleItems, filteredItems.length)}
              </h4>
              <p className="mt-1 text-sm text-gray-500">Showing</p>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div className="text-center">
              <h4 className="text-2xl font-bold text-white">{filteredItems.length}</h4>
              <p className="mt-1 text-sm text-gray-500">Total Dishes</p>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div className="text-center">
              <h4 className="text-2xl font-bold text-orange-400">{menuData.length}</h4>
              <p className="mt-1 text-sm text-gray-500">Categories</p>
            </div>
          </div>

          {visibleItems < filteredItems.length && (
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setVisibleItems((prev) => prev + 6)}
              className="group inline-flex items-center gap-3 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-xl shadow-orange-500/20 transition-all duration-300 hover:bg-orange-600 hover:shadow-orange-500/40"
            >
              Load More Dishes
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.button>
          )}
        </div>

      </div>

      {/* Decorative Bottom Platter Border Gradients */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
    </section>
  );
}