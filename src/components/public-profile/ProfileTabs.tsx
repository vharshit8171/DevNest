import { tabs } from "@/data/constants";
import type { ProfileTab } from "@/types/types";

type ProfileTabsProps = {
  activeTab: ProfileTab;
  onChange: (tab: ProfileTab) => void;
};

export function ProfileTabs({ activeTab, onChange }: ProfileTabsProps) {
  return (
    <nav className="px-4 py-1.5 sm:px-8" aria-label="Profile sections">
      <div className="mx-auto grid max-w-2xl grid-cols-4 bg-muted/50 shadow-sm dark:bg-muted/70">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.value;
          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => onChange(tab.value)}
              className={`relative px-2 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 cursor-pointer focus-visible:outline-offset-2 focus-visible:outline-primary sm:text-lg ${
                isActive
                  ? "text-foreground shadow-md shadow-black/5"
                  : "text-muted-foreground hover:bg-card/60 hover:text-foreground dark:hover:bg-background/40"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="relative z-10">{tab.label}</span>

              {isActive && (
                <span className="gradient-accent absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
