"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiGithub,
  FiPlay,
} from "react-icons/fi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

const featuredProject = {
  title: "Duncanville Bookstore App",
  category: "Product design · Mobile development",
  description:
    "A mobile app concept that helps comic fans discover shop events, keep up with rewards, and stay connected with their local bookstore.",
  image: "/assets/work/design-image-1.jpg",
  imageAlt: "Duncanville Bookstore project cover artwork",
  demo: "https://www.youtube.com/watch?v=NU1NDJTvKzg",
  tools: [
    "Expo",
    "React Native",
    "NativeWind",
    "Clerk",
    "Axios",
    "TanStack Query",
    "Expo Image",
  ],
  github: "https://github.com/DakotaK92/DuncanvilleComics-ReactNative",
};

const developmentProjects = [
  {
    title: "MyPocketBard",
    category: "Web app · AI songwriting",
    description:
      "An AI-powered songwriting tool that helps users generate lyrics, explore rhyme ideas, and move from a blank page to a first draft.",
    image: "/assets/work/development-image-1.jpg",
    imageAlt: "MyPocketBard songwriting project artwork",
    tools: ["React", "Next.js", "Tailwind CSS", "Radix UI"],
    github: "https://github.com/DakotaK92/myPocketBard",
    live: "https://my-pocket-bard.vercel.app/",
  },
  {
    title: "Lick",
    category: "Website · Brand experience",
    description:
      "A playful ice cream brand website with featured flavors, brand storytelling, rewards, and a store locator experience.",
    image: "/assets/work/design-image-2.jpg",
    imageAlt: "Lick ice cream brand artwork",
    tools: ["React", "Next.js", "Tailwind CSS", "Radix UI"],
    github: "https://github.com/DakotaK92/DakotaK92-Portfolio",
    live: "https://lick-one.vercel.app/",
  },
];

const designProjects = [
  {
    title: "Duncanville Bookstore",
    category: "Brand identity · Local retail",
    description:
      "A rebrand and identity refresh for a local bookstore, with a modern, playful, and approachable visual direction.",
    image: "/assets/work/design-image-1.jpg",
    imageAlt: "Duncanville Bookstore brand identity artwork",
    tools: ["Illustrator", "Photoshop"],
    behance: "https://www.behance.net/dakotaking",
  },
  {
    title: "Lick",
    category: "Brand identity · Packaging",
    description:
      "An expressive ice cream identity and packaging system focused on personality, flavor, and shelf appeal.",
    image: "/assets/work/design-image-2.jpg",
    imageAlt: "Lick ice cream identity and packaging artwork",
    tools: ["Illustrator", "Photoshop"],
    behance: "https://www.behance.net/dakotaking",
  },
  {
    title: "Dicey Dice",
    category: "Brand concept · Apparel",
    description:
      "A tie-dye-inspired clothing brand concept with D&D-themed artwork and an expressive, character-led tone.",
    image: "/assets/work/design-image-3.jpg",
    imageAlt: "Dicey Dice apparel brand artwork",
    tools: ["Illustrator", "Photoshop"],
    behance: "https://www.behance.net/dakotaking",
  },
];

function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div className="mb-6 max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent-text)]">
        {eyebrow}
      </p>
      <h2 id={id} className="mt-2 text-2xl font-black text-[var(--text)] sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 leading-7 text-[var(--muted-text)]">{description}</p>
      )}
    </div>
  );
}

