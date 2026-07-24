import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "When should I begin my study abroad application?",
      a: "We recommend starting 8 to 12 months in advance of your target intake (Fall September or Spring January). This allows ample time for university shortlisting, SOP/LOR drafting, IELTS exams, and blocked account / visa processing."
    },
    {
      q: "Are there options to study abroad without tuition fees?",
      a: "Yes! Public universities throughout Germany charge €0 tuition fees for both Bachelor's and Master's degrees taught in English. You only pay a minor semester contribution (~€150-€350) and prove living funds in a blocked account."
    },
    {
      q: "Can I get an education loan without collateral?",
      a: "Yes. Through SR Overseas partner banks (SBI, HDFC Credila, ICICI, Avanse), eligible students can secure collateral-free education loans up to ₹75 Lakhs based on academic GPA and admit university tier."
    },
    {
      q: "What is the post-study work visa duration for Canada and Germany?",
      a: "Canada offers up to 3 years Post-Graduation Work Permit (PGWP). Germany offers an 18-month Job Seeking Visa after graduation with direct PR eligibility after 2 years of skilled employment."
    },
    {
      q: "Does SR Overseas assist with mock visa interviews?",
      a: "Yes! We conduct 1-on-1 mock visa interview drills covering US F-1 visa officer questions, UK credibility checks, and German Embassy slot booking with a 98% success rate."
    }
  ];

  return (
    <section id="faq" className="py-24 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-14"
        >
          <span className="badge-tag">
            <HelpCircle size={14} className="text-blue-600" />
            <span>Frequently Asked Questions</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-display text-slate-900">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-normal max-w-2xl mx-auto">
            Everything you need to know about admissions, tuition fees, visas, and education loans.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 flex justify-between items-center text-left font-extrabold text-slate-900 text-sm sm:text-base hover:text-blue-600 transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown size={18} className={`transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </button>

              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-normal"
                  >
                    <div className="pt-4">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
