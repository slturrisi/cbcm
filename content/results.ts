// Exact short excerpts from https://clearbodyclearmind.com/results (reviewed 2026-11-08).
// Initials identify the reference site's contributors, not Central Ohio participants.
export const resultTopics = ["All stories", "More energy", "Wellness", "Stress relief", "Mental clarity"] as const;
export type ResultTopic = (typeof resultTopics)[number];
export const resultStories: { id: string; topic: ResultTopic; title: string; quote: string; attribution: string }[] = [
  { id: "ee", topic: "More energy", title: "Energy for everyday life", quote: "Since completing the Purification Program, I feel like a different person. I now have much more energy for things that I really want to be doing.", attribution: "E.E." },
  { id: "ec", topic: "Mental clarity", title: "A brighter outlook", quote: "After each day I felt brighter, more clear, calmer and more stable as a being.", attribution: "E.C." },
  { id: "tf", topic: "Stress relief", title: "Calmer conversations", quote: "As I went through the Purification Program, I started to notice that my mood started to level off and by the end of the program I was very calm.", attribution: "T.F" },
  { id: "kk", topic: "Wellness", title: "Enjoying life", quote: "I’m not agitated. I’m just being me and not feeling like a piece of wood, but feeling like a live person and being extroverted and enjoying life.", attribution: "K.K." },
  { id: "jg", topic: "More energy", title: "Energy to spare", quote: "I went from a state of having a body I had to drag around and being very tired ALL the time, to a point where I almost effortlessly run my body and have energy to spare.", attribution: "J.G." },
  { id: "sm", topic: "Mental clarity", title: "Ready for what’s next", quote: "Now I see things clearer, I feel more able, life is bright and I am ready to make the most of it.", attribution: "S.M." },
];
