import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GuidedHighlights from './components/GuidedHighlights';
import DestinationsGrid from './components/DestinationsGrid';
import CostCalculatorWidget from './components/CostCalculatorWidget';
import EligibilityWizard from './components/EligibilityWizard';
import LoanEMICalculator from './components/LoanEMICalculator';
import LeadershipSection from './components/LeadershipSection';
import ServicesGrid from './components/ServicesGrid';
import ProcessRoadmap from './components/ProcessRoadmap';
import UniversitiesSection from './components/UniversitiesSection';
import FAQSection from './components/FAQSection';
import ContactForm from './components/ContactForm';
import AIAdvisorChat from './components/AIAdvisorChat';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('light'); // Default Light Mode

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      
      {/* Header Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <Hero />

      {/* Ticker Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 py-3 overflow-hidden text-xs font-extrabold uppercase tracking-widest text-white shadow-md">
        <div className="animate-marquee flex gap-12 whitespace-nowrap">
          <span>★ STUDY IN GERMANY FROM €0/YR</span>
          <span>★ MASTER IN FRANCE FROM €1,800/YR</span>
          <span>★ LOW BUDGET GLOBAL PATHWAYS</span>
          <span>★ VISA SUCCESS 98%</span>
          <span>★ SCHOLARSHIPS UP TO 50%</span>
          <span>★ INTERACTIVE BUDGET COUNTER</span>
          {/* Duplicate for seamless infinite loop */}
          <span>★ STUDY IN GERMANY FROM €0/YR</span>
          <span>★ MASTER IN FRANCE FROM €1,800/YR</span>
          <span>★ LOW BUDGET GLOBAL PATHWAYS</span>
          <span>★ VISA SUCCESS 98%</span>
          <span>★ SCHOLARSHIPS UP TO 50%</span>
          <span>★ INTERACTIVE BUDGET COUNTER</span>
        </div>
      </div>

      {/* Key Highlights */}
      <GuidedHighlights />

      {/* AI Admit & Scholarship Assessor */}
      <EligibilityWizard />

      {/* Destinations & Specs */}
      <DestinationsGrid />

      {/* Interactive Financial & Comparison Tools */}
      <CostCalculatorWidget />

      {/* Education Loan EMI Estimator */}
      <LoanEMICalculator />

      {/* Leadership & Founder Story */}
      <LeadershipSection />

      {/* Student Services */}
      <ServicesGrid />

      {/* 9-Step Process Roadmap */}
      <ProcessRoadmap />

      {/* Affiliated Universities Search & Filters */}
      <UniversitiesSection />

      {/* FAQ Accordion */}
      <FAQSection />

      {/* Contact & Consultation Form */}
      <ContactForm />

      {/* Floating AI Digital Assistant & WhatsApp Launcher */}
      <AIAdvisorChat />

      {/* Footer */}
      <Footer />

    </div>
  );
}
