import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import FaqAccordion from './components/FaqAccordion';
import AddressIframe from './components/AddressIframe';

export const metadata = {
  title: 'Dany Massoterapia - Massagem Profissional em São Paulo',
  description: 'Massoterapia profissional em São Paulo: massagem relaxante, terapêutica e drenagem linfática. Agende sua sessão com 15% OFF na primeira visita!',
  keywords: 'massagem relaxante, terapia corporal, bem-estar, agendamento online, drenagem linfática',
  authors: [{ name: 'Dany Massoterapia' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://seusite.com',
    siteName: 'Dany Massoterapia',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Dany Massoterapia',
      },
    ],
  },
};

const testimonials = [
  {
    name: "Jonas Macedo",
    text: "Já faço massagem com a Dani a muito tempo, e sempre foi muito bom! Ela é uma pessoa muito bacana, simpática, e o papo flui bem durante a sessão. A massagem é de alta qualidade, ela é muito profissional."
  },
  {
    name: "Miguel Pereira",
    text: "A Dani é uma pessoa maravilhosa simpática te atende sempre com um belo sorriso no rosto muita atenciosa sem fala do ambiente sempre limpo e aconchegante."
  },
  {
    name: "Elaine Santos",
    text: "Adorei um excelente atendimento, super indico."
  }
];

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
            "url": "https://seusite.com"
          })
        }}
      />

      <header className="flex px-6 py-6 flex-col" role="banner">
        <nav aria-label="Navegação principal">
          <div className="flex justify-start items-center">
            <Image
              src="/memoji-2.png"
              alt="Logo Dany Massoterapia"
              width={50}
              height={60}
              className="mr-2 rounded-full p-1 border-1 border-slate-300 bg-[#40634d35] shadow-xl"
              priority
            />
            <a className="font-semibold text-xl text-slate-400" href="/" aria-current="page">Dany Massagem</a>
          </div>
        </nav>
      </header>

      <main className="lg:px-36 bg-white flex flex-col items-center text-center px-6 py-12 pt-6 border-slate-300 relative" role="main">
        {/* Hero Section */}
        <section aria-labelledby="main-heading" className="my-6 lg:w-[80%] lg:py-12">

          <div className="">
            <div className='relative'>
              <h1 id="main-heading" className="text-gray-900 text-left text-4xl font-bold leading-12 mb-6">
                Transforme <span className="text-slate-500 border-slate-200 px-2 rounded-2xl bg-[#dcdcdc5d] shadow-lg">cansaço</span> em
                <span className="text-green-600 border-slate-200 px-2 mx-1 rounded-2xl bg-[#46ef4f5d] shadow-lg"> bem-estar!</span>, que tal uma sessão ainda hoje?
              </h1>
            </div>

            <p className="text-gray-700 text-xl mb-4 text-left font-medium">
              Aproveite os benefícios da terapia corporal em um lugar aconchegante e de fácil localização,
              agende sua sessão hoje mesmo.
            </p>

            <ul className="flex justify-start items-center gap-2 mb-12 text-white">
              <li className="p-2 border-2 border-purple-100 text-purple-500 bg-[#9645ff27] font-semibold rounded-2xl px-4 shadow-md">Massoterapia</li>
              <li className="p-2 border-2 border-green-100 text-green-600 bg-[#10a63d31] font-semibold rounded-2xl px-4 shadow-md">Massagem</li>
              <li className="p-2 border-2 border-pink-100 text-pink-500 bg-[#f7399b2d] font-semibold rounded-2xl shadow-md">SPA</li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="lg:flex justify-center items-center lg:gap-2 lg:space-y-0">
            <Link href={"https://wa.me/5511987871375"}>
              <button
                className="my-2 cursor-pointer inline-block w-full bg-[#16a34a] text-white text-lg font-semibold rounded-md px-6 py-3 shadow-xl transition-colors hover:bg-[#13803d]"
                aria-label="Agendar Minha Sessão">
                Agendar Minha Sessão <span className="inline-block">✅</span>
              </button>
            </Link>

            <Link href={"https://wa.me/5511987871375"}>
              <button
                className="my-2 cursor-pointer flex justify-center items-center w-full text-lg font-semibold rounded-md px-6 py-3 shadow transition-colors border border-[#16a34a] hover:bg-green-50"
                aria-label="Tirar Dúvidas no WhatsApp"
                target="_blank"
                rel="noopener noreferrer">
                <p>Tire Dúvidas no WhatsApp</p>
                <Image
                  src="/whatsapp.webp"
                  className="w-[30px] ml-1"
                  alt="Ícone do WhatsApp"
                  width={30}
                  height={30}
                  loading="lazy"
                />
              </button>
            </Link>
          </div>
        </section>

        {/* Seção Sobre */}
        <section aria-labelledby="sobre-dany" className="text-center my-12 px-4 py-4 shadow-xl border-slate-200 border-1 bg-[#fedced80] rounded-xl">
          <div className="relative px-0 my-4 flex justify-start items-center">
            <Image
              src="/icone-servico-2.png"
              className="absolute bottom-0"
              alt="Ícone de massagem"
              width={40}
              height={40}
              loading="lazy"
            />
            <Image
              src="/dany-bg.png"
              className="w-[120px] h-[120px] object-cover rounded-xl shadow-xl"
              alt="Dany - Terapeuta profissional"
              width={120}
              height={120}
              loading="lazy"
            />
          </div>
          <div itemScope itemType="https://schema.org/Person" className='text-left'>
            <h2 id="sobre-dany" className="text-2xl font-bold text-slate-900" itemProp="name">Muito prazer, sou a Dany!</h2>
            <p className="text-xl py-2 font-medium text-slate-800" itemProp="description">
              Terapeuta corporal há <span className="text-green-600 border-slate-200 px-2 mx-1 rounded-2xl bg-[#46ef4f5d] shadow-lg"> +7 anos!</span>, garanta relaxamento e qualidade de atendimento em que entende do
              assunto.
            </p>
          </div>
        </section>

        {/* Seção Depoimentos */}
        <section className="my-12">

          <div className='flex justify-start items-baseline gap-2'>
            <b className='text-2xl'>⭐</b>
            <h2 id="depoimentos" className="text-left text-2xl font-bold text-slate-900 mb-6" itemProp="name">Alguns dos meus clientes satisfeitos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="p-4 w-full border-2 border-slate-400 rounded-md shadow-lg"
                itemScope
                itemType="https://schema.org/Review"
                role="article"
              >
                <div className="flex justify-start items-center text-left mb-4">
                  <img src="/google-logo.png" className='w-6 mr-2' alt="" />
                  <h3 className="text-xl font-bold" itemProp="author">{testimonial.name}</h3>
                </div>
                <blockquote>
                  <p className="text-left" itemProp="reviewBody">{testimonial.text}</p>
                </blockquote>
              </article>
            ))}
          </div>
          <div className='flex justify-center items-center pt-6'>
            <p className="text-slate-400 text-center">Depoimentos reais do Google</p>
            <img src="/google-logo.png" className='w-4 ml-2' alt="" />
          </div>
        </section>

        {/* Seção Localização */}
        <section aria-labelledby="localizacao" className="my-16 text-center w-full">
          <div className="text-left">
            <div className='flex justify-start items-center gap-2'>
              <Image
                src="/icone-2-local-da-massagem.png"
                alt="Ícone de localização"
                width={80}
                height={80}
                className="mb-4"
                loading="lazy"
              />
              <h2 id="localizacao" className="text-left text-4xl font-bold text-gray-900 mb-2">O Local</h2>
            </div>
            <p className="text-gray-700 text-xl mb-4">
              Espaço aconchegante e de fácil acesso, próximo à estação <b>Paraíso</b> e <b>Brigadeiro</b> da linha <b className='text-blue-500'>Azul</b> do metrô.
            </p>

            <AddressIframe />

            <Link href={"https://www.google.com/maps/place/R.+Cubat%C3%A3o,+193+-+Vila+Mariana,+S%C3%A3o+Paulo+-+SP,+04013-040/@-23.5737954,-46.6471528,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5996e55e19fd:0xc46101fed2a6f45e!8m2!3d-23.5738003!4d-46.6445725!16s%2Fg%2F11q2nk_qp2?entry=ttu&g_ep=EgoyMDI1MDQwOC4wIKXMDSoASAFQAw%3D%3D"}>
              <address
                className="w-full flex justify-center items-center text-blue-600 hover:text-blue-800 text-xl font-semibold border-2 border-blue-500 px-6 py-4 my-4 rounded-md shadow-md"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <span className="flex justify-center items-center">
                  <Image
                    src="/google-maps.svg"
                    className="w-[20px] mr-2"
                    alt=""
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                  <span itemProp="streetAddress">Saiba Como Chegar</span>
                </span>
              </address>
            </Link>
          </div>

          <div className='text-left mt-12'>
            <h3 className='text-2xl font-semibold'>Pensado no seu bem-estar, um espaço aconchegante esperando por você! 🌿</h3>
          </div>

          <div className="mt-6 flex gap-4 overflow-x-auto snap-x" role="group" aria-label="Fotos do espaço">
            {[1, 2, 3].map((item) => (
              <Image
                key={item}
                src="/espaco-de-massagem.png"
                alt="Interior do espaço de massagem"
                className="snap-start flex-shrink-0 shadow-sm h-[450px] w-[90vw]"
                width={600}
                height={450}
                loading="lazy"
              />
            ))}
          </div>
        </section>

        {/* Seção Serviços */}
        <section aria-labelledby="servicos" className="mt-16 w-full">
          <div className="text-left">
            <div className='flex justify-start items-center gap-2'>
              <Image
                src="/icone-3-servicos.png"
                alt="Ícone de serviços"
                width={100}
                height={80}
                loading="lazy"
              />
              <h2 id="servicos" className="text-4xl font-bold text-gray-900 mb-2">Atendimentos</h2>
            </div>
            <p className='text-xl'>Serviços que garantem o bem-estar e o relaxamento de uma boa massagem</p>
          </div>

          <div className="my-8 space-y-6">
            {/* Massagem Terapêutica */}
            <article className="border-2 border-slate-300 rounded-md shadow-md text-left p-8" itemScope itemType="https://schema.org/Service">
              <Image
                src="/icone-servico-1.png"
                className="border border-slate-400 p-2 rounded-lg mb-2"
                alt="Ícone massagem terapêutica"
                width={50}
                height={50}
                loading="lazy"
              />
              <h3 className="text-2xl font-bold" itemProp="name">Massagem Terapêutica</h3>
              <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <meta itemProp="priceCurrency" content="BRL" />
                <p className="p-2 px-4 shadow-md border-slate-300 border-2 rounded-lg my-2 text-2xl" itemProp="price"><b className='text-green-700 font-semibold'>R$</b> 150,00 - <time itemProp="eligibleDuration" dateTime="PT30M">30min</time></p>
              </div>
              <div className="my-4">
                <p className="text-lg" itemProp="description">
                  Técnica profissional para alívio de dores musculares e melhoria da circulação sanguínea
                </p>
              </div>
              <a href="https://wa.me/5511987871375" className="inline-block w-full bg-[#16a34a] text-white text-lg font-semibold rounded-md px-6 py-3 shadow hover:bg-[#13803d] text-center">
                Agendar Sessão ✅
              </a>
            </article>

            {/* Drenagem Linfática */}
            <article className="border-2 border-slate-300 rounded-md shadow-md text-left p-8" itemScope itemType="https://schema.org/Service">
              <Image
                src="/icone-servico-2.png"
                className="border border-slate-400 p-2 rounded-lg mb-2"
                alt="Ícone drenagem linfática"
                width={50}
                height={50}
                loading="lazy"
              />
              <h3 className="text-2xl font-bold" itemProp="name">Drenagem Linfática</h3>
              <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <meta itemProp="priceCurrency" content="BRL" />
                <p className="p-2 px-4 shadow-md border-slate-300 border-2 rounded-lg my-2 text-2xl" itemProp="price"><b className='text-green-700 font-semibold'>R$</b> 150,00 - <time itemProp="eligibleDuration" dateTime="PT40M">40min</time></p>
              </div>
              <div className="my-4">
                <p className="text-lg" itemProp="description">
                  Técnica especializada para redução de inchaços e eliminação de toxinas
                </p>
              </div>
              <a href="https://wa.me/5511987871375" className="inline-block w-full bg-[#16a34a] text-white text-lg font-semibold rounded-md px-6 py-3 shadow hover:bg-[#13803d] text-center">
                Agendar Sessão ✅
              </a>
            </article>

            {/* Pacotes */}
            <article className="border-2 border-slate-300 rounded-md shadow-md text-left p-8" itemScope itemType="https://schema.org/Service">
              <Image
                src="/icone-servico-2.png"
                className="border border-slate-400 p-2 rounded-lg mb-2"
                alt="Ícone pacotes"
                width={50}
                height={50}
                loading="lazy"
              />
              <h3 className="text-2xl font-bold" itemProp="name">Pacotes Mensais</h3>
              <div className="my-4">
                <p className="text-lg" itemProp="description">
                  Realize mais sessões marcadas durante o mês, no seu horário e com melhores preços.
                </p>
              </div>
              <a
                href="https://wa.me/5511987871375"
                className="flex justify-center items-center w-full border border-[#16a34a] text-lg font-semibold rounded-md px-6 py-3 shadow hover:bg-green-50"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saiba Mais no WhatsApp
                <Image
                  src="/whatsapp.webp"
                  className="w-[25px] ml-1"
                  alt=""
                  width={25}
                  height={25}
                  loading="lazy"
                />
              </a>
            </article>
          </div>
        </section>

        {/*FAQ*/}
        <FaqAccordion />

        {/* CTA Final */}
        <section aria-labelledby="cta-final" className="my-20 text-center w-full">
          <h3 id="cta-final" className="text-2xl font-bold mb-4">Transforme Seu Bem-Estar Hoje Mesmo!</h3>
          <p className="text-lg mb-8">Agende sua sessão hoje mesmo, fácil localização e lugar aconchegante.</p>
          <a
            href="https://wa.me/5511987871375"
            className="inline-block w-full bg-[#16a34a] text-white text-lg font-semibold rounded-md px-6 py-3 shadow hover:bg-[#13803d]"
          >
            Quero Minha Massagem Hoje 🧖‍♀️
          </a>
        </section>

      </main>

      {/* WhatsApp Fixed */}
      <aside className="fixed bottom-6 right-4" aria-label="Atendimento via WhatsApp">
        <a
          href="https://wa.me/5511987871375"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fale conosco pelo WhatsApp"
        >
          <Image
            src="/whatsapp.webp"
            alt="Botão do WhatsApp"
            width={70}
            height={70}
            className="hover:scale-105 transition-transform"
            priority
          />
        </a>
      </aside>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-100 text-gray-600" role="contentinfo">
        <p>&copy; {new Date().getFullYear()} Dany Massoterapia. Todos os direitos reservados.</p>
        <p className="mt-2 text-sm">
          CNPJ: 12.345.678/0001-00 | São Paulo/SP
        </p>
      </footer>
    </>
  );
}