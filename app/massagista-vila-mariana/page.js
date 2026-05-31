import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';

export const metadata = {
  title: 'Massagista na Vila Mariana - SP | Dany Massoterapia',
  description: 'Massagista profissional na Vila Mariana há mais de 10 anos. Massagem relaxante, terapêutica e drenagem linfática. Agende seu horário!',
  alternates: {
    canonical: 'https://danyterapia.top/massagista-vila-mariana',
  },
  openGraph: {
    title: 'Massagista na Vila Mariana - SP | Dany Massoterapia',
    description: 'Massagista profissional na Vila Mariana há mais de 10 anos. Agende seu horário!',
    url: 'https://danyterapia.top/massagista-vila-mariana',
  },
};

export default function MassagistaVilaMariana() {
  return (
    <>
      <Script
        id="schema-massagista-vm"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Dany Massoterapia - Massagista Vila Mariana",
            "image": "/dany-bg.png",
            "priceRange": "R$ 150 - R$ 250",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "R. Cubatão, 193",
              "addressLocality": "Vila Mariana",
              "addressRegion": "SP",
              "postalCode": "04013-041"
            },
            "telephone": "+5511987871375",
            "url": "https://danyterapia.top/massagista-vila-mariana",
            "areaServed": "Vila Mariana",
            "description": "Massagista profissional na Vila Mariana com 10 anos de experiência em massagem terapêutica, relaxante e drenagem linfática.",
            "founder": {
              "@type": "Person",
              "name": "Dany",
              "description": "Terapeuta corporal certificada com 10 anos de experiência"
            }
          })
        }}
      />

      <main className="bg-white">
        <section className="relative bg-gradient-to-br from-amber-50 to-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-8">
              ← Voltar para home
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Massagista na Vila Mariana
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Mais de 10 anos de experiência em massoterapia. Atendimento acolhedor e profissional perto do metrô Paraíso.
            </p>
            <Link
              href="https://wa.me/5511987871375?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20agendar%20uma%20sess%C3%A3o"
              className="inline-block bg-[#16a34a] text-white text-lg font-bold rounded-xl px-10 py-4 shadow-xl hover:bg-[#13803d] hover:scale-105 transition-all"
            >
              Agendar Agora
            </Link>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Conheça a Dany, sua massagista na Vila Mariana</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <Image
                  src="/dany-bg.png"
                  alt="Dany - Massagista profissional na Vila Mariana"
                  width={280}
                  height={350}
                  className="rounded-2xl shadow-lg w-full object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Olá! Sou a <strong>Dany</strong>, terapeuta corporal certificada e massagista profissional atuando na <strong>Vila Mariana</strong> há mais de 10 anos. Meu objetivo é proporcionar bem-estar e alívio para o seu corpo e mente através de técnicas profissionais de massagem.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Meu espaço na Rua Cubatão, 193 foi pensado para ser um ambiente acolhedor, limpo e tranquilo, onde você pode relaxar completamente e esquecer o estresse do dia a dia.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Atendo homens e mulheres, de segunda a sábado, com horários flexíveis. Cada sessão é personalizada de acordo com a sua necessidade — seja aliviar dores musculares, reduzir inchaço ou simplesmente relaxar.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/massagem-3.jpg"
                alt="Massagista profissional na Vila Mariana"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Especialidades</h2>
            <div className="space-y-4 text-lg text-slate-700">
              <div className="bg-amber-50 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-2">Massagem Terapêutica</h3>
                <p>Indicada para quem sofre com dores musculares, tensão no pescoço e ombros, ou estresse acumulado. Técnica profunda que trabalha pontos de tensão específicos.</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-2">Massagem Relaxante</h3>
                <p>Movimentos suaves e envolventes para induzir um estado profundo de relaxamento. Ideal para reduzir ansiedade e melhorar a qualidade do sono.</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-2">Drenagem Linfática</h3>
                <p>Técnica suave e rítmica que estimula o sistema linfático, reduz inchaços e elimina toxinas do organismo.</p>
              </div>
            </div>
          </section>

          <section className="text-center bg-amber-50 rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Quer marcar uma sessão?</h2>
            <p className="text-lg text-slate-600 mb-8">Entre em contato pelo WhatsApp e agende seu horário com a Dany.</p>
            <Link
              href="https://wa.me/5511987871375?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20agendar%20uma%20sess%C3%A3o"
              className="inline-block bg-[#16a34a] text-white text-lg font-bold rounded-xl px-12 py-5 shadow-xl hover:bg-[#13803d] transition-all"
            >
              Falar com a Dany no WhatsApp
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
