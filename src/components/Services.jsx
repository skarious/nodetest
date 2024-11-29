import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Cog6ToothIcon as CogIcon, 
  CpuChipIcon as ChipIcon, 
  ChatBubbleLeftRightIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Automatización Empresarial',
    description: 'Optimiza tus procesos de negocio con soluciones automatizadas que aumentan la eficiencia y reducen costos operativos.',
    icon: CogIcon,
    features: ['Automatización de procesos', 'Integración de sistemas', 'Flujos de trabajo personalizados']
  },
  {
    title: 'Agentes IA Avanzados',
    description: 'Implementación de agentes inteligentes que aprenden y se adaptan a las necesidades específicas de tu negocio.',
    icon: ChipIcon,
    features: ['Aprendizaje automático', 'Toma de decisiones', 'Procesamiento de datos']
  },
  {
    title: 'Chatbots Multiplataforma',
    description: 'Chatbots inteligentes para WhatsApp, Facebook e Instagram que mejoran la experiencia del cliente.',
    icon: ChatBubbleLeftRightIcon,
    features: ['WhatsApp Business', 'Facebook Messenger', 'Instagram Direct']
  },
  {
    title: 'Atención Automatizada',
    description: 'Sistemas de atención al cliente 24/7 que integran múltiples canales de comunicación.',
    icon: PhoneIcon,
    features: ['Respuesta automática', 'Enrutamiento inteligente', 'Análisis de sentimientos']
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Nuestros Servicios
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            RSH Technologies ofrece soluciones tecnológicas avanzadas para impulsar la transformación digital de tu empresa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 mb-4 mx-auto">
                <service.icon className="w-full h-full text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="text-sm text-gray-400">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-1">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
