import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'H.O.P.E Live Agency | Premium TikTok LIVE Creator Management',
  description: 'Helping Other People Elevate. Join the premier TikTok LIVE creator agency. Get expert training, premium tools, dedicated support, and exclusive opportunities to grow your LIVE streaming career.',
  keywords: 'TikTok LIVE, creator agency, live streaming, content creator, TikTok management, creator support, live training',
  authors: [{ name: 'H.O.P.E Live Agency' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hopeliveagency.com',
    siteName: 'H.O.P.E Live Agency',
    title: 'H.O.P.E Live Agency | Premium TikTok LIVE Creator Management',
    description: 'Helping Other People Elevate. Join the premier TikTok LIVE creator agency.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'H.O.P.E Live Agency',
    description: 'Premium TikTok LIVE creator management and support',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" async />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
