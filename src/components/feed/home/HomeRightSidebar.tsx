import Image from "next/image";
import { profileSkills } from "@/data/constants";
import SuggestedUsers from "@/components/feed/home/SuggestedUsers";

export default function HomeRightSidebar() {
  return (
    <div className="sticky top-24 space-y-2.5">
      <section className="rounded-md border border-border bg-card p-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <div className="size-16 overflow-hidden rounded-full border-2 border-primary/20 bg-muted">
              <Image
                src="/images/avatars/avatar-4.jpg"
                alt="Alex Johnson"
                width={64}
                height={64}
                quality={100}
                className="size-full object-cover"
              />
            </div>

            <span className="absolute bottom-0 right-0 size-3.5 rounded-full border-2 border-card bg-emerald-500" />
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-base font-semibold text-foreground">
              Alex Johnson
            </h2>

            <p className="truncate text-sm text-muted-foreground">@alexjdev</p>
          </div>
        </div>

        <p className="mt-2.5 text-sm leading-6 text-muted-foreground">
          Full stack developer, tech enthusiast, and lifelong learner.
        </p>

        <div className="mt-4.5 flex flex-wrap gap-2">
          {profileSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-md bg-primary/10 px-3 py-1.5 text-xs font-medium text-accent-secondary"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
      <SuggestedUsers title="Suggested for you" />
    </div>
  );
}
