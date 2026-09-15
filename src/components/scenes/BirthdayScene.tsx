"use client";

import { motion } from "framer-motion";
import Scene from "@/components/Scene";

export default function BirthdayScene() {
  return (
    <Scene background="#f3ede3">
      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center text-ink">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-extrabold tracking-tight sm:text-5xl"
        >
          HAPPY BIRTHDAY, GAGAN.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-4 text-sm tracking-[0.25em] text-ink/50"
        >
          16 SEPTEMBER 2005
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-8 font-serif text-xl italic leading-relaxed text-ink/85"
        >
          &ldquo;To the boy who runs farther than most people dare to.&rdquo;
        </motion.p>

        <div className="mt-8 space-y-2">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="text-lg font-medium"
          >
            Keep running.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3, duration: 0.6 }}
            className="text-lg font-medium"
          >
            Keep becoming.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.6 }}
            className="text-lg font-medium text-ember"
          >
            And please keep handling my chaos.
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.7 }}
          className="mt-10 font-serif text-base italic text-ink/60"
        >
          — Vandana
        </motion.p>
      </div>
    </Scene>
  );
}
