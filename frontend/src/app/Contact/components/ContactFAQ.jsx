"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much advance payment is required?",
    answer:
      "To confirm your booking, we require an advance payment. The remaining balance can be paid before or on the event day as per our agreement.",
  },
  {
    question: "Can I customize my menu?",
    answer:
      "Yes. Every package allows menu customization within its limits. Premium packages offer more flexibility and a wider selection of dishes.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 2–4 weeks in advance. For weddings and peak seasons, earlier bookings ensure better availability.",
  },
  {
    question: "Do you cater outside your city?",
    answer:
      "Yes. We provide catering services in nearby cities and surrounding areas. Travel charges may apply depending on the event location.",
  },
  {
    question: "What happens after I submit my booking?",
    answer:
      "Our team reviews your request, confirms availability, contacts you if needed, and then sends payment instructions to secure your booking.",
  },
  {
    question: "Can I modify my booking later?",
    answer:
      "Yes. Menu items, guest count, and event details can usually be updated before the final confirmation, subject to availability.",
  },
];

export default function ContactFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#090909] py-24">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Heading */}

        <div className="mb-14 text-center">
          <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white">
            Got Questions?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            Here are answers to some of the most common questions about
            our catering services and booking process.
          </p>
        </div>

        {/* FAQ */}

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <motion.div
                key={index}
                layout
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
              >
                <button
                  onClick={() => setOpen(active ? -1 : index)}
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{ rotate: active ? 180 : 0 }}
                    transition={{ duration: .25 }}
                  >
                    <ChevronDown className="text-orange-500" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{ duration: .3 }}
                    >
                      <div className="border-t border-white/10 px-7 py-6">
                        <p className="leading-8 text-gray-400">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}