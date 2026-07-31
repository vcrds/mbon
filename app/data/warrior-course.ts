import { galleryImages, type GalleryImage } from "./gallery";

export interface WarriorBook {
  number: number;
  title: string;
  theme: string;
  summary: string;
}

export type { GalleryImage };

export const warriorCoursePagePath = "/cada-homem-um-guerreiro";

export const warriorCourseVideo = {
  webm: "/videos/warrior-course.webm",
  mp4: "/videos/warrior-course.mp4",
} as const;

export const warriorCourseTitle = "Cada Homem Um Guerreiro";

export const warriorCourseSubtitle =
  "Uma jornada de discipulado e transformação";

export const introShort =
  "A série Every Man A Warrior (EMAW) é um currículo de discipulado cristão voltado para homens, com o objetivo de equipá-los a enfrentarem a vida com fé, integridade e responsabilidade espiritual. No Ministério Boas Novas, o estudo acontece em grupo, com aplicação prática no cotidiano.";

export const introLong =
  "A série ‘Cada Homem Um Guerreiro’ (Every Man A Warrior – EMAW) é um currículo de discipulado cristão voltado especialmente para homens. Seu objetivo é equipar os participantes a enfrentarem os desafios da vida com fé, integridade e responsabilidade espiritual. Publicada no Brasil pela RTM (Rádio Trans Mundial), a série foi escrita por Lonnie Berger, com o quarto volume desenvolvido por Bob Reehm.";

export const introContext =
  "No Ministério Boas Novas, homens se reúnem semanalmente para estudar a série em grupo, compartilhar experiências e aplicar os princípios aprendidos no dia a dia — com prestação de contas e crescimento mútuo.";

export const booksSequenceHint =
  "Os livros devem ser estudados em sequência; cada volume prepara o participante para os temas do seguinte.";

export interface JourneyStep {
  number: number;
  title: string;
  description: string;
}

export const journeySteps: JourneyStep[] = [
  {
    number: 1,
    title: "Comunhão com Deus",
    description:
      "A jornada começa com os fundamentos do discipulado pessoal: devoção, oração e meditação bíblica.",
  },
  {
    number: 2,
    title: "Relacionamentos e família",
    description:
      "Em seguida, princípios de casamento, paternidade e liderança espiritual no lar.",
  },
  {
    number: 3,
    title: "Desafios da vida adulta",
    description:
      "Finanças, trabalho, propósito e equilíbrio espiritual diante das crises e pressões do cotidiano.",
  },
  {
    number: 4,
    title: "Pureza e liberdade",
    description:
      "A jornada culmina na batalha espiritual pela integridade moral e liberdade em Cristo.",
  },
];

export interface MethodologyPractice {
  title: string;
  description: string;
}

export const methodologyPractices: MethodologyPractice[] = [
  {
    title: "Estudo em grupo",
    description:
      "Cada livro é trabalhado em comunidade, criando um ambiente de discipulado e crescimento conjunto.",
  },
  {
    title: "Memorização bíblica",
    description:
      "Versículos-chave são memorizados para fortalecer a fé e sustentar a aplicação prática.",
  },
  {
    title: "Prestação de contas",
    description:
      "Os participantes compartilham experiências e caminham juntos com transparência e apoio mútuo.",
  },
  {
    title: "Aplicação prática",
    description:
      "Os princípios aprendidos são colocados em prática no cotidiano, fora das reuniões de estudo.",
  },
];

export const audiencePoints = [
  "Homens que desejam aprofundar sua relação pessoal com Deus",
  "Maridos e pais que buscam liderança espiritual na família",
  "Homens em busca de maturidade, propósito e integridade",
  "Qualquer homem disposto a caminhar em discipulado com outros irmãos",
];

export const methodology =
  "Cada livro é projetado para ser estudado em grupo, criando um ambiente de discipulado e prestação de contas. Os participantes memorizam versículos, compartilham experiências e aplicam os princípios aprendidos. O conteúdo é progressivo: cada volume prepara o leitor para os temas do seguinte.";

export const centralThemes = [
  "Relação pessoal com Deus e desenvolvimento espiritual",
  "Pureza moral e sexualidade saudável",
  "Casamento, paternidade e liderança familiar",
  "Finanças, trabalho e propósito de vida",
  "Disciplina, confissão e comunhão cristã",
];

export const scheduleHint = {
  day: "Segunda-feira",
  time: "20:00",
};

export const whatsappNumber =
  process.env.NEXT_PUBLIC_WARRIOR_COURSE_WHATSAPP_NUMBER ?? "";
export const whatsappDisplay =
  process.env.NEXT_PUBLIC_WARRIOR_COURSE_WHATSAPP_DISPLAY ?? "";

export const books: WarriorBook[] = [
  {
    number: 1,
    title: "Andar com Deus",
    theme: "Fundamentos do discipulado pessoal",
    summary:
      "Desenvolve práticas espirituais como devoção diária, meditação bíblica e oração.",
  },
  {
    number: 2,
    title: "Casamento e Criação de Filhos",
    theme: "Vida familiar e relacionamentos próximos",
    summary:
      "Aborda princípios de casamento, paternidade e influência espiritual na família.",
  },
  {
    number: 3,
    title: "Dinheiro, Sexo, Trabalho e Crises",
    theme: "Desafios práticos da vida diária",
    summary:
      "Trata de finanças, trabalho, propósito e equilíbrio espiritual em tempos difíceis.",
  },
  {
    number: 4,
    title: "Cada Homem Um Guerreiro Puro",
    theme: "Pureza moral e liberdade espiritual",
    summary:
      "Apresenta sete princípios para vencer a pornografia e outros pecados escravizantes.",
  },
];

export const warriorCourseGalleryTitle = "Galeria";

const warriorCourseImageIds = [20, 21, 19, 17, 12, 24];

export const warriorCourseImages: GalleryImage[] = warriorCourseImageIds
  .map((id) => galleryImages.find((img) => img.id === id))
  .filter((img): img is GalleryImage => img !== undefined);
