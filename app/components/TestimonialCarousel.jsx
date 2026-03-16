'use client';

export default function TestimonialCarousel({ testimonials }) {
  // Duplicamos a lista para criar o efeito de loop infinito sem saltos
  // Usamos 3x para garantir que sempre haja conteúdo preenchendo a tela durante a transição
  const doubledTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Container da Animação */}
      <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
        {doubledTestimonials.map((t, i) => (
          <div 
            key={i} 
            className="w-[300px] md:w-[450px] px-3 flex-shrink-0"
          >
            <div className="bg-slate-50 border-t-4 border-green-500 p-6 rounded-2xl shadow-sm flex flex-col transition-transform hover:scale-[1.02]">
              <div className="flex gap-1 mb-3 text-yellow-500">
                {[...Array(5)].map((_, starIndex) => (
                  <svg key={starIndex} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-lg italic text-szlate-700 mb-4 leading-relaxed flex-grow">
                "{t.text}"
              </p>
              <div className="flex items-center gap-2 mt-auto">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <p className="font-bold text-slate-900">— {t.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gradientes laterais para suavizar a entrada/saída (Efeito de fade) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-33.33%));
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
