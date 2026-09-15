"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Scene from "@/components/Scene";
import type { Memory } from "@/lib/media";

export default function TimelineScene({
  memory,
  eyebrow,
  intensity = 1,
}: {
  memory: Memory;
  eyebrow?: string;
  intensity?: number;
}) {
  return (
    <Scene background="#0b0b0c">
      <div className="absolute inset-0">
        <Image src={memory.image} alt="" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />
      </div>

      <div className="relative z-10 flex w-full max-w-md flex-col items-start text-left">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-[11px] uppercase tracking-[0.3em] text-ember/70"
          >
            {eyebrow}
          </motion.span>
        )}

        <motion.p
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 * (1 / intensity) }}
          className="text-4xl font-light tracking-tight text-cream sm:text-5xl"
        >
          {memory.date}
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.7 * (1 / intensity) }}
          className="mt-2 text-2xl font-extrabold tracking-tight text-cream sm:text-3xl"
        >
          {memory.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-1 text-sm uppercase tracking-[0.25em] text-cream/50"
        >
          {memory.place}
        </motion.p>

        {memory.caption && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="mt-4 flex items-center gap-2 text-xs tracking-[0.15em] text-cream/50"
          >
            <span>{memory.caption.split("→")[0].trim()}</span>
            <span className="h-px flex-1 max-w-16 bg-ember/60" />
            <span>{memory.caption.split("→")[1]?.trim()}</span>
          </motion.div>
        )}

        <div className="mt-8 space-y-4">
          {memory.copy.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.25, duration: 0.6 }}
              className="whitespace-pre-line font-serif text-lg italic leading-relaxed text-bone/85"
            >
              &ldquo;{line}&rdquo;
            </motion.p>
          ))}
        </div>
      </div>
    </Scene>
  );
}
