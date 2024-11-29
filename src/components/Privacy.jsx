import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from './Navbar';
import Footer from './Footer';

const Privacy = () => {
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
              Política de Privacidad
            </h1>
            <p className="text-gray-400 mb-4 text-sm">Última actualización: 12/11/2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">1. Introducción</h2>
              <p className="text-gray-300 mb-4">
                En RSH Technologies, nos comprometemos a proteger la privacidad y la seguridad de la información personal de nuestros usuarios. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita nuestro sitio web rshtech.com.py (en adelante, el "Sitio"). Al utilizar nuestro Sitio, usted acepta las prácticas descritas en esta política.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">2. Información que Recopilamos</h2>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">a. Información Personal</h3>
              <p className="text-gray-300 mb-4">
                Recopilamos información personal que usted nos proporciona voluntariamente cuando:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 ml-4">
                <li>Se registra en nuestro Sitio.</li>
                <li>Realiza una compra o transacción.</li>
                <li>Solicita servicios de mantenimiento, automatizaciones o chatbots.</li>
                <li>Se suscribe a nuestro boletín informativo.</li>
                <li>Contacta con nosotros a través de formularios de contacto.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 text-purple-400">b. Información No Personal</h3>
              <p className="text-gray-300 mb-4">
                También recopilamos información no personal automáticamente a través de su interacción con el Sitio, como:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 ml-4">
                <li>Dirección IP</li>
                <li>Tipo de navegador</li>
                <li>Páginas visitadas</li>
                <li>Tiempo de permanencia en el Sitio</li>
                <li>Datos de cookies y tecnologías similares</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">3. Uso de la Información</h2>
              <p className="text-gray-300 mb-4">Utilizamos la información recopilada para:</p>
              <ul className="list-disc list-inside text-gray-300 mb-4 ml-4">
                <li>Proveer y gestionar los servicios que usted solicita.</li>
                <li>Procesar transacciones y gestionar pagos.</li>
                <li>Comunicarnos con usted sobre su cuenta, servicios, actualizaciones y promociones.</li>
                <li>Mejorar nuestro Sitio y personalizar su experiencia.</li>
                <li>Cumplir con obligaciones legales y regulatorias.</li>
                <li>Analizar tendencias y comportamientos para optimizar nuestros servicios.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">4. Compartir la Información</h2>
              <p className="text-gray-300 mb-4">
                No vendemos, intercambiamos ni transferimos su información personal a terceros, salvo en las siguientes circunstancias:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 ml-4">
                <li>Proveedores de Servicios: Para ayudarnos a operar el Sitio y brindar servicios.</li>
                <li>Requisitos Legales: Cuando lo requiera la ley o una orden judicial.</li>
                <li>Transferencias Empresariales: En caso de fusión, adquisición o venta de activos.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">10. Contacto</h2>
              <p className="text-gray-300 mb-4">
                Si tiene preguntas o inquietudes sobre esta Política de Privacidad, puede contactarnos a través de:
              </p>
              <ul className="text-gray-300 mb-4">
                <li><strong className="text-purple-400">Teléfono:</strong> +595985624358</li>
                <li><strong className="text-purple-400">Correo Electrónico:</strong> ronalds@rshtech.com.py</li>
                <li><strong className="text-purple-400">Dirección Física:</strong> Edelira km 20, Itapua, Paraguay</li>
                <li><strong className="text-purple-400">Sitio Web:</strong> https://rshtech.com.py</li>
              </ul>
            </section>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
