import { Bookmark, Heart, MessageCircle, Share2 } from "lucide-react";

const countFormatter = new Intl.NumberFormat("en", { notation: "compact" });

type PostActionsProps = {
  likes: number;
  comments: number;
  shares: number;
  liked: boolean;
  bookmarked: boolean;
  onLike: () => void;
  onBookmark: () => void;
};

export default function PostActions({
  likes,
  comments,
  shares,
  liked,
  bookmarked,
  onLike,
  onBookmark,
}: PostActionsProps) {
  return (
    <div className="flex min-h-14 items-center gap-1 px-3 sm:gap-2 sm:px-5">
      <button
        type="button"
        onClick={onLike}
        aria-label={liked ? "Unlike post" : "Like post"}
        aria-pressed={liked}
        className={`flex h-9 cursor-pointer items-center gap-2 rounded-xl px-3 text-xs font-medium transition-colors ${
          liked
            ? "bg-rose-500/10 text-rose-500"
            : "text-muted-foreground hover:bg-rose-500/10 hover:text-rose-500"
        }`}
      >
        <Heart className="size-4" fill={liked ? "currentColor" : "none"} />
        <span>{countFormatter.format(likes + (liked ? 1 : 0))}</span>
      </button>

      <button
        type="button"
        aria-label="View comments"
        className="flex h-9 cursor-pointer items-center gap-2 rounded-xl px-3 text-xs font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
      >
        <MessageCircle className="size-4" />
        <span>{countFormatter.format(comments)}</span>
      </button>

      <button
        type="button"
        aria-label="Share post"
        className="flex h-9 cursor-pointer items-center gap-2 rounded-xl px-3 text-xs font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
      >
        <Share2 className="size-4" />
        <span>{countFormatter.format(shares)}</span>
      </button>

      <button
        type="button"
        onClick={onBookmark}
        aria-label={bookmarked ? "Remove bookmark" : "Bookmark post"}
        aria-pressed={bookmarked}
        className={`ml-auto flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-xl transition-colors ${
          bookmarked
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        }`}
      >
        <Bookmark
          className="size-4"
          fill={bookmarked ? "currentColor" : "none"}
        />
      </button>
    </div>
  );
}