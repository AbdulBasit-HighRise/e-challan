import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'PSCA E-Challan Check Online | Punjab Traffic Fine Verification',
  description: 'Check your PSCA traffic e-challan online instantly.',
  icons: {
    icon: '/psca-logo.png', // Agar aap public/images/logo.png wala logo hi browser tab par dikhana chahte hain
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="mesh-bg min-h-screen selection:bg-brand-neon/30 selection:text-white">
        {children}
      </body>
    </html>
  )
}