export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary-950)] border-t border-[var(--color-primary-800)] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo e Nome */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[var(--color-primary-500)] rounded-full flex items-center justify-center">
              <span className="text-[var(--color-primary-50)] text-sm font-bold">
                M
              </span>
            </div>
            <span className="text-[var(--color-primary-300)] text-sm font-medium">
              Ministério Boas Novas
            </span>
          </div>

          {/* Copyright */}
          <div className="text-[var(--color-primary-400)] text-xs text-center md:text-right">
            <p>
              © {currentYear} Ministério Boas Novas. Todos os direitos
              reservados.
            </p>
            <p className="mt-1">Desenvolvido com ❤️ para a glória de Deus</p>
          </div>
        </div>

        {/* Linha separadora */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-primary-700)] to-transparent mt-6"></div>

        {/* Links rápidos */}
        <div className="flex justify-center mt-4">
          <div className="flex gap-6 text-[var(--color-primary-400)] text-xs">
            <a
              href="#header"
              className="hover:text-[var(--color-primary-300)] transition-colors duration-200"
            >
              Início
            </a>
            <a
              href="#schedule"
              className="hover:text-[var(--color-primary-300)] transition-colors duration-200"
            >
              Programação
            </a>
            <a
              href="#gallery"
              className="hover:text-[var(--color-primary-300)] transition-colors duration-200"
            >
              Galeria
            </a>
            <a
              href="#location"
              className="hover:text-[var(--color-primary-300)] transition-colors duration-200"
            >
              Localização
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
