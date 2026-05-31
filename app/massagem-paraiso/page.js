import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';

export const metadata = {
  title: 'Massagem no Paraíso - SP | Dany Massoterapia',
  description: 'Massagem terapêutica e relaxante no bairro Paraíso, próximo ao metrô Paraíso. Agende sua sessão com a Dany e alivie o estresse.',
  alternates: {
    canonical: 'https://danyterapia.top/massagem-paraiso',
  },
  openGraph: {
    title: 'Massagem no Paraíso - SP | Dany Massoterapia',
    description: 'Massagem relaxante e terapêutica no Paraíso. Agende sua sessão com a Dany.',
    url: 'https://danyterapia.top/massagem-paraiso',
  },
};

export default function MassagemParaiso() {
  return (
    <>
      <Script
        id="schema-local-paraiso"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Dany Massoterapia - Paraíso",
            "image": "/logo.png",
            "priceRange": "R$ 150 - R$ 250",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "R. Cubatão, 193",
              "addressLocality": "Paraíso",
              "addressRegion": "SP",
              "postalCode": "04013-041"
            },
            "telephone": "+5511987871375",
            "url": "https://danyterapia.top/massagem-paraiso",
            "areaServed": "Paraíso",
            "description": "Massoterapia profissional no bairro Paraíso, São Paulo. Massagem relaxante, terapêutica e drenagem linfática."
          })
        }}
      />

      <main className="bg-white">
        <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <Image
              src="/massagem-2.jpg"
              alt="Massagem relaxante no Paraíso"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-8">
              ← Voltar para home
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Massagem no Paraíso
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Atendimento profissional de massoterapia no bairro Paraíso, ao lado da estação Paraíso do metrô.
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Massoterapia no bairro Paraíso, SP</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              O <strong>Paraíso</strong> é um dos bairros mais centrais e bem conectados de São Paulo, abrigando milhares de profissionais e moradores que buscam qualidade de vida. O espaço da <strong>Dany Massoterapia</strong> está estrategicamente localizado na Rua Cubatão, 193, na divisa entre Paraíso e Vila Mariana.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Se você trabalha ou reside no <strong>Paraíso, Vila Mariana, Aclimação ou Cambuci</strong>, pode aproveitar sessões de massagem sem precisar se deslocar para longe. O atendimento é de segunda a sábado, com horários flexíveis para se adaptar à sua rotina.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              A Dany é terapeuta corporal certificada com mais de 10 anos de experiência, pronta para atender você com técnicas de <strong>massagem relaxante, terapêutica e drenagem linfática</strong>.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Serviços oferecidos</h2>
            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/atendimento-2.jpg"
                alt="Sala de massagem no bairro Paraíso"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Massagem Terapêutica</h3>
                <p className="text-slate-600">Alívio de dores musculares, tensão e estresse. Ideal para quem passa o dia sentado ou em pé.</p>
                <p className="text-green-700 font-bold mt-3">30min • R$ 150</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Drenagem Linfática</h3>
                <p className="text-slate-600">Redução de inchaço, eliminação de toxinas e sensação de leveza. Sessão de 40 minutos.</p>
                <p className="text-green-700 font-bold mt-3">40min • R$ 150</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Pacotes Mensais</h3>
                <p className="text-slate-600">Sessões regulares com preços especiais. Cuide do seu corpo todo mês.</p>
                <p className="text-green-700 font-bold mt-3">Consultar</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Localização estratégica</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  O espaço fica na <strong>Rua Cubatão, 193</strong>, a apenas 5 minutos a pé da estação Paraíso do metrô (integração linhas Azul e Verde).
                </p>
                <ul className="space-y-3 text-lg text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">🚇</span>
                    <span><strong>Metrô Paraíso</strong> – 5 min a pé (linhas Azul e Verde)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">🚇</span>
                    <span><strong>Metrô Brigadeiro</strong> – 8 min a pé (linha Verde)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">🚗</span>
                    <span><strong>Carro:</strong> Acesso rápido pela Av. 23 de Maio e Av. Bernardino de Campos</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/massagem-3.jpg"
                  alt="Espaço de massagem perto do metrô Paraíso"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-72 object-cover"
                />
              </div>
            </div>
          </section>

          <section className="text-center bg-blue-50 rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Agende sua massagem no Paraíso</h2>
            <p className="text-lg text-slate-600 mb-8">Transforme seu bem-estar com uma sessão de massagem perto do metrô Paraíso.</p>
            <Link
              href="https://wa.me/5511987871375?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20agendar%20uma%20sess%C3%A3o"
              className="inline-block bg-[#16a34a] text-white text-lg font-bold rounded-xl px-12 py-5 shadow-xl hover:bg-[#13803d] transition-all"
            >
              Agendar Agora pelo WhatsApp
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
