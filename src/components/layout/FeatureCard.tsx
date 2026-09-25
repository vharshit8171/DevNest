import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group rounded-xl border border-border bg-card px-4.5 py-9 transition-all duration-300 hover:-translate-y-1 hover:border-(--accent-from)/30 hover:shadow-[0_20px_50px_-20px_rgba(99,102,241,0.35)]">
      <div className="gradient-accent flex h-11 w-11 items-center justify-center rounded-[10px] shadow-[0_8px_24px_-6px_rgba(99,102,241,0.55)]">
        <Icon className="h-5 w-5 text-primary-foreground" strokeWidth={2.2} />
      </div>

      <h3 className="mt-5 text-[15px] font-semibold text-card-foreground">
        {title}
      </h3>

      <p className="mt-2 text-[14px] font-semibold leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
