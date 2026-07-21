"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactPreview() {
  return (
    <section className="py-24 bg-[#0B0B0B] text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="text-[#F97316]">Touch</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We’re here to help you plan your perfect event. Reach out anytime
            for inquiries, bookings, or consultations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#161616] border border-[#2A2A2A] rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-5 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="text-[#F97316]" size={18} />
                <span>+91 98926 9XXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-[#F97316]" size={18} />
                <span>info@yourcatering.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-[#F97316]" size={18} />
                <span>Odisha, Sambalpur</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="text-[#F97316]" size={18} />
                <span>Mon - Sun: 9:00 AM - 9:00 PM</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Enquiry Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#161616] border border-[#2A2A2A] rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Need a Quick Response?
              </h3>

              <p className="text-gray-400 mb-8">
                Send us your event details and our team will get back to you
                within 24 hours with a customized quote.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-[#F97316] text-black font-semibold px-6 py-4 rounded-full hover:bg-orange-500 transition-all"
            >
              Send Enquiry
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}