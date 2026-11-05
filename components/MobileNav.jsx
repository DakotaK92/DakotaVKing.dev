'use client';

import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from "react-icons/ci";

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
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--panel)] shadow-lg backdrop-blur-xl"
        aria-label="Open navigation menu"
      >
        <CiMenuFries className="text-[32px] text-[var(--accent)]" />
      </SheetTrigger>

      <SheetContent className="flex flex-col p-3">
        <SheetTitle className="sr-only">Site navigation</SheetTitle>
        <Link href="/" className="mt-20 flex justify-center">
          <Image
            src="/assets/king-crown-white.png"
            alt="Dakota King logo"
            width={224}
            height={57}
            className="h-auto w-56 p-2"
          />
        </Link>

        <nav className="mt-8 flex flex-col items-center gap-3 p-4">
          {links.map((link, index) => (
            <SheetClose asChild key={index}>
              <Link
                href={link.path}
                aria-current={link.path === pathname ? "page" : undefined}
                className={`w-full rounded-2xl px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.2em] transition-all ${
                  link.path === pathname
                    ? "bg-[var(--accent)] text-[var(--button-text)]"
                    : "bg-white/8 text-white/82 hover:bg-white/12 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
