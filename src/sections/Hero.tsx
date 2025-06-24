import React from 'react';
import { Code2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-8 animate-bounce-slow">
          <Code2 className="w-20 h-20 text-blue-400" />
        </div>
        <div className="overflow-hidden">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Mohsin Khan
            </span>
          </h1>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-6 animate-grow-width"></div>
          <p className="text-2xl md:text-3xl text-blue-400 font-light mb-8 animate-fade-in-delayed">
            Flutter & Full Stack Developer
          </p>
        </div>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-delayed-more">
          Building beautiful, responsive, and user-friendly mobile and web applications with modern technologies.
        </p>
        <div className="flex gap-6 justify-center animate-fade-in-delayed-more">
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 bg-transparent border-2 border-blue-400 hover:bg-blue-400/10 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;