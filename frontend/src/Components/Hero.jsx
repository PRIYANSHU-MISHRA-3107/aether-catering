'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Utensils, Calendar, GlassWater, Flame } from 'lucide-react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('weddings');

  const experienceData = {
    weddings: {
      tag: "Grand Scale Luxury",
      title: "Immersive Wedding Banquets",
      desc: "Architectural multi-course dining installations curated specifically for monumental celebrations.",
      img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop"
    },
    corporate: {
      tag: "High Profile Execution",
      title: "Precision Gala Orchestration",
      desc: "Flawless, elite hospitality and culinary synchronization engineered for high-stakes corporate footprints.",
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop"
    },
    private: {
      tag: "Intimate Ateliers",
      title: "Bespoke House Gatherings",
      desc: "Transforming residential spaces into dark-mode culinary theaters with private master chefs.",
      img: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1000&auto=format&fit=crop"
    }
  };

  return (
    <section className="relative min-h-screen bg-[#030303] text-white flex items-center pt-32 pb-24 overflow-hidden selection:bg-[#C5A880]/30">
      
      {/* Dynamic Radial Mesh Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-[#C5A880]/[0.05] via-purple-500/[0.02] to-transparent blur-[140px] pointer-events-none rounded-full" />
      
      {/* Tech Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
        
      

        {/* Master Heading Grid */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6 animate-fade-in-up">
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.05] uppercase">
            Taste Engineered <br />
            <span className="text-[#030303] [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] hover:[-webkit-text-stroke:1px_#C5A880] transition-colors duration-500">
              For Perfect
            </span> Moments.
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 font-light max-w-xl mx-auto leading-relaxed">
            Dismantling standard catering conventions. We construct luxury food experiences and bespoke aesthetic menus tailored entirely to your concept footprint.
          </p>
        </div>

        {/* ================= INDUSTRY LEVEL INTERACTIVE DASHBOARD CONTAINER ================= */}
        <div className="max-w-5xl mx-auto bg-[#0A0A0A]/80 border border-white/[0.06] rounded-2xl p-4 sm:p-6 shadow-[0_32px_64px_rgba(0,0,0,0.8)] backdrop-blur-xl animate-fade-in-up [animation-delay:200ms]">
          
          {/* Dashboard Control Panel / Tabs */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 border-b border-white/[0.06] pb-4 mb-6">
            {Object.keys(experienceData).map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-lg transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tabKey 
                    ? 'bg-white/[0.04] border border-white/[0.1] text-white shadow-inner' 
                    : 'text-neutral-500 hover:text-neutral-200 border border-transparent'
                }`}
              >
                {tabKey === 'weddings' && <Flame size={12} className={activeTab === tabKey ? 'text-[#C5A880]' : ''} />}
                {tabKey === 'corporate' && <Utensils size={12} className={activeTab === tabKey ? 'text-[#C5A880]' : ''} />}
                {tabKey === 'private' && <GlassWater size={12} className={activeTab === tabKey ? 'text-[#C5A880]' : ''} />}
                {tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}
              </button>
            ))}

            <div className="sm:ml-auto pt-2 sm:pt-0">
              <Link 
                href="/booking" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A880] text-black text-xs font-black uppercase tracking-wider rounded-lg hover:bg-white transition-all duration-300 shadow-md group"
              >
                <span>Initiate Booking</span>
                <ArrowRight size={12} className="transform transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Dashboard Stage / Dynamic Viewport */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[300px]">
            
            {/* Dynamic Stage Copy */}
            <div className="md:col-span-5 space-y-4 text-left p-2 sm:p-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A880] px-2.5 py-1 bg-[#C5A880]/[0.06] border border-[#C5A880]/[0.15] rounded">
                {experienceData[activeTab].tag}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-100 transition-all duration-300">
                {experienceData[activeTab].title}
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                {experienceData[activeTab].desc}
              </p>
              
              <div className="pt-2">
                <Link 
                  href={`/packages#${activeTab}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-neutral-300 hover:text-[#C5A880] transition-colors duration-300 group"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight size={12} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Dynamic Stage Media Viewer */}
            <div className="md:col-span-7 relative h-[260px] sm:h-[320px] w-full rounded-xl overflow-hidden border border-white/[0.08] shadow-2xl group">
              
              {/* Animated Inner Lighting Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
              
              {/* Image Layer with Keyframe State Swapping */}
              <img 
                key={activeTab} // Forces remount & clean re-fade on switch
                src={experienceData[activeTab].img} 
                alt={experienceData[activeTab].title} 
                className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out animate-reveal-blur"
              />

              {/* Status HUD Element over Image */}
              <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/[0.08] rounded-md text-[9px] font-mono tracking-widest text-neutral-400 uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                System: Active
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Advanced Global Animation Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes revealBlur {
          from { filter: blur(8px); opacity: 0.5; }
          to { filter: blur(0); opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-reveal-blur {
          animation: revealBlur 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;