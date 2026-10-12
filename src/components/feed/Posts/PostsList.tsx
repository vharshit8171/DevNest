import { Search } from "lucide-react";
import PostCard from "@/components/feed/home/PostCard";
import type { Feed } from "@/types/types";
import { POSTS_PANEL_ID, getTabId, type Category } from "./PostsHeader";

type PostsListProps = {
  posts: Feed[];
  active: Category;
};

export default function PostsList({ posts, active }: PostsListProps) {
  return (
    <div id={POSTS_PANEL_ID} role="tabpanel" aria-labelledby={getTabId(active)}>
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
            <Search className="h-5 w-5" />
          </div>

          <p className="mt-4 font-medium text-card-foreground">
            No posts found
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            Try another category or search term.
          </p>
        </div>
      )}
    </div>
  );
}
