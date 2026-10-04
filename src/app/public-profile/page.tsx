"use client";

import { useState } from "react";
import type { ProfileTab } from "@/types/types";
import { Profilestats } from "@/data/constants";
import { Navbar } from "@/components/home/Navbar";
import { PhotoModal } from "@/components/public-profile/PhotoModal";
import { ProfileTabs } from "@/components/public-profile/ProfileTabs";
import { PostSection } from "@/components/public-profile/PostSection";
import { MessageModal } from "@/components/public-profile/MessageModal";
import { AboutSection } from "@/components/public-profile/AboutSection";
import { ProfileHeader } from "@/components/public-profile/ProfileHeader";
import { ProjectsSection } from "@/components/public-profile/ProjectSection";

export default function PublicProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState<ProfileTab>("about");
  const [messageOpen, setMessageOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar variant="app" showAvatar />

      <main className="mx-auto max-w-7xl px-3 pt-1.5 pb-5 sm:px-5 lg:px-2">
        <div className="mt-7 overflow-hidden rounded-md border border-border bg-card shadow-sm sm:mt-3">
          <ProfileHeader
            isFollowing={isFollowing}
            onMessage={() => setMessageOpen(true)}
            onToggleFollow={() => setIsFollowing((current) => !current)}
          />

          <section className="w-[65vw] mx-auto grid grid-cols-2 sm:grid-cols-4">
            {Profilestats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center px-1 py-4 sm:py-3 ${
                  index !== 0 ? "border-l border-border" : ""
                }`}
              >
                <span className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {stat.value}
                </span>

                <span className="text-xs font-medium text-muted-foreground sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </section>

          <ProfileTabs activeTab={activeTab} onChange={setActiveTab} />

          {activeTab === "about" && (
            <AboutSection onSelectPhoto={setSelectedPhoto} />
          )}
          {activeTab === "posts" && <PostSection />}
          {activeTab === "projects" && <ProjectsSection />}
          {/* {activeTab === "connections" && <ConnectionsSection />} */}
        </div>
      </main>
      {messageOpen ? (
        <MessageModal onClose={() => setMessageOpen(false)} />
      ) : null}
      {selectedPhoto ? (
        <PhotoModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      ) : null}
    </div>
  );
}
