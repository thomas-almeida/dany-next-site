'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const images = [
  { src: '/espaco-de-massagem.png', alt: 'Nosso espaço de massagem principal' },
  { src: '/spa-1.jpg', alt: 'Ambiente relaxante' },
  { src: '/spa-2.jpg', alt: 'Detalhes do atendimento' },
  { src: '/spa-3.jpg', alt: 'Conforto e bem-estar' },
];

export default function SpaceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  const scrollTo = (index) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: index * clientWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full group">
      {/* Container do Carrossel */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="snap-center shrink-0 w-full aspect-[4/5] md:aspect-video relative rounded-2xl overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 800px"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Indicadores (Dots) */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2.5 transition-all duration-300 rounded-full ${
              activeIndex === index 
                ? 'w-8 bg-green-500' 
                : 'w-2.5 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>

      {/* Setas de navegação (Ocultas em mobile, visíveis em hover no desktop) */}
      <button
        onClick={() => scrollTo(activeIndex - 1)}
        disabled={activeIndex === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 hidden md:block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={() => scrollTo(activeIndex + 1)}
        disabled={activeIndex === images.length - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 hidden md:block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}
