import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Award, Sparkles, Phone, Mail, CheckCircle2 } from 'lucide-react';

export default function LeadershipSection() {
  return (
    <section id="director" className="py-24 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Official Director Portrait Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-200/80 aspect-4/5">
              <img 
                src="/assets/director-anvesh.jpg" 
                alt="Director Anvesh SR Overseas Education" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="font-extrabold text-xl font-display">Anvesh</div>
                <div className="text-xs text-blue-300 font-bold tracking-wider uppercase">Founder & Managing Director</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3.5 rounded-2xl shadow-xl flex items-center gap-2 border-2 border-white">
              <Award size={20} />
              <div className="text-[11px] font-extrabold">100+ Guided Students</div>
            </div>
          </motion.div>

          {/* Leadership Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="badge-tag">
              <Sparkles size={14} className="text-blue-600" />
              <span>Leadership Message</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight font-display text-slate-900 leading-tight">
              "Every student deserves transparent, ethical, and elite global guidance."
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              <p>
                At SR Overseas Education, we believe studying abroad is more than just getting an admission letter—it is architecting a lifelong international career trajectory.
              </p>
              <p>
                Having personally guided over 100+ students into top institutions across Canada, Germany, UK, USA, and Australia, our commitment is 100% transparency, zero hidden fees, and complete visa precision.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600" />
                <span>Direct Personal Mentorship</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>98% Visa Success Verified</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-primary text-xs py-3 px-6 shadow-md">
                Book Consultation with Director
              </a>
              <a href="tel:+917416007557" className="btn-outline text-xs py-3 px-6">
                <Phone size={14} />
                <span>Call Directly</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
