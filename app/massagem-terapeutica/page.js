import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';

export const metadata = {
  title: 'Massagem Terapêutica na Vila Mariana | Dany Massoterapia',
  description: 'Massagem terapêutica para alívio de dores musculares, tensão e estresse. Atendimento profissional na Vila Mariana, SP. Agende sua sessão!',
  alternates: {
    canonical: 'https://danyterapia.top/massagem-terapeutica',
  },
  openGraph: {
    title: 'Massagem Terapêutica na Vila Mariana | Dany Massoterapia',
    description: 'Massagem terapêutica para alívio de dores musculares na Vila Mariana. Agende sua sessão!',
    url: 'https://danyterapia.top/massagem-terapeutica',
  },
};

export default function MassagemTerapeutica() {
  return (
    <>
      <Script
        id="schema-service-terapeutica"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Massagem Terapêutica - Dany Massoterapia",
            "description": "Sessão de massagem terapêutica para alívio de dores musculares, tensão e estresse. Técnica profissional personalizada.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Dany Massoterapia",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "R. Cubatão, 193",
                "addressLocality": "Vila Mariana",
                "addressRegion": "SP"
              },
              "telephone": "+5511987871375"
            },
            "offers": {
              "@type": "Offer",
              "price": "150",
              "priceCurrency": "BRL",
              "description": "Sessão de 30 minutos de massagem terapêutica"
            },
            "areaServed": ["Vila Mariana", "Paraíso", "São Paulo"]
          })
        }}
      />

      <main className="bg-white">
        <section className="relative bg-gradient-to-br from-green-50 to-white py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <Image
              src="/massagem-4.jpg"
              alt="Massagem terapêutica profissional"
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
              Massagem Terapêutica
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Alívio profissional para dores musculares, tensão e estresse. Sessão personalizada na Vila Mariana.
            </p>
            <Link
              href="https://wa.me/5511987871375?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20agendar%20uma%20sess%C3%A3o"
              className="inline-block bg-[#16a34a] text-white text-lg font-bold rounded-xl px-10 py-4 shadow-xl hover:bg-[#13803d] hover:scale-105 transition-all"
            >
              Agendar Sessão
            </Link>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <section className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">O que é a massagem terapêutica?</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  A <strong>massagem terapêutica</strong> é uma técnica de manipulação dos tecidos moles do corpo (músculos, tendões e ligamentos) com foco no alívio de dores, redução de tensão muscular e melhora da circulação sanguínea.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Diferente da massagem relaxante tradicional, a abordagem terapêutica trabalha pontos específicos de tensão, utilizando pressão moderada a firme para desfazer nódulos musculares e restaurar a funcionalidade dos tecidos.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Cada sessão de 30 minutos é adaptada às suas necessidades — seja dor na lombar, tensão no pescoço e ombros, ou simplesmente a necessidade de descomprimir após uma semana estressante.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/atendimento-1.jpg"
                  alt="Sessão de massagem terapêutica"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-72 object-cover"
                />
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Benefícios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-green-100 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-2">💪 Alívio de dores musculares</h3>
                <p className="text-slate-600">Reduz tensões acumuladas e alivia dores crônicas nas costas, pescoço e ombros.</p>
              </div>
              <div className="bg-white border border-green-100 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-2">🔄 Melhora da circulação</h3>
                <p className="text-slate-600">Estimula o fluxo sanguíneo, levando mais oxigênio e nutrientes para os músculos.</p>
              </div>
              <div className="bg-white border border-green-100 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-2">😌 Redução do estresse</h3>
                <p className="text-slate-600">Diminui os níveis de cortisol e promove sensação profunda de relaxamento.</p>
              </div>
              <div className="bg-white border border-green-100 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-2">🧘 Melhora da postura</h3>
                <p className="text-slate-600">Libera músculos encurtados que contribuem para má postura e desconforto.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Para quem é indicada</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              A massagem terapêutica é indicada para qualquer pessoa que:
            </p>
            <ul className="space-y-3 text-lg text-slate-700">
              <li className="flex items-start gap-3">• Trabalha longas horas sentado(a) e sente dores na lombar ou pescoço</li>
              <li className="flex items-start gap-3">• Sofre de estresse e ansiedade com tensão muscular generalizada</li>
              <li className="flex items-start gap-3">• Pratica atividades físicas e precisa de recuperação muscular</li>
              <li className="flex items-start gap-3">• Busca uma forma natural de aliviar dores sem medicamentos</li>
              <li className="flex items-start gap-3">• Simplesmente quer investir em bem-estar e qualidade de vida</li>
            </ul>
          </section>

          <section className="text-center bg-green-50 rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Agende sua sessão</h2>
            <p className="text-lg text-slate-600 mb-4">Sessão de 30 minutos • R$ 150</p>
            <p className="text-slate-600 mb-8">Atendimento na Vila Mariana, próximo ao metrô Paraíso.</p>
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
