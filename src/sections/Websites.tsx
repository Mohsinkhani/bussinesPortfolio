import React, { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { websitesData } from '../data/websites';

const Websites: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  return (
    <section 
      id="websites" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Web Projects</h2>
          <div className="h-1 w-20 bg-accent-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Check out some of the websites and web applications I've developed
            using React and other modern web technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websitesData.map((website, index) => (
            <div 
              key={website.title}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-700 transform delay-${index * 100} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="relative overflow-hidden group">
                <div className="relative pt-[56.25%] bg-gray-200 dark:bg-gray-700">
                  <img 
                    src={website.image} 
                    alt={website.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-end gap-2">
                      <a 
                        href={website.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 text-gray-900 rounded-full transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                        aria-label={`Visit ${website.title} website`}
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a 
                        href={website.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 text-gray-900 rounded-full transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75"
                        aria-label={`View ${website.title} code on GitHub`}
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{website.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{website.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {website.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-5">
                  <a 
                    href={website.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary-600 dark:bg-primary-700 text-white rounded hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors flex-1 justify-center"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Visit Site
                  </a>
                  <a 
                    href={website.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Websites;