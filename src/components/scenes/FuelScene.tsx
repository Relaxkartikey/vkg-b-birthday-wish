"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Scene from "@/components/Scene";
import { media } from "@/lib/media";

export default function FuelScene() {
  return (
    <Scene background="#0b0b0c">
      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold tracking-tight text-cream sm:text-4xl"
        >
          YOU CALL IT FUEL.
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-3 text-2xl font-extrabold tracking-tight text-ember/85 sm:text-3xl"
        >
          I CALL IT AN ARGUMENT
          <br />
          WAITING TO HAPPEN.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-8 font-serif text-lg italic text-bone/85"
        >
          &ldquo;I can eat whatever I want bcz it works as fuel for me — but
          it will be poison for u.&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.9, duration: 0.6 }}
          className="relative mt-6 h-40 w-56 overflow-hidden rounded-md border border-white/10"
        >
          <Image src={media.foodGif} alt="" fill unoptimized className="object-cover" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.6 }}
          className="mt-6 text-xs uppercase tracking-[0.2em] text-cream/50"
        >
          Athlete metabolism privileges.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.6 }}
          className="mt-3 text-sm text-bone/70"
        >
          Meanwhile, I&rsquo;m apparently not allowed to eat whatever I want.
        </motion.p>
      </div>
    </Scene>
  );
}
