import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900 text-xs">
      <div className="container mx-auto space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <img 
                src="/assets/logo.png" 
                alt="SR Overseas Logo" 
                className="h-10 w-auto object-contain bg-white/90 p-1 rounded-xl"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-white font-display">
                  SR OVERSEAS
                </span>
                <span className="text-[9px] tracking-widest uppercase font-bold text-blue-400">
                  Education Consultancy
                </span>
              </div>
            </a>

            <p className="text-slate-400 leading-relaxed font-normal max-w-sm">
              Hyderabad's premier study abroad consultancy. Elevating students into top global universities in Canada, Germany, UK, USA, Australia, and 10+ other destinations.
            </p>

            <div className="pt-2 text-slate-300 font-semibold space-y-1">
              <div>📍 Medchal, Hyderabad, Telangana — 501401</div>
              <div>📞 +91 74160 07557 | ✉️ srabroadconsultancy@gmail.com</div>
            </div>
          </div>

          {/* Col 2: Featured Destinations */}
          <div className="space-y-3">
            <div className="text-white font-extrabold text-sm font-display uppercase tracking-wider">Top Destinations</div>
            <ul className="space-y-2">
              <li><a href="#countries" className="hover:text-white transition-colors">🇨🇦 Canada (3Y PGWP)</a></li>
              <li><a href="#countries" className="hover:text-white transition-colors">🇩🇪 Germany (€0 Tuition)</a></li>
              <li><a href="#countries" className="hover:text-white transition-colors">🇺🇸 United States (OPT)</a></li>
              <li><a href="#countries" className="hover:text-white transition-colors">🇬🇧 United Kingdom</a></li>
              <li><a href="#countries" className="hover:text-white transition-colors">🇦🇺 Australia</a></li>
              <li><a href="#countries" className="hover:text-white transition-colors">🇮🇪 Ireland</a></li>
              <li><a href="#countries" className="hover:text-white transition-colors">🇬🇪 Georgia (MBBS)</a></li>
            </ul>
          </div>

          {/* Col 3: Student Tools & Services */}
          <div className="space-y-3">
            <div className="text-white font-extrabold text-sm font-display uppercase tracking-wider">Student Tools</div>
            <ul className="space-y-2">
              <li><a href="#wizard" className="hover:text-white transition-colors">AI Eligibility Assessor</a></li>
              <li><a href="#budget-calculator" className="hover:text-white transition-colors">Low-Budget Calculator</a></li>
              <li><a href="#loan-calculator" className="hover:text-white transition-colors">Education Loan Estimator</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Career Counselling & SOP</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">9-Step Enrollment Path</a></li>
              <li><a href="#universities" className="hover:text-white transition-colors">500+ Partner Universities</a></li>
            </ul>
          </div>

          {/* Col 4: Office Hours & Consultation */}
          <div className="space-y-3">
            <div className="text-white font-extrabold text-sm font-display uppercase tracking-wider">Office Hours</div>
            <p className="text-slate-400">Monday - Saturday:<br /><strong className="text-white">9:30 AM - 6:30 PM</strong></p>
            <p className="text-slate-400">Sunday: By Appointment</p>
            
            <div className="pt-2">
              <a href="#contact" className="btn-primary text-xs py-2.5 px-4 w-full text-center">
                Book Office Visit
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} SR Overseas Education Consultancy. All rights reserved. Registered in Hyderabad, India.
          </div>
          <button 
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
