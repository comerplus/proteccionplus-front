import Image from 'next/image';
import {
  FaRegHandshake,
  FaGlobeAmericas,
  FaRegLightbulb,
} from 'react-icons/fa';

export default function AboutUs() {
  return (
    <section id="¿quiénes somos?" className="bg-white py-14 px-6 md:px-20 mb-[-25px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="bold-40 text-blue-900 mb-6 border-b-4 border-blue-500 inline-block">
          ¿Quiénes Somos?
        </h2>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mt-10">
          {/* Texto */}
          <div className="lg:w-2/3 text-gray-800 regular-18 leading-relaxed space-y-8">
            <div className="flex gap-4 items-start">
              <FaGlobeAmericas className="text-green-600 text-3xl mt-1" />
              <p>
                Somos una empresa integral de servicios con presencia y alcance
                mundial. Nuestros servicios y soluciones de calidad resuelven
                necesidades de empresas y personas en un mundo dinámico,
                cambiante y exigente.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <FaRegLightbulb className="text-yellow-500 text-3xl mt-1" />
              <p>
                Mejoramos la vida cotidiana de nuestros clientes a través de la
                prestación de Servicios de Asistencia, las 24 horas todos los
                días del año en todo el mundo.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <FaRegHandshake className="text-blue-500 text-3xl mt-1" />
              <p>
                Seriedad, compromiso y respeto por el cliente son algunos de los
                valores corporativos que nos definen y guían cada acción que
                emprendemos.
              </p>
            </div>
          </div>

          {/* Imagen */}
          <div className="lg:w-1/3 flex justify-center">
            <Image
              src="/aboutUs.png"
              alt="Nube de palabras"
              width={400}
              height={300}
              className="w-full max-w-sm h-auto rounded-xl"
              priority
            />
          </div>
        </div>

        {/* Botón */}
        <div className="mt-14 flex justify-center lg:justify-start">
          <a
            href="/presentacion.pdf"
            download
            className="inline-block bg-green-90 hover:bg-black text-white font-semibold px-8 py-4 rounded-2xl transition-colors duration-300 shadow"
          >
            📥 Descargar presentación
          </a>
        </div>
        {/* Sub-sección Protección Plus - Unidad Financiera */}
      </div>
    </section>
  );
}
