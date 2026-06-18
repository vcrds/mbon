import { journeySteps } from "../data/warrior-course";

export default function WarriorCourseJourney() {
  return (
    <section className="mb-14 sm:mb-16">
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-[var(--color-primary-100)] text-xl sm:text-2xl font-semibold mb-3">
          A jornada
        </h2>
        <p className="text-[var(--color-primary-300)] text-sm sm:text-base max-w-2xl mx-auto mb-4">
          Uma progressão intencional — cada etapa prepara o caminho para a
          próxima.
        </p>
        <div className="w-12 h-0.5 bg-[var(--color-primary-400)] mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 relative">
        <div
          className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-[var(--color-primary-700)]"
          aria-hidden
        />
        {journeySteps.map((step) => (
          <div key={step.number} className="relative flex flex-col items-center">
            <div className="relative z-10 w-10 h-10 rounded-full bg-[var(--color-primary-500)] flex items-center justify-center mb-4 shrink-0">
              <span className="text-[var(--color-primary-50)] text-sm font-bold">
                {step.number}
              </span>
            </div>
            <div className="bg-gradient-to-br from-[var(--color-primary-800)] to-[var(--color-primary-900)] rounded-xl p-4 sm:p-5 border border-[var(--color-primary-700)] hover:border-[var(--color-primary-500)] transition-all duration-300 w-full h-full text-center">
              <h3 className="text-[var(--color-primary-100)] text-base font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-[var(--color-primary-300)] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
