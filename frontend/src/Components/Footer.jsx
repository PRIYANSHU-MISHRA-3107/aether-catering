'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-zinc-900">

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 py-20">

        {/* TOP */}

        <div className="grid lg:grid-cols-2 gap-16 pb-20 border-b border-zinc-900">

          {/* Brand */}

          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-amber-500 block mb-6">
              Premium Catering
            </span>

            <h2 className="text-4xl md:text-6xl leading-[0.95] tracking-tight font-light max-w-2xl">
              Exceptional hospitality.
              <br />
              Memorable experiences.
            </h2>

            <p className="text-zinc-500 mt-8 max-w-md leading-relaxed">
              Luxury catering for weddings, corporate gatherings,
              private dining experiences, and large-scale celebrations.
            </p>
          </div>

          {/* Contact */}

          <div className="lg:pl-24">

            <p className="text-zinc-500 uppercase tracking-[0.25em] text-xs mb-8">
              Contact
            </p>

            <div className="space-y-6">

              <a
                href="mailto:hello@yourbrand.com"
                className="block text-xl hover:text-amber-500 transition-colors"
              >
                the email id 
              </a>

              <a
                href="tel: +91 9xxxx 8xxxx"
                className="block text-xl hover:text-amber-500 transition-colors"
              >
                +91 9xxxx 8xxxx
              </a>

              <p className="text-zinc-500">
                Odisha, India
              </p>

            </div>

          </div>

        </div>

        {/* MIDDLE */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 py-16 border-b border-zinc-900">

          {/* Navigation */}

          <div>

            <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6">
              Navigation
            </h3>

            <div className="flex flex-col gap-4">

              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
                >
                  {item.name}

                  <ArrowUpRight
                    size={16}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />
                </Link>
              ))}

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6">
              Services
            </h3>

            <div className="flex flex-col gap-4 text-zinc-400">

              <span>Wedding Catering</span>
              <span>Corporate Catering</span>
              <span>Private Dining</span>
              <span>Festival Catering</span>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6">
              Social
            </h3>

            <div className="flex items-center gap-5">

            <a
  href="#"
  className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
>
  <FaInstagram size={18} />
</a>

<a
  href="#"
  className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
>
  <FaLinkedinIn size={18} />
</a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10">

          <p className="text-zinc-600 text-sm">
            © 2026 Premium Catering. All rights reserved.
          </p>

          <div className="flex items-center gap-8 text-sm text-zinc-600">

            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}