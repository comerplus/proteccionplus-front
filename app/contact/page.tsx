export default function Contact() {
  return (
    <main className="mt-20 p-8">
      <section className="min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-8">Contacto</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Tu correo electrónico"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Tu mensaje"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
}
