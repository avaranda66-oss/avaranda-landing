// =============================================================================
// CARDÁPIO — A VARANDA
// Edite categorias, itens, preços e descrições aqui. A página /cardapio renderiza
// automaticamente conforme a estrutura abaixo.
//
// Como adicionar um item novo:
//   1. Coloque a foto em public/images/menu/{nome-do-arquivo}
//   2. Adicione um objeto dentro de items[] da categoria correspondente
//   3. Salve. Pronto.
// =============================================================================

export type MenuItem = {
  id: string;
  title: string;
  description: string;
  price: string;            // "$$" enquanto o valor está indefinido
  image: string;            // caminho a partir de /public
  highlight?: boolean;      // marcar como destaque (ganha selo dourado)
  whatsappMessage?: string; // mensagem custom no botão "Quero esse"
};

export type MenuCategory = {
  id: string;       // slug usado na URL (#bebidas, #pratos-principais, etc.)
  label: string;    // texto exibido no nav e título
  intro?: string;   // descrição curta abaixo do título da categoria
  items: MenuItem[];
};

const PRICE_TBD = "$$";

export const menuCategories: MenuCategory[] = [
  {
    id: "buffets-festas",
    label: "Buffets & Festas",
    intro:
      "Para celebrações que merecem mais que um buffet — merecem um chef. Eventos sob curadoria de Tarcila.",
    items: [
      {
        id: "paella-ao-vivo",
        title: "Paella feita ao vivo",
        description:
          "Paella espanhola autêntica, preparada na frente dos convidados — frutos do mar frescos, camarão, polvo, mexilhão e arroz com açafrão finalizado com limão siciliano.",
        price: PRICE_TBD,
        image: "/images/menu/paella.png",
        highlight: true,
      },
      {
        id: "arroz-marisco",
        title: "Arroz de Marisco",
        description:
          "Arroz cremoso com seleção de frutos do mar frescos do dia — clássico português com tempero de Tarcila. Servido na panela para a mesa.",
        price: PRICE_TBD,
        image: "/images/menu/arroz_marisco.png",
        highlight: true,
      },
    ],
  },
  {
    id: "entradas",
    label: "Entradas",
    intro: "Para abrir a mesa com elegância.",
    items: [
      {
        id: "carpaccio",
        title: "Carpaccio com manga e gorgonzola",
        description:
          "Carpaccio fino acompanhado de manga, gorgonzola cremoso e tomate cereja — equilíbrio entre o frutal, o salgado e o cítrico.",
        price: PRICE_TBD,
        image: "/images/menu/carpaccio.png",
        highlight: true,
      },
      {
        id: "tartare-salmao",
        title: "Tartare de Salmão",
        description:
          "Salmão fresco em cubos finos, temperado na hora com cítricos, ervas e azeite — montado à mesa.",
        price: PRICE_TBD,
        image: "/images/menu/tartare_salmao.png",
      },
      {
        id: "sashimi-bahiano",
        title: "Sashimi Bahiano",
        description:
          "Releitura autoral: sashimi fresco com toques baianos — uma fusão criada por Tarcila entre a leveza japonesa e o tempero do Nordeste.",
        price: PRICE_TBD,
        image: "/images/menu/sashimi_bahiano.png",
        highlight: true,
      },
      {
        id: "camarao-grelhado",
        title: "Camarão Grelhado da Tarcila",
        description:
          "Camarões frescos grelhados com tempero autoral, finalizados com toque cítrico e ervas frescas.",
        price: PRICE_TBD,
        image: "/images/menu/camarao_grelhado.png",
      },
      {
        id: "iscas-peixe",
        title: "Iscas de Peixe Crocantes",
        description:
          "Iscas de peixe branco fresco em casquinha crocante, servidas com molho cremoso e limão siciliano.",
        price: PRICE_TBD,
        image: "/images/menu/iscas_peixe.png",
      },
      {
        id: "salada-caprese",
        title: "Salada Caprese",
        description:
          "Tomate, mussarela artesanal de Mirian Nogueira e manjericão fresco — clássico italiano servido com azeite extra virgem e flor de sal.",
        price: PRICE_TBD,
        image: "/images/menu/salada_caprese.png",
      },
      {
        id: "caprese-mirian",
        title: "Caprese de Mirian Nogueira",
        description:
          "Versão especial da casa: tomate cereja confitado e mussarela artesanal de Mirian Nogueira, com pesto fresco e crocante de pão.",
        price: PRICE_TBD,
        image: "/images/menu/caprese_mirian.png",
      },
      {
        id: "tabua-frios",
        title: "Tábua de Frios",
        description:
          "Seleção de queijos artesanais, embutidos finos, azeitonas, frutas frescas e pães crocantes — montada em tábua de madeira.",
        price: PRICE_TBD,
        image: "/images/menu/bobo_camarao.png",
      },
    ],
  },
  {
    id: "pratos-principais",
    label: "Pratos Principais",
    intro: "Receitas que Tarcila trouxe da Bélgica — refeitas com tempero baiano.",
    items: [
      {
        id: "bobo-camarao",
        title: "Bobó de Camarão",
        description:
          "Tradição baiana: camarões em creme de aipim, leite de coco, dendê e temperos frescos. Servido com arroz e farofa.",
        price: PRICE_TBD,
        image: "/images/menu/involtini.png",
        highlight: true,
      },
      {
        id: "salmao-recheado",
        title: "Salmão Recheado com Cream Cheese",
        description:
          "Filé de salmão grelhado, recheado com cream cheese e ervas — finalizado com molho de manteiga cítrica.",
        price: PRICE_TBD,
        image: "/images/menu/salmao_recheado.png",
        highlight: true,
      },
      {
        id: "file-mignon-fritas",
        title: "Filé Mignon com Fritas",
        description:
          "Filé mignon grelhado no ponto pedido, batatas rústicas douradas e finalização com ervas frescas.",
        price: PRICE_TBD,
        image: "/images/menu/file_mignon_fritas.png",
      },
      {
        id: "tropical-felix",
        title: "Tropical Félix",
        description:
          "Criação autoral da casa: abacaxi recheado com camarão, finalizado com ervas frescas. Acompanha arroz.",
        price: PRICE_TBD,
        image: "/images/menu/tropical_felix.png",
        highlight: true,
      },
      {
        id: "pizza",
        title: "Pizza Artesanal",
        description:
          "Massa fermentada artesanalmente, molho de tomate caseiro e mussarela artesanal de Mirian Nogueira. Finalizada com manjericão fresco.",
        price: PRICE_TBD,
        image: "/images/menu/pizza.png",
      },
      {
        id: "pizza-4-queijos",
        title: "Pizza 4 Queijos",
        description:
          "Quatro queijos em equilíbrio: mussarela artesanal de Mirian Nogueira, parmesão, gorgonzola e catupiry. Massa fermentada artesanalmente.",
        price: PRICE_TBD,
        image: "/images/menu/pizza_4_queijos.png",
      },
      {
        id: "calzone",
        title: "Calzone",
        description:
          "Pizza fechada artesanal: queijos derretidos, molho de tomate caseiro e recheio à escolha. Massa fermentada lentamente.",
        price: PRICE_TBD,
        image: "/images/menu/calzone.png",
      },
      {
        id: "crepe-camarao",
        title: "Crepe de Camarão",
        description:
          "Crepe artesanal recheado com camarões frescos em molho cremoso, acompanhado de salada de alface, tomate cereja e cebola roxa.",
        price: PRICE_TBD,
        image: "/images/menu/crepe_camarao.png",
      },
      {
        id: "crepe-frances",
        title: "Crepe Salgado Francês",
        description:
          "Crepe artesanal com frango desfiado, azeitonas, pimentão e molho cremoso. Acompanha salada fresca.",
        price: PRICE_TBD,
        image: "/images/menu/crepe_salgado.jpg",
      },
    ],
  },
  {
    id: "sobremesas",
    label: "Sobremesas",
    intro: "Doces de fechar a noite — e abrir lembranças.",
    items: [
      {
        id: "torta-belga",
        title: "Torta Belga de Chocolate",
        description:
          "Receita autoral trazida de Bruxelas: creme patissière, ganache de chocolate belga e massa folhada artesanal.",
        price: PRICE_TBD,
        image: "/images/menu/torta_belga.png",
        highlight: true,
      },
      {
        id: "banana-flambada",
        title: "Banana Flambada com Sorvete de Baunilha",
        description:
          "Bananas caramelizadas flambadas ao licor, sorvete de baunilha cremoso, calda de caramelo e folha de hortelã fresca.",
        price: PRICE_TBD,
        image: "/images/menu/banana_flambada.png",
      },
      {
        id: "sorvete-frutas-vermelhas",
        title: "Sorvete com calda de frutas vermelhas",
        description:
          "Sorvete cremoso com calda artesanal de frutas vermelhas, morangos frescos, amoras e hortelã.",
        price: PRICE_TBD,
        image: "/images/menu/sorvete_frutas_vermelhas.png",
      },
      {
        id: "siciliano-freeze",
        title: "Siciliano Freeze",
        description:
          "Sobremesa autoral da Tarcila — receita secreta da casa. Limão siciliano em versão frozen, com textura cremosa e equilíbrio entre o ácido e o doce.",
        price: PRICE_TBD,
        image: "/images/menu/siciliano_freeze.png",
        highlight: true,
      },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas & Drinks",
    intro: "Coquetéis autorais para acompanhar — ou começar a noite.",
    items: [
      {
        id: "mojito-morango",
        title: "Mojito de Morango",
        description:
          "Morango fresco, hortelã, limão, açúcar e rum branco. Servido com gelo e canudo — para os dias quentes.",
        price: PRICE_TBD,
        image: "/images/menu/mojito_morango.png",
      },
      {
        id: "mojito-frutas-vermelhas",
        title: "Mojito de Frutas Vermelhas",
        description:
          "Versão da casa do clássico: morango, amora e framboesa muddled com hortelã, limão e rum.",
        price: PRICE_TBD,
        image: "/images/menu/mojito_frutas.png",
      },
      {
        id: "siciliano-freeze",
        title: "Siciliano Freeze",
        description:
          "Limão siciliano em versão frozen: refrescante, ácido e levemente adocicado. Pode ser servido com ou sem álcool.",
        price: PRICE_TBD,
        image: "/images/menu/siciliano_freeze.png",
      },
      {
        id: "shots",
        title: "Shots da Casa",
        description:
          "Seleção de shots autorais — sabores que vão do tropical ao herbal. Perfeitos para abrir ou fechar a noite.",
        price: PRICE_TBD,
        image: "/images/menu/shots.png",
      },
    ],
  },
];

// Mensagem padrão para o botão "Quero esse" em cada item
export function buildMenuItemMessage(itemTitle: string): string {
  return `Olá! Vi o ${itemTitle} no cardápio do site da A Varanda e gostaria de saber mais informações para pedir. Poderiam me ajudar?`;
}
