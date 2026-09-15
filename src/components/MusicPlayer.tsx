"use client";

import { forwardRef } from "react";
import { media } from "@/lib/media";

const MusicPlayer = forwardRef<HTMLAudioElement>(function MusicPlayer(_, ref) {
  return (
    <audio ref={ref} loop preload="none" className="hidden">
      <source src={media.ambientAudio} type="audio/mpeg" />
    </audio>
  );
});

export default MusicPlayer;
