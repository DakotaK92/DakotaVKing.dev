export const blogNotes = [
  {
    slug: "a-few-days-at-disney",
    category: "Life",
    date: "2026",
    title: "A few days worth remembering",
    excerpt:
      "A couple of snapshots from my time at Walt Disney World—one with Mickey and one at Hollywood Studios. A little reminder to make room for the moments beyond the screen.",
    content: [
      "These photos capture two moments from my time at Walt Disney World: meeting Mickey and spending time at Hollywood Studios.",
      "I wanted a place for personal snapshots like these alongside the projects in my portfolio. They’re a small reminder that the things we make are only one part of the story.",
    ],
    images: [
      {
        src: "/assets/dk-mouse.jpg",
        alt: "Dakota with Mickey Mouse at Walt Disney World",
      },
      {
        src: "/assets/dk-tower.jpg",
        alt: "Dakota at Disney's Hollywood Studios",
      },
    ],
  },
  {
    slug: "from-blank-page-to-first-draft",
    category: "Projects",
    date: "2026",
    title: "From blank page to first draft",
    excerpt:
      "MyPocketBard explores a creative starting point: helping songwriters move from a blank page into lyrics, rhyme ideas, and an early draft they can make their own.",
    content: [
      "A blank page can be one of the hardest parts of writing. MyPocketBard is an AI-powered songwriting tool concept designed to help people get started with lyric ideas and rhymes.",
      "The goal is to support the early, exploratory part of writing: generate ideas, find a direction, and shape a first draft that the songwriter can continue to make their own.",
    ],
    image: "/assets/work/development-image-1.jpg",
    imageAlt: "MyPocketBard songwriting project artwork",
    href: "/work",
    linkLabel: "Explore the project",
  },
];

export const blogNotesNewestFirst = [...blogNotes].sort(
  (first, second) => Number(second.date.slice(0, 4)) - Number(first.date.slice(0, 4)),
);
