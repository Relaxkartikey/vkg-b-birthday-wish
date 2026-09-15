"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Scene from "@/components/Scene";
import { media } from "@/lib/media";

export default function ChaosScene() {
  return (
    <Scene background="#0b0b0c">
      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-tight text-cream sm:text-5xl"
        >
          I CREATE CHAOS.
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-3 text-4xl font-extrabold tracking-tight text-cream sm:text-5xl"
        >
          YOU HANDLE IT.
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-3 text-2xl font-light italic text-ember/80 sm:text-3xl"
        >
          Gently.
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.1, duration: 0.6 }}
          className="relative mt-8 h-40 w-56 overflow-hidden rounded-md border border-white/10"
        >
          <Image src={media.chaosGif} alt="" fill unoptimized className="object-cover" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 0.7 }}
          className="mt-8 font-serif text-lg italic text-bone/80"
        >
          &ldquo;I don&rsquo;t know how you do it.&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.1, duration: 0.7 }}
          className="mt-3 font-serif text-lg italic text-bone/80"
        >
          &ldquo;I bring the chaos. You bring the calm.&rdquo;
        </motion.p>
      </div>
    </Scene>
  );
}
