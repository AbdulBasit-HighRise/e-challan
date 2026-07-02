'use client';

import React from 'react';

export default function ELicensePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-28 pb-12 px-4 md:px-8 font-sans text-slate-700">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-[#1b4b8f] text-white p-6 rounded shadow-sm">
          <h1 className="text-xl font-bold">E-License Verification & Management</h1>
          <p className="text-xs text-blue-200 mt-1">Verify and access your digital regulatory driving license profiles instantly.</p>
        </div>

        <div className="bg-white border p-6 rounded shadow-sm space-y-4 text-xs md:text-sm">
          <h3 className="font-bold text-slate-800 text-sm border-b pb-1">DLIMS Electronic Infrastructure</h3>
          <p className="leading-relaxed text-slate-600">
            Citizens can now access their authorized digital driving profiles without carrying hard physical layout files. The system checks active constraints, validates points deductions due to outstanding e-challans, and prints authentic legal copies.
          </p>
          <div className="bg-slate-50 p-4 border rounded font-mono text-slate-600 space-y-1">
            <p>➔ Step 1: Navigate to the central DLIMS portal system.</p>
            <p>➔ Step 2: Enter your original national CNIC credentials correctly.</p>
            <p>➔ Step 3: Provide your date of birth matching system database records.</p>
            <p>➔ Step 4: Click verify to generate the electronic card layout instantly.</p>
          </div>
        </div>
      </div>
    </div>
  );
}