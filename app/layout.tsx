import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import BackToTop from '@/components/ui/BackToTop'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Technogig Software Solution | Digital Engineering & IT Partner',
  description: 'Technogig Software Solution (TSS) — Your Digital Engineering & Technology Partner. We build cutting-edge software, apps, and digital experiences that transform businesses globally.',
  keywords: 'software development, web development, mobile apps, MLM software, CRM, AI ML, DevOps, Faridabad, India',
  openGraph: {
    title: 'Technogig Software Solution | Digital Engineering Partner',
    description: 'Technology + Logic = Let\'s Technogig Your Business',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-dark text-white font-body antialiased">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <Toaster position="top-right" toastOptions={{
          style: { background: '#111118', color: '#fff', border: '1px solid #1E1E2E' }
        }} />
      </body>
    </html>
  )
}
