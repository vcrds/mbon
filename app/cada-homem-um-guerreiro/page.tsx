import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import WarriorCourseBackground from "../components/warrior-course-background";
import WarriorCourseGallery from "../components/warrior-course-gallery";
import WarriorCourseJourney from "../components/warrior-course-journey";
import WarriorCoursePractices from "../components/warrior-course-practices";
import { BookCard } from "../components/warrior-course";
import {
  audiencePoints,
  books,
  booksSequenceHint,
  centralThemes,
  introContext,
  introLong,
  scheduleHint,
  warriorCourseSubtitle,
  warriorCourseTitle,
  whatsappNumber,
} from "../data/warrior-course";

export const metadata: Metadata = {
  title: "Cada Homem Um Guerreiro | Ministério Boas Novas",
  description:
    "Conheça a série EMAW de discipulado para homens: quatro livros, estudo em grupo e transformação pela fé. Participe às segundas, 20h, no Ministério Boas Novas em Curitiba.",
  alternates: {
    canonical: "/cada-homem-um-guerreiro",
  },
  openGraph: {
    title: "Cada Homem Um Guerreiro | Ministério Boas Novas",
    description:
      "Jornada de discipulado e transformação para homens. Estudo em grupo no Ministério Boas Novas.",
    url: "https://ministerioboasnovas.com.br/cada-homem-um-guerreiro",
  },
};

export default function WarriorCoursePage() {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá! Gostaria de saber mais sobre o curso Cada Homem Um Guerreiro.",
  )}`;

  return (
    <div className="min-h-screen bg-[var(--color-primary-900)]">
      <div className="relative overflow-hidden bg-[var(--color-primary-950)] min-h-[420px] sm:min-h-[480px]">
        <WarriorCourseBackground />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 pb-14 sm:pb-16">
          <Link
            href="/"
            className="inline-flex items-center text-[var(--color-primary-400)] text-sm hover:text-[var(--color-primary-200)] transition-colors duration-200 mb-10"
          >
            ← Voltar ao início
          </Link>

          <header className="text-center mb-10 sm:mb-12">
            <h1 className="text-[var(--color-primary-50)] text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
              {warriorCourseTitle}
            </h1>
            <p className="text-[var(--color-primary-300)] text-base sm:text-lg mb-4">
              {warriorCourseSubtitle}
            </p>
            <div className="w-16 h-0.5 bg-[var(--color-primary-500)] mx-auto rounded-full" />
          </header>

          <section className="space-y-4 max-w-3xl mx-auto">
            <p className="text-[var(--color-primary-200)] text-sm sm:text-base text-center leading-relaxed">
              {introLong}
            </p>
            <p className="text-[var(--color-primary-300)] text-sm sm:text-base text-center leading-relaxed">
              {introContext}
            </p>
          </section>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        <WarriorCourseJourney />

        <section className="mb-14 sm:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-[var(--color-primary-100)] text-xl sm:text-2xl font-semibold mb-3">
              Os quatro livros
            </h2>
            <p className="text-[var(--color-primary-300)] text-sm sm:text-base max-w-2xl mx-auto mb-4">
              {booksSequenceHint}
            </p>
            <div className="w-12 h-0.5 bg-[var(--color-primary-400)] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {books.map((book) => (
              <BookCard key={book.number} book={book} showSummary />
            ))}
          </div>
        </section>

        <WarriorCoursePractices />

        <section className="mb-14 sm:mb-16">
          <WarriorCourseGallery />
        </section>

        <section className="mb-14 sm:mb-16">
          <div className="bg-gradient-to-br from-[var(--color-primary-800)] to-[var(--color-primary-900)] rounded-xl p-6 sm:p-8 border border-[var(--color-primary-700)]">
            <h2 className="text-[var(--color-primary-100)] text-xl sm:text-2xl font-semibold mb-6 text-center">
              Temas centrais
            </h2>
            <ul className="space-y-3 max-w-2xl mx-auto">
              {centralThemes.map((theme) => (
                <li
                  key={theme}
                  className="flex items-start gap-3 p-3 bg-[var(--color-primary-700)] rounded-lg"
                >
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[var(--color-primary-400)]" />
                  <span className="text-[var(--color-primary-50)] text-sm sm:text-base">
                    {theme}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-14 sm:mb-16">
          <div className="bg-gradient-to-br from-[var(--color-primary-800)] to-[var(--color-primary-900)] rounded-xl p-6 sm:p-8 border border-[var(--color-primary-700)]">
            <h2 className="text-[var(--color-primary-100)] text-xl sm:text-2xl font-semibold mb-6 text-center">
              Para quem é
            </h2>
            <ul className="space-y-3 max-w-2xl mx-auto">
              {audiencePoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 p-3 bg-[var(--color-primary-700)] rounded-lg"
                >
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[var(--color-primary-400)]" />
                  <span className="text-[var(--color-primary-50)] text-sm sm:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="text-center mb-8">
          <h2 className="text-[var(--color-primary-100)] text-xl sm:text-2xl font-semibold mb-4">
            Participe
          </h2>
          <p className="text-[var(--color-primary-300)] text-sm sm:text-base mb-6 max-w-xl mx-auto">
            Encontros às {scheduleHint.day.toLowerCase()}s, às{" "}
            {scheduleHint.time}, no Ministério Boas Novas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-medium bg-[var(--color-primary-700)] text-[var(--color-primary-100)] border border-[var(--color-primary-600)] hover:border-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] transition-all duration-300"
            >
              Entre em contato!
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
