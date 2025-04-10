import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';

export const metadata = {
  title: 'Agendamento - Dany Massoterapia',
  description: 'Agende sua sessão de massoterapia em São Paulo com segurança e praticidade. Confirmação imediata via WhatsApp!',
  keywords: 'agendamento massagem, marcar horário massagem, massagem São Paulo',
  authors: [{ name: 'Dany Massoterapia' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://seusite.com/agendamento',
    siteName: 'Dany Massoterapia',
    images: [
      {
        url: '/agendamento.png',
        width: 800,
        height: 600,
        alt: 'Agendamento de massagem',
      },
    ],
  },
};

export default function Schedule() {
  return (
    <>
      <Script
        id="schema-reservation"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Reservation",
            "reservationFor": {
              "@type": "Service",
              "name": "Massoterapia",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Dany Massoterapia",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "R. Cubatão, 193",
                  "addressLocality": "Vila Mariana",
                  "addressRegion": "SP"
                }
              }
            },
            "underName": {
              "@type": "Person",
              "name": "Cliente"
            },
            "bookingTime": new Date().toISOString(),
            "modifiedTime": new Date().toISOString()
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

      <main className="bg-white flex flex-col items-center text-center px-4 py-12 pt-6 rounded-t-2xl border-2 border-slate-300" role="main">
        <section className="my-6" aria-labelledby="main-heading">
          <div className="text-4xl font-bold mb-6 flex justify-center items-center flex-col">
            <Image 
              src="/agendamento.png" 
              alt="Ilustração de calendário de agendamento"
              width={160}
              height={160}
              className="my-4"
              loading="eager"
            />
            <h1 id="main-heading" className="text-gray-900">
              Agende seu horário
            </h1>
          </div>
          <p className="text-gray-700 text-lg mb-8 font-semibold">
            Agende sua sessão de massoterapia com segurança e praticidade. Confirmaremos seu atendimento via WhatsApp!
          </p>
        </section>

        <section className="text-center my-6" aria-labelledby="form-heading">
          <h2 id="form-heading" className="sr-only">Formulário de Agendamento</h2>
          <form 
            className="p-4 text-left max-w-2xl mx-auto" 
            action="/api/agendar" 
            method="POST"
            itemScope 
            itemType="http://schema.org/BookAction"
          >
            <div className="form-group mb-6" itemScope itemType="http://schema.org/Service">
              <label htmlFor="name" className="text-lg block mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Digite seu nome completo"
                required
                className="border w-full p-3 rounded-lg shadow-sm text-lg focus:ring-2 focus:ring-green-500"
                itemProp="customer"
              />
            </div>

            <div className="form-group mb-6">
              <label htmlFor="whatsapp" className="text-lg block mb-2">
                WhatsApp
              </label>
              <input
                type="tel"
                name="whatsapp"
                id="whatsapp"
                placeholder="(11) 99999-9999"
                pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}"
                required
                className="border w-full p-3 rounded-lg shadow-sm text-lg focus:ring-2 focus:ring-green-500"
                itemProp="telephone"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="form-group" itemScope itemType="http://schema.org/ScheduleAction">
                <label htmlFor="intentDate" className="text-lg block mb-2">
                  Data Preferencial
                </label>
                <input
                  type="date"
                  name="intentDate"
                  id="intentDate"
                  required
                  className="border w-full p-3 rounded-lg shadow-sm text-lg focus:ring-2 focus:ring-green-500"
                  itemProp="scheduledTime"
                />
              </div>

              <div className="form-group">
                <label htmlFor="intentHour" className="text-lg block mb-2">
                  Horário Preferencial
                </label>
                <input
                  type="time"
                  name="intentHour"
                  id="intentHour"
                  min="09:00"
                  max="19:00"
                  required
                  className="border w-full p-3 rounded-lg shadow-sm text-lg focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="form-group mb-6">
              <label htmlFor="service" className="text-lg block mb-2">
                Tipo de Atendimento
              </label>
              <select
                name="service"
                id="service"
                required
                className="border w-full p-3 rounded-lg shadow-sm text-lg focus:ring-2 focus:ring-green-500"
                itemProp="eligibleServiceType"
              >
                <option value="">Selecione o serviço</option>
                <option value="Massagem Terapêutica">
                  Massagem Terapêutica - R$ 150,00
                </option>
                <option value="Drenagem Linfática">
                  Drenagem Linfática - R$ 150,00
                </option>
              </select>
            </div>

            <div className="form-group mb-8">
              <label htmlFor="coupon" className="text-lg block mb-2">
                Cupom de Desconto (opcional)
              </label>
              <input
                type="text"
                name="coupon"
                id="coupon"
                placeholder="Ex: DANY15"
                className="border w-full p-3 rounded-lg shadow-sm text-lg focus:ring-2 focus:ring-green-500"
                itemProp="discountCode"
              />
            </div>

            <div className="flex flex-col gap-4">
              <button
                type="submit"
                className="w-full bg-green-600 text-white text-lg font-semibold rounded-lg px-6 py-4 shadow-lg hover:bg-green-700 transition-colors"
                aria-label="Confirmar Agendamento"
                itemProp="potentialAction"
              >
                Confirmar Agendamento
              </button>
              
              <Link
                href="/"
                className="w-full border-2 border-green-600 text-green-600 text-lg font-semibold rounded-lg px-6 py-4 shadow-lg hover:bg-green-50 transition-colors text-center"
                aria-label="Voltar para página inicial"
              >
                Voltar para Página Inicial
              </Link>
            </div>
          </form>
        </section>
      </main>

      <aside className="fixed bottom-6 right-4" aria-label="Atendimento via WhatsApp">
        <a
          href="https://wa.me/5511987871375"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fale conosco pelo WhatsApp"
          itemProp="contactPoint"
          itemScope
          itemType="http://schema.org/ContactPoint"
        >
          <meta itemProp="contactType" content="customer service" />
          <meta itemProp="telephone" content="+5511987871375" />
          <Image 
            src="/whatsapp.webp" 
            alt="Contato via WhatsApp para agendamento"
            width={70}
            height={70}
            className="hover:scale-105 transition-transform"
            priority
          />
        </a>
      </aside>

      <footer className="text-center py-6 bg-gray-100 text-gray-600" role="contentinfo">
        <p>&copy; {new Date().getFullYear()} Dany Massoterapia. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}