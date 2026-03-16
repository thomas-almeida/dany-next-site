import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import FaqAccordion from './components/FaqAccordion';
import AddressIframe from './components/AddressIframe';
import SpaceCarousel from './components/SpaceCarousel';
import TestimonialCarousel from './components/TestimonialCarousel';

export const metadata = {
  title: 'Dany Massoterapia | Massagem na Vila Mariana e Paraíso - SP',
  description: 'Massoterapia profissional em São Paulo (Vila Mariana e Paraíso). Massagem relaxante, terapêutica e drenagem linfática. Agende sua sessão hoje!',
  keywords: 'massagem relaxante vila mariana, massagem paraíso sp, terapia corporal são paulo, drenagem linfática vila mariana, massoterapeuta sp',
};

const testimonials = [
  {
    name: "Jonas Macedo",
    text: "Já faço massagem com a Dani a muito tempo, e sempre foi muito bom! Ela é uma pessoa muito bacana, simpática."
  },
  {
    name: "Miguel Pereira",
    text: "A Dani é uma pessoa maravilhosa simpática te atende sempre com um belo sorriso no rosto muita atenciosa sem fala do ambiente sempre limpo e aconchegante."
  },
  {
    name: "Elaine Santos",
    text: "Adorei um excelente atendimento, super indico."
  },
  {
    name: "Adriano Silva",
    text: "e o papo flui bem durante a sessão. A massagem é de alta qualidade, ela é muito profissional."
  },
  {
    name: "Luiz Felipe",
    text: "Lugar aconchegante e bem organizado, nota 10"
  }
];

const advantages = [
  {
    icon: "1",
    title: "Agende via WhatsApp",
    description: "Clique nos botões de agendamento e fale diretamente comigo para escolher seu serviço.",
  },
  {
    icon: "2",
    title: "Escolha seu Horário",
    description: "Atendimento de segunda a sábado com horários flexíveis para sua rotina.",
  },
  {
    icon: "3",
    title: "Sinta o Alívio",
    description: "Chegue no horário marcado e desfrute de uma sessão focada no seu bem-estar total.",
  }
]

