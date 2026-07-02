'use client';

import React, { useState } from 'react';

export default function Hero() {
  const [plateNumber, setPlateNumber] = useState('');
  const [cnic, setCnic] = useState('');
  const [error, setError] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!plateNumber) {
      setError('Vehicle Number laazmi darj karein.');
      return;
    }
    setError('');
    navigator.clipboard.writeText(plateNumber.toUpperCase());
    window.open('https://echallan.psca.gop.pk/', '_blank');
  };

  return (
    <section className="w-full bg-[#f8fafc] pt-36 pb-12 px-4 font-sans text-slate-800">
      <div className="max-w-[2200px] mx-auto space-y-8">
        
        {/* Main Search Box Panel (Original Clean Style) */}
        <div className="w-full bg-white border border-slate-200 rounded shadow-sm p-6 md:p-8">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-normal text-slate-700 tracking-wide">
              Search E-Challan
            </h2>
            <div className="w-16 h-0.5 bg-slate-300 mx-auto mt-2" />
          </div>

          <form onSubmit={handleSearch} className="max-w-5xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
              
              {/* Plate Number Field */}
              <div className="md:col-span-5 space-y-1">
                <label className="text-xs font-semibold text-slate-600">
                  Plate Number <span className="text-red-500">*</span> 
                  <span className="text-[10px] text-slate-400 font-normal ml-1">(ABC 000, ABC 0000, ABC-00-0000)</span>
                </label>
                <input
                  type="text"
                  value={plateNumber}
                  onChange={(e) => setPlateNumber(e.target.value)}
                  placeholder="Enter Your Plate Number"
                  className="w-full bg-white text-slate-800 placeholder-slate-400 text-sm px-3 py-2.5 border border-slate-300 rounded focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                />
              </div>

              {/* CNIC Field */}
              <div className="md:col-span-5 space-y-1">
                <label className="text-xs font-semibold text-slate-600">
                  CNIC <span className="text-red-500">*</span> 
                  <span className="text-[10px] text-slate-400 font-normal ml-1">(13 digits e.g., 1234567890123)</span> or Chassis Number
                </label>
                <input
                  type="text"
                  value={cnic}
                  onChange={(e) => setCnic(e.target.value)}
                  placeholder="Enter Your CNIC or Chassis Number"
                  className="w-full bg-white text-slate-800 placeholder-slate-400 text-sm px-3 py-2.5 border border-slate-300 rounded focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                />
              </div>

              {/* Action Button */}
              <div className="md:col-span-2 pt-5">
                <button
                  type="submit"
                  className="w-full bg-[#28a745] hover:bg-[#218838] text-white font-medium rounded text-sm py-2.5 transition-colors shadow-sm"
                >
                  Search
                </button>
              </div>

            </div>

            {error && <p className="text-red-500 text-xs font-bold pl-1">{error}</p>}

            {/* Dummy Captcha Box Box */}
            <div className="border border-slate-200 bg-[#f9f9f9] p-3 rounded shadow-sm inline-flex items-center gap-4 select-none">
              <div className="w-6 h-6 border-2 border-slate-300 bg-white rounded cursor-pointer hover:border-slate-400 transition-colors" />
              <span className="text-xs font-medium text-slate-600">I'm not a robot</span>
              <div className="flex flex-col items-center justify-center pl-6 border-l border-slate-200 ml-4">
                <div className="w-5 h-5 bg-blue-500 rounded-full opacity-10 animate-pulse" />
                <span className="text-[9px] text-slate-400 tracking-tighter mt-0.5">reCAPTCHA</span>
              </div>
            </div>
          </form>
        </div>

        {/* 1:1 Original Replica Image Banner Container */}
        <div className="w-full bg-white border border-slate-200 rounded shadow-sm overflow-hidden p-2">
          {/* Aap apnay public folder (`public/images/`) mein asli e-challan ki 
              banner image save kar ke yahan source path adjust kar lein.
          */}
          <img 
            src="/final.png" 
            alt="PSCA E-Challan Official Guidelines and Information System" 
            className="w-full h-auto object-cover rounded border border-slate-100"
            loading="eager"
          />
        </div>

      </div>
    </section>
  );
}