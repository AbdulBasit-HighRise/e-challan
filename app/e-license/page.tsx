'use client';

import React from 'react';

export default function ELicensePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-28 pb-16 px-4 md:px-8 font-sans text-slate-700">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* ================= HERO SECTION ================= */}
        <div className="bg-[#1b4b8f] text-white p-6 md:p-10 rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_25%,transparent_25%)] bg-[size:40px_40px]" />
          <span className="bg-[#a07828] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full relative z-10 tracking-widest">
            Digital Driving Credentials
          </span>
          <h1 className="text-xl md:text-3xl font-bold tracking-wide mt-3 relative z-10">
            Punjab Traffic E-License Verification & Download Guide
          </h1>
          <p className="text-xs md:text-sm text-blue-100/80 mt-2 max-w-2xl relative z-10 leading-relaxed">
            Get complete step-by-step instructions to verify, generate, and download your official Punjab Traffic Police E-License online via the DLIMS ecosystem.
          </p>
        </div>

        {/* ================= WHAT IS E-LICENSE ================= */}
        <section className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <h2 className="text-base md:text-xl font-bold text-slate-800">
              What is the Punjab Electronic Driving License (E-License)?
            </h2>
          </div>
          <p className="text-xs md:text-sm leading-relaxed text-slate-600">
            The Government of Punjab, in collaboration with the PITB and Punjab Traffic Police, introduced the digital <strong>E-License layout</strong>. It is a legally valid, QR-code-secured electronic document that motorists can carry on their smartphones. If a traffic warden pulls you over at a checkpoint, showing this digital copy eliminates the need to produce a physical plastic card.
          </p>
        </section>

        {/* ================= STEP BY STEP DOWNLOAD ================= */}
        <section className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <h2 className="text-base md:text-xl font-bold text-slate-800">
              How to Download Your E-License Instantly (Step-by-Step)
            </h2>
          </div>
          <p className="text-xs md:text-sm text-slate-600">
            Follow these direct verification instructions to retrieve your active driving credentials from the database:
          </p>
          
          <div className="bg-slate-50 p-5 rounded border space-y-3 text-xs md:text-sm">
            <ol className="list-decimal pl-5 space-y-2 text-slate-600">
              <li>Visit the official portal layout of <strong>DLIMS (Driving License Issues Management System)</strong>.</li>
              <li>Navigate to the top menu bar and select the <strong>"E-License"</strong> option tab.</li>
              <li>Input your 13-digit <strong>National Identity Card (CNIC) Number</strong> without adding dashes (e.g., <code>35201XXXXXXXX</code>).</li>
              <li>Enter your car or motorcycle's <strong>License Serial Number</strong> (if requested for premium verification tracking).</li>
              <li>Complete the secure Google reCAPTCHA check verification layer to prove you are not an automated bot script.</li>
              <li>Click the <strong>"Generate/Verify"</strong> button. Your electronic credentials sheet will appear instantly on the monitor screen showcasing your image, validity dates, and authorized vehicle categories (Learner, LTV, HTV, Motorcycle).</li>
              <li>Click <strong>"Download PDF"</strong> to save a permanent copy directly inside your smartphone file storage.</li>
            </ol>
          </div>
        </section>

        {/* ================= REQUIRED DOCUMENTS ================= */}
        <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm space-y-4">
          <h3 className="font-bold text-sm md:text-base text-slate-800 border-b pb-2">
            📋 Essential Requirements for New Applicants & Renewals
          </h3>
          <p className="text-xs md:text-sm text-slate-600">
            Before attempting to verify or log your digital credentials into the smart city database, ensure you have completed the basic physical verification criteria at local traffic hubs:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm">
            <div className="p-3 bg-slate-50 border rounded">
              <strong className="text-[#1b4b8f] block">For Regular Licensing:</strong>
              <ul className="list-disc pl-4 mt-1 space-y-1 text-slate-500 text-xs">
                <li>Original Computerized National Identity Card (CNIC).</li>
                <li>Medical Fitness Certificate (issued by a registered doctor for applicants over 50).</li>
                <li>A nominal ticket fee structure paid cleanly via the automated PSCA/DLIMS system bank codes.</li>
              </ul>
            </div>
            <div className="p-3 bg-slate-50 border rounded">
              <strong className="text-[#1b4b8f] block">For International Permits:</strong>
              <ul className="list-disc pl-4 mt-1 space-y-1 text-slate-500 text-xs">
                <li>Valid local driving license issued by the Punjab Licensing Authority.</li>
                <li>Valid Pakistani Passport along with an active entry visa endorsement.</li>
                <li>Two passport-sized custom background photographs.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= INTEGRATED INSTITUTIONS ================= */}
        <div className="bg-slate-900 text-white p-6 rounded-xl space-y-4">
          <h4 className="font-bold text-sm md:text-base text-blue-400">
            🏛️ Institutional Framework Managing Licenses
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Your licensing status is cross-referenced by three key institutional frameworks to prevent document fraud or identity theft:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="border border-slate-700 p-3 rounded bg-slate-800/40">
              <strong className="text-white block">Punjab Traffic Police</strong>
              <span className="text-slate-400">Enforces field tracking, checks status profiles on roads, and processes physical driving tests.</span>
            </div>
            <div className="border border-slate-700 p-3 rounded bg-slate-800/40">
              <strong className="text-white block">PITB (Technology Board)</strong>
              <span className="text-slate-400">Develops and preserves the secure hosting servers, DLIMS websites, and app infrastructures.</span>
            </div>
            <div className="border border-slate-700 p-3 rounded bg-slate-800/40">
              <strong className="text-white block">NADRA Central System</strong>
              <span className="text-slate-400">Provides biometric authentication checks to ensure identity validation accuracy across Punjab.</span>
            </div>
          </div>
        </div>

        {/* ================= REGULATORY NOTE ================= */}
        <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg text-xs md:text-sm text-amber-900 leading-relaxed">
          ⚠️ <strong>E-Challan Point System Warning:</strong> Your electronic driving license profile is directly linked to the central <strong>PSCA E-Challan verification network</strong>. Committing repetitive offenses like over-speeding, red-signal violations, or driving without seatbelts will automatically accumulate penalty points on your license. If you hit the maximum point ceiling threshold, your licensing privileges can be legally suspended or revoked by authorities. Always verify your vehicle history on our home dashboard!
        </div>

      </div>
    </div>
  );
}