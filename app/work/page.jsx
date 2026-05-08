"use client";

import Image from "next/image";

const featuredProject = {
  title: "Dakota King Portfolio",
  description:
    "A self-directed portfolio redesign focused on clearer hierarchy, stronger visual storytelling, and a more editorial presentation of both development and design work.",
  video: "/assets/intro-videob_1.mp4",
  tools: [
    { name: "React", color: "bg-sky-100 text-sky-700" },
    { name: "Next.js", color: "bg-gray-200 text-gray-900" },
    { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-700" },
  ],
  github: "https://github.com/DakotaK92/DakotaK92-Portfolio",
  live: "https://dakotavking.dev",
};

const projects = [
  {
    id: 1,
    title: "MyPocketBard",
    description:
      "An AI-powered songwriting tool designed to help users generate lyrics, explore rhyme ideas, and move from blank page to rough draft faster.",
    image: "/assets/work/development-image-1.jpg",
    tools: [
      { name: "React", color: "bg-sky-100 text-sky-700" },
      { name: "Next.js", color: "bg-gray-200 text-gray-900" },
      { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-700" },
      { name: "Radix UI", color: "bg-red-200 text-black" },
      { name: "Lucide React", color: "bg-yellow-100 text-black" },
    ],
    github: "https://github.com/DakotaK92/myPocketBard",
    live: "https://my-pocket-bard.vercel.app/",
    isNew: false,
  },
  {
    id: 2,
    title: "Duncanville Bookstore App",
    description:
      "A mobile app concept for browsing events, tracking rewards, and making it easier for comic fans to stay connected with a local shop.",
    image: "/assets/work/design-image-1.jpg",
    tools: [
      { name: "Expo", color: "bg-sky-100 text-sky-700" },
      { name: "React-Native", color: "bg-sky-100 text-sky-700" },
      { name: "React", color: "bg-sky-100 text-sky-700" },
      { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-700" },
      { name: "Nativewind CSS", color: "bg-cyan-100 text-cyan-700" },
      { name: "Clerk-Expo", color: "bg-red-200 text-black" },
      { name: "Axios", color: "bg-yellow-100 text-black" },
      { name: "Tanstack", color: "bg-purple-300 text-black" },
      { name: "Expo-Image", color: "bg-pink-200 text-black" },
    ],
    github: "https://github.com/DakotaK92/DuncanvilleComics-ReactNative",
    live: "https://www.youtube.com/watch?v=NU1NDJTvKzg",
    isNew: true,
  },
  {
    id: 3,
    title: "Lick",
    description:
      "Lick is a playful ice cream brand website built with Next.js. The project showcases featured flavors, brand storytelling, rewards messaging, and a Where to Buy experience with a lightweight Google Maps-style locator.",
    image: "/assets/work/design-image-2.jpg",
    tools: [
      { name: "React", color: "bg-sky-100 text-sky-700" },
      { name: "Next.js", color: "bg-gray-200 text-gray-900" },
      { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-700" },
      { name: "Radix UI", color: "bg-red-200 text-black" },
      { name: "Lucide React", color: "bg-yellow-100 text-black" },
    ],
    github: "https://github.com/DakotaK92/DakotaK92-Portfolio",
    live: "https://lick-one.vercel.app/",
    isNew: true,
  }
];

const designs = [
  {
    id: 1,
    title: "Duncanville Bookstore",
    description:
      "A rebrand and identity refresh for a local bookstore, built around a modern, playful, and more approachable visual direction.",
    image: "/assets/work/design-image-1.jpg",
    tools: [
      { name: "Illustrator", color: "bg-orange-200 text-gray-900" },
      { name: "Photoshop", color: "bg-sky-100 text-gray-900" },
    ],
    behance: "https://www.behance.net/dakotaking",
    isNew: true,
  },
  {
    id: 2,
    title: "Lick",
    description:
      "An ice cream brand identity and packaging system created as a final branding project, focused on personality, packaging, and shelf appeal.",
    image: "/assets/work/design-image-2.jpg",
    tools: [
      { name: "Illustrator", color: "bg-orange-200 text-gray-900" },
      { name: "Photoshop", color: "bg-sky-100 text-gray-900" },
    ],
    behance: "https://www.behance.net/dakotaking",
    isNew: false,
  },
  {
    id: 3,
    title: "Dicey Dice",
    description:
      "A logo and brand concept for a tie-dye inspired clothing line with DnD-themed artwork and a more expressive, character-led tone.",
    image: "/assets/work/design-image-3.jpg",
    tools: [
      { name: "Illustrator", color: "bg-orange-200 text-gray-900" },
      { name: "Photoshop", color: "bg-sky-100 text-gray-900" },
    ],
    behance: "https://www.behance.net/dakotaking",
    isNew: true,
  },
];

const Works = () => {
  return (
    <section className="page-shell w-full px-4 py-16 md:px-6">
      <section className="section-wrap max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <span className="section-kicker">Selected Work</span>
          <h1 className="section-title mt-5">Projects that combine frontend craft with visual thinking.</h1>
          <p className="section-copy mt-4">
            A mix of development work, product concepts, and brand-led design pieces. Each project reflects the way I like to work: clean systems, expressive presentation, and practical execution.
          </p>
        </div>

        <div className="glass-panel soft-grid mb-20 grid grid-cols-1 gap-12 overflow-hidden rounded-[2.25rem] p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[#07111f]">
            <video
              src={featuredProject.video}
              autoPlay
              loop
              muted
              playsInline
              className="h-full min-h-[280px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/70 via-transparent to-transparent" />
          </div>

          <div className="flex flex-col justify-center text-[var(--text)]">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--accent-text)]">Featured Case Study</p>
            <h2 className="mt-3 text-4xl font-black">
              {featuredProject.title}
            </h2>

            <p className="mt-4 leading-8 text-[var(--muted-text)]">
              {featuredProject.description}
            </p>

            <p className="mt-4 text-sm leading-7 text-[var(--muted-text)]">
              Role: UI design, frontend development, component styling, responsive layout, and content direction.
            </p>

            <div className="mt-6">
              <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--muted-text)]">Tools Used</h4>
              <div className="flex flex-wrap gap-3">
                {featuredProject.tools.map((tool) => (
                  <span
                    key={tool.name}
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${tool.color}`}
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--accent)] px-6 py-3 text-center font-bold text-[var(--button-text)] shadow-lg hover:-translate-y-0.5 hover:bg-[var(--accent-hover)]"
              >
                GitHub
              </a>
              <a
                href={featuredProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--border-soft)] bg-white/70 px-6 py-3 text-center font-bold text-[var(--text)] hover:-translate-y-0.5 hover:bg-white hover:text-black dark:bg-white/6 dark:text-[var(--text)]"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>

        <h2 className="mb-6 text-3xl font-black">Development Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-panel group relative overflow-hidden rounded-[2rem]"
            >
              {project.isNew && (
                <span className="absolute left-[-25px] top-4 z-10 rotate-[-40deg] bg-red-700 px-10 py-1 text-xs font-bold tracking-[0.2em] text-white">
                  NEW
                </span>
              )}

              <Image
                src={project.image}
                alt={project.title}
                width={640}
                height={384}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <div className="p-6">
                <h3 className="mb-2 text-xl font-black text-[var(--text)]">
                  {project.title}
                </h3>

                <p className="mb-5 text-sm leading-7 text-[var(--muted-text)]">
                  {project.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool.name}
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${tool.color}`}
                    >
                      {tool.name}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full bg-[var(--accent)] px-4 py-2 text-center text-sm font-bold text-[var(--button-text)] hover:bg-[var(--accent-hover)]"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full border border-[var(--border-soft)] bg-white/70 px-4 py-2 text-center text-sm font-bold text-[var(--text)] hover:bg-white hover:text-black dark:bg-white/6 dark:text-[var(--text)]"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-6 mt-14 text-3xl font-black">Design Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {designs.map((design) => (
            <div
              key={design.id}
              className="glass-panel group relative overflow-hidden rounded-[2rem]"
            >
              {design.isNew && (
                <span className="absolute left-[-25px] top-4 z-10 rotate-[-40deg] bg-red-700 px-10 py-1 text-xs font-bold tracking-[0.2em] text-white">
                  NEW
                </span>
              )}

              <Image
                src={design.image}
                alt={design.title}
                width={640}
                height={384}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <div className="p-6">
                <h3 className="mb-2 text-xl font-black text-[var(--text)]">
                  {design.title}
                </h3>

                <p className="mb-5 text-sm leading-7 text-[var(--muted-text)]">
                  {design.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {design.tools.map((tool) => (
                    <span
                      key={tool.name}
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${tool.color}`}
                    >
                      {tool.name}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={design.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full bg-[var(--accent)] px-4 py-2 text-center text-sm font-bold text-[var(--button-text)] hover:bg-[var(--accent-hover)]"
                  >
                    Behance
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Works;
