'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, User } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/Services' },
    { name: 'Menu', href: '/Menu' },
    { name: 'Booking', href: '/Booking' },
    { name: 'Contact', href: '/Contact' },
  ];

  return (
    <>
      {/* Dynamic Style Tag for Custom Keyframes */}
      <style>{`
        @keyframes pulseScale {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0px rgba(99, 102, 241, 0)); }
          50% { transform: scale(1.05); filter: drop-shadow(0 0 12px rgba(99, 102, 241, 0.4)); }
        }
        .animate-pulse-scale {
          animation: pulseScale 3s ease-in-out infinite;
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/60 backdrop-blur-xl border-b border-white/[0.06] py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            
            {/* Logo Section with continuous scale up/down animation */}
            <div className="flex-shrink-0 flex items-center">
              <a 
                href="#home" 
                className="animate-pulse-scale text-xl font-black tracking-[0.2em] text-white uppercase bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent select-none"
              >
                aether-catering
              </a>
            </div>

            {/* Premium Center Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[13px] font-medium uppercase tracking-[0.15em] text-neutral-400 hover:text-white transition-colors duration-300 relative py-2 block group"
                >
                  {link.name}
                  {/* Premium sleek animated underline indicator */}
                  <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-indigo-500 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </a>
              ))}
            </nav>

            {/* Right Side Call to Actions */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#login"
                className="flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.15em] text-neutral-300 hover:text-white transition-colors duration-200"
              >
                <User size={14} className="text-indigo-400" />
                Login
              </a>
              
              <a
                href="#book-now"
                className="relative inline-flex items-center justify-center px-6 py-2.5 text-[12px] font-bold uppercase tracking-[0.2em] text-black overflow-hidden bg-white rounded-full transition-all duration-300 hover:bg-neutral-200 group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]"
              >
                <span className="relative z-10 flex items-center gap-1">
                  Book Now 
                  <ArrowUpRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </div>

            {/* Mobile Toggle Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 text-neutral-400 hover:text-white focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Fullscreen Glass Overlay */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/[0.08] transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
          }`}
        >
          <div className="px-6 pt-4 pb-8 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2.5 text-[14px] font-medium uppercase tracking-[0.2em] text-neutral-400 hover:text-white border-b border-white/[0.03]"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-6 flex flex-col space-y-4">
              <a
                href="#login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 text-[13px] font-medium uppercase tracking-[0.15em] text-neutral-300 bg-white/[0.05] border border-white/[0.08] rounded-xl"
              >
                <User size={14} />
                Login
              </a>
              <a
                href="#book-now"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center py-3.5 text-[13px] font-bold uppercase tracking-[0.2em] text-black bg-white rounded-xl shadow-lg"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;