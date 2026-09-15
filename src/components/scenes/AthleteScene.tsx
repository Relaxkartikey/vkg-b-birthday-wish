"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Scene from "@/components/Scene";
import { media } from "@/lib/media";

const stats = ["ATHLETE", "RUNNER", "DISCIPLINE", "MILES", "MILES MORE TO GO"];

export default function AthleteScene() {
  return (
    <Scene background="#0e0d0c">
      <div className="absolute inset-0">
        <Image src={media.runnerBlur} alt="" fill className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/90" />
      </div>

      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold tracking-tight text-cream sm:text-6xl"
        >
          GAGAN RUNS.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 font-serif text-xl italic leading-relaxed text-bone/85"
        >
          &ldquo;You run toward finish lines. I run toward words. Somewhere
          between the two, I found you.&rdquo;
        </motion.p>

        <div className="mt-10 flex flex-wrap justify-center gap-x-3 gap-y-2">
          {stats.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.15, duration: 0.5 }}
              className="rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cream/60"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>
    </Scene>
  );
}
