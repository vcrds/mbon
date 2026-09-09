import Image from "next/image";
import Link from "next/link";
import { SocialMedia } from "./index";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary-950)] border-t border-[var(--color-primary-800)] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo e Nome */}
          <div className="flex items-center gap-3">
            <Image
              src="/ministerioBoasNovas.svg"
              width={32}
              height={32}
              alt="Logo Ministério Boas Novas"
              className="w-8 h-8"
            />
            <span className="text-[var(--color-primary-300)] text-sm font-medium">
              Ministério Boas Novas
            </span>
          </div>

          {/* Redes Sociais */}
          <div className="flex items-center">
            <SocialMedia
              size="sm"
              className="text-[var(--color-primary-400)]"
            />
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
          <div className="flex flex-wrap justify-center gap-6 text-[var(--color-primary-400)] text-xs">
            <Link
              href="/"
              className="hover:text-[var(--color-primary-300)] transition-colors duration-200"
            >
              Início
            </Link>
            <Link
              href="/agenda"
              className="hover:text-[var(--color-primary-300)] transition-colors duration-200"
            >
              Agenda
            </Link>
            <Link
              href="/cada-homem-um-guerreiro"
              className="hover:text-[var(--color-primary-300)] transition-colors duration-200"
            >
              Curso
            </Link>
            <Link
              href="/#gallery"
              className="hover:text-[var(--color-primary-300)] transition-colors duration-200"
            >
              Galeria
            </Link>
            <Link
              href="/localizacao"
              className="hover:text-[var(--color-primary-300)] transition-colors duration-200"
            >
              Localização
            </Link>
            <Link
              href="/contato"
              className="hover:text-[var(--color-primary-300)] transition-colors duration-200"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
