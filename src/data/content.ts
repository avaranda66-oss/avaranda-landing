export const navItems = [
  { label: "História", href: "/#historia" },
  { label: "Cardápio", href: "/cardapio" },
  { label: "Eventos", href: "/#experiencias" },
  { label: "Experiências", href: "/#experiencias" },
  { label: "Contato", href: "/#reservar" },
];

export const chapters = [
  {
    number: "01",
    title: "Raízes na Bahia",
    shortTitle: "Raízes na Bahia",
    image: "/images/story_images/story_01.png",
    video: "/animations/story_01.webm",
    mp4: "/animations/story_01.mp4",
    summary:
      "Foi entre o tempero de dendê e o calor da casa baiana que Tarcila descobriu sua vocação. Aqui começa tudo: a memória de sabor que um dia atravessaria o Atlântico.",
  },
  {
    number: "02",
    title: "Aos 18, atravessou o Atlântico",
    shortTitle: "Aos 18, na Bélgica",
    image: "/images/story_images/story_02.png",
    video: "/animations/story_02.webm",
    mp4: "/animations/story_02.mp4",
    summary:
      "Casou jovem e mudou-se para a Bélgica sem saber falar francês. Levou na bagagem coragem — e o tempero da Bahia que aprendeu em casa. Foi assim que A Varanda começou a nascer: longe demais para ser improviso.",
  },
  {
    number: "03",
    title: "A cozinha da sogra belga",
    shortTitle: "A sogra belga",
    image: "/images/story_images/story_03.png",
    video: "/animations/story_03.webm",
    mp4: "/animations/story_03.mp4",
    summary:
      "Entre batatas, manteiga e silêncios compartilhados, Tarcila aprendeu a cozinha europeia direto da fonte. Três décadas depois, é essa técnica que dá estrutura a cada prato servido aqui.",
  },
  {
    number: "04",
    title: "Sob o Atomium, nasceu Gabriel",
    shortTitle: "Atomium e Gabriel",
    image: "/images/story_images/story_04.png",
    video: "/animations/story_04.webm",
    mp4: "/animations/story_04.mp4",
    summary:
      "Em Bruxelas, sob as esferas do Atomium, Tarcila viveu sua maior alegria: o nascimento do filho. A cozinha deixou de ser ofício e virou herança — algo que se entrega de mãe para filho, da Bélgica para a Bahia.",
  },
  {
    number: "05",
    title: "Coxinha em praça belga",
    shortTitle: "Brasil em praça belga",
    image: "/images/story_images/story_05.png",
    video: "/animations/story_05.webm",
    mp4: "/animations/story_05.mp4",
    summary:
      "Nas feiras de rua de Bruxelas, Tarcila montou tabuleiro e fez belga atrás de belga descobrir o gosto de coxinha e acarajé. Provou ali, na prática, que sabor brasileiro tem passaporte — e abre porta em qualquer continente.",
  },
  {
    number: "06",
    title: "Cozinhou para o Cirque du Soleil",
    shortTitle: "Cozinha para centenas",
    image: "/images/story_images/story_06.png",
    video: "/animations/story_06.webm",
    mp4: "/animations/story_06.mp4",
    summary:
      "Comandou cozinhas para 300, 500 convidados em jantares europeus — incluindo o aniversário do dono do Cirque du Soleil. Aprendeu a entregar memória em escala, sem perder o cuidado de mesa de família.",
  },
  {
    number: "07",
    title: "A Varanda, em Itamaraju",
    shortTitle: "A Varanda hoje",
    image: "/images/story_images/story_07.png",
    summary:
      "Hoje, Tarcila serve em Itamaraju tudo o que viveu: a Bahia da infância, a Europa que adotou, a generosidade aprendida em três décadas de cozinha. Sua mesa está posta — só falta você sentar.",
  },
];

export const foodItems = [
  {
    title: "Drinks",
    description: "Coquetéis autorais — Mojito de morango, Tropical Félix e Siciliano Freeze.",
    image: "/images/menu/mojito_morango.png",
    categoryId: "bebidas",
  },
  {
    title: "Pratos Principais",
    description: "Filé mignon, Bobó de camarão, Salmão recheado e pizza artesanal.",
    image: "/images/menu/file_mignon_fritas.png",
    categoryId: "pratos-principais",
  },
  {
    title: "Sobremesas",
    description: "Torta belga de chocolate, banana flambada e sorvete com calda artesanal.",
    image: "/images/menu/sorvete_frutas_vermelhas.png",
    categoryId: "sobremesas",
  },
  {
    title: "Buffets & Festas",
    description: "Paella feita ao vivo e Arroz de marisco — eventos sob curadoria do chef.",
    image: "/images/menu/paella.png",
    categoryId: "buffets-festas",
  },
];

export const whatsappPhone = "5573999146365";

export const reservationDefaultMessage =
  "Olá! Visitei o site da A Varanda e fiquei interessado(a). Como faço para obter mais informações e fazer uma reserva?";

export const serviceItems = [
  {
    title: "Reservas",
    description: "Garanta sua mesa para uma noite que você vai querer lembrar.",
    icon: "calendar",
    whatsappMessage:
      "Olá! Visitei o site da A Varanda e gostaria de fazer uma reserva. Poderiam me ajudar com a disponibilidade?",
  },
  {
    title: "Eventos especiais",
    description: "Aniversários, jantares íntimos e celebrações com curadoria de chef.",
    icon: "party",
    whatsappMessage:
      "Olá! Visitei o site da A Varanda e tenho interesse em organizar um evento especial. Poderiam me passar mais informações sobre datas, capacidade e cardápio?",
  },
  {
    title: "Buffet",
    description: "Levamos a cozinha de A Varanda até o seu evento, em qualquer escala.",
    icon: "cloche",
    whatsappMessage:
      "Olá! Visitei o site da A Varanda e gostaria de saber mais sobre o serviço de buffet. Poderiam me enviar opções de cardápio e valores?",
  },
  {
    title: "Experiências",
    description: "Harmonizações, jantares fechados e degustações exclusivas.",
    icon: "leaf",
    whatsappMessage:
      "Olá! Visitei o site da A Varanda e tenho interesse nas experiências gastronômicas (harmonizações e jantares exclusivos). Poderiam me dar mais detalhes?",
  },
];

export function buildWhatsappLink(message: string): string {
  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
}
