"use client";

import { motion } from "framer-motion";
import Scene from "@/components/Scene";

const traits = ["DISCIPLINE", "PATIENCE", "STRENGTH", "CALM", "CONSISTENCY", "GENTLENESS"];

export default function TraitsScene() {
  return (
    <Scene background="#0b0b0c">
      <div className="relative z-10 flex w-full max-w-sm flex-col items-center text-center">
        <div className="space-y-2">
          {traits.map((t, i) => (
            <motion.p
              key={t}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.35, duration: 0.6 }}
              className="text-2xl font-light uppercase tracking-[0.15em] text-cream sm:text-3xl"
            >
              {t}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: traits.length * 0.35 + 0.5, duration: 0.8 }}
          className="mt-10 font-serif text-lg italic text-bone/80"
        >
          &ldquo;You don&rsquo;t always realize how much you&rsquo;ve grown.&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: traits.length * 0.35 + 1.1, duration: 0.8 }}
          className="mt-3 text-sm tracking-[0.15em] text-ember/80"
        >
          But I notice.
        </motion.p>
      </div>
    </Scene>
  );
}
