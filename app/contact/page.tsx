'use client';

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="h-screen w-full mt-10 bg-gradient-to-br from-[#fbdc13] via-white to-[#f3d408] flex items-center justify-center px-6"
    >
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl p-10 md:p-14 flex flex-col lg:flex-row items-center gap-10">
        {/* Texto */}
        <div className="lg:w-1/2 text-[#056379] space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            ¡Estamos para ayudarte!
          </h2>
          <p className="text-lg text-[#608c9a]">
            Completá el formulario y un asesor de nuestro equipo se pondrá en
            contacto con vos dentro de las próximas 24 horas hábiles utilizando
            el correo electrónico que registres.
          </p>
          <p className="italic text-sm text-[#056379]">
            Tu consulta es importante para nosotros. ¡Gracias por confiar en
            Protección Plus!
          </p>
        </div>

        {/* Formulario */}
        <form className="lg:w-1/2 w-full space-y-4">
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#056379]"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#056379]"
          />
          <textarea
            rows={4}
            placeholder="Tu mensaje"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#056379]"
          />
          <button
            type="submit"
            className="bg-[#056379] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#045264] transition duration-300 w-full"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
