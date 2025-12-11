
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from 'next/script';

export const metadata = {
  title: "Dany Terapia Corporal - Massagem Profissional em São Paulo",
  description: "Massoterapia profissional em São Paulo: massagem relaxante, terapêutica e drenagem linfática. Agende sua sessão com 15% OFF na primeira visita!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Analytics />
      <head>
        <meta name="google-site-verification" content="Q0zjLFrZMxnyQ0pg7qy-xqrieBim5tK-7itR74qjN0w" />
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
