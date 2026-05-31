import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'Drenagem Linfática: Para que serve e como funciona | Dany Massoterapia',
  description: 'Saiba para que serve a drenagem linfática, como funciona, benefícios e indicações. Técnica profissional na Vila Mariana, SP.',
  alternates: {
    canonical: 'https://danyterapia.top/blog/drenagem-linfatica-para-que-serve',
  },
  openGraph: {
    title: 'Drenagem Linfática: Para que serve e como funciona',
    description: 'Saiba para que serve a drenagem linfática e como funciona.',
    url: 'https://danyterapia.top/blog/drenagem-linfatica-para-que-serve',
  },
};

export default function BlogDrenagem() {
  return (
    <>
      <Script
        id="schema-blog-drenagem"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Drenagem Linfática: Para que serve e como funciona",
            "description": "Guia completo sobre drenagem linfática: benefícios, indicações e como funciona a técnica.",
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
              "@id": "https://danyterapia.top/blog/drenagem-linfatica-para-que-serve"
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
              Drenagem Linfática: Para que serve e como funciona
            </h1>
            <p className="text-xl text-slate-600">
              Guia completo sobre a técnica que ajuda a eliminar toxinas e reduzir inchaços.
            </p>
          </header>

          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/massagem-5.jpg"
              alt="Drenagem linfática profissional"
              width={800}
              height={450}
              className="w-full h-72 object-cover"
              priority
            />
          </div>

          <section className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              A <strong>drenagem linfática</strong> é uma das técnicas de massagem mais procuradas em São Paulo, mas muitas pessoas ainda têm dúvidas sobre o que é, para que serve e como funciona. Neste guia, vamos esclarecer tudo.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">O que é drenagem linfática?</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              A drenagem linfática é uma técnica de massagem manual, suave e rítmica, que estimula o sistema linfático — uma rede de vasos e gânglios responsável por drenar o excesso de líquidos, eliminar toxinas e transportar células de defesa do organismo.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Diferente da massagem tradicional, que trabalha os músculos com pressão mais firme, a drenagem linfática utiliza movimentos leves e lentos que seguem a direção dos vasos linfáticos.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Para que serve?</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              A drenagem linfática serve para:
            </p>
            <ul className="space-y-3 text-lg text-slate-700 mb-6">
              <li className="flex items-start gap-3">• <strong>Reduzir inchaços e retenção de líquidos</strong> — principal benefício e motivo mais comum de procura</li>
              <li className="flex items-start gap-3">• <strong>Eliminar toxinas</strong> — acelera a remoção de resíduos metabólicos do organismo</li>
              <li className="flex items-start gap-3">• <strong>Fortalecer a imunidade</strong> — estimula a produção de linfócitos</li>
              <li className="flex items-start gap-3">• <strong>Melhorar a circulação</strong> — auxilia o retorno venoso e linfático</li>
              <li className="flex items-start gap-3">• <strong>Reduzir a celulite</strong> — como tratamento complementar, ajuda a diminuir o aspecto da pele</li>
              <li className="flex items-start gap-3">• <strong>Promover relaxamento</strong> — os movimentos suaves têm efeito calmante no sistema nervoso</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Como é feita a sessão?</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              A sessão de drenagem linfática dura aproximadamente <strong>40 minutos</strong>. A terapeuta aplica movimentos suaves e repetitivos com as mãos, seguindo o trajeto dos vasos linfáticos — começando pelas áreas de drenagem (pescoço, axilas e virilha) e depois trabalhando os membros e o tronco.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              É importante que a sessão seja feita por um profissional capacitado, pois a pressão excessiva ou movimentos incorretos podem não trazer os resultados esperados.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Drenagem linfática na Vila Mariana</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              O espaço da <strong>Dany Massoterapia</strong> oferece sessões de drenagem linfática na <strong>Vila Mariana</strong>, próximo ao metrô Paraíso. A Dany é terapeuta certificada com mais de 10 anos de experiência, garantindo uma aplicação correta e resultados efetivos.
            </p>
          </section>

          <div className="text-center bg-purple-50 rounded-3xl p-10 mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Agende sua sessão de drenagem linfática</h3>
            <p className="text-lg text-slate-600 mb-6">Sessão de 40min • R$ 150 | Vila Mariana, SP</p>
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
