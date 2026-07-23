import React, { useState } from 'react';
import { universitiesData } from '../data/universitiesData';
import { Search, Globe, Award, Calendar, BookOpen, ArrowRight, Sparkles } from 'lucide-react';

export default function UniversitiesSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All Universities' },
    { id: 'uk', label: '🇬🇧 UK' },
    { id: 'canada', label: '🇨🇦 Canada' },
    { id: 'germany', label: '🇩🇪 Germany' },
    { id: 'australia', label: '🇦🇺 Australia' },
    { id: 'usa', label: '🇺🇸 USA' },
    { id: 'ireland', label: '🇮🇪 Ireland' },
    { id: 'singapore', label: '🇸🇬 Singapore' },
    { id: 'france', label: '🇫🇷 France' }
  ];

  const filteredUnivs = universitiesData.filter((u) => {
    const matchesFilter = activeFilter === 'all' || u.country === activeFilter;
    const matchesSearch = 
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      u.programs.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.countryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="universities" className="py-24 relative bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="badge-tag">
            <Sparkles size={14} className="text-blue-600" />
            <span>Affiliated Partners</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-display text-slate-900">
            Represented Global Universities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            SR Overseas has direct partnerships with 500+ universities worldwide. Explore top institutions and admit criteria.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search university or program..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600 shadow-sm"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>

        {/* University Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUnivs.map((univ) => (
            <div 
              key={univ.id}
              className="bg-white overflow-hidden rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Card Header Background */}
              <div 
                className="p-6 relative text-white space-y-3"
                style={{ background: univ.bg }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-2xl">{univ.flag}</span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-extrabold text-amber-300 border border-white/20">
                    {univ.rank}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl">{univ.icon}</div>
                  <h3 className="text-xl font-black font-display tracking-tight">{univ.name}</h3>
                  <p className="text-xs text-slate-200 font-semibold">{univ.countryName}</p>
                </div>
              </div>

              {/* Specs */}
              <div className="p-6 space-y-3 text-xs text-slate-700 flex-1">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">📚 Programs:</span>
                  <span className="font-bold text-slate-900 text-right">{univ.programs}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">💰 Tuition Range:</span>
                  <span className="font-bold text-emerald-600">{univ.tuition}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">🎓 Scholarships:</span>
                  <span className="font-bold text-amber-700">{univ.scholarships}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">📅 Intakes:</span>
                  <span className="font-bold text-slate-800">{univ.intake}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">🌐 IELTS Cutoff:</span>
                  <span className="font-bold text-blue-600">{univ.ielts}</span>
                </div>
              </div>

              {/* Apply CTA */}
              <div className="p-6 pt-0">
                <a 
                  href="#contact"
                  className="w-full py-3 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-blue-600 hover:border-blue-600 text-slate-700 hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Apply via SR Overseas</span>
                  <ArrowRight size={14} />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
