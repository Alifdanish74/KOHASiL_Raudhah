// File: src/components/ui/form-field.tsx
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  children: React.ReactNode;
  className?: string;
}

export function FormField({
  id,
  label,
  required = false,
  error,
  helperText,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <label htmlFor={id} className="form-label">
        {label}
        {required && (
          <span
            className="ml-1 text-red-600"
            aria-label="diperlukan"
          >
            *
          </span>
        )}
      </label>
      {children}
      {helperText && !error && (
        <p
          className="font-body text-xs"
          style={{ color: "var(--color-brand-text-muted)" }}
        >
          {helperText}
        </p>
      )}
      {error && (
        <p
          className="form-error"
          id={`${id}-error`}
          role="alert"
        >
          <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}
