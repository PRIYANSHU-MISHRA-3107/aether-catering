"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-white border-t border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              Your<span className="text-[#F97316]">Catering</span>
            </h2>
            <p className="text-gray-400 mt-4 text-sm leading-6">
              Premium catering services for weddings, corporate events,
              birthdays, and special occasions. We deliver taste, elegance,
              and perfection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Wedding Catering</li>
              <li>Corporate Events</li>
              <li>Birthday Parties</li>
              <li>Private Events</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>

            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#F97316]" />
                +91  98926 9XXXX
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#F97316]" />
                info@yourcatering.com
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#F97316]" />
                Odisha , Sambalpur
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-[#2A2A2A] pt-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          
          <p>
            © {new Date().getFullYear()} YourCatering. All rights reserved.
          </p>

          <p className="mt-2 md:mt-0">
            Designed & Developed with <span className="text-[#F97316]">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
}