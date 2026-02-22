"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom hook to detect when an element enters the viewport.
 * Used for scroll-triggered animations.
 */
export function useInView(
  options: IntersectionObserverInit = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(element);
      }
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options]);

  return { ref, isInView };
}

/**
 * Custom hook to track the currently active section based on scroll position.
 * Used for highlighting the active link in the navigation bar.
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-50% 0px -50% 0px" } // Trigger when section is in the middle of the screen
      );

      observer.observe(element);
      return { id, observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.element);
      });
    };
  }, [sectionIds]);

  return activeSection;
}
