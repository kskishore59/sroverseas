import React, { useState } from 'react';
import { Landmark, DollarSign, Calculator, ArrowRight, ShieldCheck } from 'lucide-react';

export default function LoanEMICalculator() {
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [tenureYears, setTenureYears] = useState(7);
  const [interestRate, setInterestRate] = useState(9.5);

  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const totalRepayable = emi * totalMonths;
  const totalInterest = totalRepayable - loanAmount;

  return (
    <section id="loan-calculator" className="py-24 relative bg-slate-50">
      <div className="container mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="badge-tag">Financial Assistance</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-slate-900">
            Education Loan & Monthly EMI Estimator
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Calculate your monthly repayment and explore collateral-free loan options up to ₹75 Lakhs with our partner banks.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Sliders Card */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-lg space-y-6 text-xs">

            {/* Slider 1: Loan Amount */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-slate-800">Desired Loan Amount</span>
                <span className="font-extrabold text-emerald-600 text-base">₹ {(loanAmount / 100000).toFixed(1)} Lakhs</span>
              </div>
              <input
                type="range"
                min={500000}
                max={7500000}
                step={50000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-semibold">
                <span>₹ 5 Lakhs</span>
                <span>₹ 35 Lakhs</span>
                <span>₹ 75 Lakhs (Max)</span>
              </div>
            </div>

            {/* Slider 2: Tenure */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-slate-800">Repayment Tenure</span>
                <span className="font-extrabold text-blue-600 text-base">{tenureYears} Years</span>
              </div>
              <input
                type="range"
                min={1}
                max={12}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-semibold">
                <span>1 Year</span>
                <span>7 Years</span>
                <span>12 Years</span>
              </div>
            </div>

            {/* Slider 3: Interest Rate */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-slate-800">Estimated Interest Rate (p.a.)</span>
                <span className="font-extrabold text-amber-600 text-base">{interestRate}%</span>
              </div>
              <input
                type="range"
                min={7.5}
                max={14.0}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-semibold">
                <span>7.5% (Public Bank)</span>
                <span>9.5% (Private Bank)</span>
                <span>14% (NBFC)</span>
              </div>
            </div>

          </div>

          {/* Right Summary Dashboard */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-100 font-bold">
                <Landmark size={28} />
              </div>

              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Estimated Monthly EMI</div>
                <div className="text-4xl font-extrabold text-emerald-600 font-display">
                  ₹ {emi.toLocaleString('en-IN')} <span className="text-xs text-slate-500 font-normal">/ mo</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-left pt-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-slate-500">Loan Principal</div>
                  <div className="font-extrabold text-slate-800 text-sm">₹ {(loanAmount / 100000).toFixed(2)} Lakhs</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-slate-500">Total Interest</div>
                  <div className="font-extrabold text-amber-700 text-sm">₹ {(totalInterest / 100000).toFixed(2)} Lakhs</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="btn-primary w-full py-4 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20"
                >
                  <span>Apply for Collateral-Free Loan</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>Partnered with HDFC, SBI, ICICI & Avanse</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
