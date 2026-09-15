"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Scene from "@/components/Scene";
import { conversation } from "@/lib/media";

export default function ConversationScene() {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    setVisible(1);
    const id = setInterval(() => {
      setVisible((v) => (v < conversation.length ? v + 1 : v));
    }, 1400);
    return () => clearInterval(id);
  }, []);

  const shown = conversation.slice(0, visible);
  const done = visible >= conversation.length;

  return (
    <Scene background="#100f0d">
      <div className="relative z-10 flex h-full w-full max-w-md flex-col pt-14">
        <p className="mb-4 shrink-0 text-center text-[11px] uppercase tracking-[0.2em] text-cream/40">
          Evidence that you voluntarily chose this chaos.
        </p>

        <div className="no-scrollbar flex flex-1 flex-col justify-end gap-2 overflow-hidden pb-4">
          <AnimatePresence initial={false}>
            {shown.slice(-6).map((m, i) => (
              <motion.div
                key={visible - shown.slice(-6).length + i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={`flex max-w-[80%] flex-col ${
                  m.speaker === "V" ? "self-start items-start" : "self-end items-end"
                }`}
              >
                <span className="mb-1 px-1 text-[9px] uppercase tracking-[0.2em] text-cream/35">
                  {m.speaker === "V" ? "Vandana" : "Gagan"}
                </span>
                <span
                  className={`whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-snug ${
                    m.speaker === "V"
                      ? "rounded-bl-sm bg-bone/10 text-bone"
                      : "rounded-br-sm bg-ember/25 text-cream"
                  }`}
                >
                  {m.text}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {done && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4 shrink-0 text-center"
          >
            <p className="font-serif text-xl italic text-ember/90">
              &ldquo;Mein acche ideas hi deti hu.&rdquo;
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-cream/40">
              Obviously.
            </p>
          </motion.div>
        )}
      </div>
    </Scene>
  );
}
