import Link from "next/link";
import {
  FiArrowRight,
  FiCheck,
  FiCode,
  FiLayers,
  FiPenTool,
} from "react-icons/fi";
import { Button } from "../../components/ui/button";

const services = [
  {
    number: "01",
    title: "Frontend development",
    description:
      "Turn a design or early idea into a responsive website that feels considered on every screen.",
    icon: <FiCode />,
    examples: [
      "Portfolio and marketing websites",
      "Next.js page implementation",
      "Responsive components and UI polish",
    ],
  },
  {
    number: "02",
    title: "UI design",
    description:
      "Make the interface easier to understand, navigate, and use—with visual hierarchy that fits your brand.",
    icon: <FiLayers />,
    examples: [
      "Page structure and layout direction",
      "Interface and component concepts",
      "Visual cleanup for existing pages",
    ],
  },
  {
    number: "03",
    title: "Brand & visual design",
    description:
      "Build a more cohesive visual presence with a distinct direction for your brand and its digital touchpoints.",
    icon: <FiPenTool />,
    examples: [
      "Logo and identity exploration",
      "Color and typography direction",
      "Graphics prepared for the web",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Share the brief",
    description:
      "Tell me about your goals, audience, references, and what you want to improve.",
  },
  {
    number: "02",
    title: "Set a direction",
    description:
      "We agree on the right scope and focus on the most useful improvements first.",
  },
  {
    number: "03",
    title: "Make it real",
    description:
      "I shape, build, and refine the work, keeping communication clear along the way.",
  },
];

const goodFit = [
  "You need a portfolio or landing page that better represents your work.",
  "You have a website that needs clearer structure or a visual refresh.",
  "You want design and development to work together instead of feeling disconnected.",
];

export default function ServicesPage() {
  return (
    <section className="page-shell py-10 md:py-14 xl:py-16">
      <div className="section-wrap">
        <header className="glass-panel soft-triangles overflow-hidden rounded-[2rem] p-6 sm:p-8 xl:p-10">
          <div className="grid items-center gap-8 xl:grid-cols-[1.1fr_0.9fr] xl:gap-14">
            <div>
              <span className="section-kicker">Services</span>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.24em] text-[var(--accent-text)]">
                Thoughtful design, practical development
              </p>
              <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--text)] sm:text-5xl">
                Make your next digital project feel more like you.
              </h1>
              <p className="section-copy mt-5 max-w-2xl">
                I help turn ideas, existing designs, and websites that need a
                refresh into polished digital experiences—with design and
                frontend development working together.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-[var(--accent)] text-[var(--button-text)] hover:bg-[var(--accent-hover)]"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Tell me about your project
                    <FiArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="border border-[var(--border-soft)] bg-white/5 text-[var(--text)] hover:bg-white/10"
                >
                  <Link href="/work">Explore selected work</Link>
                </Button>
              </div>
            </div>

            <aside className="solid-panel rounded-[1.75rem] p-6 sm:p-7">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent-text)]">
                A good fit if…
              </p>
              <h2 className="mt-2 text-2xl font-black text-[var(--text)]">
                You want your website to work harder for you.
              </h2>
              <ul className="mt-5 space-y-4">
                {goodFit.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-[var(--muted-text)]"
                  >
                    <FiCheck
                      className="mt-1 shrink-0 text-[var(--accent)]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </header>

        <section className="mt-14 md:mt-16" aria-labelledby="services-heading">
          <div className="mb-7 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent-text)]">
              How I can help
            </p>
            <h2
              id="services-heading"
              className="mt-2 text-3xl font-black text-[var(--text)] sm:text-4xl"
            >
              Pick a starting point.
            </h2>
            <p className="mt-3 leading-7 text-[var(--muted-text)]">
              Bring a specific need or just the beginning of an idea—we can
              shape the scope together.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="glass-panel group flex h-full flex-col rounded-[1.75rem] p-6 transition-transform hover:-translate-y-1 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-2xl text-[var(--accent)]">
                    {service.icon}
                  </span>
                  <span className="text-sm font-bold tracking-[0.18em] text-[var(--muted-text)]">
                    {service.number}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-black text-[var(--text)]">
                  {service.title}
                </h3>
                <p className="mt-3 min-h-[5.5rem] leading-7 text-[var(--muted-text)]">
                  {service.description}
                </p>
                <div className="mt-5 border-t border-[var(--border-soft)] pt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-text)]">
                    Could include
                  </p>
                  <ul className="mt-4 space-y-3">
                    {service.examples.map((example) => (
                      <li
                        key={example}
                        className="flex items-start gap-3 text-sm leading-6 text-[var(--muted-text)]"
                      >
                        <FiCheck
                          className="mt-1 shrink-0 text-[var(--accent)]"
                          aria-hidden="true"
                        />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-[0.8fr_1.2fr]"
          aria-labelledby="process-heading"
        >
          <div className="glass-panel rounded-[1.75rem] p-6 sm:p-8">
            <span className="section-kicker">The process</span>
            <h2
              id="process-heading"
              className="mt-5 text-3xl font-black text-[var(--text)]"
            >
              Clear steps, thoughtful details.
            </h2>
            <p className="mt-4 leading-7 text-[var(--muted-text)]">
              No guesswork about what happens next. We start with the problem,
              agree on a useful direction, and refine the details together.
            </p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.number}
                className="solid-panel rounded-[1.5rem] p-5 sm:p-6"
              >
                <p className="text-sm font-bold tracking-[0.2em] text-[var(--accent-text)]">
                  {step.number}
                </p>
                <h3 className="mt-4 text-xl font-black text-[var(--text)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted-text)]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="glass-panel mt-14 flex flex-col gap-5 rounded-[1.75rem] p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent-text)]">
              Have something in mind?
            </p>
            <h2 className="mt-2 text-2xl font-black text-[var(--text)] sm:text-3xl">
              Tell me what you&apos;re working on.
            </h2>
            <p className="mt-3 leading-7 text-[var(--muted-text)]">
              Share what you need, what feels unfinished, or where you&apos;d like
              to go next. We can figure out the right first step together.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="shrink-0 bg-[var(--accent)] text-[var(--button-text)] hover:bg-[var(--accent-hover)]"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Start a conversation
              <FiArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </section>
      </div>
    </section>
  );
}
