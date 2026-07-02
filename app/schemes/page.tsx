'use client';

import React from 'react';

export default function SchemesPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-28 pb-12 px-4 md:px-8 font-sans text-slate-700">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-[#1b4b8f] text-white p-6 rounded shadow-sm">
          <h1 className="text-xl font-bold uppercase tracking-wider">Government Regulatory Subsidy Schemes</h1>
          <p className="text-xs text-blue-200 mt-1">Current initiatives and fine structure relaxations across public safety networks.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border p-5 rounded shadow-sm border-t-4 border-t-[#a07828]">
            <h4 className="font-bold text-sm text-[#1b4b8f] mb-1">Token Relief Framework</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Audits clean drivers with no outstanding fine logs over extended durations, offering processing relaxations inside corresponding regional token fee settlements.
            </p>
          </div>
          <div className="bg-white border p-5 rounded shadow-sm border-t-4 border-t-[#1b4b8f]">
            <h4 className="font-bold text-sm text-[#1b4b8f] mb-1">E-Stamp Paper Automation</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Integration of 32-A electronic layout formats for direct judicial fine management processing streams directly over central automation protocols.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}