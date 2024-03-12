import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StoreProvider from '../lib/StoreProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Search The Best In The World',
  description: `Welcome to SHOPPING-APP!
  Here, you can find all your favorite games, from first-person shooters
  (FPS) to open-world adventures. Whether you're
  looking for a new challenge or just want to relax and explore, we have something for everyone.`,
  applicationName: "GAMING APP"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=0.7" />
      <body className={inter.className}>
        <div id='background'></div>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
