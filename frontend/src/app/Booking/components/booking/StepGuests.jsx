"use client";

import { UserPlus, UserMinus, Leaf, Utensils, Flame } from "lucide-react";

export default function StepGuests({ bookingData, updateField }) {
  const currentGuests = Number(bookingData.guests) || 10;

  const handleIncrement = (amount) => {
    updateField("guests", Math.max(10, currentGuests + amount));
  };

  const dietaryOptions = [
    { id: "Pure Veg", label: "Pure Veg", icon: Leaf, color: "text-green-400 border-green-500/30 bg-green-500/10" },
    { id: "Non-Veg", label: "Non-Veg", icon: Flame, color: "text-red-400 border-red-500/30 bg-red-500/10" },
    { id: "Mixed", label: "Veg & Non-Veg", icon: Utensils, color: "text-orange-400 border-orange-500/30 bg-orange-500/10" },
  ];

  return (
    <div className="space-y-8 py-2">
      {/* Dietary Preference Selection */}
      <div>
        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
          Food Preference
        </label>
        <div className="grid grid-cols-3 gap-3">
          {dietaryOptions.map((option) => {
            const Icon = option.icon;
            const isSelected = bookingData.dietaryPreference === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => updateField("dietaryPreference", option.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition ${
                  isSelected
                    ? option.color + " shadow-lg"
                    : "border-white/5 bg-white/5 text-gray-400 hover:border-white/20 hover:text-white"
                }`}
              >
                <Icon size={20} className="mb-2" />
                <span className="text-xs font-bold">{option.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Guest Headcount Section */}
      <div>
        <h4 className="text-sm font-semibold text-gray-300 mb-1">Estimated Guest Count</h4>
        <p className="text-xs text-gray-500">
          Adjust the guest slider or use quick preset buttons to update your headcount.
        </p>
      </div>

      {/* Counter Control Block */}
      <div className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-md">
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => handleIncrement(-10)}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:bg-white/10 active:scale-95"
          >
            <UserMinus size={18} />
          </button>

          <div className="text-center min-w-[120px]">
            <span className="text-5xl font-black text-white">{currentGuests}</span>
            <span className="block text-xs text-orange-400 font-semibold mt-1">GUESTS</span>
          </div>

          <button
            type="button"
            onClick={() => handleIncrement(10)}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:bg-white/10 active:scale-95"
          >
            <UserPlus size={18} />
          </button>
        </div>

        {/* Range Slider */}
        <div className="w-full mt-8">
          <input
            type="range"
            min="10"
            max="1000"
            step="5"
            value={currentGuests}
            onChange={(e) => updateField("guests", Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/10 accent-orange-500"
          />
          <div className="flex justify-between text-[10px] font-bold text-gray-500 mt-2">
            <span>10 Min</span>
            <span>250</span>
            <span>500</span>
            <span>1000+ Max</span>
          </div>
        </div>
      </div>

      {/* Quick Presets */}
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
          Quick Select
        </p>
        <div className="grid grid-cols-4 gap-3">
          {[25, 50, 100, 250].map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => updateField("guests", preset)}
              className={`rounded-xl border py-3 text-xs font-bold transition ${
                currentGuests === preset
                  ? "border-orange-500 bg-orange-500/10 text-orange-400"
                  : "border-white/5 bg-white/5 text-gray-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {preset} Guests
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}