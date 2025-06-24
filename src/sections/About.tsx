import React, { useEffect, useRef } from 'react';
import { Code, Layers, Globe, Database } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-accent-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm Mohsin Khan, a passionate Flutter developer with extensive experience in React JS and full stack development. With a keen eye for design and a commitment to writing clean, efficient code, I create beautiful, functional applications that solve real-world problems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center transition-all duration-700 transform delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                <Layers size={32} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Mobile Development</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Specialized in creating seamless, performant mobile applications using Flutter for cross-platform compatibility.
            </p>
          </div>
          
          <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center transition-all duration-700 transform delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                <Code size={32} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Frontend Development</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Crafting responsive and interactive web experiences with React and modern frontend technologies.
            </p>
          </div>
          
          <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center transition-all duration-700 transform delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                <Database size={32} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Backend Development</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Building robust server-side architectures and APIs to power applications with efficiency and security.
            </p>
          </div>
          
          <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center transition-all duration-700 transform delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                <Globe size={32} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Full Stack Solutions</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Developing end-to-end applications that integrate frontend and backend technologies for seamless user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;