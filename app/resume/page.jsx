"use client";

import Link from "next/link";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiDownload,
  FiMapPin,
  FiTool,
} from "react-icons/fi";
import {
  SiAdobecreativecloud,
  SiAdobeindesign,
  SiCanva,
  SiGooglechrome,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { DiIllustrator } from "react-icons/di";
import { DiPhotoshop } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { Button } from "../../components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";

const resumeUrl = "/assets/resume/Dakota_King_Resume_Professional%20NEW.pdf";

const experience = [
  {
    company: "Walt Disney World",
    location: "Orlando, FL",
    position: "Disney Springs Custodial · Disney College Program",
    duration: "January 2026 – Present",
    highlights: [
      "Maintain high-traffic Guest areas through routine cleaning, restroom restocking, and rapid response to Guest needs.",
      "Support the Guest experience with directions, answers, and positive Magical Moments throughout Disney Springs.",
      "Follow established safety, cleanliness, and service standards in a fast-paced hospitality environment.",
    ],
  },
  {
    company: "FASTSIGNS",
    location: "Lakeland, FL",
    position: "Graphic Design & Production",
    duration: "March 2025 – September 2025",
    highlights: [
      "Designed and produced event signage, building graphics, and convention backdrops from customer brief through final production.",
      "Consulted with customers on signage options, prepared recommendations, and coordinated proofing and revisions.",
      "Prepared production-ready files and delivered accurate printed materials on deadline.",
    ],
  },
  {
    company: "FASTSIGNS",
    location: "Carrollton, TX",
    position: "Equipment Operator & Production",
    duration: "September 2021 – March 2025",
    highlights: [
      "Created production files and operated solvent printers, plotters, and flatbed equipment for commercial signage projects.",
      "Led production meetings, delegated tasks, and coordinated with sales to keep orders on schedule.",
      "Supported a production environment with approximately $2M in annual sales while collaborating across companies to meet deadlines.",
    ],
  },
  {
    company: "Sign-A-Rama",
    location: "McKinney, TX",
    position: "Graphic Designer",
    duration: "May 2021 – August 2021",
    highlights: [
      "Created signage, event and building graphics, and convention banners from concept through production.",
      "Managed customer communication, proofing, approvals, and walk-in sales.",
    ],
  },
  {
    company: "Amazon",
    location: "Mesquite, TX",
    position: "Amazon Flex Driver",
    duration: "November 2020 – April 2021",
    highlights: [
      "Delivered high-volume residential packages during COVID operations while meeting route timing and accuracy expectations.",
      "Organized vehicle loadouts to improve delivery flow and return to base on schedule.",
    ],
  },
    {
    company: "Target",
    location: "Rockwall, TX",
    position: "Tech Associate",
    duration: "April 2016 – November 2020",
    highlights: [
      "Assisted guests with electronics purchases, product comparisons, and accessory recommendations.",
      "Managed high-value electronics inventory during truck unloads and daily floor operations.",
    ],
  },
];

const education = [
  {
    institution: "Southern Methodist University",
    degree: "Full Stack Development",
    duration: "May 2024",
  },
  {
    institution: "Collin College",
    degree: "Associate of Science in Graphic Design",
    duration: "May 2020",
  },
];

const certifications = [
  "The Origins I: HTML",
  "The Origins II: CSS",
  "The Origins III: JavaScript",
  "The Legend of Python",
];

const skills = [
  { icon: <FaHtml5 />, name: "HTML", group: "Frontend" },
  { icon: <FaCss3 />, name: "CSS", group: "Frontend" },
  { icon: <FaJs />, name: "JavaScript", group: "Frontend" },
  { icon: <FaReact />, name: "React", group: "Frontend" },
  { icon: <FaReact />, name: "React Native", group: "Frontend" },
  { icon: <SiNextdotjs />, name: "Next.js", group: "Frontend" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", group: "Frontend" },
  { icon: <SiRedux />, name: "Redux", group: "Frontend" },
  
  { icon: <DiIllustrator />, name: "Adobe Illustrator", group: "Design" },
  { icon: <DiPhotoshop />, name: "Adobe Photoshop", group: "Design" },
  { icon: <SiAdobeindesign />, name: "Adobe InDesign", group: "Design" },
  { icon: <SiAdobecreativecloud />, name: "Adobe Creative Cloud", group: "Design" },
  { icon: <FaFigma />, name: "Figma", group: "Design" },
  { icon: <SiCanva />, name: "Canva", group: "Design" },

  { icon: <FaGitAlt />, name: "Git / GitHub", group: "Production & Tools" },
  { icon: <VscVscode />, name: "VS Code", group: "Production & Tools" },
  { icon: <SiGooglechrome />, name: "Chrome DevTools", group: "Production & Tools" },
  { icon: <FiTool />, name: "Print & digital production", group: "Production & Tools" },
  { icon: <FiCheckCircle />, name: "Testing & debugging", group: "Production & Tools" },
];

const projects = [
  {
    name: "myPocketBard",
    stack: "Next.js · Tailwind CSS · React · TypeScript · Radix UI",
    highlights: [
      "Built a responsive concept website for a Dungeons & Dragons audio-generation app, including features, pricing, and FAQs.",
      "Applied clear UI structure and visual hierarchy to communicate product value.",
    ],
  },
  {
    name: "Duncanville Bookstore App",
    stack: "React Native / Expo · Node.js / Express · MongoDB · Clerk · Resend",
    highlights: [
      "Developed a mobile app concept for comic shop customers featuring events, rewards, tabletop gaming, popular books, and wishlist / pull-list features.",
      "Designed repeat-customer workflows and made store updates easy to discover.",
    ],
  },
  {
    name: "DakotaVKing.dev",
    stack: "Next.js · Tailwind CSS · React · Radix UI · Resend",
    highlights: [
      "Brought portfolio, resume, services, and contact information together in a polished, professional website.",
      "Built responsive, accessible interfaces and a live contact form connected through Resend.",
    ],
  },
];

const about = {
  description:
    "I'm a frontend developer and graphic designer with hands-on experience building responsive digital interfaces, production-ready brand assets, and customer-facing signage. I work with React, Next.js, React Native, Tailwind CSS, JavaScript, Figma, and Adobe Creative Suite, with a strong foundation in layout, typography, print production, customer communication, and deadline-driven delivery.",
  info: [
    { label: "Location", value: "Florida, USA", icon: <FiMapPin /> },
    { label: "Languages", value: "English" },
    { label: "Availability", value: "Open to freelance" },
  ],
};

const Resume = () => {
  return (
    <section className="page-shell py-10 md:py-14 xl:py-16">
      <div className="section-wrap">
        <div className="glass-panel soft-triangles overflow-hidden rounded-[2rem] p-6 sm:p-8 xl:p-10">
          <div className="flex flex-col gap-6 pb-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="section-kicker">Resume</span>
              <h1 className="section-title mt-5">
                Frontend developer. UI designer. Visual problem-solver.
              </h1>
              <p className="section-copy mt-4">
                Explore my experience, education, projects, and skills—or
                download the latest resume.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
              <Button
                asChild
                size="lg"
                className="bg-[var(--accent)] text-[var(--button-text)] hover:bg-[var(--accent-hover)]"
              >
                <Link
                  href={resumeUrl}
                  download="Dakota_King_Resume_Professional.pdf"
                  className="flex items-center gap-2 bg-[var(--accent)] text-[var(--button-text)] shadow-lg hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] hover:text-black"
                >
                  <FiDownload aria-hidden="true" />
                  Download Resume
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border border-[var(--border-soft)] bg-white/5 text-[var(--text)] hover:bg-white/10"
              >
                <Link href="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="experience" className="mt-7">
            <TabsList
              aria-label="Resume sections"
              className="grid w-full grid-cols-2 gap-1 rounded-2xl p-1 sm:grid-cols-5"
            >
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
            </TabsList>

            <TabsContent value="experience" className="pt-8">
              <SectionHeading
                eyebrow="Career history"
                title="Experience"
                description="Design, production, and guest-facing experience across Florida and Texas."
              />
              <ol className="mt-6 grid gap-4 md:grid-cols-2">
                {experience.map((item) => (
                  <li
                    key={`${item.company}-${item.location}-${item.duration}`}
                    className="glass-panel rounded-2xl p-5 transition-transform hover:-translate-y-0.5 sm:p-6"
                  >
                    <p className="text-sm font-bold text-[var(--accent-text)]">
                      {item.duration}
                    </p>
                    <h3 className="mt-3 text-xl font-black text-[var(--text)]">
                      {item.position}
                    </h3>
                    <p className="mt-1 text-[var(--muted-text)]">
                      {item.company}
                      <span className="px-2 text-[var(--accent)]" aria-hidden="true">
                        /
                      </span>
                      {item.location}
                    </p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--muted-text)] marker:text-[var(--accent)]">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </TabsContent>

            <TabsContent value="education" className="pt-8">
              <SectionHeading
                eyebrow="Learning"
                title="Education & Certifications"
                description="Formal design education, full-stack development training, and web development certificates."
              />
              <ol className="mt-6 grid gap-4 md:grid-cols-2">
                {education.map((item) => (
                  <li
                    key={item.institution}
                    className="glass-panel rounded-2xl p-5 sm:p-6"
                  >
                    <p className="text-sm font-bold text-[var(--accent-text)]">
                      {item.duration}
                    </p>
                    <h3 className="mt-3 text-xl font-black text-[var(--text)]">
                      {item.degree}
                    </h3>
                    <p className="mt-2 leading-6 text-[var(--muted-text)]">
                      {item.institution}
                    </p>
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--muted-text)]">
                  Codedex Certifications
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {certifications.map((certification) => (
                    <li
                      key={certification}
                      className="glass-panel rounded-2xl px-5 py-4 font-semibold text-[var(--text)]"
                    >
                      {certification}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="pt-8">
              <SectionHeading
                eyebrow="Toolkit"
                title="Skills"
                description="A practical toolkit across frontend development, visual design, and production."
              />
              <div className="mt-6 grid gap-8 lg:grid-cols-2">
                {["Frontend", "Design", "Production & Tools"].map((group) => (
                  <section key={group} aria-labelledby={`skills-${group}`}>
                    <h3
                      id={`skills-${group}`}
                      className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--muted-text)]"
                    >
                      {group}
                    </h3>
                    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {skills
                        .filter((skill) => skill.group === group)
                        .map((skill) => (
                          <li
                            key={skill.name}
                            className="glass-panel flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl p-4 text-center"
                          >
                            <span
                              className="text-4xl text-[var(--accent)]"
                              aria-hidden="true"
                            >
                              {skill.icon}
                            </span>
                            <span className="text-sm font-semibold text-[var(--text)]">
                              {skill.name}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </section>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="projects" className="pt-8">
              <SectionHeading
                eyebrow="Selected work"
                title="Projects"
                description="A few projects that bring together frontend development, product thinking, and visual design."
              />
              <ol className="mt-6 grid gap-4 lg:grid-cols-2">
                {projects.map((project) => (
                  <li
                    key={project.name}
                    className="glass-panel rounded-2xl p-5 sm:p-6"
                  >
                    <h3 className="text-xl font-black text-[var(--text)]">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-[var(--accent-text)]">
                      {project.stack}
                    </p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--muted-text)] marker:text-[var(--accent)]">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </TabsContent>

            <TabsContent value="about" className="pt-8">
              <SectionHeading
                eyebrow="A little about me"
                title="Design sensibility, developer mindset."
                description={about.description}
              />
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {about.info.map((item) => (
                  <li
                    key={item.label}
                    className="glass-panel flex items-center justify-between gap-4 rounded-2xl px-5 py-4"
                  >
                    <span className="text-sm font-semibold text-[var(--muted-text)]">
                      {item.label}
                    </span>
                    <span className="flex items-center gap-2 text-right font-bold text-[var(--text)]">
                      {item.icon && (
                        <span className="text-[var(--accent)]" aria-hidden="true">
                          {item.icon}
                        </span>
                      )}
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 font-bold text-[var(--accent)] hover:text-[var(--accent-hover)]"
              >
                Contact me <FiArrowUpRight aria-hidden="true" />
              </Link>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent-text)]">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-black text-[var(--text)]">{title}</h2>
      <p className="mt-3 leading-7 text-[var(--muted-text)]">{description}</p>
    </div>
  );
}

export default Resume;
