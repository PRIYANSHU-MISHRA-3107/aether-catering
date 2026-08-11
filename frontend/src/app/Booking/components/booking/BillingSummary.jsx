"use client";

import { useMemo } from "react";
import { Receipt, Calendar, Clock, Utensils, Users, Sparkles } from "lucide-react";
import { formatCurrency } from "@/utils/formatCurrency";
import { getPackageById } from "@/utils/packageHelpers";

function SummaryRow({ icon: Icon, label, value, valueClass = "text-white font-medium" }) {
  return (
    <div className="flex items-center justify-between text-gray-400">
      <span className="flex items-center gap-2">
        {Icon && <Icon size={13} className="text-gray-500" />}
        {label}
      </span>
      <span className={valueClass}>{value}</span>
    </div>
  );
}

export default function BillingSummary({ bookingData = {}, pricingMetrics = {} }) {
  const selectedPackage = useMemo(() => {
    return getPackageById(bookingData.packageId || bookingData.package);
  }, [bookingData.packageId, bookingData.package]);

  const {
    packageBasePrice = 0,
    extrasCost = 0,
    subtotal = 0,
    gstAmount = 0,
    totalAmount = 0,
    totalDishesCount = 0,
  } = pricingMetrics || {};

  const extrasCount = bookingData.selectedExtras?.length || 0;

  return (
    <div className="sticky top-8 rounded-3xl border border-white/5 bg-[#111111] p-6 backdrop-blur-xl shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 border border-orange-500/20">
          <Receipt size={18} />
        </div>
        <div>
          <h4 className="font-bold text-white text-base">Booking Summary</h4>
          <p className="text-[11px] text-gray-400">Live breakdown of your event order</p>
        </div>
      </div>

      <div className="space-y-3.5 text-xs">
        {/* Event Details */}
        <div className="space-y-2.5 pb-4 border-b border-white/5">
          <SummaryRow icon={Sparkles} label="Event Type" value={bookingData.eventType || "—"} />
          <SummaryRow icon={Calendar} label="Date" value={bookingData.date || "—"} />
          <SummaryRow icon={Clock} label="Time Slot" value={bookingData.timeSlot || "—"} />
          <SummaryRow
            icon={Users}
            label="Guests"
            value={bookingData.guests ? `${bookingData.guests} People` : "—"}
          />
          <SummaryRow
            icon={Utensils}
            label="Preference"
            value={bookingData.dietaryPreference || "Standard"}
            valueClass="text-emerald-400 font-semibold"
          />
        </div>

        {/* Selections */}
        <div className="space-y-2.5 pb-4 border-b border-white/5">
          <SummaryRow
            label="Selected Package"
            value={selectedPackage?.name || "No Package"}
            valueClass="text-orange-400 font-semibold"
          />
          <SummaryRow
            label="Dishes Selected"
            value={totalDishesCount > 0 ? `${totalDishesCount} Items` : "—"}
          />
          <SummaryRow
            label="Extra Services"
            value={extrasCount > 0 ? `${extrasCount} Selected` : "None"}
          />
        </div>

        {/* Pricing */}
        <div className="space-y-2 pt-1">
          <SummaryRow label="Package Rate" value={formatCurrency(packageBasePrice)} valueClass="text-white" />
          {extrasCost > 0 && (
            <SummaryRow label="Add-ons Total" value={formatCurrency(extrasCost)} valueClass="text-white" />
          )}
          <div className="pt-1 border-t border-white/5">
            <SummaryRow label="Subtotal" value={formatCurrency(subtotal)} valueClass="text-white font-semibold" />
          </div>
          <SummaryRow label="GST (18%)" value={formatCurrency(gstAmount)} valueClass="text-white" />
        </div>

        {/* Total */}
        <div className="flex items-center justify-between text-base font-black text-white pt-4 border-t border-white/10 mt-4">
          <div>
            <span>Total Amount</span>
            <p className="text-[10px] font-normal text-gray-400">Includes all taxes & charges</p>
          </div>
          <span className="text-orange-500 text-xl font-extrabold">
            {formatCurrency(totalAmount)}
          </span>
        </div>
      </div>
    </div>
  );
}