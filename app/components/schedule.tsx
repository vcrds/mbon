import AnimatedSection from "./AnimatedSection";
import { StaggeredContainer } from "./AnimatedSection";

interface ScheduleProps {
  headingLevel?: "h1" | "h2";
}

export default function Schedule({ headingLevel = "h1" }: ScheduleProps) {
  const Heading = headingLevel;

  return (
    <div className="min-h-[500px] lg:min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-16">
      {/* Título Principal */}
      <AnimatedSection animation="fadeInDown" delay={0.1}>
        <div className="text-center mb-16">
          <Heading className="text-[var(--color-primary-50)] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Programação Semanal
          </Heading>
          <div className="w-16 h-0.5 bg-[var(--color-primary-500)] mx-auto rounded-full"></div>
        </div>
      </AnimatedSection>

      {/* Container dos Dias */}
      <StaggeredContainer
        itemCount={4}
        animation="fadeInUp"
        staggerDelay={100}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl mx-auto"
      >
        {/* Segunda-feira */}
        <div className="bg-gradient-to-br from-[var(--color-primary-800)] to-[var(--color-primary-900)] rounded-xl p-4 sm:p-5 lg:p-6 border border-[var(--color-primary-700)] hover:border-[var(--color-primary-500)] transition-all duration-300 shadow-lg hover-lift w-full h-full flex flex-col">
          <div className="text-center mb-3 sm:mb-6">
            <h2 className="text-[var(--color-primary-100)] text-lg sm:text-xl font-semibold mb-2">
              Segunda-feira
            </h2>
            <div className="w-8 h-0.5 bg-[var(--color-primary-400)] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-1.5 sm:space-y-3 flex-1">
            <div className="flex justify-between items-center gap-1 p-2 bg-[var(--color-primary-700)] rounded-lg">
              <span className="text-[var(--color-primary-400)] text-sm font-medium">
                20:00
              </span>
              <span className="text-[var(--color-primary-50)] text-sm">
                Cada Homem Um Guerreiro
              </span>
            </div>
          </div>
        </div>

        {/* Terça-feira */}
        <div className="bg-gradient-to-br from-[var(--color-primary-800)] to-[var(--color-primary-900)] rounded-xl p-4 sm:p-5 lg:p-6 border border-[var(--color-primary-700)] hover:border-[var(--color-primary-500)] transition-all duration-300 shadow-lg hover-lift w-full h-full flex flex-col">
          <div className="text-center mb-3 sm:mb-6">
            <h2 className="text-[var(--color-primary-100)] text-lg sm:text-xl font-semibold mb-2">
              Terça-feira
            </h2>
            <div className="w-8 h-0.5 bg-[var(--color-primary-400)] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-1.5 sm:space-y-3 flex-1">
            <div className="flex justify-between items-center gap-1 p-2 bg-[var(--color-primary-700)] rounded-lg">
              <span className="text-[var(--color-primary-400)] text-sm font-medium">
                20:00
              </span>
              <span className="text-[var(--color-primary-50)] text-sm">
                Culto de ensino
              </span>
            </div>
          </div>
        </div>

        {/* Quarta-feira */}
        <div className="bg-gradient-to-br from-[var(--color-primary-800)] to-[var(--color-primary-900)] rounded-xl p-4 sm:p-5 lg:p-6 border border-[var(--color-primary-700)] hover:border-[var(--color-primary-500)] transition-all duration-300 shadow-lg hover-lift w-full h-full flex flex-col">
          <div className="text-center mb-3 sm:mb-6">
            <h2 className="text-[var(--color-primary-100)] text-lg sm:text-xl font-semibold mb-2">
              Sexta-feira
            </h2>
            <div className="w-8 h-0.5 bg-[var(--color-primary-400)] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-1.5 sm:space-y-3 flex-1">
            <div className="flex justify-between items-center p-2 gap-1 bg-[var(--color-primary-700)] rounded-lg">
              <span className="text-[var(--color-primary-400)] text-sm font-medium">
                19:30
              </span>
              <span className="text-[var(--color-primary-50)] text-sm">
                Encontro das escolhidas
              </span>
            </div>
            <div className="flex justify-between items-center p-2 gap-1 bg-[var(--color-primary-700)] rounded-lg">
              <span className="text-[var(--color-primary-400)] text-sm font-medium">
                19:30
              </span>
              <span className="text-[var(--color-primary-50)] text-sm">
                Taekwondo (infantil)
              </span>
            </div>

            <div className="flex justify-between items-center p-2 bg-[var(--color-primary-700)] rounded-lg">
              <span className="text-[var(--color-primary-400)] text-sm font-medium">
                20:30
              </span>
              <span className="text-[var(--color-primary-50)] text-sm">
                Taekwondo (adulto)
              </span>
            </div>

            {/* <div className="flex justify-between items-center p-2 bg-[var(--color-primary-700)] rounded-lg">
              <span className="text-[var(--color-primary-400)] text-sm font-medium">
                20:30
              </span>
              <span className="text-[var(--color-primary-50)] text-sm">
                Caçadores da verdade
              </span>
            </div> */}
          </div>
        </div>

        {/* Domingo */}
        <div className="bg-gradient-to-br from-[var(--color-primary-800)] to-[var(--color-primary-900)] rounded-xl p-4 sm:p-5 lg:p-6 border border-[var(--color-primary-500)] hover:border-[var(--color-primary-300)] transition-all duration-300 shadow-lg hover-lift w-full h-full flex flex-col">
          <div className="text-center mb-3 sm:mb-6">
            <h2 className="text-[var(--color-primary-50)] text-lg sm:text-xl font-semibold mb-2">
              Domingo
            </h2>
            <div className="w-8 h-0.5 bg-[var(--color-primary-300)] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-1.5 sm:space-y-3 flex-1">
            <div className="flex justify-between items-center p-2 gap-1 bg-[var(--color-primary-600)] rounded-lg">
              <span className="text-[var(--color-primary-300)] text-sm font-medium">
                09:30
              </span>
              <span className="text-[var(--color-primary-50)] text-sm">
                Culto de domingo
              </span>
            </div>
          </div>
        </div>
      </StaggeredContainer>
    </div>
  );
}
