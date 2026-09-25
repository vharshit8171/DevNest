"use client";

import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
}

export default function Button({
  variant = "primary",
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  if (variant === "primary") {
    return (
      <button
        {...props}
        className={`gradient-accent rounded-md px-6 h-11 flex items-center justify-center gap-2 text-white text-[14px] font-medium transition-all duration-200 hover:opacity-90 active:scale-[0.98] ${className}`}
      >
        {children}
        {icon && <span>{icon}</span>}
      </button>
    );
  }

  return (
    <button
      {...props}
      className={`bg-card border border-border rounded-md px-6 h-11 flex items-center justify-center gap-2 text-foreground text-[14px] font-medium hover:bg-muted transition-all duration-200 active:scale-[0.98] ${className}`}
    >
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
}
