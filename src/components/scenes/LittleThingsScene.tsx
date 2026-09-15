"use client";

import { motion } from "framer-motion";
import Scene from "@/components/Scene";

const items = [
  { label: "Fav songs", value: "Abhi Mujh Mein Kahin · Jaan Se Guzarte Hai · Aari Aari" },
  { label: "Fav colour", value: "Pink" },
  { label: "Weakness", value: "Anything sweet" },
  { label: "Right now", value: "Chasing CDS" },
];

export default function LittleThingsScene() {
  return (
    <Scene background="#0b0b0c">
      <div className="relative z-10 flex w-full max-w-sm flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-extrabold uppercase tracking-tight text-cream sm:text-3xl"
        >
          Small things I know about you.
        </motion.h2>

        <div className="mt-10 w-full space-y-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.35, duration: 0.6 }}
              className="border-b border-white/10 pb-4"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-ember/70">
                {item.label}
              </p>
              <p className="mt-2 font-serif text-lg italic text-bone/90">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + items.length * 0.35 + 0.3, duration: 0.8 }}
          className="mt-8 font-serif text-lg italic text-bone/80"
        >
          &ldquo;May this year hand you every one of them.&rdquo;
        </motion.p>
      </div>
    </Scene>
  );
}
