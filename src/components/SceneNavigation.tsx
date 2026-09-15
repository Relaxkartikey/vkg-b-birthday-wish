"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

export default function SceneNavigation({
  onPrev,
  onNext,
  onToggleMusic,
  isPlaying,
  canPrev,
  canNext,
}: {
  onPrev: () => void;
  onNext: () => void;
  onToggleMusic: () => void;
  isPlaying: boolean;
  canPrev: boolean;
  canNext: boolean;
}) {
  return (
    <div
      className="fixed inset-x-0 z-40 flex justify-center"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 20px)" }}
    >
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-2 py-2 backdrop-blur-md">
        <button
          aria-label="Previous"
          onClick={onPrev}
          disabled={!canPrev}
          className="flex h-11 w-11 items-center justify-center rounded-full text-cream/80 transition disabled:opacity-25 active:scale-90 hover:text-cream"
        >
          <ChevronLeft size={20} strokeWidth={1.75} />
        </button>

        <button
          aria-label={isPlaying ? "Pause music" : "Play music"}
          onClick={onToggleMusic}
          className="relative flex h-12 w-12 items-center justify-center rounded-full bg-cream/95 text-ink transition active:scale-90"
        >
          {isPlaying ? (
            <Pause size={18} strokeWidth={2} fill="currentColor" />
          ) : (
            <Play size={18} strokeWidth={2} fill="currentColor" className="ml-0.5" />
          )}
          {isPlaying && (
            <span className="absolute -bottom-1 flex items-end gap-[2px]">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-[2px] rounded-full bg-ember/80"
                  style={{
                    height: 4,
                    animation: `eq 0.8s ease-in-out ${i * 0.15}s infinite`,
                  }}
                />
              ))}
            </span>
          )}
        </button>

        <button
          aria-label="Next"
          onClick={onNext}
          disabled={!canNext}
          className="flex h-11 w-11 items-center justify-center rounded-full text-cream/80 transition disabled:opacity-25 active:scale-90 hover:text-cream"
        >
          <ChevronRight size={20} strokeWidth={1.75} />
        </button>
      </div>

      <style jsx>{`
        @keyframes eq {
          0%,
          100% {
            height: 3px;
          }
          50% {
            height: 8px;
          }
        }
      `}</style>
    </div>
  );
}
