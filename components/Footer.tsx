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
    <footer className="bg-white/90 backdrop-blur-md border-t border-gray-200">
      <div className="max-container padding-container py-10 flex flex-col md:flex-row md:justify-between gap-6">
        {/* Logo + Descripción */}
        <div className="flex flex-col gap-4 max-w-sm">
          <Link href="/">
            <Image src="/proteccionplus.svg" alt="logo" width={160} height={40} />
          </Link>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Proteccionplus. Todos los derechos reservados.
          </p>
        </div>

        {/* Links rápidos */}
        <div className="flex flex-col md:flex-row gap-6">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-primary transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
