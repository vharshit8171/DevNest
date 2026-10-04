"use client";

import { useState } from "react";
import FeedToolbar from "./FeedToolBar";
import { posts } from "@/data/constants";
import type { FeedTab } from "@/types/types";
import { Navbar } from "@/components/home/Navbar";
import PostCard from "@/components/feed/home/PostCard";
import HomeSidebar from "@/components/feed/home/HomeSidebar";
import HomeRightSidebar from "@/components/feed/home/HomeRightSidebar";

export default function HomeFeed() {
  const [activeTab, setActiveTab] = useState<FeedTab>("For You");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar variant="app" showAvatar />

      <main className="mx-auto grid max-w-360 grid-cols-1 gap-4 px-4 py-5 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)_320px] lg:px-8">
        <aside className="hidden lg:block">
          <HomeSidebar />
        </aside>

        <section className="min-w-0">
          <div className="sticky top-20 z-40 -mx-2 mb-3 rounded-md bg-background/90 px-3 py-1.5 shadow-sm backdrop-blur-xl sm:-mx-1">
            <FeedToolbar activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          <div className="space-y-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        <aside className="hidden lg:block">
          <HomeRightSidebar />
        </aside>
      </main>
    </div>
  );
}
