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
          <div className="size-13 overflow-hidden rounded-full border border-border bg-muted">
            <Image
              src={author.avatar}
              alt={author.name}
              width={48}
              height={48}
              quality={100}
              className="size-full object-cover"
            />
          </div>

          {author.online && (
            <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-card bg-emerald-500" />
          )}
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">
            {author.name}
          </p>

          <p className="truncate text-xs font-semibold text-muted-foreground">
            @{author.username}
          </p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-1">
        <span className="text-xs font-semibold text-muted-foreground">
          {createdAt}
        </span>
        <button
          type="button"
          className="flex size-8 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <MoreHorizontal className="size-4.5" />
        </button>
      </div>
    </div>
  );
}
