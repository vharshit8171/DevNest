import { footerColumns } from "@/data/constants";
import Image from "next/image";

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.32 4.37a19.8 19.8 0 0 0-4.93-1.51 13.8 13.8 0 0 0-.64 1.28 18.3 18.3 0 0 0-5.5 0 13.8 13.8 0 0 0-.64-1.28c-1.71.29-3.37.8-4.93 1.51A20.3 20.3 0 0 0 .1 18.06a19.9 19.9 0 0 0 6.07 3.03c.49-.66.93-1.37 1.3-2.1a12.9 12.9 0 0 1-2.05-.98c.17-.12.34-.25.5-.38a14.2 14.2 0 0 0 12.16 0c.16.13.33.26.5.38-.65.39-1.34.72-2.05.98.37.73.81 1.44 1.3 2.1a19.8 19.8 0 0 0 6.07-3.03 20.2 20.2 0 0 0-3.58-13.69ZM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42s.95-2.42 2.16-2.42 2.18 1.09 2.16 2.42c0 1.34-.95 2.42-2.16 2.42Zm7.96 0c-1.18 0-2.16-1.08-2.16-2.42s.95-2.42 2.16-2.42 2.18 1.09 2.16 2.42c0 1.34-.95 2.42-2.16 2.42Z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M18.9 2.1h3.68l-8.04 9.19L24 23.9h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 2.1h7.59l5.24 6.93L18.9 2.1Zm-1.29 19.6h2.04L6.49 4.16H4.3l13.31 17.54Z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.39-5.26 5.68.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
    </svg>
  );
}

const socials = [
  { label: "Discord", Icon: DiscordIcon },
  { label: "X (Twitter)", Icon: XIcon },
  { label: "GitHub", Icon: GitHubIcon },
  { label: "LinkedIn", Icon: LinkedInIcon },
];

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-5 pt-6 sm:px-8">
      <div className="border-t border-border mb-4" />
      <div className="grid grid-cols-2 gap-8 pb-2.5 md:grid-cols-6">
        <div className="md:col-span-2">
          <div className="flex items-center">
            <Image
              src="/Logo.png"
              alt="DevNest logo"
              width={44}
              height={44}
              priority
              className="h-9 w-9 object-contain sm:h-14 sm:w-14"
            />

            <span className="flex items-center text-[24px] font-semibold leading-none tracking-[-0.8px] sm:text-[22px]">
              <span className="text-foreground">Dev</span>
              <span className="text-gradient-accent">Nest</span>
            </span>
          </div>

          <p className="max-w-55 text-[13.5px] font-semibold leading-relaxed text-muted-foreground">
            Build. Share. Learn. Grow.
            <br />
            Together.
          </p>
        </div>

        {footerColumns.map((col) => (
          <div key={col.heading}>
            <h4 className="text-[13.5px] font-semibold text-foreground">
              {col.heading}
            </h4>

            <ul className="mt-2.5 space-y-0.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[12.5px] font-semibold text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-[13.5px] font-semibold text-foreground">
            Stay Connected
          </h4>

          <div className="mt-2.5 flex items-center gap-2.5">
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-8 w-14 items-center justify-center rounded-full border border-border bg-muted/40 text-muted-foreground transition-all duration-200 hover:border-(--accent-from)/40 hover:bg-(--accent-from)/10 hover:text-(--accent-from)"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="py-6 text-center">
        <p className="text-sm font-semibold text-muted-foreground">
          © 2024 DevNest. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
