'use client';

import React from 'react';

export default function GuidelinePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-28 pb-12 px-4 md:px-8 font-sans text-slate-700">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Page Main Header */}
        <div className="bg-[#1b4b8f] text-white p-6 rounded shadow-md relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_25%,transparent_25%)] bg-[size:40px_40px]" />
          <h1 className="text-xl md:text-3xl font-bold tracking-wide relative z-10">
            Official E-Challan Guidelines & Informational Resource
          </h1>
          <p className="text-xs md:text-sm text-blue-100/80 mt-1 relative z-10">
            Read our comprehensive, in-depth articles to understand traffic laws, digital monitoring, and fine avoidance frameworks in Pakistan.
          </p>
        </div>

        {/* ================= ARTICLE 1 ================= */}
        <article className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <span className="bg-amber-600 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded">Blog 1</span>
            <span className="text-xs text-slate-400 font-medium">Reading Time: 5 mins</span>
          </div>
          
          <h2 className="text-lg md:text-2xl font-bold text-[#1b4b8f]">
            1. Understanding the Mechanics of PSCA Smart Surveillance: How E-Challans are Triggered
          </h2>
          
          <p className="text-xs md:text-sm leading-relaxed text-slate-600">
            The transition from manual paper-based ticketing to the Punjab Safe Cities Authority’s (PSCA) automated E-Challan network marks a revolutionary shift in urban traffic enforcement. Driven by Artificial Intelligence (AI) and high-definition surveillance infrastructure, this system operates non-stop across major cities like Lahore, Rawalpindi, and Multan. But how exactly does a camera capture a violation and generate a fine?
          </p>
          
          <h3 className="font-bold text-sm text-slate-800 pt-2">The Automated Detection Workflow:</h3>
          <ul className="text-xs md:text-sm space-y-2 text-slate-600 pl-4 list-disc">
            <li>
              <strong>ANPR Technology:</strong> Automated Number Plate Recognition (ANPR) cameras are strategically positioned over high-traffic junctions. These sensors instantly decode character sequences on alphanumeric plates, cross-referencing them with the Central Excise and Taxation database.
            </li>
            <li>
              <strong>Visual Evidence Tracking:</strong> When a motorist crosses a solid stop line during a red light sequence, or exceeds velocity parameters, the system triggers video and photo captures.
            </li>
            <li>
              <strong>Database Integration:</strong> Once the system validates the owner's credentials (CNIC, engine framework number), a unique electronic invoice is instantly populated in the cloud portal.
            </li>
          </ul>

          <div className="bg-slate-50 p-4 border-l-4 border-l-[#a07828] text-xs text-slate-500 leading-relaxed italic">
            "By minimizing direct human contact, the automatic system ensures structural clarity, wipes out corruption vectors at checkpoints, and forces citizens to strictly adopt global safety measures."
          </div>
        </article>


        {/* ================= ARTICLE 2 ================= */}
        <article className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <span className="bg-blue-600 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded">Blog 2</span>
            <span className="text-xs text-slate-400 font-medium">Reading Time: 4 mins</span>
          </div>

          <h2 className="text-lg md:text-2xl font-bold text-[#1b4b8f]">
            2. Top 8 Traffic Violations Leading to Heavy Digital Penalties inside Pakistan
          </h2>

          <p className="text-xs md:text-sm leading-relaxed text-slate-600">
            Many motorists accumulate a heavy log of electronic fines simply out of ignorance or negligence regarding updated digital camera setups. To help keep your vehicle history clean and avoid blocking transfer procedures during resale, we have listed the top traffic violations routinely caught by automated systems:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="border p-4 rounded bg-slate-50/50">
              <h4 className="font-bold text-sm text-slate-800">A. Intersections & Lane Violations</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Crossing the white stop line during red signal lights is the most heavily penalized offense. Similarly, abrupt lane switching or running against one-way traffic patterns instantly marks your vehicle plate in the central tracking database.
              </p>
            </div>
            
            <div className="border p-4 rounded bg-slate-50/50">
              <h4 className="font-bold text-sm text-slate-800">B. Personal Safety Compliance</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Riding motorcycles without an approved safety helmet or operating cars without buckling the seatbelt layout triggers visual AI flags instantly. Mobile interactions while managing steering controls are also strictly penalized via zoomed HD cameras.
              </p>
            </div>
          </div>

          <h3 className="font-bold text-sm text-slate-800 pt-2">Summary Matrix of Fine Categories:</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse border border-slate-200 shadow-inner">
              <thead>
                <tr className="bg-[#1b4b8f] text-white font-bold">
                  <th className="p-3 border">Violation Target</th>
                  <th className="p-3 border">Detection Method</th>
                  <th className="p-3 border text-right">Seriousness Index</th>
                </tr>
              </thead>
              <tbody className="divide-y text-slate-600">
                <tr><td className="p-3 border font-medium">Signal Defiance</td><td className="p-3 border">Stop-Line Camera</td><td className="p-3 border text-right text-red-600 font-bold">Critical</td></tr>
                <tr className="bg-slate-50"><td className="p-3 border font-medium">Over Speeding Limits</td><td className="p-3 border">Speed Radar Laser</td><td className="p-3 border text-right text-red-600 font-bold">High</td></tr>
                <tr><td className="p-3 border font-medium">No Protective Helmet</td><td className="p-3 border">Visual Facial AI Scan</td><td className="p-3 border text-right text-amber-600 font-bold">Moderate</td></tr>
              </tbody>
            </table>
          </div>
        </article>


        {/* ================= ARTICLE 3 ================= */}
        <article className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <span className="bg-emerald-600 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded">Blog 3</span>
            <span className="text-xs text-slate-400 font-medium">Reading Time: 6 mins</span>
          </div>

          <h2 className="text-lg md:text-2xl font-bold text-[#1b4b8f]">
            3. The Legal and Financial Consequences of Non-Payment of E-Challans
          </h2>

          <p className="text-xs md:text-sm leading-relaxed text-slate-600">
            A common misconception among local drivers is that digital challans can be safely ignored since no physical officer handed them a slip on the spot. This assumption is completely false and can create serious legal issues. Outstanding electronic fines are directly tied to your vehicle's identification registration node, leading to several complications over time.
          </p>

          <div className="space-y-3 pt-2 text-xs md:text-sm">
            <p>
              <strong>1. Vehicle Blacklisting Protocols:</strong> If multiple fines remain unpaid past their grace periods, the Punjab Safe Cities Authority, working alongside the Excise & Taxation Department, can blacklist your vehicle. Once blacklisted, it cannot be legally sold or transferred to another person.
            </p>
            <p>
              <strong>2. Impoundment Risks on Roads:</strong> Traffic wardens are equipped with dedicated smart tracking devices linked to real-time databases. If your license plate is scanned at a checkpoint and shows multiple outstanding fines, your vehicle can be impounded immediately.
            </p>
            <p>
              <strong>3. Accumulation of Financial Penalties:</strong> Fines do not disappear. They accumulate over time, creating a heavy financial burden that must be cleared in full before any registration updates or token tax clearances can be processed.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded p-4 text-xs text-amber-800 leading-relaxed font-medium">
            💡 <strong>Pro Tip:</strong> To avoid legal hassles or sudden delays when selling a vehicle, check your license plate status on our portal every month. Fines can be paid instantly from home using mobile wallets like EasyPaisa or JazzCash, or at regular commercial bank counters.
          </div>
        </article>

      </div>
    </div>
  );
}