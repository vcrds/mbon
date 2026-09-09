export const siteUrl = "https://ministerioboasnovas.com";

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/agenda", label: "Agenda" },
  { href: "/localizacao", label: "Localização" },
  { href: "/cada-homem-um-guerreiro", label: "Curso" },
  { href: "/contato", label: "Contato" },
] as const;

export const sitelinkPages = navLinks.filter((link) => link.href !== "/");
