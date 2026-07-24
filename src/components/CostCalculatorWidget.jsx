import React, { useState } from 'react';
import { countriesData } from '../data/countriesData';
import { Calculator, ArrowRightLeft, DollarSign, Clock, Shield, Sparkles } from 'lucide-react';
import CustomSelect from './CustomSelect';

export default function CostCalculatorWidget() {
  const [calcCountry, setCalcCountry] = useState('germany');
  const [calcDuration, setCalcDuration] = useState(2);
  const [calcResult, setCalcResult] = useState(null);

  const [compA, setCompA] = useState('germany');
  const [compB, setCompB] = useState('canada');
  const [compResult, setCompResult] = useState(null);

  const countrySelectOptions = countriesData.map((c) => ({
    value: c.id,
    label: `${c.name} (${c.tuitionCost})`,
    icon: c.flag
  }));

  const durationOptions = [
    { value: 1, label: '1 Year (Fast-Track Master\'s)' },
    { value: 2, label: '2 Years (Standard Master\'s / PG Diploma)' },
    { value: 3, label: '3 Years (Bachelor\'s Degree)' },
    { value: 4, label: '4 Years (Honours Bachelor\'s)' }
  ];

  const calculateCost = () => {
    const country = countriesData.find((c) => c.id === calcCountry);
    if (!country) return;

    let annualLiving = 0;
    let currencySymbol = country.currency;
    let inrRate = 90;

    switch (country.id) {
      case 'germany': annualLiving = 11208; inrRate = 90; break;
      case 'canada': annualLiving = 20635; inrRate = 62; break;
      case 'usa': annualLiving = 15000; inrRate = 83; break;
      case 'uk': annualLiving = 12000; inrRate = 106; break;
      case 'australia': annualLiving = 24505; inrRate = 55; break;
      case 'france': annualLiving = 9600; inrRate = 90; break;
      case 'ireland': annualLiving = 10000; inrRate = 90; break;
      default: annualLiving = 10000; inrRate = 80;
    }

    const totalTuition = country.tuitionMin * calcDuration;
    const totalLiving = annualLiving * calcDuration;
    const totalLocal = totalTuition + totalLiving;
    const totalINR = (totalLocal * inrRate).toLocaleString('en-IN');

    setCalcResult({
      countryName: country.name,
      flag: country.flag,
      duration: calcDuration,
      tuition: country.tuitionCost,
      annualLiving: `${currencySymbol} ${annualLiving.toLocaleString()}`,
      totalLocal: `${currencySymbol} ${totalLocal.toLocaleString()}`,
      totalINR: `₹ ${totalINR}`,
      workPermit: country.postStudyVisa
    });
  };

  const handleCompare = () => {
    const countryA = countriesData.find((c) => c.id === compA);
    const countryB = countriesData.find((c) => c.id === compB);
    setCompResult({ a: countryA, b: countryB });
  };

  return (
    <section id="budget-calculator" className="py-24 relative bg-white">
      <div className="container mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="badge-tag">
            <Sparkles size={14} className="text-blue-600" />
            <span>Cost Calculator</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-slate-900">
            Budget Calculator & Destination Compare
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Plan your finances starting from the lowest tuition paths. Zero high budget surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Card 1: Interactive Calculator */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Calculator size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-display">Low-Budget Cost Calculator</h3>
                <p className="text-xs text-slate-500">Estimate tuition & living cost breakdown</p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <CustomSelect
                label="Select Target Country"
                options={countrySelectOptions}
                value={calcCountry}
                onChange={setCalcCountry}
              />

              <CustomSelect
                label="Course Duration"
                options={durationOptions}
                value={calcDuration}
                onChange={setCalcDuration}
              />

              <button
                onClick={calculateCost}
                className="btn-primary w-full py-3.5 mt-2"
              >
                <span>Calculate Total Estimated Budget</span>
                <Sparkles size={16} />
              </button>
            </div>

            {/* Calculation Result Container */}
            {calcResult && (
              <div className="p-5 bg-blue-50/60 rounded-2xl border border-blue-100 space-y-3 animate-fade-in">
                <div className="flex justify-between items-center text-sm font-bold text-slate-900 border-b border-blue-100 pb-2">
                  <span>{calcResult.flag} {calcResult.countryName} ({calcResult.duration} Year Path)</span>
                  <span className="text-emerald-600 font-extrabold text-lg">{calcResult.totalINR} Approx</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                  <div>Tuition Range: <strong className="text-slate-900 block">{calcResult.tuition}</strong></div>
                  <div>Living Expenses: <strong className="text-slate-900 block">{calcResult.annualLiving} / Yr</strong></div>
                  <div className="col-span-2 pt-1 text-blue-600 font-bold">Post-Study Work Visa: {calcResult.workPermit}</div>
                </div>
              </div>
            )}
          </div>

          {/* Card 2: Side-by-Side Comparison */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <ArrowRightLeft size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-display">Compare Destinations Side-by-Side</h3>
                <p className="text-xs text-slate-500">Tuition, work rights, and visa rules comparison</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <CustomSelect
                label="Country A"
                options={countrySelectOptions}
                value={compA}
                onChange={setCompA}
              />

              <CustomSelect
                label="Country B"
                options={countrySelectOptions}
                value={compB}
                onChange={setCompB}
              />
            </div>

            <button
              onClick={handleCompare}
              className="btn-outline w-full py-3.5"
            >
              <span>Compare Budget Details</span>
              <ArrowRightLeft size={16} />
            </button>

            {/* Comparison Table Output */}
            {compResult && (
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs">
                <div className="grid grid-cols-3 gap-2 font-bold text-center border-b border-slate-200 pb-2">
                  <span className="text-slate-500 text-left">Metric</span>
                  <span className="text-blue-600">{compResult.a.flag} {compResult.a.name}</span>
                  <span className="text-indigo-600">{compResult.b.flag} {compResult.b.name}</span>
                </div>

                <div className="grid grid-cols-3 gap-2 py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Tuition</span>
                  <span className="text-slate-800 text-center font-bold">{compResult.a.tuitionCost}</span>
                  <span className="text-slate-800 text-center font-bold">{compResult.b.tuitionCost}</span>
                </div>

                <div className="grid grid-cols-3 gap-2 py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Scholarship</span>
                  <span className="text-amber-700 text-center font-bold">{compResult.a.scholarship}</span>
                  <span className="text-amber-700 text-center font-bold">{compResult.b.scholarship}</span>
                </div>

                <div className="grid grid-cols-3 gap-2 py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Work Hours</span>
                  <span className="text-slate-800 text-center">{compResult.a.workHours}</span>
                  <span className="text-slate-800 text-center">{compResult.b.workHours}</span>
                </div>

                <div className="grid grid-cols-3 gap-2 py-1">
                  <span className="text-slate-500">PSW Visa</span>
                  <span className="text-emerald-600 text-center font-bold">{compResult.a.postStudyVisa}</span>
                  <span className="text-emerald-600 text-center font-bold">{compResult.b.postStudyVisa}</span>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
