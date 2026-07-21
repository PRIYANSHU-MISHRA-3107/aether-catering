"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Utensils, ArrowRight, Star, Layers, ShieldCheck, ChevronDown } from 'lucide-react';

export default function MenuHero() {
  // 3D Perspective Tilt Effect for the entire Right Food Composition Group
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  function handlePerspectiveMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  }

  function handlePerspectiveLeave() {
    x.set(0);
    y.set(0);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative min-h-screen w-full bg-[#050505] text-[#F8FAFC] overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 lg:py-0 select-none">
      
      {/* 🌌 1️⃣ SLOW, CALM BACKGROUND ATMOSPHERIC GRADIENTS */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Core Soft Ambient Backglow */}
        <motion.div 
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.12, 0.18, 0.12],
            x: [0, 15, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] bg-[#F97316]/10 rounded-full blur-[150px]" 
        />

        {/* Secondary Delicate Anchor Glow */}
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.09, 0.05],
            x: [0, -20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-[#F97316]/5 rounded-full blur-[120px]" 
        />
        
        {/* Fine Understated Micro-Texture Grid */}
        <div className="absolute inset-0 opacity-[0.012] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-4 items-center relative z-10">
        
        {/* LEFT COLUMN: Clean luxury typography and simple, confident copy */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 flex flex-col items-start space-y-10 text-left"
        >
          {/* 2️⃣ Elegant Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111]/80 border border-[#F97316]/20 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          >
            <Utensils className="w-3.5 h-3.5 text-[#F97316]" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#F8FAFC]/90">Signature Dining Experience</span>
          </motion.div>

          {/* 4️⃣ Simple, Striking Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-7xl lg:text-[76px] font-black tracking-tight text-[#F8FAFC] leading-[1.04]"
          >
            Every Dish, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] via-[#ff934b] to-[#F97316] bg-[size:200%_auto] relative inline-block">
              A Celebration
            </span> <br />
            of Flavor
          </motion.h1>

          {/* 3️⃣ Thoughtfully Curated Hospitality Description */}
          <motion.p 
            variants={itemVariants}
            className="text-[#9CA3AF] text-base sm:text-lg max-w-lg leading-relaxed font-light tracking-wide"
          >
            Every menu is thoughtfully curated using fresh ingredients, refined recipes, and elegant presentation to create unforgettable dining experiences for weddings, corporate events, and private celebrations.
          </motion.p>

          {/* Elegant Interactive Action Controls */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto"
          >
            <motion.button 
              whileHover={{ scale: 1.015, y: -2 }}
              whileTap={{ scale: 0.985 }}
              className="group relative flex items-center justify-center gap-3 px-9 py-4.5 bg-[#F97316] text-[#F8FAFC] font-semibold text-sm rounded-xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(249,115,22,0.4)] hover:shadow-[0_0_35px_rgba(249,115,22,0.35)] transition-all duration-500"
            >
              View Full Menu 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.015, y: -2, borderColor: "rgba(248,250,252,0.2)" }}
              whileTap={{ scale: 0.985 }}
              className="px-9 py-4.5 bg-[#111111]/40 hover:bg-[#161616]/90 text-[#F8FAFC] font-semibold text-sm rounded-xl border border-[#F8FAFC]/10 backdrop-blur-md shadow-lg transition-all duration-300"
            >
              Plan Your Event
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Cinematic Spatial Display Group */}
        <div className="lg:col-span-6 flex items-center justify-center relative w-full h-[480px] sm:h-[580px] lg:h-[680px]">
          <motion.div 
            onMouseMove={handlePerspectiveMove}
            onMouseLeave={handlePerspectiveLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative flex items-center justify-center w-full h-full transition-all duration-300 ease-out"
          >
            {/* Soft Ground Glass Underplate Surface */}
            <div className="absolute bottom-16 w-[300px] sm:w-[460px] h-14 rounded-full bg-gradient-to-b from-white/5 to-transparent blur-xl border border-white/10 mix-blend-overlay" />
            <div className="absolute bottom-20 w-[220px] sm:w-[340px] h-8 rounded-full bg-[#F97316]/10 blur-lg" />

            {/* 5️⃣ & 6️⃣ Premium High-Res Local Path Image Component with Soft Orange Rim Light */}
            <motion.div 
              animate={{ 
                y: [0, -14, 0],
                rotate: [-0.8, 0.8, -0.8]
              }}
              transition={{ 
                duration: 8, // 8️⃣ Slower, luxurious pacing
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{ transformStyle: "preserve-3d", translateZ: "50px" }}
              className="relative z-10 w-[310px] h-[310px] sm:w-[440px] sm:h-[440px] lg:w-[540px] lg:h-[540px] drop-shadow-[0_35px_65px_rgba(0,0,0,0.85)] filter drop-shadow-[0_0_25px_rgba(249,115,22,0.14)]"
            >
              <Image 
                src="/images/menu/menu-hero.png" 
                alt="Bespoke Plated Culinary Masterpiece" 
                fill
                priority
                className="object-contain filter brightness-[1.02] contrast-[1.01]"
                sizes="(max-width: 640px) 310px, (max-width: 1024px) 440px, 540px"
              />
            </motion.div>

            {/* THREE MINIMAL SPATIAL HUD GLASS CARDS */}
            
            {/* Card 1: Warm Gold Star Rating */}
            <motion.div 
              animate={{ y: [0, -5, 0], x: [0, 3, 0] }}
              transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
              style={{ translateZ: "80px" }}
              className="absolute top-8 left-2 sm:top-16 sm:left-4 z-20 flex flex-col items-start gap-1 px-4.5 py-3 rounded-xl bg-[#111111]/85 border border-[#F8FAFC]/12 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
            >
              <div className="flex text-[#F59E0B] gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <p className="text-[11px] font-black tracking-wide text-[#F8FAFC] mt-0.5">Chef&apos;s Signature</p>
            </motion.div>

            {/* Card 2: Simple Clean Volume Counter */}
            <motion.div 
              animate={{ y: [0, 5, 0], x: [0, -3, 0] }}
              transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              style={{ translateZ: "100px" }}
              className="absolute top-16 right-2 sm:top-24 sm:right-4 z-20 flex items-center gap-3 px-4.5 py-3 rounded-xl bg-[#111111]/85 border border-[#F8FAFC]/12 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
            >
              <div className="p-2 rounded-lg bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/15">
                <Layers className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-sm font-black text-[#F97316] leading-none tracking-tight">100+</p>
                <p className="text-[10px] text-[#9CA3AF] font-bold tracking-wide mt-0.5">Signature Dishes</p>
              </div>
            </motion.div>

            {/* Card 3: Authentic Integrity Label */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 9.4, repeat: Infinity, ease: "easeInOut", delay: 1.0 }}
              style={{ translateZ: "70px" }}
              className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#111111]/90 border border-emerald-500/15 backdrop-blur-xl shadow-[0_20px_45px_rgba(0,0,0,0.7)] whitespace-nowrap"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-[11px] font-bold tracking-wider text-[#F8FAFC]">Handcrafted Fresh Daily</span>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* 7️⃣ MINIMAL CLEAN SCROLL PROMPT */}
      <motion.div 
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-25 hover:opacity-75 transition-all duration-300 z-20 group"
      >
        <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#9CA3AF] group-hover:text-[#F97316] transition-colors">Explore</span>
        <ChevronDown className="w-3.5 h-3.5 text-[#F97316] group-hover:scale-105 transition-transform" />
      </motion.div>

      {/* Bottom Axis Fade Transitions */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[#F97316]/15 to-transparent" />
    </section>
  );
}