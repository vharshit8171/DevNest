// --------------- Home Types -----------------

import type { Globe2, LucideIcon } from "lucide-react";

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface Stat {
    icon: LucideIcon;
    value: string;
    label: string;
    iconClassName: string;
}

export type PostTag = "Question" | "Project" | "Discussion";

export interface CommunityPost {
    id: number;
    name: string;
    time: string;
    initials: string;
    avatarClassName: string;
    tag: PostTag;
    title: string;
    description: string;
    comments: string;
    likes: string;
    views: string;
}

export interface FooterColumn {
    heading: string;
    links: string[];
}


// ------------- PROFILE TYPES ----------------

export interface ProfileStats {
    value: string;
    label: string;
}

export type ProfileTab =
    | "about"
    | "posts"
    | "projects"
    | "connections";

export interface ProfileTabItem {
    label: string;
    value: ProfileTab;
}

export interface ProfileLinkItem {
    label: string;
    icon: typeof Globe2;
}

export interface ProfilePhoto {
    src: string;
    alt: string;
}

export type PostsTag =
    | "Development"
    | "Open Source"
    | "Discussion";

export interface Post {
    id: number;
    author: string;
    role: string;
    avatar: string;
    time: string;
    visibility: string;
    tag: PostsTag;
    title: string;
    body: string;
    likes: number;
    comments: number;
    reposts: number;
}

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status?: string;
};


// ------------- Feed Types ---------------

export type FeedTab = "For You" | "Following" | "Trending";

export type CodeContent = {
    language: string;
    lines: string[];
};

export type ImageContent = {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
};

export type VideoContent = {
    url: string;
    poster?: string;
};

export type Feed = {
    id: string;

    author: {
        name: string;
        username: string;
        avatar: string;
        online?: boolean;
    };

    createdAt: string;

    content?: string;

    tags: string[];

    code?: CodeContent;

    image?: ImageContent;

    video?: VideoContent;

    likes: number;
    comments: number;
    shares: number;

    bookmarked?: boolean;
};