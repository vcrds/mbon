"use client";

import { SocialMedia } from "./index";

export default function SocialSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-[var(--color-primary-900)] to-[var(--color-primary-950)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-100)] mb-4">
          Siga-nos no Instagram
        </h2>
        <p className="text-[var(--color-primary-300)] text-lg mb-8 max-w-2xl mx-auto">
          Fique por dentro das novidades, eventos e mensagens inspiradoras do
          Ministério Boas Novas
        </p>

        <div className="flex flex-col items-center gap-6">
          {/* Redes Sociais */}
          <SocialMedia
            size="lg"
            showLabels={true}
            className="text-[var(--color-primary-200)]"
          />

          {/* Destaque do Instagram */}
          <div className="mt-8 p-6 bg-[var(--color-primary-800)] rounded-lg border border-[var(--color-primary-700)]">
            <h3 className="text-xl font-semibold text-[var(--color-primary-100)] mb-2">
              📱 Instagram @ministerioMBON
            </h3>
            <p className="text-[var(--color-primary-300)] mb-4">
              Acompanhe nosso dia a dia, momentos especiais e mensagens de fé
            </p>
            <a
              href="https://www.instagram.com/ministerioMBON"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              <span>📸 Seguir no Instagram</span>
            </a>
          </div>

          {/* Call to Action */}
          <div className="mt-6 text-[var(--color-primary-400)] text-sm">
            <p>Compartilhe com amigos e familiares! 🙏</p>
          </div>
        </div>
      </div>
    </section>
  );
}
