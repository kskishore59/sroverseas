import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { countriesData } from '../data/countriesData';
import { Download, Clock, DollarSign, Award, Briefcase, Sparkles, LayoutGrid, ListFilter, Check } from 'lucide-react';

export default function DestinationsGrid() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  return (
    <section id="countries" className="py-24 relative bg-slate-50">
      <div className="container mx-auto">
        
        {/* Header with View Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16"
        >
          <div className="space-y-3 max-w-2xl">
            <span className="badge-tag">
              <Sparkles size={14} className="text-blue-600" />
              <span>Global Educational Hubs</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-display text-slate-900">
              Explore 11 Preferred Destinations
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal">
              We unlock admission pathways into top global educational hubs with promising career opportunities.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'grid' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutGrid size={14} />
              <span>Card Grid</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'table' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ListFilter size={14} />
              <span>Quick Matrix</span>
            </button>
          </div>
        </motion.div>

        {/* View Mode 1: Card Grid Deck with Staggered Scroll Reveal */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countriesData.map((country, idx) => (
              <motion.div 
                key={country.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white overflow-hidden rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Visual Header */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={country.image} 
                    alt={country.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  
                  {/* Flag Chip */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 text-xs font-extrabold text-slate-900 flex items-center gap-2 shadow-md">
                    <span>{country.flag}</span>
                    <span>{country.name}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-black font-display">{country.name}</h3>
                    <p className="text-xs text-blue-200 font-semibold">{country.tagline}</p>
                  </div>
                </div>

                {/* Specs List */}
                <div className="p-6 space-y-3.5 text-xs flex-1">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 flex items-center gap-1.5"><Briefcase size={14} className="text-purple-600" /> Courses</span>
                    <span className="font-bold text-slate-800 text-right">{country.popularCourses}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 flex items-center gap-1.5"><DollarSign size={14} className="text-emerald-600" /> Tuition</span>
                    <span className="font-extrabold text-emerald-600">{country.tuitionCost}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 flex items-center gap-1.5"><Award size={14} className="text-amber-600" /> Scholarship</span>
                    <span className="font-bold text-amber-700">{country.scholarship}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 flex items-center gap-1.5"><Clock size={14} className="text-blue-600" /> PSW Visa</span>
                    <span className="font-bold text-blue-600">{country.postStudyVisa}</span>
                  </div>

                  {/* Highlights */}
                  <div className="pt-2 space-y-1">
                    {country.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                        <Check size={12} className="text-blue-600 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 pt-0">
                  <button 
                    onClick={() => setSelectedCountry(country)}
                    className="w-full py-3 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-blue-600 hover:border-blue-600 text-slate-700 hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <span>Download Comprehensive PDF Guide</span>
                    <Download size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* View Mode 2: Quick Matrix View */}
        {viewMode === 'table' && (
          <div className="bg-white overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th className="p-4">Destination</th>
                  <th className="p-4">Popular Programs</th>
                  <th className="p-4">Tuition Cost</th>
                  <th className="p-4">Scholarship</th>
                  <th className="p-4">Part-Time Work</th>
                  <th className="p-4">PSW Visa</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {countriesData.map((c) => (
                  <tr key={c.id} className="hover:bg-blue-50/40 transition-colors">
                    <td className="p-4 font-extrabold flex items-center gap-2 text-sm text-slate-900">
                      <span>{c.flag}</span>
                      <span>{c.name}</span>
                    </td>
                    <td className="p-4">{c.popularCourses}</td>
                    <td className="p-4 text-emerald-600 font-bold">{c.tuitionCost}</td>
                    <td className="p-4 text-amber-700 font-semibold">{c.scholarship}</td>
                    <td className="p-4">{c.workHours}</td>
                    <td className="p-4 text-blue-600 font-bold">{c.postStudyVisa}</td>
                    <td className="p-4">
                      <button 
                        onClick={() => setSelectedCountry(c)}
                        className="px-3 py-1.5 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white font-bold transition-colors cursor-pointer"
                      >
                        Guide
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>

      {/* Download PDF Modal */}
      {selectedCountry && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full p-6 rounded-3xl border border-slate-200 shadow-2xl space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{selectedCountry.flag}</span>
                <h3 className="text-xl font-bold text-slate-900 font-display">{selectedCountry.name} Official Guide</h3>
              </div>
              <button 
                onClick={() => setSelectedCountry(null)}
                className="text-slate-400 hover:text-slate-900 text-xl font-bold cursor-pointer"
              >
                ×
              </button>
            </div>
            
            <p className="text-xs text-slate-600">
              Download complete admission criteria, blocked account requirements, post-study work visa checklists, and scholarship deadlines for {selectedCountry.name}.
            </p>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between text-slate-700">
                <span>Tuition Estimate:</span>
                <span className="font-bold text-emerald-600">{selectedCountry.tuitionCost}</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>Post-Study Work Visa:</span>
                <span className="font-bold text-blue-600">{selectedCountry.postStudyVisa}</span>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a 
                href="#contact" 
                onClick={() => setSelectedCountry(null)}
                className="btn-primary flex-1 py-3 text-xs"
              >
                Book Consultation
              </a>
              <button 
                onClick={() => {
                  alert(`Downloading SR Overseas ${selectedCountry.name} Official Guide...`);
                  setSelectedCountry(null);
                }}
                className="btn-outline flex-1 py-3 text-xs cursor-pointer"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
