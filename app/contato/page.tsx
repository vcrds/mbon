import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "../components/page-shell";
import { contactInfo, socialMediaConfig } from "../data/socialMedia";

export const metadata: Metadata = {
  title: "Contato | Ministério Boas Novas",
  description:
    "Fale com o Ministério Boas Novas em Curitiba pelo WhatsApp ou Instagram. Endereço: Rua Trajano Reis, 700, São Francisco.",
  alternates: {
    canonical: "/contato",
  },
  openGraph: {
    title: "Contato | Ministério Boas Novas",
    description:
      "WhatsApp, Instagram e endereço do Ministério Boas Novas em Curitiba.",
    url: "https://ministerioboasnovas.com.br/contato",
  },
};

export default function ContatoPage() {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumber}`;
  const { street, neighborhood, city, state, postalCode } = contactInfo.address;

  return (
    <PageShell>
      <div className="min-h-[500px] w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-[var(--color-primary-50)] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Contato
          </h1>
          <p className="text-[var(--color-primary-300)] text-sm sm:text-base max-w-2xl mx-auto mb-4">
            Fale conosco pelo WhatsApp, acompanhe no Instagram ou venha nos
            visitar.
          </p>
          <div className="w-16 h-0.5 bg-[var(--color-primary-500)] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-[var(--color-primary-800)] to-[var(--color-primary-900)] rounded-xl p-6 sm:p-8 border border-[var(--color-primary-700)] hover:border-[var(--color-primary-500)] transition-all duration-300 shadow-lg"
          >
            <h2 className="text-[var(--color-primary-100)] text-xl font-semibold mb-3">
              WhatsApp
            </h2>
            <p className="text-[var(--color-primary-50)] text-sm">
              {contactInfo.whatsappDisplay}
            </p>
            <p className="text-[var(--color-primary-400)] text-xs mt-3">
              Abrir conversa
            </p>
          </a>

          <a
            href={socialMediaConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-[var(--color-primary-800)] to-[var(--color-primary-900)] rounded-xl p-6 sm:p-8 border border-[var(--color-primary-700)] hover:border-[var(--color-primary-500)] transition-all duration-300 shadow-lg"
          >
            <h2 className="text-[var(--color-primary-100)] text-xl font-semibold mb-3">
              Instagram
            </h2>
            <p className="text-[var(--color-primary-50)] text-sm">
              {socialMediaConfig.instagram.username}
            </p>
            <p className="text-[var(--color-primary-400)] text-xs mt-3">
              Seguir no Instagram
            </p>
          </a>

          <Link
            href="/localizacao"
            className="bg-gradient-to-br from-[var(--color-primary-800)] to-[var(--color-primary-900)] rounded-xl p-6 sm:p-8 border border-[var(--color-primary-700)] hover:border-[var(--color-primary-500)] transition-all duration-300 shadow-lg"
          >
            <h2 className="text-[var(--color-primary-100)] text-xl font-semibold mb-3">
              Endereço
            </h2>
            <p className="text-[var(--color-primary-50)] text-sm leading-relaxed">
              {street}
              <br />
              {neighborhood}, {city} - {state}
              <br />
              CEP: {postalCode}
            </p>
            <p className="text-[var(--color-primary-400)] text-xs mt-3">
              Ver localização
            </p>
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
