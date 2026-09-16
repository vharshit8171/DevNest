import Image from "next/image";
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import { CodePanel } from "@/components/layout/CodePanel";

const AVATARS = [
  "/images/avatars/avatar-1.jpg",
  "/images/avatars/avatar-2.jpg",
  "/images/avatars/avatar-3.jpg",
  "/images/avatars/avatar-4.jpg",
];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Large purple background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[-40px]
          -z-10
          h-[750px]
          w-[750px]
          rounded-full
          opacity-70
          blur-[150px]
        "
        style={{
          background:
            "radial-gradient(circle at center, var(--accent-from) 0%, var(--accent-to) 42%, transparent 72%)",
        }}
      />

      {/* Secondary soft glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[20%]
          top-[45%]
          -z-10
          h-[350px]
          w-[350px]
          rounded-full
          bg-violet-500/10
          blur-[130px]
        "
      />

      <div className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-18 lg:pt-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* ================= LEFT CONTENT ================= */}

          <div>
            <div className="inline-flex items-center gap-2
                rounded-full
                bg-card/70
                px-4
                py-2
                text-sm
                font-medium
                text-gradient-accent
                shadow-sm
                backdrop-blur-md
              "
            >
              <span className="h-2 w-2 rounded-full bg-primary " />
              Welcome to DevNest
            </div>

            {/* Heading */}
            <h1
              className="
                mt-7
                max-w-2xl
                text-5xl
                font-semibold
                leading-[1.04]
                tracking-[-0.035em]
                text-foreground
                sm:text-6xl
                lg:text-[4.5rem]
              "
            >
              Connect.
              <br />
              Build. Learn. 
              <br />
              <span className="pr-3">Grow</span><span className="text-gradient-accent">
                Together.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground sm:text-lg">
              DevNest is the developer community to connect with
              like-minded people, share knowledge, and build the
              future together.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/sign-in"
                className="
                  gradient-accent
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-md
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-primary-foreground
                  shadow-lg
                  shadow-primary/10
                  transition-all
                  hover:-translate-y-0.5
                  hover:opacity-90
                "
              >
                Join DevNest

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#communities"
                className="
                  inline-flex
                  items-center
                  rounded-md
                  border
                  border-border
                  bg-background/60
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-foreground
                  backdrop-blur-sm
                  transition-colors
                  hover:bg-muted
                "
              >
                Explore Communities
              </Link>
            </div>

            {/* Developer avatars */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {AVATARS.map((avatar, index) => (
                  <div
                    key={avatar}
                    className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white/70"
                  >
                    <Image
                      src={avatar}
                      alt={`DevNest community member ${index + 1}`}
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                ))}

                <div
                  className="
                    flex
                    h-9
                    w-9 z-10
                    items-center
                    justify-center
                    rounded-full
                    bg-muted
                    text-[10px]
                    font-semibold
                    text-foreground
                  "
                >
                  10K+
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-foreground">
                  Join 10,000+ developers
                </p>

                <p className="text-xs text-muted-foreground">
                  building the future together.
                </p>
              </div>
            </div>
          </div>

          {/* ================= CODE PANEL ================= */}

          <CodePanel />
        </div>
      </div>
    </section>
  );
}