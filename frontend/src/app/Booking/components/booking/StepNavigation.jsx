"use client";

import { WIZARD_STEPS } from "@/constants/bookingData";
import { Check } from "lucide-react";

export default function StepNavigation({ currentStep, onStepClick }) {
  return (
    <div className="mb-10 w-full overflow-x-auto pb-4">
      <div className="flex items-center justify-between min-w-[600px]">
        {WIZARD_STEPS.map((step) => {
          const isCompleted = currentStep > step.id;
          const isCurrent = currentStep === step.id;

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => onStepClick(step.id)}
              disabled={step.id > currentStep}
              className={`flex items-center gap-3 transition ${
                step.id > currentStep ? "cursor-not-allowed opacity-40" : "cursor-pointer"
              }`}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold transition-all ${
                  isCompleted
                    ? "bg-orange-500 text-white"
                    : isCurrent
                    ? "border-2 border-orange-500 bg-orange-500/10 text-orange-400"
                    : "border border-white/10 bg-white/5 text-gray-400"
                }`}
              >
                {isCompleted ? <Check size={16} /> : step.id}
              </div>
              <span
                className={`text-sm font-semibold whitespace-nowrap ${
                  isCurrent ? "text-white" : "text-gray-400"
                }`}
              >
                {step.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}