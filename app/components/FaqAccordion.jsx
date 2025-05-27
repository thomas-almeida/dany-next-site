"use client";

import { useState } from 'react';

export default function FaqAccordion() {
  const faqs = [
    {
      question: 'Terapia Corporal é pra mim?',
      answer:
        'Com certeza! A terapia corporal é indicada para quem busca alívio de tensões musculares, melhoria da postura e sensação de bem-estar geral e garantir remover da sua rotina o stress do dia-a-dia, não importa sexo ou idade.',
    },
    {
      question: 'Como funciona o atendimento?',
      answer:
        'Agendamos uma sessão de 30 á 40 minutos em um espaço super aconchegante e de fácil localização. Durante a sessão, conversamos sobre suas necessidades e aplico técnicas de massagem personalizadas.',
    },
    {
      question: 'Quais os horários disponíveis?',
      answer:
        'Atendo de segunda a sábado, das 9h às 16h. Podemos encontrar o melhor horário para você conforme sua rotina.',
    },
    {
      question: 'Qual o valor da sessão?',
      answer:
        'O valor varia entre R$120 e R$250, dependendo da técnica e duração, nos chame no Whatsapp e tire mais dúvidas diretamente comigo! Consulte pacotes promocionais e descontos para pacotes.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" aria-labelledby="perguntas-frequentes" className="w-full py-12">
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
