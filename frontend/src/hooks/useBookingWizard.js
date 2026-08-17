"use client";

import { useState, useMemo, useCallback } from "react";
import { WIZARD_STEPS } from "@/constants/bookingData";
import { calculatePricing } from "@/utils/pricing";
import { isStepNextDisabled } from "@/utils/bookingValidation";
import { createApiClient } from "@/lib/api";

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

  const [isCheckingAvailability, setIsCheckingAvailability] =
    useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [bookingError, setBookingError] = useState("");

  const [bookingSuccess, setBookingSuccess] = useState(false);

  const [bookingData, setBookingData] = useState({
    eventType: "Wedding",
    date: minDateStr,
    timeSlot: "Dinner (7 PM - 11 PM)",
    guests: 50,

    // Customer contact details
    customerName: "",
    email: "",
    phoneNumber: "",

    // Venue
    venue: "",

    dietaryPreference: "Mixed",

    // Package
    packageId: "gold",

    // Menu
    starterDishes: ["s1", "s2"],
    mainCourseDishes: ["m1", "m2"],
    dessertDishes: ["d1"],
    beverageDishes: ["b1"],

    // Add-ons
    extras: [],

    // Optional
    specialInstructions: "",
  });

  const [availabilityStatus, setAvailabilityStatus] = useState({
    checked: true,
    available: true,
    message: "Date & Time slot available!",
  });

  // ── Pricing ─────────────────────────────────────────────
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

  // ── Update field ────────────────────────────────────────
  const updateField = useCallback((field, value) => {
    setBookingData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear previous submission error when user changes data
    setBookingError("");
  }, []);

  // ── Package selection ───────────────────────────────────
  const handleSelectPackage = useCallback((pkg) => {
    setBookingData((prev) => ({
      ...prev,
      packageId: pkg.id,
    }));

    setBookingError("");
  }, []);

  // ── Dish selection ──────────────────────────────────────
  const toggleDishSelection = useCallback((categoryKey, dishId) => {
    setBookingData((prev) => {
      const currentList = prev[categoryKey] || [];

      const isSelected = currentList.includes(dishId);

      return {
        ...prev,
        [categoryKey]: isSelected
          ? currentList.filter((item) => item !== dishId)
          : [...currentList, dishId],
      };
    });

    setBookingError("");
  }, []);

  // ── Extra addon selection ───────────────────────────────
  const toggleExtraAddon = useCallback((addonId) => {
    setBookingData((prev) => {
      const currentExtras = prev.extras || [];

      const isSelected = currentExtras.includes(addonId);

      return {
        ...prev,
        extras: isSelected
          ? currentExtras.filter((item) => item !== addonId)
          : [...currentExtras, addonId],
      };
    });

    setBookingError("");
  }, []);

  // ── Submit booking ──────────────────────────────────────
  const handleSubmitBooking = useCallback(async () => {
    setBookingError("");
    setBookingSuccess(false);

    // Frontend safety validation
    if (!bookingData.customerName.trim()) {
      setBookingError("Please enter your full name.");
      return;
    }

    if (!bookingData.email.trim()) {
      setBookingError("Please enter your email address.");
      return;
    }

    if (!bookingData.phoneNumber.trim()) {
      setBookingError("Please enter your phone number.");
      return;
    }

    if (!bookingData.venue.trim()) {
      setBookingError("Please enter the event venue.");
      return;
    }

    if (!bookingData.date) {
      setBookingError("Please select an event date.");
      return;
    }

    if (bookingData.guests < 10) {
      setBookingError("Minimum 10 guests are required.");
      return;
    }

    setIsSubmitting(true);

    try {
      const api = createApiClient();

      // Convert frontend state into backend API format
      const payload = {
        customerName: bookingData.customerName.trim(),

        email: bookingData.email.trim(),

        phoneNumber: bookingData.phoneNumber.trim(),

        eventType: bookingData.eventType,

        eventDate: bookingData.date,

        timeSlot: bookingData.timeSlot,

        guestCount: Number(bookingData.guests),

        venue: bookingData.venue.trim(),

        dietaryPreference: bookingData.dietaryPreference,

        packageId: bookingData.packageId,

        starterDishes: bookingData.starterDishes || [],

        mainCourseDishes: bookingData.mainCourseDishes || [],

        dessertDishes: bookingData.dessertDishes || [],

        beverageDishes: bookingData.beverageDishes || [],

        extras: bookingData.extras || [],

        specialInstructions:
          bookingData.specialInstructions?.trim() || undefined,
      };

      console.log("Submitting booking:", payload);

      const response = await api.post("/booking", payload);

      console.log("Booking created:", response);

      setBookingSuccess(true);
    } catch (error) {
      console.error("Booking submission failed:", error);

      setBookingError(
        error?.message ||
          "Unable to submit your reservation. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }, [bookingData]);

  // ── Navigation ──────────────────────────────────────────
  const handleNextStep = useCallback(() => {
    setCurrentStep((prev) =>
      Math.min(prev + 1, WIZARD_STEPS.length)
    );
  }, []);

  const handlePrevStep = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  }, []);

  const jumpToStep = useCallback((stepId) => {
    setCurrentStep((prev) =>
      stepId <= prev ? stepId : prev
    );
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

    // Booking data
    bookingData,
    minDateStr,
    maxDateStr,

    // Availability
    isCheckingAvailability,
    setIsCheckingAvailability,
    availabilityStatus,
    setAvailabilityStatus,

    // Booking submission
    handleSubmitBooking,
    isSubmitting,
    bookingError,
    bookingSuccess,

    // Field updates
    updateField,
    handleSelectPackage,
    toggleDishSelection,
    toggleExtraAddon,

    // Computed
    pricingMetrics,
    nextDisabled,
  };
}