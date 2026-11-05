import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { blogNotesNewestFirst } from "../../lib/blog-notes";

export default function BlogPage() {
  return (
    <section className="page-shell py-10 md:py-14 xl:py-16">
      <div className="section-wrap">
        <header className="glass-panel soft-triangles overflow-hidden rounded-[2rem] p-6 sm:p-8 xl:p-10">
          <span className="section-kicker">Blog</span>
          <h1 className="section-title mt-5 max-w-3xl">
            A little life. A little work in progress.
          </h1>
          <p className="section-copy mt-4 max-w-2xl">
            Occasional notes from outside the portfolio: places, people,
            projects, and ideas I want to remember.
          </p>
        </header>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {blogNotesNewestFirst.map((note) => (
            <article
              key={note.slug}
              className="glass-panel flex h-full flex-col overflow-hidden rounded-[1.75rem]"
            >
              {note.images?.length > 1 ? (
                <div className="grid aspect-[1.7] grid-cols-2 gap-1 overflow-hidden bg-[var(--panel-strong)]">
                  {note.images.map((image) => (
                    <div className="relative min-h-0 overflow-hidden" key={image.src}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 767px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative aspect-[1.7] overflow-hidden bg-[var(--panel-strong)]">
                  <Image
                    src={note.image}
                    alt={note.imageAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em]">
                  <span className="text-[var(--accent-text)]">{note.category}</span>
                  <span className="h-1 w-1 rounded-full bg-[var(--muted-text)]" aria-hidden="true" />
                  <time className="text-[var(--muted-text)]" dateTime={note.date}>
                    {note.date}
                  </time>
                </div>
                <h2 className="mt-3 text-2xl font-black text-[var(--text)]">
                  {note.title}
                </h2>
                <p className="mt-3 flex-1 leading-7 text-[var(--muted-text)]">
                  {note.excerpt}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Link
                    href={`/blog/${note.slug}`}
                    className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-[var(--accent)] px-5 font-bold text-[var(--button-text)] hover:bg-[var(--accent-hover)] hover:text-black"
                  >
                    Read post
                    <FiArrowRight aria-hidden="true" />
                  </Link>
                  {note.href && (
                  <Link
                    href={note.href}
                    className="inline-flex w-fit items-center gap-2 font-semibold text-[var(--muted-text)] hover:text-[var(--text)]"
                  >
                    {note.linkLabel}
                    <FiArrowUpRight aria-hidden="true" />
                  </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="glass-panel mt-8 flex flex-col gap-4 rounded-[1.75rem] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div>
            <h2 className="text-xl font-black text-[var(--text)]">
              Have a project or a story to share?
            </h2>
            <p className="mt-2 text-[var(--muted-text)]">
              I&apos;m always happy to hear what you&apos;re working on.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-11 w-fit items-center justify-center rounded-full bg-[var(--accent)] px-5 font-bold text-[var(--button-text)] hover:bg-[var(--accent-hover)] hover:text-black"
          >
            Get in touch
          </Link>
        </aside>
      </div>
    </section>
  );
}
