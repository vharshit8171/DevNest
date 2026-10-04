"use client";

import { posts } from "@/data/constants";
import PostCard from "@/components/feed/home/PostCard";

export function PostSection() {
  return (
    <section className="mx-4 mt-1.5 space-y-4 pb-7 sm:mx-6 lg:mx-16">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}
