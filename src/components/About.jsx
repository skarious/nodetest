import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CpuChipIcon, 
  ChatBubbleBottomCenterTextIcon, 
  BoltIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const expertiseAreas = [
    {
      title: "Automatización Avanzada",
      description: "Especialistas en automatización de procesos empresariales, desde tareas simples hasta flujos de trabajo complejos, utilizando las últimas tecnologías y mejores prácticas.",
      icon: CpuChipIcon
    },
    {
      title: "Chatbots Inteligentes",
      description: "Desarrollo de chatbots conversacionales para múltiples plataformas, incluyendo WhatsApp, Facebook e Instagram, con capacidad de aprendizaje y adaptación.",
      icon: ChatBubbleBottomCenterTextIcon
    },
    {
      title: "Agentes de IA",
      description: "Creación de agentes inteligentes personalizados que pueden realizar tareas específicas, tomar decisiones y aprender de las interacciones con usuarios.",
      icon: BoltIcon
    },
    {
      title: "Integración Multicanal",
      description: "Soluciones de atención al cliente automatizada a través de WhatsApp Business API, Facebook Messenger e Instagram Direct, garantizando una experiencia consistente.",
      icon: GlobeAltIcon
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Sobre RSH Technologies
          </h2>
          
          <div className="mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-lg mb-6 text-center"
            >
              En RSH Technologies, nos especializamos en transformar la manera en que las empresas interactúan con sus clientes
              y optimizan sus operaciones a través de soluciones tecnológicas avanzadas.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="bg-gray-900 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <area.icon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-blue-400">{area.title}</h3>
                </div>
                <p className="text-gray-300">{area.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 bg-gray-900 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-400 text-center">
              Tecnologías y Plataformas
            </h3>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                WhatsApp Business API para atención automatizada
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Integración con Facebook Messenger
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Automatización de respuestas en Instagram
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Sistemas de IA conversacional avanzada
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Procesamiento de Lenguaje Natural (NLP)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Aprendizaje automático y Deep Learning
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
