"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Utensils,
  Coffee,
  Sparkles,
  ThumbsUp,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Inquiry & Consultation",
    description:
      "We understand your event requirements, guest count, and preferences through a detailed consultation.",
  },
  {
    icon: Utensils,
    title: "Menu Planning",
    description:
      "Our chefs design a personalized menu based on your event type, taste, and budget.",
  },
  {
    icon: Coffee,
    title: "Tasting & Finalization",
    description:
      "Optional tasting session to refine dishes and finalize the perfect menu for your event.",
  },
  {
    icon: Sparkles,
    title: "Event Execution",
    description:
      "We handle full catering setup, cooking, serving, and smooth execution on the event day.",
  },
  {
    icon: ThumbsUp,
    title: "Clean-up & Feedback",
    description:
      "After the event, we ensure complete cleanup and gather feedback for continuous improvement.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="relative py-20 bg-[#0B0B0B] text-white">
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold">
          How <span className="text-[#F97316]">We Work</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          A smooth, transparent, and premium catering process designed for
          perfect execution every time.
        </p>
      </div>

      {/* Timeline container */}
      <div className="relative max-w-4xl mx-auto px-4">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[#2a2a2a] hidden md:block" />

        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Card */}
                <div
                  className={`bg-[#161616] border border-[#2a2a2a] rounded-xl p-6 md:w-[45%] shadow-lg hover:border-[#F97316]/40 transition-all ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-[#111] text-[#F97316]">
                      <Icon size={18} />
                    </div>
                    <span className="text-sm text-gray-500">
                      Step {index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#F97316] rounded-full border-4 border-[#0B0B0B] shadow-[0_0_10px_rgba(249,115,22,0.4)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}