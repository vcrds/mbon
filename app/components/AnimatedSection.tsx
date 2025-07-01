"use client";

import React, { ReactNode } from "react";
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "../hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?:
    | "fadeInUp"
    | "fadeInDown"
    | "fadeInLeft"
    | "fadeInRight"
    | "scaleIn"
    | "slideInUp";
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fadeInUp",
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  triggerOnce = true,
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const getAnimationClass = () => {
    if (!isVisible) return "";

    const baseClass = `animate-${animation
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase()}`;
    return delay > 0
      ? `${baseClass} animate-delay-${Math.round(delay * 1000)}`
      : baseClass;
  };

  return (
    <div
      ref={elementRef as React.Ref<HTMLDivElement>}
      className={`${className} ${getAnimationClass()}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

interface StaggeredContainerProps {
  children: ReactNode;
  className?: string;
  itemCount: number;
  animation?:
    | "fadeInUp"
    | "fadeInDown"
    | "fadeInLeft"
    | "fadeInRight"
    | "scaleIn";
  staggerDelay?: number;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function StaggeredContainer({
  children,
  className = "",
  itemCount,
  animation = "fadeInUp",
  staggerDelay = 150,
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  triggerOnce = true,
}: StaggeredContainerProps) {
  const { containerRef, visibleItems } = useStaggeredAnimation(itemCount, {
    threshold,
    rootMargin,
    triggerOnce,
  });

  const getItemAnimationClass = (index: number) => {
    if (!visibleItems.includes(index)) return "";
    return `animate-${animation.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
  };

  return (
    <div ref={containerRef as React.Ref<HTMLDivElement>} className={className}>
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className={getItemAnimationClass(index)}
          style={{
            opacity: visibleItems.includes(index) ? 1 : 0,
            transform: visibleItems.includes(index)
              ? "translateY(0)"
              : "translateY(30px)",
            transition: `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${
              index * staggerDelay
            }ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
