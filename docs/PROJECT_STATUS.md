# Project Status

Ultima atualizacao: 2026-05-01.

## Feito

- Criado `DESIGN.md` no formato Google design.md.
- Criada base Next.js + TypeScript.
- Criado CSS global com tokens derivados do `DESIGN.md`.
- Criada landing inicial com header, hero, capitulos, sabores, servicos e reserva.
- Criada documentacao de fonte da verdade e referencias visuais.
- Preparados scripts de validacao em `package.json`.
- Fontes Google sao carregadas por link no layout para preservar fidelidade visual sem depender de download de fonte durante `next build`.

## Base funcional atual

Primeira versao voltada para comparar visualmente com os mockups:

- Desktop: composicao horizontal com logo, navegacao, CTA, retrato, titulo, fachada, capitulos e cards de comida.
- Mobile: topo compacto, hero com retrato, capitulos em acordeao, sabores em carrossel horizontal e CTA fixo.

## Falta para ficar mais perto do mockup

- Ajustar microposicionamento apos screenshots reais.
- Otimizar imagens grandes para web.
- Converter frames de `animações/` em videos curtos ou sprites leves.
- Adicionar links reais de reserva, cardapio, WhatsApp e redes sociais.
- Fazer revisao fina de acessibilidade e contraste.
- Criar deploy na Vercel.

## Proximo ciclo recomendado

1. Rodar o projeto localmente.
2. Tirar screenshots em desktop e mobile.
3. Comparar com `mockupexample/`.
4. Ajustar spacing, tamanho de fonte, crop das imagens e largura dos cards.
