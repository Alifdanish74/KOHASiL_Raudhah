"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio playback error:", err));
    }
  };

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log("Auto-play blocked or error:", err));
      }
    };

    // Attempt immediate playback on mount (opening-cover step)
    playAudio();

    // Fallback: If browser policy blocks autoplay without user gesture, trigger on first interaction anywhere
    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        playAudio();
      }
      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("pointerdown", handleFirstInteraction);
    window.addEventListener("keydown", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);

    // Also handle explicit custom event (e.g. from Opening Cover Buka button)
    const handleStartAudio = () => {
      playAudio();
    };

    window.addEventListener("start_bg_audio", handleStartAudio);

    return () => {
      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("start_bg_audio", handleStartAudio);
    };
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!audioRef.current) return;
      if (document.hidden) {
        audioRef.current.pause();
      } else if (isPlaying) {
        audioRef.current.play().catch(() => { });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPlaying]);

  return (
    <div className="fixed bottom-20 left-4 z-[10000] sm:left-6 lg:bottom-8 lg:left-8">
      <audio
        ref={audioRef}
        src="/assets/Adventurous%20Travel%20Background%20Music%20%231.mp3"
        controlsList="nodownload"
        loop
        autoPlay
        preload="auto"
        className="hidden"
      />
      <motion.button
        id="kohasil-audio-btn"
        onClick={togglePlay}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2.5 rounded-full px-4 py-2.5 shadow-lg border backdrop-blur-md transition-all duration-300"
        style={{
          background: isPlaying ? "var(--color-brand-green)" : "rgba(255,255,255,0.90)",
          borderColor: "var(--color-brand-gold)",
          color: isPlaying ? "#fff" : "var(--color-brand-green)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        }}
        type="button"
        aria-label={isPlaying ? "Jeda Muzik Latar" : "Mainkan Muzik Latar"}
        title={isPlaying ? "Jeda Muzik Latar" : "Mainkan Muzik Latar"}
      >
        <div className="flex h-6 w-6 items-center justify-center rounded-full" style={{ background: isPlaying ? "rgba(255,255,255,0.2)" : "var(--color-brand-sage-soft)" }}>
          {isPlaying ? (
            <Volume2 className="h-4 w-4 text-amber-300 animate-pulse" />
          ) : (
            <VolumeX className="h-4 w-4 text-slate-500" />
          )}
        </div>

        {/* <span className="text-xs font-semibold tracking-wide whitespace-nowrap">
          {isPlaying ? "On" : "Off"}
        </span> */}

        {isPlaying && (
          <span className="flex gap-0.5 items-end h-3 ml-0.5">
            <span className="w-0.5 h-3 bg-amber-300 animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-0.5 h-2 bg-amber-300 animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-0.5 h-3.5 bg-amber-300 animate-bounce" style={{ animationDelay: "300ms" }} />
          </span>
        )}
      </motion.button>
    </div>
  );
}
