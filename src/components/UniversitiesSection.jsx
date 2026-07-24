import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Sparkles, ArrowRight, Award } from 'lucide-react';

export default function UniversitiesSection() {
  const [activeTab, setActiveTab] = useState('all');

  const universities = [
    {
      id: 'melbourne',
      countryCode: 'AU',
      qsRank: 'QS Rank: #14',
      icon: '🌿',
      name: 'University of Melbourne',
      country: 'Australia',
      flag: '🇦🇺',
      programs: 'Medicine, Law, Business, Sciences',
      tuition: '$40,000 – $55,000 AUD / Year',
      scholarship: 'Melbourne International UG/Grad',
      intakes: 'March & July',
      ielts: '6.5 – 7.5 Overall',
      category: 'australia',
      headerBg: 'bg-[#0b2b6b]', // Solid Royal Blue
      badgeBg: 'bg-amber-400/20 text-amber-300 border-amber-400/30'
    },
    {
      id: 'tum',
      countryCode: 'DE',
      qsRank: 'QS Rank: #28',
      icon: '⚙️',
      name: 'Technical University of Munich',
      country: 'Germany',
      flag: '🇩🇪',
      programs: 'Robotics, Data Science, Automotive, AI',
      tuition: '€0 / Year (Public University)',
      scholarship: 'DAAD Full Waiver / Semester Grant',
      intakes: 'October (Winter) & April (Summer)',
      ielts: '6.5 Overall (or Medium of Instruction)',
      category: 'germany',
      headerBg: 'bg-[#044e3a]', // Solid Deep Emerald
      badgeBg: 'bg-emerald-400/20 text-emerald-300 border-emerald-400/30'
    },
    {
      id: 'toronto',
      countryCode: 'CA',
      qsRank: 'QS Rank: #21',
      icon: '🏫',
      name: 'University of Toronto',
      country: 'Canada',
      flag: '🇨🇦',
      programs: 'Computer Science, Engineering, MBA',
      tuition: '$38,000 – $52,000 CAD / Year',
      scholarship: 'Lester B. Pearson / Entrance Award',
      intakes: 'September (Fall) & January',
      ielts: '6.5 (No Band < 6.0)',
      category: 'canada',
      headerBg: 'bg-[#991b1b]', // Solid Maple Crimson
      badgeBg: 'bg-rose-400/20 text-rose-300 border-rose-400/30'
    },
    {
      id: 'oxford',
      countryCode: 'GB',
      qsRank: 'QS Rank: #3',
      icon: '🏛️',
      name: 'University of Oxford',
      country: 'United Kingdom',
      flag: '🇬🇧',
      programs: 'Finance, Biotechnology, Law, AI',
      tuition: '£28,000 – £44,000 / Year',
      scholarship: 'Clarendon Fund / Vice-Chancellor Award',
      intakes: 'October (1-Year Master\'s)',
      ielts: '7.0 – 7.5 Overall',
      category: 'uk',
      headerBg: 'bg-[#4c1d95]', // Solid Royal Purple
      badgeBg: 'bg-purple-400/20 text-purple-300 border-purple-400/30'
    },
    {
      id: 'northeastern',
      countryCode: 'US',
      qsRank: 'QS Rank: #53',
      icon: '🇺🇸',
      name: 'Northeastern University',
      country: 'United States',
      flag: '🇺🇸',
      programs: 'Information Systems, Data Analytics, CS',
      tuition: '$24,000 – $34,000 USD / Year',
      scholarship: '$5,000 – $15,000 Dean\'s Merit Waiver',
      intakes: 'Fall (Sep) & Spring (Jan)',
      ielts: '6.5 Overall (GRE Waiver Available)',
      category: 'usa',
      headerBg: 'bg-[#1e3a8a]', // Solid Deep Navy
      badgeBg: 'bg-blue-400/20 text-blue-300 border-blue-400/30'
    },
    {
      id: 'mcgill',
      countryCode: 'CA',
      qsRank: 'QS Rank: #30',
      icon: '🇨🇦',
      name: 'McGill University',
      country: 'Canada',
      flag: '🇨🇦',
      programs: 'Biomedical, Business Analytics, Law',
      tuition: '$22,000 – $36,000 CAD / Year',
      scholarship: 'McCall MacBain / Merit Entrance',
      intakes: 'September & January',
      ielts: '6.5 Overall',
      category: 'canada',
      headerBg: 'bg-[#991b1b]', // Solid Maple Crimson
      badgeBg: 'bg-amber-400/20 text-amber-300 border-amber-400/30'
    },
    {
      id: 'rwth',
      countryCode: 'DE',
      qsRank: 'QS Rank: #90',
      icon: '⚙️',
      name: 'RWTH Aachen University',
      country: 'Germany',
      flag: '🇩🇪',
      programs: 'Mechanical, Mechatronics, Energy Tech',
      tuition: '€0 / Year (Public University)',
      scholarship: 'DAAD Support & Industry Internships',
      intakes: 'October & April',
      ielts: '6.5 Overall',
      category: 'germany',
      headerBg: 'bg-[#044e3a]', // Solid Deep Emerald
      badgeBg: 'bg-emerald-400/20 text-emerald-300 border-emerald-400/30'
    },
    {
      id: 'manchester',
      countryCode: 'GB',
      qsRank: 'QS Rank: #32',
      icon: '🇬🇧',
      name: 'University of Manchester',
      country: 'United Kingdom',
      flag: '🇬🇧',
      programs: 'Management, Renewable Energy, CS',
      tuition: '£22,000 – £31,000 / Year',
      scholarship: '£5,000 Global Development Award',
      intakes: 'September (1-Year Master\'s)',
      ielts: '6.5 Overall',
      category: 'uk',
      headerBg: 'bg-[#4c1d95]', // Solid Royal Purple
      badgeBg: 'bg-purple-400/20 text-purple-300 border-purple-400/30'
    }
  ];

  const filteredUnivs = universities.filter((u) => {
    if (activeTab === 'all') return true;
    return u.category === activeTab;
  });

  return (
    <section id="universities" className="py-24 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-10"
        >
          <span className="badge-tag">
            <Building2 size={14} className="text-blue-600" />
            <span>Institutional Ties</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-display text-slate-900">
            500+ Partner Universities Worldwide
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-normal max-w-2xl mx-auto">
            Direct application ties with premier institutions offering priority admit processing and high scholarship odds.
          </p>

          {/* Destination Filter Tabs */}
          <div className="flex justify-center gap-2 pt-4 flex-wrap">
            {[
              { id: 'all', label: 'All 500+ Institutions' },
              { id: 'australia', label: '🇦🇺 Australia' },
              { id: 'germany', label: '🇩🇪 Germany (€0 Tuition)' },
              { id: 'canada', label: '🇨🇦 Canada (3Y PGWP)' },
              { id: 'uk', label: '🇬🇧 United Kingdom' },
              { id: 'usa', label: '🇺🇸 United States' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-105' 
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Card Grid with Solid Country-Themed Header Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {filteredUnivs.map((u, idx) => (
            <motion.div
              key={u.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="bg-white rounded-[32px] overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 group flex flex-col justify-between"
            >
              
              {/* TOP HEADER BLOCK (Solid Country-Themed Header, No Gradient) */}
              <div className={`${u.headerBg} p-6 text-white space-y-4 relative border-b border-white/10`}>
                
                {/* Top Row: Country Code & QS Rank Pill */}
                <div className="flex justify-between items-center text-xs">
                  <span className="font-extrabold tracking-widest text-white/90 font-mono text-sm">{u.countryCode}</span>
                  <span className={`px-3 py-1 rounded-full font-extrabold text-[11px] border backdrop-blur-md ${u.badgeBg}`}>
                    {u.qsRank}
                  </span>
                </div>

                {/* Crest Icon & University Title */}
                <div className="space-y-1 pt-1">
                  <div className="text-3xl mb-1">{u.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-black font-display text-white leading-tight group-hover:text-blue-200 transition-colors">
                    {u.name}
                  </h3>
                  <div className="text-xs text-white/80 font-bold">{u.country} {u.flag}</div>
                </div>

              </div>

              {/* BOTTOM SPECS MATRIX BLOCK */}
              <div className="p-6 space-y-3.5 text-xs text-slate-700 bg-white font-medium">
                
                <div className="flex justify-between items-start border-b border-slate-100 pb-2.5">
                  <span className="text-slate-400 font-semibold flex items-center gap-1.5">
                    <span>📚</span> Programs:
                  </span>
                  <span className="font-extrabold text-slate-900 text-right max-w-[60%]">{u.programs}</span>
                </div>

                <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                  <span className="text-slate-400 font-semibold flex items-center gap-1.5">
                    <span>💰</span> Tuition Range:
                  </span>
                  <span className="font-extrabold text-emerald-600 text-right">{u.tuition}</span>
                </div>

                <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                  <span className="text-slate-400 font-semibold flex items-center gap-1.5">
                    <span>🎓</span> Scholarships:
                  </span>
                  <span className="font-bold text-amber-700 text-right">{u.scholarship}</span>
                </div>

                <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                  <span className="text-slate-400 font-semibold flex items-center gap-1.5">
                    <span>📅</span> Intakes:
                  </span>
                  <span className="font-bold text-slate-800 text-right">{u.intakes}</span>
                </div>

                <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                  <span className="text-slate-400 font-semibold flex items-center gap-1.5">
                    <span>🌐</span> IELTS Cutoff:
                  </span>
                  <span className="font-bold text-blue-600 text-right">{u.ielts}</span>
                </div>

                {/* Bottom Pill CTA Button */}
                <div className="pt-2">
                  <a 
                    href="#contact" 
                    className="w-full py-3 px-4 rounded-full border border-slate-200/90 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-xs group-hover:shadow-md cursor-pointer"
                  >
                    <span>Apply via SR Overseas</span>
                    <ArrowRight size={14} />
                  </a>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
