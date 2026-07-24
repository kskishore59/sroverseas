import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Play, Pause, ChevronRight, CheckCircle2, ShieldCheck, Award, GraduationCap, Building2 } from 'lucide-react';

export default function ProcessRoadmap() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const steps = [
    {
      num: "01",
      title: "Free Profile Assessment",
      sub: "Academic & Career Audit",
      desc: "Detailed evaluation of your GPA, backlogs, IELTS scores, and financial budget to shortlist top destination options.",
      icon: "📋",
      duration: "1 Day",
      tag: "Zero Obligation"
    },
    {
      num: "02",
      title: "Country & Course Selection",
      sub: "Destination Strategy",
      desc: "Mapping your goals to high-demand global programs (Germany €0 tuition, Canada PGWP, UK 1-Yr Master's, USA STEM OPT).",
      icon: "🌐",
      duration: "2 Days",
      tag: "Best ROI"
    },
    {
      num: "03",
      title: "University Shortlisting",
      sub: "Tier-1 Partner Matching",
      desc: "Selecting 4-6 partner universities matching your admission odds, budget range, and post-study work visa criteria.",
      icon: "🏛️",
      duration: "2 Days",
      tag: "500+ Partner Univs"
    },
    {
      num: "04",
      title: "SOP & LOR Drafting",
      sub: "Statement Engineering",
      desc: "Crafting 100% plagiarism-free, tailored SOPs and Letters of Recommendation highlighting your profile strengths.",
      icon: "✍️",
      duration: "5 Days",
      tag: "Admit Guarantee"
    },
    {
      num: "05",
      title: "Application Filing",
      sub: "Priority Filing",
      desc: "Submitting verified application files to university admissions portals with document fee waivers wherever available.",
      icon: "📤",
      duration: "24 Hours",
      tag: "Fast Track"
    },
    {
      num: "06",
      title: "Admit & Scholarship Letter",
      sub: "Official Offer Issuance",
      desc: "Receiving official university offer letters and securing maximum available merit scholarships or tuition fee grants.",
      icon: "🎉",
      duration: "2-4 Weeks",
      tag: "Offer Guaranteed"
    },
    {
      num: "07",
      title: "Education Loan Sanction",
      sub: "Financial Proof & GIC",
      desc: "Processing collateral-free education loans up to ₹75 Lakhs, setting up German Blocked Accounts (€11,208) or Canada GIC ($20,635).",
      icon: "🏦",
      duration: "3-7 Days",
      tag: "SBI / HDFC Credila"
    },
    {
      num: "08",
      title: "Visa File & Mock Drills",
      sub: "98% Visa Mastery",
      desc: "Building air-tight visa files, booking embassy slots, and conducting 1-on-1 mock interview drills for 98% approval odds.",
      icon: "🛂",
      duration: "5-10 Days",
      tag: "98% Success Rate"
    },
    {
      num: "09",
      title: "Fly Abroad & Housing Setup",
      sub: "Pre-Departure Concierge",
      desc: "Flight ticket discounts, student accommodation booking in Berlin, Toronto, London, or Sydney, and airport pickup network.",
      icon: "✈️",
      duration: "Departure Day",
      tag: "Global Support"
    }
  ];

  return (
    <section id="process" className="py-24 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-12"
        >
          <span className="badge-tag">
            <Sparkles size={14} className="text-blue-600" />
            <span>Structured Roadmap</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-display text-slate-900">
            The 9-Stage Connected Stepper Roadmap
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-normal max-w-2xl mx-auto">
            From initial profile audit to landing your student visa — our step-by-step enrollment deck.
          </p>
        </motion.div>

        {/* Stepper Connected Ribbon Bar */}
        <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-md mb-8 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            {steps.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`px-4 py-3 rounded-2xl flex items-center gap-2.5 transition-all text-xs font-bold cursor-pointer ${
                  activeStep === idx 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-105' 
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-extrabold ${activeStep === idx ? 'bg-white text-blue-600' : 'bg-slate-200 text-slate-700'}`}>
                  {s.num}
                </span>
                <span>{s.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Stage Focus Spotlight Card */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left"
            >
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{steps[activeStep].icon}</span>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">Stage {steps[activeStep].num} of 09</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                      {steps[activeStep].title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {steps[activeStep].desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 text-xs">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 font-extrabold rounded-full border border-blue-200">
                    ⏱️ Duration: {steps[activeStep].duration}
                  </span>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-extrabold rounded-full border border-emerald-200">
                    ✓ {steps[activeStep].tag}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-4">
                <div className="text-xs font-extrabold uppercase text-blue-400">Roadmap Milestone</div>
                <div className="text-base font-extrabold text-white font-display">{steps[activeStep].sub}</div>
                <p className="text-[11px] text-slate-400">SR Overseas counselor supervision guaranteed for this step.</p>
                <a href="#contact" className="btn-primary text-xs w-full justify-center">
                  <span>Start Step {steps[activeStep].num}</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3x3 Bento Overview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((s, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-5 rounded-2xl border transition-all text-left cursor-pointer ${
                activeStep === idx 
                  ? 'bg-blue-50/80 border-blue-500 shadow-md' 
                  : 'bg-white border-slate-200/80 hover:border-blue-300'
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg">{s.icon}</span>
                <span className="text-[10px] font-mono font-extrabold text-slate-400">STAGE {s.num}</span>
              </div>
              <div className="font-extrabold text-slate-900 text-sm">{s.title}</div>
              <div className="text-[10px] text-slate-500 mt-1 truncate">{s.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
