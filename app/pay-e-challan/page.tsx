'use client';

import React from 'react';

export default function PayEChallanPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-28 pb-16 px-4 md:px-8 font-sans text-slate-700">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* ================= HERO SECTION ================= */}
        <div className="bg-[#1b4b8f] text-white p-6 md:p-10 rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_25%,transparent_25%)] bg-[size:40px_40px]" />
          <span className="bg-[#a07828] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full relative z-10 tracking-widest">
            Official Payment Manual
          </span>
          <h1 className="text-xl md:text-3xl font-bold tracking-wide mt-3 relative z-10">
            How to Pay PSCA E-Challan Online in Pakistan
          </h1>
          <p className="text-xs md:text-sm text-blue-100/80 mt-2 max-w-2xl relative z-10 leading-relaxed">
            Complete step-by-step digital and manual payment methods for Punjab Safe Cities Authority traffic fines. Clear your outstanding dues instantly through commercial banks, ATMs, or mobile wallets.
          </p>
        </div>

        {/* ================= BENEFITS BLOCK (From Image 1) ================= */}
        <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm">
          <h3 className="font-bold text-sm md:text-base text-[#1b4b8f] mb-4 border-b pb-2">
            Benefits of Clearing Your E-Challan Online
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs md:text-sm">
            <div className="p-3 bg-slate-50 rounded border">
              <strong className="text-slate-800 block">✓ Transparency & Clarity</strong>
              <span className="text-slate-500 text-xs mt-0.5 block">Reduces human errors, spot-bribes, and manual corruption vectors completely.</span>
            </div>
            <div className="p-3 bg-slate-50 rounded border">
              <strong className="text-slate-800 block">✓ Instant Digital Records</strong>
              <span className="text-slate-500 text-xs mt-0.5 block">Maintains an accurate historical log of your vehicle's clean driving history profile.</span>
            </div>
            <div className="p-3 bg-slate-50 rounded border">
              <strong className="text-slate-800 block">✓ Hassle-Free Transfer</strong>
              <span className="text-slate-500 text-xs mt-0.5 block">Helpful for selling or transferring vehicle ownership records smoothly inside Excise blocks.</span>
            </div>
          </div>
        </div>

        {/* ================= DETAILED METHOD 1 ================= */}
        <section className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <h2 className="text-base md:text-xl font-bold text-slate-800">
              Method 1: Mobile Wallet Apps (EasyPaisa & JazzCash)
            </h2>
          </div>
          <p className="text-xs md:text-sm leading-relaxed text-slate-600">
            This is the most convenient way used by citizens to clear fines instantly from their smartphones without visiting any office or standing in long queues.
          </p>
          <div className="bg-slate-50 p-5 rounded border space-y-3 text-xs md:text-sm">
            <p className="font-semibold text-[#1b4b8f]">📱 EasyPaisa App Steps:</p>
            <ol className="list-decimal pl-5 space-y-1.5 text-slate-600">
              <li>Log in to your <strong>EasyPaisa Application</strong> on your smartphone.</li>
              <li>Tap on the <strong>"Bill Payment"</strong> icon from the main grid menu dashboard.</li>
              <li>Select <strong>"Government Fees"</strong> or "Challan" as your payment target.</li>
              <li>Choose <strong>"Punjab Safe Cities Authority (PSCA)"</strong> from the authorized department list.</li>
              <li>Input your <strong>E-Challan Reference Number</strong> printed on your document grid.</li>
              <li>Verify your vehicle details, owner identity, and total fine amount matching the system.</li>
              <li>Click <strong>"Pay Now"</strong> to clear the amount seamlessly. Save the receipt image.</li>
            </ol>
            
            <p className="font-semibold text-[#1b4b8f] pt-2">🔸 JazzCash App Steps:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Open JazzCash ➔ Navigate to "Government Payments" ➔ Choose "Traffic Challan Punjab".</li>
              <li>Provide the challan payment token sequence and confirm through your personal secure wallet pin node.</li>
            </ul>
          </div>
        </section>

        {/* ================= DETAILED METHOD 2 ================= */}
        <section className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <h2 className="text-base md:text-xl font-bold text-slate-800">
              Method 2: 1Link ATM Network Infrastructure
            </h2>
          </div>
          <p className="text-xs md:text-sm leading-relaxed text-slate-600">
            If you do not use mobile applications, you can walk into any commercial bank ATM cabin booth linked with the 1Link secure financial backbone matrix to process the transactions.
          </p>
          <div className="border rounded overflow-hidden">
            <div className="bg-[#1b4b8f]/5 p-4 border-b">
              <span className="text-xs font-mono font-bold text-[#1b4b8f]">ATM TRANSACTION WORKFLOW STRIP</span>
            </div>
            <div className="p-5 text-xs md:text-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-slate-50 border rounded">
                <span className="text-blue-600 font-bold block mb-1">STEP 1</span>
                Insert Debit Card & Input Secure PIN
              </div>
              <div className="p-3 bg-slate-50 border rounded">
                <span className="text-blue-600 font-bold block mb-1">STEP 2</span>
                Go to "Bill Payments" ➔ "Government Fines"
              </div>
              <div className="p-3 bg-slate-50 border rounded">
                <span className="text-blue-600 font-bold block mb-1">STEP 3</span>
                Select PSCA & Enter Reference Code
              </div>
              <div className="p-3 bg-slate-50 border rounded">
                <span className="text-blue-600 font-bold block mb-1">STEP 4</span>
                Confirm Cash Deduction & Print Slip
              </div>
            </div>
          </div>
        </section>

        {/* ================= DETAILED METHOD 3 ================= */}
        <section className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <h2 className="text-base md:text-xl font-bold text-slate-800">
              Method 3: Physical Bank Branches Counters
            </h2>
          </div>
          <p className="text-xs md:text-sm leading-relaxed text-slate-600">
            For users who prefer offline cash methods, the Punjab Government has designated top tier commercial banking chains where you can clear dues by presenting a physical layout slip copy.
          </p>
          
          <div className="bg-amber-50/50 border border-amber-200 p-4 rounded text-xs md:text-sm text-slate-600 space-y-2">
            <p className="font-bold text-amber-900">🏢 Approved Banking Partners Include:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-medium text-slate-700">
              <p>• Bank of Punjab (BOP)</p>
              <p>• National Bank (NBP)</p>
              <p>• Habib Bank (HBL)</p>
              <p>• United Bank (UBL)</p>
              <p>• MCB Bank Limited</p>
              <p>• Meezan Bank</p>
            </div>
            <p className="text-xs text-amber-800 pt-1">
              <strong>Note:</strong> Make sure to download and print the duplicate challan copy from our portal check framework before visiting the teller desk counters.
            </p>
          </div>
        </section>

        {/* ================= DETAILED METHOD 4 ================= */}
        <section className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <h2 className="text-base md:text-xl font-bold text-slate-800">
              Method 4: NADRA e-Sahulat Franchises
            </h2>
          </div>
          <p className="text-xs md:text-sm leading-relaxed text-slate-600">
            You can visit any authorized local NADRA e-Sahulat retail shop located across neighborhoods inside your city. Hand over your electronic reference token to the verified shop operator, pay the exact cash amount matching the database grid, and receive an instant machine-printed confirmation slip receipt.
          </p>
        </section>

        {/* ================= AUTHORITIES INVOLVED ================= */}
        <div className="bg-slate-900 text-white p-6 rounded-xl space-y-4">
          <h4 className="font-bold text-sm md:text-base text-blue-400">
            🛡️ Official Clearing Authorities Grid
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Your payment flows through a highly secure, verified government verification matrix to update your record cleanly:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <div className="border border-slate-700 p-3 rounded bg-slate-800/40">
              <strong className="text-white block">Punjab Safe Cities Authority</strong>
              <span className="text-slate-400">Manages central surveillance data cameras and populates digital invoices.</span>
            </div>
            <div className="border border-slate-700 p-3 rounded bg-slate-800/40">
              <strong className="text-white block">Excise & Taxation Department</strong>
              <span className="text-slate-400">Syncs ownership vehicle files and controls active blacklisting blocks.</span>
            </div>
            <div className="border border-slate-700 p-3 rounded bg-slate-800/40">
              <strong className="text-white block">Federal Board of Revenue (FBR)</strong>
              <span className="text-slate-400">Audits structural state point tax integrations inside automatic frameworks.</span>
            </div>
          </div>
        </div>

        {/* ================= CRITICAL WARNING NOTE ================= */}
        <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg text-xs md:text-sm text-amber-900 leading-relaxed">
          ⚠️ <strong>Crucial Verification Rule:</strong> After processing payments via mobile apps or ATMs, always return to our main platform homepage to query your registration number string. Verify that your database flag status has transformed to <strong>'PAID'</strong>. If it shows pending status due to a 1Link system queue delay, keep your transaction SMS receipt safely.
        </div>

      </div>
    </div>
  );
}