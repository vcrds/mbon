"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeaderInitial() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [logoOpacity, setLogoOpacity] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const welcomeMessages = [
    "a nossa igreja!",
    "a casa de Deus!",
    "a sua casa!",
    "à família de Deus!",
  ];

  // Sequência de carregamento da logo
  useEffect(() => {
    // Logo aparece gradualmente
    const logoTimer = setTimeout(() => {
      setLogoOpacity(1);
    }, 800);

    // Inicia a saída
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2500);

    // Finaliza o carregamento
    const endTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(exitTimer);
      clearTimeout(endTimer);
    };
  }, []);

  // Efeito de digitação
  useEffect(() => {
    if (isLoading) return;

    setDisplayText("");

    const currentMessage = welcomeMessages[currentMessageIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < currentMessage.length) {
        setDisplayText(currentMessage.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentMessageIndex, isLoading]);

  // Troca de mensagem
  useEffect(() => {
    if (isLoading) return;

    const interval = setInterval(() => {
      setCurrentMessageIndex(
        (prevIndex) => (prevIndex + 1) % welcomeMessages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isLoading]);

  // Tela de Carregamento
  if (isLoading) {
    return (
      <div
        className={`fixed inset-0 bg-gradient-to-br from-[var(--color-primary-950)] via-[var(--color-primary-900)] to-[var(--color-primary-800)] flex items-center justify-center z-50 transition-all duration-1500 ease-in-out ${
          isExiting ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center">
          {/* Logo com animação SVG */}
          <div>
            <div
              className={`logo-loading logo-enter ${
                isExiting ? "logo-exit" : ""
              }`}
            >
              <Image
                src="ministerioBoasNovas.svg"
                width={280}
                height={268}
                alt="Logo Ministério Boas Novas Curitiba"
                className="drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <header className="flex items-center justify-center h-screen max-w-7xl mx-6 max-sm:mx-2">
      <div className="flex flex-col gap-4">
        <Image
          src="ministerioBoasNovas.svg"
          width={400}
          height={382}
          alt="Logo Ministério Boas Novas Curitiba"
        />

        <div className="flex flex-col gap-2 min-w-[435px]">
          <h1 className="text-[var(--color-primary-50)] text-4xl font-bold">
            Ministério Boas Novas
          </h1>
          <div className="text-2xl font-bold">
            <span className="text-[var(--color-primary-500)]">
              Seja bem-vindo{" "}
            </span>
            <span className="text-[var(--color-primary-300)] transition-all duration-300">
              {displayText}
            </span>
            <span className="text-[var(--color-primary-500)] animate-pulse">
              |
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
