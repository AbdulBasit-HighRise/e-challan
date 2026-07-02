'use client';

import React, { useState } from 'react';

export default function InfoGrid() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "1. How can I check my E-Challan online in Pakistan?",
      a: "Enter your vehicle number & CNIC in our checker to instantly view your challans."
    },
    {
      q: "2. Can I check E-Challan by CNIC only?",
      a: "No, the official system requires both vehicle plate number and CNIC to maintain data privacy."
    },
    {
      q: "3. What happens if I don't pay my challan?",
      a: "Late fees accumulate, and the Excise department can blacklist your vehicle or suspend your registration."
    },
    {
      q: "4. Which app is best for Lahore E-Challan?",
      a: "The official 'Public Safety App' by PSCA is recommended for real-time traffic monitoring and fine updates."
    },
    {
      q: "5. Can I download my challan slip online?",
      a: "Yes, once fetched, you can view, print, or download the duplicate PDF challan slip for banking payment."
    }
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-10 px-4 md:px-8 font-sans text-slate-700">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* ================= MAP FROM IMAGE 1 (image_6e8df5.png) ================= */}
        {/* Objectives & Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-[#1b4b8f] border-b-2 border-[#a07828] pb-1">Objectives of E-Challan:</h2>
            <ul className="space-y-2 text-sm text-slate-600 pl-2">
              <li className="flex items-start gap-2">➔ <span>Shows vehicle and owner details.</span></li>
              <li className="flex items-start gap-2">➔ <span>Records the type of traffic violation.</span></li>
              <li className="flex items-start gap-2">➔ <span>Captures date, time, and location of the offense.</span></li>
              <li className="flex items-start gap-2">➔ <span>Shows fine amount and payment status.</span></li>
              <li className="flex items-start gap-2">➔ <span>Generates a unique reference number.</span></li>
            </ul>
            <p className="text-xs text-slate-400 italic pt-1">This digital system ensures transparency, reduces corruption, and helps authorities enforce traffic rules efficiently.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-[#1b4b8f] border-b-2 border-[#a07828] pb-1">Benefits of using E-Challan Online:</h2>
            <ul className="space-y-2 text-sm text-slate-600 pl-2">
              <li className="flex items-start gap-2">➔ <span><strong>Transparency:</strong> Reduces human errors and corruption.</span></li>
              <li className="flex items-start gap-2">➔ <span><strong>Quick Access:</strong> View fines instantly online.</span></li>
              <li className="flex items-start gap-2">➔ <span><strong>Flexible Payments:</strong> Multiple convenient payment methods.</span></li>
              <li className="flex items-start gap-2">➔ <span><strong>Digital Records:</strong> Accurate history of violations.</span></li>
              <li className="flex items-start gap-2">➔ <span><strong>Improved Safety:</strong> Encourages law-abiding driving.</span></li>
              <li className="flex items-start gap-2">➔ <span><strong>Vehicle Transfer:</strong> Helpful for selling or transferring vehicles.</span></li>
            </ul>
          </div>
        </div>

        {/* Traffic Fine Rates Table */}
        <div className="space-y-4">
          <div className="bg-[#1b4b8f] text-white text-center text-sm font-bold uppercase tracking-wider py-2 rounded shadow-sm">
            Estimated Traffic Challan Rates
          </div>
          <div className="bg-white border border-slate-200 rounded overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold">
                  <th className="px-4 py-3 border-r border-slate-200">Traffic Violation</th>
                  <th className="px-4 py-3">Fine/Amount (PKR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-600">
                <tr><td className="px-4 py-2 border-r border-slate-100">Red Light Violation</td><td className="px-4 py-2">200 - 1000</td></tr>
                <tr className="bg-slate-50/50"><td className="px-4 py-2 border-r border-slate-100">Overspeeding</td><td className="px-4 py-2">750 - 2000</td></tr>
                <tr><td className="px-4 py-2 border-r border-slate-100">Illegal Parking</td><td className="px-4 py-2">200 - 500</td></tr>
                <tr className="bg-slate-50/50"><td className="px-4 py-2 border-r border-slate-100">No Helmet</td><td className="px-4 py-2">200 - 600</td></tr>
                <tr><td className="px-4 py-2 border-r border-slate-100">Seatbelt Violation</td><td className="px-4 py-2">500</td></tr>
                <tr className="bg-slate-50/50"><td className="px-4 py-2 border-r border-slate-100">Mobile Phone Use</td><td className="px-4 py-2">1000</td></tr>
                <tr><td className="px-4 py-2 border-r border-slate-100">One-Way Violation</td><td className="px-4 py-2">500 - 1000</td></tr>
                <tr className="bg-slate-50/50"><td className="px-4 py-2 border-r border-slate-100">No License</td><td className="px-4 py-2">1000 - 2000</td></tr>
                <tr><td className="px-4 py-2 border-r border-slate-100">Fake Number Plate</td><td className="px-4 py-2">2000 - 5000</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Dynamic Inner Simulated Blog Feed Grid from image_6e8df5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="bg-white border rounded p-4 shadow-sm text-center space-y-2">
            <div className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase inline-block">Govt Update</div>
            <h4 className="font-bold text-xs text-slate-800 line-clamp-2">Punjab govt hikes stamp paper fees from Jan 2026</h4>
          </div>
          <div className="bg-white border rounded p-4 shadow-sm text-center space-y-2">
            <div className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase inline-block">Breaking News</div>
            <h4 className="font-bold text-xs text-slate-800 line-clamp-2">Sindh Launches E-Challan Helpline in 2026 for traffic management</h4>
          </div>
          <div className="bg-white border rounded p-4 shadow-sm text-center space-y-2">
            <div className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase inline-block">Verification</div>
            <h4 className="font-bold text-xs text-slate-800 line-clamp-2">Punjab e-Stamp Paper (32-A) – Online Challan, Verification & Print</h4>
          </div>
        </div>

        {/* How E-Challan System Works Banner Header */}
        <div className="space-y-4">
          <div className="bg-[#1b4b8f] text-white text-center text-sm font-bold uppercase tracking-wider py-2 rounded shadow-sm">
            How the E-Challan System Works
          </div>
          {/* Asli Banner Container for Urdu Notice */}
          <div className="w-full bg-white border border-slate-200 rounded p-2 shadow-inner">
            <img src="/images/urdu-notice-banner.png" alt="E-Challan Urdu Notice System" className="w-full h-auto object-contain rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-[11px] text-slate-500 bg-white border border-slate-100 p-4 rounded shadow-sm">
            <p><strong>➔ Violation Detection:</strong> Cameras or police patrols identify offenses like overspeeding, red light crossing, or helmet violations.</p>
            <p><strong>➔ Data Lookup:</strong> All violation details are stored in a secure online database linked to the vehicle.</p>
            <p><strong>➔ Notification:</strong> Vehicle owners can verify fines online. Some may also receive SMS alerts.</p>
            <p><strong>➔ Payment & Verification:</strong> Users can download challans and pay fines through banks or mobile apps.</p>
          </div>
        </div>


        {/* ================= MAP FROM IMAGE 2 (image_6e9121.png) ================= */}
        {/* Regional Checking Guides */}
        <div className="space-y-6">
          <div className="bg-[#1b4b8f] text-white text-center text-sm font-bold uppercase tracking-wider py-2 rounded shadow-sm">
            Step-by-Step Guide How to Check E-Challan
          </div>
          
          <div className="space-y-4 bg-white border border-slate-200 p-6 rounded shadow-sm text-xs md:text-sm leading-relaxed">
            <div>
              <h3 className="font-bold text-[#1b4b8f] text-sm">Checking in Punjab (PSCA E-Challan)</h3>
              <p className="text-slate-500 text-xs my-1">The Punjab Safe Cities Authority (PSCA) manages digital challans for major cities including Lahore, Faisalabad, Rawalpindi, Multan, Sialkot, Gujranwala, Bahawalpur, Gujrat, and Sheikhupura.</p>
              <ul className="pl-4 space-y-1 list-disc text-slate-600 text-xs">
                <li>Visit the official portal echallan.psca.gop.pk.</li>
                <li>Enter your vehicle registration number.</li>
                <li>Optionally, enter your CNIC number.</li>
                <li>Click search.</li>
                <li>Tick on 'I am not a robot'.</li>
                <li>View pending and cleared fines.</li>
                <li>Download challan slips if needed.</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h3 className="font-bold text-[#1b4b8f] text-sm">Checking in Sindh (Karachi & Other Cities)</h3>
              <p className="text-slate-500 text-xs my-1">Sindh Traffic Police provides online challan verification for Karachi, Hyderabad, Sukkur, and nearby areas.</p>
              <ul className="pl-4 space-y-1 list-disc text-slate-600 text-xs">
                <li>Go to the Sindh Police e-challan portal.</li>
                <li>Enter vehicle number or CNIC.</li>
                <li>View violation details.</li>
                <li>Download or save challan slips.</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h3 className="font-bold text-[#1b4b8f] text-sm">Checking in Islamabad</h3>
              <p className="text-slate-500 text-xs my-1">The Islamabad Traffic Police (ITP) portal allows verification of fines without visiting traffic offices.</p>
              <ul className="pl-4 space-y-1 list-disc text-slate-600 text-xs">
                <li>Use vehicle number or CNIC.</li>
                <li>Access complete challan information.</li>
                <li>Download slips for records or payment.</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h3 className="font-bold text-[#1b4b8f] text-sm">Checking in KPK and Balochistan</h3>
              <p className="text-slate-500 text-xs my-1">Cities such as Peshawar, Abbottabad, Swat, Nowshera, and Quetta have adopted online challan systems.</p>
              <ul className="pl-4 space-y-1 list-disc text-slate-600 text-xs">
                <li>Access regional or national E-Challan portals.</li>
                <li>Verify fines.</li>
                <li>Download challan slips.</li>
                <li>Pay through available channels.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile App & SMS Guide Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 p-5 rounded shadow-sm">
            <h3 className="font-bold text-sm text-[#1b4b8f] mb-2">5. Checking E-Challan via Mobile Apps</h3>
            <p className="text-xs text-slate-500 mb-3">Several mobile applications support e-challan inquiries:</p>
            <ul className="text-xs space-y-1 text-slate-600 font-medium pl-3 list-decimal">
              <li>Raasta App (Punjab)</li>
              <li>Islamabad Traffic Police App</li>
              <li>Karachi Traffic Police App</li>
            </ul>
          </div>
          <div className="bg-white border border-slate-200 p-5 rounded shadow-sm">
            <h3 className="font-bold text-sm text-[#1b4b8f] mb-2">6. Checking E-Challan Through SMS</h3>
            <p className="text-xs text-slate-500 leading-normal">
              Some cities offer SMS based services where citizens can send their vehicle details and receive challan updates directly to their mobile number instantly without internet connection.
            </p>
          </div>
        </div>


        {/* ================= MAP FROM IMAGE 3 (image_6e9179.png) ================= */}
        {/* Payment Channels & Authorities Ecosystem */}
        <div className="space-y-4">
          <div className="bg-[#1b4b8f] text-white text-center text-sm font-bold uppercase tracking-wider py-2 rounded shadow-sm">
            Payment Options for E-Challan
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div className="bg-white border p-4 rounded text-center">
              <h5 className="font-bold text-slate-800 mb-1">Bank Branches</h5>
              <p className="text-slate-500 text-[11px]">Bank of Punjab, HBL, UBL, MCB, Meezan, and NBP accept payments.</p>
            </div>
            <div className="bg-white border p-4 rounded text-center">
              <h5 className="font-bold text-slate-800 mb-1">ATM Payments</h5>
              <p className="text-slate-500 text-[11px]">Select Bill Payments ➔ Traffic Challan ➔ Enter number ➔ Pay instantly via 1Link.</p>
            </div>
            <div className="bg-white border p-4 rounded text-center">
              <h5 className="font-bold text-slate-800 mb-1">Mobile Apps</h5>
              <p className="text-slate-500 text-[11px]">EasyPaisa and JazzCash allow instant utility & fine settlements.</p>
            </div>
            <div className="bg-white border p-4 rounded text-center">
              <h5 className="font-bold text-slate-800 mb-1">Internet Banking</h5>
              <p className="text-slate-500 text-[11px]">Pay directly through your bank's secure online internet web portals.</p>
            </div>
          </div>
        </div>

        {/* Authorities Data Blocks */}
        <div className="space-y-4">
          <div className="bg-[#1b4b8f] text-white text-center text-sm font-bold uppercase tracking-wider py-2 rounded shadow-sm">
            Authorities Involved in E-Challan Pakistan
          </div>
          <div className="bg-white border p-5 rounded space-y-4 text-xs md:text-sm">
            <p><strong>• Punjab Safe Cities Authority (PSCA):</strong> PSCA is the main authority behind the e-challan system in Punjab. It operates the Safe City surveillance network and automatically detects violations through high-resolution cameras.</p>
            <p><strong>• City Traffic Police Lahore:</strong> Where Traffic Police collaborates with PSCA to enforce fines across the city. They ensure challans are delivered, collected, and resolved properly.</p>
            <p><strong>• Karachi Traffic Police / Sindh Police:</strong> Sindh Traffic Police works with the Sindh Excise Department to run the e-challan Karachi system.</p>
            <p><strong>• Excise & Taxation Department:</strong> This department handles vehicle registration and maintains updated ownership records.</p>
            <p><strong>• Federal Board of Revenue (FBR):</strong> FBR also uses an e-challan system, but for tax payments – not traffic fines.</p>
          </div>
        </div>


        {/* ================= MAP FROM IMAGE 4 (image_6e91bc.png) ================= */}
        {/* Why Introduced & Violations List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <div className="bg-[#1b4b8f] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">
              Why Was the E-Challan System Introduced?
            </div>
            <ul className="text-xs space-y-1.5 text-slate-600 pl-2">
              <li>• Reduce corruption and cash handling.</li>
              <li>• Ensure transparent camera-based challans.</li>
              <li>• Store every fine in an online database.</li>
              <li>• Make traffic enforcement fast & consistent.</li>
              <li>• Provide easy online challan verification.</li>
              <li>• Improve discipline and road safety.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="bg-[#1b4b8f] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">
              Top Traffic Violations That Lead to E-Challan
            </div>
            <ul className="text-xs space-y-1.5 text-slate-600 pl-2">
              <li>• Signal breaking / Red Light Crossing</li>
              <li>• Over speeding limits</li>
              <li>• Wrong/Illegal lane parking</li>
              <li>• Using mobile phone while driving</li>
              <li>• Driving without a safety helmet</li>
              <li>• Not wearing seatbelt</li>
              <li>• Wrong lane usage</li>
              <li>• Fake/Blurred number plates</li>
              <li>• One-way violations</li>
            </ul>
          </div>
        </div>

        {/* Interactive Accordion Accordion FAQs Block */}
        <div className="space-y-4">
          <div className="bg-[#1b4b8f] text-white text-center text-sm font-bold uppercase tracking-wider py-2 rounded shadow-sm">
            FAQs - Frequently Asked Questions
          </div>
          
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFaq(idx)}
                  className={`w-full text-left px-4 py-3 flex items-center justify-between font-bold text-xs md:text-sm transition-colors ${activeFaq === idx ? 'bg-[#a07828] text-white' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'}`}
                >
                  <span>{faq.q}</span>
                  <span>{activeFaq === idx ? '−' : '+'}</span>
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === idx ? 'max-h-24 border-t' : 'max-h-0'}`}>
                  <p className="p-4 text-xs text-slate-500 bg-white leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Styled Conclusion Section */}
        <div className="space-y-3">
          <div className="bg-[#1b4b8f] text-white text-center text-sm font-bold uppercase tracking-wider py-2 rounded shadow-sm">
            Conclusion
          </div>
          <div className="bg-white border p-5 rounded text-xs md:text-sm text-slate-600 leading-relaxed space-y-2">
            <p>Pakistan's digital E-Challan system has transformed traffic management completely. Now you can:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-medium text-slate-500 pl-2">
              <p>✔ Check challans online seamlessly.</p>
              <p>✔ Verify PSCA Punjab, Karachi, Islamabad & nationwide challans.</p>
              <p>✔ Download duplicate challan slips.</p>
              <p>✔ Pay fines through bank apps, ATMs, JazzCash & EasyPaisa.</p>
              <p>✔ Stay updated with real-time traffic violation information.</p>
            </div>
            <p className="pt-2 text-center text-slate-400 font-semibold italic text-xs border-t border-slate-100 mt-2">
              For fast, secure, and reliable challan checking, simply use our E-Challan Online Checker anytime.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}