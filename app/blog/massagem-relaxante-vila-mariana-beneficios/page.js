import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: '5 Benefícios da Massagem Relaxante na Vila Mariana | Dany Massoterapia',
  description: 'Descubra os benefícios da massagem relaxante na Vila Mariana, SP. Alívio do estresse, melhora do sono, redução de dores e mais. Agende sua sessão!',
  alternates: {
    canonical: 'https://danyterapia.top/blog/massagem-relaxante-vila-mariana-beneficios',
  },
  openGraph: {
    title: '5 Benefícios da Massagem Relaxante na Vila Mariana',
    description: 'Descubra os benefícios da massagem relaxante na Vila Mariana.',
    url: 'https://danyterapia.top/blog/massagem-relaxante-vila-mariana-beneficios',
  },
};

export default function BlogMassagemRelaxante() {
  return (
    <>
      <Script
        id="schema-blog-relaxante"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "5 Benefícios da Massagem Relaxante na Vila Mariana",
            "description": "Descubra como a massagem relaxante pode transformar sua saúde e bem-estar na Vila Mariana, SP.",
            "author": {
              "@type": "Person",
              "name": "Dany"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Dany Massoterapia"
            },
            "datePublished": "2026-05-30",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://danyterapia.top/blog/massagem-relaxante-vila-mariana-beneficios"
            }
          })
        }}
      />

      <main className="bg-white">
        <article className="max-w-3xl mx-auto px-6 py-16">
          <Link href="/" className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-8">
            ← Voltar para home
          </Link>

          <header className="mb-12">
            <p className="text-green-600 font-bold mb-2">Blog • 30 maio 2026</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              5 Benefícios da Massagem Relaxante na Vila Mariana
            </h1>
            <p className="text-xl text-slate-600">
              Descubra por que a massagem relaxante é essencial para sua saúde física e mental.
            </p>
          </header>

          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/massagem-3.jpg"
              alt="Massagem relaxante na Vila Mariana"
              width={800}
              height={450}
              className="w-full h-72 object-cover"
              priority
            />
          </div>

          <section className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Se você mora ou trabalha na <strong>Vila Mariana</strong>, sabe como a rotina em São Paulo pode ser estressante. Trânsito, barulho, prazos e responsabilidades acumulam tensão no corpo e na mente. A <strong>massagem relaxante</strong> é uma ferramenta poderosa para combater esses efeitos.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Redução do estresse e ansiedade</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              A massagem relaxante reduz os níveis de cortisol (hormônio do estresse) e aumenta a produção de serotonina e dopamina, os neurotransmissores do bem-estar. Uma única sessão já é capaz de induzir um estado profundo de relaxamento.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Alívio de dores musculares</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Passar horas sentado em frente ao computador ou em pé durante o dia gera pontos de tensão muscular. A massagem relaxante ajuda a liberar esses nós, aliviando dores no pescoço, ombros e lombar — queixas comuns de quem vive na correria de São Paulo.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Melhora da qualidade do sono</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Pessoas que fazem massagem regularmente relatam melhora significativa na qualidade do sono. O relaxamento profundo induzido pela massagem ajuda a regular o ciclo circadiano, facilitando o adormecer e aumentando o tempo de sono profundo.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Estímulo à circulação sanguínea</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Os movimentos da massagem relaxante estimulam o fluxo sanguíneo, melhorando a oxigenação dos tecidos e a nutrição celular. Isso resulta em mais disposição, pele mais saudável e recuperação muscular mais rápida.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Fortalecimento do sistema imunológico</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Estudos mostram que a massagem regular aumenta a atividade dos linfócitos, células de defesa do organismo. Combinado com a redução do estresse, isso fortalece sua imunidade e ajuda a prevenir doenças.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Massagem relaxante na Vila Mariana</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              O espaço da <strong>Dany Massoterapia</strong> fica na Rua Cubatão, 193, na <strong>Vila Mariana</strong>, a poucos minutos do metrô Paraíso. O ambiente é climatizado, limpo e pensado para seu total conforto. As sessões duram de 30 a 40 minutos e são adaptadas às suas necessidades.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Agende sua sessão agora e descubra o poder transformador da massagem relaxante.
            </p>
          </section>

          <div className="text-center bg-green-50 rounded-3xl p-10 mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Agende sua massagem relaxante</h3>
            <p className="text-lg text-slate-600 mb-6">Sessão de 30min • R$ 150 | Vila Mariana, SP</p>
            <Link
              href="https://wa.me/5511987871375?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20agendar%20uma%20sess%C3%A3o"
              className="inline-block bg-[#16a34a] text-white text-lg font-bold rounded-xl px-10 py-4 shadow-xl hover:bg-[#13803d] transition-all"
            >
              Agendar Agora pelo WhatsApp
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
