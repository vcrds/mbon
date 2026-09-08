"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import {
  aboutCta,
  aboutEyebrow,
  aboutParagraphs,
  aboutTitle,
  aboutVideo,
} from "../data/about";

function AboutVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    if (isInView) {
      void video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[45vh] lg:h-full lg:min-h-[70vh] overflow-hidden bg-[var(--color-primary-900)]"
    >
      {!prefersReducedMotion ? (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden
        >
          <source src={aboutVideo.webm} type="video/webm" />
          <source src={aboutVideo.mp4} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-800)] to-[var(--color-primary-950)]"
          aria-hidden
        />
      )}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-950)]/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[var(--color-primary-950)]/40 lg:via-transparent lg:to-transparent"
        aria-hidden
      />
    </div>
  );
}

export default function AboutSection() {
  return (
    <div className="relative w-full overflow-hidden border-y border-[var(--color-primary-800)] bg-[var(--color-primary-950)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-[70vh] lg:items-stretch">
        <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-14 xl:px-16 py-12 sm:py-16 lg:py-20">
          <AnimatedSection animation="fadeInLeft" delay={0.1}>
            <p className="text-[var(--color-primary-400)] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4">
              {aboutEyebrow}
            </p>
            <h2 className="text-[var(--color-primary-50)] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              {aboutTitle}
            </h2>
            <div className="space-y-4 mb-8 max-w-md">
              {aboutParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[var(--color-primary-300)] text-base sm:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <a
              href={aboutCta.href}
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary-50)] border-b border-[var(--color-primary-500)] pb-0.5 hover:text-[var(--color-primary-200)] hover:border-[var(--color-primary-400)] transition-colors duration-300"
            >
              {aboutCta.label}
              <span aria-hidden className="text-[var(--color-primary-400)]">
                →
              </span>
            </a>
          </AnimatedSection>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-7">
          <AnimatedSection
            animation="fadeInRight"
            delay={0.15}
            className="h-full"
          >
            <AboutVideo />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
