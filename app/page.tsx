import Navbar from '@/components/Navbar';
import AdModal from '@/components/AdModal'; // Import the new announcement popup modal
import Hero from '@/components/Hero';
import InfoGrid from '@/components/InfoGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1e293b] antialiased relative">
      {/* 1. Global Announcement Pop-up Modal */}
      <AdModal />

      {/* 2. Header Navigation Bar */}
      <Navbar />
      
      {/* 3. Main Input Form Container Section */}
      <Hero />
      
      {/* 4. SEO Comprehensive Guidelines Grid Tables */}
      <InfoGrid />
      
      {/* 5. Complete Corporate Style Legal Footer */}
    </main>
  );
}