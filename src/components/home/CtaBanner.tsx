import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pt-8 sm:px-8">
      <div className="relative overflow-hidden rounded-md border border-(--accent-from)/15 bg-linear-to-r from-cyan-400 to-blue-300 dark:bg-linear-to-r dark:from-(--accent-from)/8 dark:via-card dark:to-(--accent-to)/8">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 -top-28 h-60 w-72 rounded-full bg-(--accent-from)/15 blur-[90px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-28 right-0 h-56 w-80 rounded-full bg-(--accent-to)/15 blur-[90px]"
        />

        <svg
          aria-hidden
          viewBox="0 0 500 140"
          preserveAspectRatio="none"
          className="pointer-events-none absolute bottom-0 right-0 h-27.5 w-[62%] opacity-60"
        >
          <defs>
            <linearGradient
              id="cta-wave"
              x1="0"
              y1="0"
              x2="500"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--accent-from)" stopOpacity="0" />
              <stop
                offset="0.5"
                stopColor="var(--accent-from)"
                stopOpacity="0.7"
              />
              <stop offset="1" stopColor="var(--accent-to)" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          <path
            d="M0 120 C 120 120, 200 60, 320 70 S 460 100, 500 80"
            fill="none"
            stroke="url(#cta-wave)"
            strokeWidth="1.4"
          />
          <path
            d="M0 130 C 130 130, 210 75, 330 85 S 460 112, 500 95"
            fill="none"
            stroke="url(#cta-wave)"
            strokeWidth="1.2"
            opacity="0.7"
          />
          <path
            d="M0 140 C 140 140, 220 90, 340 100 S 465 124, 500 110"
            fill="none"
            stroke="url(#cta-wave)"
            strokeWidth="1"
            opacity="0.45"
          />
        </svg>

        <div className="relative flex flex-col items-start gap-1 p-7 sm:p-4 md:flex-row md:items-center">
          <Image
            src="/Logo.png"
            alt="DevNest"
            width={200}
            height={56}
            className="h-28 w-auto object-contain"
          />

          <div className="min-w-0">
            <h2 className="text-[25px] font-semibold tracking-tight text-white dark:text-foreground sm:text-2xl">
              Ready to grow together?
            </h2>
            <p className="mt-0.5 max-w-md text-[13.5px] font-semibold leading-relaxed text-white dark:text-muted-foreground">
              Join DevNest today and become part of the most welcoming developer
              community.
            </p>
          </div>

          <div className="w-full md:ml-auto md:w-auto md:shrink-0">
            <button className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-[7px] bg-linear-to-r from-(--accent-from) to-(--accent-to) px-12 py-3.5 text-md font-medium text-white shadow-[0_8px_30px_-6px_rgba(99,102,241,0.45)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_8px_36px_-6px_rgba(99,102,241,0.65)] active:scale-[0.98]">
              Join DevNest
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
