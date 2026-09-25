"use client";

import {
  User,
  AtSign,
  Target,
  Link2,
  Sparkles,
  ArrowLeft,
  PartyPopper,
  UsersRound,
  Code2,
  Globe,
  Briefcase,
  Video,
} from "lucide-react";
import Button from "../ui/Button";

interface ReviewFormProps {
  onBack: () => void;
  onComplete: () => void;
}

const skills = ["React", "Next.js", "TypeScript", "Node.js", "Python"];

const interests = [
  "Web Development",
  "Open Source",
  "UI/UX Design",
  "AI & ML",
  "DevOps",
];

const links = [
  {
    icon: <Globe size={12} />,
    label: "Portfolio",
    url: "https://harshitverma.dev",
  },
  {
    icon: <Code2 size={12} />,
    label: "GitHub",
    url: "https://github.com/harshit-verma",
  },
  {
    icon: <Briefcase size={12} />,
    label: "LinkedIn",
    url: "https://linkedin.com/in/harshit-verma",
  },
  {
    icon: <span className="text-[10px] font-bold">𝕏</span>,
    label: "Twitter / X",
    url: "https://x.com/harshit_verma",
  },
  {
    icon: <Video size={12} />,
    label: "YouTube",
    url: "https://youtube.com/@harshitverma",
  },
];

export default function ReviewForm({ onBack, onComplete }: ReviewFormProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 -mt-4.5 items-start gap-2.5 lg:grid-cols-2">
        {/* Basic Information */}
        <div className="flex flex-col gap-2">
          <div className="devnest-card flex flex-col gap-4 rounded-md border border-border bg-gray-50 dark:bg-card p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="gradient-accent flex h-9 w-9 items-center justify-center rounded-sm">
                  <UsersRound
                    size={18}
                    className="text-white"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-[14px] font-semibold text-foreground">
                  Basic Information
                </h3>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 dark:bg-gray-700">
                <User
                  size={15}
                  className="text-muted-foreground"
                  aria-hidden="true"
                />
              </div>

              <div className="flex min-w-0 flex-col">
                <span className="text-[13px] font-medium text-foreground">
                  Harshit Verma
                </span>

                <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                  <AtSign size={10} aria-hidden="true" />
                  harshit_verma
                </span>

                <p className="mt-2 max-w-97 text-[11.5px] leading-4 text-muted-foreground">
                  Full Stack Developer passionate about building scalable web
                  applications and solving real-world problems.
                </p>
              </div>
            </div>
          </div>

          {/* Skills & Interests */}
          <div className="devnest-card flex flex-col gap-2 rounded-md border border-border bg-gray-50 dark:bg-card p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="gradient-accent flex h-9 w-9 items-center justify-center rounded-sm">
                  <Code2
                    size={18}
                    className="text-white"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-[14px] font-semibold text-foreground">
                  Skills & Interests
                </h3>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div>
                <span className="text-[12px] text-muted-foreground">
                  Skills
                </span>

                <div className="mt-1.5 flex flex-wrap gap-1">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-500 dark:bg-gray-700 rounded-lg px-2.5 py-1 text-[10px] font-semibold text-white dark:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[12px] text-muted-foreground">
                  Interests
                </span>

                <div className="mt-1.5 flex flex-wrap gap-1">
                  {interests.map((interest) => (
                    <span
                      key={interest}
                      className="bg-gray-500 dark:bg-gray-700 rounded-lg px-2.5 py-1 text-[10px] font-semibold   text-white dark:text-foreground"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="devnest-card flex flex-col gap-4 rounded-md border border-border bg-gray-50 dark:bg-card p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="gradient-accent flex h-9 w-9 items-center justify-center rounded-sm">
                  <Link2
                    size={18}
                    className="text-white"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-[14px] font-semibold text-foreground">
                  Links
                </h3>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <div key={link.label}
                  className="group grid grid-cols-[95px_minmax(0,1fr)_auto] items-center gap-2"
                >
                  <div className="flex min-w-0 items-center gap-1.5">
                    <span className="shrink-0 text-gray-800/85 dark:text-white/75">
                      {link.icon}
                    </span>

                    <span className="truncate text-[11.5px] font-semibold  text-gray-800/85 dark:text-white/75">
                      {link.label}
                    </span>
                  </div>

                  <span className="min-w-0 truncate text-[11.5px] cursor-pointer text-blue-500">
                    {link.url}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {/* About You */}
          <div className="devnest-card flex flex-col gap-4 rounded-md border border-border bg-gray-50 dark:bg-card p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="gradient-accent flex h-9 w-9 items-center justify-center rounded-sm">
                  <Target
                    size={18}
                    className="text-white"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-[14px] font-semibold text-foreground">
                  About You
                </h3>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 text-[11.5px]">
              <div className="grid grid-cols-[85px_1fr] gap-0.5">
                <span className="text-muted-foreground">Role</span>
                <span className="text-foreground">Full Stack Developer</span>
              </div>

              <div className="grid grid-cols-[85px_1fr] gap-0.5">
                <span className="text-muted-foreground">Location</span>
                <span className="text-foreground">Aligarh, India</span>
              </div>

              <div className="grid grid-cols-[85px_1fr] gap-0.5">
                <span className="text-muted-foreground">Experience</span>
                <span className="text-foreground">2 – 3 Years</span>
              </div>

              <div className="grid grid-cols-[85px_1fr] gap-0.5">
                <span className="text-muted-foreground">Headline</span>

                <span className="leading-4 text-foreground">
                  Building scalable web apps | React | Node.js | TypeScript
                </span>
              </div>

              <div className="mt-1 grid grid-cols-[85px_1fr] gap-0.5">
                <span className="text-muted-foreground">About</span>
                <span className="leading-4 text-muted-foreground">
                  I&apos;m a Full Stack Developer passionate about building
                  scalable web applications and solving real-world problems. I
                  love writing clean code, learning new technologies, and
                  contributing to open source.
                </span>
              </div>
            </div>
          </div>

          {/* You're Almost Done */}
          <div className="devnest-card relative flex min-h-45 flex-col gap-2 overflow-hidden rounded-md border border-border bg-gray-50 dark:bg-card p-3">
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#6366f1]/10 blur-3xl" />

            <div className="relative flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center gradient-accent dark:bg-gray-800 rounded-sm">
                <Sparkles
                  size={18}
                  className="text-yellow-500"
                  aria-hidden="true"
                />
              </div>

              <h3 className="text-[14px] font-semibold text-foreground">
                You&apos;re Almost Done!
              </h3>
            </div>

            <div className="relative mt-1">
              <p className="text-[12.5px] leading-4.5 font-medium  text-muted-foreground">
                Looks great! Take a moment to review your information.
              </p>

              <p className="mt-1 text-[12.5px] leading-4.5 font-medium text-muted-foreground">
                You can always update your profile later.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-border pt-4">
        <button type="button"
          onClick={onBack}
          className="flex h-10 cursor-pointer items-center gap-2 rounded-md border border-border bg-gray-100 dark:bg-card px-5 text-[13px] font-medium text-foreground transition-colors hover:bg-muted"
        >
          <ArrowLeft size={16} strokeWidth={1.8} />
          Back
        </button>

        <Button
          onClick={onComplete}
          className="min-w-40 cursor-pointer"
          icon={<PartyPopper size={18} strokeWidth={1.8} className="text-yellow-500" />}
        >
          Complete Profile
        </Button>
      </div>
    </div>
  );
}
