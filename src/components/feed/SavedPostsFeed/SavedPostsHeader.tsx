"use client";

export type Category = "All" | "Text" | "Code" | "Images" | "Videos";
export const CATEGORY_TABS: Category[] = [
  "All",
  "Text",
  "Code",
  "Images",
  "Videos",
];

export const SAVED_PANEL_ID = "saved-posts-panel";
export const getSavedTabId = (tab: Category) => `saved-posts-tab-${tab}`;

type SavedPostsHeaderProps = {
  savedCount: number;
  query: string;
  onQueryChange: (value: string) => void;
  active: Category;
  onTabChange: (tab: Category) => void;
};

export default function SavedPostsHeader({
  savedCount,
}: SavedPostsHeaderProps) {
  return (
    <>
      <div className="relative mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Saved Posts
            </h1>

            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1.5 -mt-2.5 text-sm font-semibold text-muted-foreground">
              {savedCount}
            </span>
          </div>

          <p className="mt-1 max-w-md text-sm font-semibold leading-5 text-muted-foreground">
            Keep useful ideas, coding tips, and conversations close at hand.
          </p>
        </div>
      </div>
    </>
  );
}
