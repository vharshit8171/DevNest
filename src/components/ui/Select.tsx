"use client";

import React, { useState } from "react";

interface SelectProps {
  label?: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  required?: boolean;
}

export default function Select({
  label,
  value,
  options,
  onChange,
  required,
}: SelectProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2 w-full relative">
      {label && (
        <label className="text-[13px] font-medium text-foreground flex items-center gap-1">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="bg-background border border-border rounded-md px-4 h-12 flex items-center justify-between w-full text-left transition-colors hover:border-primary/30 focus:outline-none focus:border-primary/50"
      >
        <span className="text-[14px] text-foreground">{value}</span>

        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`text-muted-foreground transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />

          <div className="absolute top-19 left-0 right-0 z-20 bg-card border border-border rounded-xl overflow-hidden py-1 shadow-2xl">
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`w-full px-4 h-10 text-left text-[14px] transition-colors ${
                  value === opt
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
