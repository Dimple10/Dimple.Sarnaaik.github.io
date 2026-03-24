import type { Metadata } from 'next'
import { DM_Serif_Display, JetBrains_Mono } from 'next/font/google'
import '@/styles/globals.css'
import Nav from '@/components/Nav'
import CustomCursor from '@/components/CustomCursor'

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dimple Sarnaaik | Astrophysics',
  description:
    'Dimple Sarnaaik — 4th year PhD student at USC studying cosmology and dark matter. Research focuses on constraining dark matter models through gravitational lensing, simulations, and forward modeling.',
  keywords: [
    'dark matter',
    'cosmology',
    'astrophysics',
    'USC',
    'gravitational lensing',
    'Roman Space Telescope',
    'WIMPs',
    'fuzzy dark matter',
    'SIDM',
  ],
  authors: [{ name: 'Dimple Sarnaaik' }],
  openGraph: {
    title: 'Dimple Sarnaaik | Astrophysics',
    description: 'Searching for the invisible scaffolding of the universe.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <CustomCursor />
        <Nav />
        {children}
      </body>
    </html>
  )
}
