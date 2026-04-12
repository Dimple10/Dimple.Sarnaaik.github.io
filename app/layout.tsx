import type { Metadata } from 'next'
import { DM_Serif_Display, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import '@/styles/globals.css'
import Nav from '@/components/Nav'
import CustomCursor from '@/components/CustomCursor'
import ViewCounter from '@/components/ViewCounter'

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

const SITE_URL = 'https://dimple10.github.io/Dimple.Sarnaaik.github.io'

export const metadata: Metadata = {
  title: 'Dimple Sarnaaik | Astrophysics',
  description:
    'Dimple Sarnaaik — PhD student at USC studying cosmology and dark matter. Research focuses on constraining dark matter models through gravitational lensing, simulations, and forward modeling.',
  keywords: [
    'Dimple Sarnaaik',
    'astrophysics',
    'dark matter',
    'cosmology',
    'USC',
    'University of Southern California',
    'gravitational lensing',
    'Roman Space Telescope',
    'WIMPs',
    'fuzzy dark matter',
    'SIDM',
    'PhD student',
  ],
  authors: [{ name: 'Dimple Sarnaaik' }],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Dimple Sarnaaik | Astrophysics',
    description: 'Searching for the invisible scaffolding of the universe.',
    type: 'website',
    url: SITE_URL,
    siteName: 'Dimple Sarnaaik',
  },
  twitter: {
    card: 'summary',
    title: 'Dimple Sarnaaik | Astrophysics',
    description: 'PhD student at USC. Dark matter, gravitational lensing, cosmological simulations.',
  },
}

// JSON-LD structured data — helps Google show your site for name searches
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dimple Sarnaaik',
  jobTitle: 'PhD Student, Astrophysics',
  description:
    'Astrophysics PhD student at the University of Southern California researching dark matter through gravitational lensing and N-body simulations.',
  affiliation: {
    '@type': 'Organization',
    name: 'University of Southern California',
    url: 'https://www.usc.edu',
  },
  alumniOf: {
    '@type': 'Organization',
    name: 'University of Southern California',
  },
  url: SITE_URL,
  sameAs: [
    'https://github.com/Dimple10',
  ],
  knowsAbout: [
    'Dark Matter',
    'Cosmology',
    'Gravitational Lensing',
    'N-body Simulations',
    'Astrophysics',
    'Forward Modeling',
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <CustomCursor />
        <Nav />
        {children}
        <ViewCounter />

        {/* GoatCounter — privacy-friendly analytics
            Update the data-goatcounter URL to your own GoatCounter site code
            Sign up free at https://www.goatcounter.com/signup */}
        <Script
          data-goatcounter="https://dimple-sarnaaik.goatcounter.com/count"
          src="https://gc.zgo.at/count.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
