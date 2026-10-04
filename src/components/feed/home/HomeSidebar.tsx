"use client";

import { useState } from "react";
import {
  Bookmark,
  FileText,
  Home,
  LogOut,
  Search,
  Settings,
  UserRound,
  Users,
} from "lucide-react";

const navigation = [
  {
    label: "Home",
    icon: Home,
  },
  {
    label: "Explore",
    icon: Search,
  },
  {
    label: "Posts",
    icon: FileText,
  },
  {
    label: "Saved",
    icon: Bookmark,
  },
  {
    label: "Communities",
    icon: Users,
  },
  {
    label: "Profile",
    icon: UserRound,
  },
  {
    label: "Settings",
    icon: Settings,
  },
];

export default function HomeSidebar() {
  const [active, setActive] = useState("Home");

  return (
    <aside className="sticky top-24 rounded-md border border-border/70 bg-card/95 p-2.5 shadow-sm backdrop-blur-sm">
      <div className="px-2.5 pb-2.5 pt-1 mb-1.5">
        <p className="text-[11px] text-center font-semibold uppercase tracking-[0.12em] text-muted-foreground/70">
          Navigation
        </p>
      </div>

      <nav className="space-y-0.5">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.label;

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => setActive(item.label)}
              className={`group relative flex w-full cursor-pointer items-center gap-1.75 rounded-md px-2.5 py-2.5 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-linear-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 text-foreground shadow-sm dark:from-indigo-500/15 dark:via-violet-500/10 dark:to-transparent"
                  : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
              }`}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 h-6 w-0.5 -translate-y-1/2 rounded-full bg-linear-to-b from-(--accent-from) to-(--accent-to)" />
              )}

              <span
                className={`flex size-9 shrink-0 items-center justify-center rounded-sm transition-all duration-200 ${
                  isActive
                    ? "bg-linear-to-br from-(--accent-from) to-(--accent-to) text-white shadow-[0_4px_12px_rgba(37,99,235,0.22)]"
                    : "bg-muted/60 text-muted-foreground group-hover:bg-muted group-hover:text-foreground"
                }`}
              >
                <Icon className="size-4.5" strokeWidth={isActive ? 2.2 : 2} />
              </span>
              <span>{item.label}</span>

              {isActive && (
                <span className="ml-auto size-1.5 rounded-full bg-(--accent-from) shadow-[0_0_8px_var(--accent-from)]" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="my-2 h-px bg-border/70" />

      <button
        type="button"
        className="group flex w-full cursor-pointer items-center gap-3 rounded-md px-2.5 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-red-500/8 hover:text-red-500 dark:hover:bg-red-500/10 dark:hover:text-red-400"
      >
        <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted/60 transition-colors group-hover:bg-red-500/10">
          <LogOut className="size-4.25" />
        </span>
        <span>Sign out</span>
      </button>
    </aside>
  );
}
