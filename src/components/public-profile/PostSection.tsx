import PostCard from "@/components/feed/home/PostCard";
import { posts as allPosts } from "@/data/constants";
import type { Feed } from "@/types/types";
import { FileText } from "lucide-react";

type PostSectionProps = {
  /** Posts to show. Defaults to all posts so existing usage keeps working. */
  posts?: Feed[];
};

export function PostSection({ posts = allPosts }: PostSectionProps) {
  return (
    <section className="mx-4 mt-1.5 pb-7 sm:mx-6 lg:mx-16">
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
            <FileText className="size-5" />
          </div>

          <p className="mt-4 font-semibold text-card-foreground">
            No posts yet
          </p>

          <p className="mx-auto mt-1 max-w-sm text-sm leading-6 text-muted-foreground">
            Posts shared on this profile will show up here.
          </p>
        </div>
      )}
    </section>
  );
}
