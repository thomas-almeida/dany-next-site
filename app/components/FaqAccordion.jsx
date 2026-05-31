"use client";

import { useState } from 'react';

export default function FaqAccordion() {
  const faqs = [
    {
      question: 'Massagem terapêutica ou relaxante: qual a diferença?',
      answer:
        'A massagem relaxante usa movimentos suaves e envolventes para induzir relaxamento profundo e reduzir estresse. Já a massagem terapêutica aplica pressão mais firme em pontos específicos para aliviar dores musculares, nódulos e tensões crônicas. Na sua sessão, posso combinar ambas as técnicas conforme sua necessidade.',
    },
    {
      question: 'Como funciona o atendimento?',
      answer:
        'Agendamos uma sessão de 30 a 40 minutos em um espaço super aconchegante e de fácil localização na Vila Mariana. Durante a sessão, conversamos sobre suas necessidades e aplico técnicas de massagem personalizadas para você.',
    },
    {
      question: 'Vocês atendem perto do metrô Paraíso?',
      answer:
        'Sim! Ficamos na Rua Cubatão, 193, a apenas 5 minutos a pé da estação Paraíso do metrô (linhas Azul e Verde). Também estamos próximos da estação Brigadeiro. Localização super fácil e central.',
    },
    {
      question: 'Quais os horários disponíveis?',
      answer:
        'Atendo de segunda a sábado, das 9h às 16h. Podemos encontrar o melhor horário para você conforme sua rotina.',
    },
    {
      question: 'Qual o valor da sessão?',
      answer:
        'O valor varia entre R$150 e R$250, dependendo da técnica e duração. A massagem terapêutica (30min) e a drenagem linfática (40min) custam R$150 cada. Consulte pacotes promocionais e descontos para sessões regulares!',
    },
    {
      question: 'Massagem ajuda a melhorar a postura?',
      answer:
        'Sim! A massagem terapêutica libera músculos encurtados e pontos de tensão que contribuem para a má postura. Combinada com alongamentos e consciência corporal, a massagem regular ajuda a realinhar a postura e reduzir dores causadas por horas sentado(a) em frente ao computador.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" aria-labelledby="perguntas-frequentes" className="w-full px-8 py-12">
      <div className="w-full mx-auto text-center mb-8">
        <h2 id='perguntas-frequentes' className="text-3xl font-bold text-gray-900">Perguntas Frequentes</h2>
      </div>
      <div className="w-full mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-md">
            <button
              onClick={() => toggle(index)}
              className="w-full px-4 py-3 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:rounded-md"
            >
              <span className="text-xl font-medium text-gray-800">{faq.question}</span>
              <span className="text-2xl font-bold text-green-500">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            <div className={`${activeIndex === index ? 'block' : 'hidden'} px-4 py-3 text-gray-700 text-lg text-left`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
