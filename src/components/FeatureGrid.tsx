"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Palette, Wand2, Moon, Server, FileCode2 } from "lucide-react";

const features = [
  {
    icon: Layout,
    title: "Next.js App Router",
    description: "Built on modern layout routing, nested layouts, and server component architecture.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Palette,
    title: "Tailwind CSS Styling",
    description: "Utility-first CSS framework configured with responsive layout presets and theme variables.",
    color: "from-teal-400 to-cyan-600",
  },
  {
    icon: Wand2,
    title: "Framer Motion",
    description: "Smooth page transitions, micro-interactions, drag gestures, and layout morphing.",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Moon,
    title: "Dark / Light Mode",
    description: "Built-in ThemeProvider with persistence in localStorage and system scheme detection.",
    color: "from-amber-400 to-orange-600",
  },
  {
    icon: Server,
    title: "API Route Handlers",
    description: "Modular GET, POST, PUT, DELETE RESTful API endpoints powered by NextRequest & NextResponse.",
    color: "from-emerald-400 to-green-600",
  },
  {
    icon: FileCode2,
    title: "Strict TypeScript",
    description: "Fully typed codebase with absolute path aliases (`@/*`) and ESLint quality standards.",
    color: "from-rose-500 to-red-600",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Everything You Need Out of the Box
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Engineered with modern best practices for rapid web application development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative p-6 rounded-2xl glass-panel hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-slate-200/80 dark:border-slate-800/80"
              >
                {/* Icon Container */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${feature.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
