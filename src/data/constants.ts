// ----------------- HOME CONSTANTS ------------------

import {
  Code2,
  Globe,
  Globe2,
  MessageCircle,
  PlaySquare,
  Rocket,
  Users,
  X,
} from "lucide-react";

import type {
  CommunityPost,
  Feature,
  FooterColumn,
  Post,
  ProfileLinkItem,
  ProfilePhoto,
  ProfileStats,
  ProfileTabItem,
  Stat,
} from "@/types/types";

export const features: Feature[] = [
  {
    icon: Users,
    title: "Connect",
    description:
      "Connect with developers, follow others, and build meaningful professional relationships.",
  },
  {
    icon: MessageCircle,
    title: "Share & Learn",
    description:
      "Share your knowledge, ask questions, and learn from the amazing community.",
  },
  {
    icon: Code2,
    title: "Build & Showcase",
    description:
      "Showcase your projects, get feedback, and build your developer portfolio.",
  },
  {
    icon: Rocket,
    title: "Grow Together",
    description:
      "Stay updated with the latest trends, discussions, and grow together as a community.",
  },
];

export const stats: Stat[] = [
  {
    icon: Users,
    value: "10K+",
    label: "Developers",
    iconClassName: "text-fuchsia-400",
  },
  {
    icon: MessageCircle,
    value: "2K+",
    label: "Discussions",
    iconClassName: "text-sky-400",
  },
  {
    icon: Code2,
    value: "1K+",
    label: "Projects",
    iconClassName: "text-blue-400",
  },
  {
    icon: Globe,
    value: "120+",
    label: "Communities",
    iconClassName: "text-violet-400",
  },
];

export const communityPosts: CommunityPost[] = [
  {
    id: 1,
    name: "Alex Johnson",
    time: "2h ago",
    initials: "A",
    avatarClassName: "from-indigo-500 to-blue-600",
    tag: "Question",
    title: "How to optimize React performance?",
    description:
      "I'm working on a large React app and facing performance issues. Any best practices?",
    comments: "24",
    likes: "12",
    views: "320",
  },
  {
    id: 2,
    name: "Sarah Chen",
    time: "5h ago",
    initials: "S",
    avatarClassName: "from-amber-500 to-rose-500",
    tag: "Project",
    title: "DevConnect – Developer Networking App",
    description:
      "A platform to connect developers, share projects, and grow together.",
    comments: "32",
    likes: "89",
    views: "1.2K",
  },
  {
    id: 3,
    name: "Mike Wilson",
    time: "1d ago",
    initials: "M",
    avatarClassName: "from-emerald-500 to-teal-600",
    tag: "Discussion",
    title: "Best practices for TypeScript APIs",
    description:
      "Let's discuss the best practices for building scalable and type-safe APIs.",
    comments: "18",
    likes: "56",
    views: "780",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    heading: "Platform",
    links: ["Features", "Communities", "Explore", "Pricing"],
  },
  {
    heading: "Company",
    links: ["About Us", "Blog", "Careers", "Contact"],
  },
  {
    heading: "Support",
    links: [
      "Help Center",
      "Guidelines",
      "Privacy Policy",
      "Terms of Service",
    ],
  },
];


// ------------------ PROFILE CONSTANTS ----------------

import type { Project } from "@/types/types";

export const Profilestats: ProfileStats[] = [
  {
    value: "1.2K",
    label: "Followers",
  },
  {
    value: "348",
    label: "Following",
  },
  {
    value: "56",
    label: "Posts",
  },
  {
    value: "12",
    label: "Projects",
  },
];

export const tabs: ProfileTabItem[] = [
  {
    label: "About",
    value: "about",
  },
  {
    label: "Posts",
    value: "posts",
  },
  {
    label: "Projects",
    value: "projects",
  },
  {
    label: "Connections",
    value: "connections",
  },
];

export const profileSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
];

export const profileInterests = [
  "Web Development",
  "Open Source",
  "UI/UX Design",
  "AI & ML",
  "DevOps",
];

export const profileLinks: ProfileLinkItem[] = [
  {
    label: "Portfolio",
    icon: Globe2,
  },
  {
    label: "Twitter/X",
    icon: X,
  },
  {
    label: "YouTube",
    icon: PlaySquare,
  },
];

