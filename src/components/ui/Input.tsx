"use client";

import React from "react";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  rightElement?: React.ReactNode;
  error?: string;
  success?: string;
}

export default function Input({
  label,
  icon,
  rightElement,
  error,
  success,
  required,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-[13px] font-medium text-foreground flex items-center gap-1">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="bg-background border border-border rounded-md px-4 h-12 flex items-center gap-3 w-full group transition-colors focus-within:border-primary/50">
        {icon && (
          <span className="text-muted-foreground group-focus-within:text-primary transition-colors shrink-0">
            {icon}
          </span>
        )}

        <input
          {...props}
          required={required}
          className={`bg-transparent outline-none flex-1 text-[14px] text-foreground placeholder:text-muted-foreground w-full ${className}`}
        />

        {rightElement && (
          <span className="shrink-0">
            {rightElement}
          </span>
        )}
      </div>

      {success && (
        <span className="text-[12px] text-emerald-500 font-medium">
          {success}
        </span>
      )}

      {error && (
        <span className="text-[12px] text-red-500 font-medium">
          {error}
        </span>
      )}
    </div>
  );
}