'use client';

import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FiMenu } from "react-icons/fi";

const links = [
  { name: 'home', path: '/' },
  { name: 'resume', path: '/resume' },
  { name: 'work', path: '/work' },
  { name: 'services', path: '/services' },
  { name: 'blog', path: '/blog' },
  { name: 'contact', path: '/contact' },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--panel)] text-[var(--accent)] shadow-lg backdrop-blur-xl transition-all hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--button-text)]"
        aria-label="Open navigation menu"
      >
        <FiMenu className="text-2xl" aria-hidden="true" />
      </SheetTrigger>

      <SheetContent className="soft-triangles flex flex-col gap-0 border-l border-[var(--border-soft)] p-5 pt-6 sm:p-6">
        <SheetTitle className="sr-only">Site navigation</SheetTitle>
        <SheetDescription className="sr-only">
          Navigate to another section of the portfolio.
        </SheetDescription>
        <Link
          href="/"
          aria-label="Dakota King home"
          className="flex flex-col items-center pb-7 pr-10"
        >
          <Image
            src="/assets/king-crown-white.png"
            alt="Dakota King logo"
            width={224}
            height={57}
            className="h-auto w-44"
          />
        </Link>

        <nav aria-label="Mobile navigation" className="mt-7 flex flex-col gap-2">
          {links.map((link) => {
            const isActive =
              link.path === "/"
                ? pathname === "/"
                : pathname.startsWith(link.path);

            return (
              <SheetClose asChild key={link.path}>
                <Link
                  href={link.path}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex min-h-12 items-center justify-between rounded-full border px-5 text-sm font-bold uppercase tracking-[0.16em] transition-all ${
                    isActive
                      ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--button-text)] shadow-lg"
                      : link.path === "/contact"
                        ? "border-[var(--accent)]/50 bg-[var(--accent-soft)] text-[var(--accent-text)] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--button-text)]"
                        : "border-[var(--border-soft)] bg-[var(--panel)] text-[var(--text)]/85 hover:border-[var(--accent)] hover:bg-white/10 hover:text-[var(--text)]"
                  }`}
                >
                  <span>{link.name}</span>
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 rounded-full ${
                      isActive
                        ? "bg-[var(--button-text)]"
                        : "bg-[var(--accent)]"
                    }`}
                  />
                </Link>
              </SheetClose>
            );
          })}
        </nav>

      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
