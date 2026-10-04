"use client";

import { Bookmark, Heart, MessageCircle, Share2 } from "lucide-react";

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
    <div className="flex items-center px-5 py-3 sm:px-6">
      <button
        type="button"
        onClick={onLike}
        className={`flex cursor-pointer items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm transition-colors ${
          liked
            ? "text-rose-500"
            : "text-muted-foreground hover:bg-muted hover:text-rose-500"
        }`}
      >
        <Heart className="size-5" fill={liked ? "currentColor" : "none"} />
        <span className="font-semibold">{liked ? likes + 1 : likes}</span>
      </button>

      <button
        type="button"
        className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <MessageCircle className="size-5" />
        <span className="font-semibold">{comments}</span>
      </button>

      <button
        type="button"
        className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <Share2 className="size-5" />
        <span className="font-semibold">{shares}</span>
      </button>

      <button
        type="button"
        onClick={onBookmark}
        className={`ml-auto flex size-9 cursor-pointer items-center justify-center rounded-lg transition-colors ${
          bookmarked
            ? "text-primary"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        }`}
      >
        <Bookmark
          className="size-5"
          fill={bookmarked ? "currentColor" : "none"}
        />
      </button>
    </div>
  );
}
