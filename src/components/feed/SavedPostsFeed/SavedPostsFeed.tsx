"use client";

import { posts } from "@/data/constants";
import type { Feed } from "@/types/types";
import SavedPostsList from "./SavedPostsList";
import { useDeferredValue, useMemo, useState } from "react";
import SavedPostsHeader, { type Category } from "./SavedPostsHeader";

function getCategory(post: Feed): Exclude<Category, "All"> {
  if (post.code) return "Code";
  if (post.video) return "Videos";
  if (post.image) return "Images";

  return "Text";
}

/* Built once at module level, so typing in the search box never rebuilds it. */
const indexedSavedPosts = posts
  .filter((post) => post.bookmarked === true)
  .map((post) => ({
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

export default function SavedPostsFeed() {
  const [active, setActive] = useState<Category>("All");
  const [query, setQuery] = useState("");

  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo<Feed[]>(() => {
    const normalizedQuery = deferredQuery.trim().toLowerCase();

    return indexedSavedPosts
      .filter(
        ({ category, haystack }) =>
          (active === "All" || category === active) &&
          (!normalizedQuery || haystack.includes(normalizedQuery)),
      )
      .map(({ post }) => post);
  }, [active, deferredQuery]);

  return (
    <section className="relative mx-auto w-full max-w-310">
      <SavedPostsHeader
        savedCount={indexedSavedPosts.length}
        query={query}
        onQueryChange={setQuery}
        active={active}
        onTabChange={setActive}
      />

      <SavedPostsList
        posts={filtered}
        active={active}
        savedCount={indexedSavedPosts.length}
      />
    </section>
  );
}