function ProjectGrid({ projects }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.title}
          className="glass-panel group flex h-full flex-col overflow-hidden rounded-[1.75rem]"
        >
          <div className="relative aspect-[1.6] overflow-hidden bg-[var(--panel-strong)]">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent-text)]">
              {project.category}
            </p>
            <h3 className="mt-2 text-xl font-black text-[var(--text)]">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-7 text-[var(--muted-text)]">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tools used">
              {project.tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-[var(--border-soft)] bg-white/5 px-3 py-1 text-xs font-medium text-[var(--muted-text)]"
                >
                  {tool}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-3 border-t border-[var(--border-soft)] pt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source on GitHub`}
                  className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[var(--accent)] px-4 text-sm font-bold text-[var(--button-text)] hover:bg-[var(--accent-hover)]"
                >
                  <FiGithub aria-hidden="true" />
                  Source
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[var(--border-soft)] px-4 text-sm font-bold text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Live project
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              )}
              {project.behance && (
                <a
                  href={project.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} design portfolio on Behance`}
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[var(--border-soft)] px-4 text-sm font-bold text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Behance
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function FeaturedProject() {
  return (
    <article className="glass-panel mb-12 grid min-w-0 overflow-hidden rounded-[2rem] lg:grid-cols-[1.05fr_0.95fr]">
      <a
        href={featuredProject.demo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch the ${featuredProject.title} demo on YouTube`}
        className="group relative block aspect-video w-full min-w-0 overflow-hidden bg-[#07111f] focus-visible:outline-none lg:aspect-auto lg:min-h-[420px]"
      >
        <Image
          src={featuredProject.image}
          alt={featuredProject.imageAlt}
          fill
          sizes="(max-width: 1023px) 100vw, 55vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute inset-0 bg-slate-950/25 transition-colors group-hover:bg-slate-950/40" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex items-center gap-3 rounded-full border border-white/30 bg-slate-950/75 px-5 py-3 font-bold text-white shadow-xl backdrop-blur transition-transform group-hover:scale-105">
            <FiPlay aria-hidden="true" />
            Watch app demo
            <FiArrowUpRight aria-hidden="true" />
          </span>
        </span>
      </a>

      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent-text)]">
          Featured project
        </p>
        <p className="mt-3 text-sm font-medium text-[var(--muted-text)]">
          {featuredProject.category}
        </p>
        <h3 className="mt-2 text-3xl font-black text-[var(--text)] sm:text-4xl">
          {featuredProject.title}
        </h3>
        <p className="mt-4 leading-7 text-[var(--muted-text)]">
          {featuredProject.description}
        </p>
        <p className="mt-4 text-sm leading-6 text-[var(--muted-text)]">
          Focus: UI design, mobile development, responsive interfaces, and
          bringing the bookstore experience into one app.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tools used">
          {featuredProject.tools.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-[var(--border-soft)] bg-white/5 px-3 py-1 text-xs font-medium text-[var(--muted-text)]"
            >
              {tool}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={featuredProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-[var(--accent)] px-5 text-sm font-bold text-[var(--button-text)] hover:bg-[var(--accent-hover)]"
          >
            <FiGithub aria-hidden="true" />
            Explore the code
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <a
            href={featuredProject.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-[var(--border-soft)] px-5 text-sm font-bold text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Watch demo
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Works() {
  return (
    <section className="page-shell py-10 md:py-14 xl:py-16">
      <div className="section-wrap max-w-7xl">
        <header className="mb-9 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="section-kicker">Selected work</span>
            <h1 className="section-title mt-5">
              Thoughtful design. Useful things for the web.
            </h1>
            <p className="section-copy mt-4">
              A selection of apps, websites, and visual identities—made with a
              mix of frontend craft and design thinking.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-[var(--border-soft)] bg-white/5 px-5 text-sm font-bold text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] md:self-auto"
          >
            Have a project? Let&apos;s talk <FiArrowRight aria-hidden="true" />
          </Link>
        </header>

        <Tabs defaultValue="all" className="gap-7">
          <TabsList
            aria-label="Filter projects by category"
            className="grid w-full max-w-[520px] grid-cols-3 gap-2 rounded-2xl p-1"
          >
            <TabsTrigger value="all">All work</TabsTrigger>
            <TabsTrigger value="development">Development</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <FeaturedProject />
            <section aria-labelledby="all-development-title" className="mb-12">
              <SectionHeading
                id="all-development-title"
                eyebrow="Build"
                title="Development projects"
                description="Interfaces and products designed to be clear, useful, and ready to use."
              />
              <ProjectGrid projects={developmentProjects} />
            </section>
            <section aria-labelledby="all-design-title">
              <SectionHeading
                id="all-design-title"
                eyebrow="Make"
                title="Brand & design"
                description="Visual identities and concepts built around distinct personalities."
              />
              <ProjectGrid projects={designProjects} />
            </section>
          </TabsContent>

          <TabsContent value="development">
            <FeaturedProject />
            <SectionHeading
              eyebrow="Build"
              title="Development projects"
              description="From mobile app concepts to responsive web experiences."
            />
            <ProjectGrid projects={developmentProjects} />
          </TabsContent>

          <TabsContent value="design">
            <SectionHeading
              eyebrow="Make"
              title="Brand & design"
              description="Visual identities and concepts built around distinct personalities."
            />
            <ProjectGrid projects={designProjects} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
