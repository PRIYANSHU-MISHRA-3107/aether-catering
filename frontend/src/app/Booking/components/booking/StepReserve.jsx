"use client";

import {
  CheckCircle2,
  ShieldCheck,
  Mail,
  Phone,
  User,
  MapPin,
  AlertCircle,
} from "lucide-react";

export default function StepReserve({
  bookingData,
  updateField,
  onSubmit,
  isSubmitting,
  bookingError,
  bookingSuccess,
}) {
  return (
    <div className="space-y-6">
      {/* Reservation Header */}
      <div className="rounded-2xl border border-orange-500/20 bg-orange-500/[0.06] p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
            <CheckCircle2 size={22} />
          </div>

          <div>
            <h4 className="text-lg font-bold text-white">
              Complete Your Reservation
            </h4>

            <p className="mt-1 text-sm leading-6 text-gray-400">
              Your event details are ready. Provide your contact information
              below to submit your catering reservation request.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-5">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300">
            Contact Information
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            We'll use these details to confirm your booking.
          </p>
        </div>

        {/* Full Name */}
        <div>
          <label
            htmlFor="customerName"
            className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400"
          >
            Full Name <span className="text-orange-500">*</span>
          </label>

          <div className="group relative">
            <User
              size={17}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors group-focus-within:text-orange-400"
            />

            <input
              id="customerName"
              type="text"
              value={bookingData?.customerName || ""}
              onChange={(e) =>
                updateField("customerName", e.target.value)
              }
              placeholder="e.g. Rahul Sharma"
              autoComplete="name"
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 pl-11 text-sm text-white outline-none transition-all placeholder:text-gray-600 hover:border-white/20 focus:border-orange-500/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-orange-500/10"
            />
          </div>
        </div>

        {/* Venue */}
        <div>
          <label
            htmlFor="venue"
            className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400"
          >
            Event Venue <span className="text-orange-500">*</span>
          </label>

          <div className="group relative">
            <MapPin
              size={17}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors group-focus-within:text-orange-400"
            />

            <input
              id="venue"
              type="text"
              value={bookingData?.venue || ""}
              onChange={(e) => updateField("venue", e.target.value)}
              placeholder="e.g. Grand Palace, Sambalpur"
              autoComplete="street-address"
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 pl-11 text-sm text-white outline-none transition-all placeholder:text-gray-600 hover:border-white/20 focus:border-orange-500/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-orange-500/10"
            />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400"
            >
              Email Address <span className="text-orange-500">*</span>
            </label>

            <div className="group relative">
              <Mail
                size={17}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors group-focus-within:text-orange-400"
              />

              <input
                id="email"
                type="email"
                value={bookingData?.email || ""}
                onChange={(e) =>
                  updateField("email", e.target.value)
                }
                placeholder="rahul@example.com"
                autoComplete="email"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 pl-11 text-sm text-white outline-none transition-all placeholder:text-gray-600 hover:border-white/20 focus:border-orange-500/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-orange-500/10"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400"
            >
              Phone Number <span className="text-orange-500">*</span>
            </label>

            <div className="group relative">
              <Phone
                size={17}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors group-focus-within:text-orange-400"
              />

              <input
                id="phoneNumber"
                type="tel"
                value={bookingData?.phoneNumber || ""}
                onChange={(e) =>
                  updateField("phoneNumber", e.target.value)
                }
                placeholder="+91 98765 43210"
                autoComplete="tel"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 pl-11 text-sm text-white outline-none transition-all placeholder:text-gray-600 hover:border-white/20 focus:border-orange-500/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-orange-500/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {bookingError && (
        <div className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4">
          <AlertCircle
            size={18}
            className="mt-0.5 shrink-0 text-red-400"
          />

          <div>
            <p className="text-sm font-semibold text-red-400">
              Reservation Failed
            </p>

            <p className="mt-1 text-xs leading-5 text-red-300/80">
              {bookingError}
            </p>
          </div>
        </div>
      )}

      {/* Success Message */}
      {bookingSuccess && (
        <div className="flex items-start gap-3 rounded-xl border border-green-500/20 bg-green-500/10 p-4">
          <CheckCircle2
            size={18}
            className="mt-0.5 shrink-0 text-green-400"
          />

          <div>
            <p className="text-sm font-semibold text-green-400">
              Reservation Submitted
            </p>

            <p className="mt-1 text-xs leading-5 text-green-300/80">
              Your catering reservation has been submitted successfully.
              Please check your email for the confirmation.
            </p>
          </div>
        </div>
      )}

      {/* Security / Trust */}
      <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <ShieldCheck
          size={18}
          className="mt-0.5 shrink-0 text-orange-400"
        />

        <div>
          <p className="text-sm font-medium text-gray-300">
            Secure Reservation
          </p>

          <p className="mt-1 text-xs leading-5 text-gray-500">
            Your contact information is kept secure. No payment is required
            at this stage.
          </p>
        </div>
      </div>

      {/* Submit Reservation */}
      <button
        type="button"
        onClick={onSubmit}
        disabled={isSubmitting || bookingSuccess}
        className="w-full rounded-xl bg-orange-500 px-6 py-4 text-sm font-bold text-white shadow-[0_0_25px_rgba(249,115,22,0.2)] transition-all hover:bg-orange-600 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting
          ? "Submitting Reservation..."
          : bookingSuccess
            ? "Reservation Submitted ✓"
            : "Confirm Reservation"}
      </button>
    </div>
  );
}