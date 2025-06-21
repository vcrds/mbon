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
        <div className="flex flex-col items-center px-4">
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
                className="drop-shadow-2xl w-[200px] h-[191px] sm:w-[240px] sm:h-[229px] md:w-[280px] md:h-[268px]"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <header className="flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-8">
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 max-w-7xl w-full">
        <div className="flex justify-start">
          <Image
            src="ministerioBoasNovas.svg"
            width={400}
            height={382}
            alt="Logo Ministério Boas Novas Curitiba"
            className="w-[250px] h-[239px] sm:w-[300px] sm:h-[287px] md:w-[350px] md:h-[335px] lg:w-[400px] lg:h-[382px] drop-shadow-2xl"
          />
        </div>

        <div className="flex flex-col gap-2 sm:gap-3 text-left">
          <h1 className="text-[var(--color-primary-50)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Ministério Boas Novas
          </h1>
          <div className="font-bold min-h-[4rem] sm:min-h-[2rem] flex items-center justify-start px-2">
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl flex flex-col sm:flex-row items-start text-left gap-1 sm:gap-1.5">
              <span className="text-[var(--color-primary-500)]">
                Seja bem-vindo
              </span>
              <div className="text-[var(--color-primary-300)] transition-all duration-300 flex items-center">
                <span>{displayText}</span>
                <span className="text-[var(--color-primary-500)] animate-pulse ml-1">
                  |
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
