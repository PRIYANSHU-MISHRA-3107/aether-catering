"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowUpRight,
  User,
  LogOut,
} from "lucide-react";
import {
  SignInButton,
  SignOutButton,
  useUser,
} from "@clerk/nextjs";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/Services" },
    { name: "Menu", href: "/Menu" },
    { name: "Booking", href: "/Booking" },
    { name: "Contact", href: "/Contact" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <style jsx>{`
        @keyframes pulseScale {
          0%,
          100% {
            transform: scale(1);
            filter: drop-shadow(0 0 0px rgba(99, 102, 241, 0));
          }

          50% {
            transform: scale(1.05);
            filter: drop-shadow(
              0 0 12px rgba(99, 102, 241, 0.4)
            );
          }
        }

        .animate-pulse-scale {
          animation: pulseScale 3s ease-in-out infinite;
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/[0.06] py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="animate-pulse-scale text-xl font-black tracking-[0.2em] text-white uppercase bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent select-none"
              >
                aether-catering
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[13px] font-medium uppercase tracking-[0.15em] text-neutral-400 hover:text-white transition-colors duration-300 relative py-2 block group"
                >
                  {link.name}

                  <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-indigo-500 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">

              {!isLoaded ? (
                <div className="w-28 h-10 rounded-full bg-white/5 animate-pulse" />
              ) : isSignedIn ? (
                <div className="flex items-center gap-2">

                  {/* User */}
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.04] text-[12px] font-medium uppercase tracking-[0.12em] text-neutral-300 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
                  >
                    <User
                      size={14}
                      className="text-indigo-400"
                    />

                    {user?.firstName || "Account"}
                  </Link>

                  {/* Logout */}
                  <SignOutButton>
                    <button
                      type="button"
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
                      title="Sign out"
                    >
                      <LogOut size={15} />
                    </button>
                  </SignOutButton>

                </div>
              ) : (
                <SignInButton mode="modal">
                  <button
                    type="button"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.04] text-[12px] font-medium uppercase tracking-[0.15em] text-neutral-300 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
                  >
                    <User
                      size={14}
                      className="text-indigo-400"
                    />

                    Login
                  </button>
                </SignInButton>
              )}

              {/* Book Now */}
              <Link
                href="/Booking"
                className="relative inline-flex items-center justify-center px-6 py-2.5 text-[12px] font-bold uppercase tracking-[0.2em] text-black bg-white rounded-full transition-all duration-300 hover:bg-neutral-200 group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]"
              >
                <span className="flex items-center gap-1">
                  Book Now

                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>

            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() =>
                  setIsMobileMenuOpen(!isMobileMenuOpen)
                }
                type="button"
                aria-label="Toggle navigation menu"
                className="inline-flex items-center justify-center p-2 text-neutral-400 hover:text-white focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/[0.08] transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4"
          }`}
        >
          <div className="px-6 pt-4 pb-8 space-y-4">

            {/* Navigation */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="block py-2.5 text-[14px] font-medium uppercase tracking-[0.2em] text-neutral-400 hover:text-white border-b border-white/[0.03]"
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Actions */}
            <div className="pt-6 flex flex-col space-y-4">

              {!isLoaded ? (
                <div className="w-full h-12 rounded-xl bg-white/5 animate-pulse" />
              ) : isSignedIn ? (
                <>
                  <Link
                    href="/profile"
                    onClick={closeMobileMenu}
                    className="w-full flex items-center justify-center gap-2 py-3 text-[13px] font-medium uppercase tracking-[0.15em] text-neutral-300 bg-white/[0.05] border border-white/[0.08] rounded-xl"
                  >
                    <User size={14} />

                    {user?.firstName || "Account"}
                  </Link>

                  <SignOutButton>
                    <button
                      type="button"
                      onClick={closeMobileMenu}
                      className="w-full flex items-center justify-center gap-2 py-3 text-[13px] font-medium uppercase tracking-[0.15em] text-neutral-300 bg-white/[0.05] border border-white/[0.08] rounded-xl"
                    >
                      <LogOut size={14} />

                      Sign Out
                    </button>
                  </SignOutButton>
                </>
              ) : (
                <SignInButton mode="modal">
                  <button
                    type="button"
                    onClick={closeMobileMenu}
                    className="w-full flex items-center justify-center gap-2 py-3 text-[13px] font-medium uppercase tracking-[0.15em] text-neutral-300 bg-white/[0.05] border border-white/[0.08] rounded-xl"
                  >
                    <User size={14} />

                    Login
                  </button>
                </SignInButton>
              )}

              <Link
                href="/Booking"
                onClick={closeMobileMenu}
                className="flex items-center justify-center py-3.5 text-[13px] font-bold uppercase tracking-[0.2em] text-black bg-white rounded-xl shadow-lg"
              >
                Book Now
              </Link>

            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;