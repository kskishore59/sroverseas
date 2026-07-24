import React from 'react';
import { servicesData } from '../data/servicesData';
import { GraduationCap, Compass, FileCheck, ShieldCheck, Award, BookOpen, ArrowRight, Sparkles } from 'lucide-react';

const iconMap = {
  GraduationCap,
  Compass,
  FileCheck,
  ShieldCheck,
  Award,
  BookOpen
};

const serviceSvgDecors = {
  GraduationCap: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <polygon points="40,14 72,30 40,46 8,30" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M24 37L24 56Q24 65 40 65Q56 65 56 56L56 37" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="72" y1="30" x2="72" y2="52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="72" cy="54" r="3" fill="currentColor" />
    </svg>
  ),
  Compass: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <circle cx="40" cy="40" r="28" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="40" cy="40" r="3.5" fill="currentColor" />
      <path d="M40 18L45 35L40 40L35 35Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M40 62L35 45L40 40L45 45Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" opacity="0.5" />
      <line x1="18" y1="40" x2="27" y2="40" stroke="currentColor" strokeWidth="1.2" />
      <line x1="53" y1="40" x2="62" y2="40" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  FileCheck: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <path d="M18 10L50 10L62 22L62 70L18 70Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M50 10L50 22L62 22" stroke="currentColor" strokeWidth="1.2" />
      <line x1="26" y1="34" x2="54" y2="34" stroke="currentColor" strokeWidth="1.2" />
      <line x1="26" y1="43" x2="54" y2="43" stroke="currentColor" strokeWidth="1.2" />
      <path d="M26 53L32 59L44 47" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  ShieldCheck: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <path d="M40 8L66 18L66 38Q66 58 40 72Q14 58 14 38L14 18Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M28 40L36 48L52 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="40" cy="8" r="2.5" fill="currentColor" opacity="0.6" />
    </svg>
  ),
  Award: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <circle cx="40" cy="32" r="20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M30 50L26 70L40 62L54 70L50 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 22L43 29L51 29L45 34L47 41L40 37L33 41L35 34L29 29L37 29Z" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  BookOpen: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <path d="M12 20Q12 14 20 14Q30 14 40 22Q50 14 60 14Q68 14 68 20L68 62Q68 66 60 66Q50 66 40 60Q30 66 20 66Q12 66 12 62Z" stroke="currentColor" strokeWidth="1.5" />
      <line x1="40" y1="22" x2="40" y2="60" stroke="currentColor" strokeWidth="1.2" />
      <line x1="20" y1="30" x2="36" y2="30" stroke="currentColor" strokeWidth="1.2" />
      <line x1="20" y1="39" x2="36" y2="39" stroke="currentColor" strokeWidth="1.2" />
      <line x1="44" y1="30" x2="60" y2="30" stroke="currentColor" strokeWidth="1.2" />
      <line x1="44" y1="39" x2="60" y2="39" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
};

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 relative bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="badge-tag">
            <Sparkles size={14} className="text-blue-600" />
            <span>Our Expertise</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-slate-900">
            Comprehensive Student Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            From profile evaluations to pre-departure briefs, we manage every stage of your university admission journey.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || GraduationCap;
            return (
              <div
                key={service.id}
                className="relative overflow-hidden bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Decorative SVG Background Art */}
                {serviceSvgDecors[service.icon] && (
                  <div
                    className="absolute bottom-4 right-4 w-20 h-20 opacity-10 pointer-events-none"
                    style={{ color: service.color }}
                  >
                    {serviceSvgDecors[service.icon]}
                  </div>
                )}
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold shadow-sm transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${service.color}15`, color: service.color, border: `1px solid ${service.color}30` }}
                    >
                      <Icon size={28} />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-display group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 ">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <span>Request Service Guidance</span>
                    <ArrowRight size={14} />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
