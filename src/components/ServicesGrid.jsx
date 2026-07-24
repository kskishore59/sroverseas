import React from 'react';
import { motion } from 'framer-motion';
import { Layers, UserCheck, Globe, Building2, ShieldCheck, Award, Landmark, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      title: "1. Academic Profile Mapping & Counselling",
      desc: "In-depth review of your transcripts, GRE/GMAT scores, work experience, and financial budget to map the ideal global degree pathway.",
      icon: UserCheck,
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      title: "2. University & Course Selection",
      desc: "Shortlisting top-ranked global universities matching your budget, post-study work visa goals, and scholarship opportunities.",
      icon: Globe,
      color: "bg-indigo-50 text-indigo-600 border-indigo-200"
    },
    {
      title: "3. Direct Application Filing & Admit Tracking",
      desc: "Fast-track submission to 500+ partner universities for rapid offer letter issuance and fee waiver eligibility.",
      icon: Building2,
      color: "bg-purple-50 text-purple-600 border-purple-200"
    },
    {
      title: "4. Air-Tight Visa Processing & Mock Drills",
      desc: "Comprehensive visa file preparation, embassy appointment slot booking, and 1-on-1 mock interview drills (98% success rate).",
      icon: ShieldCheck,
      color: "bg-rose-50 text-rose-600 border-rose-200"
    },
    {
      title: "5. Scholarship & Financial Grant Assistance",
      desc: "Maximizing tuition fee waivers up to 100%, DAAD grants, Chevening, and institutional merit scholarships.",
      icon: Award,
      color: "bg-amber-50 text-amber-600 border-amber-200"
    },
    {
      title: "6. Collateral-Free Education Loan Assistance",
      desc: "Fast loan approvals up to ₹75 Lakhs with leading public & private banks (SBI, HDFC Credila, ICICI, Avanse).",
      icon: Landmark,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200"
    },
    {
      title: "7. Custom Statement of Purpose (SOP) & LORs",
      desc: "100% plagiarism-free, tailored SOP and Letter of Recommendation drafting engineered to pass university admission boards.",
      icon: BookOpen,
      color: "bg-purple-50 text-purple-600 border-purple-200"
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-14"
        >
          <span className="badge-tag">
            <Layers size={14} className="text-purple-600" />
            <span>Comprehensive Student Suite</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-display text-slate-900">
            End-to-End Study Abroad Services
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-normal max-w-2xl mx-auto">
            From your initial profile evaluation to landing your student visa and flying abroad, we handle every detail.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`w-13 h-13 rounded-2xl ${item.color} border flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}>
                    <IconComp size={24} />
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 font-display group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100">
                  <a href="#contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline">
                    <span>Inquire Service</span>
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
