'use client';

import { MdHomeRepairService, MdAir, MdLocalPharmacy } from 'react-icons/md';
import {
  FaPlane,
  FaCar,
  FaHeartbeat,
  FaTools,
  FaDog,
  FaUserMd,
  FaLaptop,
  FaPhoneAlt,
  FaBicycle,
  FaMobileAlt,
  FaSchool,
  FaConciergeBell,
  FaGavel,
  FaTree,
} from 'react-icons/fa';
import {
  GiFullMotorcycleHelmet,
  GiGasStove,
  GiPublicSpeaker,
} from 'react-icons/gi';
import { PiToothFill } from 'react-icons/pi';
import { AiFillPhone } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';

const services = [
  { name: 'Hogar Emergencia', icon: <MdHomeRepairService /> },
  { name: 'Viajes Internacionales', icon: <FaPlane /> },
  { name: 'Vehículo', icon: <FaCar /> },
  { name: 'Médica', icon: <FaHeartbeat /> },
  { name: 'Hogar Mantenimiento', icon: <FaTools /> },
  { name: 'Moto', icon: <GiFullMotorcycleHelmet /> },
  { name: 'Odontológica', icon: <PiToothFill /> },
  { name: 'Aire Acondicionado', icon: <MdAir /> },
  { name: 'Veterinaria', icon: <FaDog /> },
  { name: 'Farmacias', icon: <MdLocalPharmacy /> },
  { name: 'Consultas Médicas', icon: <FaUserMd /> },
  { name: 'Gasodomésticos', icon: <GiGasStove /> },
  { name: 'PC y Laptops', icon: <FaLaptop /> },
  { name: 'Escolta Telefónico', icon: <AiFillPhone /> },
  { name: 'Atención Telefónica', icon: <FaPhoneAlt /> },
  { name: 'Vía Pública', icon: <GiPublicSpeaker /> },
  { name: 'Bicicletas', icon: <FaBicycle /> },
  { name: 'Mobile', icon: <FaMobileAlt /> },
  { name: 'Escolares', icon: <FaSchool /> },
  { name: 'Comercio y Pyme', icon: <FaGavel /> },
  { name: 'Legal', icon: <FaGavel /> },
  { name: 'Psicológica', icon: <BiSupport /> },
  { name: 'Funeraria', icon: <FaTree /> },
  { name: 'Tercera Edad', icon: <FaUserMd /> },
  { name: 'Cloud', icon: <FaLaptop /> },
  { name: 'Tributaria', icon: <FaGavel /> },
  { name: 'Consorcios', icon: <FaGavel /> },
  { name: 'Canasta Básica', icon: <FaGavel /> },
  { name: 'Mujer', icon: <FaUserMd /> },
  { name: 'Pantalla Protegida', icon: <FaMobileAlt /> },
  { name: 'Referencias y Coordinación', icon: <BiSupport /> },
  { name: 'Viajes Nacionales', icon: <FaPlane /> },
  { name: 'Camiones', icon: <FaCar /> },
  { name: 'Video Consulta Médica', icon: <FaUserMd /> },
  { name: 'Segunda Opinión Médica', icon: <FaUserMd /> },
  { name: 'Instalaciones', icon: <MdHomeRepairService /> },
];
const borderColors = [
  'border-t-red-400',
  'border-t-blue-400',
  'border-t-green-400',
  'border-t-yellow-400',
  'border-t-purple-400',
  'border-t-pink-400',
  'border-t-teal-400',
  'border-t-orange-400',
];

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="bold-40 text-blue-900 mb-6 border-b-4 border-blue-500 inline-block">
          Nuestros Servicios
        </h2>
        <p className="regular-18 text-gray-700 max-w-3xl mx-auto mb-12">
          Descubrí todas las soluciones que tenemos para vos, en cualquier
          momento y lugar.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const borderColor = borderColors[index % borderColors.length];

            return (
              <div
                key={index}
                className={`bg-white border ${borderColor} border-t-4 rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className="bg-gray-100 text-blue-600 p-2 rounded-full shadow text-xl mb-2">
                  {service.icon}
                </div>
                <p className="text-gray-800 text-sm font-semibold">
                  {service.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
