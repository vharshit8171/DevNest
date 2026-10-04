"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CodeBlockProps = {
  code: {
    language: string;
    lines: string[];
  };
};

export default function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.lines.join("\n"));
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="group overflow-hidden rounded-lg border border-border/80 bg-background shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="flex h-11 items-center justify-between border-b border-border/70 bg-muted/30 px-3.5 sm:px-4">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-red-400/90" />
          <span className="size-2.5 rounded-full bg-amber-400/90" />
          <span className="size-2.5 rounded-full bg-emerald-400/90" />
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-sm border border-border/70 bg-background/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-foreground/75 dark:text-white/85">
            {code.language}
          </span>

          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? "Code copied" : "Copy code"}
            className="flex size-7 cursor-pointer items-center justify-center rounded-md border border-transparent text-muted-foreground transition-all duration-200 hover:border-border hover:bg-background hover:text-foreground"
          >
            {copied ? (
              <Check className="size-3.5 text-emerald-500" />
            ) : (
              <Copy className="size-3.5" />
            )}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-background px-3 py-4 font-mono text-[12.5px] leading-6 sm:px-4 sm:text-[13px]">
        <div className="min-w-max">
          {code.lines.map((line, index) => (
            <div
              key={`${index}-${line}`}
              className="flex min-h-6 rounded-sm transition-colors hover:bg-muted/40"
            >
              <span className="w-9 shrink-0 select-none pr-3 text-right text-[11px] text-muted-foreground/40">
                {index + 1}
              </span>

              <code className="whitespace-pre text-foreground/90">{line}</code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
