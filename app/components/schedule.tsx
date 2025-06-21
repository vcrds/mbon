export default function Schedule() {
  return (
    <div className="min-h-[500px] w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-16">
      {/* Título Principal */}
      <div className="text-center mb-16">
        <h1 className="text-[var(--color-primary-50)] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Programação Semanal
        </h1>
        <div className="w-16 h-0.5 bg-[var(--color-primary-500)] mx-auto rounded-full"></div>
      </div>

      {/* Container dos Dias */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {/* Segunda-feira */}
        <div className="bg-gradient-to-br from-[var(--color-primary-800)] to-[var(--color-primary-900)] rounded-xl p-4 sm:p-6 border border-[var(--color-primary-700)] hover:border-[var(--color-primary-500)] transition-all duration-300 shadow-lg">
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-[var(--color-primary-100)] text-lg sm:text-xl font-semibold mb-2">
              Segunda-feira
            </h2>
            <div className="w-8 h-0.5 bg-[var(--color-primary-400)] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <div className="flex justify-between items-center p-2 bg-[var(--color-primary-700)] rounded-lg">
              <span className="text-[var(--color-primary-400)] text-sm font-medium">
                20:00
              </span>
              <span className="text-[var(--color-primary-50)] text-sm">
                Caçadores da verdade
              </span>
            </div>
          </div>
        </div>

        {/* Terça-feira */}
        <div className="bg-gradient-to-br from-[var(--color-primary-800)] to-[var(--color-primary-900)] rounded-xl p-4 sm:p-6 border border-[var(--color-primary-700)] hover:border-[var(--color-primary-500)] transition-all duration-300 shadow-lg">
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-[var(--color-primary-100)] text-lg sm:text-xl font-semibold mb-2">
              Terça-feira
            </h2>
            <div className="w-8 h-0.5 bg-[var(--color-primary-400)] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <div className="flex justify-between items-center p-2 bg-[var(--color-primary-700)] rounded-lg">
              <span className="text-[var(--color-primary-400)] text-sm font-medium">
                20:00
              </span>
              <span className="text-[var(--color-primary-50)] text-sm">
                Curso dos guerreiros
              </span>
            </div>
          </div>
        </div>

        {/* Quarta-feira */}
        <div className="bg-gradient-to-br from-[var(--color-primary-800)] to-[var(--color-primary-900)] rounded-xl p-4 sm:p-6 border border-[var(--color-primary-700)] hover:border-[var(--color-primary-500)] transition-all duration-300 shadow-lg">
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-[var(--color-primary-100)] text-lg sm:text-xl font-semibold mb-2">
              Quarta-feira
            </h2>
            <div className="w-8 h-0.5 bg-[var(--color-primary-400)] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <div className="flex justify-between items-center p-2 bg-[var(--color-primary-700)] rounded-lg">
              <span className="text-[var(--color-primary-400)] text-sm font-medium">
                19:00
              </span>
              <span className="text-[var(--color-primary-50)] text-sm">
                Encontro das divinas
              </span>
            </div>
            <div className="flex justify-between items-center p-2 bg-[var(--color-primary-700)] rounded-lg">
              <span className="text-[var(--color-primary-400)] text-sm font-medium">
                19:00
              </span>
              <span className="text-[var(--color-primary-50)] text-sm">
                Taekwondo (infantil)
              </span>
            </div>

            <div className="flex justify-between items-center p-2 bg-[var(--color-primary-700)] rounded-lg">
              <span className="text-[var(--color-primary-400)] text-sm font-medium">
                20:00
              </span>
              <span className="text-[var(--color-primary-50)] text-sm">
                Taekwondo (demais idades)
              </span>
            </div>
          </div>
        </div>

        {/* Domingo */}
        <div className="bg-gradient-to-br from-[var(--color-primary-800)] to-[var(--color-primary-900)] rounded-xl p-4 sm:p-6 border border-[var(--color-primary-500)] hover:border-[var(--color-primary-300)] transition-all duration-300 shadow-lg">
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-[var(--color-primary-50)] text-lg sm:text-xl font-semibold mb-2">
              Domingo
            </h2>
            <div className="w-8 h-0.5 bg-[var(--color-primary-300)] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <div className="flex justify-between items-center p-2 bg-[var(--color-primary-600)] rounded-lg">
              <span className="text-[var(--color-primary-300)] text-sm font-medium">
                18:00
              </span>
              <span className="text-[var(--color-primary-50)] text-sm">
                Culto de domingo
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
