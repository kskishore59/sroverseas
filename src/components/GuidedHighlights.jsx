import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Globe, Building2, ShieldCheck, Award, Landmark, ArrowRight, Sparkles } from 'lucide-react';

const cardSvgDecors = {
  ShieldCheck: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <path d="M40 8L66 18L66 38Q66 58 40 72Q14 58 14 38L14 18Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M28 40L36 48L52 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="40" cy="8" r="2.5" fill="currentColor" opacity="0.6" />
      <circle cx="14" cy="18" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="66" cy="18" r="2" fill="currentColor" opacity="0.4" />
    </svg>
  ),
  UserCheck: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <circle cx="32" cy="28" r="14" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 68Q10 50 32 50Q54 50 54 68" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M58 28L63 33L73 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Globe: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <circle cx="40" cy="40" r="28" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="40" cy="40" rx="12" ry="28" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="40" x2="68" y2="40" stroke="currentColor" strokeWidth="1.2" />
      <line x1="16" y1="27" x2="64" y2="27" stroke="currentColor" strokeWidth="1.2" />
      <line x1="16" y1="53" x2="64" y2="53" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="52" cy="27" r="3" fill="currentColor" />
      <circle cx="30" cy="53" r="2" fill="currentColor" opacity="0.6" />
    </svg>
  ),
  Building2: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <rect x="18" y="32" width="44" height="36" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="27" y="14" width="26" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="33" y="52" width="14" height="16" stroke="currentColor" strokeWidth="1.2" />
      <line x1="25" y1="44" x2="32" y2="44" stroke="currentColor" strokeWidth="1.2" />
      <line x1="48" y1="44" x2="55" y2="44" stroke="currentColor" strokeWidth="1.2" />
      <line x1="25" y1="50" x2="32" y2="50" stroke="currentColor" strokeWidth="1.2" />
      <line x1="48" y1="50" x2="55" y2="50" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  Award: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <circle cx="40" cy="33" r="20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M30 51L26 70L40 62L54 70L50 51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 23L43 30L51 30L45 35L47 42L40 38L33 42L35 35L29 30L37 30Z" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  Landmark: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <line x1="10" y1="66" x2="70" y2="66" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="34" x2="70" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M40 12L70 34L10 34Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="22" y1="34" x2="22" y2="66" stroke="currentColor" strokeWidth="1.5" />
      <line x1="32" y1="34" x2="32" y2="66" stroke="currentColor" strokeWidth="1.5" />
      <line x1="40" y1="34" x2="40" y2="66" stroke="currentColor" strokeWidth="1.5" />
      <line x1="48" y1="34" x2="48" y2="66" stroke="currentColor" strokeWidth="1.5" />
      <line x1="58" y1="34" x2="58" y2="66" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
};

export default function GuidedHighlights() {
  const highlights = [
    {
      title: "98% Visa Success Rate",
      desc: "Mock visa drills and air-tight documentation overseeing near-zero refusal rates across Canada, Germany, UK, USA & Australia.",
      icon: ShieldCheck,
      svgKey: 'ShieldCheck',
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
      svgKey: 'UserCheck',
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
      svgKey: 'Globe',
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
      svgKey: 'Building2',
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
      svgKey: 'Award',
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
      svgKey: 'Landmark',
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
          </div>
          <p className="text-slate-600 text-sm max-w-md font-normal">
            Delivering transparent admissions and visa successes backed by years of elite counselor expertise.
          </p>
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
                className={`${item.colSpan} relative overflow-hidden bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 group flex flex-col justify-between space-y-6 text-left`}
              >
                {/* Decorative SVG Background Art */}
                {item.svgKey && cardSvgDecors[item.svgKey] && (
                  <div className={`absolute bottom-4 right-4 w-20 h-20 opacity-10 pointer-events-none ${item.color.split(' ').find(c => c.startsWith('text-')) || 'text-blue-600'}`}>
                    {cardSvgDecors[item.svgKey]}
                  </div>
                )}
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

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4">
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
