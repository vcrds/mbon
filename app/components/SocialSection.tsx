"use client";

import AnimatedSection from "./AnimatedSection";
import { socialMediaConfig } from "../data/socialMedia";

export default function SocialSection() {
  const { username, url } = socialMediaConfig.instagram;

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-16">
      <AnimatedSection animation="fadeInDown" delay={0.1}>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-[var(--color-primary-50)] text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Siga-nos no Instagram
          </h2>
          <p className="text-[var(--color-primary-300)] text-base sm:text-lg mb-4 max-w-2xl mx-auto">
            Fique por dentro das novidades, eventos e mensagens inspiradoras do
            Ministério Boas Novas
          </p>
          <div className="w-16 h-0.5 bg-[var(--color-primary-500)] mx-auto rounded-full" />
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fadeInUp" delay={0.2}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-medium bg-[var(--color-primary-500)] text-[var(--color-primary-50)] hover:bg-[var(--color-primary-400)] transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Seguir {username}
        </a>
      </AnimatedSection>
    </div>
  );
}
