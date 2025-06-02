// components/Footer.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

const FOOTER_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export const Footer = () => {
  return (
    <footer className="bg-white ">
      <div className="max-container padding-container py-10 flex flex-col md:flex-row md:justify-between gap-6">
        {/* Logo + Descripción */}
        <div className="flex flex-col gap-4 max-w-sm">
          <Link href="/">
            <Image src="/hilink-logo.svg" alt="logo" width={120} height={40} />
          </Link>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Hilink. Todos los derechos reservados.
          </p>
        </div>

        {/* Links rápidos */}
        {/* <div className="flex flex-col md:flex-row gap-6">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-primary transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
