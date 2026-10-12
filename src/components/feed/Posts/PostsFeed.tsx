"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { posts } from "@/data/constants";
import type { Feed } from "@/types/types";
import PostsHeader, { type Category } from "./PostsHeader";
import PostsList from "./PostsList";

/* Derived from the post's own content, so no separate category field is needed. */
function getCategory(post: Feed): Exclude<Category, "All"> {
  if (post.code) return "Code";
  if (post.video) return "Videos";
  if (post.image) return "Images";
  return "Text";
}

/* Built once at module level, so typing in the search box never rebuilds it. */
const indexedPosts = posts.map((post) => ({
  post,
  category: getCategory(post),
  haystack: [
    post.author.name,
    post.author.username,
    post.content ?? "",
    post.tags.join(" "),
  ]
    .join(" ")
    .toLowerCase(),
}));

export default function PostsFeed() {
  const [active, setActive] = useState<Category>("All");
  const [query, setQuery] = useState("");

  /* The input stays instant; the list filters at lower priority. */
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    const normalizedQuery = deferredQuery.trim().toLowerCase();

    return indexedPosts
      .filter(
        ({ category, haystack }) =>
          (active === "All" || category === active) &&
          (!normalizedQuery || haystack.includes(normalizedQuery)),
      )
      .map(({ post }) => post);
  }, [active, deferredQuery]);

  return (
    <section className="relative mx-auto w-full max-w-310">
      <PostsHeader
        query={query}
        onQueryChange={setQuery}
        active={active}
        onTabChange={setActive}
      />

      <PostsList posts={filtered} active={active} />
    </section>
  );
}
