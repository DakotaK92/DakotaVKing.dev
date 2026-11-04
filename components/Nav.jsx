"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "services", path: "/services" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--panel)] p-2 backdrop-blur-xl">
      {links.map((link) => {
        const isActive =
          link.path === "/"
            ? pathname === "/"
            : pathname.startsWith(link.path);

        return (
          <Link
            href={link.path}
            key={link.path}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-full px-4 py-2 capitalize text-sm font-bold tracking-[0.14em] transition-all ${
              isActive
                ? "bg-[var(--accent)] text-[var(--button-text)] shadow-lg"
                : "text-[var(--text)]/80 hover:bg-white/10 hover:text-[var(--text)]"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
