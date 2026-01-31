import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, BarChart3 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Internship', path: '#internship' }, // Smooth scroll target
    { name: 'Contact', path: '/contact' },
  ];

  // Smooth scroll handler
const handleNavClick = (e, path) => {
  // Only handle hash links here; let normal routes be handled by <Link>
  if (typeof path === 'string' && path.startsWith('#')) {
    // preventDefault only if an event was passed
    if (e && typeof e.preventDefault === 'function') e.preventDefault();

    // If already on Home page -> smooth scroll to section
    if (location && location.pathname === '/') {
      const target = document.querySelector(path);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If not on Home, navigate to Home with hash so the browser lands on the section
      // (This triggers a full navigation which is fine for most setups.)
      window.location.href = `/${path}`;
    }

    // close mobile menu if open
    setIsMenuOpen(false);
  }
};


  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BarChart3 className="h-8 w-8 text-gold" />
            <span className="text-white-smoke font-semibold text-xl">Hariharan M V</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path.startsWith('#') ? '/' : item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-gold'
                    : 'text-gray hover:text-white-smoke'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white-smoke"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-navy border-t border-gray/20"
          >
            <nav className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path.startsWith('#') ? '/' : item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`block px-3 py-2 transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-gold'
                      : 'text-gray hover:text-white-smoke'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
