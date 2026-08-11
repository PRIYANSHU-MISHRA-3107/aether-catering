"use client";

import { CATERING_PACKAGES } from "@/constants/bookingData";
import { Check, Sparkles, ChevronRight } from "lucide-react";

export default function StepPackage({ bookingData, onSelectPackage }) {
  return (
    <div className="space-y-4">
      {CATERING_PACKAGES?.map((pkg) => {
        const isSelected = bookingData.package === pkg.name;

        return (
          <div
            key={pkg.id || pkg.name}
            onClick={() => onSelectPackage(pkg)}
            className={`group relative flex flex-col md:flex-row items-stretch justify-between rounded-3xl transition-all duration-300 cursor-pointer overflow-hidden border ${
              isSelected
                ? "border-orange-500/80 bg-neutral-900/90 shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)] ring-1 ring-orange-500/50"
                : "border-white/10 bg-neutral-950/60 hover:border-white/20 hover:bg-neutral-900/50"
            }`}
          >
            {/* Active Left Accent Strip */}
            <div
              className={`w-2 transition-colors duration-300 ${
                isSelected ? "bg-orange-500" : "bg-transparent group-hover:bg-white/20"
              }`}
            />

            {/* Left Content Area */}
            <div className="flex-1 p-6 flex flex-col justify-between gap-4">
              <div>
                {/* Package Name & Badges */}
                <div className="flex items-center gap-3 mb-1.5">
                  <h4 className="text-xl font-black text-white tracking-wide group-hover:text-orange-400 transition-colors">
                    {pkg.name}
                  </h4>
                  {pkg.popular && (
                    <span className="flex items-center gap-1 rounded-full bg-orange-500/10 border border-orange-500/30 px-3 py-0.5 text-[10px] font-bold text-orange-400">
                      <Sparkles size={11} />
                      POPULAR
                    </span>
                  )}
                </div>

                <p className="text-xs text-neutral-400 max-w-xl leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Horizontal Feature Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {pkg.features?.map((feature, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 border border-white/5 px-2.5 py-1 text-[11px] font-medium text-neutral-300"
                  >
                    <Check size={12} className="text-orange-500" />
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Action & Pricing Area */}
            <div className="p-6 md:w-64 bg-white/[0.02] border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-between items-start md:items-end gap-4">
              {/* Radio Indicator */}
              <div className="flex items-center gap-2 self-end">
                <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                  {isSelected ? "Active" : "Select"}
                </span>
                <div
                  className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    isSelected
                      ? "border-orange-500 bg-orange-500"
                      : "border-neutral-600 bg-transparent group-hover:border-neutral-400"
                  }`}
                >
                  {isSelected && <div className="h-2 w-2 rounded-full bg-black" />}
                </div>
              </div>

              {/* Pricing Display */}
              <div className="text-left md:text-right">
                <div className="text-2xl font-black text-white">
                  ₹{pkg.price}
                  <span className="text-xs font-normal text-neutral-400"> / guest</span>
                </div>
                <div className="text-[10px] text-neutral-500 mt-0.5">
                  Taxes & setup charges applicable
                </div>
              </div>

              {/* Dynamic Action Trigger */}
              <div
                className={`w-full flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-orange-500 text-black shadow-md shadow-orange-500/20"
                    : "bg-white/10 text-white group-hover:bg-orange-500/20 group-hover:text-orange-400"
                }`}
              >
                <span>{isSelected ? "Selected" : "Choose Option"}</span>
                <ChevronRight size={14} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}