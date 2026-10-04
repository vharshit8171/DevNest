import Image from "next/image";
import { Plus } from "lucide-react";
import { suggestedUsers } from "@/data/constants";

type SuggestedUsersProps = {
  title: string;
};

export default function SuggestedUsers({ title }: SuggestedUsersProps) {
  return (
    <section className="rounded-md border border-border bg-card px-3 py-4 shadow-sm">
      <div className="flex items-center justify-between px-1.5">
        <h2 className="text-md font-semibold text-foreground">{title}</h2>

        <button
          type="button"
          className="flex justify-center items-center gap-0.5 cursor-pointer text-sm font-medium text-accent-secondary transition-colors hover:text-primary"
        >
          <Plus size={10} strokeWidth={3.5} />
          Follow
        </button>
      </div>

      <div className="mt-3 space-y-2">
        {suggestedUsers.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-3 rounded-md border border-border bg-background p-2.5 transition-colors hover:bg-muted"
          >
            <div className="size-9 shrink-0 overflow-hidden rounded-full border border-border bg-muted">
              <Image
                src={user.avatar}
                alt={user.name}
                width={36}
                height={36}
                quality={100}
                className="size-full object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-foreground">
                {user.name}
              </p>

              <p className="truncate text-[11px] text-muted-foreground">
                @{user.username}
              </p>
            </div>

            <button
              type="button"
              className="shrink-0 cursor-pointer rounded-md border border-border bg-muted px-4 py-2 text-[11px] font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              Follow
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
