import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { StaggeredContainer } from "./AnimatedSection";
import WarriorCourseBackground from "./warrior-course-background";
import {
  books,
  introShort,
  warriorCoursePagePath,
  warriorCourseSubtitle,
  warriorCourseTitle,
  type WarriorBook,
} from "../data/warrior-course";

export function BookCard({
  book,
  showSummary = false,
}: {
  book: WarriorBook;
  showSummary?: boolean;
}) {
  return (
    <div className="bg-gradient-to-br from-[var(--color-primary-800)] to-[var(--color-primary-900)] rounded-xl p-4 sm:p-5 lg:p-6 border border-[var(--color-primary-700)] hover:border-[var(--color-primary-500)] transition-all duration-300 shadow-lg hover-lift w-full h-full flex flex-col">
      <div className="text-center mb-3 sm:mb-4">
        <span className="inline-block text-[var(--color-primary-400)] text-xs font-medium mb-2">
          Livro {book.number}
        </span>
        <h3 className="text-[var(--color-primary-100)] text-base sm:text-lg font-semibold mb-2">
          {book.title}
        </h3>
        <div className="w-8 h-0.5 bg-[var(--color-primary-400)] mx-auto rounded-full" />
      </div>
      <p className="text-[var(--color-primary-300)] text-sm text-center mb-2">
        {book.theme}
      </p>
      {showSummary && (
        <p className="text-[var(--color-primary-50)] text-sm text-center leading-relaxed flex-1">
          {book.summary}
        </p>
      )}
    </div>
  );
}

export default function WarriorCourse() {
  return (
    <div className="relative w-full overflow-hidden border-y border-[var(--color-primary-800)] bg-[var(--color-primary-950)]">
      <WarriorCourseBackground />
      <div className="relative z-10 min-h-[500px] lg:min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-16">
      <AnimatedSection animation="fadeInDown" delay={0.1}>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-[var(--color-primary-50)] text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            {warriorCourseTitle}
          </h2>
          <p className="text-[var(--color-primary-300)] text-base sm:text-lg mb-4 max-w-2xl mx-auto">
            {warriorCourseSubtitle}
          </p>
          <div className="w-16 h-0.5 bg-[var(--color-primary-500)] mx-auto rounded-full" />
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fadeInUp" delay={0.2}>
        <p className="text-[var(--color-primary-200)] text-sm sm:text-base text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          {introShort}
        </p>
      </AnimatedSection>

      <StaggeredContainer
        itemCount={4}
        animation="fadeInUp"
        staggerDelay={100}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl mx-auto mb-12"
      >
        {books.map((book) => (
          <BookCard key={book.number} book={book} />
        ))}
      </StaggeredContainer>

      <AnimatedSection animation="fadeInUp" delay={0.3}>
        <Link
          href={warriorCoursePagePath}
          className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-medium bg-[var(--color-primary-500)] text-[var(--color-primary-50)] hover:bg-[var(--color-primary-400)] transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Saiba mais
        </Link>
      </AnimatedSection>
      </div>
    </div>
  );
}
