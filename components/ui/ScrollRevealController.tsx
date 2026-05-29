"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR = "[data-scroll-reveal]";
const READY_CLASS = "scroll-reveal-ready";
const VISIBLE_CLASS = "scroll-reveal-visible";

export default function ScrollRevealController() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let intersectionObserver: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;
    let frameId: number | null = null;

    const getRevealElements = () =>
      Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));

    const stopObservers = () => {
      intersectionObserver?.disconnect();
      mutationObserver?.disconnect();

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
        frameId = null;
      }
    };

    const showElementsImmediately = () => {
      root.classList.remove(READY_CLASS);
      getRevealElements().forEach((element) => {
        element.classList.add(VISIBLE_CLASS);
      });
    };

    const observeElements = () => {
      if (!intersectionObserver) {
        return;
      }

      getRevealElements().forEach((element) => {
        if (!element.classList.contains(VISIBLE_CLASS)) {
          intersectionObserver?.observe(element);
        }
      });
    };

    const scheduleObserve = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        observeElements();
      });
    };

    const setupReveal = () => {
      stopObservers();

      if (mediaQuery.matches || !("IntersectionObserver" in window)) {
        showElementsImmediately();
        return;
      }

      root.classList.add(READY_CLASS);

      intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add(VISIBLE_CLASS);
            intersectionObserver?.unobserve(entry.target);
          });
        },
        {
          rootMargin: "0px 0px -12% 0px",
          threshold: 0.12,
        },
      );

      observeElements();

      const contentRoot = document.getElementById("main-content") ?? document.body;

      mutationObserver = new MutationObserver((mutations) => {
        const hasNewRevealElement = mutations.some((mutation) =>
          Array.from(mutation.addedNodes).some(
            (node) =>
              node instanceof HTMLElement &&
              (node.matches(REVEAL_SELECTOR) ||
                Boolean(node.querySelector(REVEAL_SELECTOR))),
          ),
        );

        if (hasNewRevealElement) {
          scheduleObserve();
        }
      });

      mutationObserver.observe(contentRoot, {
        childList: true,
        subtree: true,
      });
    };

    const handleMotionPreferenceChange = () => {
      setupReveal();
    };

    setupReveal();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleMotionPreferenceChange);
    } else {
      mediaQuery.addListener(handleMotionPreferenceChange);
    }

    return () => {
      stopObservers();

      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", handleMotionPreferenceChange);
      } else {
        mediaQuery.removeListener(handleMotionPreferenceChange);
      }
    };
  }, [pathname]);

  return null;
}
