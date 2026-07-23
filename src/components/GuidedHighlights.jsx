import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Globe, Building2, ShieldCheck, Award, Landmark, ArrowRight, Sparkles } from 'lucide-react';

export default function GuidedHighlights() {
  const highlights = [
    {
      title: "Free Profile Assessment",
      desc: "Academic transcripts & score review mapping your best global pathway — 100% free.",
      icon: UserCheck,
      color: "bg-blue-50 text-blue-600 border-blue-200",
      accent: "text-blue-600",
      link: "#wizard"
    },
    {
      title: "15+ Global Destinations",
      desc: "Canada, Germany, UK, USA, Australia, Ireland, France, NZ, Dubai, Singapore & Georgia.",
      icon: Globe,
      color: "bg-indigo-50 text-indigo-600 border-indigo-200",
      accent: "text-indigo-600",
      link: "#countries"
    },
    {
      title: "500+ Partner Universities",
      desc: "Direct institutional ties for priority application filing and fast admit letters.",
      icon: Building2,
      color: "bg-purple-50 text-purple-600 border-purple-200",
      accent: "text-purple-600",
      link: "#universities"
    },
    {
      title: "98% Visa Success Rate",
      desc: "Mock visa drills and air-tight documentation overseeing near-zero refusal rates.",
      icon: ShieldCheck,
      color: "bg-rose-50 text-rose-600 border-rose-200",
      accent: "text-rose-600",
      link: "#services"
    },
    {
      title: "Scholarship Matching",
      desc: "Securing tuition fee waivers up to 100%, merit grants & government awards.",
      icon: Award,
      color: "bg-amber-50 text-amber-600 border-amber-200",
      accent: "text-amber-600",
      link: "#services"
    },
    {
      title: "Collateral-Free Education Loan",
      desc: "Loans up to ₹75 Lakhs with leading public & private banks at low interest rates.",
      icon: Landmark,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      accent: "text-emerald-600",
      link: "#loan-calculator"
    }
  ];

  return (
    <section id="guide-info" className="py-24 relative bg-white">
      <div className="container mx-auto">
        
        {/* Asymmetrical Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16"
        >
          <div className="space-y-3 max-w-2xl">
            <span className="badge-tag">
              <Sparkles size={13} className="text-blue-600" />
              <span>Core Strengths</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-display text-slate-900">
              Why Ambitious Students Choose SR Overseas
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md">
            Delivering transparent admissions and visa successes backed by years of elite counselor expertise.
          </p>
        </motion.div>

        {/* 6 Feature Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl ${item.color} border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                    <IconComponent size={26} />
                  </div>
                  
                  <h3 className="text-xl font-extrabold text-slate-900 font-display group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <a 
                    href={item.link} 
                    className={`inline-flex items-center gap-1.5 text-xs font-bold ${item.accent} hover:underline`}
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
