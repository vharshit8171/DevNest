"use client";

import { useState } from "react";
import PostHeader from "@/components/feed/home/PostHeader";
import PostActions from "@/components/feed/home/PostActions";
import PostContent from "@/components/feed/home/PostContent";
import type { Feed } from "@/types/types";

type PostCardProps = {
  post: Feed;
};

export default function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(post.bookmarked ?? false);

  return (
    <article className="overflow-hidden rounded-md border border-border/55 bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="p-5 sm:px-6 sm:py-5">
        <PostHeader
          author={post.author}
          createdAt={post.createdAt}
        />

        <div className="mt-4">
          <PostContent post={post} />
        </div>
      </div>

      <PostActions
        likes={post.likes}
        comments={post.comments}
        shares={post.shares}
        liked={liked}
        bookmarked={bookmarked}
        onLike={() => setLiked((value) => !value)}
        onBookmark={() => setBookmarked((value) => !value)}
      />
    </article>
  );
}