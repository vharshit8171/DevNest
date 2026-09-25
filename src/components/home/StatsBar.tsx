import { stats } from "@/data/constants";

export function StatsBar() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pt-8 sm:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-32 h-64 w-72 rounded-full bg-(--accent-from)/10 blur-[90px] dark:bg-(--accent-from)/15"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -right-20 h-64 w-72 rounded-full bg-(--accent-to)/10 blur-[90px] dark:bg-(--accent-to)/15"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-(--accent-from)/60 to-transparent"
        />

        <dl className="relative grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative flex flex-col items-center px-6 py-7 text-center"
            >
              {index > 0 && (
                <div
                  aria-hidden
                  className="absolute left-0 top-1/2 hidden h-22 w-px -translate-y-1/2 bg-(--accent-from)/30 lg:block"
                />
              )}

              <dt className="flex flex-col items-center font-semibold">
                <stat.icon
                  className={`h-7 w-7 text-(--accent-from) dark:${stat.iconClassName}`}
                  strokeWidth={1.8}
                />

                <span className="mt-3 text-[30px] font-semibold leading-none tracking-tight text-[#0e7490] dark:text-foreground">
                  {stat.value}
                </span>
              </dt>

              <dd className="mt-2 text-[14px] font-semibold text-gray-800/85 dark:text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
