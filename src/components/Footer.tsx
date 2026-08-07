"use client";

import React from "react";
import { Layers, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
            <Layers className="w-4 h-4" />
          </div>
          <span className="font-semibold text-slate-900 dark:text-white text-sm">
            KOHASiL Next.js Prototype
          </span>
        </div>

        <div className="flex items-center space-x-1 text-sm text-slate-500 dark:text-slate-400">
          <span>Crafted with</span>
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500 inline mx-0.5" />
          <span>using Next.js, Tailwind CSS & Framer Motion</span>
        </div>

        <div className="text-xs text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} KOHASiL. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
