import type { WarriorBook } from "../../data/warrior-course";

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
