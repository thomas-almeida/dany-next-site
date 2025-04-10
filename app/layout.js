import "./globals.css";

export const metadata = {
  title: "Dany Terapia Corporal - Massagem Profissional em São Paulo",
  description: "Massoterapia profissional em São Paulo: massagem relaxante, terapêutica e drenagem linfática. Agende sua sessão com 15% OFF na primeira visita!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
