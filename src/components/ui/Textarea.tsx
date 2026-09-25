"use client";

import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  maxLength?: number;
  currentLength?: number;
}

export default function Textarea({
  label,
  maxLength,
  currentLength,
  className = "",
  ...props
}: TextareaProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center justify-between">
        {label && (
          <label className="text-[13px] font-medium text-foreground flex items-center gap-1">
            {label}
            {props.required && <span className="text-red-500">*</span>}
          </label>
        )}
      </div>

      <div className="bg-background border border-border rounded-md p-4 flex flex-col w-full transition-colors focus-within:border-primary/50">
        <textarea
          {...props}
          maxLength={maxLength}
          className={`bg-transparent outline-none flex-1 text-[14px] leading-5.5 text-foreground placeholder:text-muted-foreground w-full resize-none min-h-24 ${className}`}
        />
      </div>

      {maxLength && (
        <div className="flex justify-between items-center">
          <span className="text-[12px] font-semibold text-muted-foreground">
            You can write up to {maxLength} characters.
          </span>

          <span className="text-[12px] font-semibold text-muted-foreground">
            {currentLength || 0}/{maxLength}
          </span>
        </div>
      )}
    </div>
  );
}
