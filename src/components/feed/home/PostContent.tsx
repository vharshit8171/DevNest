"use client";

import Image from "next/image";
import CodeBlock from "@/components/feed/home/CodeBlock";
import type { Feed } from "@/types/types";

type PostContentProps = {
  post: Feed;
};

export default function PostContent({ post }: PostContentProps) {
  return (
    <div>
      {post.content && (
        <p className="text-[14.5px] leading-7 text-foreground/90">
          {post.content}
        </p>
      )}

      {post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary dark:text-white/85"
            >
              <span className="mr-1">#</span>
              {tag}
            </span>
          ))}
        </div>
      )}

      {post.code && (
        <div className="mt-5">
          <CodeBlock code={post.code} />
        </div>
      )}

      {post.image && (
        <div className="mt-5 overflow-hidden rounded-xl border border-border/70">
          <Image
            src={post.image.url}
            alt={post.image.alt ?? "Post image"}
            width={post.image.width ?? 1200}
            height={post.image.height ?? 800}
            className="h-auto w-full object-cover"
          />
        </div>
      )}

      {post.video && (
        <div className="mt-5 overflow-hidden rounded-xl border border-border/70">
          <video
            src={post.video.url}
            controls
            playsInline
            className="max-h-150 w-full bg-black object-contain"
          />
        </div>
      )}
    </div>
  );
}
