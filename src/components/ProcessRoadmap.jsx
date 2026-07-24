import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { processSteps } from '../data/servicesData';
import { CheckCircle2, ArrowRight, ChevronRight, ChevronLeft, Sparkles, Play, Pause, Compass, Zap } from 'lucide-react';

export default function ProcessRoadmap() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play timer
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % processSteps.length);
      }, 3200);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const currentStepData = processSteps[activeStep];

  return (
    <section id="process" className="py-24 relative bg-slate-50 border-t border-slate-200 overflow-hidden">
      
      {/* Ambient Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10 px-4">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-12"
        >
          <span className="badge-tag">
            <Sparkles size={14} className="text-blue-600" />
            <span>Interactive Enrollment Roadmap</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-display text-slate-900">
            9-Step Path to Landing Overseas
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            Click or tap any step to explore your complete admission & visa journey from start to finish.
          </p>
        </motion.div>

        {/* 9-Stage Connected Stepper Ribbon */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-md mb-8">
          <div className="flex justify-between items-center relative overflow-x-auto no-scrollbar py-2 px-2 gap-2 sm:gap-4">
            
            {/* Connected Progress Line */}
            <div className="absolute top-1/2 left-6 right-6 h-1 bg-slate-100 -translate-y-1/2 rounded-full -z-0" />
            <div 
              className="absolute top-1/2 left-6 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 -translate-y-1/2 rounded-full transition-all duration-300 -z-0"
              style={{ width: `${(activeStep / 8) * 94}%` }}
            />

            {processSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPassed = idx < activeStep;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-extrabold text-xs sm:text-sm transition-all duration-200 cursor-pointer flex-shrink-0 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-110 ring-4 ring-blue-500/20'
                      : isPassed
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-white border-2 border-slate-200 text-slate-600 hover:border-blue-400'
                  }`}
                  title={step.title}
                >
                  {isPassed ? <CheckCircle2 size={18} /> : step.step}
                </button>
              );
            })}

          </div>
        </div>

        {/* Hero Active Stage Spotlight Card */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl mb-12 relative overflow-hidden">
          
          {/* Subtle Accent Glow Corner */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-bl-full pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.22 }}
              className="space-y-6 text-left"
            >
              {/* Card Top Row */}
              <div className="flex flex-wrap justify-between items-center gap-4 border-b border-slate-100 pb-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 font-black text-xl flex items-center justify-center border border-blue-100 shadow-xs font-display">
                    {currentStepData.step}
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">Stage {activeStep + 1} of 9</span>
                    <h3 className="text-2xl sm:text-4xl font-black text-slate-900 font-display">
                      {currentStepData.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      isPlaying 
                        ? 'bg-amber-100 text-amber-800 border border-amber-200 shadow-xs' 
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                    <span>{isPlaying ? 'Pause Tour' : 'Auto Play'}</span>
                  </button>

                  <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-extrabold text-xs border border-emerald-200 hidden sm:inline-flex items-center gap-1.5">
                    <CheckCircle2 size={14} />
                    <span>Stage Verified</span>
                  </span>
                </div>
              </div>

              {/* Stage Description */}
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal min-h-[70px]">
                {currentStepData.desc}
              </p>

              {/* Progress Bar */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-bold text-slate-600">
                  <span>Journey Progress</span>
                  <span className="text-blue-600 font-extrabold">{Math.round(((activeStep + 1) / 9) * 100)}% Completed</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-300 rounded-full"
                    style={{ width: `${((activeStep + 1) / 9) * 100}%` }}
                  />
                </div>
              </div>

              {/* Stage Navigation Buttons */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="btn-outline px-6 py-3 text-xs disabled:opacity-30 disabled:pointer-events-none flex items-center gap-2 cursor-pointer"
                >
                  <ChevronLeft size={16} />
                  <span>Previous Step</span>
                </button>

                <div className="text-xs font-bold text-slate-500 hidden sm:block">
                  Stage {activeStep + 1} of 9
                </div>

                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % processSteps.length)}
                  className="btn-primary px-6 py-3 text-xs flex items-center gap-2 cursor-pointer"
                >
                  <span>{activeStep === 8 ? 'Restart Step 1' : 'Next Step'}</span>
                  <ChevronRight size={16} />
                </button>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3x3 Interactive Bento Grid Overview */}
        <div className="space-y-4">
          <div className="text-left text-xs font-extrabold uppercase tracking-wider text-slate-500">
            All 9 Stages Overview (Click to Select)
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {processSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xl scale-102 ring-4 ring-blue-500/20'
                      : 'bg-white border-slate-200 text-slate-800 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center ${
                      isActive ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'
                    }`}>
                      {step.step}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${
                      isActive ? 'text-blue-100' : 'text-slate-400'
                    }`}>
                      Stage {idx + 1}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-extrabold text-sm leading-tight">{step.title}</h4>
                    <p className={`text-xs mt-1 line-clamp-2 ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                      {step.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-[11px] font-bold">
                    <span>{isActive ? 'Active Stage' : 'View Stage'}</span>
                    <ArrowRight size={14} className={isActive ? 'text-white' : 'text-blue-600'} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
