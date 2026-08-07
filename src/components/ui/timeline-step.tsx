// File: src/components/ui/timeline-step.tsx
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface TimelineStepProps {
  step: number;
  title: string;
  description: string;
  icon: string;
  isLast?: boolean;
  className?: string;
}

export function TimelineStep({
  step,
  title,
  description,
  icon,
  isLast = false,
  className,
}: TimelineStepProps) {
  const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[icon];

  return (
    <div className={cn("relative flex gap-4 lg:flex-col lg:items-center lg:gap-0 lg:text-center", className)}>
      {/* Connector line (mobile: vertical, desktop: hidden via flex change) */}
      {!isLast && (
        <div
          className="absolute left-5 top-12 h-[calc(100%-2rem)] w-px lg:hidden"
          style={{ background: "var(--color-brand-sage-muted)" }}
          aria-hidden={true}
        />
      )}

      {/* Step indicator */}
      <div className="relative flex-shrink-0 lg:mx-auto lg:mb-5">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
          style={{ background: "var(--color-brand-green)" }}
          aria-label={`Langkah ${step}`}
        >
          {step}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-8 lg:pb-0">
        <div
          className="mb-3 inline-flex items-center justify-center rounded-xl p-3 lg:mb-4"
          style={{ background: "var(--color-brand-sage-soft)" }}
        >
          {IconComponent ? (
            <IconComponent
              className="h-6 w-6"
              aria-hidden={true}
              style={{ color: "var(--color-brand-green)" }}
            />
          ) : null}
        </div>

        <h3
          className="mb-2 font-body text-base font-semibold"
          style={{ color: "var(--color-brand-text)" }}
        >
          {title}
        </h3>
        <p
          className="font-body text-sm leading-relaxed"
          style={{ color: "var(--color-brand-text-muted)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
