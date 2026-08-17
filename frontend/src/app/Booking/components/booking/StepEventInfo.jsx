"use client";

import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  MapPin,
} from "lucide-react";

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
        <label
          htmlFor="eventType"
          className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400"
        >
          Event Type
        </label>

        <select
          id="eventType"
          value={bookingData.eventType}
          onChange={(e) => updateField("eventType", e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
        >
          <option value="" disabled className="bg-black">
            Select Event Type
          </option>

          <option value="Wedding" className="bg-black">
            Wedding
          </option>

          <option value="Birthday Party" className="bg-black">
            Birthday Party
          </option>

          <option value="Corporate Event" className="bg-black">
            Corporate Event
          </option>

          <option value="Anniversary" className="bg-black">
            Anniversary
          </option>
        </select>
      </div>

      {/* Venue */}
      <div>
        <label
          htmlFor="venue"
          className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400"
        >
          Venue <span className="text-orange-500">*</span>
        </label>

        <div className="relative">
          <MapPin
            size={17}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            id="venue"
            type="text"
            value={bookingData.venue}
            onChange={(e) => updateField("venue", e.target.value)}
            placeholder="e.g. Hotel Grand, Sambalpur"
            autoComplete="street-address"
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 pl-11 text-sm text-white outline-none transition placeholder:text-gray-600 hover:border-white/20 focus:border-orange-500 focus:bg-white/[0.06] focus:ring-2 focus:ring-orange-500/10"
          />
        </div>
      </div>

      {/* Date & Time */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Date */}
        <div>
          <label
            htmlFor="eventDate"
            className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400"
          >
            Date
          </label>

          <input
            id="eventDate"
            type="date"
            min={minDateStr}
            max={maxDateStr}
            value={bookingData.date}
            onChange={(e) => updateField("date", e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
          />
        </div>

        {/* Time Slot */}
        <div>
          <label
            htmlFor="timeSlot"
            className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400"
          >
            Time Slot
          </label>

          <select
            id="timeSlot"
            value={bookingData.timeSlot}
            onChange={(e) => updateField("timeSlot", e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
          >
            <option value="" disabled className="bg-black">
              Select Slot
            </option>

            <option
              value="Lunch (12 PM - 3 PM)"
              className="bg-black"
            >
              Lunch (12 PM - 3 PM)
            </option>

            <option
              value="Dinner (7 PM - 11 PM)"
              className="bg-black"
            >
              Dinner (7 PM - 11 PM)
            </option>
          </select>
        </div>
      </div>

      {/* Availability Status */}
      {isCheckingAvailability ? (
        <div className="flex items-center gap-2 text-xs text-orange-400">
          <Loader2 size={14} className="animate-spin" />
          Checking availability...
        </div>
      ) : (
        availabilityStatus.checked && (
          <div
            className={`flex items-center gap-2 rounded-xl border p-3 text-xs font-semibold ${
              availabilityStatus.available
                ? "border-green-500/20 bg-green-500/10 text-green-400"
                : "border-red-500/20 bg-red-500/10 text-red-400"
            }`}
          >
            {availabilityStatus.available ? (
              <CheckCircle2 size={16} />
            ) : (
              <AlertCircle size={16} />
            )}

            {availabilityStatus.message}
          </div>
        )
      )}
    </div>
  );
}