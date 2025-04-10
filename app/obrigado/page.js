import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'Agendamento Confirmado - Dany Massoterapia',
  description: 'Seu agendamento foi realizado com sucesso. Em breve entraremos em contato para confirmação.',
  keywords: 'confirmação de agendamento, massagem São Paulo, obrigado',
  authors: [{ name: 'Dany Massoterapia' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://seusite.com/obrigado',
    siteName: 'Dany Massoterapia',
    images: [
      {
        url: '/obrigado.png',
        width: 800,
        height: 600,
        alt: 'Agendamento confirmado',
      },
    ],
  },
};

export default function ThankYouPage() {
  return (
    <>
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Dany Massoterapia",
            "image": "/logo.png",
            "priceRange": "R$ 150 - R$ 250",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "R. Cubatão, 193",
              "addressLocality": "Vila Mariana",
              "addressRegion": "SP"
            },
            "telephone": "+5511987871375",
            "url": "https://seusite.com"
          })
        }}
      />

      <header className="flex px-6 py-6 flex-col" role="banner">
        <nav aria-label="Navegação principal">
          <div className="flex justify-start items-center">
            <Image 
              src="/logo.png" 
              alt="Logo Dany Massoterapia"
              width={25}
              height={25}
              className="mr-2 rounded-full"
              loading="lazy"
            />
            <Link href="/" className="text-lg font-semibold" aria-current="page">
              Dany Terapia Corporal
            </Link>
          </div>
        </nav>
      </header>

      <main className="bg-white flex flex-col items-center text-center px-6 py-12 pt-6 rounded-t-2xl border-2 border-slate-300 min-h-screen" role="main">
        <section className="my-6 flex-1">
          <div className="text-4xl font-bold mb-6 flex flex-col items-center">
            <Image 
              src="/obrigado.png" 
              alt="Ilustração de confirmação"
              width={160}
              height={160}
              className="my-4"
              loading="eager"
            />
            <h1 className="text-gray-900">Obrigado pela preferência</h1>
            <h2 className="text-xl mt-4 text-green-500">
              Seu agendamento foi realizado
            </h2>
          </div>
          
          <p className="text-gray-700 text-lg mb-8 font-semibold max-w-2xl mx-auto">
            Em poucos instantes, entraremos em contato para confirmar seu agendamento e passar mais informações. 
            Desde já muito obrigado!
          </p>

          <div className="space-y-4 mb-12 w-full">
            <Link
              href="/"
              className="inline-block w-full bg-green-600 text-white text-lg font-semibold rounded-md px-6 py-3 shadow-md hover:bg-green-700 transition-colors"
              aria-label="Voltar ao início"
            >
              Voltar ao Início
            </Link>
            
            <a
              href="https://wa.me/5511987871375"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-full text-lg font-semibold rounded-md px-6 py-3 shadow-md border border-green-600 hover:bg-green-50 transition-colors"
              aria-label="Tirar dúvidas no WhatsApp"
            >
              Tirar Dúvidas no WhatsApp
              <Image 
                src="/whatsapp.webp" 
                className="w-[30px] ml-1" 
                alt="Ícone do WhatsApp" 
                width={30}
                height={30}
                loading="lazy"
              />
            </a>
          </div>
        </section>

        <footer className="text-center py-6 bg-gray-100 text-gray-600 w-full">
          <p>&copy; {new Date().getFullYear()} Dany Massoterapia. Todos os direitos reservados.</p>
        </footer>
      </main>
    </>
  );
}