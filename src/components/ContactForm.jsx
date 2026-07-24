import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle, Sparkles, Clock } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [rateLimitNotice, setRateLimitNotice] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.value]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your full name and phone number.');
      return;
    }

    // Rate Limiting Check (30 seconds cooldown between submissions)
    const now = Date.now();
    if (now - lastSubmitTime < 30000) {
      const remainingSecs = Math.ceil((30000 - (now - lastSubmitTime)) / 1000);
      setRateLimitNotice(`Consultation request already initiated! Please wait ${remainingSecs} seconds before submitting again to prevent duplicate bookings.`);
      return;
    }

    setRateLimitNotice('');
    setLastSubmitTime(now);

    const text = `Hi SR Overseas! I would like to book a consultation.\n\n*Name*: ${formData.name}\n*Email*: ${formData.email}\n*Phone*: ${formData.phone}\n*Target Destination*: ${formData.destination}\n*Query*: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/917416007557?text=${encodedText}`;

    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Panel: Contact Info & Map */}
          <div className="lg:col-span-6 space-y-8">

            <div className="space-y-4">
              <span className="badge-tag">
                <Sparkles size={14} className="text-blue-600" />
                <span>Get in Touch</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-slate-900">
                Reserve Your Free Consultation Slot
              </h2>
              <p className="text-slate-600 text-base font-normal">
                Book a 1-on-1 session with our expert education advisors in Medchal, Hyderabad or online.
              </p>
            </div>

            {/* Details Cards */}
            <div className="space-y-4">
              <a
                href="tel:+917416007557"
                className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 hover:border-blue-500 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Call / WhatsApp</div>
                  <div className="text-base font-extrabold text-slate-900">+91 74160 07557</div>
                </div>
              </a>

              <a
                href="mailto:srabroadconsultancy@gmail.com"
                className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 hover:border-blue-500 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Email Support</div>
                  <div className="text-base font-extrabold text-slate-900">srabroadconsultancy@gmail.com</div>
                </div>
              </a>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Main Office Location</div>
                  <div className="text-base font-extrabold text-slate-900">Medchal, Hyderabad, Telangana — 501401</div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white overflow-hidden rounded-3xl border border-slate-200 shadow-sm h-60">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3802.2656936130675!2d78.48286657517069!3d17.63757078329284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDM4JzE1LjMiTiA3OMKwMjknMDcuNiJF!5e0!3m2!1sen!2sin!4v1783096206296!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="SR Overseas Office Map"
              />
            </div>

          </div>

          {/* Right Panel: Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">

              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-2xl font-extrabold text-slate-900 font-display">Book Free Consultation</h3>
                <p className="text-xs text-slate-500 font-medium">Fill in details to connect directly via WhatsApp</p>
              </div>

              {rateLimitNotice && (
                <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-amber-800 text-xs font-bold flex items-center gap-2">
                  <Clock size={16} className="text-amber-600 flex-shrink-0" />
                  <span>{rateLimitNotice}</span>
                </div>
              )}

              {submitted ? (
                <div className="p-8 text-center space-y-4">
                  <CheckCircle size={48} className="text-emerald-600 mx-auto" />
                  <h4 className="text-xl font-bold text-slate-900 font-display">Enquiry Initiated!</h4>
                  <p className="text-xs text-slate-600">
                    Thank you! Our senior study abroad counselor will review your profile and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline text-xs px-6 py-2.5"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="rahul@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Preferred Destination *</label>
                    <input
                      type="text"
                      name="destination"
                      required
                      placeholder="e.g. Germany / Canada / UK / USA"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Message or Query Details</label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Specify your academic background, preferred course or budget limits..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-4 text-sm font-bold bg-[#25D366] hover:bg-[#20ba5a] shadow-emerald-600/20"
                  >
                    <MessageSquare size={18} />
                    <span>Send Consultation Request via WhatsApp</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
