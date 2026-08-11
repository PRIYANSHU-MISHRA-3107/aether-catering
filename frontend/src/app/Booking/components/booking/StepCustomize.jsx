"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { menuData as MENU_CATEGORIES } from "@/constants/menuData";
import { gridVariants } from "@/constants/animationVariants";
import { getPackageById } from "@/utils/packageHelpers";
import { Leaf, AlertCircle, UtensilsCrossed } from "lucide-react";
import DishCard from "./DishCard";

// Helper function to map top-level categories to state keys inside bookingData
const getStateKey = (category) => {
  if (category.key) return category.key;
  if (category.stateKey) return category.stateKey;

  const titleMap = {
    Starters: "starterDishes",
    "Main Course": "mainCourseDishes",
    Desserts: "dessertDishes",
    Beverages: "beverageDishes",
  };

  return titleMap[category.title] || `${category.title.toLowerCase()}Dishes`;
};

export default function StepCustomize({
  bookingData = {},
  onToggleDish,
  activeCategory,
  setActiveCategory,
}) {
  const [mainSubCategory, setMainSubCategory] = useState("All");
  const isPureVeg = bookingData.dietaryPreference === "Pure Veg";

  // Active Category Object
  const currentCategory = useMemo(() => {
    return (
      MENU_CATEGORIES.find((cat) => cat.id === activeCategory) ||
      MENU_CATEGORIES[0]
    );
  }, [activeCategory]);

  // Filtered dishes for current active category (Pure Veg check + Main Course Sub-Filter)
  const categoryDishes = useMemo(() => {
    let dishes = currentCategory?.dishes || [];

    // Filter Pure Veg
    if (isPureVeg) {
      dishes = dishes.filter((dish) => dish.diet === "Veg");
    }

    // Filter by Sub-Category if in Main Course (e.g., Curry, Bread, Rice)
    if (currentCategory?.title === "Main Course" && mainSubCategory !== "All") {
      dishes = dishes.filter((dish) => dish.category === mainSubCategory);
    }

    return dishes;
  }, [currentCategory, isPureVeg, mainSubCategory]);

  // Visible dishes count per category
  const visibleDishCountByCategory = useMemo(() => {
    return MENU_CATEGORIES.reduce((acc, cat) => {
      acc[cat.id] = (cat.dishes || []).filter((d) =>
        isPureVeg ? d.diet === "Veg" : true
      ).length;
      return acc;
    }, {});
  }, [isPureVeg]);

  // Dynamic Selected Counts for all categories
  const selectedCounts = useMemo(() => {
    return MENU_CATEGORIES.reduce((acc, cat) => {
      const stateKey = getStateKey(cat);
      acc[stateKey] = bookingData[stateKey]?.length || 0;
      return acc;
    }, {});
  }, [bookingData]);

  // Selected Package details
  const currentPackage = useMemo(() => {
    return getPackageById(bookingData.packageId);
  }, [bookingData.packageId]);

  const currentStateKey = getStateKey(currentCategory);
  const currentLimit = currentPackage?.limits?.[currentStateKey] ?? Infinity;
  const currentSelectedCount = selectedCounts[currentStateKey] || 0;
  const isLimitReached = currentSelectedCount >= currentLimit;

  // Available sub-categories for Main Course
  const subCategories = ["All", "Curry", "Bread", "Rice"];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold text-white">Customize Your Menu</h3>
            {Number.isFinite(currentLimit) && (
              <span className="rounded-full bg-orange-500/10 px-2.5 py-0.5 text-xs font-semibold border border-orange-500/20 text-orange-400">
                {currentSelectedCount} / {currentLimit} Selected
              </span>
            )}
          </div>
          <p className="mt-1 text-xs text-neutral-400">
            {currentCategory?.description ||
              "Select your preferred dishes for each course."}
          </p>
        </div>

        {isPureVeg && (
          <div className="flex items-center gap-1.5 self-start rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold border border-emerald-500/20 text-emerald-400 sm:self-auto">
            <Leaf size={14} />
            <span>Pure Veg Selected</span>
          </div>
        )}
      </div>

      {/* Main Category Tabs (Starters, Main Course, Desserts, Beverages) */}
      <div className="flex gap-2 overflow-x-auto border-b border-white/10 pb-3 scrollbar-none">
        {MENU_CATEGORIES.map((cat) => {
          const catStateKey = getStateKey(cat);
          const selectedCount = selectedCounts[catStateKey] || 0;
          const isActive = (activeCategory || MENU_CATEGORIES[0].id) === cat.id;
          const limit = currentPackage?.limits?.[catStateKey] ?? Infinity;
          const totalCategoryItems = visibleDishCountByCategory[cat.id] || 0;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                if (setActiveCategory) setActiveCategory(cat.id);
                setMainSubCategory("All"); // Reset sub-category filter on tab change
              }}
              className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                isActive
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                  : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span>{cat.title}</span>
              <span className="text-[10px] opacity-75">
                ({totalCategoryItems})
              </span>
              {selectedCount > 0 && (
                <span
                  className={`flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] ${
                    isActive
                      ? "bg-white font-extrabold text-orange-600"
                      : "bg-orange-500 text-white"
                  }`}
                >
                  {selectedCount}
                  {Number.isFinite(limit) ? `/${limit}` : ""}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Course Sub-Category Filters (Curries / Breads / Rice) */}
      {currentCategory?.title === "Main Course" && (
        <div className="flex items-center gap-2 pt-1">
          <span className="text-xs font-medium text-neutral-400">Filter:</span>
          {subCategories.map((subCat) => (
            <button
              key={subCat}
              type="button"
              onClick={() => setMainSubCategory(subCat)}
              className={`rounded-lg px-3 py-1 text-xs font-medium transition-colors ${
                mainSubCategory === subCat
                  ? "bg-white/20 text-white border border-white/20"
                  : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {subCat === "Curry" ? "Curries" : subCat === "Bread" ? "Breads" : subCat}
            </button>
          ))}
        </div>
      )}

      {/* Limit Warning */}
      {isLimitReached && (
        <div className="flex items-center gap-2 rounded-xl bg-amber-500/10 p-3 text-xs border border-amber-500/20 text-amber-400">
          <AlertCircle size={16} className="shrink-0" />
          <span>
            You have reached the limit of {currentLimit}{" "}
            {currentCategory.title.toLowerCase()} for the{" "}
            <strong className="font-semibold text-amber-300">
              {currentPackage?.name || "selected"}
            </strong>{" "}
            package. Deselect an item to make changes.
          </span>
        </div>
      )}

      {/* Dishes Grid */}
      {!categoryDishes.length ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-12 text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-neutral-400">
            <UtensilsCrossed size={24} />
          </div>
          <h4 className="text-sm font-semibold text-white">No dishes available</h4>
          <p className="mt-1 max-w-xs text-xs text-neutral-400">
            {isPureVeg
              ? "There are no Pure Veg options available in this section."
              : "No items found in this section."}
          </p>
        </div>
      ) : (
        <motion.div
          key={`${currentCategory.id}-${mainSubCategory}`}
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categoryDishes.map((dish) => {
            const selectedList = bookingData?.[currentStateKey] || [];
            const isSelected = selectedList.includes(dish.id);
            const isDisabled = !isSelected && isLimitReached;

            return (
              <DishCard
                key={dish.id}
                dish={dish}
                isSelected={isSelected}
                isDisabled={isDisabled}
                onToggle={(dishId) =>
                  onToggleDish && onToggleDish(currentStateKey, dishId)
                }
              />
            );
          })}
        </motion.div>
      )}
    </div>
  );
}