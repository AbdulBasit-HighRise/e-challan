'use client';

import React from 'react';

export default function GuidelinePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-28 pb-16 px-4 md:px-8 font-sans text-slate-700">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* ================= HERO SECTION ================= */}
        <div className="bg-[#1b4b8f] text-white p-6 md:p-10 rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_25%,transparent_25%)] bg-[size:40px_40px]" />
          <span className="bg-[#a07828] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full relative z-10 tracking-widest">
            User Assistance Portal
          </span>
          <h1 className="text-xl md:text-3xl font-bold tracking-wide mt-3 relative z-10">
            Official PSCA E-Challan Citizen Guidelines
          </h1>
          <p className="text-xs md:text-sm text-blue-100/80 mt-2 max-w-2xl relative z-10 leading-relaxed">
            A comprehensive operational manual to help you navigate Punjab Traffic fine checks, understand automatic camera systems, verify document details, and resolve digital disputes efficiently.
          </p>
        </div>

        {/* ================= QUICK NAVIGATION STEPPERS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex gap-3 items-start">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1b4b8f] font-bold flex items-center justify-center shrink-0 text-sm">1</div>
            <div>
              <h4 className="font-bold text-xs md:text-sm text-slate-800">Query & Verify</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Input your vehicle tracking data onto our online dashboard.</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex gap-3 items-start">
            <div className="w-8 h-8 rounded-full bg-amber-100 text-[#a07828] font-bold flex items-center justify-center shrink-0 text-sm">2</div>
            <div>
              <h4 className="font-bold text-xs md:text-sm text-slate-800">Print Copy</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Download the official 1Link token slip layout for payment processing.</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex gap-3 items-start">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 text-sm">3</div>
            <div>
              <h4 className="font-bold text-xs md:text-sm text-slate-800">Instant Settlement</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Pay via mobile wallet banking channels to auto-clear system flags.</p>
            </div>
          </div>
        </div>

        {/* ================= DOCUMENT LOCATION GUIDE ================= */}
        <section className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1b4b8f]" />
            <h2 className="text-base md:text-xl font-bold text-slate-800">
              Where to Find Your Vehicle Registration & Chassis Numbers
            </h2>
          </div>
          <p className="text-xs md:text-sm leading-relaxed text-slate-600">
            To execute an electronic check, you need two core data elements. Entering incomplete credentials will cause the central server API to return a null structure or format mismatch mismatch warning:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-4 bg-slate-50 border rounded-lg space-y-1">
              <span className="font-bold text-xs text-[#1b4b8f] uppercase tracking-wider block">A. Vehicle Registration Number</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                This is your alphanumeric license plate number. Ensure you enter it exactly as registered with the Excise department, without special characters or extra spaces (e.g., <code>LEC-14-5432</code> or <code>AAA-26-9988</code>).
              </p>
            </div>
            <div className="p-4 bg-slate-50 border rounded-lg space-y-1">
              <span className="font-bold text-xs text-[#a07828] uppercase tracking-wider block">B. 5-Digit Chassis Number</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                For complete data verification security, the PSCA portal demands the <strong>last 5 digits of your vehicle's Chassis Number</strong>. You can locate this printed on your physical vehicle registration smart card, original book, or the manufacturer identity steel plate under the car hood.
              </p>
            </div>
          </div>
        </section>

        {/* ================= UNDERSTANDING STATUS CODES ================= */}
        <section className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <h2 className="text-base md:text-xl font-bold text-slate-800">
              Understanding E-Challan Database Status Flags
            </h2>
          </div>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            When you run a search query code on the main portal interface, your vehicle dashboard grid will display one of three status indicators:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse border border-slate-200 shadow-inner">
              <thead>
                <tr className="bg-[#1b4b8f] text-white font-bold">
                  <th className="p-3 border">Status Flag</th>
                  <th className="p-3 border">Operational Meaning</th>
                  <th className="p-3 border">Required Citizen Action</th>
                </tr>
              </thead>
              <tbody className="divide-y text-slate-600 font-medium">
                <tr>
                  <td className="p-3 border text-red-600 bg-red-50/20 font-bold">UNPAID / PENDING</td>
                  <td className="p-3 border">A traffic infraction has been logged and the invoice is outstanding.</td>
                  <td className="p-3 border text-blue-600 underline">Generate payment token and clear via wallet apps immediately.</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3 border text-emerald-600 font-bold">PAID / CLEARED</td>
                  <td className="p-3 border">The transaction fee has been securely settled and audited by the 1Link node.</td>
                  <td className="p-3 border text-slate-400">No action needed. Your clean history log is updated safely.</td>
                </tr>
                <tr>
                  <td className="p-3 border text-purple-600 font-bold">UNDER REVIEW</td>
                  <td className="p-3 border">The transaction or ticket format is locked under a specific dispute audit layout.</td>
                  <td className="p-3 border text-slate-500">Wait for the regional traffic command board review verdict.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= DISPUTE AND WRONG CHALLAN GUIDE ================= */}
        <section className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <h2 className="text-base md:text-xl font-bold text-slate-800">
              How to Dispute a Wrong or Faulty E-Challan
            </h2>
          </div>
          <p className="text-xs md:text-sm leading-relaxed text-slate-600">
            Occasionally, due to dynamic dust factors, overlapping license plate design layouts, or vehicle plate duplication scams, you might receive a ticket meant for another car. Do not panic; the Punjab Safe Cities Authority provides a formal corrections pipeline:
          </p>
          
          <div className="bg-slate-50 p-5 rounded-lg border text-xs md:text-sm space-y-2 text-slate-600">
            <p><strong>Step 1: Check Photographic Proof ➔</strong> Always zoom into the digital verification snapshot on our dashboard to confirm if the captured vehicle shape and plate match your actual machine.</p>
            <p><strong>Step 2: Visit PSCA HQ Helpdesk ➔</strong> If a clear mismatch is detected (e.g., a motorcycle plate captured on a commercial tractor layout), take your original smart card registration token and visit the nearest Safe City Center or Traffic Police Headquarters.</p>
            <p><strong>Step 3: Call Helpline 15 ➔</strong> For preliminary systemic guidance logs, you can dial the official Punjab emergency tracking helpline numbers to route your correction claim to web desk operators.</p>
          </div>
        </section>

        {/* ================= SAFETY COMPLIANCE REMINDER ================= */}
        <div className="bg-slate-900 text-white p-6 rounded-xl space-y-3">
          <h4 className="font-bold text-sm md:text-base text-blue-400">
            💡 Pro-Active Traffic Safety Compliance Checklist
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            The automated surveillance matrix uses state-of-the-art vision algorithms to enforce road discipline. Avoid dynamic penalty tracking by following these simple habits daily:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs text-slate-300">
            <p className="p-2 bg-slate-800/50 rounded border border-slate-700">• Always stop well behind the solid white line during red lights.</p>
            <p className="p-2 bg-slate-800/50 rounded border border-slate-700">• Ensure both rider and pillion passenger wear safety helmets.</p>
            <p className="p-2 bg-slate-800/50 rounded border border-slate-700">• Fasten your car seatbelt before turning the engine key.</p>
            <p className="p-2 bg-slate-800/50 rounded border border-slate-700">• Do not type, call, or look at mobile screens while driving.</p>
            <p className="p-2 bg-slate-800/50 rounded border border-slate-700">• Keep your alphanumeric plate clear of mud or plastic shields.</p>
            <p className="p-2 bg-slate-800/50 rounded border border-slate-700">• Drive within marked lane lines and avoid sudden swerving.</p>
          </div>
        </div>

      </div>
    </div>
  );
}