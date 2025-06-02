'use client';

export default function BusinessUnitModal({
  onSelect,
}: {
  onSelect: (unit: string) => void;
}) {
  return (
    <div className="fixed inset-0 z-50 animate-whitePulse backdrop-blur-sm bg-white/80 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-2xl sm:text-3xl font-medium mb-10 text-black">
          Seleccioná cómo querés que te ayudemos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* ComerPlus */}
          {/* ProtecciónPluss */}
          <button
            onClick={() => onSelect('proteccionpluss')}
            className="bg-gradient-to-br from-[#fbdc13] via-white to-[#608c9a] border border-yellow-200 rounded-3xl p-8 shadow-xl text-left flex flex-col items-center hover:scale-105 transition duration-300"
          >
            <img
              src="/proteccionplus.svg"
              alt="Protección Pluss"
              className="w-56 h-auto mb-6"
            />

            <h3 className="text-[#056379] font-semibold text-xl mb-4 text-center">
              Protección total, estés donde estés
            </h3>

            <ul className="list-disc list-inside text-[#044c5d] text-base space-y-2 text-left max-w-xs">
              <li>Asistencia vehicular 24/7</li>
              <li>Emergencias médicas a domicilio</li>
              <li>Servicios del hogar</li>
              <li>Asistencia legal y emocional</li>
              <li>Beneficios y descuentos exclusivos</li>
            </ul>
          </button>

          {/* ProtecciónPluss */}
          <button
            onClick={() => onSelect('')}
            className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg text-left flex flex-col items-center hover:shadow-2xl transition"
          >
            <img
              src="/proteccionpluss.svg"
              alt="ProtecciónPluss"
              className="w-56 h-auto mb-6"
            />
            <ul className="list-disc list-inside text-gray-600 space-y-2 text-left">
              <li>Asistencia vehicular 24/7</li>
              <li>Emergencias médicas a domicilio</li>
              <li>Servicios del hogar</li>
              <li>Asistencia legal y emocional</li>
              <li>Beneficios y descuentos exclusivos</li>
            </ul>
          </button>
        </div>
      </div>
    </div>
  );
}
