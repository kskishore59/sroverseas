import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';

export default function CustomSelect({ options, value, onChange, placeholder = 'Select option...', label }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedOption = options.find((opt) => opt.value === value) || options[0];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="space-y-1.5 text-left relative" ref={dropdownRef}>
      {label && <label className="block text-xs font-bold text-slate-800">{label}</label>}
      
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white border rounded-2xl px-4 py-3 text-xs font-semibold text-slate-900 flex items-center justify-between transition-all duration-200 shadow-sm cursor-pointer ${
          isOpen ? 'border-blue-600 ring-2 ring-blue-500/20 shadow-md' : 'border-slate-200 hover:border-slate-300'
        }`}
      >
        <span className="flex items-center gap-2 truncate font-medium">
          {selectedOption?.icon && <span>{selectedOption.icon}</span>}
          <span>{selectedOption?.label || placeholder}</span>
        </span>
        <ChevronDown size={15} className={`text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
      </button>

      {/* Floating Modern Popover Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute top-full left-0 right-0 mt-1.5 z-50 bg-white/95 backdrop-blur-xl p-2 rounded-2xl border border-slate-200 shadow-2xl max-h-60 overflow-y-auto space-y-1 text-xs"
          >
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`w-full p-2.5 rounded-xl text-left transition-colors flex items-center justify-between cursor-pointer ${
                    isSelected 
                      ? 'bg-blue-50 text-blue-700 font-extrabold' 
                      : 'hover:bg-slate-100 text-slate-700 font-medium'
                  }`}
                >
                  <span className="flex items-center gap-2 truncate">
                    {opt.icon && <span>{opt.icon}</span>}
                    <span>{opt.label}</span>
                  </span>
                  {isSelected && <Check size={14} className="text-blue-600 flex-shrink-0" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
