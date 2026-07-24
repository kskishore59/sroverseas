import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';

export default function AIAdvisorChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! I am your SR Overseas Digital Guide. Ask me about zero-tuition German degrees, Canada 3-yr PGWP, UK 1-yr Master\'s, scholarships, or collateral-free loans!'
    }
  ]);

  const handleSend = (textToSend) => {
    const query = textToSend || inputMsg;
    if (!query.trim()) return;

    const newMsgs = [...messages, { sender: 'user', text: query }];
    setMessages(newMsgs);
    if (!textToSend) setInputMsg('');

    setTimeout(() => {
      const lower = query.toLowerCase();
      let botResponse = '';
      let showWhatsAppButton = false;

      if (lower.includes('germany') || lower.includes('tuition') || lower.includes('free') || lower.includes('public')) {
        botResponse = "🇩🇪 Germany Public Universities charge €0 tuition fees for international Bachelor's & Master's degrees! You only need a blocked account (~€11,208/yr) for living expenses. Would you like a list of English-taught programs?";
      } else if (lower.includes('canada') || lower.includes('pr') || lower.includes('work') || lower.includes('pgwp')) {
        botResponse = "🇨🇦 Canada offers up to 3 years Post-Graduation Work Permit (PGWP). You can work up to 24 hours/week during studies and transition to PR via Express Entry or PNP streams!";
      } else if (lower.includes('loan') || lower.includes('money') || lower.includes('bank') || lower.includes('budget')) {
        botResponse = "🏦 SR Overseas partners with SBI, HDFC, ICICI & Avanse to offer collateral-free education loans up to ₹75 Lakhs at low interest rates (7.5%-9.5%). You can test our Loan EMI Estimator on the page!";
      } else if (lower.includes('scholarship') || lower.includes('daad') || lower.includes('chevening') || lower.includes('waiver')) {
        botResponse = "🎓 We help students claim DAAD (Germany), Chevening (UK), Australia Awards, and university merit waivers up to 100% tuition coverage based on GPA and SOP profile strength!";
      } else if (lower.includes('intake') || lower.includes('deadline') || lower.includes('september') || lower.includes('january')) {
        botResponse = "📅 Major intakes: Fall (September) — main intake with maximum scholarships; Spring (January) — second major intake; Summer (May) — fast-track PG diplomas. We recommend applying 6 months in advance!";
      } else if (lower.includes('blocked') || lower.includes('gic') || lower.includes('fund') || lower.includes('proof')) {
        botResponse = "💶 Blocked Account & Proof of Funds: Germany requires €11,208 in a Fintiba/Expatrio blocked account. Canada requires $20,635 GIC. We assist with instant account setup!";
      } else if (lower.includes('visa') || lower.includes('interview') || lower.includes('f1') || lower.includes('drill')) {
        botResponse = "🛂 SR Overseas conducts 1-on-1 mock visa interview drills covering US F-1 visa officer questions, UK credibility checks, and German Embassy slot booking assistance with a 98% success rate!";
      } else if (lower.includes('backlog') || lower.includes('gpa') || lower.includes('low') || lower.includes('percentage')) {
        botResponse = "📈 Low GPA or backlogs? Don't worry! We have direct university partners in UK, USA & Australia accepting up to 15-20 backlogs with conditional foundation / pre-master's pathways!";
      } else if (lower.includes('ielts') || lower.includes('english') || lower.includes('toefl') || lower.includes('score')) {
        botResponse = "📚 Most top universities in UK, Canada, Australia & USA require IELTS Band 6.5 overall (no component under 6.0). We also provide band-booster IELTS coaching!";
      } else if (lower.includes('uk') || lower.includes('london') || lower.includes('master')) {
        botResponse = "🇬🇧 UK offers 1-Year Master's degrees saving 1 full year of living costs and tuition, followed by a 2-Year Graduate Route post-study work visa!";
      } else {
        // Fallback for complex queries -> Route smoothly to WhatsApp
        botResponse = "I want to make sure you get exact official guidance for your specific query! Let me connect you directly with a Senior Counselor on WhatsApp.";
        showWhatsAppButton = true;
      }

      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: botResponse, hasWhatsAppRoute: showWhatsAppButton }
      ]);
    }, 400);
  };

  return (
    <>
      {/* Fixed Non-Overlapping Launcher Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">

        {/* Floating Official SVG WhatsApp Button */}
        <div className="relative group flex items-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl mr-2 whitespace-nowrap pointer-events-none border border-slate-800">
            💬 Chat on WhatsApp
          </span>
          <a
            href="https://wa.me/917416007557?text=Hi%20SR%20Overseas!%20I%20would%20like%20to%20know%20more%20about%20study%20abroad%20options."
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-110 transition-all border-2 border-white relative cursor-pointer"
            aria-label="Official WhatsApp Chat"
          >
            {/* Official WhatsApp SVG Logo */}
            <svg className="w-8 h-8 fill-current text-white" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-white rounded-full border-2 border-[#25D366] animate-ping" />
          </a>
        </div>

        {/* AI Assistant Launcher Button with Vibrant Explicit Gradient & Glowing Halo */}
        <div className="relative group flex items-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl mr-2 whitespace-nowrap pointer-events-none border border-slate-800">
            🤖 AI Study Assistant
          </span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 50%, #4F46E5 100%)' }}
            className="w-14 h-14 rounded-full text-white flex items-center justify-center shadow-[0_10px_30px_rgba(37,99,235,0.45)] hover:shadow-[0_15px_35px_rgba(37,99,235,0.6)] hover:scale-110 transition-all border-2 border-white relative group cursor-pointer"
            aria-label="Open Digital Assistant"
          >
            <Bot size={26} className="text-white" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white animate-pulse" />
          </button>
        </div>

      </div>

      {/* Floating Interactive AI Chat Drawer */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col h-[490px] animate-fade-in">

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 p-4 border-b border-blue-900 flex justify-between items-center text-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Sparkles size={16} />
              </div>
              <div>
                <h4 className="text-xs font-extrabold font-display">SR Digital Assistant</h4>
                <span className="text-[10px] text-emerald-300 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Instant Response • 24/7
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white font-bold text-lg cursor-pointer">
              ×
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-xs">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {m.sender === 'bot' && (
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-1 shadow-xs">
                      <Bot size={12} />
                    </div>
                  )}
                  <div
                    className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${m.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none shadow-sm font-medium'
                        : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-xs'
                      }`}
                  >
                    {m.text}
                  </div>
                </div>

                {/* Direct WhatsApp Smooth Route Button */}
                {m.hasWhatsAppRoute && (
                  <div className="mt-2 ml-8">
                    <a
                      href="https://wa.me/917416007557?text=Hi%20SR%20Overseas!%20I%20have%20a%20specific%20query%20regarding%20study%20abroad."
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-[11px] inline-flex items-center gap-1.5 shadow-md shadow-emerald-600/20"
                    >
                      <MessageSquare size={13} />
                      <span>Chat with Senior Counselor on WhatsApp</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Consultation CTA Strip */}
          <div className="px-3 py-2 bg-blue-50 border-t border-blue-100 flex items-center justify-between text-xs">
            <span className="text-slate-700 font-bold text-[11px]">Need 1-on-1 Profile Assessment?</span>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-3 py-1.5 rounded-xl bg-blue-600 text-white font-extrabold text-[10px] hover:bg-blue-500 transition-colors flex items-center gap-1 shadow-xs"
            >
              <Calendar size={12} />
              <span>Book Session</span>
            </a>
          </div>

          {/* Expanded Scenario Option Chips */}
          <div className="px-3 py-2 bg-white border-t border-slate-100 flex gap-1.5 overflow-x-auto no-scrollbar text-[10px] font-bold text-slate-600">
            <button onClick={() => handleSend('Scholarships DAAD & Chevening')} className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 hover:bg-amber-100 whitespace-nowrap cursor-pointer">🎓 Scholarships</button>
            <button onClick={() => handleSend('Intakes and deadlines')} className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 whitespace-nowrap cursor-pointer">📅 Intakes</button>
            <button onClick={() => handleSend('Blocked account and GIC funds')} className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 whitespace-nowrap cursor-pointer">💶 Blocked Funds</button>
            <button onClick={() => handleSend('US F1 & UK Visa mock interview')} className="px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 hover:bg-purple-100 whitespace-nowrap cursor-pointer">🛂 Visa Drills</button>
            <button onClick={() => handleSend('Low GPA backlogs eligibility')} className="px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 hover:bg-rose-100 whitespace-nowrap cursor-pointer">📈 Backlogs Path</button>
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              placeholder="Type your query..."
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 font-medium"
            />
            <button
              onClick={() => handleSend()}
              className="px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-sm cursor-pointer"
            >
              <Send size={14} />
            </button>
          </div>

        </div>
      )}
    </>
  );
}
