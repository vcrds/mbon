import type { Metadata } from "next";
import PageShell from "../components/page-shell";
import Schedule from "../components/schedule";
import { siteUrl } from "../data/navigation";

export const metadata: Metadata = {
  title: "Agenda | Ministério Boas Novas",
  description:
    "Confira a agenda semanal do Ministério Boas Novas em Curitiba: cultos, ensino, encontro das escolhidas e Cada Homem Um Guerreiro.",
  alternates: {
    canonical: "/agenda",
  },
  openGraph: {
    title: "Agenda | Ministério Boas Novas",
    description:
      "Programação semanal da igreja Ministério Boas Novas em Curitiba.",
    url: `${siteUrl}/agenda`,
  },
};

export default function AgendaPage() {
  return (
    <PageShell>
      <Schedule headingLevel="h1" />
    </PageShell>
  );
}
