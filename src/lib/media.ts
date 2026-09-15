/**
 * Every external image / GIF / audio URL lives here, in one place, so it's
 * trivial to swap placeholders for real photos of Gagan & Vandana later.
 * Just replace the string values — nothing else in the app needs to change.
 */

export const media = {
  runnerNight: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1600&auto=format&fit=crop",
  runnerBlur: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1600&auto=format&fit=crop",
  trackLane: "https://images.unsplash.com/photo-1516986122253-e6a3b1c9c4d1?q=80&w=1600&auto=format&fit=crop",
  runningGif: "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
  raceGif: "https://media.giphy.com/media/3o7abKCOWQgqDhIaMc/giphy.gif",
  mountainLonavla: "https://images.unsplash.com/photo-1580889240911-c8207e51e0f9?q=80&w=1600&auto=format&fit=crop",
  delhiEnergy: "https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?q=80&w=1600&auto=format&fit=crop",
  cityLights: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1600&auto=format&fit=crop",
  chaosGif: "https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif",
  laughGif: "https://media.giphy.com/media/l0MYGb1LuZ3n7dRnO/giphy.gif",
  foodGif: "https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif",
  travelRoad: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1600&auto=format&fit=crop",
  candidMoment: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1600&auto=format&fit=crop",
  filmTexture: "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?q=80&w=1600&auto=format&fit=crop",
  celebrationGif: "https://media.giphy.com/media/g9582DNuQppxC/giphy.gif",
  // Swap for a real romantic/ambient track — kept as a remote CDN URL so no
  // binary asset needs to live in the repo.
  ambientAudio:
    "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3",
};

export type Memory = {
  date: string;
  title: string;
  place: string;
  copy: string[];
  image: string;
  caption?: string;
};

export const memories: Memory[] = [
  {
    date: "28 October 2023",
    title: "FIRST RACE",
    place: "Mhow",
    copy: [
      "The first race wasn't just a race.",
      "It was the beginning of a version of you\nthat kept going.",
    ],
    image: media.trackLane,
  },
  {
    date: "23 February 2025",
    title: "FIRST STATE OUTSIDE MP",
    place: "Lonavla",
    copy: [
      "Then the road became longer.",
      "The map became bigger.\nAnd somehow, so did you.",
    ],
    image: media.mountainLonavla,
    caption: "MP → Lonavla",
  },
  {
    date: "24 July",
    title: "HIGH-ROCKS RACE",
    place: "Delhi",
    copy: [
      "The standards were high.\nThe race was harder.\nAnd maybe that's exactly why\nyou needed it.",
      "Some races test your legs.\nSome test your belief in yourself.",
    ],
    image: media.delhiEnergy,
  },
];

// Speakers are Vandana herself ("V") and Gagan himself ("G") — their real
// WhatsApp nicknames (Verzove / Mi Vida) are swapped for their names here.
export const conversation: { speaker: "V" | "G"; text: string }[] = [
  { speaker: "V", text: "Mera bas chale toh mein 24 ke 24 ghante tumhara matha khati rahu" },
  { speaker: "G", text: "Biwi bann jaaogi toh kha lena 24 ghante maatha mera" },
  { speaker: "V", text: "Aisa bologe toh sahi mein mujhse shadi karni hogi" },
  { speaker: "G", text: "Theek hai, just be with me when I will be 30" },
  { speaker: "V", text: "Oye 30 ni\n26 it is" },
  { speaker: "G", text: "30 it is" },
  { speaker: "V", text: "30 pe i will look old photos acche ni aayenge" },
  { speaker: "G", text: "Mere yahan 30 se pehle nhi hone dete" },
  { speaker: "V", text: "Mere papa ko tumhare ghar bhej dungi\nShadi to 26 pe hi hogi" },
  { speaker: "G", text: "Ladke toh mard 30 ke baad hee bante hain" },
  { speaker: "V", text: "House husband ban jana tum" },
  { speaker: "V", text: "Aisa koi compulsion ni\n30 se niche kya aurat hote hai?" },
  { speaker: "G", text: "Arey matlab humare yahan utna well established nhin maante kisiko" },
  { speaker: "V", text: "Accha tum bol dena na sabko meri biwi established hai meko itna jarrurat ni lagega" },
  { speaker: "G", text: "Idea accha hai" },
  { speaker: "V", text: "Mein acche ideas hi deti hu" },
];

/**
 * Scene 12 — Memory Montage. Drop real photos of Gagan & Vandana into
 * public/images/montage/ named 1.jpg, 2.jpg, … (see the README there) and
 * they'll appear here automatically — no code changes needed.
 */
export const montage: { image: string; caption: string }[] = [
  { image: "/images/montage/1.jpg", caption: "one of those days" },
  { image: "/images/montage/2.jpg", caption: "you + your impossible goals" },
  { image: "/images/montage/3.jpg", caption: "another race" },
  { image: "/images/montage/4.jpg", caption: "" },
];
