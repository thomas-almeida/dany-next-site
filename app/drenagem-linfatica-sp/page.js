import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';

export const metadata = {
  title: 'Drenagem Linfática na Vila Mariana - SP | Dany Massoterapia',
  description: 'Drenagem linfática profissional na Vila Mariana, SP. Reduza inchaços, elimine toxinas e sinta mais leveza. Agende sua sessão!',
  alternates: {
    canonical: 'https://danyterapia.top/drenagem-linfatica-sp',
  },
  openGraph: {
    title: 'Drenagem Linfática na Vila Mariana - SP | Dany Massoterapia',
    description: 'Drenagem linfática profissional na Vila Mariana. Agende sua sessão!',
    url: 'https://danyterapia.top/drenagem-linfatica-sp',
  },
};

export default function DrenagemLinfatica() {
  return (
    <>
      <Script
        id="schema-service-drenagem"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Drenagem Linfática - Dany Massoterapia",
            "description": "Sessão de drenagem linfática para redução de inchaços, eliminação de toxinas e sensação de leveza. Técnica manual especializada.",
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
              "description": "Sessão de 40 minutos de drenagem linfática manual"
            }
          })
        }}
      />

      <main className="bg-white">
        <section className="relative bg-gradient-to-br from-purple-50 to-white py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <Image
              src="/massagem-5.jpg"
              alt="Drenagem linfática profissional"
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
              Drenagem Linfática
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Técnica especializada para reduzir inchaços, eliminar toxinas e promover sensação de leveza e bem-estar.
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
                <h2 className="text-3xl font-bold text-slate-900 mb-6">O que é drenagem linfática?</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  A <strong>drenagem linfática</strong> é uma técnica de massagem suave e rítmica que estimula o sistema linfático — responsável por eliminar impurezas, toxinas e excesso de líquidos do organismo.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Diferente da massagem tradicional, a drenagem linfática utiliza movimentos leves, lentos e repetitivos que seguem o trajeto dos vasos linfáticos, ajudando o corpo a eliminar naturalmente o que não precisa.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  A sessão dura aproximadamente <strong>40 minutos</strong> e é realizada em um ambiente calmo e climatizado, garantindo o máximo de conforto e resultados.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/atendimento-2.jpg"
                  alt="Sessão de drenagem linfática"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-72 object-cover"
                />
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Benefícios da drenagem linfática</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-purple-100 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-2">💧 Redução de inchaços</h3>
                <p className="text-slate-600">Elimina o excesso de líquidos retidos, reduzindo edemas e sensação de pernas pesadas.</p>
              </div>
              <div className="bg-white border border-purple-100 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-2">🧪 Eliminação de toxinas</h3>
                <p className="text-slate-600">Acelera a remoção de resíduos metabólicos e substâncias nocivas do organismo.</p>
              </div>
              <div className="bg-white border border-purple-100 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-2">🔄 Fortalecimento da imunidade</h3>
                <p className="text-slate-600">Estimula a produção de linfócitos, fortalecendo as defesas naturais do corpo.</p>
              </div>
              <div className="bg-white border border-purple-100 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-2">✨ Melhora da aparência da pele</h3>
                <p className="text-slate-600">A pele fica mais firme, uniforme e com aspecto saudável após as sessões.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Indicações</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              A drenagem linfática é especialmente recomendada para:
            </p>
            <ul className="space-y-3 text-lg text-slate-700">
              <li className="flex items-start gap-3">• Pessoas que sofrem com retenção de líquidos e inchaço frequente</li>
              <li className="flex items-start gap-3">• Quem passa muitas horas em pé ou sentado(a) e tem pernas cansadas</li>
              <li className="flex items-start gap-3">• Auxiliar no pós-operatório de procedimentos estéticos (sob orientação médica)</li>
              <li className="flex items-start gap-3">• Complemento para tratamentos de celulite e gordura localizada</li>
              <li className="flex items-start gap-3">• Qualquer pessoa que busca mais saúde e bem-estar</li>
            </ul>
          </section>

          <section className="text-center bg-purple-50 rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Agende sua sessão</h2>
            <p className="text-lg text-slate-600 mb-4">Sessão de 40 minutos • R$ 150</p>
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
