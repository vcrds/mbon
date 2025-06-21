export default function Location() {
  const handleOpenMaps = () => {
    const googleMapsUrl =
      "https://www.google.com/maps/place/Minist%C3%A9rio+Boas+Novas/@-25.3761118,-49.2108714,20.25z/data=!4m15!1m8!3m7!1s0x94dce61981c1b40f:0x460a8d64b1f61a3!2sRua+Arnoldo+Wolff+Gaensly,+471+-+Atuba,+Curitiba+-+PR,+82630-170!3b1!8m2!3d-25.3759817!4d-49.2107483!16s%2Fg%2F11rp3rw_hj!3m5!1s0x94dce77151ed33d5:0x8a09a309cbfe984!8m2!3d-25.3759817!4d-49.2107483!16s%2Fg%2F11p43rcn0x?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D";
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="min-h-[500px] w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-16">
      {/* Título Principal */}
      <div className="text-center mb-16">
        <h1 className="text-[var(--color-primary-50)] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Nossa Localização
        </h1>
        <div className="w-16 h-0.5 bg-[var(--color-primary-500)] mx-auto rounded-full"></div>
      </div>

      {/* Container das Informações */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Informações de Contato */}
        <div className="bg-gradient-to-br from-[var(--color-primary-800)] to-[var(--color-primary-900)] rounded-xl p-6 sm:p-8 border border-[var(--color-primary-700)] hover:border-[var(--color-primary-500)] transition-all duration-300 shadow-lg">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-[var(--color-primary-100)] text-xl sm:text-2xl font-semibold mb-3">
              Informações de Contato
            </h2>
            <div className="w-12 h-0.5 bg-[var(--color-primary-400)] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* Endereço */}
            <div className="flex items-start space-x-4 p-3 bg-[var(--color-primary-700)] rounded-lg">
              <div className="flex-shrink-0 w-6 h-6 bg-[var(--color-primary-500)] rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-[var(--color-primary-50)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-[var(--color-primary-300)] text-sm font-medium mb-1">
                  Endereço
                </h3>
                <p className="text-[var(--color-primary-50)] text-sm leading-relaxed">
                  Rua Arnoldo Wolff Gaensly
                  <br />
                  Atuba, Curitiba - PR,
                  <br />
                  CEP: 82630-170
                </p>
              </div>
            </div>

            {/* Telefone */}
            {/* <div className="flex items-start space-x-4 p-3 bg-[var(--color-primary-700)] rounded-lg">
              <div className="flex-shrink-0 w-6 h-6 bg-[var(--color-primary-500)] rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-[var(--color-primary-50)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[var(--color-primary-300)] text-sm font-medium mb-1">
                  Telefone
                </h3>
                <p className="text-[var(--color-primary-50)] text-sm">
                  (41) 3333-4444
                </p>
              </div>
            </div> */}

            {/* WhatsApp */}
            <div className="flex items-start space-x-4 p-3 bg-[var(--color-primary-700)] rounded-lg">
              <div className="flex-shrink-0 w-6 h-6 bg-[var(--color-primary-500)] rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-[var(--color-primary-50)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[var(--color-primary-300)] text-sm font-medium mb-1">
                  WhatsApp
                </h3>
                <p className="text-[var(--color-primary-50)] text-sm">
                  (41) 99985-8852
                </p>
              </div>
            </div>

            {/* Horário de Funcionamento */}
            {/* <div className="flex items-start space-x-4 p-3 bg-[var(--color-primary-700)] rounded-lg">
              <div className="flex-shrink-0 w-6 h-6 bg-[var(--color-primary-500)] rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-[var(--color-primary-50)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-[var(--color-primary-300)] text-sm font-medium mb-1">
                  Horário de Funcionamento
                </h3>
                <p className="text-[var(--color-primary-50)] text-sm">
                  Segunda a Sexta: 8h às 18h
                  <br />
                  Sábado: 8h às 12h
                  <br />
                  Domingo: Cultos às 18h
                </p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Mapa */}
        <div className="bg-gradient-to-br from-[var(--color-primary-800)] to-[var(--color-primary-900)] rounded-xl p-6 sm:p-8 border border-[var(--color-primary-700)] hover:border-[var(--color-primary-500)] transition-all duration-300 shadow-lg">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-[var(--color-primary-100)] text-xl sm:text-2xl font-semibold mb-3">
              Como Chegar
            </h2>
            <div className="w-12 h-0.5 bg-[var(--color-primary-400)] mx-auto rounded-full"></div>
          </div>

          {/* Placeholder do Mapa */}
          <div
            className="bg-[var(--color-primary-700)] rounded-lg h-64 sm:h-80 flex items-center justify-center cursor-pointer hover:bg-[var(--color-primary-600)] transition-all duration-300"
            onClick={handleOpenMaps}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-primary-500)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[var(--color-primary-50)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-[var(--color-primary-300)] text-sm font-medium mb-2">
                Mapa Interativo
              </p>
              <p className="text-[var(--color-primary-400)] text-xs">
                Clique para abrir no Google Maps
              </p>
            </div>
          </div>

          {/* Botão de Navegação */}
          {/* <div className="mt-6 text-center">
            <button
              onClick={handleOpenMaps}
              className="bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-500)] text-[var(--color-primary-50)] px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Abrir no Google Maps
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
