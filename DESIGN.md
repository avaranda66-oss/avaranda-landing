---
version: alpha
name: A Varanda - Cozinha Afetiva
description: Landing page editorial, afetiva e gastronomica para A Varanda, baseada nos mockups locais e nos assets de historia, cardapio e reserva.
colors:
  primary: "#2B1B12"
  secondary: "#6A4A24"
  tertiary: "#9C6818"
  neutral: "#EFE2C7"
  surface: "#F6ECD5"
  surface-muted: "#E4D0A9"
  surface-strong: "#D0AE77"
  on-surface: "#2B1B12"
  on-muted: "#5A3C1F"
  on-primary: "#FFF8E8"
  border: "#B8945F"
  action: "#4B4A0B"
  action-hover: "#5F5E13"
  gold: "#C89A32"
  ink-soft: "#3C3024"
  photo-overlay: "#1A1009"
typography:
  display-xl:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: 72px
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: 0
  display-lg:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  headline-md:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: 34px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: 0
  headline-sm:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  body-lg:
    fontFamily: "Lora, Georgia, serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-md:
    fontFamily: "Lora, Georgia, serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "Lora, Georgia, serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  label-lg:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: 0.02em
  label-sm:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: 0.04em
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  gutter-mobile: 20px
  gutter-desktop: 56px
  max-width: 1720px
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: 14px
    height: 52px
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: 10px
    height: 36px
  nav-link:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 8px
  story-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 16px
  food-card:
    backgroundColor: "{colors.photo-overlay}"
    textColor: "{colors.on-primary}"
    typography: "{typography.headline-sm}"
    rounded: "{rounded.md}"
    padding: 20px
  service-tile:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 22px
  chapter-accordion:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.md}"
    padding: 16px
  icon-button:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.tertiary}"
    rounded: "{rounded.full}"
    padding: 10px
    size: 44px
---

# A Varanda - DESIGN.md

## Overview

A Varanda deve parecer uma casa de cozinha afetiva com memoria, historia familiar e comida feita para encontro. A direcao visual vem dos mockups em `mockupexample/`: papel antigo, desenho a lapis, gravuras narrativas, serifas classicas, dourado envelhecido, verde oliva profundo nos CTAs e fotos reais de pratos como momentos de desejo.

O site nao deve parecer uma landing page generica de restaurante. Ele deve parecer um livro de familia aberto: editorial, acolhedor, artesanal e ainda assim claro para converter em reserva, eventos, buffet e delivery.

O primeiro viewport precisa deixar evidente a marca A Varanda, a historia de Tarcila e a acao de reservar. A parte visual da marca deve ser percebida imediatamente por logo, retrato, papel texturizado e ilustracoes da varanda.

## Colors

A paleta deve preservar a sensacao de papel envelhecido e tinta artesanal, com cor de acao contida e elegante.

