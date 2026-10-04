"use client";

import { Search, Sparkles } from "lucide-react";
import type { FeedTab } from "@/types/types";

type FeedToolbarProps = {
  activeTab: FeedTab;
  onTabChange: (tab: FeedTab) => void;
};

const tabs: FeedTab[] = ["For You", "Following", "Trending"];

export default function FeedToolbar({
  activeTab,
  onTabChange,
}: FeedToolbarProps) {
  return (
    <div className="sticky top-20 z-40 -mx-2 rounded-md px-3 py-3 sm:-mx-1 dark:bg-background/90 dark:shadow-sm dark:backdrop-blur-xl">
      <div className="flex flex-col items-center gap-3">
        <div className="flex w-full items-center justify-center gap-2">
          <div className="group relative w-full max-w-2xl">
            <Search
              className="absolute left-4 top-1/2 size-4.5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-(--accent-from)"
              strokeWidth={2.1}
            />

            <input
              type="text"
              placeholder="Search posts, developers, communities..."
              className="h-11 w-full rounded-full border border-border/70 bg-card px-11 pr-5 text-sm text-foreground shadow-sm outline-none transition-all duration-200 placeholder:text-muted-foreground/65 hover:border-border focus:border-(--accent-from)/40 focus:bg-card focus:ring-4 focus:ring-(--accent-from)/8 dark:border-border/70 dark:bg-card dark:shadow-sm"
            />
          </div>

          <button
            type="button"
            className="hidden h-11 shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-linear-to-r from-(--accent-from) to-(--accent-to) px-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:inline-flex"
          >
            <Sparkles className="size-4" strokeWidth={2.2} />
            Create Post
          </button>
        </div>

        <div className="flex max-w-full items-center overflow-x-auto rounded-full px-4 py-1 dark:border dark:border-border/35 dark:bg-card/60 dark:shadow-sm">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => onTabChange(tab)}
                className={`relative shrink-0 cursor-pointer rounded-full px-5 py-1.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-muted text-foreground shadow-sm dark:bg-background"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                }`}
              >
                {tab}

                {isActive && (
                  <span className="absolute inset-x-5 -bottom-0.5 h-0.5 rounded-full bg-linear-to-r from-(--accent-from) to-(--accent-to)" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
