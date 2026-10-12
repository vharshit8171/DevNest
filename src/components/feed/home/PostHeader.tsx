import Image from "next/image";
import { MoreHorizontal } from "lucide-react";

type PostHeaderProps = {
  author: {
    name: string;
    username: string;
    avatar: string;
    online?: boolean;
  };
  createdAt: string;
};

export default function PostHeader({ author, createdAt }: PostHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="flex min-w-0 items-center gap-3">
        <div className="relative shrink-0">
          <div className="size-11 overflow-hidden rounded-full bg-muted ring-2 ring-border/70 transition-colors group-hover:ring-primary/20">
            <Image
              src={author.avatar}
              alt=""
              width={44}
              height={44}
              className="size-full object-cover"
            />
          </div>

          {author.online && (
            <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-card bg-emerald-500" />
          )}
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold tracking-tight text-foreground">
            {author.name}
          </p>

          <div className="mt-1 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
            <span className="truncate">@{author.username}</span>
            <span className="size-1 shrink-0 rounded-full bg-muted-foreground/40" />
            <span className="shrink-0">{createdAt}</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Post options"
        className="relative z-10 flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <MoreHorizontal className="size-5" />
      </button>
    </div>
  );
}