export const profilePhotos: ProfilePhoto[] = [
  {
    src: "https://i.pinimg.com/736x/6e/f9/8e/6ef98e0b6bf51dc4c72001feb56a8470.jpg",
    alt: "Code editor open on a laptop",
  },
  {
    src: "https://i.pinimg.com/736x/1d/86/09/1d8609b162095d7f2e0477e14c79c0d0.jpg",
    alt: "React conference stage and audience",
  },
  {
    src: "https://i.pinimg.com/736x/d1/f7/0b/d1f70b0bd42923d98e1ed84af43f74a0.jpg",
    alt: "Developer desk with a glowing keyboard",
  },
];

export const profilePosts: Post[] = [
  {
    id: 1,
    author: "Harshit Verma",
    role: "Full Stack Developer",
    avatar: "/images/avatars/avatar-4.jpg",
    time: "2 days ago",
    visibility: "Public",
    tag: "Development",
    title: "Small improvements compound.",
    body:
      "Today I refactored a shared component, removed a few rough edges, and made the whole experience feel lighter. It’s always satisfying when a small cleanup makes the entire codebase easier to work with.",
    likes: 38,
    comments: 7,
    reposts: 4,
  },
  {
    id: 2,
    author: "Harshit Verma",
    role: "Full Stack Developer",
    avatar: "/images/avatars/avatar-4.jpg",
    time: "5 days ago",
    visibility: "Public",
    tag: "Open Source",
    title: "Building in public, one step at a time.",
    body:
      "Sharing the process, learning from the community, and contributing whenever possible. Open source continues to be one of the best ways to learn from different approaches.",
    likes: 24,
    comments: 5,
    reposts: 3,
  },
];

export const projects: Project[] = [
  {
    id: "devnest",
    title: "DevNest",
    description:
      "A developer community platform where developers can connect, share knowledge, discover projects, and grow together.",
    image: "https://i.pinimg.com/736x/6e/f9/8e/6ef98e0b6bf51dc4c72001feb56a8470.jpg",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/vharshit8171/devnest",
    status: "In Development",
  },
  {
    id: "ai-website-builder",
    title: "AI Website Builder",
    description:
      "An AI-powered platform for generating and editing websites using modern web technologies.",
    image: "https://i.pinimg.com/736x/d1/f7/0b/d1f70b0bd42923d98e1ed84af43f74a0.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Gemini"],
    githubUrl: "https://github.com/vharshit8171",
    liveUrl: "#",
    status: "Completed",
  },
];


// ---------------------- FEED CONSTANTS ------------------------

import type { Feed } from "@/types/types";

export const posts: Feed[] = [
  {
    id: "1",
    author: {
      name: "Sarah Chen",
      username: "sarahchen",
      avatar: "/images/avatars/avatar-4.jpg",
    },
    createdAt: "2h ago",
    content:
      "Just shipped a major refactor of our authentication system 🚀 Cleaner code, better performance, and a much better developer experience. Small improvements compound.",
    tags: ["webdev", "productivity", "buildinpublic"],
    likes: 142,
    comments: 28,
    shares: 12,
  },
  {
    id: "2",
    author: {
      name: "Alex Johnson",
      username: "alexjdev",
      avatar: "/images/avatars/avatar-4.jpg",
      online: true,
    },
    createdAt: "5h ago",
    content:
      "A simple utility I use all the time to debounce functions in JavaScript.",
    tags: [],
    likes: 206,
    comments: 52,
    shares: 12,
    bookmarked: true,
    code: {
      language: "JavaScript",
      lines: [
        "function debounce(fn, delay = 300) {",
        "  let timeoutId;",
        "",
        "  return (...args) => {",
        "    clearTimeout(timeoutId);",
        "    timeoutId = setTimeout(() => {",
        "      fn(...args);",
        "    }, delay);",
        "  };",
        "}",
      ],
    },
  },
];

export const suggestedUsers = [
  {
    id: "1",
    name: "Sarah Chen",
    username: "sarahchen",
    avatar: "/images/avatars/avatar-4.jpg",
  },
  {
    id: "2",
    name: "Mike Wilson",
    username: "mikewilson",
    avatar: "/images/avatars/avatar-4.jpg",
  },
  {
    id: "3",
    name: "Emmia Roheqez",
    username: "emmia",
    avatar: "/images/avatars/avatar-4.jpg",
  },
  {
    id: "4",
    name: "Emmia Roheqez",
    username: "emmia",
    avatar: "/images/avatars/avatar-4.jpg",
  },
];