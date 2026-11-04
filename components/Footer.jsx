import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaBehanceSquare } from "react-icons/fa";
import { FiArrowUpRight, FiMail } from "react-icons/fi";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/DakotaK92",
    icon: <FaGithub aria-hidden="true" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dakotaking92/",
    icon: <FaLinkedin aria-hidden="true" />,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/dakotaking",
    icon: <FaBehanceSquare aria-hidden="true" />,
  },
];

const Footer = () => {
  return (
    <footer className="px-4 pb-6 pt-10 md:px-6 md:pt-14">
      <div className="section-wrap">
        <div className="glass-panel mx-auto max-w-6xl overflow-hidden rounded-[2rem]">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <div className="max-w-2xl">
              <Link
                href="/"
                aria-label="Dakota King home"
                className="inline-flex rounded-lg"
              >
                <Image
                  src="/assets/king-crown-white.png"
                  alt="Dakota King"
                  width={304}
                  height={78}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="mt-4 leading-7 text-[var(--muted-text)]">
                Designer and developer creating thoughtful brands, clear
                interfaces, and useful digital experiences.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 font-bold text-[var(--button-text)] hover:-translate-y-0.5 hover:bg-[var(--accent-hover)]"
            >
              <FiMail aria-hidden="true" />
              Have a project? Let&apos;s talk
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>

          <div className="border-t border-[var(--border-soft)] px-6 py-6 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <nav aria-label="Footer navigation">
                <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-[var(--muted-text)]">
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="hover:text-[var(--accent)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav aria-label="Social links">
                <ul className="flex gap-3">
                  {socialLinks.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.label} (opens in a new tab)`}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white/5 text-lg text-[var(--muted-text)] hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--button-text)]"
                      >
                        {item.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="mt-6 flex flex-col gap-2 border-t border-[var(--border-soft)] pt-5 text-sm text-[var(--muted-text)] sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Dakota King.</p>
              <a
                href="mailto:dakotaking92@gmail.com"
                className="w-fit hover:text-[var(--accent)]"
              >
                dakotaking92@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
