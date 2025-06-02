'use client';

import Image from 'next/image';

export default function ProtectionPlus() {
  return (
    <section id="protección plus" className="bg-white md:px-20 pt-16 pb-20">
      <div className="bg-gradient-to-br from-[#608c9a] via-white to-[#fbdc13] rounded-3xl p-12 shadow-lg max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Texto */}
        <div className="text-gray-800 lg:w-2/3">
          <h3 className="text-3xl font-bold text-[#056379] mb-4">
            💳 También somos{' '}
            <span className="text-[#f3d408]">Protección Plus</span>
          </h3>
          <p className="text-lg leading-relaxed text-gray-700">
            Protección Plus es nuestra unidad de negocios financiera. Nació para
            complementar nuestros servicios tradicionales con soluciones de
            crédito, cobertura y beneficios que potencian la vida diaria de
            nuestros clientes.
            <br />
            <br />
            Ofrecemos productos accesibles, con respaldo y atención
            personalizada.
          </p>

          <a
            href="www.proteccionplus.com.ar"
            className="mt-6 inline-block bg-[#fbdc13] hover:bg-[#f3d408] text-[#056379] font-semibold px-6 py-3 rounded-xl shadow-md transition duration-300"
          >
            Conocer Protección Plus →
          </a>
        </div>

        {/* Logo */}
        <div className="w-48 lg:w-64 shrink-0">
          <Image
            src="/proteccionpluss.svg"
            alt="Protección Plus Logo"
            width={256}
            height={256}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
