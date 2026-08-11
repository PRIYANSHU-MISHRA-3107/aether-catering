"use client";

import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

export default function StepEventInfo({
  bookingData,
  updateField,
  isCheckingAvailability,
  availabilityStatus,
  minDateStr,
  maxDateStr,
}) {
  return (
    <div className="space-y-6">
      {/* Event Type */}
      <div>
        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
          Event Type
        </label>
        <select
          value={bookingData.eventType}
          onChange={(e) => updateField("eventType", e.target.value)}
          className="w-full rounded-xl bg-white/5 border border-white/10 p-4 text-white focus:border-orange-500 focus:outline-none"
        >
          <option value="" disabled className="bg-black">Select Event Type</option>
          <option value="Wedding" className="bg-black">Wedding</option>
          <option value="Birthday Party" className="bg-black">Birthday Party</option>
          <option value="Corporate Event" className="bg-black">Corporate Event</option>
          <option value="Anniversary" className="bg-black">Anniversary</option>
        </select>
      </div>

      {/* Date & Time Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Date
          </label>
          <input
            type="date"
            min={minDateStr}
            max={maxDateStr}
            value={bookingData.date}
            onChange={(e) => updateField("date", e.target.value)}
            className="w-full rounded-xl bg-white/5 border border-white/10 p-4 text-white focus:border-orange-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Time Slot
          </label>
          <select
            value={bookingData.timeSlot}
            onChange={(e) => updateField("timeSlot", e.target.value)}
            className="w-full rounded-xl bg-white/5 border border-white/10 p-4 text-white focus:border-orange-500 focus:outline-none"
          >
            <option value="" disabled className="bg-black">Select Slot</option>
            <option value="Lunch (12 PM - 3 PM)" className="bg-black">Lunch (12 PM - 3 PM)</option>
            <option value="Dinner (7 PM - 11 PM)" className="bg-black">Dinner (7 PM - 11 PM)</option>
          </select>
        </div>
      </div>

      {/* Real-time Status Badge */}
      {isCheckingAvailability ? (
        <div className="flex items-center gap-2 text-xs text-orange-400">
          <Loader2 size={14} className="animate-spin" /> Checking availability...
        </div>
      ) : availabilityStatus.checked && (
        <div
          className={`flex items-center gap-2 rounded-xl p-3 text-xs font-semibold ${
            availabilityStatus.available
              ? "bg-green-500/10 text-green-400 border border-green-500/20"
              : "bg-red-500/10 text-red-400 border border-red-500/20"
          }`}
        >
          {availabilityStatus.available ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
          {availabilityStatus.message}
        </div>
      )}
    </div>
  );
}