"use client";

import React from "react";
import { Check } from "lucide-react";

const steps = [
  { id: 1, label: "Basic Info" },
  { id: 2, label: "About You" },
  { id: 3, label: "Skills & Interests" },
  { id: 4, label: "Links" },
  { id: 5, label: "Review" },
];

type TopProgressProps = {
  currentStep: number;
};

export default function TopProgress({ currentStep }: TopProgressProps) {
  return (
    <div className="w-full pl-0.5 pr-24 py-3">
      <h1 className="text-[16.5px] font-medium text-foreground">
        Complete your profile to get the best DevNest experience
      </h1>

      <div className="mt-5.5 flex items-start w-full">
        {steps.map((step, idx) => {
          const isActive = step.id === currentStep;
          const isCompleted = step.id < currentStep;

          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-[13.5px] font-semibold transition-all ${
                    isActive
                      ? "gradient-accent text-white ring-4 ring-primary/20"
                      : isCompleted
                        ? "bg-green-500 text-white"
                        : "bg-muted border border-white/40 text-muted-foreground"
                  }`}
                >
                  {isCompleted ? (
                    <Check size={16} strokeWidth={2.5} />
                  ) : (
                    step.id
                  )}
                </div>

                <span className={`text-[13.5px] font-medium hidden sm:block whitespace-nowrap ${
                    isActive
                      ? "text-foreground"
                      : isCompleted
                        ? "text-foreground"
                        : "text-muted-foreground"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {idx < steps.length - 1 && (
                <div className={`flex-1 min-w-17.5 h-px mx-2.25 mt-5 transition-all ${step.id < currentStep ? "bg-green-500/50" : "bg-gray-800/20 dark:bg-white/25"}`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
