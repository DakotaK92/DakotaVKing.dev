import Image from "next/image";
import Link from "next/link";
import { FiArrowDownRight, FiArrowRight, FiDownload } from "react-icons/fi";
import { Button } from "../components/ui/button";
import Photo from "../components/Photo";
import Social from "../components/Social";
import Stats from "../components/Stats";
import { blogNotesNewestFirst } from "../lib/blog-notes";

const featuredWork = [
  {
    category: "Product · Mobile app",
    title: "Duncanville Bookstore",
    description:
      "A community-minded app concept for events, rewards, and staying connected with a local comic shop.",
    image: "/assets/work/design-image-1.jpg",
    imageAlt: "Visual identity artwork for the Duncanville Bookstore project",
  },
  {
    category: "Web · AI songwriting",
    title: "MyPocketBard",
    description:
      "A songwriting companion that helps turn a blank page into lyrics, rhyme ideas, and a first draft.",
    image: "/assets/work/development-image-1.jpg",
    imageAlt: "MyPocketBard project artwork",
  },
  {
    category: "Brand · E-commerce",
    title: "Lick",
    description:
      "A playful ice cream brand brought to life through a bold visual identity and a polished web experience.",
    image: "/assets/work/design-image-2.jpg",
    imageAlt: "Lick ice cream brand project artwork",
  },
];

