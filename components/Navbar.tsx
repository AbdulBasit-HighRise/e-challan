'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 shadow-md">
      {/* Top Thin Accent Border Line directly matching the high-contrast node header layout */}
      <div className="w-full h-[5px] bg-[#a07828] bg-gradient-to-r from-[#b89444] via-[#a07828] to-[#886018]" />

      {/* Main Core Navigation Board with Simulated Geometric Low-Poly Polygon Texture */}
      <nav className="w-full bg-[#1b4b8f] relative overflow-hidden px-4 md:px-8 py-3.5 border-b border-blue-900/40">
        
        {/* Absolute Background Polygons Layer to visually build the geometric texture from the screenshot */}
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-overlay">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_25%,transparent_25%),linear-gradient(225deg,rgba(255,255,255,0.4)_25%,transparent_25%),linear-gradient(45deg,rgba(255,255,255,0.4)_25%,transparent_25%),linear-gradient(315deg,rgba(255,255,255,0.4)_25%,transparent_25%)] bg-[size:60px_60px]" />
          <div className="absolute top-0 left-1/4 w-0 h-0 border-l-[120px] border-l-transparent border-t-[90px] border-t-white border-r-[120px] border-r-transparent opacity-40" />
          <div className="absolute bottom-0 right-1/3 w-0 h-0 border-l-[200px] border-l-transparent border-b-[150px] border-b-white border-r-[50px] border-r-transparent opacity-30" />
          <div className="absolute top-1/4 right-10 w-0 h-0 border-l-[90px] border-l-transparent border-t-[110px] border-t-white border-r-[90px] border-r-transparent opacity-20" />
        </div>

        {/* Subtle radial inner glow matching the official server depth ambient lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,80,160,0.3)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
          
          {/* Brand Logo & Title Frame perfectly matching original left structure alignment */}
          <div className="flex items-center gap-3 select-none">
            
            {/* Real Logo Container - Image directly loaded from public folder */}
            <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center transition-transform duration-500 hover:scale-105">
              <img 
                src="/psca-logo.png" 
                alt="PSCA Emblem Logo" 
                className="w-full h-full object-contain filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
                loading="eager"
              />
            </div>
            
            <div className="flex flex-col text-white pl-1">
              <h1 className="font-sans font-bold text-lg md:text-2xl tracking-wide leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                PSCA E-Challan
              </h1>
              <span className="text-[9px] md:text-[10px] font-medium text-blue-100/80 tracking-widest uppercase mt-1">
                Punjab Safe Cities Authority
              </span>
            </div>
          </div>

          {/* Core Custom Links Array Layer (Clean, sleek flat design overlayed seamlessly) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold tracking-wider text-white/90">
            <a 
              href="#checker" 
              className="flex items-center gap-1.5 text-white bg-white/10 px-3 py-1.5 rounded border border-white/10 shadow-inner transition-all hover:bg-white/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444] animate-pulse" />
              Check E-Challan
            </a>

            <a href="#guide" className="hover:text-blue-200 transition-colors py-2 border-b-2 border-transparent hover:border-white/40">
              Pay E-Challan
            </a>

            <div className="relative group cursor-pointer py-2">
              <span className="hover:text-blue-200 transition-colors flex items-center gap-1">
                E-challan city wise info 
                <span className="text-[8px] opacity-60">▼</span>
              </span>
              {/* Dropdown Menu Node block */}
              <div className="absolute top-full left-0 mt-1 w-48 bg-[#1b4b8f] border border-blue-900 rounded shadow-xl py-2 hidden group-hover:block text-[11px]">
                <a href="#lahore" className="block px-4 py-2 text-white/90 hover:bg-white/10 hover:text-white">Lahore Portal</a>
                <a href="#rawalpindi" className="block px-4 py-2 text-white/90 hover:bg-white/10 hover:text-white">Rawalpindi Node</a>
                <a href="#faisalabad" className="block px-4 py-2 text-white/90 hover:bg-white/10 hover:text-white">Faisalabad Hub</a>
              </div>
            </div>

            <a href="#license" className="hover:text-blue-200 transition-colors py-2 border-b-2 border-transparent hover:border-white/40">
              E-License
            </a>

            <div className="relative group cursor-pointer py-2">
              <span className="hover:text-blue-200 transition-colors flex items-center gap-1">
                Schemes 
                <span className="text-[8px] opacity-60">▼</span>
              </span>
              <div className="absolute top-full left-0 mt-1 w-40 bg-[#1b4b8f] border border-blue-900 rounded shadow-xl py-2 hidden group-hover:block text-[11px]">
                <a href="#token" className="block px-4 py-2 text-white/90 hover:bg-white/10 hover:text-white">Token Relief</a>
                <a href="#subsidy" className="block px-4 py-2 text-white/90 hover:bg-white/10 hover:text-white">Subsidy Audit</a>
              </div>
            </div>

            <a href="#guideline" className="hover:text-blue-200 transition-colors py-2 border-b-2 border-transparent hover:border-white/40">
              Guideline
            </a>
          </div>

          {/* Asli Sign In Link styling right side alignment node */}
          <div className="hidden lg:block">
            <a 
              href="https://echallan.psca.gop.pk/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-normal text-white/90 hover:text-white transition-colors duration-200 hover:underline px-2 py-1 tracking-wide"
            >
              Sign in
            </a>
          </div>

          {/* Mobile Hamburger Menu Toggle Trigger */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1.5 text-white/90 hover:text-white focus:outline-none rounded hover:bg-white/5 transition-colors z-50"
            aria-label="Menu Toggle"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>

        {/* Mobile Dropdown Panel Drawer */}
        <div className={`
          absolute top-full left-0 w-full bg-[#1b4b8f] border-b border-blue-900/60 shadow-xl lg:hidden transition-all duration-300 ease-in-out z-40
          ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible pointer-events-none'}
        `}>
          <div className="flex flex-col space-y-1 p-4 text-xs font-medium text-white/90">
            <a onClick={() => setIsOpen(false)} href="#checker" className="flex items-center gap-2 bg-black/10 py-2.5 px-3 rounded text-white font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
              Check E-Challan
            </a>
            <a onClick={() => setIsOpen(false)} href="#guide" className="hover:bg-white/5 py-2.5 px-3 rounded block">Pay E-Challan</a>
            <a onClick={() => setIsOpen(false)} href="#cities" className="hover:bg-white/5 py-2.5 px-3 rounded block">E-challan city wise info</a>
            <a onClick={() => setIsOpen(false)} href="#license" className="hover:bg-white/5 py-2.5 px-3 rounded block">E-License</a>
            <a onClick={() => setIsOpen(false)} href="#schemes" className="hover:bg-white/5 py-2.5 px-3 rounded block">Schemes</a>
            <a onClick={() => setIsOpen(false)} href="#guideline" className="hover:bg-white/5 py-2.5 px-3 rounded block">Guideline</a>
            <div className="pt-2 border-t border-white/10 mt-1">
              <a href="https://echallan.psca.gop.pk/" target="_blank" rel="noopener noreferrer" className="text-center py-2 bg-white/10 hover:bg-white/15 rounded text-white block font-bold transition-all">
                Sign in
              </a>
            </div>
          </div>
        </div>

      </nav>
    </header>
  );
}