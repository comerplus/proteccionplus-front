import AboutUs from '@/components/AboutUs';
import ClientsSuccess from '@/components/ClientsSuccess';
import ProtectionPlus from '@/components/ComerPlus';
import Services from '@/components/Service';

export default function Home() {
  return (
    <main className="mt-20">
      <section id="about" className="  p-6">
        <AboutUs />
      </section>
      <section id="proteccionplus" className="  p-6">
        <ProtectionPlus />
      </section>
      <section id="reviews" className=" p-6">
        <ClientsSuccess />
      </section>
      <section id="services" className=" p-6">
        <Services />
      </section>
    </main>
  );
}
