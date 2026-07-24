import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MessageSquare, Sun, Moon, Menu, X, ChevronDown, Sparkles, Search, Globe, Landmark, ShieldCheck, Compass, GraduationCap, Layers } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'destinations', 'finance', 'services'
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Support Strip */}
      <div className="bg-slate-900 text-slate-200 text-[11px] py-1.5 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:+917416007557" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors font-medium">
              <Phone size={12} className="text-blue-400" />
              <span>+91 74160 07557</span>
            </a>
            <a href="https://wa.me/917416007557" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-emerald-400 font-bold hover:underline">
              <MessageSquare size={12} />
              <span>WhatsApp Direct</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-slate-400">Office Hours: Mon - Sat 9:30 AM - 6:30 PM</span>
            <button 
              onClick={toggleTheme}
              className="p-1 rounded-full hover:bg-slate-800 text-slate-300 transition-colors cursor-pointer"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={13} className="text-amber-400" /> : <Moon size={13} className="text-blue-400" />}
            </button>
          </div>
        </div>
      </div>

      {/* Floating Modern Pill Navbar Header */}
      <header className="sticky top-3 z-50 px-3 sm:px-4 transition-all duration-300">
        <div className={`max-w-7xl mx-auto rounded-full transition-all duration-300 border ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-xl border-slate-200/90 py-2 px-6' 
            : 'bg-white/90 backdrop-blur-md shadow-md border-slate-200/80 py-2.5 px-6'
        }`}>
          <div className="flex items-center justify-between">
            
            {/* Official Logo Brand Container */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="h-10 w-auto flex items-center justify-center">
                <img 
                  src="/assets/logo.png" 
                  alt="SR Overseas Education Logo" 
                  className="h-9 w-auto object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors leading-none">
                  SR OVERSEAS
                </span>
                <span className="text-[9px] tracking-widest uppercase font-black text-blue-600 mt-0.5">
                  Education Consultancy
                </span>
              </div>
            </a>

            {/* 4 Nav Dropdown Categories */}
            <nav className="hidden lg:flex items-center gap-2 font-bold text-xs text-slate-700">
              
              {/* 1. Destinations Mega Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('destinations')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3.5 py-2 hover:text-blue-600 hover:bg-blue-50/80 transition-colors rounded-full cursor-pointer">
                  <Globe size={14} className="text-blue-600" />
                  <span>Destinations</span>
                  <ChevronDown size={13} className={`transition-transform duration-200 ${activeDropdown === 'destinations' ? 'rotate-180 text-blue-600' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'destinations' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-[420px] bg-white p-4 rounded-3xl border border-slate-200 shadow-2xl grid grid-cols-2 gap-2 text-xs z-50"
                    >
                      <a href="#countries" className="p-2.5 hover:bg-blue-50 rounded-2xl transition-colors flex items-center gap-2.5 border border-transparent hover:border-blue-100">
                        <span className="text-lg">🇨🇦</span>
                        <div>
                          <div className="font-extrabold text-slate-900">Canada</div>
                          <div className="text-[10px] text-blue-600 font-bold">3 Yrs PGWP</div>
                        </div>
                      </a>
                      <a href="#countries" className="p-2.5 hover:bg-emerald-50 rounded-2xl transition-colors flex items-center gap-2.5 border border-transparent hover:border-emerald-100">
                        <span className="text-lg">🇩🇪</span>
                        <div>
                          <div className="font-extrabold text-slate-900">Germany</div>
                          <div className="text-[10px] text-emerald-600 font-bold">€0 Tuition Fees</div>
                        </div>
                      </a>
                      <a href="#countries" className="p-2.5 hover:bg-indigo-50 rounded-2xl transition-colors flex items-center gap-2.5 border border-transparent hover:border-indigo-100">
                        <span className="text-lg">🇺🇸</span>
                        <div>
                          <div className="font-extrabold text-slate-900">United States</div>
                          <div className="text-[10px] text-indigo-600 font-bold">36 Months OPT</div>
                        </div>
                      </a>
                      <a href="#countries" className="p-2.5 hover:bg-purple-50 rounded-2xl transition-colors flex items-center gap-2.5 border border-transparent hover:border-purple-100">
                        <span className="text-lg">🇬🇧</span>
                        <div>
                          <div className="font-extrabold text-slate-900">United Kingdom</div>
                          <div className="text-[10px] text-purple-600 font-bold">1-Yr Master's</div>
                        </div>
                      </a>
                      <a href="#countries" className="p-2.5 hover:bg-blue-50 rounded-2xl transition-colors flex items-center gap-2.5 border border-transparent hover:border-blue-100">
                        <span className="text-lg">🇦🇺</span>
                        <div>
                          <div className="font-extrabold text-slate-900">Australia</div>
                          <div className="text-[10px] text-slate-500">2-4 Yrs PSW</div>
                        </div>
                      </a>
                      <a href="#countries" className="p-2.5 hover:bg-amber-50 rounded-2xl transition-colors flex items-center gap-2.5 border border-transparent hover:border-amber-100">
                        <span className="text-lg">🇬🇪</span>
                        <div>
                          <div className="font-extrabold text-slate-900">Georgia</div>
                          <div className="text-[10px] text-amber-600 font-bold">MBBS (NMC Approved)</div>
                        </div>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 2. Financial Suite Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('finance')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3.5 py-2 hover:text-blue-600 hover:bg-blue-50/80 transition-colors rounded-full cursor-pointer">
                  <Landmark size={14} className="text-emerald-600" />
                  <span>Calculators & Loans</span>
                  <ChevronDown size={13} className={`transition-transform duration-200 ${activeDropdown === 'finance' ? 'rotate-180 text-blue-600' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'finance' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white p-3 rounded-3xl border border-slate-200 shadow-2xl space-y-1 text-xs z-50"
                    >
                      <a href="#budget-calculator" className="p-2.5 hover:bg-blue-50 rounded-2xl transition-colors block font-extrabold text-slate-900">
                        <div>💰 Low-Budget Calculator</div>
                        <div className="text-[10px] text-slate-500 font-normal mt-0.5">Estimate total tuition + living</div>
                      </a>
                      <a href="#loan-calculator" className="p-2.5 hover:bg-emerald-50 rounded-2xl transition-colors block font-extrabold text-slate-900">
                        <div>🏦 Education Loan Estimator</div>
                        <div className="text-[10px] text-emerald-600 font-bold mt-0.5">Loans up to ₹75 Lakhs</div>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 3. Services & Process Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3.5 py-2 hover:text-blue-600 hover:bg-blue-50/80 transition-colors rounded-full cursor-pointer">
                  <Layers size={14} className="text-purple-600" />
                  <span>Services & Roadmap</span>
                  <ChevronDown size={13} className={`transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-blue-600' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white p-3 rounded-3xl border border-slate-200 shadow-2xl space-y-1 text-xs z-50"
                    >
                      <a href="#services" className="p-2.5 hover:bg-purple-50 rounded-2xl transition-colors block font-extrabold text-slate-900">
                        <div>📚 Comprehensive Services</div>
                        <div className="text-[10px] text-slate-500 font-normal mt-0.5">Counselling, Visa, SOP & IELTS</div>
                      </a>
                      <a href="#process" className="p-2.5 hover:bg-blue-50 rounded-2xl transition-colors block font-extrabold text-slate-900">
                        <div>🗺️ 9-Step Roadmap Deck</div>
                        <div className="text-[10px] text-blue-600 font-bold mt-0.5">Interactive enrollment roadmap</div>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 4. Leadership */}
              <a href="#director" className="px-3.5 py-2 hover:text-blue-600 hover:bg-blue-50/80 transition-colors rounded-full">
                Leadership
              </a>

            </nav>

            {/* Right Action & Search */}
            <div className="hidden sm:flex items-center gap-2">
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors border border-slate-200 cursor-pointer"
                title="Search Site"
              >
                <Search size={15} />
              </button>

              <a href="#contact" className="btn-primary text-xs py-2 px-4 shadow-md">
                <Sparkles size={13} />
                <span>Book Consultation</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-100 cursor-pointer"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 top-[90px] z-40 bg-white/98 backdrop-blur-2xl p-6 lg:hidden flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-4 font-bold text-slate-800 text-sm">
              <div className="text-xs uppercase font-extrabold text-blue-600 tracking-wider">Quick Navigation</div>
              <a href="#home" onClick={() => setMobileOpen(false)} className="block py-2 border-b border-slate-100">Home</a>
              <a href="#countries" onClick={() => setMobileOpen(false)} className="block py-2 border-b border-slate-100">Destinations (11 Countries)</a>
              <a href="#budget-calculator" onClick={() => setMobileOpen(false)} className="block py-2 border-b border-slate-100">Budget Calculator</a>
              <a href="#loan-calculator" onClick={() => setMobileOpen(false)} className="block py-2 border-b border-slate-100">Education Loan Estimator</a>
              <a href="#services" onClick={() => setMobileOpen(false)} className="block py-2 border-b border-slate-100">Services & SOP Guidance</a>
              <a href="#process" onClick={() => setMobileOpen(false)} className="block py-2 border-b border-slate-100">9-Step Roadmap</a>
              <a href="#director" onClick={() => setMobileOpen(false)} className="block py-2 border-b border-slate-100">Director & Leadership</a>
              <a href="#faq" onClick={() => setMobileOpen(false)} className="block py-2 border-b border-slate-100">FAQ</a>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3">
              <a href="https://wa.me/917416007557" target="_blank" rel="noreferrer" className="btn-primary w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-emerald-600/20 text-center font-bold text-xs flex items-center justify-center gap-2">
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </a>
              <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-outline w-full py-3 text-center text-xs">
                Book Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-start justify-center pt-24 p-4">
          <div className="bg-white max-w-xl w-full p-6 rounded-3xl border border-slate-200 shadow-2xl space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                <Search size={18} className="text-blue-600" />
                <span>Search SR Overseas</span>
              </div>
              <button onClick={() => setSearchOpen(false)} className="text-slate-400 hover:text-slate-900 font-bold cursor-pointer">×</button>
            </div>
            
            <input 
              type="text" 
              placeholder="Search Germany zero tuition, Canada PGWP, UK admissions..."
              autoFocus
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 font-medium"
            />

            <div className="flex flex-wrap gap-2 pt-2 text-xs">
              <span className="text-slate-400 self-center">Popular:</span>
              <a href="#countries" onClick={() => setSearchOpen(false)} className="px-3 py-1 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-full font-bold">🇩🇪 Germany €0 Tuition</a>
              <a href="#countries" onClick={() => setSearchOpen(false)} className="px-3 py-1 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-full font-bold">🇨🇦 Canada PGWP</a>
              <a href="#loan-calculator" onClick={() => setSearchOpen(false)} className="px-3 py-1 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-full font-bold">🏦 Education Loan</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
