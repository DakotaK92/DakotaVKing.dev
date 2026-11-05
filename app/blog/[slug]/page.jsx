import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { blogNotes } from "../../../lib/blog-notes";

function getNote(slug) {
  return blogNotes.find((note) => note.slug === slug);
}

export function generateStaticParams() {
  return blogNotes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const note = getNote(slug);

  if (!note) {
    return { title: "Post not found" };
  }

  return {
    title: note.title,
    description: note.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const note = getNote(slug);

  if (!note) {
    notFound();
  }

  const images = note.images ?? [
    { src: note.image, alt: note.imageAlt },
  ];

  return (
    <article className="page-shell py-10 md:py-14 xl:py-16">
      <div className="section-wrap max-w-4xl">
        <Link
          href="/blog"
          className="mb-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--accent)] px-5 text-sm font-bold text-[var(--button-text)] shadow-lg hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] hover:text-black"
        >
          <FiArrowLeft aria-hidden="true" />
          Back to blog
        </Link>

        <header className="glass-panel soft-triangles overflow-hidden rounded-[2rem] p-6 sm:p-8 md:p-10">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em]">
            <span className="text-[var(--accent-text)]">{note.category}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--muted-text)]" aria-hidden="true" />
            <time className="text-[var(--muted-text)]" dateTime={note.date}>
              {note.date}
            </time>
          </div>
          <h1 className="mt-4 text-3xl font-black text-[var(--text)] sm:text-4xl md:text-5xl">
            {note.title}
          </h1>
          <p className="section-copy mt-5 max-w-3xl">{note.excerpt}</p>
        </header>

        <div className={`mt-6 grid gap-3 ${images.length > 1 ? "sm:grid-cols-2" : ""}`}>
          {images.map((image) => (
            <div
              key={image.src}
              className="relative aspect-[1.6] overflow-hidden rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--panel-strong)]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 639px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="glass-panel mt-6 rounded-[2rem] p-6 sm:p-8 md:p-10">
          <div className="mx-auto max-w-2xl space-y-6">
            {note.content?.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-[var(--muted-text)] md:text-lg">
                {paragraph}
              </p>
            ))}

            {note.href && (
              <Link
                href={note.href}
                className="inline-flex items-center gap-2 font-bold text-[var(--accent)] hover:text-[var(--accent-hover)]"
              >
                {note.linkLabel}
                <FiArrowUpRight aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-between gap-4">
          <Link
            href="/blog"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--border-soft)] px-5 text-sm font-bold text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <FiArrowLeft aria-hidden="true" />
            More posts
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center rounded-full bg-[var(--accent)] px-5 text-sm font-bold text-[var(--button-text)] hover:bg-[var(--accent-hover)] hover:text-black"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </article>
  );
}
