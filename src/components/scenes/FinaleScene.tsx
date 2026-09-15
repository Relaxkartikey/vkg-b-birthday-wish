"use client";

import { motion } from "framer-motion";
import Scene from "@/components/Scene";

export default function FinaleScene() {
  return (
    <Scene background="#050505">
      <div className="relative z-10 flex w-full max-w-sm flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl font-light text-cream"
        >
          Gagan,
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8 font-serif text-lg italic leading-relaxed text-bone/85"
        >
          &ldquo;I don&rsquo;t know where every road will take us.&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 1 }}
          className="mt-4 font-serif text-lg italic leading-relaxed text-bone/85"
        >
          &ldquo;But I know I&rsquo;d like to see a lot more of them with
          you.&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 0.8 }}
          className="mt-10 text-2xl font-extrabold tracking-tight text-cream"
        >
          Happy Birthday.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.9, duration: 0.9 }}
          className="mt-10 text-sm font-semibold tracking-[0.3em] text-ember/80"
        >
          VANDANA 4 U
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.6, duration: 1 }}
          className="mt-3 text-[11px] tracking-[0.15em] text-cream/40"
        >
          Made with words, memories & a little chaos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.15, 0.4, 0.15] }}
          transition={{ delay: 6.2, duration: 3, repeat: Infinity }}
          className="mt-10 h-px w-16 bg-cream"
        />
      </div>
    </Scene>
  );
}
