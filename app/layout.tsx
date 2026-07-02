import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'PSCA E-Challan Check Online | Punjab Traffic Fine Verification',
  description: 'Check your PSCA traffic e-challan online instantly.',
  icons: {
    icon: '/psca-logo.png', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 💡 Tip: suppressHydrationWarning ko html aur body dono par safe rehne ke liye lagaya ja sakta hy,
        aur sath hi min-h-screen aur flexbox layout add kar diya hy takay footer bottom par locked rahe.
      */}
      <body 
        className="bg-[#f8fafc] text-slate-800 antialiased pt-20 min-h-screen flex flex-col" 
        suppressHydrationWarning
      >
        <Navbar />
        
        {/* Main wrapper content area ko grow diya hy takay footer neeche push ho aur black gap na aaye */}
        <main className="flex-grow w-full">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}