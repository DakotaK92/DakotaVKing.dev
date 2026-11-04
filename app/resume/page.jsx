"use client";

import Link from "next/link";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { FiArrowUpRight, FiDownload, FiMapPin } from "react-icons/fi";
import {
  SiAdobecreativecloud,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import { Button } from "../../components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";

const resumeUrl = "/assets/resume/Dakota_King_Resume_Professional.pdf";

const experience = [
  {
    company: "Walt Disney World",
    location: "Kissimmee, FL",
    position: "Disney College Program",
    duration: "January 2026 – January 2027",
  },
  {
    company: "FASTSIGNS",
    location: "Lakeland, FL",
    position: "Graphic Design & Production",
    duration: "March 2025 – September 2025",
  },
  {
    company: "FASTSIGNS",
    location: "Carrollton, TX",
    position: "Graphic Design & Production",
    duration: "September 2022 – March 2025",
  },
  {
    company: "Signarama",
    location: "McKinney, TX",
    position: "Graphic Design and Production",
    duration: "May 2021 – August 2021",
  },
  {
    company: "Amazon",
    location: "Mesquite, TX",
    position: "Package Handler",
    duration: "November 2020 – April 2021",
  },
  {
    company: "Target",
    location: "Rockwall, TX",
    position: "Tech Associate",
    duration: "March 2016 – November 2020",
  },
];

const education = [
  {
    institution: "edX · Southern Methodist University (SMU)",
    degree: "Full Stack Developer Bootcamp",
    duration: "November 2023 – May 2024",
  },
  {
    institution: "Collin College Community College",
    degree: "Associate's Degree in Graphic Design",
    duration: "May 2016 – May 2020",
  },
];

const skills = [
  { icon: <FaHtml5 />, name: "HTML5", group: "Development" },
  { icon: <FaCss3 />, name: "CSS3", group: "Development" },
  { icon: <FaJs />, name: "JavaScript", group: "Development" },
  { icon: <FaReact />, name: "React", group: "Development" },
  { icon: <SiNextdotjs />, name: "Next.js", group: "Development" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", group: "Development" },
  { icon: <FaNodeJs />, name: "Node.js", group: "Development" },
  {
    icon: <SiAdobecreativecloud />,
    name: "Adobe Creative Cloud",
    group: "Design",
  },
];

const about = {
  description:
    "I'm a full-stack web developer with a background in graphic design and production, bringing technical problem-solving and visual awareness to the same project. I focus on responsive, performance-minded interfaces with React, Next.js, and modern UI tools. Working in fast-paced production environments has strengthened my attention to detail, adaptability, and ability to deliver polished work on tight timelines.",
  info: [
    { label: "Experience", value: "2 years" },
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
                A background in design. A focus on building for the web.
              </h1>
              <p className="section-copy mt-4">
                Explore my experience, education, and skills—or download a copy
                of my resume.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
              <Button
                asChild
                size="lg"
                className="bg-[var(--accent)] text-[var(--button-text)] hover:bg-[var(--accent-hover)]"
              >
                <Link href={resumeUrl} download className="flex items-center gap-2">
                  <FiDownload aria-hidden="true" />
                  Download PDF
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
              className="grid w-full grid-cols-2 gap-1 rounded-2xl p-1 sm:grid-cols-4"
            >
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
            </TabsList>

            <TabsContent value="experience" className="pt-8">
              <SectionHeading
                eyebrow="Career history"
                title="Experience"
                description="A mix of design, production, and customer-facing roles."
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
                  </li>
                ))}
              </ol>
            </TabsContent>

            <TabsContent value="education" className="pt-8">
              <SectionHeading
                eyebrow="Learning"
                title="Education"
                description="Formal design education alongside focused software development training."
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
            </TabsContent>

            <TabsContent value="skills" className="pt-8">
              <SectionHeading
                eyebrow="Toolkit"
                title="Skills"
                description="A practical toolkit across web development and visual design."
              />
              <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1fr]">
                {["Development", "Design"].map((group) => (
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
