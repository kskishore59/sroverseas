import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Sparkles, Building2, Globe } from 'lucide-react';
import CustomSelect from './CustomSelect';

export default function CostCalculatorWidget() {
  const [country, setCountry] = useState('germany');
  const [degree, setDegree] = useState('master');
  const [duration, setDuration] = useState(2);

  const countryOptions = [
    { value: 'germany', label: 'Germany (€0 Public Tuition)', icon: '🇩🇪' },
    { value: 'canada', label: 'Canada ($11,500 CAD/Yr)', icon: '🇨🇦' },
    { value: 'uk', label: 'United Kingdom (£12,000/Yr)', icon: '🇬🇧' },
    { value: 'usa', label: 'United States ($14,000 USD/Yr)', icon: '🇺🇸' },
    { value: 'australia', label: 'Australia ($15,000 AUD/Yr)', icon: '🇦🇺' },
    { value: 'georgia', label: 'Georgia MBBS ($5,000 USD/Yr)', icon: '🇬🇪' }
  ];

  const degreeOptions = [
    { value: 'master', label: "Master's Degree (1-2 Years)" },
    { value: 'bachelor', label: "Bachelor's Degree (3-4 Years)" },
    { value: 'diploma', label: "PG Diploma (1 Year)" }
  ];

  const calculateCost = () => {
    let yearlyTuition = 12000;
    let yearlyLiving = 10000;
    let inrRate = 90;

    if (country === 'germany') {
      yearlyTuition = 0; // Public €0
      yearlyLiving = 11208; // Blocked Account
      inrRate = 90;
    } else if (country === 'canada') {
      yearlyTuition = 16000;
      yearlyLiving = 20635;
      inrRate = 62;
    } else if (country === 'uk') {
      yearlyTuition = 14000;
      yearlyLiving = 12000;
      inrRate = 106;
    } else if (country === 'usa') {
      yearlyTuition = 22000;
      yearlyLiving = 14000;
      inrRate = 84;
    } else if (country === 'australia') {
      yearlyTuition = 24000;
      yearlyLiving = 18000;
      inrRate = 56;
    } else if (country === 'georgia') {
      yearlyTuition = 5000;
      yearlyLiving = 4000;
      inrRate = 84;
    }

    const totalTuition = yearlyTuition * duration;
    const totalLiving = yearlyLiving * duration;
    const grandTotalForeign = totalTuition + totalLiving;
    const grandTotalINR = Math.round(grandTotalForeign * inrRate);

    return {
      yearlyTuition,
      yearlyLiving,
      totalTuition,
      totalLiving,
      grandTotalForeign,
      grandTotalINR: (grandTotalINR / 100000).toFixed(2) // Lakhs
    };
  };

  const costData = calculateCost();

  return (
    <section id="budget-calculator" className="py-24 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-12"
        >
          <span className="badge-tag">
            <Calculator size={14} className="text-blue-600" />
            <span>Low-Budget Estimator</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-display text-slate-900">
            Study Abroad Cost & Budget Estimator
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-normal max-w-2xl mx-auto">
            Calculate your total foreign currency tuition + living expenses converted directly to INR Lakhs.
          </p>
        </motion.div>

        {/* Card Calculator */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CustomSelect 
              label="1. Target Destination"
              options={countryOptions}
              value={country}
              onChange={setCountry}
            />

            <CustomSelect 
              label="2. Degree Level"
              options={degreeOptions}
              value={degree}
              onChange={setDegree}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-800">
              <span>Program Duration</span>
              <span className="text-blue-600 font-extrabold">{duration} Year(s)</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="4" 
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>1 Year (Fast-Track)</span>
              <span>2 Years (Standard Master's)</span>
              <span>4 Years (Bachelor's)</span>
            </div>
          </div>

          {/* Breakdown Matrix */}
          <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-6">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <div>
                <span className="text-[10px] uppercase font-extrabold text-blue-400 tracking-wider">Estimated Total Budget</span>
                <div className="text-3xl sm:text-4xl font-black font-display text-emerald-400 mt-1">
                  ₹{costData.grandTotalINR} Lakhs <span className="text-xs font-bold text-slate-400">Total Approx</span>
                </div>
              </div>
              <a href="#loan-calculator" className="btn-primary text-xs py-2.5 px-4 shadow-md">
                Get Loan Assistance
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700">
                <div className="text-slate-400 text-[10px] uppercase font-bold">Total Tuition ({duration} Yrs)</div>
                <div className="text-base font-extrabold text-white mt-1">
                  {country === 'germany' ? '€0 Tuition Fee Waiver' : `$${costData.totalTuition.toLocaleString()}`}
                </div>
              </div>

              <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700">
                <div className="text-slate-400 text-[10px] uppercase font-bold">Living & GIC/Blocked ({duration} Yrs)</div>
                <div className="text-base font-extrabold text-white mt-1">
                  ${costData.totalLiving.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
