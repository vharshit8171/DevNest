import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/layout/ModeToggle";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Communities", href: "#communities" },
  { label: "Explore", href: "#explore" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/60 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 border-2 border-white max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center">
          <Image
            src="/"
            alt="DevNest"
            width={180}
            height={50}
            className="h-14 w-auto object-contain"
          />
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link, index) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`relative py-5 text-md font-semibold transition-colors ${
                  index === 0
                    ? "font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}

                {index === 0 && (
                  <span className="gradient-accent absolute left-0 bottom-2.5 h-0.5 w-full rounded-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ModeToggle />

          <Link
            href="/sign-in"
            className="gradient-accent hidden rounded-md px-5 py-2.5 text-md font-medium text-primary-foreground shadow-sm transition-all hover:opacity-90 sm:inline-flex"
          >
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}
