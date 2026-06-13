import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Апекс казино официальный - Apex casino играть онлайн, вход и регистрация',
  description: 'Апекс казино официальный сайт с лучшими слотами, лайв играми и карточными играми. Вход на Apex casino, регистрация, зеркало. Бонусы до 250% и VIP программа на Апекс казино.',
  keywords: 'Апекс казино, Апекс казино вход, Апекс казино зеркало, Апекс казино играть, Апекс казино официальный, Апекс казино официальный сайт, Апекс казино регистрация, Apex casino, Apex casino вход, Apex casino играть',
  generator: 'v0.app',
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nocache: true,
    noimageindex: false,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  canonicalUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://apexcasino.com',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://apexcasino.com',
    languages: {
      ru: (process.env.NEXT_PUBLIC_SITE_URL || 'https://apexcasino.com') + '/ru',
    },
  },
  openGraph: {
    title: 'Апекс казино онлайн - играть в казино на официальном сайте',
    description: 'Апекс казино официальный сайт с премиум играми и бонусами до 250%',
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://apexcasino.com',
    siteName: 'Апекс казино',
    locale: 'ru_RU',
    images: [
      {
        url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://apexcasino.com') + '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Апекс казино официальный сайт',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Апекс казино официальный',
    description: 'Лучшее казино онлайн с премиум играми и бонусами',
  },
  verification: {
    google: 'google_verification_code_here',
    yandex: 'yandex_verification_code_here',
  },
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://apexcasino.com'

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Casino',
    name: 'Апекс казино',
    alternateName: ['Apex casino', 'Апекс казино', 'Apex казино', 'Apex casino официальный'],
    description: 'Апекс казино официальный сайт. Лучшее казино онлайн с слотами, лайв играми и карточными играми. Играйте на Апекс казино с бонусами до 250%.',
    url: siteUrl,
    image: `${siteUrl}/og-image.png`,
    sameAs: [`${siteUrl}/vhod`, `${siteUrl}/zerkalo`, `${siteUrl}/registracija`],
    offers: {
      '@type': 'Offer',
      description: 'Апекс казино предлагает бонусы до 250% и VIP программа',
    },
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Апекс казино',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'Апекс казино - официальный казино онлайн с лицензией. Лучшие слоты, лайв-игры и бонусы до 250%.',
    sameAs: [
      `${siteUrl}`,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@apexcasino.com',
      availableLanguage: ['ru', 'en'],
    },
  }

  return (
    <html lang="ru" className={`${geistSans.variable} ${geistMono.variable} bg-slate-950`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
