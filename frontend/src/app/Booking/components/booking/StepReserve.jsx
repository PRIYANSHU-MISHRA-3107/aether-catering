"use client";

import { CheckCircle2, ShieldCheck, Mail, Phone, User } from "lucide-react";

export default function StepReserve() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-6 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 text-green-400">
          <CheckCircle2 size={24} />
        </div>
        <h4 className="text-lg font-bold text-white">Your Order Details are Ready</h4>
        <p className="text-xs text-green-300 mt-1">
          Provide your contact details below to finalize your catering date reservation.
        </p>
      </div>

      {/* User Information Form */}
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Full Name
          </label>
          <div className="relative">
            <User size={16} className="absolute left-4 top-4 text-gray-500" />
            <input
              type="text"
              placeholder="e.g. Rahul Sharma"
              className="w-full rounded-xl bg-white/5 border border-white/10 p-3.5 pl-11 text-sm text-white placeholder-gray-600 focus:border-orange-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-4 top-4 text-gray-500" />
              <input
                type="email"
                placeholder="rahul@example.com"
                className="w-full rounded-xl bg-white/5 border border-white/10 p-3.5 pl-11 text-sm text-white placeholder-gray-600 focus:border-orange-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Phone Number
            </label>
            <div className="relative">
              <Phone size={16} className="absolute left-4 top-4 text-gray-500" />
              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full rounded-xl bg-white/5 border border-white/10 p-3.5 pl-11 text-sm text-white placeholder-gray-600 focus:border-orange-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-500 pt-2">
        <ShieldCheck size={16} className="text-orange-500" />
        <span>100% Secure Reservation. No instant charge required today.</span>
      </div>
    </div>
  );
}