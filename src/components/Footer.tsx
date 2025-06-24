import React from 'react';
import { Github, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/logo.png" 
                alt="MK Portfolio" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-bold">
                Mohsin<span className="text-blue-500">Khan</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Flutter Developer & Full Stack Engineer creating beautiful, functional applications.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Mohsinkhani" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/mohsinflutter/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/mohsinkhan9161/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-3">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#skills" className="block text-gray-400 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#websites" className="block text-gray-400 hover:text-white transition-colors">Websites</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-500" />
                <a href="mailto:mohsinkhan03061@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  mohsinkhan03061@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-500" />
                <a href="tel:0535560431" className="text-gray-400 hover:text-white transition-colors">
                  0535560431
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-blue-500" />
                <span className="text-gray-400">Saudi Arabia</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Mohsin Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;