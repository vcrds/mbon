"use client";

import { useEffect, useRef, useState } from "react";
import { warriorCourseVideo } from "../data/warrior-course";

export default function WarriorCourseBackground() {
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
      { threshold: 0.1 },
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
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {!prefersReducedMotion && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden
        >
          <source src={warriorCourseVideo.webm} type="video/webm" />
          <source src={warriorCourseVideo.mp4} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-950)]/90 via-[var(--color-primary-950)]/80 to-[var(--color-primary-950)]/95" />
    </div>
  );
}
