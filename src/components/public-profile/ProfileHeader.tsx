import {
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  MapPin,
  MessageCircle,
  UserRoundPlus,
} from "lucide-react";
import Image from "next/image";

export type ProfileHeaderProps = {
  isFollowing: boolean;
  onMessage: () => void;
  onToggleFollow: () => void;
};

export function ProfileHeader({
  isFollowing,
  onMessage,
  onToggleFollow,
}: ProfileHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <Image
        src="https://i.pinimg.com/736x/54/19/db/5419db11847945ef5d2be083f2daa4d9.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />


      <div className="relative flex flex-col gap-4.5 px-5 py-7 sm:flex-row sm:items-center sm:px-9 sm:py-7 lg:px-12">
        <div className="mx-auto shrink-0 sm:mx-0">
          <div className="size-32 overflow-hidden rounded-full border-4 border-card bg-muted shadow-sm sm:size-36 lg:size-42">
            <Image
              src="/images/avatars/avatar-4.jpg"
              alt="DevNest"
              width={170}
              height={170}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="min-w-0 flex-1 text-center sm:text-left">
          <div className="flex flex-col gap-1">
            <h1 className="truncate text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Harshit Verma
            </h1>
            <p className="text-base font-medium text-muted-foreground sm:text-lg">
              @harshit_verma
            </p>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm font-semibold text-muted-foreground sm:justify-start sm:text-base">
            <span className="inline-flex items-center gap-1.5">
              <BriefcaseBusiness className="size-4" />
              Full Stack Developer
            </span>

            <span className="hidden text-border sm:inline">•</span>

            <span className="inline-flex items-center gap-1">
              <MapPin className="size-4" />
              Aligarh, India
            </span>
          </div>

          <div className="mt-3 flex justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 rounded-full border-[0.1px] border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-500 shadow-[0_0_14px_rgba(16,185,129,0.12)] backdrop-blur-sm transition-all duration-200 hover:border-emerald-400/40 hover:bg-emerald-500/15 hover:shadow-[0_0_18px_rgba(16,185,129,0.18)] dark:text-emerald-400">
              <CheckCircle2 className="size-4" />
              Open to work
            </span>
          </div>
        </div>

        <div className="mt-28 flex shrink-0 justify-center gap-3 sm:flex-col sm:items-stretch lg:flex-row lg:items-center">
          <button
            type="button"
            onClick={onToggleFollow}
            className={`inline-flex min-w-32 cursor-pointer items-center justify-center gap-2 rounded-md px-5.5 py-2.5 text-sm font-semibold shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              isFollowing
                ? "border border-primary bg-card text-primary hover:bg-muted"
                : "gradient-accent text-primary-foreground hover:opacity-90"
            }`}
          >
            {isFollowing ? (
              <Check className="size-4" />
            ) : (
              <UserRoundPlus className="size-5" />
            )}
            {isFollowing ? "Following" : "Follow"}
          </button>

          <button
            type="button"
            onClick={onMessage}
            className="inline-flex min-w-32 cursor-pointer items-center justify-center gap-2 rounded-md border border-border bg-card px-5.5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <MessageCircle className="size-5" />
            Message
          </button>
        </div>
      </div>
    </section>
  );
}
