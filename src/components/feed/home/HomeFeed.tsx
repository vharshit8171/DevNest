"use client";

import { useState } from "react";
import FeedToolbar from "./FeedToolBar";
import { posts } from "@/data/constants";
import type { FeedTab } from "@/types/types";
import PostCard from "@/components/feed/home/PostCard";
import HomeRightSidebar from "@/components/feed/home/HomeRightSidebar";

export default function HomeFeed() {
  const [activeTab, setActiveTab] = useState<FeedTab>("For You");

  return (
    <div className="grid min-w-0 grid-cols-1 items-start gap-3 lg:grid-cols-[minmax(0,1fr)_320px]">
      <section className="min-w-0">
        <div className="sticky top-20 z-30 -mx-2 mb-5 border-b border-border/60 bg-card px-3 py-3 backdrop-blur-xl sm:mx-0 sm:rounded-md sm:border sm:px-4 sm:shadow-sm">
          <FeedToolbar activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Masonry: columns instead of grid so each card keeps its natural height */}
        <div className="columns-1 gap-3 md:columns-2">
          {posts.map((post) => (
            <div key={post.id} className="mb-3 break-inside-avoid">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </section>

      <aside className="hidden min-w-0 lg:sticky lg:top-24 lg:block">
        <HomeRightSidebar />
      </aside>
    </div>
  );
}