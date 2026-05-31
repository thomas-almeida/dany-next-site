import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'Massoterapia para Dores Lombares: Alívio sem Medicamentos | Dany Massoterapia',
  description: 'Massoterapia para alívio de dores lombares em São Paulo. Técnica profissional e natural para eliminar dores nas costas. Agende na Vila Mariana.',
  alternates: {
    canonical: 'https://danyterapia.top/blog/massoterapia-para-dores-lombares',
  },
  openGraph: {
    title: 'Massoterapia para Dores Lombares: Alívio sem Medicamentos',
    description: 'Massoterapia para alívio de dores lombares em São Paulo.',
    url: 'https://danyterapia.top/blog/massoterapia-para-dores-lombares',
  },
};

export default function BlogDoresLombares() {
  return (
    <>
      <Script
        id="schema-blog-lombar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Massoterapia para Dores Lombares: Alívio sem Medicamentos",
            "description": "Guia sobre como a massoterapia pode aliviar dores lombares de forma natural e eficaz.",
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
              "@id": "https://danyterapia.top/blog/massoterapia-para-dores-lombares"
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
              Massoterapia para Dores Lombares: Alívio sem Medicamentos
            </h1>
            <p className="text-xl text-slate-600">
              Como a massagem terapêutica pode eliminar suas dores nas costas de forma natural.
            </p>
          </header>

          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/massagem-4.jpg"
              alt="Massoterapia para alívio de dores lombares"
              width={800}
              height={450}
              className="w-full h-72 object-cover"
              priority
            />
          </div>

          <section className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              A <strong>dor lombar</strong> é uma das queixas mais comuns entre os brasileiros. Segundo a OMS, cerca de 80% da população mundial terá um episódio de dor nas costas ao longo da vida. Se você sofre com esse problema, a <strong>massoterapia</strong> pode ser a solução que você procura.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Por que a lombar dói tanto?</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              A região lombar suporta grande parte do peso do corpo e está envolvida em praticamente todos os movimentos do tronco. As principais causas de dor lombar incluem:
            </p>
            <ul className="space-y-3 text-lg text-slate-700 mb-6">
              <li className="flex items-start gap-3">• Má postura ao sentar, em especial em escritórios e home office</li>
              <li className="flex items-start gap-3">• Sedentarismo e fraqueza muscular</li>
              <li className="flex items-start gap-3">• Tensão e estresse acumulados</li>
              <li className="flex items-start gap-3">• Movimentos repetitivos ou esforço físico inadequado</li>
              <li className="flex items-start gap-3">• Passar longos períodos em pé ou sentado na mesma posição</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Como a massoterapia ajuda</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              A <strong>massagem terapêutica</strong> atua diretamente nos músculos da região lombar, promovendo:
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <strong>Relaxamento muscular:</strong> A pressão aplicada durante a massagem ajuda a liberar pontos de tensão e nódulos musculares que causam dor.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <strong>Aumento da circulação:</strong> O fluxo sanguíneo acelerado leva mais oxigênio e nutrientes para os músculos, acelerando a recuperação.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <strong>Liberação de endorfina:</strong> A massagem estimula a produção de endorfinas, analgésicos naturais do corpo, reduzindo a percepção da dor.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <strong>Melhora da mobilidade:</strong> Com os músculos relaxados, a amplitude de movimento da coluna aumenta, facilitando as atividades do dia a dia.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Massoterapia na Vila Mariana</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Se você mora em São Paulo e sofre com dores lombares, o espaço da <strong>Dany Massoterapia</strong> na <strong>Vila Mariana</strong> oferece sessões de massagem terapêutica focadas no alívio da dor. Com mais de 10 anos de experiência, a Dany sabe exatamente como tratar cada tipo de tensão muscular.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              A sessão de 30 minutos é suficiente para promover um alívio significativo. Para dores crônicas, recomenda-se um pacote de sessões regulares para resultados duradouros.
            </p>
          </section>

          <div className="text-center bg-green-50 rounded-3xl p-10 mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Agende sua massagem terapêutica</h3>
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
