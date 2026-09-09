import type { Metadata } from "next";
import PageShell from "../components/page-shell";
import Location from "../components/location";

export const metadata: Metadata = {
  title: "Localização | Ministério Boas Novas",
  description:
    "Venha nos visitar: Rua Trajano Reis, 700, São Francisco, Curitiba - PR. Veja o mapa e como chegar ao Ministério Boas Novas.",
  alternates: {
    canonical: "/localizacao",
  },
  openGraph: {
    title: "Localização | Ministério Boas Novas",
    description:
      "Endereço e mapa do Ministério Boas Novas em Curitiba: Rua Trajano Reis, 700.",
    url: "https://ministerioboasnovas.com.br/localizacao",
  },
};

export default function LocalizacaoPage() {
  return (
    <PageShell>
      <Location headingLevel="h1" />
    </PageShell>
  );
}
