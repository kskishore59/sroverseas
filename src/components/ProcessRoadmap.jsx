import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { processSteps } from '../data/servicesData';
import { CheckCircle2, ArrowRight, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

function DesktopCardItem({ step, index, activeStep }) {
  const dist = Math.abs(index - activeStep);

  // Peak 1.15 scale precisely at center (dist = 0)
  const scale = dist === 0 ? 1.15 : dist === 1 ? 0.86 : 0.78;
  const opacity = dist === 0 ? 1.0 : dist === 1 ? 0.55 : 0.20;
  const isActive = dist === 0;

  return (
    <motion.div
      animate={{
        scale,
        opacity,
        y: isActive ? 0 : 16
      }}
      transition={{
        type: 'spring',
        stiffness: 240,
        damping: 24
      }}
      className={`w-[340px] sm:w-[420px] flex-shrink-0 bg-white p-8 rounded-3xl border text-left space-y-5 transition-colors duration-300 ${
        isActive 
          ? 'border-blue-600 ring-4 ring-blue-500/20 shadow-2xl shadow-blue-600/15' 
          : 'border-slate-200 shadow-md'
      }`}
    >
      {/* Top Row */}
      <div className="flex justify-between items-center border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <span className={`w-11 h-11 rounded-2xl font-black text-sm flex items-center justify-center border font-display transition-all ${
            isActive ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-blue-50 text-blue-600 border-blue-100'
          }`}>
            {step.step}
          </span>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600">Stage {index + 1} of 9</span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">{step.title}</h3>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
          <CheckCircle2 size={18} />
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal min-h-[75px]">
        {step.desc}
      </p>

      {/* Progress Bar */}
      <div className="space-y-1.5 pt-2">
        <div className="flex justify-between text-[11px] font-bold text-slate-500">
          <span>Roadmap Progress</span>
          <span className="text-blue-600 font-extrabold">{Math.round(((index + 1) / 9) * 100)}%</span>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 rounded-full"
            style={{ width: `${((index + 1) / 9) * 100}%` }}
          />
        </div>
      </div>

      {/* Directional Indicator */}
      <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 pt-1">
        <span>{index + 1 < 9 ? `Next: Stage ${index + 2}` : 'Flight Departure'}</span>
        <ArrowRight size={14} className={isActive ? 'text-blue-600' : 'text-slate-400'} />
      </div>
    </motion.div>
  );
}

export default function ProcessRoadmap() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const isCoolingDown = useRef(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Strict Single-Card Wheel Gesture Intercept Engine
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const handleWheel = (e) => {
      // Check if mouse is within roadmap section
      const rect = sectionEl.getBoundingClientRect();
      const inView = rect.top <= 120 && rect.bottom >= window.innerHeight - 120;

      if (!inView) return;

      // Handle wheel delta
      if (e.deltaY > 0) {
        // Scrolling down
        if (activeStep < processSteps.length - 1) {
          e.preventDefault();
          if (!isCoolingDown.current) {
            isCoolingDown.current = true;
            setActiveStep((prev) => Math.min(processSteps.length - 1, prev + 1));
            setTimeout(() => {
              isCoolingDown.current = false;
            }, 450); // 450ms cooldown for single-card advance
          }
        }
      } else if (e.deltaY < 0) {
        // Scrolling up
        if (activeStep > 0) {
          e.preventDefault();
          if (!isCoolingDown.current) {
            isCoolingDown.current = true;
            setActiveStep((prev) => Math.max(0, prev - 1));
            setTimeout(() => {
              isCoolingDown.current = false;
            }, 450); // 450ms cooldown for single-card retract
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeStep]);

  // Card Width: 420px, Gap: 32px => Step distance = 452px
  // Target X position for centering activeStep
  const targetX = windowWidth / 2 - 210 - activeStep * 452;

  return (
    <section ref={sectionRef} id="process" className="py-20 relative bg-slate-50 border-t border-slate-200 overflow-hidden min-h-screen flex flex-col justify-between">
      
      {/* Ambient Gradient Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-r from-blue-400/10 via-indigo-400/10 to-purple-400/10 rounded-full blur-3xl pointer-events-none transition-all duration-700" />

      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center space-y-3 px-4 z-20"
      >
        <span className="badge-tag">
          <Sparkles size={14} className="text-blue-600" />
          <span>Single-Gesture Scroll Lock</span>
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-display text-slate-900">
          9-Step Path to Landing Overseas
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto font-normal">
          Scroll down — advances strictly <strong>1 card at a time</strong>, centered in full focus.
        </p>

        {/* Interactive Step Navigation Pills */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 pt-1 max-w-3xl mx-auto">
          {processSteps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`h-8 px-3 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeStep === idx
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 scale-105'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-300'
              }`}
            >
              <span>{step.step}</span>
              <span className="hidden md:inline">{step.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* DESKTOP SINGLE-CARD CENTER-LOCKED HORIZONTAL DECK */}
      <div className="hidden sm:block w-full overflow-hidden py-10 z-10 relative">
        
        {/* Subtle Center Focus Ring */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[440px] rounded-3xl border-2 border-blue-500/20 pointer-events-none bg-blue-500/5 -z-10" />

        <motion.div 
          animate={{ x: targetX }}
          transition={{ type: 'spring', stiffness: 220, damping: 25 }}
          className="flex gap-8 w-max"
        >
          {processSteps.map((step, idx) => (
            <DesktopCardItem 
              key={step.step}
              step={step}
              index={idx}
              activeStep={activeStep}
            />
          ))}
        </motion.div>
      </div>

      {/* MOBILE VIEW RESPONSIVE TOUCH CAROUSEL */}
      <div className="sm:hidden container mx-auto px-4 z-20 py-4">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl space-y-4 text-left">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-blue-600 text-white font-black text-xs flex items-center justify-center font-display shadow-sm">
                {processSteps[activeStep].step}
              </span>
              <div>
                <span className="text-[9px] font-extrabold uppercase text-blue-600">Stage {activeStep + 1} of 9</span>
                <h3 className="text-lg font-black text-slate-900 font-display">{processSteps[activeStep].title}</h3>
              </div>
            </div>
            <CheckCircle2 size={20} className="text-emerald-600" />
          </div>

          <p className="text-slate-600 text-xs leading-relaxed font-normal min-h-[60px]">
            {processSteps[activeStep].desc}
          </p>

          <div className="flex justify-between items-center pt-2">
            <button
              disabled={activeStep === 0}
              onClick={() => setActiveStep(activeStep - 1)}
              className="btn-outline px-4 py-2 text-xs disabled:opacity-30 disabled:pointer-events-none"
            >
              Prev
            </button>
            <span className="text-xs font-bold text-slate-700">Stage {activeStep + 1} / 9</span>
            <button
              disabled={activeStep === processSteps.length - 1}
              onClick={() => setActiveStep(activeStep + 1)}
              className="btn-primary px-4 py-2 text-xs disabled:opacity-30 disabled:pointer-events-none"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Control Toolbar */}
      <div className="container mx-auto text-center flex items-center justify-center gap-4 px-4 z-20">
        <button
          disabled={activeStep === 0}
          onClick={() => setActiveStep(activeStep - 1)}
          className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-blue-600 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-xs cursor-pointer"
          title="Previous Stage"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-bold text-slate-700">
          <span>Active Center Stage:</span>
          <span className="text-blue-600 font-extrabold">Step {activeStep + 1} of 9</span>
        </div>

        <button
          disabled={activeStep === processSteps.length - 1}
          onClick={() => setActiveStep(activeStep + 1)}
          className="p-2.5 rounded-full bg-blue-600 text-white disabled:opacity-30 disabled:pointer-events-none transition-all shadow-xs hover:bg-blue-500 cursor-pointer"
          title="Next Stage"
        >
          <ChevronRight size={18} />
        </button>
      </div>

    </section>
  );
}
