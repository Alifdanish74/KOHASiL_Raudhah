// File: src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(id: string) {
  if (id === "utama") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (typeof window !== "undefined" && window.location.hash !== `#${id}`) {
      history.pushState(null, "", `#${id}`);
    }
    return;
  }

  const el = document.getElementById(id);
  if (el) {
    const headerOffset = 64; // Sticky header height
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: "smooth",
    });
    if (typeof window !== "undefined" && window.location.hash !== `#${id}`) {
      history.pushState(null, "", `#${id}`);
    }
  }
}
