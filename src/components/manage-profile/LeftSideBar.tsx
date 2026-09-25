"use client";

import { Check } from "lucide-react";

interface Step {
  id: number;
  title: string;
  subtitle: string;
}

type LeftSidebarProps = {
  currentStep: number;
};

const steps: Step[] = [
  { id: 1, title: "Basic Info", subtitle: "Name, username, bio" },
  { id: 2, title: "About You", subtitle: "Role, location, experience" },
  { id: 3, title: "Skills & Interests", subtitle: "Your expertise & areas" },
  { id: 4, title: "Links", subtitle: "Social & portfolio links" },
  { id: 5, title: "Review", subtitle: "Review and complete" },
];

export default function LeftSidebar({ currentStep }: LeftSidebarProps) {
  const percentage = currentStep * 20;

  return (
    <div className="w-full shrink-0 lg:w-77 flex flex-col gap-3">
      <div className="bg-card border border-border rounded-lg p-5 flex flex-col">
        <div className="flex flex-col items-center">
          <h2 className="text-[25px] font-semibold text-foreground">
            Profile Setup
          </h2>

          <p className="text-[13px] font-semibold text-muted-foreground mt-0.5">
            Step {currentStep} of 5
          </p>

          <div className="relative w-29 h-29 mt-5">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-muted/20"
              />

              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${percentage * 2.76} 276`}
                className="transition-all duration-700"
              />

              <defs>
                <linearGradient
                  id="progressGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="var(--accent-from)" />
                  <stop offset="100%" stopColor="var(--accent-to)" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[24px] font-bold text-foreground">
                {percentage}%
              </span>
            </div>
          </div>

          <p className="text-[13px] font-semibold text-muted-foreground text-center mt-3 leading-5">
            Just {5 - currentStep} more steps to
            <br />
            complete your profile.
          </p>
        </div>

        <div className="mt-3.5 -mx-5 flex flex-col">
          {steps.map((step) => {
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;

            return (
              <div
                key={step.id}
                className={`relative flex items-center gap-3 px-4 py-4 transition-all ${
                  isActive ? "bg-primary/10" : ""
                }`}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-0.75 gradient-accent rounded-r-full" />
                )}

                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive
                      ? "gradient-accent text-white"
                      : isCompleted
                        ? "bg-emerald-400 text-white"
                        : "border border-muted-foreground/70 text-muted-foreground"
                  }`}
                >
                  {isCompleted ? (
                    <Check size={14} strokeWidth={2.5} />
                  ) : (
                    <span className="text-[12px] font-medium">{step.id}</span>
                  )}
                </div>

                <div className="flex flex-col gap-0.5">
                  <span
                    className={`text-[13.5px] font-semibold leading-5 ${
                      isActive ? "text-primary" : "text-gray-800/85 dark:text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </span>

                  <span className="text-[12.5px] text-gray-800/65 dark:text-muted-foreground leading-4">
                    {step.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-4 flex flex-col gap-3">
        <div className="w-14 h-14 mx-auto">
          <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
            <circle
              cx="20"
              cy="18"
              r="6"
              stroke="var(--accent-from)"
              strokeWidth="1.5"
            />
            <path
              d="M12 36C12 31 15 28 20 28C25 28 28 31 28 36"
              stroke="var(--accent-from)"
              strokeWidth="1.5"
            />
            <circle
              cx="44"
              cy="16"
              r="5"
              stroke="var(--accent-to)"
              strokeWidth="1.2"
            />
            <path
              d="M37 30C37 26.5 39.5 24 44 24C48.5 24 51 26.5 51 30"
              stroke="var(--accent-to)"
              strokeWidth="1.2"
            />
            <circle
              cx="32"
              cy="10"
              r="3.5"
              stroke="var(--accent-from)"
              strokeWidth="1.2"
            />
            <path
              d="M20 10L27 10M44 8L37 8M20 18L20 24M44 21L44 24"
              stroke="var(--accent-from)"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <path
              d="M16 42L48 42L46 50L18 50Z"
              stroke="var(--accent-from)"
              strokeWidth="1.2"
            />
            <circle cx="32" cy="38" r="2" fill="var(--accent-from)" />
          </svg>
        </div>

        <div>
          <h1 className="text-[15px] font-semibold text-foreground">
            Why complete your profile?
          </h1>

          <p className="text-[13px] font-semibold text-muted-foreground leading-4.75">
            A complete profile helps others understand your skills, build trust,
            and connect with you more easily.
          </p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-4 flex flex-col gap-3">
        <div className="w-16 h-16 mx-auto">
          <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
            <path d="M22 44L18 52L26 48L22 44Z" fill="var(--accent-from)" />
            <path d="M18 52L14 56L16 50L18 52Z" fill="var(--accent-to)" />
            <ellipse
              cx="32"
              cy="24"
              rx="18"
              ry="14"
              stroke="var(--accent-from)"
              strokeWidth="1.5"
            />
            <ellipse
              cx="32"
              cy="24"
              rx="12"
              ry="8"
              stroke="var(--accent-to)"
              strokeWidth="1"
              opacity="0.6"
            />
            <circle cx="32" cy="24" r="3" fill="var(--accent-from)" />
            <path
              d="M28 38L24 46M36 38L40 46M32 38L32 48"
              stroke="var(--accent-from)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M20 20L24 16M44 20L40 16M20 28L16 30M44 28L48 30"
              stroke="var(--accent-from)"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div>
          <h3 className="text-[15px] font-semibold text-foreground">
            Showcase your work
          </h3>

          <p className="text-[13px] font-semibold text-muted-foreground leading-4.75">
            Add your projects, skills, and useful links to highlight what you
            build and stand out in the community.
          </p>
        </div>
      </div>
    </div>
  );
}
