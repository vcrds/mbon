import { methodology, methodologyPractices } from "../data/warrior-course";

const practiceIcons = [
  (
    <svg
      key="group"
      className="w-5 h-5 text-[var(--color-primary-50)]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  (
    <svg
      key="book"
      className="w-5 h-5 text-[var(--color-primary-50)]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  ),
  (
    <svg
      key="check"
      className="w-5 h-5 text-[var(--color-primary-50)]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  ),
  (
    <svg
      key="hands"
      className="w-5 h-5 text-[var(--color-primary-50)]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  ),
];

export default function WarriorCoursePractices() {
  return (
    <section className="mb-14 sm:mb-16">
      <div className="text-center mb-8">
        <h2 className="text-[var(--color-primary-100)] text-xl sm:text-2xl font-semibold mb-3">
          Como funciona
        </h2>
        <p className="text-[var(--color-primary-300)] text-sm sm:text-base max-w-3xl mx-auto mb-4 leading-relaxed">
          {methodology}
        </p>
        <div className="w-12 h-0.5 bg-[var(--color-primary-400)] mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {methodologyPractices.map((practice, index) => (
          <div
            key={practice.title}
            className="bg-gradient-to-br from-[var(--color-primary-800)] to-[var(--color-primary-900)] rounded-xl p-5 sm:p-6 border border-[var(--color-primary-700)] hover:border-[var(--color-primary-500)] transition-all duration-300"
          >
            <div className="w-10 h-10 bg-[var(--color-primary-600)] rounded-full flex items-center justify-center mb-4">
              {practiceIcons[index]}
            </div>
            <h3 className="text-[var(--color-primary-100)] text-base font-semibold mb-2">
              {practice.title}
            </h3>
            <p className="text-[var(--color-primary-300)] text-sm leading-relaxed">
              {practice.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
