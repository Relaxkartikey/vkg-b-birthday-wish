"use client";

import { motion } from "framer-motion";
import Scene from "@/components/Scene";

export default function HandleMeScene() {
  return (
    <Scene background="#0b0b0c">
      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-tight text-cream sm:text-5xl"
        >
          I AM CHAOS.
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-3 text-4xl font-extrabold tracking-tight text-cream sm:text-5xl"
        >
          YOU ARE PATIENCE.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-4 text-sm uppercase tracking-[0.25em] text-ember/80"
        >
          Unfairly good combination.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="mt-12 font-serif text-xl italic leading-relaxed text-bone/85"
        >
          &ldquo;I don&rsquo;t promise to become less chaotic.&rdquo;
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.4, duration: 0.8 }}
          className="mt-4 font-serif text-xl italic leading-relaxed text-bone/85"
        >
          &ldquo;But I promise to keep finding my way back to you.&rdquo;
        </motion.p>
      </div>
    </Scene>
  );
}
