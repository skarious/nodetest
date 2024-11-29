import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from './Navbar';
import Footer from './Footer';

const Terms = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />
      <div className="flex-grow py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-gray-800 rounded-lg p-8"
          >
            <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Términos y Condiciones
            </h1>
            <p className="text-gray-400 mb-4 text-sm">Última actualización: 12/11/2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">1. Introducción</h2>
              <p className="text-gray-300 mb-4">
                Bienvenido a RSH Technologies. Al acceder y utilizar nuestro sitio web rshtech.com.py (en adelante, el "Sitio"), usted acepta cumplir y estar sujeto a los siguientes Términos y Condiciones (en adelante, los "Términos"). Si no está de acuerdo con alguno de estos Términos, le recomendamos que no utilice nuestro Sitio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">2. Definiciones</h2>
              <ul className="list-disc list-inside text-gray-300 mb-4 ml-4">
                <li><span className="text-purple-400">Empresa:</span> RSH Technologies.</li>
                <li><span className="text-purple-400">Usuario:</span> Cualquier persona que accede y utiliza el Sitio.</li>
                <li><span className="text-purple-400">Servicios:</span> Compra y venta de equipos informáticos, servicios de mantenimiento de PCs, automatizaciones y chatbots ofrecidos por la Empresa.</li>
                <li><span className="text-purple-400">Productos:</span> Equipos informáticos y otros bienes ofrecidos para la venta en el Sitio.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">3. Uso del Sitio</h2>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">a. Elegibilidad</h3>
              <p className="text-gray-300 mb-4">
                El uso del Sitio está destinado a mayores de 18 años. Al utilizar el Sitio, usted declara que tiene al menos 18 años de edad y que tiene la capacidad legal para aceptar estos Términos.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-purple-400">b. Cuenta de Usuario</h3>
              <p className="text-gray-300 mb-4">
                Para acceder a ciertas funcionalidades del Sitio, puede ser necesario crear una cuenta de usuario. Usted es responsable de mantener la confidencialidad de su información de acceso y de todas las actividades que ocurran bajo su cuenta.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">4. Productos y Servicios</h2>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">a. Descripción de Productos y Servicios</h3>
              <p className="text-gray-300 mb-4">
                La Empresa ofrece una variedad de productos y servicios relacionados con equipos informáticos, mantenimiento de PCs, automatizaciones y chatbots. Nos esforzamos por describir los productos y servicios con la mayor precisión posible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">14. Contacto</h2>
              <p className="text-gray-300 mb-4">
                Si tiene alguna pregunta, inquietud o desea reportar un problema relacionado con estos Términos, puede contactarnos a través de:
              </p>
              <ul className="text-gray-300">
                <li><strong className="text-purple-400">Correo Electrónico:</strong> ronalds@rshtech.com.py</li>
                <li><strong className="text-purple-400">Dirección Física:</strong> Edelira km20, Itapua, Paraguay</li>
                <li><strong className="text-purple-400">Teléfono:</strong> +595985624358</li>
              </ul>
            </section>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
