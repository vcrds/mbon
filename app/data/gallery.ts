export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  // Eventos
  {
    id: 1,
    src: "/images/gallery/eventos/culto-domingo-01.png",
    alt: "Culto de domingo - momento de adoração e louvor",
    category: "eventos",
    title: "Culto de Domingo",
    description: "Momento de adoração e louvor com toda a congregação",
    width: 800,
    height: 600,
  },
  {
    id: 2,
    src: "/images/gallery/eventos/culto-domingo-02.png",
    alt: "Culto de domingo - pregação da palavra",
    category: "eventos",
    title: "Culto de Domingo",
    description: "Pregação da palavra de Deus para a congregação",
    width: 800,
    height: 600,
  },
  {
    id: 3,
    src: "/images/gallery/eventos/culto-domingo-03.png",
    alt: "Culto de domingo - momento de oração",
    category: "eventos",
    title: "Culto de Domingo",
    description: "Momento de oração e intercessão durante o culto",
    width: 800,
    height: 600,
  },
  {
    id: 4,
    src: "/images/gallery/eventos/culto-domingo-04.png",
    alt: "Culto de domingo - louvor e adoração",
    category: "eventos",
    title: "Culto de Domingo",
    description: "Louvor e adoração com a equipe de música",
    width: 800,
    height: 600,
  },
  {
    id: 5,
    src: "/images/gallery/eventos/culto-domingo-05.png",
    alt: "Culto de domingo - comunhão entre irmãos",
    category: "eventos",
    title: "Culto de Domingo",
    description: "Comunhão e confraternização entre os irmãos",
    width: 800,
    height: 600,
  },
  {
    id: 6,
    src: "/images/gallery/eventos/culto-domingo-06.png",
    alt: "Culto de domingo - momento especial",
    category: "eventos",
    title: "Culto de Domingo",
    description: "Momento especial de celebração e gratidão",
    width: 800,
    height: 600,
  },
  {
    id: 7,
    src: "/images/gallery/eventos/ceia-01.png",
    alt: "Santa Ceia - momento de comunhão",
    category: "eventos",
    title: "Santa Ceia",
    description:
      "Momento especial de comunhão e lembrança do sacrifício de Cristo",
    width: 800,
    height: 600,
  },
  {
    id: 8,
    src: "/images/gallery/eventos/ceia-02.png",
    alt: "Santa Ceia - celebração da fé",
    category: "eventos",
    title: "Santa Ceia",
    description: "Celebração da fé e renovação dos votos com Cristo",
    width: 800,
    height: 600,
  },
  {
    id: 9,
    src: "/images/gallery/eventos/culto-jovens-01.png",
    alt: "Culto dos Jovens - juventude ativa",
    category: "eventos",
    title: "Culto dos Jovens",
    description: "Culto especial para a juventude com louvor e palavra",
    width: 800,
    height: 600,
  },
  {
    id: 10,
    src: "/images/gallery/eventos/culto-familia-01.png",
    alt: "Culto da Família - união familiar",
    category: "eventos",
    title: "Culto da Família",
    description: "Culto especial para fortalecer os laços familiares",
    width: 800,
    height: 600,
  },

  // Atividades
  {
    id: 11,
    src: "/images/gallery/atividades/oracao-5-am.png",
    alt: "Oração das 5 da manhã - intercessão",
    category: "atividades",
    title: "Oração das 5 da Manhã",
    description: "Momento de intercessão e súplicas pela igreja e comunidade",
    width: 800,
    height: 600,
  },
  {
    id: 12,
    src: "/images/gallery/atividades/cacadores-da-verdade.png",
    alt: "Caçadores da Verdade - estudo bíblico",
    category: "atividades",
    title: "Caçadores da Verdade",
    description: "Grupo de estudo bíblico para crianças e adolescentes",
    width: 800,
    height: 600,
  },
  {
    id: 13,
    src: "/images/gallery/atividades/mbon-kids-01.png",
    alt: "MBON Kids - ministério infantil",
    category: "atividades",
    title: "MBON Kids",
    description: "Ministério infantil com atividades e ensino da palavra",
    width: 800,
    height: 600,
  },
  {
    id: 14,
    src: "/images/gallery/atividades/mbon-kids-02.png",
    alt: "MBON Kids - diversão e aprendizado",
    category: "atividades",
    title: "MBON Kids",
    description: "Diversão e aprendizado sobre Jesus para as crianças",
    width: 800,
    height: 600,
  },
  {
    id: 15,
    src: "/images/gallery/eventos/culto-mulheres-01.png",
    alt: "Culto das Mulheres - ministério feminino",
    category: "eventos",
    title: "Culto das Mulheres",
    description: "Ministério feminino com oração, louvor e palavra",
    width: 800,
    height: 600,
  },

  // Infraestrutura
  {
    id: 16,
    src: "/images/gallery/infraestrutura/ministerio-boas-novas.png",
    alt: "Ministério Boas Novas - nossa igreja",
    category: "infraestrutura",
    title: "Ministério Boas Novas",
    description: "Nossa casa de oração e adoração para toda a comunidade",
    width: 800,
    height: 600,
  },
];

export const categories = [
  { id: "todos", name: "Todos" },
  { id: "eventos", name: "Eventos" },
  { id: "atividades", name: "Atividades" },
  { id: "infraestrutura", name: "Infraestrutura" },
];
