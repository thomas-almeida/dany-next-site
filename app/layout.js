
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

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
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
