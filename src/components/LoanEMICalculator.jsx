import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Landmark, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function LoanEMICalculator() {
  const [loanAmount, setLoanAmount] = useState(2500000); // 25 Lakhs default
  const [interestRate, setInterestRate] = useState(8.5); // 8.5% default
  const [tenureYears, setTenureYears] = useState(10); // 10 Years

  const calculateEMI = () => {
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = tenureYears * 12;
    
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    const totalPayable = emi * totalMonths;
    const totalInterest = totalPayable - loanAmount;

    return {
      emi: Math.round(emi),
      totalPayable: Math.round(totalPayable),
      totalInterest: Math.round(totalInterest)
    };
  };

  const emiData = calculateEMI();

  return (
    <section id="loan-calculator" className="py-24 relative bg-white border-t border-slate-200">
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
            <Landmark size={14} className="text-emerald-600" />
            <span>Bank Loan Estimator</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-display text-slate-900">
            Education Loan EMI & Sanction Estimator
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-normal max-w-2xl mx-auto">
            Estimate your monthly EMI for collateral-free education loans up to ₹75 Lakhs with SBI, HDFC Credila & ICICI.
          </p>
        </motion.div>

        {/* Loan Calculator Card */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-emerald-500/20 shadow-xl space-y-8">
          
          <div className="space-y-6">
            
            {/* Loan Amount Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-800">
                <span>Education Loan Amount</span>
                <span className="text-emerald-600 font-extrabold text-sm">₹{(loanAmount / 100000).toFixed(2)} Lakhs</span>
              </div>
              <input 
                type="range" 
                min="500000" 
                max="7500000" 
                step="100000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>₹5 Lakhs</span>
                <span>₹25 Lakhs (Average)</span>
                <span>₹75 Lakhs (Max)</span>
              </div>
            </div>

            {/* Interest Rate & Tenure Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-800">
                  <span>Interest Rate (% P.A.)</span>
                  <span className="text-emerald-600 font-extrabold">{interestRate}%</span>
                </div>
                <input 
                  type="range" 
                  min="7.5" 
                  max="12.5" 
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-800">
                  <span>Repayment Tenure</span>
                  <span className="text-emerald-600 font-extrabold">{tenureYears} Years</span>
                </div>
                <input 
                  type="range" 
                  min="3" 
                  max="15" 
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>
            </div>

          </div>

          {/* Results Summary Box */}
          <div className="p-6 bg-emerald-950 text-white rounded-2xl border border-emerald-800 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-emerald-800 pb-4">
              <div>
                <span className="text-[10px] uppercase font-extrabold text-emerald-400 tracking-wider">Estimated Monthly EMI</span>
                <div className="text-3xl sm:text-4xl font-black font-display text-emerald-300 mt-1">
                  ₹{emiData.emi.toLocaleString()} <span className="text-xs font-bold text-slate-400">/ Month</span>
                </div>
              </div>
              <a href="#contact" className="btn-primary text-xs py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 shadow-md">
                <span>Apply for Sanction</span>
                <ArrowRight size={14} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 bg-emerald-900/60 rounded-xl border border-emerald-800">
                <div className="text-slate-400 text-[10px] uppercase font-bold">Total Interest Payable</div>
                <div className="text-base font-extrabold text-white mt-1">
                  ₹{(emiData.totalInterest / 100000).toFixed(2)} Lakhs
                </div>
              </div>

              <div className="p-3.5 bg-emerald-900/60 rounded-xl border border-emerald-800">
                <div className="text-slate-400 text-[10px] uppercase font-bold">Total Amount Payable</div>
                <div className="text-base font-extrabold text-white mt-1">
                  ₹{(emiData.totalPayable / 100000).toFixed(2)} Lakhs
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