export default function Home() {
  return (
    <>
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Dany Massoterapia",
            "image": "/logo.png",
            "priceRange": "R$ 150 - R$ 250",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "R. Cubatão, 193",
              "addressLocality": "Vila Mariana",
              "addressRegion": "SP"
            },
            "telephone": "+5511987871375",
            "url": "https://danyterapia.top"
          })
        }}
      />

      <main className="bg-white flex flex-col items-center border-slate-300 relative" role="main">
        {/* Hero Section - Desktop Friendly */}
        <section aria-labelledby="main-heading" className="relative w-full overflow-hidden min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <video
              id="bgVideo"
              autoPlay
              loop
              muted
              playsInline
              poster="/dany-bg.png"
              className="w-full h-full object-cover"
              preload="auto"
            >
              <source src="/backgrounds/bg-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50 lg:bg-black/40"></div>
          </div>

          <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12 text-white">
            <div className="lg:w-2/3 text-left">
              <header className="mb-8" role="banner">
                <nav aria-label="Navegação principal">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/logo-3.png"
                      alt="Logo Dany Massoterapia"
                      width={60}
                      height={60}
                      className="rounded-full shadow-lg"
                      priority
                    />
                    <span className="font-bold text-2xl tracking-tight">Dany Massagem</span>
                  </div>
                </nav>
              </header>

              <h1 id="main-heading" className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8">
                Massagem na Vila Mariana e Paraíso: <span className="text-green-400">Adeus ao Estresse</span>
              </h1>

              <p className="text-xl md:text-2xl mb-10 font-medium leading-relaxed opacity-90 max-w-2xl">
                Aproveite os benefícios da terapia corporal em um lugar aconchegante e de fácil localização em São Paulo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://wa.me/5511987871375" className="inline-block bg-[#16a34a] text-white text-center text-lg font-bold rounded-xl px-10 py-4 shadow-2xl hover:bg-[#13803d] hover:scale-105 transition-all">
                  Agendar Minha Sessão
                </Link>
                <Link href="https://wa.me/5511987871375" className="inline-block border-2 border-white/50 backdrop-blur-sm text-white text-center text-lg font-bold rounded-xl px-10 py-4 hover:bg-white/10 transition-all">
                  Tirar Dúvidas
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex lg:w-1/3 justify-center">
              {/* Espaço para um elemento visual extra no desktop se desejar */}
            </div>
          </div>
        </section>

        <div className="w-full max-w-6xl mx-auto px-6">
          {/* Seção Sobre - Desktop Friendly */}
          <section aria-labelledby="sobre-dany" className="flex flex-col lg:flex-row items-center gap-10 my-24 py-4">
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative p-2 bg-green-50 rounded-3xl shadow-2xl">
                <Image
                  src="/dany-bg.png"
                  className="w-[280px] h-[350px] object-cover rounded-2xl"
                  alt="Dany - Terapeuta profissional"
                  width={280}
                  height={350}
                  loading="lazy"
                />
              </div>
            </div>
            <div itemScope itemType="https://schema.org/Person" className="lg:w-2/3 text-left">
              <h2 id="sobre-dany" className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6" itemProp="name">Muito prazer, sou a Dany!</h2>
              <div className="space-y-4 text-xl text-slate-700 leading-relaxed">
                <p itemProp="description">
                  Você está cansado(a) de conviver com aquela dor persistente no pescoço ou lombar? sei como é frustrante lidar com isso dia após dia.
                </p>
                <p itemProp="description">
                  Sou uma Terapeuta corporal certificada há 10 anos entregando com excelência relaxamento e qualidade de atendimento. Não adie seu bem-estar! Agende agora e sinta o alívio imediato.
                </p>
              </div>
            </div>
          </section>

          {/* Seção Atendimentos - Grid 3 Colunas Desktop */}
          <section aria-labelledby="servicos" className="my-24 w-full text-left">
            <div className="mb-12">
              <h2 id="servicos" className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Atendimentos</h2>
              <p className="text-xl text-slate-600">Serviços que garantem o bem-estar e o relaxamento de uma boa massagem.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="border border-slate-100 rounded-3xl shadow-xl overflow-hidden bg-white flex flex-col" itemScope itemType="https://schema.org/Service">
                <Image src={'/atendimento-4.avif'} className="w-full h-56 object-cover" width={500} height={300} alt="Massagem Terapêutica" />
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900" itemProp="name">Massagem Terapêutica</h3>
                  <div className="flex items-center gap-2 my-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">R$ 150,00</span>
                    <span className="text-slate-400 text-sm">30min</span>
                  </div>
                  <p className="text-lg text-slate-600 mb-8 flex-grow" itemProp="description">Técnica profissional para alívio de dores musculares e melhoria da circulação.</p>
                  <Link href="https://wa.me/5511987871375" className="block w-full bg-[#16a34a] text-white text-center font-bold py-4 rounded-2xl shadow-lg hover:bg-[#13803d] transition-all">Agendar Agora ✅</Link>
                </div>
              </article>

              <article className="border border-slate-100 rounded-3xl shadow-xl overflow-hidden bg-white flex flex-col" itemScope itemType="https://schema.org/Service">
                <Image src={'/atendimento-2.jpg'} className="w-full h-56 object-cover" width={500} height={300} alt="Drenagem Linfática" />
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900" itemProp="name">Drenagem Linfática</h3>
                  <div className="flex items-center gap-2 my-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">R$ 150,00</span>
                    <span className="text-slate-400 text-sm">40min</span>
                  </div>
                  <p className="text-lg text-slate-600 mb-8 flex-grow" itemProp="description">Técnica especializada para redução de inchaços e eliminação de toxinas.</p>
                  <Link href="https://wa.me/5511987871375" className="block w-full bg-[#16a34a] text-white text-center font-bold py-4 rounded-2xl shadow-lg hover:bg-[#13803d] transition-all">Agendar Agora ✅</Link>
                </div>
              </article>

              <article className="border border-slate-100 rounded-3xl shadow-xl overflow-hidden bg-white flex flex-col" itemScope itemType="https://schema.org/Service">
                <Image src={'/atendimento-3.jpg'} className="w-full h-56 object-cover" width={500} height={300} alt="Pacotes Mensais" />
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900" itemProp="name">Pacotes Mensais</h3>
                  <div className="my-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">Consultar</span>
                  </div>
                  <p className="text-lg text-slate-600 mb-8 flex-grow" itemProp="description">Realize mais sessões marcadas durante o mês com melhores condições.</p>
                  <Link href="https://wa.me/5511987871375" className="block w-full border-2 border-green-500 text-green-700 text-center font-bold py-4 rounded-2xl hover:bg-green-50 transition-all">Saiba Mais</Link>
                </div>
              </article>
            </div>
          </section>
        </div>

        {/* Depoimentos - Marquee */}
        <section className="my-24 w-full overflow-hidden bg-slate-50 py-16">
          <div className="max-w-6xl mx-auto px-6 mb-12 text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">+8 anos entregando bem-estar</h2>
            <p className="text-xl text-slate-600 mt-2">Veja o que dizem sobre o atendimento:</p>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </section>

        <div className="w-full max-w-6xl mx-auto px-6">
          {/* Seção Vantagens - Grid 3 Colunas Desktop */}
          <section className="text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 tracking-tight">Sono melhor e postura corrigida em 3 passos:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <article key={index} className="p-10 bg-white border border-slate-100 rounded-3xl shadow-lg relative overflow-hidden group">
                  <span className="absolute -top-4 -right-2 text-8xl font-black italic text-green-500/10 group-hover:scale-110 transition-transform">{advantage.icon}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{advantage.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed relative z-10">{advantage.description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Seção Localização - Desktop Friendly */}
          <section aria-labelledby="localizacao" className="my-24">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-1/2 text-left">
                <h2 id="localizacao" className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Super fácil de chegar!</h2>
                <p className="text-slate-700 text-xl mb-8 leading-relaxed">
                  Espaço aconchegante e de fácil acesso, próximo à estação <b>Paraíso</b> e <b>Brigadeiro</b> da linha <b className='text-blue-500'>Azul</b> do metrô.
                </p>
                <Link href={"https://www.google.com/maps/..."}>
                  <div className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:bg-blue-700 transition-all">
                    Ver no Google Maps
                  </div>
                </Link>
                <div className='mt-12'>
                  <h3 className='text-2xl font-bold text-slate-900'>Ambiente higienizado e climatizado 🌿</h3>
                  <p className='text-slate-600 mt-2 text-lg'>Cada detalhe pensado para o seu total relaxamento.</p>
                </div>
              </div>
              <div className="lg:w-1/2 w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl">
                <AddressIframe />
              </div>
            </div>
            <div className="mt-16">
              <SpaceCarousel />
            </div>
          </section>
        </div>

        {/* CTA Performance Desktop */}
        <section aria-labelledby="cta-performance" className="my-24 w-full relative min-h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/lifestyle.avif')" }}></div>
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          <div className="relative z-10 w-full max-w-4xl mx-auto px-8 py-20 text-center text-white">
            <h3 id="cta-performance" className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Como Terapia Corporal Melhora seu Desempenho?
            </h3>
            <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
              Se livrar de dores e incômodos tem o poder de elevar sua performance profissional e reduzir o estresse, garantindo uma vida muito mais leve.
            </p>
            <Link href="https://wa.me/5511987871375" className="inline-block bg-[#16a34a] text-white text-xl font-bold rounded-2xl px-12 py-5 shadow-2xl hover:bg-[#13803d] transition-all">
              Saiba Como
            </Link>
          </div>
        </section>

        <div className="w-full max-w-4xl mx-auto px-6">
          <FaqAccordion />

          <section aria-labelledby="cta-final" className="my-24 text-center">
            <h3 id="cta-final" className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">Transforme Seu Bem-Estar Hoje!</h3>
            <p className="text-xl mb-10 text-slate-600">Fácil localização e lugar aconchegante esperando por você.</p>
            <Link href="https://wa.me/5511987871375" className="inline-block bg-[#16a34a] text-white text-2xl font-bold rounded-2xl px-16 py-6 shadow-2xl hover:bg-[#13803d] transition-all">
              Agendar Agora ✅
            </Link>
          </section>
        </div>

      </main>

      {/* Script iOS Playback */}
      <script dangerouslySetInnerHTML={{ __html: `(function(){const v=document.getElementById('bgVideo');if(!v)return;const a=()=>{v.play().catch(()=>{const p=()=>{v.play();['click','touchstart','scroll'].forEach(e=>document.removeEventListener(e,p))};['click','touchstart','scroll'].forEach(e=>document.addEventListener(e,p,{once:true}))})};a();document.addEventListener('DOMContentLoaded',a);v.addEventListener('ended',()=>v.play())})()` }} />

      {/* WhatsApp Fixed */}
      <aside className="fixed bottom-10 right-2 z-50">
        <Link href="https://wa.me/5511987871375" target="_blank" rel="noopener noreferrer">
          <Image src="/whatsapp.webp" alt="WhatsApp" width={80} height={80} className="hover:scale-110 transition-transform drop-shadow-2xl" priority />
        </Link>
      </aside>

      <footer className="text-center py-12 bg-slate-50 text-slate-500 border-t border-slate-100" role="contentinfo">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-bold text-slate-900">&copy; {new Date().getFullYear()} Dany Massoterapia. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">Rua Cubatão, 193 - Vila Mariana - São Paulo/SP</p>
          <p className="mt-1 text-xs opacity-60 italic">Imagens ilustrativas. Resultados variam conforme cada organismo.</p>
        </div>
      </footer>
    </>
  );
}
