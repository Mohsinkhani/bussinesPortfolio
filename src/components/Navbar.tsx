import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Instagram } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

type NavbarProps = {
  scrollY: number;
};

const Navbar: React.FC<NavbarProps> = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isScrolled = scrollY > 50;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Websites', href: '#websites' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a 
            href="#" 
            className="flex items-center space-x-2"
          >
            <img 
              src="/logo.png" 
              alt="MK Portfolio" 
              className="w-12 h-12 object-contain"
            />
            <span className={`text-2xl font-bold transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-900 dark:text-white' 
                : 'text-white'
            }`}>
              Mohsin<span className="text-blue-500">Khan</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link text-sm font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center space-x-4 pl-4 border-l border-gray-200 dark:border-gray-700">
              <a 
                href="https://github.com/Mohsinkhani" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  isScrolled 
                    ? 'hover:bg-gray-100 dark:hover:bg-gray-800' 
                    : 'hover:bg-white/10'
                }`}
              >
                <Github size={20} className={isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'} />
              </a>
              <a 
                href="https://www.linkedin.com/in/mohsinflutter/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  isScrolled 
                    ? 'hover:bg-gray-100 dark:hover:bg-gray-800' 
                    : 'hover:bg-white/10'
                }`}
              >
                <Linkedin size={20} className={isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'} />
              </a>
              <a 
                href="https://www.instagram.com/mohsinkhan9161/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  isScrolled 
                    ? 'hover:bg-gray-100 dark:hover:bg-gray-800' 
                    : 'hover:bg-white/10'
                }`}
              >
                <Instagram size={20} className={isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'} />
              </a>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${
                  isScrolled 
                    ? 'hover:bg-gray-100 dark:hover:bg-gray-800' 
                    : 'hover:bg-white/10'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun size={20} className={isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'} />
                ) : (
                  <Moon size={20} className={isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'} />
                )}
              </button>
            </div>
          </nav>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full mr-2 ${
                isScrolled 
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full ${
                isScrolled 
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-down">
            <nav className="py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-4 py-4 border-t border-gray-200 dark:border-gray-700 mt-4">
                <a 
                  href="https://github.com/Mohsinkhani" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mohsinflutter/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/mohsinkhan9161/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;