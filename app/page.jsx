import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <section className="page-shell pb-12 pt-2 md:pb-16 xl:pb-20">
      <div className="section-wrap">
        <div className="grid items-center gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:gap-16 xl:pt-10">
          <div className="order-2 text-center xl:order-none xl:text-left">
            <span className="section-kicker">Designer + Developer</span>

            <div className="mt-6 space-y-5">
              <h1 className="h1 max-w-4xl">
                I build thoughtful digital experiences with a strong eye for
                <span className="text-[var(--accent)]"> design, motion, and clarity.</span>
              </h1>

              <p className="max-w-[620px] text-lg leading-8 text-[var(--muted-text)] md:text-xl">
                I&apos;m Dakota King, a graphic designer and full stack developer who builds polished interfaces, practical frontend systems, and portfolio-ready experiences with equal attention to aesthetics and usability.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row xl:justify-start">
              <Button size="lg" asChild className="flex items-center gap-2 bg-[var(--accent)] text-[var(--button-text)] shadow-lg hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] hover:text-black">
                <Link
                  href="/assets/resume/Dakota_King_Resume_Professional.pdf"
                  download
                  className="flex items-center gap-2"
                >
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Link>
              </Button>

              <Button size="lg" asChild className="border border-[var(--border-soft)] bg-white/70 text-[var(--text)] shadow-none hover:-translate-y-0.5 hover:bg-white hover:text-black dark:bg-white/6 dark:text-[var(--text)]">
                <Link href="/work">View Selected Work</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 xl:items-start">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--muted-text)]">
                Find me online
              </p>
              <div className="mb-2">
                <Social
                  containerStyles="flex gap-4"
                  iconStyles="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--panel)] text-[var(--accent)] shadow-lg backdrop-blur-xl hover:-translate-y-0.5 hover:bg-[var(--accent)] hover:text-[var(--button-text)]"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />

      <div className="section-wrap mt-6">
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="glass-panel rounded-[2rem] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--accent-text)]">Frontend Focus</p>
            <h2 className="mt-3 text-2xl font-black">Interfaces that feel refined from the first scroll.</h2>
            <p className="mt-3 leading-7 text-[var(--muted-text)]">
              I care about layout rhythm, motion, readability, and the details that make an interface feel considered instead of assembled.
            </p>
          </article>

          <article className="glass-panel rounded-[2rem] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--accent-text)]">Design Background</p>
            <h2 className="mt-3 text-2xl font-black">A visual eye shaped by production and branding work.</h2>
            <p className="mt-3 leading-7 text-[var(--muted-text)]">
              My background in design helps me bridge aesthetics and implementation without sacrificing clarity, consistency, or craft.
            </p>
          </article>

          <article className="glass-panel rounded-[2rem] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--accent-text)]">Open to Work</p>
            <h2 className="mt-3 text-2xl font-black">Available for freelance and creative dev projects.</h2>
            <p className="mt-3 leading-7 text-[var(--muted-text)]">
              If you need a portfolio site, brand-forward product UI, or a custom frontend build that feels polished and personal, let&apos;s talk.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
