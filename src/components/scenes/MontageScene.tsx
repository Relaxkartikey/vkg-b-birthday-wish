"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Scene from "@/components/Scene";
import { montage } from "@/lib/media";

const layout = [
  { top: "8%", left: "6%", rotate: -6, size: 130 },
  { top: "6%", right: "6%", rotate: 5, size: 110 },
  { top: "38%", left: "20%", rotate: 3, size: 150 },
  { top: "60%", right: "10%", rotate: -4, size: 120 },
  { top: "68%", left: "8%", rotate: 6, size: 100 },
];

export default function MontageScene() {
  return (
    <Scene background="#0b0b0c">
      <div className="relative z-10 h-full w-full max-w-md">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute left-1/2 top-4 -translate-x-1/2 text-center text-[11px] uppercase tracking-[0.3em] text-cream/40"
        >
          fragments, kept
        </motion.h2>

        {montage.map((m, i) => {
          const pos = layout[i % layout.length];
          return (
            <motion.figure
              key={m.image}
              initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: pos.rotate }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
              className="absolute overflow-hidden rounded-sm border-2 border-cream/90 shadow-xl"
              style={{
                top: pos.top,
                left: "left" in pos ? pos.left : undefined,
                right: "right" in pos ? pos.right : undefined,
                width: pos.size,
                height: pos.size * 1.2,
              }}
            >
              <Image src={m.image} alt={m.caption} fill className="object-cover" />
              {m.caption && (
                <figcaption className="absolute bottom-0 w-full bg-ink/70 py-1 text-center font-serif text-[10px] italic text-cream/90">
                  {m.caption}
                </figcaption>
              )}
            </motion.figure>
          );
        })}
      </div>
    </Scene>
  );
}
