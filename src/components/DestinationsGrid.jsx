import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { countriesData } from '../data/countriesData';
import { Globe, Award, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function DestinationsGrid() {
  const [filter, setFilter] = useState('all');

  const filteredCountries = countriesData.filter((c) => {
    if (filter === 'popular') return ['canada', 'germany', 'uk', 'usa'].includes(c.id);
    if (filter === 'budget') return c.tuitionCost.includes('€0') || c.tuitionCost.includes('Affordable') || c.tuitionCost.includes('$4,000');
    return true;
  });

  return (
    <section id="countries" className="py-24 relative bg-white border-t border-slate-200">
      <div className="container mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <span className="badge-tag">
            <Globe size={14} className="text-blue-600" />
            <span>Global Study Destinations</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-display text-slate-900">
            Explore 11 Premier Study Destinations
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal max-w-2xl mx-auto">
            From zero-tuition German public universities to 3-year PGWP pathways in Canada, find your ideal destination.
          </p>

          {/* Filter Pills */}
          <div className="flex justify-center gap-2 pt-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All 11 Destinations
            </button>
            <button
              onClick={() => setFilter('popular')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filter === 'popular' 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              ⭐ Top 4 Popular
            </button>
            <button
              onClick={() => setFilter('budget')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filter === 'budget' 
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              💰 Low Budget / €0 Tuition
            </button>
          </div>
        </motion.div>

        {/* Countries Grid with Dynamic Border Glow Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries.map((c, idx) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="bg-white p-7 rounded-3xl border border-slate-200 shadow-md hover:border-blue-500/60 hover:shadow-[0_0_30px_rgba(37,99,235,0.18)] transition-all duration-300 flex flex-col justify-between space-y-6 text-left group relative overflow-hidden"
            >
              {/* Subtle Top Border Glow Accent */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-4">
                
                {/* Header Row */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{c.flag}</span>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 font-display group-hover:text-blue-600 transition-colors">
                        {c.name}
                      </h3>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100 inline-block mt-0.5">
                        {c.postStudyVisa}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Highlights Pill Matrix */}
                <div className="space-y-2 pt-1 text-xs">
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                    <div className="text-[10px] font-bold uppercase text-slate-500">Tuition Fee Range</div>
                    <div className="font-extrabold text-slate-900 text-sm">{c.tuitionCost}</div>
                  </div>

                  <div className="p-3 bg-blue-50/50 rounded-2xl border border-blue-100 space-y-1">
                    <div className="text-[10px] font-bold uppercase text-blue-600 flex items-center gap-1">
                      <Award size={12} />
                      <span>Scholarship & Grants</span>
                    </div>
                    <div className="font-bold text-slate-800 text-xs">{c.scholarship}</div>
                  </div>
                </div>

                {/* Key Features List */}
                <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
                  {c.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-slate-100">
                <a 
                  href="#contact" 
                  className="w-full py-3 px-4 rounded-2xl bg-slate-50 hover:bg-blue-600 hover:text-white border border-slate-200 hover:border-blue-600 text-slate-800 font-bold text-xs flex items-center justify-between transition-all group-hover:shadow-md cursor-pointer"
                >
                  <span>Apply for {c.name}</span>
                  <ArrowRight size={14} />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