- **Primary / tinta de historia (#2B1B12):** headlines, texto principal e elementos editoriais.
- **Secondary / madeira antiga (#6A4A24):** subtitulos, divisores, detalhes ornamentais e texto secundario.
- **Tertiary / cobre afetivo (#9C6818):** links de descoberta, numeros de capitulos, pequenos destaques e setas.
- **Neutral / pergaminho (#EFE2C7):** fundo principal e respiro das secoes.
- **Surface / papel claro (#F6ECD5):** cards, acordeoes e areas de leitura.
- **Action / oliva reserva (#4B4A0B):** apenas para a acao mais importante da tela, normalmente reservar.
- **Gold (#C89A32):** logo, filetes e brilho pontual; usar pouco para nao competir com as imagens.
- **Photo overlay (#1A1009):** gradiente escuro sobre fotos de pratos para garantir legibilidade.

Evitar branco puro e preto puro. O contraste deve vir de tinta marrom profunda sobre papel claro, e nao de uma interface fria.

## Typography

A tipografia deve reforcar o tom de memoria afetiva e gastronomia artesanal.

- **Display:** serifada expressiva para titulos como "A historia de Tarcila"; deve ser grande, editorial e com pouca quebra de linha.
- **Headlines:** serifadas mais contidas para secoes como "Sabores da Varanda" e "Nossa historia em 7 capitulos".
- **Body:** serifada legivel, com ritmo de leitura calmo. Textos narrativos podem ser curtos, emocionais e concretos.
- **Labels:** serifada em caixa alta moderada para navegacao, botoes e chamadas como "RESERVAR", "VER TODOS" e "CONHECA ESSA HISTORIA".

Nao usar fontes sans como base visual da landing. Sans pode aparecer apenas em detalhes tecnicos invisiveis ou fallback do sistema.

## Layout

O layout principal deve seguir uma composicao editorial com largura maxima ampla no desktop e fluxo vertical claro no mobile.

No desktop, usar uma barra superior horizontal com logo, navegacao e CTA de reserva. O hero deve equilibrar o retrato de Tarcila, o titulo e a ilustracao da fachada/varanda. Logo abaixo, a historia em 7 capitulos deve aparecer como trilha horizontal de cards, seguida por cards fotograficos de sabores e uma faixa de servicos.

No mobile, priorizar leitura e toque: menu no topo, logo central, reserva acessivel, hero com titulo e retrato, capitulos em acordeao e sabores em carrossel horizontal. O CTA final "FAZER RESERVA" pode ser fixo ou fortemente destacado perto do fim da primeira rolagem.

Usar o background `images/background/bg-16-9.png` como textura base ou referencia visual. Fotos do cardapio devem usar os assets em `images/menu/`. Imagens de historia devem vir de `images/story_images/`.

## Elevation & Depth

A profundidade deve parecer fisica e impressa, nao digital. Use bordas finas, sombras muito suaves, textura de papel e overlays fotograficos discretos.

Cards de historia podem ter uma sombra baixa e quente para sugerir papel sobre papel. Cards fotograficos podem usar gradiente escuro apenas na parte do texto. Evitar sombras grandes, glassmorphism, blur decorativo e fundos com gradiente abstrato.

## Shapes

Os cantos devem ser levemente arredondados, normalmente 4px a 8px. O site deve preservar uma sensacao classica e artesanal; formas muito arredondadas deixam a pagina casual demais.

Icon buttons de play, setas e controles de carrossel podem ser circulares. Cards, acordeoes e botoes principais ficam em 8px no maximo, salvo necessidade de pill em microcomponentes.

## Components

**Header:** barra em papel com borda inferior fina, logo em dourado antigo, links serifados e CTA verde oliva com icone de calendario. No mobile, usar menu hamburguer a esquerda, logo central e reserva a direita.

**Hero:** combinacao de retrato de Tarcila, titulo grande, texto curto e ilustracao da varanda. O hero deve parecer narrativo antes de promocional.

**Story chapters:** no desktop, cards horizontais numerados de 01 a 07. No mobile, acordeao vertical com um capitulo aberto por vez, imagem, texto e link "VER CAPITULO COMPLETO".

**Food cards:** fotos reais ou loops de video com overlay escuro, titulo, descricao curta e botao/play. Manter imagens apetitosas, bem iluminadas e com area segura para texto.

**Service tiles:** Reservas, Eventos, Buffet, Experiencias e Delivery devem usar icones lineares em marrom/dourado e texto curto. Sao atalhos de conversao, nao blocos longos de explicacao.

**Primary CTA:** "RESERVAR" ou "FAZER RESERVA" em verde oliva. Deve ser o botao mais contrastante da tela.

**Decorative lines:** filetes, folhas e ornamentos podem separar secoes, mas sempre finos e em baixa intensidade.

## Do's and Don'ts

- Do usar o `DESIGN.md` como fonte de verdade antes de criar novas secoes ou componentes.
- Do manter a marca, a historia de Tarcila e a reserva visiveis no primeiro viewport.
- Do usar os mockups em `mockupexample/` como referencia de hierarquia, composicao e tom.
- Do usar fotos reais do cardapio para gerar desejo, principalmente em "Sabores da Varanda".
- Do preservar legibilidade AA em todos os textos sobre foto com overlay escuro.
- Don't transformar a pagina em um template moderno generico com cards brancos e fonte sans.
- Don't usar roxo, azul neon, gradientes abstratos, glassmorphism ou elementos muito tecnologicos.
- Don't sobrecarregar a tela com ornamentos: eles devem acompanhar a historia, nao dominar.
- Don't inventar novas promessas comerciais sem conteudo validado; manter copy ligada a historia, cardapio, reservas, eventos, buffet e delivery.

## Asset Notes

Assets locais relevantes:

- `images/logo.png`: marca principal em dourado.
- `images/background/bg-16-9.png`: textura de papel/pergaminho.
- `images/story_images/tarcila.png` e `images/story_images/tarcila9x16.png`: retrato da protagonista.
- `images/story_images/story_01.png` a `story_07.png`: capitulos da historia.
- `images/menu/`: fotos de pratos, sobremesas e drinks.
- `animações/`: frames exportados para possiveis loops ou videos curtos de cards.

Antes de implementar, definir quais assets serao imagem estatica, quais serao video/loop e quais precisam de versoes otimizadas para web.

## Implementation Workflow

Usar este arquivo antes de qualquer implementacao visual:

1. Ler o YAML para pegar tokens de cor, tipografia, spacing, radius e componentes.
2. Ler as secoes em Markdown para entender o tom, o layout e as restricoes de marca.
3. Implementar primeiro a estrutura da landing: header, hero, capitulos, sabores, servicos e CTA.
4. Aplicar tokens como variaveis CSS ou tema do framework escolhido.
5. Checar o resultado contra os mocks de `mockupexample/` em desktop e mobile.
6. Rodar `npx --yes @google/design.md lint DESIGN.md` sempre que este arquivo mudar.

Este `DESIGN.md` deve ser atualizado antes do codigo quando uma decisao visual mudar. O codigo deve seguir o arquivo, nao o contrario.
