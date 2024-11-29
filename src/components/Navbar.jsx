import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink, scroller, Events } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {
      // Cuando comienza el scroll
    });

    Events.scrollEvent.register('end', (to) => {
      setActiveSection(to);
    });

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleHomeClick = () => {
    if (isHome) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
    setActiveSection('');
  };

  const scrollToSection = (section) => {
    if (!isHome) {
      window.location.href = '/#' + section;
    } else {
      scroller.scrollTo(section, {
        duration: 1200,
        delay: 0,
        smooth: true,
        easing: function(t) {
          t = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
          return t;
        },
        offset: -70
      });
    }
    setIsOpen(false);
  };

  const navItems = [
    { to: 'services', label: 'Servicios' },
    { to: 'about', label: 'Nosotros' },
    { to: 'contact', label: 'Contacto' }
  ];

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm fixed w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <RouterLink to="/" className="flex-shrink-0" onClick={handleHomeClick}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
            >
              RSH Technologies
            </motion.div>
          </RouterLink>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="ml-10 flex items-baseline space-x-4"
            >
              <RouterLink 
                to="/" 
                className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeSection === '' ? 'bg-gray-800/50' : ''
                }`}
                onClick={handleHomeClick}
              >
                Inicio
              </RouterLink>
              {isHome ? (
                <>
                  {navItems.map((item) => (
                    <ScrollLink
                      key={item.to}
                      to={item.to}
                      spy={true}
                      smooth={true}
                      duration={1000}
                      offset={-70}
                      className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-300 ${
                        activeSection === item.to ? 'bg-gray-800/50' : ''
                      }`}
                      onSetActive={() => setActiveSection(item.to)}
                    >
                      {item.label}
                    </ScrollLink>
                  ))}
                </>
              ) : (
                <>
                  {navItems.map((item) => (
                    <button
                      key={item.to}
                      onClick={() => scrollToSection(item.to)}
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-gray-800/50"
                    >
                      {item.label}
                    </button>
                  ))}
                </>
              )}
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none transition-colors duration-300"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    exit={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-sm"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <RouterLink
                to="/"
                className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  activeSection === '' ? 'bg-gray-800/50' : ''
                }`}
                onClick={handleHomeClick}
              >
                Inicio
              </RouterLink>
              {isHome ? (
                <>
                  {navItems.map((item) => (
                    <ScrollLink
                      key={item.to}
                      to={item.to}
                      spy={true}
                      smooth={true}
                      duration={1000}
                      offset={-70}
                      className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-all duration-300 ${
                        activeSection === item.to ? 'bg-gray-800/50' : ''
                      }`}
                      onClick={toggleMenu}
                      onSetActive={() => setActiveSection(item.to)}
                    >
                      {item.label}
                    </ScrollLink>
                  ))}
                </>
              ) : (
                <>
                  {navItems.map((item) => (
                    <button
                      key={item.to}
                      onClick={() => {
                        scrollToSection(item.to);
                        toggleMenu();
                      }}
                      className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer w-full text-left transition-all duration-300 hover:bg-gray-800/50"
                    >
                      {item.label}
                    </button>
                  ))}
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
