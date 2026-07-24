import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Award, Star, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function LeadershipSection() {
  return (
    <section id="director" className="py-24 relative bg-white border-t border-slate-200 overflow-hidden">
      <div className="container mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-b from-slate-50 to-blue-50/30 p-8 sm:p-14 rounded-3xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-lg"
        >

          {/* Left Panel: Executive Magazine Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">

            <div className="badge-tag">
              <Sparkles size={14} className="text-blue-600" />
              <span>Leadership & Vision</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 font-display leading-tight">
              Meet the <span className="font-serif italic text-blue-600">Visionary</span> Behind SR Overseas
            </h2>

            {/* Quote Box */}
            <blockquote className="p-6 bg-white rounded-2xl border-l-4 border-blue-600 italic text-slate-700 text-base sm:text-lg leading-relaxed shadow-sm">
              "Every student deserves a global future. We don't just process university applications — we build international careers, bridge continents, and transform lives."
            </blockquote>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Under the strategic leadership of Director <strong>Anvesh Reddy Singi</strong>, SR Overseas Education has grown into Hyderabad's most trusted study abroad consultancy, guiding hundreds of students into top institutions in Canada, Germany, UK, USA, Australia, and 10+ other destinations.
            </p>

            {/* Verified Strengths List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-bold text-slate-800 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>1-on-1 Personalized Profile Mapping</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Direct Embassy Visa Mock Drills</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Zero-Tuition Germany Pathways</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Collateral-Free Loan Assistance</span>
              </div>
            </div>

            {/* Stats Matrix */}
            <div className="grid grid-cols-3 gap-3 pt-3 text-center">
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-2xl font-extrabold text-amber-600 font-display">100+</div>
                <div className="text-[10px] text-slate-600 font-bold uppercase tracking-wider mt-1">Students Guided</div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-2xl font-extrabold text-emerald-600 font-display">98%</div>
                <div className="text-[10px] text-slate-600 font-bold uppercase tracking-wider mt-1">Visa Success</div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-2xl font-extrabold text-blue-600 font-display">15+</div>
                <div className="text-[10px] text-slate-600 font-bold uppercase tracking-wider mt-1">Destinations</div>
              </div>
            </div>

            {/* Direct Consultation CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://wa.me/917416007557?text=Hi%20Anvesh%20Sir!%20I%20would%20like%20to%20schedule%20a%20direct%20consultation%20with%20SR%20Overseas."
                target="_blank"
                rel="noreferrer"
                className="btn-primary bg-[#25D366] hover:bg-[#20ba5a] shadow-emerald-600/20 text-xs px-6 py-3.5"
              >
                <MessageSquare size={16} />
                <span>Direct WhatsApp Consultation</span>
              </a>
              <a href="#contact" className="btn-outline text-xs px-6 py-3.5">
                Book Office Appointment
              </a>
            </div>

          </div>

          {/* Right Panel: Official Director Portrait Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-white p-3 border border-slate-200 shadow-2xl">

              {/* Official Director Image */}
              <div className="relative rounded-2xl overflow-hidden h-[440px]">
                <img
                  src="/assets/director-anvesh.jpg"
                  alt="Anvesh Reddy Singi, Director SR Overseas Education"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>

              {/* Floating Name Card */}
              <div className="absolute inset-x-5 bottom-5 p-5 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-xl flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 font-display">Anvesh Reddy Singi</h3>
                  <p className="text-xs text-blue-600 font-bold">Director & Founder • SR Overseas Education</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Star size={20} />
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="absolute -top-4 -right-3 bg-white px-4 py-2 rounded-full border border-slate-200 text-blue-600 text-xs font-extrabold shadow-lg">
              🎓 Senior Visa Specialist
            </div>
            <div className="absolute top-1/2 -left-5 bg-white px-4 py-2 rounded-full border border-slate-200 text-emerald-600 text-xs font-extrabold shadow-lg">
              ⭐ 98% Visa Success
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
