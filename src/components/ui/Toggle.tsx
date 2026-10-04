"use client";

import React from "react";

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export default function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => onChange(!checked)}
        aria-pressed={checked}
        className={`relative w-11.5 h-6.5 rounded-full transition-all duration-300 flex items-center px-0.75 ${
          checked ? "gradient-accent" : "bg-muted border border-border"
        }`}
      >
        <span
          className={`w-5 h-5 bg-white rounded-full shadow-lg transition-transform duration-300 ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>

      {label && (
        <span className="text-[13px] text-muted-foreground">{label}</span>
      )}
    </div>
  );
}
