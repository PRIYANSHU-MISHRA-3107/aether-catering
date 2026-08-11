"use client";

import { useMemo } from "react";
import {
  Calendar,
  Users,
  Utensils,
  Sparkles,
  Receipt,
  CheckCircle,
} from "lucide-react";
import {
  MENU_CATEGORIES,
  CATERING_PACKAGES,
} from "@/constants/bookingData";

export default function StepReview({
  bookingData,
  pricingMetrics,
}) {
  const selectedPackage = useMemo(() => {
    return (
      CATERING_PACKAGES.find(
        (pkg) => pkg.id === bookingData.packageId
      ) || null
    );
  }, [bookingData.packageId]);

  const totalSelectedItems = useMemo(() => {
    return MENU_CATEGORIES.reduce((total, category) => {
      return total + (bookingData[category.stateKey]?.length || 0);
    }, 0);
  }, [bookingData]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h3 className="text-2xl font-bold text-white">
          Review Your Booking
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          Please verify all your event details before submitting your reservation.
        </p>
      </div>

      {/* Event Summary */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="mb-3 flex items-center gap-2 text-orange-400">
            <Calendar size={18} />
            <span className="text-xs font-semibold uppercase">
              Event
            </span>
          </div>

          <p className="font-bold text-white">
            {bookingData.eventType}
          </p>

          <p className="mt-1 text-sm text-gray-400">
            {bookingData.date}
          </p>

          <p className="text-sm text-gray-400">
            {bookingData.timeSlot}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="mb-3 flex items-center gap-2 text-orange-400">
            <Users size={18} />
            <span className="text-xs font-semibold uppercase">
              Guests
            </span>
          </div>

          <p className="font-bold text-white">
            {bookingData.guests} Guests
          </p>

          <p className="mt-1 text-sm text-emerald-400">
            {bookingData.dietaryPreference}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="mb-3 flex items-center gap-2 text-orange-400">
            <Sparkles size={18} />
            <span className="text-xs font-semibold uppercase">
              Package
            </span>
          </div>

          <p className="font-bold text-white">
            {selectedPackage?.name || "Custom Package"}
          </p>

          <p className="mt-1 text-sm text-gray-400">
            {totalSelectedItems} Menu Items Selected
          </p>
        </div>
      </div>

      {/* Selected Menu */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-3">
          <Utensils
            size={18}
            className="text-orange-400"
          />

          <h4 className="font-bold text-white">
            Selected Menu
          </h4>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {MENU_CATEGORIES.map((category) => {
            const list =
              bookingData[category.stateKey] || [];

            return (
              <div key={category.id}>
                <h5 className="mb-2 text-sm font-bold uppercase tracking-wider text-orange-400">
                  {category.name}
                </h5>

                {list.length ? (
                  <ul className="space-y-2">
                    {list.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-500">
                    No items selected.
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Extras */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h4 className="mb-4 font-bold text-white">
          Extra Services
        </h4>

        {bookingData.extras?.length ? (
          <ul className="space-y-2">
            {bookingData.extras.map((extra) => (
              <li
                key={extra}
                className="flex items-center gap-2 text-sm text-gray-300"
              >
                <CheckCircle
                  size={15}
                  className="text-orange-400"
                />
                {extra}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">
            No extra services selected.
          </p>
        )}
      </div>

      {/* Pricing */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="mb-4 flex items-center gap-2">
          <Receipt
            size={18}
            className="text-orange-400"
          />
          <h4 className="font-bold text-white">
            Pricing Summary
          </h4>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between text-gray-400">
            <span>Subtotal</span>
            <span className="text-white">
              ₹{pricingMetrics.subtotal.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between text-gray-400">
            <span>GST (18%)</span>
            <span className="text-white">
              ₹{pricingMetrics.gstAmount.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between border-t border-white/10 pt-4 text-lg font-bold">
            <span className="text-white">
              Grand Total
            </span>

            <span className="text-orange-500">
              ₹{pricingMetrics.totalAmount.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Confirmation */}
      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
        <div className="flex items-start gap-3">
          <CheckCircle
            size={22}
            className="mt-0.5 text-emerald-400"
          />

          <div>
            <h4 className="font-semibold text-emerald-300">
              Ready to Reserve
            </h4>

            <p className="mt-1 text-sm text-emerald-100/80">
              Please verify your booking details carefully. After you
              submit your reservation, our catering team will contact
              you to confirm availability and finalize your event.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}