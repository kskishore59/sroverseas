import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '../data/servicesData';
import { Plus, Minus, HelpCircle, Sparkles } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-white border-t border-slate-200">
      <div className="container mx-auto max-w-4xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="badge-tag">
            <Sparkles size={14} className="text-blue-600" />
            <span>Queries & Answers</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Find answers to common queries regarding university admissions, loans, and student visas.
          </p>
        </motion.div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`bg-white rounded-2xl border transition-colors duration-200 overflow-hidden ${isOpen ? 'border-blue-500 shadow-md ring-1 ring-blue-500/20' : 'border-slate-200'
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="text-base font-extrabold text-slate-900 font-display flex items-center gap-3">
                    <HelpCircle size={18} className="text-blue-600 flex-shrink-0" />
                    <span>{item.q}</span>
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {/* Animated Accordion Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 font-normal">
                        {item.a}
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
