"use client";

import { useState, useMemo, useCallback } from "react";
import { WIZARD_STEPS } from "@/constants/bookingData";
import { calculatePricing } from "@/utils/pricing";
import { isStepNextDisabled } from "@/utils/bookingValidation";

export function useBookingWizard() {
  // ── Date bounds ─────────────────────────────────────────
  const today = new Date();
  const minDateStr = today.toISOString().split("T")[0];

  const maxDate = new Date();
  maxDate.setFullYear(today.getFullYear() + 1);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  // ── State ───────────────────────────────────────────────
  const [currentStep, setCurrentStep] = useState(1);
  const [activeCategory, setActiveCategory] = useState("starters");
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);

  const [bookingData, setBookingData] = useState({
    eventType: "Wedding",
    date: minDateStr,
    timeSlot: "Dinner (7 PM - 11 PM)",
    guests: 50,
    dietaryPreference: "Mixed",
    packageId: "gold-feast",
    starterDishes: ["s1", "s2"],
    mainCourseDishes: ["m1", "m2"],
    dessertDishes: ["d1"],
    beverageDishes: ["b1"],
    extras: ["e1"],
  });

  const [availabilityStatus, setAvailabilityStatus] = useState({
    checked: true,
    available: true,
    message: "Date & Time slot available!",
  });

  // ── Derived data ────────────────────────────────────────
  const pricingMetrics = useMemo(() => {
    return calculatePricing(bookingData);
  }, [bookingData]);

  // ── Validation ──────────────────────────────────────────
  const nextDisabled = useMemo(() => {
    return isStepNextDisabled(
      currentStep,
      bookingData,
      availabilityStatus
    );
  }, [currentStep, bookingData, availabilityStatus]);

  // ── Actions ─────────────────────────────────────────────
  const updateField = useCallback((field, value) => {
    setBookingData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleSelectPackage = useCallback((pkg) => {
    setBookingData((prev) => ({ ...prev, packageId: pkg.id }));
  }, []);

  const toggleDishSelection = useCallback((categoryKey, dishId) => {
    setBookingData((prev) => {
      const currentList = prev[categoryKey];
      const isSelected = currentList.includes(dishId);

      return {
        ...prev,
        [categoryKey]: isSelected
          ? currentList.filter((item) => item !== dishId)
          : [...currentList, dishId],
      };
    });
  }, []);

  const toggleExtraAddon = useCallback((addonId) => {
    setBookingData((prev) => {
      const currentExtras = prev.extras;
      const isSelected = currentExtras.includes(addonId);

      return {
        ...prev,
        extras: isSelected
          ? currentExtras.filter((item) => item !== addonId)
          : [...currentExtras, addonId],
      };
    });
  }, []);

  const handleNextStep = useCallback(() => {
    setCurrentStep((prev) => Math.min(prev + 1, WIZARD_STEPS.length));
  }, []);

  const handlePrevStep = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  }, []);

  const jumpToStep = useCallback((stepId) => {
    setCurrentStep((prev) => (stepId <= prev ? stepId : prev));
  }, []);

  // ── Return ──────────────────────────────────────────────
  return {
    // Navigation
    currentStep,
    activeCategory,
    setActiveCategory,
    handleNextStep,
    handlePrevStep,
    jumpToStep,

    // Data
    bookingData,
    minDateStr,
    maxDateStr,

    // Availability
    isCheckingAvailability,
    setIsCheckingAvailability,
    availabilityStatus,
    setAvailabilityStatus,

    // Selections
    updateField,
    handleSelectPackage,
    toggleDishSelection,
    toggleExtraAddon,

    // Computed
    pricingMetrics,
    nextDisabled,
  };
}