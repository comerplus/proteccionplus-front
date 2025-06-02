import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import ClientWrapper from '@/components/ClientWrapper';

export const metadata: Metadata = {
  title: 'Protección Plus',
  description: 'Servicios financieros y de protección para tu vida diaria',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <ClientWrapper>
          <Navbar />
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
