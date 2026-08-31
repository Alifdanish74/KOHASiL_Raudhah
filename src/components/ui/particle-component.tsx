"use client";

import { useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// PARTICLE CONFIGURATION CONSTANTS
// Adjust these constants to easily modify particle size, speed, amount, and opacity.
// ─────────────────────────────────────────────────────────────────────────────
export const PARTICLE_CONFIG = {
  // Amount / Total count of particles
  COUNT: 25,

  // Size / Radius range (in pixels)
  SIZE_MIN: 2,
  SIZE_MAX: 8,

  // Speed / Velocity
  SPEED_Y_MIN: 0.8, // Minimum downward speed
  SPEED_Y_MAX: 2.3, // Maximum downward speed
  SPEED_X_SWAY: 0.4, // Lateral sway velocity factor (-0.2 to +0.2)

  // Opacity & Pulsation
  OPACITY_MIN: 0.1,  // Minimum opacity boundary
  OPACITY_MAX: 0.20, // Maximum opacity boundary
  OPACITY_PULSE_SPEED: 0.003, // Rate of opacity pulsation
};

interface ParticleComponentProps {
  particleColor?: string;
  count?: number;
  sizeMin?: number;
  sizeMax?: number;
  speedYMin?: number;
  speedYMax?: number;
  opacityMin?: number;
  opacityMax?: number;
}

export function ParticleComponent({
  particleColor = "#F60D0D",
  count = PARTICLE_CONFIG.COUNT,
  sizeMin = PARTICLE_CONFIG.SIZE_MIN,
  sizeMax = PARTICLE_CONFIG.SIZE_MAX,
  speedYMin = PARTICLE_CONFIG.SPEED_Y_MIN,
  speedYMax = PARTICLE_CONFIG.SPEED_Y_MAX,
  opacityMin = PARTICLE_CONFIG.OPACITY_MIN,
  opacityMax = PARTICLE_CONFIG.OPACITY_MAX,
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

    // Initialize particles using configurable constants
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: sizeMin + Math.random() * Math.max(0, sizeMax - sizeMin),
      speedY: speedYMin + Math.random() * Math.max(0, speedYMax - speedYMin),
      speedX: (Math.random() - 0.5) * PARTICLE_CONFIG.SPEED_X_SWAY,
      opacity: opacityMin + Math.random() * Math.max(0, opacityMax - opacityMin),
      pulseSpeed: Math.random() * 0.02 + 0.005,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Move particle downward & sideways
        p.y += p.speedY;
        p.x += p.speedX;

        // Gentle opacity pulsation
        p.opacity += Math.sin(Date.now() * p.pulseSpeed) * PARTICLE_CONFIG.OPACITY_PULSE_SPEED;
        const currentOpacity = Math.max(opacityMin, Math.min(opacityMax, p.opacity));

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
  }, [
    particleColor,
    count,
    sizeMin,
    sizeMax,
    speedYMin,
    speedYMax,
    opacityMin,
    opacityMax,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-2"
      aria-hidden="true"
    />
  );
}
