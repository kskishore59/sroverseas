import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Globe, Building2, ShieldCheck, Award, Landmark, ArrowRight, Sparkles } from 'lucide-react';

export default function GuidedHighlights() {
  const highlights = [
    {
      title: "98% Visa Success Rate",
      desc: "Mock visa drills and air-tight documentation overseeing near-zero refusal rates across Canada, Germany, UK, USA & Australia.",
      icon: ShieldCheck,
      color: "bg-rose-50 text-rose-600 border-rose-200",
      accent: "text-rose-600 hover:text-rose-700",
      link: "#services",
      colSpan: "lg:col-span-7",
      isFeatured: true
    },
    {
      title: "Free Profile Assessment",
      desc: "Academic transcripts & score review mapping your best global pathway — 100% free with zero obligation.",
      icon: UserCheck,
      color: "bg-blue-50 text-blue-600 border-blue-200",
      accent: "text-blue-600 hover:text-blue-700",
      link: "#wizard",
      colSpan: "lg:col-span-5",
      isFeatured: false
    },
    {
      title: "15+ Global Destinations",
      desc: "Canada, Germany, UK, USA, Australia, Ireland, France, NZ, Dubai, Singapore & Georgia.",
      icon: Globe,
      color: "bg-indigo-50 text-indigo-600 border-indigo-200",
      accent: "text-indigo-600 hover:text-indigo-700",
      link: "#countries",
      colSpan: "lg:col-span-4",
      isFeatured: false
    },
    {
      title: "500+ Partner Universities",
      desc: "Direct institutional ties for priority application filing and fast admit letters.",
      icon: Building2,
      color: "bg-purple-50 text-purple-600 border-purple-200",
      accent: "text-purple-600 hover:text-purple-700",
      link: "#universities",
      colSpan: "lg:col-span-4",
      isFeatured: false
    },
    {
      title: "Scholarship Matching",
      desc: "Securing tuition fee waivers up to 100%, merit grants & government awards.",
      icon: Award,
      color: "bg-amber-50 text-amber-600 border-amber-200",
      accent: "text-amber-600 hover:text-amber-700",
      link: "#services",
      colSpan: "lg:col-span-4",
      isFeatured: false
    },
    {
      title: "Collateral-Free Education Loan",
      desc: "Loans up to ₹75 Lakhs with leading public & private banks at low interest rates with zero processing hassle.",
      icon: Landmark,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      accent: "text-emerald-600 hover:text-emerald-700",
      link: "#loan-calculator",
      colSpan: "lg:col-span-12",
      isFeatured: false
    }
  ];

  return (
    <section id="guide-info" className="py-20 relative bg-slate-50/60 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Asymmetrical Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12"
        >
          <div className="space-y-3 max-w-2xl">
            <span className="badge-tag">
              <Sparkles size={13} className="text-blue-600" />
              <span>Core Strengths</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-slate-900">
              Why Ambitious Students Choose SR Overseas
            </h2>
            <p className="text-slate-600 text-sm max-w-md font-normal">
              Delivering transparent admissions and visa successes backed by years of elite counselor expertise.
            </p>
          </div>

        </motion.div>

        {/* Subtle, Clean 6-Item Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`${item.colSpan} bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 group flex flex-col justify-between space-y-6 text-left`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className={`w-13 h-13 rounded-2xl ${item.color} border flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300`}>
                      <IconComponent size={24} />
                    </div>
                    {item.isFeatured && (
                      <span className="px-3 py-1 bg-rose-50 text-rose-700 font-extrabold text-[11px] rounded-full border border-rose-200">
                        Top Rated Feature
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={item.link}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold ${item.accent} transition-colors`}
                  >
                    <span>Explore Feature</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
