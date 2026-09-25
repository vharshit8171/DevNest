import { features } from "@/data/constants";
import { FeatureCard } from "@/components/layout/FeatureCard";

export function FeaturesSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pt-14 sm:px-8 md:pt-4">
      <div className="flex flex-col items-center text-center">
        <span className="text-sm text-gradient-accent inline-flex items-center rounded-full border border-(--accent-from)/20 bg-linear-to-r from-cyan-50 via-blue-50 to-indigo-50 px-6 py-1.5 font-semibold tracking-wide text-(--accent-from) dark:bg-(--accent-from)/8">
          Why DevNest?
        </span>

        <h2 className="mt-3 text-[26px] font-bold tracking-tight text-foreground sm:text-[30px]">
          Everything a developer needs
        </h2>

        <p className="mt-0.5 text-sm font-semibold text-muted-foreground sm:text-[15px]">
          One platform. Infinite opportunities.
        </p>
      </div>

      <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
