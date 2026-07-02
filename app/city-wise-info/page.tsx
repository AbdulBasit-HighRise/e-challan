'use client';

import React from 'react';

export default function CityWiseInfoPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-28 pb-12 px-4 md:px-8 font-sans text-slate-700">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-[#1b4b8f] text-white p-6 rounded shadow-sm">
          <h1 className="text-xl font-bold uppercase tracking-wider">E-Challan Regional Systems Coverage</h1>
          <p className="text-xs text-blue-200 mt-1">Multi-province verification systems across major metropolitan grids inside Pakistan.</p>
        </div>

        <div className="space-y-4 bg-white border p-6 rounded shadow-sm text-xs md:text-sm">
          <div>
            <h3 className="font-bold text-[#1b4b8f] text-base">1. Punjab Hub (PSCA Database)</h3>
            <p className="text-slate-500 text-xs mt-1">Manages traffic violation records seamlessly for Lahore, Rawalpindi, Faisalabad, Multan, Sialkot, Gujranwala, Bahawalpur, Gujrat, and Sheikhupura dynamic camera arrays.</p>
          </div>

          <div className="pt-4 border-t">
            <h3 className="font-bold text-[#1b4b8f] text-base">2. Sindh Verification Portal (Karachi Central Node)</h3>
            <p className="text-slate-500 text-xs mt-1">Maintained jointly by Sindh Traffic Enforcement and Excise departments covering Karachi, Hyderabad, and Sukkur networks.</p>
          </div>

          <div className="pt-4 border-t">
            <h3 className="font-bold text-[#1b4b8f] text-base">3. Islamabad Capital Territory (ITP Framework)</h3>
            <p className="text-slate-500 text-xs mt-1">Directly integrated with the Islamabad Traffic Police monitoring clusters for instant tracking without local office clearance requirements.</p>
          </div>

          <div className="pt-4 border-t">
            <h3 className="font-bold text-[#1b4b8f] text-base">4. KPK & Balochistan Networks</h3>
            <p className="text-slate-500 text-xs mt-1">Covers emerging smart surveillance environments setup within Peshawar, Abbottabad, Swat, Nowshera, and Quetta municipalities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}