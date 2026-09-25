import {
  Users,
  MessageCircle,
  Code2,
  Rocket,
  Globe,
  type LucideIcon,
} from "lucide-react";

/* ---------------------------------- Types --------------------------------- */

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

/* -------------------------------- Features -------------------------------- */

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

/* ---------------------------------- Stats --------------------------------- */

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

/* -------------------------------- Community ------------------------------- */

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
      "A platform to connect developers, share projects, and Grow together.",
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

/* ---------------------------------- Footer -------------------------------- */

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
    links: ["Help Center", "Guidelines", "Privacy Policy", "Terms of Service"],
  },
];
