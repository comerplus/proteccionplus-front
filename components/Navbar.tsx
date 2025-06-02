'use client';

import { NAV_LINKS, SECTION_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { HamburgerMenu } from './HamburgerMenu';
import { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import { usePathname, useRouter } from 'next/navigation';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownSections = SECTION_LINKS.map((section) => section.label);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flexBetween max-container padding-container py-5 relative">
        <Link href="/">
          <Image
            src="/proteccionplus.svg"
            alt="logo-website"
            width={220}
            height={60}
          />
        </Link>

        {/* Si estás en /contact, mostrar botón 'Ir atrás' */}
        {pathname === '/contact' ? (
          <button
            onClick={() => router.back()}
            className="ml-auto bg-[#056379] text-white px-4 py-2 rounded-xl hover:bg-[#044c5d] transition text-sm lg:text-base flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L4.414 9H17a1 1 0 110 2H4.414l3.293 3.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Inicio
          </button>
        ) : (
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:gap-8 lg:flex-1 relative">
            <ul className="flex gap-12">
              {NAV_LINKS.map((link) => {
                if (pathname === '/login' || pathname === '/panel') return null;
                if (link.label === 'Menu') {
                  if (pathname === '/contact') {
                    return (
                      <li key={link.key} className="relative">
                        <Link
                          href="/"
                          className="regular-16 text-blue-900 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  }

                  return (
                    <li key={link.key} className="relative">
                      <button
                        onClick={() => setOpen((prev) => !prev)}
                        className="regular-16 text-blue-900 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                      >
                        {link.label}
                      </button>
                    </li>
                  );
                }

                return (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="regular-16 text-blue-900 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link href="/login" passHref>
              <Button type="button" icon="/user.svg" variant="btn_dark_green" />
            </Link>
          </div>
        )}

        {open && (
          <div className="absolute top-full left-0 w-full z-40">
            <DropdownMenu sections={dropdownSections} />
          </div>
        )}
        <HamburgerMenu />
      </div>
    </nav>
  );
};