export default function Home() {
  return (
    <div className="page-shell">
      <section className="section-wrap grid items-center gap-8 pb-12 pt-6 sm:gap-12 md:pb-16 md:pt-12 xl:min-h-[650px] xl:grid-cols-[1.05fr_0.95fr] xl:gap-8 xl:pt-8">
        <div className="order-1 text-center xl:order-none xl:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--panel)] px-4 py-2 text-sm font-medium text-[var(--muted-text)]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.65)]" />
            Available for select projects
          </div>

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--accent-text)]">
            Designer <span className="px-1 text-[var(--muted-text)]">/</span> Developer
          </p>
          <h1 className="mt-5 text-5xl font-black leading-[1.04] sm:text-6xl xl:text-[4.5rem]">
            Design.
            <br className="hidden"/> Develop.
            <span className="text-[var(--accent)]"> Polish.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[590px] text-lg leading-8 text-[var(--muted-text)] xl:mx-0">
            I&apos;m Dakota King, a designer and full-stack developer creating thoughtful brands, clear interfaces, and useful experiences for the web.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row xl:justify-start">
            <Button
              size="lg"
              asChild
              className="w-full bg-[var(--accent)] text-[var(--button-text)] shadow-lg hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] hover:text-black sm:w-auto"
            >
              <Link href="/work" className="flex items-center justify-center gap-2">
                Explore my work <FiArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="w-full border border-[var(--border-soft)] bg-white/5 text-[var(--text)] shadow-none hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
            >
              <Link href="/contact">Let&apos;s talk</Link>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 xl:justify-start">
            <Button
              size="md"
              asChild
              className="bg-[var(--accent)] text-[var(--button-text)] shadow-lg hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] hover:text-black"
            >
              <Link
                href="/assets/resume/Dakota_King_Resume_Professional.pdf"
                download
                className="inline-flex items-center gap-2"
              >
                <FiDownload aria-hidden="true" /> Download resume
              </Link>
            </Button>
            <span className="hidden h-4 w-px bg-[var(--border-soft)] sm:block" aria-hidden="true" />
            <Social
              containerStyles="flex gap-2"
              iconStyles="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-soft)] text-[var(--muted-text)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
            />
          </div>
        </div>

        <div className="order-2 xl:order-none">
          <Photo />
        </div>
      </section>

      <Stats />

      <section className="section-wrap pb-16 pt-12 md:pb-24 md:pt-16" aria-labelledby="featured-work-title">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--accent-text)]">
              A few things I&apos;ve made
            </p>
            <h2 id="featured-work-title" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Selected work.
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 self-start text-sm font-bold text-[var(--muted-text)] hover:text-[var(--accent)] md:self-auto"
          >
            View all projects <FiArrowDownRight aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {featuredWork.map((project) => (
            <Link
              key={project.title}
              href="/work"
              className="glass-panel group overflow-hidden rounded-[1.75rem] focus-visible:outline-none"
              aria-label={`View ${project.title} and more projects`}
            >
              <div className="relative aspect-[1.55] overflow-hidden bg-[var(--panel-strong)]">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-text)]">
                  {project.category}
                </p>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <h3 className="text-xl font-black">{project.title}</h3>
                  <FiArrowRight
                    className="shrink-0 text-[var(--accent)] transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--muted-text)]">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-16 md:pb-24" aria-labelledby="blog-title">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--accent-text)]">
              Life lately - thoughts, ideas, and things I&apos;ve been making
            </p>
            <h2 id="blog-title" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Blog.
            </h2>
            <p className="mt-3 leading-7 text-[var(--muted-text)]">
              A few moments, ideas, and things I&apos;ve been making along the way.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 self-start text-sm font-bold text-[var(--muted-text)] hover:text-[var(--accent)] md:self-auto"
          >
            Browse the blog <FiArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {blogNotesNewestFirst.map((note) => (
            <article key={note.slug} className="glass-panel overflow-hidden rounded-[1.75rem]">
              <Link
                href={`/blog/${note.slug}`}
                aria-label={`Read ${note.title}`}
                className="group block"
              >
              <div className="relative aspect-[1.8] overflow-hidden bg-[var(--panel-strong)]">
                <Image
                  src={note.images?.[0]?.src ?? note.image}
                  alt={note.images?.[0]?.alt ?? note.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em]">
                  <span className="text-[var(--accent-text)]">{note.category}</span>
                  <span className="h-1 w-1 rounded-full bg-[var(--muted-text)]" aria-hidden="true" />
                  <time className="text-[var(--muted-text)]" dateTime={note.date}>
                    {note.date}
                  </time>
                </div>
                <h3 className="mt-3 text-xl font-black text-[var(--text)] sm:text-2xl">
                  {note.title}
                </h3>
                <p className="mt-2 leading-7 text-[var(--muted-text)]">{note.excerpt}</p>
              </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-16 md:pb-24" aria-labelledby="shop-concept-title">
        <div className="glass-panel soft-triangles flex flex-col gap-6 overflow-hidden rounded-[2rem] p-7 md:flex-row md:items-center md:justify-between md:gap-10 md:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--accent-text)]">
              A little something in the works
            </p>
            <h2 id="shop-concept-title" className="mt-3 text-2xl font-black sm:text-3xl">
              What if my designs had a shop of their own?
            </h2>
            <p className="mt-3 leading-7 text-[var(--muted-text)]">
              Take a look at a storefront concept I&apos;m exploring—part design
              showcase, part hands-on Shopify learning project.
            </p>
          </div>
          <Link
            href="/shop-preview"
            className="inline-flex min-h-12 w-fit shrink-0 items-center gap-2 rounded-full bg-[var(--accent)] px-6 font-bold text-[var(--button-text)] hover:bg-[var(--accent-hover)] hover:text-black"
          >
            View shop concept <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section-wrap pb-16 md:pb-24" aria-labelledby="approach-title">
        <div className="glass-panel soft-triangles overflow-hidden rounded-[2rem] p-7 md:flex md:items-center md:justify-between md:gap-10 md:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--accent-text)]">
              Design-minded. Detail-driven.
            </p>
            <h2 id="approach-title" className="mt-3 text-2xl font-black sm:text-3xl">
              Good work should look considered and feel effortless to use.
            </h2>
            <p className="mt-3 leading-7 text-[var(--muted-text)]">
              I bring visual design and frontend craft together, from the first sketch to the last responsive detail.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="mt-6 shrink-0 bg-[var(--accent)] text-[var(--button-text)] hover:bg-[var(--accent-hover)] hover:text-black md:mt-0"
          >
            <Link href="/services">How I can help</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
