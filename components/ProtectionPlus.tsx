'use client';
export default function ProtectionPlus() {
  return (
    <section id="protección plus" className="bg-white px-6  md:px-20">
      <div className="mt-20 bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-2xl p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-md">
        <div className="text-gray-800 lg:w-3/4">
          <h3 className="bold-24 text-blue-900 mb-2">
            💳 También somos{' '}
            <span className="text-green-700">Protección Plus</span>
          </h3>
          <p className="regular-16 leading-relaxed">
            Protección Plus es nuestra unidad de negocios financiera. Nació para
            complementar nuestros servicios tradicionales con soluciones de
            crédito, cobertura y beneficios que potencian la vida diaria de
            nuestros clientes.
            <br />
            Ofrecemos productos accesibles, con respaldo y atención
            personalizada.
          </p>
        </div>
        <a
          href="/proteccion-plus"
          className="mt-4 lg:mt-0 inline-block bg-green-90 hover:bg-black text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
        >
          Conocer Protección Plus →
        </a>
      </div>
    </section>
  );
}
