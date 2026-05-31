import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';

export const metadata = {
  title: 'Pacotes Mensais de Massagem | Dany Massoterapia',
  description: 'Pacotes mensais de massagem na Vila Mariana, SP. Sessões regulares com preços especiais. Cuide do seu corpo todo mês! Consulte valores.',
  alternates: {
    canonical: 'https://danyterapia.top/pacotes-mensais-massagem',
  },
  openGraph: {
    title: 'Pacotes Mensais de Massagem | Dany Massoterapia',
    description: 'Pacotes mensais de massagem na Vila Mariana. Sessões regulares com preços especiais.',
    url: 'https://danyterapia.top/pacotes-mensais-massagem',
  },
};

export default function PacotesMensais() {
  return (
    <>
      <Script
        id="schema-service-pacotes"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Pacotes Mensais de Massagem - Dany Massoterapia",
            "description": "Pacotes mensais com sessões regulares de massagem terapêutica e drenagem linfática com condições especiais.",
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
              "price": "0",
              "priceCurrency": "BRL",
              "description": "Consulte valores para pacotes mensais personalizados"
            }
          })
        }}
      />

      <main className="bg-white">
        <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <Image
              src="/massagem-1.jpg"
              alt="Pacotes mensais de massagem"
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
              Pacotes Mensais de Massagem
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Cuide do seu corpo com regularidade e economize com pacotes exclusivos de massagem na Vila Mariana.
            </p>
            <Link
              href="https://wa.me/5511987871375?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20agendar%20uma%20sess%C3%A3o"
              className="inline-block bg-[#16a34a] text-white text-lg font-bold rounded-xl px-10 py-4 shadow-xl hover:bg-[#13803d] hover:scale-105 transition-all"
            >
              Consultar Valores
            </Link>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <section className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Por que fazer massagem regularmente?</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  A massagem não deveria ser um luxo ocasional — é um cuidado essencial com a saúde. Assim como você vai ao médico regularmente ou faz exercícios físicos, a <strong>massoterapia regular</strong> traz benefícios cumulativos que transformam sua qualidade de vida.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Com os <strong>pacotes mensais da Dany Massoterapia</strong>, você garante sessões regulares com valores especiais, tornando o cuidado com o corpo um hábito acessível e sustentável.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/atendimento-3.jpg"
                  alt="Sessão de massagem regular"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-72 object-cover"
                />
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Vantagens dos pacotes mensais</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3">💰 Economia</h3>
                <p className="text-slate-600">Valor por sessão significativamente menor comparado à avulsa. Quanto mais sessões, maior o desconto.</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3">📅 Regularidade</h3>
                <p className="text-slate-600">Sessões agendadas no mesmo dia e horário toda semana ou quinzena, criando uma rotina de cuidado.</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🎯 Resultados melhores</h3>
                <p className="text-slate-600">O efeito acumulativo da massagem regular potencializa os benefícios: menos dor, mais relaxamento, melhor postura.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Como funciona</h2>
            <ol className="space-y-4 text-lg text-slate-700">
              <li className="flex items-start gap-3">
                <span className="bg-green-100 text-green-800 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">1</span>
                <span>Entre em contato pelo WhatsApp e diga que tem interesse nos pacotes mensais</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-green-100 text-green-800 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">2</span>
                <span>A Dany vai entender suas necessidades e recomendar a frequência ideal (semanal, quinzenal ou mensal)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-green-100 text-green-800 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">3</span>
                <span>Escolha entre massagem terapêutica, relaxante ou drenagem linfática — ou alterne entre elas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-green-100 text-green-800 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">4</span>
                <span>Comece a cuidar de você com regularidade e sinta a diferença no seu corpo e mente</span>
              </li>
            </ol>
          </section>

          <section className="text-center bg-blue-50 rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Quer saber os valores?</h2>
            <p className="text-lg text-slate-600 mb-8">Consulte os pacotes disponíveis e descubra como é fácil cuidar de você todo mês.</p>
            <Link
              href="https://wa.me/5511987871375?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20agendar%20uma%20sess%C3%A3o"
              className="inline-block bg-[#16a34a] text-white text-lg font-bold rounded-xl px-12 py-5 shadow-xl hover:bg-[#13803d] transition-all"
            >
              Consultar Pacotes pelo WhatsApp
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
