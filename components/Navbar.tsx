'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 shadow-md">
      {/* Top Thin Accent Border Line */}
      <div className="w-full h-[5px] bg-[#a07828] bg-gradient-to-r from-[#b89444] via-[#a07828] to-[#886018]" />

      {/* Main Core Navigation Board */}
      <nav className="w-full bg-[#1b4b8f] relative overflow-hidden px-4 md:px-8 py-3.5 border-b border-blue-900/40">
        
        {/* Background Polygons Layer */}
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-overlay">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_25%,transparent_25%),linear-gradient(225deg,rgba(255,255,255,0.4)_25%,transparent_25%)] bg-[size:60px_60px]" />
        </div>

        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
          
          {/* Brand Logo & Title Frame */}
          <Link href="/" className="flex items-center gap-3 select-none cursor-pointer">
            <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center transition-transform duration-500 hover:scale-105">
              <img 
                src="/psca-logo.png" 
                alt="PSCA Emblem Logo" 
                className="w-full h-full object-contain filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
                loading="eager"
              />
            </div>
            <div className="flex flex-col text-white pl-1">
              <h1 className="font-sans font-bold text-lg md:text-2xl tracking-wide leading-none">
                PSCA E-Challan
              </h1>
              <span className="text-[9px] md:text-[10px] font-medium text-blue-100/80 tracking-widest uppercase mt-1">
                Punjab Safe Cities Authority
              </span>
            </div>
          </Link>

          {/* Desktop Links Grid */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold tracking-wider text-white/90">
            <Link 
              href="/" 
              className="flex items-center gap-1.5 text-white bg-white/10 px-3 py-1.5 rounded border border-white/10 shadow-inner"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444] animate-pulse" />
              Check E-Challan
            </Link>

            <Link href="/pay-e-challan" className="hover:text-blue-200 transition-colors py-2 border-b-2 border-transparent hover:border-white/40">
              Pay E-Challan
            </Link>

            {/* Direct Route Fixed Connection without rigid drop break blocks */}
            <Link href="/city-wise-info" className="hover:text-blue-200 transition-colors py-2 border-b-2 border-transparent hover:border-white/40">
              E-challan city wise info
            </Link>

            <Link href="/e-license" className="hover:text-blue-200 transition-colors py-2 border-b-2 border-transparent hover:border-white/40">
              E-License
            </Link>

            <Link href="/schemes" className="hover:text-blue-200 transition-colors py-2 border-b-2 border-transparent hover:border-white/40">
              Schemes
            </Link>

            <Link href="/guideline" className="hover:text-blue-200 transition-colors py-2 border-b-2 border-transparent hover:border-white/40">
              Guideline
            </Link>
          </div>

          {/* Sign In Button Link */}
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

          {/* Mobile Hamburger Menu Trigger */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1.5 text-white/90 focus:outline-none rounded hover:bg-white/5 z-50"
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

        {/* Mobile Dropdown Menu Drawer */}
        <div className={`
          absolute top-full left-0 w-full bg-[#1b4b8f] border-b border-blue-900/60 shadow-xl lg:hidden transition-all duration-300 ease-in-out z-40
          ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible pointer-events-none'}
        `}>
          <div className="flex flex-col space-y-1 p-4 text-xs font-medium text-white/90">
            <Link onClick={() => setIsOpen(false)} href="/" className="flex items-center gap-2 bg-black/10 py-2.5 px-3 rounded text-white font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
              Check E-Challan
            </Link>
            <Link onClick={() => setIsOpen(false)} href="/pay-e-challan" className="hover:bg-white/5 py-2.5 px-3 rounded block">Pay E-Challan</Link>
            <Link onClick={() => setIsOpen(false)} href="/city-wise-info" className="hover:bg-white/5 py-2.5 px-3 rounded block">E-challan city wise info</Link>
            <Link onClick={() => setIsOpen(false)} href="/e-license" className="hover:bg-white/5 py-2.5 px-3 rounded block">E-License</Link>
            <Link onClick={() => setIsOpen(false)} href="/schemes" className="hover:bg-white/5 py-2.5 px-3 rounded block">Schemes</Link>
            <Link onClick={() => setIsOpen(false)} href="/guideline" className="hover:bg-white/5 py-2.5 px-3 rounded block">Guideline</Link>
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