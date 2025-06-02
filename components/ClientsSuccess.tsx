import { FaCheckCircle } from 'react-icons/fa';

export default function ClientsSuccess() {
  const clients = [
    'Cliente A',
    'Cliente B',
    'Cliente C',
    'Cliente D',
    'Cliente E',
    'Cliente F',
    'Cliente G',
    'Cliente p',
  ];

  

  const cases = [
    {
      title: 'Proyecto XYZ',
      description:
        'Implementamos una solución integral que permitió aumentar la eficiencia operativa en un 40%.',
      client: 'Cliente A',
    },
    {
      title: 'Caso ABC',
      description:
        'Nuestra intervención mejoró la satisfacción del cliente final y redujo tiempos de entrega en un 30%.',
      client: 'Cliente B',
    },
    {
      title: 'Transformación Digital',
      description:
        'Digitalizamos procesos clave para optimizar costos y acelerar la toma de decisiones.',
      client: 'Cliente C',
    },
  ];

  return (
    <section id="clientes" className="bg-white px-6 md:px-20 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="bold-40 text-blue-900 mb-6 border-b-4 border-blue-500 inline-block">
          Clientes & Casos de Éxito
        </h2>
        <p className="regular-18 text-gray-700 max-w-3xl mx-auto mb-12">
          Conoce algunas de las empresas que confían en nosotros y los
          resultados que hemos logrado juntos.
        </p>

        {/* Logos simulados de clientes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-20">
          {clients.map((cliente) => (
            <div
              key={cliente}
              className="bg-blue-50 border-t-4 border-blue-500 rounded-lg shadow-sm py-6 px-4 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
            >
              <FaCheckCircle className="text-blue-600 text-3xl mb-2" />
              <span className="text-blue-800 font-semibold text-sm">
                {cliente}
              </span>
            </div>
          ))}
        </div>

        {/* Casos de éxito / testimonios */}
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c) => (
            <article
              key={c.title}
              className="bg-blue-50 border-l-4 border-blue-500 rounded-lg shadow p-6 text-left"
            >
              <h3 className="bold-20 text-blue-900 mb-2">{c.title}</h3>
              <p className="regular-16 text-gray-800 mb-4">{c.description}</p>
              <p className="italic text-blue-700 font-semibold">- {c.client}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
