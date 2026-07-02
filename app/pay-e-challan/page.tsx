'use client';

import React from 'react';

export default function PayEChallanPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-28 pb-12 px-4 md:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-[#1b4b8f] text-white p-6 rounded shadow-md">
          <h1 className="text-xl md:text-2xl font-bold tracking-wide">How to Pay PSCA E-Challan Online</h1>
          <p className="text-xs text-blue-100/80 mt-1">Complete step-by-step digital payment manual for digital traffic fines in Pakistan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border p-5 rounded shadow-sm border-l-4 border-l-[#a07828]">
            <h3 className="font-bold text-sm text-[#1b4b8f] mb-2">1. Commercial Banking Counters</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Visit any authorized commercial bank counter branches including Bank of Punjab (BOP), Habib Bank Limited (HBL), United Bank Limited (UBL), MCB, Meezan Bank, and National Bank of Pakistan (NBP) to clear your pending dues with a printed duplicate slip.
            </p>
          </div>

          <div className="bg-white border p-5 rounded shadow-sm border-l-4 border-l-[#1b4b8f]">
            <h3 className="font-bold text-sm text-[#1b4b8f] mb-2">2. 1Link ATM Infrastructure</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Insert your card into any nationwide ATM ➔ Select Bill Payments ➔ Navigate to 'Traffic Challan' ➔ Input your unique electronic challenge reference number string ➔ Confirm account deduction seamlessly.
            </p>
          </div>

          <div className="bg-white border p-5 rounded shadow-sm border-l-4 border-l-[#1b4b8f]">
            <h3 className="font-bold text-sm text-[#1b4b8f] mb-2">3. Mobile Wallet Applications</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Open EasyPaisa or JazzCash apps ➔ Locate Government Fines or Challan segment ➔ Pick Punjab Safe Cities Authority ➔ Enter payment parameters to clear instantly from your home comfort.
            </p>
          </div>

          <div className="bg-white border p-5 rounded shadow-sm border-l-4 border-l-[#a07828]">
            <h3 className="font-bold text-sm text-[#1b4b8f] mb-2">4. Web Internet Banking</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Log in to your respective bank's secure desktop interface or proprietary smart mobile client ➔ Input target parameters directly inside internal state transfer portals safely.
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 p-4 rounded text-xs text-amber-800 leading-relaxed">
          <strong>Important Note:</strong> Always verify that your status updates to 'PAID' inside the official database grid right after running electronic payment routes to secure vehicle transfer stability.
        </div>
      </div>
    </div>
  );
}