'use client';

import { NAV_LINKS, SECTION_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { HamburgerMenu } from './HamburgerMenu';
import { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownSections = SECTION_LINKS.map((section) => section.label);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flexBetween max-container padding-container py-5 relative">
        <Link href="/">
          <Image
            src="/hilink-logo.svg"
            alt="logo-website"
            width={100}
            height={39}
          />
        </Link>

        {/* Contenedor desktop */}
        <div className="hidden lg:flex lg:items-center lg:justify-end lg:gap-8 lg:flex-1 relative">
          <ul className="flex gap-12">
            {NAV_LINKS.map((link) => {
              if (pathname === '/login') return null;
              if (pathname === '/panel') return null;
              if (link.label === 'Menu') {
                // Si estamos en /contact, el botón redirige a /
                if (pathname === '/contact') {
                  return (
                    <li key={link.key} className="relative">
                      <Link
                        href="/"
                        className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                }

                // En otras rutas, mantiene comportamiento original (abre dropdown)
                return (
                  <li key={link.key} className="relative">
                    <button
                      onClick={() => setOpen((prev) => !prev)}
                      className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
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
                    className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link href="/login" passHref>
            <Button type="button" icon="/user.svg" variant="btn_dark_green" />
          </Link>{' '}
        </div>
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
