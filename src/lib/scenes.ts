import { ComponentType } from "react";
import HeroScene from "@/components/scenes/HeroScene";
import AthleteScene from "@/components/scenes/AthleteScene";
import TimelineScene from "@/components/scenes/TimelineScene";
import ChaosScene from "@/components/scenes/ChaosScene";
import ConversationScene from "@/components/scenes/ConversationScene";
import FuelScene from "@/components/scenes/FuelScene";
import PoetryScene from "@/components/scenes/PoetryScene";
import TraitsScene from "@/components/scenes/TraitsScene";
import MontageScene from "@/components/scenes/MontageScene";
import HandleMeScene from "@/components/scenes/HandleMeScene";
import BirthdayScene from "@/components/scenes/BirthdayScene";
import FinaleScene from "@/components/scenes/FinaleScene";
import { memories } from "@/lib/media";

export type SceneEntry = {
  id: string;
  Component: ComponentType;
};

export const sceneList: SceneEntry[] = [
  { id: "opening", Component: HeroScene },
  { id: "athlete", Component: AthleteScene },
  {
    id: "first-mark",
    Component: () => TimelineScene({ memory: memories[0], eyebrow: "The first mark" }),
  },
  {
    id: "bigger-distance",
    Component: () => TimelineScene({ memory: memories[1], eyebrow: "The distance got bigger" }),
  },
  {
    id: "confidence",
    Component: () =>
      TimelineScene({
        memory: memories[2],
        eyebrow: "The race that made you believe a little more",
        intensity: 1.6,
      }),
  },
  { id: "chaos", Component: ChaosScene },
  { id: "conversation", Component: ConversationScene },
  { id: "fuel", Component: FuelScene },
  { id: "poetry", Component: PoetryScene },
  { id: "traits", Component: TraitsScene },
  { id: "montage", Component: MontageScene },
  { id: "handle-me", Component: HandleMeScene },
  { id: "birthday", Component: BirthdayScene },
  { id: "finale", Component: FinaleScene },
];
