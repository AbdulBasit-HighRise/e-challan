'use client';

import React, { useState, useEffect } from 'react';

export default function AdModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // 600ms ka delay taaki page load hone ke baad smooth pop-up miley
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      
      {/* Modal Card wrapper */}
      <div className="relative w-full max-w-4xl bg-transparent rounded-2xl overflow-hidden shadow-2xl transition-all scale-100 transform duration-300">
        
        {/* Absolute Close Custom Button Node directly mapping top right control */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-3 md:top-4 md:right-4 bg-black/60 text-white hover:bg-black/90 w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center font-bold text-lg transition-colors border border-white/20 z-10 shadow-md"
          aria-label="Close Announcement"
        >
          ✕
        </button>

        {/* The Exact Downloaded Public Safety App Banner Image Box */}
        <div className="w-full h-full flex items-center justify-center bg-[#143e30]">
          <img
            src="/web-modal.png"
            alt="PSCA Public Safety App Notification Announcement"
            className="w-full h-auto max-h-[85vh] object-contain block select-none"
            loading="eager"
          />
        </div>

      </div>
    </div>
  );
}