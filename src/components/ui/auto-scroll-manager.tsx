"use client";

import { useEffect } from "react";

export function AutoScrollManager() {
  useEffect(() => {
    let animId: number | null = null;
    let isAutoScrolling = false;

    const stopAutoScroll = () => {
      if (isAutoScrolling) {
        isAutoScrolling = false;
        if (animId !== null) {
          cancelAnimationFrame(animId);
          animId = null;
        }
        removeInteractionListeners();
      }
    };

    const handleUserInteraction = () => {
      stopAutoScroll();
    };

    const addInteractionListeners = () => {
      window.addEventListener("wheel", handleUserInteraction, { passive: true });
      window.addEventListener("touchstart", handleUserInteraction, { passive: true });
      window.addEventListener("touchmove", handleUserInteraction, { passive: true });
      window.addEventListener("pointerdown", handleUserInteraction, { passive: true });
      window.addEventListener("keydown", handleUserInteraction, { passive: true });
      window.addEventListener("mousedown", handleUserInteraction, { passive: true });
    };

    const removeInteractionListeners = () => {
      window.removeEventListener("wheel", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("touchmove", handleUserInteraction);
      window.removeEventListener("pointerdown", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
      window.removeEventListener("mousedown", handleUserInteraction);
    };

    const startAutoScroll = () => {
      stopAutoScroll(); // Clear any existing animation
      isAutoScrolling = true;
      addInteractionListeners();

      // Slow scroll speed: 0.8px per frame (~48px per second at 60fps)
      const scrollSpeed = 0.8;

      const step = () => {
        if (!isAutoScrolling) return;

        // Stop if reached within 15px of bottom of the page
        const isAtBottom =
          window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 15;

        if (isAtBottom) {
          stopAutoScroll();
          return;
        }

        window.scrollBy(0, scrollSpeed);
        animId = requestAnimationFrame(step);
      };

      animId = requestAnimationFrame(step);
    };

    const handleStartEvent = () => {
      // 800ms delay to allow cover transition to complete
      setTimeout(() => {
        startAutoScroll();
      }, 800);
    };

    window.addEventListener("start_auto_scroll", handleStartEvent);

    return () => {
      stopAutoScroll();
      window.removeEventListener("start_auto_scroll", handleStartEvent);
    };
  }, []);

  return null;
}
