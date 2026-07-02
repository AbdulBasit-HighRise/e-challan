'use client';

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1b4b8f] relative overflow-hidden font-sans text-white/80 mt-16 border-t border-blue-900/40">
      
      {/* 1:1 Matching Gold Accent Line at the very top */}
      <div className="w-full h-[4px] bg-gradient-to-r from-[#b89444] via-[#a07828] to-[#886018]" />
      
      {/* Absolute Background Polygons Layer to match the navbar texture */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_25%,transparent_25%),linear-gradient(225deg,rgba(255,255,255,0.4)_25%,transparent_25%)] bg-[size:50px_50px]" />
        <div className="absolute bottom-0 left-1/4 w-0 h-0 border-l-[120px] border-l-transparent border-b-[80px] border-b-white border-r-[120px] border-r-transparent opacity-30" />
      </div>

      {/* Main Footer Container */}
      <div className="max-w-[2500px] mx-auto px-4 py-6 flex flex-col items-center justify-center gap-4 text-center relative z-10">
        
        {/* Compact Logo & Title Block - Exactly like Navbar alignment */}
        <div className="flex items-center gap-2 select-none">
          <div className="w-8 h-8 flex items-center justify-center">
            <img 
              src="/psca-logo.png" 
              alt="PSCA Seal Footer" 
              className="w-full h-full object-contain filter drop-shadow-sm"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-sm tracking-wide text-white leading-none">PSCA E-Challan</span>
            <span className="text-[7px] font-medium text-blue-200/60 tracking-wider uppercase mt-0.5">Punjab Safe Cities Authority</span>
          </div>
        </div>

        {/* Sleek Inline AdSense & Policy Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[10px] font-bold uppercase tracking-widest text-blue-100/70">
          <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
          <span className="opacity-40">•</span>
          <a href="#terms" className="hover:text-white transition-colors">Terms</a>
          <span className="opacity-40">•</span>
          <a href="#disclaimer" className="hover:text-white transition-colors">Disclaimer</a>
          <span className="opacity-40">•</span>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* 1:1 Original Replica Copyright String */}
        <div className="text-[11px] font-medium text-white tracking-wide mt-1 select-none">
          &copy; {currentYear} - E-Challan System By PSCA Hub
        </div>

        {/* Micro Policy Disclaimer */}
        <p className="text-[9px] text-blue-200/40 max-w-2xl leading-none font-normal">
          This is an independent informational utility portal and is not governmentally affiliated with official authorities.
        </p>

      </div>
    </footer>
  );
}