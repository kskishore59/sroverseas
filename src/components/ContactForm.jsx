import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, Sparkles } from 'lucide-react';
import CustomSelect from './CustomSelect';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: 'germany',
    qualification: 'bachelor',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const countrySelectOptions = [
    { value: 'germany', label: 'Germany 🇩🇪 (€0 Tuition)', icon: '🇩🇪' },
    { value: 'canada', label: 'Canada 🇨🇦 (3Y PGWP)', icon: '🇨🇦' },
    { value: 'uk', label: 'United Kingdom 🇬🇧 (1Y Master)', icon: '🇬🇧' },
    { value: 'usa', label: 'United States 🇺🇸 (STEM OPT)', icon: '🇺🇸' },
    { value: 'australia', label: 'Australia 🇦🇺 (PSW)', icon: '🇦🇺' },
    { value: 'georgia', label: 'Georgia 🇬🇪 (MBBS)', icon: '🇬🇪' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="badge-tag">
              <Sparkles size={14} className="text-blue-600" />
              <span>Get In Touch</span>
            </span>

            <h2 className="text-3xl font-black font-display text-slate-900 leading-tight">
              Start Your Global Study Journey Today
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Book a 1-on-1 profile counselling session with our senior overseas education specialists at Medchal, Hyderabad.
            </p>

            <div className="space-y-4 text-xs font-semibold text-slate-800 pt-2">
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <MapPin size={18} className="text-blue-600 mt-0.5" />
                <div>
                  <div className="font-extrabold text-slate-900">Head Office Location</div>
                  <div className="text-slate-500 text-[11px] font-normal mt-0.5">Medchal, Hyderabad, Telangana — 501401</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <Phone size={18} className="text-blue-600 mt-0.5" />
                <div>
                  <div className="font-extrabold text-slate-900">Direct Phone Support</div>
                  <a href="tel:+917416007557" className="text-blue-600 text-[11px] hover:underline">+91 74160 07557</a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <Mail size={18} className="text-blue-600 mt-0.5" />
                <div>
                  <div className="font-extrabold text-slate-900">Email Query</div>
                  <a href="mailto:srabroadconsultancy@gmail.com" className="text-slate-600 text-[11px] hover:underline">srabroadconsultancy@gmail.com</a>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/917416007557" 
              target="_blank" 
              rel="noreferrer"
              className="btn-primary w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-emerald-600/20 text-xs flex items-center justify-center gap-2"
            >
              <MessageSquare size={16} />
              <span>Direct WhatsApp Counselling</span>
            </a>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-200 text-center space-y-4">
                <CheckCircle2 size={48} className="text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-black text-slate-900 font-display">Consultation Request Received!</h3>
                <p className="text-slate-600 text-xs font-normal">
                  Thank you, <strong>{formData.name}</strong>. Our senior counselor will reach out to you on <strong>{formData.phone}</strong> within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left text-xs">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Phone Number (WhatsApp) *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="student@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 font-medium"
                    />
                  </div>
                </div>

                <CustomSelect 
                  label="Target Destination"
                  options={countrySelectOptions}
                  value={formData.country}
                  onChange={(val) => setFormData({ ...formData, country: val })}
                />

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Tell Us About Your Profile / Query</label>
                  <textarea 
                    rows={3}
                    placeholder="Degree, GPA, IELTS score, target intake..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 font-medium resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="btn-primary w-full py-4 text-sm font-bold shadow-lg shadow-blue-600/25 cursor-pointer"
                >
                  <Send size={16} />
                  <span>Book Free Consultation</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
