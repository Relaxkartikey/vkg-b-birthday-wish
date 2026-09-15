"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Scene from "@/components/Scene";
import { media } from "@/lib/media";

export default function HeroScene() {
  return (
    <Scene>
      <div className="absolute inset-0">
        <Image
          src={media.runnerNight}
          alt=""
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 text-[11px] uppercase tracking-[0.3em] text-cream/50"
        >
          A little something from Vandana
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-[18vw] font-extrabold leading-none tracking-tightest2 text-cream sm:text-8xl"
        >
          GAGAN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-4 text-sm tracking-[0.2em] text-cream/50"
        >
          16 SEPTEMBER 2005
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="mt-8 text-lg text-cream/90"
        >
          Today is about you.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-8 max-w-xs font-serif text-xl italic leading-relaxed text-bone/80 sm:max-w-md sm:text-2xl"
        >
          &ldquo;Some people enter your life quietly. And somehow, they become
          the loudest part of it.&rdquo;
        </motion.p>
      </div>
    </Scene>
  );
}
