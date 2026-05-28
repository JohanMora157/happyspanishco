import type { Metadata, Viewport } from 'next'
import { Nunito, Permanent_Marker } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: '--font-nunito',
  display: 'swap',
})

const permanentMarker = Permanent_Marker({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Happy Spanish | Learn Spanish in Cali, Colombia',
  description: 'A different Spanish school! Personalized one-to-one Spanish lessons, native teachers, flexible schedules, and cultural experiences in Cali, Colombia or online.',
  keywords: ['Spanish lessons', 'Learn Spanish', 'Cali Colombia', 'Spanish school', 'Online Spanish', 'Spanish teacher', 'DELE preparation'],
  authors: [{ name: 'Happy Spanish' }],
  icons: {
    icon: '/logo_happyspanish.png',
  },
  openGraph: {
    title: 'Happy Spanish | Learn Spanish the Happy Way',
    description: 'Personalized Spanish lessons with native teachers in Cali, Colombia or online. Cultural experiences included!',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  themeColor: '#FFD600',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${permanentMarker.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
