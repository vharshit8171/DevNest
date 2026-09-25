import { ArrowRight } from "lucide-react";
import { communityPosts } from "@/data/constants";
import { CommunityCard } from "@/components/layout/CommunityCard";

export function CommunitySection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pt-4 sm:px-8">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-[22px]">
            A thriving developer community
          </h2>

          <p className="text-[14px] font-semibold text-muted-foreground">
            Real conversations. Real connections.
          </p>
        </div>

        <button className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-border bg-muted/40 px-6.5 py-2.5 text-[14px] font-medium text-[#159fbd] dark:text-foreground transition-all duration-200 hover:border-(--accent-from)/30 hover:bg-muted hover:text-foreground">
          Explore All
          <ArrowRight className="h-4.5 w-4.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-3">
        {communityPosts.map((post, index) => (
          <CommunityCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </section>
  );
}
