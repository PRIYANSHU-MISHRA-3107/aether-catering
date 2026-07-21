"use client";

import { motion } from "framer-motion";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="relative bg-[#090909] py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Heading */}

        <div className="mb-14 text-center">
          <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
            Send us a Message
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white">
            We'd Love to Hear From You
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400 leading-8">
            Have a question, special request, or need help planning your
            event? Fill out the form below and our team will get back to
            you as soon as possible.
          </p>
        </div>

        {/* Form */}

        <motion.form
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 backdrop-blur-xl"
        >
          <div className="grid gap-6 md:grid-cols-2">

            {/* Name */}

            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-4 text-orange-500"
              />

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] py-4 pl-12 pr-4 text-white outline-none transition focus:border-orange-500"
              />
            </div>

            {/* Phone */}

            <div className="relative">
              <Phone
                size={18}
                className="absolute left-4 top-4 text-orange-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] py-4 pl-12 pr-4 text-white outline-none transition focus:border-orange-500"
              />
            </div>

            {/* Email */}

            <div className="relative md:col-span-2">
              <Mail
                size={18}
                className="absolute left-4 top-4 text-orange-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] py-4 pl-12 pr-4 text-white outline-none transition focus:border-orange-500"
              />
            </div>

            {/* Subject */}

            <div className="md:col-span-2">
              <select className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-orange-500">
                <option className="bg-[#111]">
                  Select Inquiry Type
                </option>

                <option className="bg-[#111]">
                  General Inquiry
                </option>

                <option className="bg-[#111]">
                  Catering Services
                </option>

                <option className="bg-[#111]">
                  Wedding Catering
                </option>

                <option className="bg-[#111]">
                  Corporate Event
                </option>

                <option className="bg-[#111]">
                  Feedback
                </option>
              </select>
            </div>

            {/* Message */}

            <div className="relative md:col-span-2">
              <MessageSquare
                size={18}
                className="absolute left-4 top-5 text-orange-500"
              />

              <textarea
                rows={6}
                placeholder="Tell us how we can help you..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] py-4 pl-12 pr-4 text-white outline-none transition focus:border-orange-500"
              />
            </div>

          </div>

          {/* Button */}

          <button
            type="submit"
            className="group mt-8 inline-flex items-center gap-3 rounded-2xl bg-orange-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-orange-600"
          >
            Send Message

            <Send
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </motion.form>
      </div>
    </section>
  );
}