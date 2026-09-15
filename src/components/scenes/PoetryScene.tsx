"use client";

import { motion } from "framer-motion";
import Scene from "@/components/Scene";

const lines = [
  "You measure life in miles,\nI measure it in lines.",
  "You chase the finish,\nI chase the feeling.",
  "You keep moving\neven when your legs say stop.",
  "And I keep writing\nbecause some people\nare too important\nto leave unwritten.",
];

export default function PoetryScene() {
  return (
    <Scene background="#0a0a0a">
      <div className="relative z-10 flex w-full max-w-sm flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-3xl font-extrabold tracking-tight text-cream sm:text-4xl"
        >
          I WRITE.
          <br />
          YOU RUN.
        </motion.h2>

        <div className="space-y-5">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.9 + i * 1.1, duration: 1 }}
              className="whitespace-pre-line font-serif text-xl italic leading-relaxed text-bone/90 sm:text-2xl"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.6, duration: 1 }}
          className="mt-10 text-sm tracking-[0.1em] text-cream/60"
        >
          And unfortunately for you, you&rsquo;re one of them.
        </motion.p>
      </div>
    </Scene>
  );
}
