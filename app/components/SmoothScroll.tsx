"use client";

import { ReactNode, useEffect, useState } from "react";

interface SmoothScrollProps {
  children: ReactNode;
  className?: string;
}

export default function SmoothScroll({
  children,
  className = "",
}: SmoothScrollProps) {
  const [currentSection, setCurrentSection] = useState("header");

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      const schedule = document.getElementById("schedule");
      const gallery = document.getElementById("gallery");
      const location = document.getElementById("location");
      const footer = document.querySelector("footer");

      if (!header || !schedule || !gallery || !location) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const headerBottom = header.offsetTop + header.offsetHeight;
      const scheduleBottom = schedule.offsetTop + schedule.offsetHeight;
      const galleryBottom = gallery.offsetTop + gallery.offsetHeight;

      // Verifica se está próximo do final da página
      const isNearBottom = scrollY + windowHeight >= documentHeight - 100;

      if (isNearBottom) {
        setCurrentSection("footer");
      } else if (scrollY < headerBottom * 0.8) {
        setCurrentSection("header");
      } else if (scrollY < scheduleBottom * 0.8) {
        setCurrentSection("schedule");
      } else if (scrollY < galleryBottom * 0.8) {
        setCurrentSection("gallery");
      } else {
        setCurrentSection("location");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verificação inicial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className={className}>
      {children}

      {/* Botões de navegação flutuantes */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2">
        {/* Botão para o topo - aparece quando não está no header */}
        {currentSection !== "header" && (
          <button
            onClick={() => scrollToSection("header")}
            className="w-12 h-12 bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-500)] text-[var(--color-primary-50)] rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
            title="Ir para o topo"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        )}

        {/* Botões de navegação - ocultos quando está no footer */}
        {currentSection !== "footer" && (
          <>
            <button
              onClick={() => scrollToSection("schedule")}
              className="w-12 h-12 bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-500)] text-[var(--color-primary-50)] rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
              title="Ir para programação"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>

            <button
              onClick={() => scrollToSection("gallery")}
              className="w-12 h-12 bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-500)] text-[var(--color-primary-50)] rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
              title="Ir para galeria"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>

            <button
              onClick={() => scrollToSection("location")}
              className="w-12 h-12 bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-500)] text-[var(--color-primary-50)] rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
              title="Ir para localização"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
