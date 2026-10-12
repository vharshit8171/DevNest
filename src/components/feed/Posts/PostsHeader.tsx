"use client";

import { ChevronRight, Search, Sparkles, X } from "lucide-react";
import { useEffect, useState, type KeyboardEvent } from "react";

export type Category = "All" | "Text" | "Code" | "Images" | "Videos";

export const CATEGORY_TABS: Category[] = [
  "All",
  "Text",
  "Code",
  "Images",
  "Videos",
];

export const POSTS_PANEL_ID = "posts-panel";
export const getTabId = (tab: Category) => `posts-tab-${tab}`;

type PostsHeaderProps = {
  query: string;
  onQueryChange: (value: string) => void;
  active: Category;
  onTabChange: (tab: Category) => void;
};

export default function PostsHeader({
  query,
  onQueryChange,
  active,
  onTabChange,
}: PostsHeaderProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleTabKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

    event.preventDefault();
    const step = event.key === "ArrowRight" ? 1 : -1;
    const count = CATEGORY_TABS.length;
    const next =
      CATEGORY_TABS[(CATEGORY_TABS.indexOf(active) + step + count) % count];

    onTabChange(next);
    document.getElementById(getTabId(next))?.focus();
  };

  return (
    <>
      <div className="relative mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Posts
          </h1>

          <p className="mt-1 max-w-md text-sm font-semibold leading-5 text-muted-foreground">
            Discover conversations, ideas, code, and updates from the DevNest
            community.
          </p>
        </div>

        <div className="flex w-full shrink-0 flex-col gap-1.5 sm:flex-row md:w-auto md:pt-1">
          <div className="group relative w-full sm:w-72 lg:w-114">
            <Search
              className="absolute left-4 top-1/2 size-4.5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-(--accent-from)"
              strokeWidth={2.1}
            />

            <input
              type="search"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Search posts..."
              aria-label="Search posts"
              className="h-10 w-full rounded-full border border-border/70 bg-card px-11 pr-5 text-sm text-foreground shadow-sm outline-none transition-all duration-200 placeholder:text-muted-foreground/65 hover:border-border focus:border-(--accent-from)/40 focus:bg-card focus:ring-4 focus:ring-(--accent-from)/8 dark:border-border/70 dark:bg-card dark:shadow-sm"
            />
          </div>

          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="gradient-accent inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-full px-4.5 text-sm font-semibold text-white shadow-[0_6px_20px_color-mix(in_srgb,var(--accent-from)_22%,transparent)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_8px_24px_color-mix(in_srgb,var(--accent-from)_28%,transparent)] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Sparkles className="size-4" strokeWidth={2.2} />
            New Post
          </button>
        </div>
      </div>

      {/* Tab buttons */}
      <div
        role="tablist"
        aria-label="Post categories"
        onKeyDown={handleTabKeyDown}
        className="mb-3 flex gap-2 overflow-x-auto pb-1"
      >
        {CATEGORY_TABS.map((tab) => {
          const isActive = active === tab;

          return (
            <button
              key={tab}
              id={getTabId(tab)}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={POSTS_PANEL_ID}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onTabChange(tab)}
              className={`relative shrink-0 cursor-pointer overflow-hidden rounded-md border px-5.5 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                isActive
                  ? "border-transparent text-white shadow-md"
                  : "border-border bg-card text-muted-foreground hover:border-primary/25 hover:text-foreground"
              }`}
            >
              {isActive && (
                <span className="gradient-accent-diagonal absolute inset-0 rounded-md" />
              )}

              <span className="relative z-10">{tab}</span>
            </button>
          );
        })}
      </div>

      <CreatePostModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

function CreatePostModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Create a new post"
      className="fixed inset-0 z-50 grid place-items-center bg-black/65 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-secondary">
              Community
            </p>

            <h2 className="mt-1 text-xl font-bold">Create a post</h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="cursor-pointer rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <textarea
          autoFocus
          placeholder="What would you like to share?"
          className="mt-5 min-h-40 w-full resize-none rounded-xl border border-border bg-muted p-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
        />

        <div className="mt-4 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onClose}
            className="gradient-accent inline-flex cursor-pointer items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Publish post
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
