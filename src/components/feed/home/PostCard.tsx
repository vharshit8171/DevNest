"use client";

import { useState } from "react";
import Link from "next/link";
import PostHeader from "@/components/feed/home/PostHeader";
import PostActions from "@/components/feed/home/PostActions";
import PostContent from "@/components/feed/home/PostContent";
import type { Feed } from "@/types/types";

type PostCardProps = {
  post: Feed;
  /** When provided, the whole card becomes clickable (stretched link). */
  href?: string;
};

export default function PostCard({ post, href }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(post.bookmarked ?? false);

  return (
    <article className="group relative overflow-hidden rounded-xl border border-border/80 bg-card cursor-pointer shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md">
      {href && (
        <Link
          href={href}
          aria-label={`Open post by ${post.author.name}`}
          className="absolute inset-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        />
      )}

      <div className="px-4 py-5 sm:px-6 sm:py-6">
        <PostHeader author={post.author} createdAt={post.createdAt} />

        <PostContent post={post} />
      </div>

      <div className="relative z-10 border-t border-border/70 bg-muted/20">
        <PostActions
          likes={post.likes}
          comments={post.comments}
          shares={post.shares}
          liked={liked}
          bookmarked={bookmarked}
          onLike={() => setLiked((value) => !value)}
          onBookmark={() => setBookmarked((value) => !value)}
        />
      </div>
    </article>
  );
}