
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from 'next/script';

export const metadata = {
  title: {
    default: 'Dany Massoterapia - Massagem Profissional em São Paulo',
    template: '%s | Dany Massoterapia'
  },
  description: 'Massoterapia profissional em São Paulo: massagem relaxante, terapêutica e drenagem linfática. Agende sua sessão com 15% OFF na primeira visita!',
  keywords: [
    'massagem relaxante',
    'terapia corporal',
    'bem-estar',
    'agendamento online',
    'drenagem linfática',
    'massagem em São Paulo',
    'massoterapeuta',
    'tratamento para dores musculares',
    'relaxamento',
    'saúde e bem-estar'
  ],
  authors: [{ name: 'Dany Massoterapia' }],
  creator: 'Dany Massoterapia',
  publisher: 'Dany Massoterapia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://danyterapiacorporal.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/pt-BR',
    },
  },
  openGraph: {
    title: 'Dany Massoterapia - Massagem Profissional em São Paulo',
    description: 'Massoterapia profissional em São Paulo: massagem relaxante, terapêutica e drenagem linfática. Agende sua sessão com 15% OFF na primeira visita!',
    url: 'https://danyterapiacorporal.vercel.app',
    siteName: 'Dany Massoterapia',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dany Massoterapia - Massagem Profissional',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dany Massoterapia - Massagem Profissional em São Paulo',
    description: 'Massoterapia profissional em São Paulo: massagem relaxante, terapêutica e drenagem linfática.',
    images: ['/twitter-image.jpg'],
    creator: '@danymassoterapia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'Q0zjLFrZMxnyQ0pg7qy-xqrieBim5tK-7itR74qjN0w',
    yandex: 'yandex',
  },
  themeColor: '#16a34a',
  category: 'saúde e bem-estar',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Analytics />
      <head>
        <meta name="google-site-verification" content="Q0zjLFrZMxnyQ0pg7qy-xqrieBim5tK-7itR74qjN0w" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#16a34a" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "uk1j7a0pef");
          `}
        </Script>
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
