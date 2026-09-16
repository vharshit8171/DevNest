import { Copy, Users } from "lucide-react";

const LINE_NUMBERS = Array.from({ length: 12 }, (_, i) => i + 1);

export function CodePanel() {
  return (
    <div className="relative mx-auto w-full max-w-135 rounded-lg border-2 border-white/60 bg-[#0A0E1E]/95 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-75 w-107.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/25 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-107.5 w-107.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/[0.14]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-85 w-85 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-500/9"
      />

      <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0A0E1E]/95 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl">
        <div className="flex h-11 items-center gap-3 border-b border-white/[0.07] bg-white/2 px-4">
          <div className="flex shrink-0 items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </div>

          <div className="flex h-full flex-1 items-center justify-center gap-6 sm:gap-8">
            <span className="relative flex h-full items-center text-[12px] font-semibold text-white">
              Code
              <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-linear-to-r from-blue-400 to-violet-500" />
            </span>
            <span className="text-[12px] text-white/35 font-semibold transition-colors hover:text-white/60">
              Community
            </span>
            <span className="text-[12px] text-white/35 font-semibold transition-colors hover:text-white/60">
              Collaboration
            </span>
          </div>

          <Copy
            size={14}
            className="shrink-0 cursor-pointer text-white/35 transition-colors hover:text-white"
          />
        </div>

        <div className="flex gap-5 px-5 py-5">
          <div
            aria-hidden="true"
            className="flex select-none flex-col font-mono text-[12px] leading-7 text-white/22"
          >
            {LINE_NUMBERS.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>

          <pre className="overflow-x-auto font-mono text-[13px] leading-7">
            <code>
              <span className="text-violet-400">function</span>{" "}
              <span className="text-amber-200">buildTogether</span>
              <span className="text-slate-400">() {"{"}</span>
              {"\n"}
              {"  "}
              <span className="text-violet-400">const</span>{" "}
              <span className="text-sky-300">community</span>{" "}
              <span className="text-slate-400">=</span>{" "}
              <span className="text-emerald-300">&quot;DevNest&quot;</span>
              <span className="text-slate-400">;</span>
              {"\n"}
              {"  "}
              <span className="text-violet-400">const</span>{" "}
              <span className="text-sky-300">developers</span>{" "}
              <span className="text-slate-400">=</span>{" "}
              <span className="text-emerald-300">&quot;You&quot;</span>
              <span className="text-slate-400">;</span>
              {"\n"}
              {"\n"}
              {"  "}
              <span className="text-violet-400">while</span>{" "}
              <span className="text-slate-400">(</span>
              <span className="text-orange-300">learning</span>
              <span className="text-slate-400">) {"{"}</span>
              {"\n"}
              {"    "}
              <span className="text-sky-300">shareKnowledge</span>
              <span className="text-slate-400">();</span>
              {"\n"}
              {"    "}
              <span className="text-sky-300">growTogether</span>
              <span className="text-slate-400">();</span>
              {"\n"}
              {"  "}
              <span className="text-slate-400">{"}"}</span>
              {"\n"}
              <span className="text-slate-400">{"}"}</span>
              {"\n"}
              {"\n"}
              <span className="text-white/25">
                {"// Build. Share. Learn. Grow."}
              </span>
            </code>
          </pre>
        </div>
      </div>

      <div className="absolute -bottom-8 right-3 flex items-center gap-3 rounded-md border border-white/10 bg-[#141126]/95 p-3.5 pr-4 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:-right-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-violet-600 shadow-lg shadow-indigo-600/30">
          <Users size={16} className="text-white" />
        </div>
        <div>
          <p className="text-[12px] font-medium leading-tight text-white">
            Grow together
          </p>
          <p className="mt-0.5 text-[12px] leading-tight text-slate-400">
            with developers
          </p>
          <p className="text-[12px] leading-tight text-slate-400">worldwide</p>
        </div>
      </div>
    </div>
  );
}
