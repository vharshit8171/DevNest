import Image from "next/image";
import { Eye, MessageCircle, ThumbsUp } from "lucide-react";
import type { CommunityPost, PostTag } from "@/types/types";

const tagStyles: Record<PostTag, string> = {
  Question:
    "border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400",
  Project: "border-sky-500/20 bg-sky-500/10 text-sky-600 dark:text-sky-400",
  Discussion:
    "border-[var(--accent-from)]/20 bg-[var(--accent-from)]/10 text-[var(--accent-from)]",
};

export function CommunityCard({
  post,
  index,
}: {
  post: CommunityPost;
  index: number;
}) {
  const avatarNumber = (index % 4) + 1;

  return (
    <article className="flex flex-col rounded-md border border-border bg-card px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-(--accent-from)/25 hover:shadow-[0_20px_50px_-20px_rgba(99,102,241,0.25)] dark:hover:bg-white/2">
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
          <Image
            src={`/images/avatars/avatar-${avatarNumber}.jpg`}
            alt={`${post.name} avatar`}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0">
          <p className="truncate text-[14.5px] font-medium text-foreground">
            {post.name}
          </p>

          <p className="text-[11.5px] font-semibold text-muted-foreground">
            {post.time}
          </p>
        </div>

        <span
          className={`ml-auto shrink-0 rounded-sm border px-3 py-1.5 text-[12px] font-semibold ${tagStyles[post.tag]}`}
        >
          {post.tag}
        </span>
      </div>

      <h3 className="mt-4 text-[14.5px] font-semibold leading-snug text-foreground">
        {post.title}
      </h3>

      <p className="mt-1.5 line-clamp-2 text-[12.5px] font-semibold leading-relaxed text-muted-foreground">
        {post.description}
      </p>

      <div className="mt-auto flex items-center gap-4 pt-8 text-[12.5px] font-semibold text-muted-foreground">
        {post.id === 1 ? (
          <>
            <span className="inline-flex items-center gap-1.5">
              <MessageCircle
                className="h-4 w-4 text-muted-foreground"
                strokeWidth={1.8}
              />
              {post.comments}
            </span>

            <span className="inline-flex items-center gap-1.5">
              <ThumbsUp
                className="h-4 w-4 text-muted-foreground"
                strokeWidth={1.8}
              />
              {post.likes}
            </span>
          </>
        ) : (
          <>
            <span className="inline-flex items-center gap-1.5">
              <ThumbsUp
                className="h-4 w-4 text-muted-foreground"
                strokeWidth={1.8}
              />
              {post.likes}
            </span>

            <span className="inline-flex items-center gap-1.5">
              <MessageCircle
                className="h-4 w-4 text-muted-foreground"
                strokeWidth={1.8}
              />
              {post.comments}
            </span>
          </>
        )}

        <span className="ml-auto inline-flex items-center gap-1.5">
          <Eye className="h-4 w-4 text-muted-foreground" strokeWidth={1.8} />
          {post.views}
        </span>
      </div>
    </article>
  );
}
