"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Users,
  Package,
  Utensils,
  ClipboardList,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";

import { WIZARD_STEPS } from "@/constants/bookingData";
import { useBookingWizard } from "@/hooks/useBookingWizard";

import StepNavigation from "./StepNavigation";
import BillingSummary from "./BillingSummary";
import StepEventInfo from "./StepEventInfo";
import StepGuests from "./StepGuests";
import StepPackage from "./StepPackage";
import StepCustomize from "./StepCustomize";
import StepReview from "./StepReview";
import StepReserve from "./StepReserve";

// Map step numbers (1–6) to Lucide icon components
const STEP_ICONS = {
  1: Calendar,
  2: Users,
  3: Package,
  4: Utensils,
  5: ClipboardList,
  6: CheckCircle2,
};

export default function BookingWizard() {
  const {
    currentStep,
    activeCategory,
    isCheckingAvailability,
    bookingData,
    minDateStr,
    maxDateStr,
    availabilityStatus,
    pricingMetrics,
    nextDisabled,
    setActiveCategory,
    updateField,
    handleSelectPackage,
    toggleDishSelection,
    toggleExtraAddon,
    handleNextStep,
    handlePrevStep,
    jumpToStep,
  } = useBookingWizard();

  const currentStepInfo = WIZARD_STEPS[currentStep - 1] || WIZARD_STEPS[0];
  
  // Safe resolution: Map lookup with fallback icon to prevent undefined errors
  const StepIcon = STEP_ICONS[currentStep] || currentStepInfo?.icon || HelpCircle;
  
  // Flag to check if we are on the final step
  const isFinalStep = currentStep === WIZARD_STEPS.length;

  return (
    <section className="relative min-h-screen select-none bg-[#090909] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Step Progress Header */}
        <StepNavigation currentStep={currentStep} onStepClick={jumpToStep} />

        {/* Main Grid Layout */}
        <div className="grid items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.div
              layout
              className="rounded-3xl border border-white/5 bg-[#111111] p-6 backdrop-blur-xl sm:p-8"
            >
              {/* Active Step Title Bar */}
              <div className="mb-8 flex items-center gap-4 border-b border-white/5 pb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-orange-500">
                  <StepIcon size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-400">
                    Step {currentStep} of {WIZARD_STEPS.length}
                  </p>
                  <h3 className="text-2xl font-black text-white">
                    {currentStepInfo?.title || "Booking Step"}
                  </h3>
                </div>
              </div>

              {/* Dynamic View Switcher */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {currentStep === 1 && (
                    <StepEventInfo
                      bookingData={bookingData}
                      updateField={updateField}
                      isCheckingAvailability={isCheckingAvailability}
                      availabilityStatus={availabilityStatus}
                      minDateStr={minDateStr}
                      maxDateStr={maxDateStr}
                    />
                  )}

                  {currentStep === 2 && (
                    <StepGuests
                      bookingData={bookingData}
                      updateField={updateField}
                    />
                  )}

                  {currentStep === 3 && (
                    <StepPackage
                      bookingData={bookingData}
                      onSelectPackage={handleSelectPackage}
                    />
                  )}

                  {currentStep === 4 && (
                    <StepCustomize
                      bookingData={bookingData}
                      pricingMetrics={pricingMetrics}
                      activeCategory={activeCategory}
                      setActiveCategory={setActiveCategory}
                      onToggleDish={toggleDishSelection}
                      onToggleExtraAddon={toggleExtraAddon}
                    />
                  )}

                  {currentStep === 5 && (
                    <StepReview
                      bookingData={bookingData}
                      pricingMetrics={pricingMetrics}
                    />
                  )}

                  {currentStep === 6 && (
                    <StepReserve 
                      bookingData={bookingData} 
                      pricingMetrics={pricingMetrics} 
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Action Buttons */}
              <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  disabled={currentStep === 1}
                  className={`flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-bold transition ${
                    currentStep === 1
                      ? "cursor-not-allowed bg-white/5 text-neutral-500 opacity-50"
                      : "bg-white/5 text-white hover:bg-white/10 active:scale-95"
                  }`}
                >
                  <ArrowLeft size={14} /> Back
                </button>

                {/* Hide the 'Continue' button on the final Reserve step to let StepReserve handle the final CTA */}
                {!isFinalStep && (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    disabled={nextDisabled}
                    className={`flex items-center gap-2 rounded-xl px-6 py-3 text-xs font-bold transition ${
                      nextDisabled
                        ? "cursor-not-allowed bg-orange-500/50 text-white opacity-40"
                        : "bg-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:bg-orange-600 active:scale-95"
                    }`}
                  >
                    {currentStep === WIZARD_STEPS.length - 1
                      ? "Proceed to Reserve"
                      : "Continue"}
                    <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </motion.div>
          </div>

          {/* Sticky Billing Summary Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <BillingSummary
                bookingData={bookingData}
                pricingMetrics={pricingMetrics}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}