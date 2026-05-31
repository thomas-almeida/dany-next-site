import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';

export const metadata = {
  title: 'Massagem na Vila Mariana - SP | Dany Massoterapia',
  description: 'Massagem relaxante e terapêutica na Vila Mariana, próximo ao metrô Paraíso e Brigadeiro. Agende sua sessão com a Dany e elimine o estresse.',
  alternates: {
    canonical: 'https://danyterapia.top/massagem-vila-mariana',
  },
  openGraph: {
    title: 'Massagem na Vila Mariana - SP | Dany Massoterapia',
    description: 'Massagem relaxante e terapêutica na Vila Mariana. Agende sua sessão com a Dany.',
    url: 'https://danyterapia.top/massagem-vila-mariana',
  },
};

export default function MassagemVilaMariana() {
  return (
    <>
      <Script
        id="schema-local-massagem-vm"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Dany Massoterapia - Vila Mariana",
            "image": "/logo.png",
            "priceRange": "R$ 150 - R$ 250",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "R. Cubatão, 193",
              "addressLocality": "Vila Mariana",
              "addressRegion": "SP",
              "postalCode": "04013-041"
            },
            "telephone": "+5511987871375",
            "url": "https://danyterapia.top/massagem-vila-mariana",
            "areaServed": "Vila Mariana",
            "description": "Massoterapia profissional na Vila Mariana, São Paulo. Massagem relaxante, terapêutica e drenagem linfática."
          })
        }}
      />

      <main className="bg-white">
        <section className="relative bg-gradient-to-br from-green-50 to-white py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <Image
              src="/massagem-1.jpg"
              alt="Massagem relaxante na Vila Mariana"
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
              Massagem na Vila Mariana
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Relaxe e cuide do seu corpo sem sair do bairro. Atendimento profissional perto do metrô Paraíso e Brigadeiro.
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Massoterapia perto de você na Vila Mariana</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              A <strong>Vila Mariana</strong> é um dos bairros mais charmosos e bem localizados de São Paulo, e agora você não precisa mais atravessar a cidade para encontrar uma massagem de qualidade. O espaço da <strong>Dany Massoterapia</strong> fica na Rua Cubatão, 193, a poucos minutos do metrô Paraíso e Brigadeiro.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Se você mora ou trabalha na região da <strong>Vila Mariana, Paraíso, Aclimação ou Saúde</strong>, pode aproveitar sessões de massagem relaxante, terapêutica e drenagem linfática em um ambiente pensado para o seu bem-estar.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Com mais de 10 anos de experiência, a Dany oferece um atendimento personalizado, focado em aliviar tensões musculares, melhorar a circulação e proporcionar momentos de relaxamento profundo.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Serviços disponíveis</h2>
            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/atendimento-1.jpg"
                alt="Espaço de massagem na Vila Mariana"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Massagem Terapêutica</h3>
                <p className="text-slate-600">Técnica profissional para alívio de dores musculares, tensão e estresse. Sessão de 30min.</p>
                <p className="text-green-700 font-bold mt-3">R$ 150</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Drenagem Linfática</h3>
                <p className="text-slate-600">Técnica especializada para redução de inchaços e eliminação de toxinas. Sessão de 40min.</p>
                <p className="text-green-700 font-bold mt-3">R$ 150</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Pacotes Mensais</h3>
                <p className="text-slate-600">Mais sessões durante o mês com condições especiais. Consulte valores.</p>
                <p className="text-green-700 font-bold mt-3">Consultar</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Como chegar</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  O espaço fica na <strong>Rua Cubatão, 193 – Vila Mariana</strong>, próximo ao cruzamento com a Av. Bernardino de Campos.
                </p>
                <ul className="space-y-3 text-lg text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">🚇</span>
                    <span><strong>Metrô:</strong> Estaçao Paraíso (linhas Azul e Verde) – 5 min a pé. Estação Brigadeiro (linha Verde) – 8 min a pé.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">🚌</span>
                    <span><strong>Ônibus:</strong> Diversas linhas passam pela Av. Bernardino de Campos e Av. 23 de Maio.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">🚗</span>
                    <span><strong>Carro:</strong> Fácil acesso pela Av. 23 de Maio. Estacionamento rotativo nas ruas próximas.</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/massagem-2.jpg"
                  alt="Ambiente de massagem relaxante na Vila Mariana"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-72 object-cover"
                />
              </div>
            </div>
          </section>

          <section className="text-center bg-green-50 rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Pronto para relaxar?</h2>
            <p className="text-lg text-slate-600 mb-8">Agende sua massagem na Vila Mariana e descubra o bem-estar que você merece.</p>
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
