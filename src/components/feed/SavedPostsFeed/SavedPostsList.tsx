import { Bookmark } from "lucide-react";
import PostCard from "@/components/feed/home/PostCard";
import type { Feed } from "@/types/types";
import {
  SAVED_PANEL_ID,
  getSavedTabId,
  type Category,
} from "./SavedPostsHeader";

type SavedPostsListProps = {
  posts: Feed[];
  active: Category;
  savedCount: number;
};

export default function SavedPostsList({
  posts,
  active,
  savedCount,
}: SavedPostsListProps) {
  return (
    <div
      id={SAVED_PANEL_ID}
      role="tabpanel"
      aria-labelledby={getSavedTabId(active)}
    >
      {posts.length > 0 ? (
        <div className="columns-1 gap-3 md:columns-2">
          {posts.map((post) => (
            <div key={post.id} className="mb-3 break-inside-avoid">
              <PostCard
                post={post}
                // href={`/posts/${post.id}`}  ← enable once your catch-all route exists
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border bg-card px-6 py-20 text-center">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-muted text-muted-foreground">
            <Bookmark className="size-5" />
          </div>

          <p className="mt-4 font-semibold text-card-foreground">
            {savedCount === 0
              ? "No saved posts yet"
              : "No matching posts found"}
          </p>

          <p className="mx-auto mt-1 max-w-sm text-sm leading-6 text-muted-foreground">
            {savedCount === 0
              ? "Bookmark posts from your feed to keep useful ideas and coding resources here."
              : "Try another search term or category to find the post you're looking for."}
          </p>
        </div>
      )}
    </div>
  );
}
