import Image from "next/image";
import CodeBlock from "@/components/feed/home/CodeBlock";
import type { Feed } from "@/types/types";

type PostContentProps = {
  post: Feed;
};

export default function PostContent({ post }: PostContentProps) {
  return (
    <div className="mt-5">
      {post.content && (
        <p className="whitespace-pre-line wrap-break-word text-sm leading-7 text-foreground/90 sm:text-[15px]">
          {post.content}
        </p>
      )}

      {post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-primary/10 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/10 dark:border-primary/20 dark:bg-primary/10 dark:text-white/80"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {post.code && (
        <div className="relative z-10 mt-5 overflow-hidden rounded-xl border border-border/80">
          <CodeBlock code={post.code} />
        </div>
      )}

      {post.image && (
        <div className="mt-5 overflow-hidden rounded-xl border border-border/80 bg-muted/30">
          <Image
            src={post.image.url}
            alt={post.image.alt ?? "Post image"}
            width={post.image.width ?? 1200}
            height={post.image.height ?? 800}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-auto max-h-120 w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
          />
        </div>
      )}

      {post.video && (
        <div className="relative z-10 mt-5 overflow-hidden rounded-xl border border-border/80 bg-black">
          <video
            src={post.video.url}
            controls
            playsInline
            preload="metadata"
            className="max-h-120 w-full object-contain"
          />
        </div>
      )}
    </div>
  );
}