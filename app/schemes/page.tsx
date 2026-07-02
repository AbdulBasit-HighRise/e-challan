'use client';

import React from 'react';

export default function SchemesPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-28 pb-16 px-4 md:px-8 font-sans text-slate-700">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* ================= HERO SECTION ================= */}
        <div className="bg-[#1b4b8f] text-white p-6 md:p-10 rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_25%,transparent_25%)] bg-[size:40px_40px]" />
          <span className="bg-[#a07828] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full relative z-10 tracking-widest">
            Government Relief Initiatives
          </span>
          <h1 className="text-xl md:text-3xl font-bold tracking-wide mt-3 relative z-10">
            Traffic Fine Relief Schemes & Subsidy Audit Guides
          </h1>
          <p className="text-xs md:text-sm text-blue-100/80 mt-2 max-w-2xl relative z-10 leading-relaxed">
            Stay updated with the latest regulatory frameworks, fine reduction programs, vehicle token relief integrations, and official subsidy schemes introduced by the Government of Punjab.
          </p>
        </div>

        {/* ================= SCHEME 1: TOKEN TAX RELIEF ================= */}
        <section className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-3 gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-amber-600" />
              <h2 className="text-base md:text-xl font-bold text-slate-800">1. Vehicle Token Tax Relief Integration</h2>
            </div>
            <span className="bg-amber-50 text-amber-700 text-[11px] font-semibold px-2.5 py-0.5 rounded border border-amber-200 w-fit">
              Active Sync Scheme
            </span>
          </div>
          <p className="text-xs md:text-sm leading-relaxed text-slate-600">
            Under the centralized digital transformation scheme, the Excise, Taxation & Customs Department has linked vehicle lifetime or annual token payments with your digital traffic history record. Clear system validation rules apply when upgrading or clearing your status.
          </p>
          <div className="bg-slate-50 p-4 rounded border text-xs md:text-sm space-y-3">
            <p><strong>🔹 The Combined Clearance Rule:</strong> Motorists attempting to pay annual token taxes through the e-Pay Punjab application can now check any pending PSCA e-challans tied directly to that chassis number inside the same database dashboard.</p>
            <p><strong>🔹 Discount Thresholds:</strong> During specific promotional government frames, clearing all accrued electronic fines simultaneously unlocks special rebate permissions on basic vehicle registry validation protocols.</p>
          </div>
        </section>

        {/* ================= SCHEME 2: SUBSIDY AUDIT ================= */}
        <section className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-3 gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <h2 className="text-base md:text-xl font-bold text-slate-800">2. Public Transport Subsidy Compliance</h2>
            </div>
            <span className="bg-blue-50 text-blue-700 text-[11px] font-semibold px-2.5 py-0.5 rounded border border-blue-200 w-fit">
              Audit Framework
            </span>
          </div>
          <p className="text-xs md:text-sm leading-relaxed text-slate-600">
            Commercial logistics operations, public buses, and intra-city van networks operating under government-subsidized transport permits are strictly monitored via the automated surveillance network.
          </p>
          <div className="bg-slate-50 p-4 rounded border text-xs md:text-sm space-y-2">
            <p><strong>📊 Commercial Subsidy Lock:</strong> If a fleet vehicle accumulates more than 5 unpaid camera challans, its regional transport route subsidy clearance undergoes an automatic temporary suspension block until all pending verification invoices are updated to <code>PAID</code>.</p>
            <p><strong>📊 Quarterly Fine Audits:</strong> Transport business entities can generate a comprehensive city-wise compliance certificate through the unified web portal database to secure active tax waiver renewals.</p>
          </div>
        </section>

        {/* ================= SCHEME 3: POINT SYSTEM AND WAIVERS ================= */}
        <section className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-3 gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <h2 className="text-base md:text-xl font-bold text-slate-800">3. First-Offense Waiver & Awareness Scheme</h2>
            </div>
            <span className="bg-emerald-50 text-emerald-700 text-[11px] font-semibold px-2.5 py-0.5 rounded border border-emerald-200 w-fit">
              Driver Education Initiative
            </span>
          </div>
          <p className="text-xs md:text-sm leading-relaxed text-slate-600">
            To foster safe driving psychology rather than pure financial penalty accumulation, the traffic command framework provides specialized safe-driving credit paths for eligible citizens.
          </p>
          
          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left text-xs border-collapse border border-slate-200">
              <thead>
                <tr className="bg-[#1b4b8f] text-white font-bold">
                  <th className="p-3 border">Compliance Status</th>
                  <th className="p-3 border">License Point Balance</th>
                  <th className="p-3 border">Waiver / Reward Eligibility</th>
                </tr>
              </thead>
              <tbody className="divide-y text-slate-600 font-medium">
                <tr>
                  <td className="p-3 border bg-slate-50/30">12 Months Clean Record</td>
                  <td className="p-3 border text-emerald-600">0 Demerit Points</td>
                  <td className="p-3 border">Eligible for Token Discount Priority</td>
                </tr>
                <tr className="bg-slate-50/30">
                  <td className="p-3 border">Minor Initial Violation</td>
                  <td className="p-3 border text-amber-600">1 - 3 Demerit Points</td>
                  <td className="p-3 border">Waiver available upon passing digital law quiz</td>
                </tr>
                <tr>
                  <td className="p-3 border bg-slate-50/30">Repetitive Signal Defiance</td>
                  <td className="p-3 border text-red-600">10+ Demerit Points</td>
                  <td className="p-3 border text-red-600 font-bold">No Waiver - License Suspension Risk</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= REGULATORY LEGAL NOTICE ================= */}
        <div className="bg-blue-900 text-white p-6 rounded-xl space-y-2">
          <h4 className="font-bold text-sm md:text-base text-blue-400">
            ⚖️ Official Notice Regarding Rumored Waiver Schemes
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Citizens are advised that the Punjab Safe Cities Authority (PSCA) does not authorize any unofficial middleman apps or web layouts claiming to offer direct manual discounts or fine wiping algorithms. All legitimate traffic fine schemes, payment methods, and relief schedules are governed entirely through institutional digital connections and the official 1Link/e-Pay financial backbones.
          </p>
        </div>

      </div>
    </div>
  );
}