"use client";

import { useState } from "react";
import Image from "next/image";
import { menuData as MENU_CATEGORIES } from "@/constants/menuData";
import { Check, Leaf, Utensils, Star, UtensilsCrossed } from "lucide-react";

export default function StepCustomize({ bookingData = {}, onToggleDish }) {
  // Default to the first category ID available in MENU_CATEGORIES (numeric ID or fallback)
  const [activeTab, setActiveTab] = useState(MENU_CATEGORIES[0]?.id || 1);

  // Get current active category object
  const currentCategory =
    MENU_CATEGORIES.find((cat) => cat.id === activeTab) || MENU_CATEGORIES[0];

  const stateKey = currentCategory?.key;
  const isPureVeg = bookingData?.dietaryPreference === "Pure Veg";

  // Filter category dishes based on dietary preferences
  const filteredDishes = (currentCategory?.dishes || []).filter((dish) => {
    if (isPureVeg) {
      return dish.diet === "Veg";
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="flex flex-col gap-2 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">Customize Your Menu</h3>
          <p className="text-xs text-gray-400">
            {currentCategory?.description || "Select your preferred dishes for each course."}
          </p>
        </div>
        {isPureVeg && (
          <div className="flex items-center gap-1.5 self-start rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20 sm:self-auto">
            <Leaf size={14} />
            <span>Pure Veg Selected</span>
          </div>
        )}
      </div>

      {/* Category Navigation Tabs */}
      <div className="flex overflow-x-auto gap-2 border-b border-white/10 pb-3 scrollbar-none">
        {MENU_CATEGORIES.map((cat) => {
          const catStateKey = cat.key;
          const selectedCount = bookingData?.[catStateKey]?.length || 0;
          const isActive = activeTab === cat.id;

          // Count visible items matching active dietary filter
          const totalCategoryItems = cat.dishes.filter((d) =>
            isPureVeg ? d.diet === "Veg" : true
          ).length;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                isActive
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span>{cat.title}</span>
              <span className="text-[10px] opacity-75">({totalCategoryItems})</span>
              {selectedCount > 0 && (
                <span
                  className={`flex h-4 min-w-4 px-1 items-center justify-center rounded-full text-[10px] ${
                    isActive
                      ? "bg-white text-orange-600 font-extrabold"
                      : "bg-orange-500 text-white"
                  }`}
                >
                  {selectedCount}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Dishes Grid */}
      {filteredDishes.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-12 text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-gray-400">
            <UtensilsCrossed size={24} />
          </div>
          <h4 className="text-sm font-semibold text-white">No dishes available</h4>
          <p className="mt-1 max-w-xs text-xs text-gray-400">
            {isPureVeg
              ? "There are no Pure Veg options available in this course."
              : "No items found in this course."}
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDishes.map((dish) => {
            const selectedList = bookingData?.[stateKey] || [];
            const isSelected = selectedList.includes(dish.id);
            const isVeg = dish.diet === "Veg";

            return (
              <div
                key={dish.id}
                onClick={() => onToggleDish && onToggleDish(stateKey, dish.id)}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-4 transition-all cursor-pointer ${
                  isSelected
                    ? "border-orange-500 bg-orange-500/10 shadow-[0_0_15px_rgba(249,115,22,0.15)]"
                    : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]"
                }`}
              >
                <div>
                  {/* Image Section */}
                  <div className="relative mb-3 h-36 w-full overflow-hidden rounded-xl bg-white/5">
                    {dish.image ? (
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-gray-500">
                        <Utensils size={28} />
                      </div>
                    )}

                    {/* Diet Badge */}
                    <div className="absolute top-2 left-2 flex items-center gap-1 rounded-md bg-black/60 px-2 py-1 backdrop-blur-md">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          isVeg ? "bg-emerald-400" : "bg-red-500"
                        }`}
                      />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                        {dish.diet}
                      </span>
                    </div>

                    {/* Custom Badge */}
                    {dish.badge && (
                      <div className="absolute top-2 right-2 rounded-md bg-orange-500/90 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
                        {dish.badge}
                      </div>
                    )}
                  </div>

                  {/* Title & Rating */}
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-bold text-white text-sm group-hover:text-orange-400 transition-colors">
                      {dish.name}
                    </h4>
                    {dish.rating && (
                      <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold shrink-0">
                        <Star size={12} fill="currentColor" />
                        <span>{dish.rating}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-400 line-clamp-2 mb-4">
                    {dish.description}
                  </p>
                </div>

                {/* Selection Footer Button */}
                <div className="flex items-center justify-between border-t border-white/5 pt-3 mt-auto">
                  <span className="text-[11px] font-medium text-gray-400">
                    {isSelected ? "Selected" : "Click to select"}
                  </span>
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full border transition-colors ${
                      isSelected
                        ? "border-orange-500 bg-orange-500 text-white"
                        : "border-white/20 bg-black/20 text-transparent group-hover:border-white/40"
                    }`}
                  >
                    <Check size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}