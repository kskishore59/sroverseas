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
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-display text-slate-900">
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
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
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

                <div className="pt-6 mt-6 border-t border-slate-100">
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
