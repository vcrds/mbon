"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeaderInitial() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  const welcomeMessages = [
    "a nossa igreja!",
    "a casa de Deus!",
    "a sua casa!",
    "à família de Deus!",
  ];

  // Efeito de digitação
  useEffect(() => {
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
    }, 100); // Velocidade da digitação

    return () => clearInterval(typeInterval);
  }, [currentMessageIndex]);

  // Troca de mensagem
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex(
        (prevIndex) => (prevIndex + 1) % welcomeMessages.length
      );
    }, 3000); // Troca a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <header className=" flex items-center justify-center h-screen max-w-7xl mx-6 max-sm:mx-2">
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
