"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, RefreshCw, Server, Activity, Sparkles, CheckCircle2 } from "lucide-react";

interface Item {
  id: string;
  name: string;
  category: string;
  createdAt: string;
}

interface HealthData {
  status: string;
  environment: string;
  framework: string;
  timestamp: string;
}

export function InteractiveDemo() {
  const [items, setItems] = useState<Item[]>([]);
  const [newItemName, setNewItemName] = useState("");
  const [category, setCategory] = useState("Feature");
  const [loading, setLoading] = useState(false);
  const [health, setHealth] = useState<HealthData | null>(null);
  const [counter, setCounter] = useState(0);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/items");
      const json = await res.json();
      if (json.success) {
        setItems(json.data);
      }
    } catch (error) {
      console.error("Failed to fetch items:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchHealth = useCallback(async () => {
    try {
      const res = await fetch("/api/health");
      const json = await res.json();
      setHealth(json);
    } catch (error) {
      console.error("Failed to fetch health status:", error);
    }
  }, []);

  useEffect(() => {
    let ignore = false;
    async function initData() {
      if (!ignore) {
        await Promise.all([fetchItems(), fetchHealth()]);
      }
    }
    initData();
    return () => {
      ignore = true;
    };
  }, [fetchItems, fetchHealth]);

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    try {
      const res = await fetch("/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newItemName, category }),
      });
      const json = await res.json();
      if (json.success) {
        setItems((prev) => [json.data, ...prev]);
        setNewItemName("");
      }
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };

  return (
    <section id="demo" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive State & API Integration</span>
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Live Client Component & API Showcase
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Demonstrating Framer Motion list transitions, reactive state management, and real-time App Router API route consumption.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Interactive Counter State */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
                  Framer Motion State
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                Test state mutations and animated numeric scaling effects.
              </p>
            </div>

            <div className="bg-slate-100 dark:bg-slate-900/60 p-6 rounded-xl text-center">
              <motion.span
                key={counter}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="text-5xl font-extrabold text-indigo-600 dark:text-indigo-400 block"
              >
                {counter}
              </motion.span>
              <div className="mt-4 flex justify-center space-x-3">
                <button
                  onClick={() => setCounter((c) => c - 1)}
                  className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                  -
                </button>
                <button
                  onClick={() => setCounter(0)}
                  className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                  Reset
                </button>
                <button
                  onClick={() => setCounter((c) => c + 1)}
                  className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 & 3: API Endpoint Interactive Manager */}
          <div className="lg:col-span-2 glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
                      Live `/api/items` Data Feed
                    </h3>
                    {health && (
                      <span className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mt-0.5">
                        <CheckCircle2 className="w-3 h-3" /> API Health: {health.status} ({health.framework})
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={fetchItems}
                  disabled={loading}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  title="Refresh items"
                >
                  <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                </button>
              </div>

              {/* Add Item Form */}
              <form onSubmit={handleAddItem} className="flex flex-col sm:flex-row gap-3 mb-6">
                <input
                  type="text"
                  placeholder="Enter boilerplate component or feature..."
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm"
                >
                  <option value="Feature">Feature</option>
                  <option value="Module">Module</option>
                  <option value="API">API</option>
                </select>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Item</span>
                </button>
              </form>

              {/* Animated Items List */}
              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-sm"
                    >
                      <span className="font-medium text-slate-800 dark:text-slate-200">
                        {item.name}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                          {item.category}
                        </span>
                        <span className="text-xs text-slate-400">
                          {new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
