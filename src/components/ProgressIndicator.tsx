"use client";

export default function ProgressIndicator({
  index,
  total,
}: {
  index: number;
  total: number;
}) {
  const pct = ((index + 1) / total) * 100;

  return (
    <div
      className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 text-[10px] tracking-[0.2em] text-cream/40"
      style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 14px)" }}
    >
      <span className="font-sans">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
      <div className="h-px w-24 bg-white/10 sm:w-40">
        <div
          className="h-px bg-cream/50 transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
