import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'HYLE | Sistemi decisionali per contesti complessi',
  description: 'Sviluppiamo sistemi decisionali per persone e aziende che vogliono fare le cose meglio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <head>
        {/* Google Analytics - Stesso del vecchio sito */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZZWCC7DVNN"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZZWCC7DVNN');
            `,
          }}
        />
        
        {/* Meta tag per mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="fade-in">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
