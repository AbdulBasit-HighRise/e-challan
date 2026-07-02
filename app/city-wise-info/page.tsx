'use client';

import React from 'react';

export default function CityWiseInfoPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-28 pb-16 px-4 md:px-8 font-sans text-slate-700">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* ================= HERO SECTION ================= */}
        <div className="bg-[#1b4b8f] text-white p-6 md:p-10 rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_25%,transparent_25%)] bg-[size:40px_40px]" />
          <span className="bg-[#a07828] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full relative z-10 tracking-widest">
            Regional Hubs & Coverage
          </span>
          <h1 className="text-xl md:text-3xl font-bold tracking-wide mt-3 relative z-10">
            E-Challan City Wise Information & Portal Directory
          </h1>
          <p className="text-xs md:text-sm text-blue-100/80 mt-2 max-w-2xl relative z-10 leading-relaxed">
            Comprehensive guide to Punjab Safe Cities Authority (PSCA) digital traffic monitoring across various districts. Learn about city-specific camera networks, coverage areas, and localized verification nodes.
          </p>
        </div>

        {/* ================= OVERVIEW METRICS ================= */}
        <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm">
          <h3 className="font-bold text-sm md:text-base text-[#1b4b8f] mb-4 border-b pb-2">
            PSCA Digital Infrastructure Network Scale
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-slate-50 rounded border">
              <span className="text-xl md:text-2xl font-bold text-[#1b4b8f] block">10+</span>
              <span className="text-slate-500 text-[11px] font-medium uppercase mt-1 block">Major Cities Covered</span>
            </div>
            <div className="p-4 bg-slate-50 rounded border">
              <span className="text-xl md:text-2xl font-bold text-[#a07828] block">15,000+</span>
              <span className="text-slate-500 text-[11px] font-medium uppercase mt-1 block">HD Smart Cameras</span>
            </div>
            <div className="p-4 bg-slate-50 rounded border">
              <span className="text-xl md:text-2xl font-bold text-emerald-600 block">24/7</span>
              <span className="text-slate-500 text-[11px] font-medium uppercase mt-1 block">Automated AI Tracking</span>
            </div>
            <div className="p-4 bg-slate-50 rounded border">
              <span className="text-xl md:text-2xl font-bold text-blue-600 block">100%</span>
              <span className="text-slate-500 text-[11px] font-medium uppercase mt-1 block">Centralized Database</span>
            </div>
          </div>
        </div>

        {/* ================= CITY 1: LAHORE ================= */}
        <section className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-3 gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse" />
              <h2 className="text-base md:text-xl font-bold text-slate-800">1. Lahore Portal (PSCA HQ Node)</h2>
            </div>
            <span className="bg-red-50 text-red-700 text-[11px] font-semibold px-2.5 py-0.5 rounded border border-red-200 w-fit">
              Maximum Surveillance Tier
            </span>
          </div>
          <p className="text-xs md:text-sm leading-relaxed text-slate-600">
            Lahore is the central command center of the Punjab Safe Cities Authority. The city features an expansive network of Automatic Number Plate Recognition (ANPR) and facial recognition systems deployed across every key intersection, road, and exit point.
          </p>
          <div className="bg-slate-50 p-4 rounded border text-xs md:text-sm space-y-2">
            <p><strong>📍 Primary High-Risk Zones:</strong> Mall Road, Jail Road, Ferozepur Road, Gulberg Main Boulevard, Ring Road Interchanges, and Canal Bank Road.</p>
            <p><strong>🔒 Fine Enforcement:</strong> Speed radars and automated stop-line sensors generate instant fine logs directly linked to the Lahore Traffic Police center. Vehicles with unpaid challans face strict seizure flags at active roadblocks.</p>
          </div>
        </section>

        {/* ================= CITY 2: RAWALPINDI ================= */}
        <section className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-3 gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-full bg-blue-600" />
              <h2 className="text-base md:text-xl font-bold text-slate-800">2. Rawalpindi Node</h2>
            </div>
            <span className="bg-blue-50 text-blue-700 text-[11px] font-semibold px-2.5 py-0.5 rounded border border-blue-200 w-fit">
              Active Smart Monitoring
            </span>
          </div>
          <p className="text-xs md:text-sm leading-relaxed text-slate-600">
            The Rawalpindi Safe City electronic infrastructure operates in close coordination with the twin city traffic command layout. It focuses heavily on congested commercial avenues and mass transit corridors to maintain disciplined traffic flow.
          </p>
          <div className="bg-slate-50 p-4 rounded border text-xs md:text-sm space-y-2">
            <p><strong>📍 Primary High-Risk Zones:</strong> Murree Road, Saddar Commercial Blocks, Faizabad Interchange, Sixth Avenue, and Airport Road tracking junctions.</p>
            <p><strong>🔒 Common Penalties Captured:</strong> Lane violations, driving without safety helmets, illegal parking layouts blocking pathways, and running red signals.</p>
          </div>
        </section>

        {/* ================= CITY 3: FAISALABAD ================= */}
        <section className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-3 gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-full bg-amber-600" />
              <h2 className="text-base md:text-xl font-bold text-slate-800">3. Faisalabad Hub</h2>
            </div>
            <span className="bg-amber-50 text-amber-700 text-[11px] font-semibold px-2.5 py-0.5 rounded border border-amber-200 w-fit">
              Industrial Network Grid
            </span>
          </div>
          <p className="text-xs md:text-sm leading-relaxed text-slate-600">
            As the industrial spine of Punjab, Faisalabad's digital challan tracking specializes in managing heavy transport vehicle infractions along with commercial motorcycle safety standards.
          </p>
          <div className="bg-slate-50 p-4 rounded border text-xs md:text-sm space-y-2">
            <p><strong>📍 Primary High-Risk Zones:</strong> Clock Tower Bazars Loop, Jhang Road, Sargodha Road, Satiana Road checkpoints, and Canal Road speed arcs.</p>
            <p><strong>🔒 Special Monitoring Focus:</strong> Overloading parameters, operating vehicles with obscured or missing number plates, one-way violations, and driving without valid local commercial licenses.</p>
          </div>
        </section>

        {/* ================= OTHER DISTRICTS EXPANSION ================= */}
        <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm space-y-4">
          <h3 className="font-bold text-sm md:text-base text-slate-800 border-b pb-2">
            4. Other Active Safe City Web Districts (Punjab)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            The Punjab Safe Cities Authority has officially expanded its unified surveillance ecosystem to multiple intermediate districts. Fines issued in these sectors are processed through the same centralized database architecture:
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-medium text-slate-700">
            <div className="p-2.5 bg-slate-50 rounded border">• Multan Hub</div>
            <div className="p-2.5 bg-slate-50 rounded border">• Gujranwala Grid</div>
            <div className="p-2.5 bg-slate-50 rounded border">• Sialkot Node</div>
            <div className="p-2.5 bg-slate-50 rounded border">• Bahawalpur Arc</div>
            <div className="p-2.5 bg-slate-50 rounded border">• Sargodha Base</div>
            <div className="p-2.5 bg-slate-50 rounded border">• Kasur Station</div>
            <div className="p-2.5 bg-slate-50 rounded border">• Sheikhupura Node</div>
            <div className="p-2.5 bg-slate-50 rounded border">• Gujrat Network</div>
          </div>
        </div>

        {/* ================= DETAILED COMPARISON TABLE ================= */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm space-y-4">
          <h3 className="font-bold text-sm md:text-base text-[#1b4b8f]">
            City Wise Features & Portal Specifications
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse border border-slate-200">
              <thead>
                <tr className="bg-[#1b4b8f] text-white font-bold">
                  <th className="p-3 border">District Jurisdiction</th>
                  <th className="p-3 border">Core Identification Method</th>
                  <th className="p-3 border">Verification Query Key</th>
                  <th className="p-3 border">SMS Alert Delivery</th>
                </tr>
              </thead>
              <tbody className="divide-y text-slate-600 font-medium">
                <tr>
                  <td className="p-3 border bg-slate-50/40">Lahore</td>
                  <td className="p-3 border text-emerald-600">ANPR + Speed Radar</td>
                  <td className="  p-3 border font-mono">Challan No / Plate ID</td>
                  <td className="p-3 border text-blue-600">Instant Active</td>
                </tr>
                <tr className="bg-slate-50/40">
                  <td className="p-3 border">Rawalpindi</td>
                  <td className="p-3 border text-emerald-600">Intersection AI Cam</td>
                  <td className="p-3 border font-mono">Vehicle No + CNIC</td>
                  <td className="p-3 border text-blue-600">Instant Active</td>
                </tr>
                <tr>
                  <td className="p-3 border bg-slate-50/40">Faisalabad</td>
                  <td className="p-3 border text-emerald-600">HD Speed Speed Radar</td>
                  <td className="p-3 border font-mono">Vehicle ID Number</td>
                  <td className="p-3 border text-slate-400">Batch Phase</td>
                </tr>
                <tr className="bg-slate-50/40">
                  <td className="p-3 border">Other Districts</td>
                  <td className="p-3 border text-emerald-600">ANPR Checkpoints</td>
                  <td className="p-3 border font-mono">Plate ID Registration</td>
                  <td className="p-3 border text-slate-400">SMS Optional</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= METHOD SELECTION FOOTNOTE ================= */}
        <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg text-xs md:text-sm text-blue-950 leading-relaxed">
          💡 <strong>Important Note for All Cities:</strong> Regardless of which district your electronic fine was recorded in, the payment processing methods (EasyPaisa, JazzCash, ATMs, or Bank branches) remain entirely identical and globally integrated across Pakistan. Your digital clearance record will clear in the central database immediately.
        </div>

      </div>
    </div>
  );
}