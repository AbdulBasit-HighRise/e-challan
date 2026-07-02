'use client';

import React from 'react';

export default function InfoGrid() {
  const challanRates = [
    { violation: 'Red Light Violation', amount: '500 – 1000' },
    { violation: 'Overspeeding', amount: '750 – 2000' },
    { violation: 'Illegal Parking', amount: '200 – 500' },
    { violation: 'No Helmet / Safety Protocol', amount: '200 – 500' },
    { violation: 'Seatbelt Violation', amount: '500' },
    { violation: 'Mobile Phone Use While Driving', amount: '1000' },
    { violation: 'One-Way Violation / Wrong Track', amount: '500 – 1000' },
    { violation: 'Driving Without Valid License', amount: '1000 – 2000' },
  ];

  return (
    <section id="guide" className="w-full pb-20 px-4 max-w-6xl mx-auto space-y-12">
      
      {/* High Impression Banner placeholder */}
      <div className="w-full h-24 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 text-xs font-bold tracking-widest uppercase">
        [ Advertisement Space — Responsive Unit Layout ]
      </div>

      {/* Section 1: What is E-Challan Block */}
      <div className="space-y-4">
        <div className="bg-[#1e40af] text-white text-sm font-black uppercase py-2.5 px-4 rounded-lg inline-block">
          What is E-Challan
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm text-slate-600 leading-relaxed">
            An <strong className="text-slate-900">E-Challan</strong> is an electronic record of traffic violations issued automatically by traffic monitoring systems or police software. It replaces the old paper-based challan system and ensures accurate recording of violations in a centralized online database infrastructure across Pakistan.
          </p>
        </div>
      </div>

      {/* Section 2: Estimated Fine Rates Table Grid */}
      <div className="space-y-4">
        <div className="bg-[#1e40af] text-white text-sm font-black uppercase py-2.5 px-4 rounded-lg inline-block">
          Estimated Traffic Challan Rates (Updated)
        </div>
        
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-black text-slate-700 uppercase tracking-wider">
                <th className="p-4">Traffic Violation Type</th>
                <th className="p-4 text-right">Fine Amount (PKR)</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-600 divide-y divide-slate-100">
              {challanRates.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-medium text-slate-800">{item.violation}</td>
                  <td className="p-4 text-right font-bold text-blue-600">{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 3: Strategic Step Guides (Accordions) */}
      <div className="space-y-4">
        <div className="bg-[#1e40af] text-white text-sm font-black uppercase py-2.5 px-4 rounded-lg inline-block">
          Step-by-Step Verification Guide
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
            <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-blue-100 text-blue-700 flex items-center justify-center text-xs">1</span> 
              Punjab Verification
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Visit echallan.psca.gop.pk, enter your exact vehicle tracking code plate or chassis parameters, pass the captcha block, and hit query submission.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
            <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-blue-100 text-blue-700 flex items-center justify-center text-xs">2</span> 
              Sindh / Karachi System
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Utilize the Sindh automated digital check gateway nodes. Input your identity CNIC matrix or registration markers to view pending dues instantly.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
            <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-blue-100 text-blue-700 flex items-center justify-center text-xs">3</span> 
              Islamabad Capital Node
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Open the ITP (Islamabad Traffic Police) official system module or mobile setup. Insert validation records to fetch complete historical data logs.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}