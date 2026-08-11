// src/components/DishCard.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Utensils, Star, Check } from "lucide-react";

const cardItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  },
};

export default function DishCard({ dish, isSelected, isDisabled, onToggle }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      variants={cardItemVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border transition-all ${
        isSelected
          ? "border-orange-500/50 bg-orange-500/10 shadow-lg shadow-orange-500/10"
          : "border-white/10 bg-white/5 hover:border-white/20"
      }`}
    >
      {/* Dish Image OR Fallback Placeholder */}
      <div className="relative h-40 w-full overflow-hidden bg-neutral-900/80 flex items-center justify-center">
        {!imageError ? (
          <img
            src={dish.image}
            alt={dish.name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            onError={() => setImageError(true)} // Switches to fallback if file is missing
          />
        ) : (
          /* Placeholder UI when local image file isn't uploaded yet */
          <div className="flex flex-col items-center justify-center gap-2 text-neutral-500">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
              <Utensils size={20} className="text-orange-400/70" />
            </div>
            <span className="text-[11px] font-medium text-neutral-400">
              {dish.name}
            </span>
          </div>
        )}

        {/* Badge */}
        {dish.badge && (
          <span className="absolute top-2 left-2 rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md border border-white/10">
            {dish.badge}
          </span>
        )}

        {/* Diet Tag */}
        {dish.diet && (
          <span className={`absolute top-2 right-2 rounded-full px-2 py-0.5 text-[10px] font-bold border ${
            dish.diet === "Veg" 
              ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" 
              : "bg-red-500/20 text-red-400 border-red-500/30"
          }`}>
            {dish.diet}
          </span>
        )}
      </div>

      {/* Dish Content */}
      <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
        <div>
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-sm text-white">{dish.name}</h4>
            {dish.rating && (
              <span className="flex items-center gap-1 text-xs text-amber-400 font-semibold">
                <Star size={12} fill="currentColor" /> {dish.rating}
              </span>
            )}
          </div>
          <p className="mt-1 text-xs text-neutral-400 line-clamp-2">
            {dish.description}
          </p>
        </div>

        {/* Select / Deselect Button */}
        <button
          type="button"
          disabled={isDisabled}
          onClick={() => onToggle && onToggle(dish.id)}
          className={`flex items-center justify-center gap-1.5 w-full rounded-xl py-2.5 text-xs font-semibold transition-all ${
            isSelected
              ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
              : isDisabled
              ? "bg-white/5 text-neutral-500 cursor-not-allowed border border-white/5"
              : "bg-white/10 text-white hover:bg-orange-500 hover:text-white"
          }`}
        >
          {isSelected ? (
            <>
              <Check size={14} /> Selected
            </>
          ) : isDisabled ? (
            "Limit Reached"
          ) : (
            "Add Dish"
          )}
        </button>
      </div>
    </motion.div>
  );
}