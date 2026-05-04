# Contexto do Projeto: Dany Massoterapia

Este documento serve como guia de contexto para futuras manutenções e implementações no site **Dany Massoterapia**.

## 📝 Visão Geral
O site é uma Landing Page de alta conversão para uma profissional de massoterapia e terapia corporal localizada em São Paulo (região da Vila Mariana e Paraíso). O objetivo principal é converter visitantes em agendamentos via WhatsApp, apresentando os serviços, preços, prova social e a estrutura do espaço.

## 🛠️ Stack Técnica
- **Framework:** Next.js 16 (App Router)
- **Biblioteca Base:** React 19
- **Estilização:** Tailwind CSS 4
- **Monitoramento:** Microsoft Clarity (ID: `vwrpgjmkek`) e Vercel Analytics
- **SEO:** Metadata dinâmico, JSON-LD Schemas (LocalBusiness, FAQPage, Product/Reviews)

## 🏗️ Estrutura da Página (`app/page.js`)
A ordem das seções foi otimizada para o funil de vendas (AIDA):
1.  **Hero:** Impacto visual com vídeo de fundo (otimizado para iOS) e CTAs diretos.
2.  **Sobre a Dany:** Conexão humana e autoridade (10 anos de experiência).
3.  **Atendimentos (Serviços):** Cards com preços, duração e descrição clara.
4.  **Depoimentos (Prova Social):** Carrossel infinito automático (estilo Marquee).
5.  **3 Passos:** Explicação do fluxo de agendamento.
6.  **Localização e Espaço:** Mapa interativo e galeria de fotos do consultório.
7.  **FAQ:** Resolução de objeções frequentes.
8.  **CTA Final:** Reforço da oferta para conversão.

## 🚀 Implementações Realizadas (Março 2026)

### 📱 Responsividade & UX
- **Desktop Friendly:** Implementação de containers de largura máxima (`max-w-6xl`) e layouts em grid/colunas para evitar que o site fique "esticado" em telas grandes.
- **SpaceCarousel:** Componente de galeria de fotos usando `scroll-snap` nativo para uma experiência fluida no mobile e setas de navegação no desktop.
- **TestimonialCarousel:** Refatorado para um efeito "Marquee" contínuo e infinito que pausa ao hover/touch.

### 🎥 Performance & Vídeo
- **iOS Autoplay Fix:** Vídeo do Hero configurado com `muted`, `playsInline` e um script de "force-play" disparado por qualquer interação do usuário (scroll, touch, click).
- **LCP Optimization:** Adição de `poster="/dany-bg.png"` ao vídeo do Hero para carregamento instantâneo da imagem de fundo antes do vídeo carregar.

### 🔍 SEO Local & Dados Estruturados
- **Keyword Targeting:** H1 e metadados otimizados para "Vila Mariana", "Paraíso" e "São Paulo".
- **Canonicalization:** Padronização de todas as URLs para `https://danyterapia.top` para evitar conteúdo duplicado.
- **Schemas:** Implementação robusta de JSON-LD para que o Google exiba estrelas de avaliação, FAQ e informações locais diretamente nos resultados de busca.

## 💡 Ideias para Futuras Implementações
- **Blog/Dicas:** Seção de artigos sobre benefícios da massagem para aumentar o tráfego orgânico.
- **Calendário Real:** Integração com alguma ferramenta de agenda para mostrar horários disponíveis antes do WhatsApp.
- **Dark Mode:** Implementação de tema escuro via Tailwind.
- **Página de Obrigado:** Rastreamento de conversão após o clique no botão de WhatsApp para medir ROI.

---
*Este arquivo deve ser lido integralmente ao iniciar uma nova sessão de desenvolvimento.*
