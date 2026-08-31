"use client";

import { useEffect, useRef } from "react";

interface ParticleComponentProps {
  particleColor?: string;
  count?: number;
}

export function ParticleComponent({
  particleColor = "#F60D0D",
  count = 25,
}: ParticleComponentProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Initialize particles matching particles-config.js & ParticleComponent.jsx
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 7 + 2, // 2px to 6px
      speedY: Math.random() * 1.5 + 0.8, // downward velocity
      speedX: (Math.random() - 0.5) * 0.4, // slight lateral sway
      opacity: Math.random() * 0.35 + 0.15,
      pulseSpeed: Math.random() * 0.02 + 0.005,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Move particle downward
        p.y += p.speedY;
        p.x += p.speedX;

        // Gentle opacity pulsation
        p.opacity += Math.sin(Date.now() * p.pulseSpeed) * 0.01;
        const currentOpacity = Math.max(0.1, Math.min(0.2, p.opacity));

        // Wrap around when falling past bottom or side boundaries
        if (p.y > height + 10) {
          p.y = -10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.globalAlpha = currentOpacity;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleColor, count]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-2"
      aria-hidden="true"
    />
  );
}
