import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mindful — Understanding Schizophrenia',
  description:
    'A calm, evidence-informed resource to understand schizophrenia, reduce stigma, recognize the signs, and find support and hope.',
  generator: 'v0.app',
  keywords: [
    'schizophrenia',
    'mental health',
    'health promotion',
    'psychosis',
    'stigma',
    'support',
    'recovery',
  ],
  openGraph: {
    title: 'Mindful — Understanding Schizophrenia',
    description:
      'A calm, evidence-informed resource to understand schizophrenia, reduce stigma, and find support.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#4a90a4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
