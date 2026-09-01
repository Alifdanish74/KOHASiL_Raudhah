"use client";
// File: src/components/sections/faq-section.tsx
// Weddingcard-matched: stagger whileInView on FAQ items, smoother accordion timing

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SECTION_IDS } from "@/lib/constants";
import { faqItems } from "@/data/faq";
import { ResponsiveContainer } from "@/components/ui/responsive-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, cardReveal, viewportOnce } from "@/lib/motion";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
  requiresVerification?: boolean;
  tooltipText?: string;
}

function QuestionTooltip({ text }: { text: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span
      className="relative inline-flex items-center ml-1 align-middle z-50"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen((prev) => !prev);
      }}
    >
      <span
        className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-950 font-bold text-xs border border-emerald-300 shadow-xs cursor-pointer hover:bg-emerald-200 transition-colors"
        title={text}
        aria-label="Maklumat lanjutan"
      >
        ?
      </span>

      <AnimatePresence>
        {isOpen && (
          <motion.span
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-slate-900 text-white text-xs font-semibold rounded-xl shadow-2xl z-[100] text-center pointer-events-auto leading-relaxed border border-slate-700"
          >
            {text}
            <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900" />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

function AccordionItem({ question, answer, isOpen, onToggle, id, requiresVerification, tooltipText }: AccordionItemProps) {
  const headingId = `faq-heading-${id}`;
  const panelId = `faq-panel-${id}`;

  const cleanQuestion = question.replace(/\s*\(\?\)\s*$/, "").replace(/\?\s*$/, "");

  return (
    <div
      className={cn(
        "rounded-xl border transition-all duration-200 relative group",
        isOpen && "shadow-card"
      )}
      style={{
        borderColor: isOpen ? "var(--color-brand-green)" : "var(--color-brand-border)",
        background: "#fff",
      }}
    >
      <h3>
        <button
          id={headingId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left rounded-xl"
          style={{ background: "transparent", border: "none", cursor: "pointer" }}
          type="button"
        >
          <span
            className="flex-1 text-sm font-semibold leading-snug"
            style={{ color: "var(--color-brand-text)" }}
          >
            <span>{cleanQuestion} </span>
            {tooltipText ? (
              <QuestionTooltip text={tooltipText} />
            ) : (
              <span>?</span>
            )}
            {requiresVerification && (
              <span
                className="ml-2 inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-medium"
                style={{
                  background: "rgba(191,168,0,0.1)",
                  color: "var(--color-brand-gold)",
                  border: "1px solid rgba(191,168,0,0.2)",
                  verticalAlign: "middle",
                }}
                title="Maklumat ini perlu disahkan"
              >
                <HelpCircle className="h-2.5 w-2.5" aria-hidden="true" />
                Perlu sahkan
              </span>
            )}
          </span>
          <ChevronDown
            className={cn(
              "mt-0.5 h-5 w-5 flex-shrink-0 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
            aria-hidden="true"
            style={{ color: isOpen ? "var(--color-brand-green)" : "var(--color-brand-text-muted)" } as React.CSSProperties}
          />
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={headingId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden rounded-b-xl"
          >
            <div
              className="border-t px-5 pb-4 pt-4"
              style={{ borderColor: "var(--color-brand-border)" }}
            >
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-brand-text-muted)" }}>
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id={SECTION_IDS.soalan}
      aria-label="Soalan Lazim"
      className="section-texture py-16 lg:py-24"
      style={{ background: "var(--color-brand-ivory)" }}
    >
      <ResponsiveContainer>
        <SectionHeading
          eyebrow="Soalan Lazim"
          title="Soalan Yang Sering Ditanya"
          subtitle="Tidak jumpa jawapan yang anda cari? Hubungi kami terus dan pasukan kami sedia membantu."
          className="mb-10"
        />

        {/* Weddingcard stagger: items animate in with cardReveal, stagger 0.08 */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl space-y-3"
        >
          {faqItems.map((item) => (
            <motion.div key={item.id} variants={cardReveal} className="relative hover:z-40 focus-within:z-40">
              <AccordionItem
                id={item.id}
                question={item.question}
                answer={item.answer}
                requiresVerification={item.requiresVerification}
                tooltipText={item.tooltipText}
                isOpen={openItem === item.id}
                onToggle={() => toggle(item.id)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Note about verification flags */}
        {/* <div
          className="mx-auto mt-8 max-w-3xl flex items-start gap-2 rounded-xl px-5 py-4"
          style={{
            background: "rgba(191,168,0,0.06)",
            border: "1px solid rgba(191,168,0,0.18)",
          }}
        >
          <HelpCircle
            className="mt-0.5 h-4 w-4 flex-shrink-0"
            aria-hidden="true"
            style={{ color: "var(--color-brand-gold)" } as React.CSSProperties}
          />
          <p className="text-xs leading-relaxed" style={{ color: "var(--color-brand-text-muted)" }}>
            <strong style={{ color: "var(--color-brand-text)" }}>Nota kepada Kohasil:</strong> Soalan bertanda &ldquo;Perlu sahkan&rdquo; memerlukan pengesahan fakta oleh pihak Kohasil sebelum penerbitan laman sesawang ini.
          </p>
        </div> */}
      </ResponsiveContainer>
    </section>
  );
}
