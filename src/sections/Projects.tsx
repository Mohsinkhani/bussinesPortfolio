import React, { useState, useRef } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { projectsData } from '../data/projects';
import ScreenshotGallery from '../components/ScreenshotGallery';

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  const nextProject = () => {
    setActiveIndex((current) => (current === projectsData.length - 1 ? 0 : current + 1));
  };
  
  const prevProject = () => {
    setActiveIndex((current) => (current === 0 ? projectsData.length - 1 : current - 1));
  };

  const handleViewApp = (project: typeof projectsData[0]) => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    } else {
      setIsGalleryOpen(true);
    }
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Mobile Applications</h2>
          <div className="h-1 w-20 bg-accent-500 mx-auto mb-8 animate-grow-width"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed animate-fade-in">
            Here are some of the mobile applications I've developed using Flutter.
            Each project demonstrates different skills and technologies.
          </p>
        </div>
        
        {/* Featured Project Showcase */}
        <div className="relative max-w-6xl mx-auto mb-20">
          <div className={`transition-all duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
              <div className="md:flex items-stretch">
                <div className="md:w-1/2 p-2 bg-gray-100 dark:bg-gray-800">
                  <div className="relative pt-[177.78%] bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden group">
                    <img 
                      src={projectsData[activeIndex].image} 
                      alt={projectsData[activeIndex].title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
                    {projectsData[activeIndex].title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 flex-grow animate-fade-in-delayed">
                    {projectsData[activeIndex].description}
                  </p>
                  
                  <div className="mb-8 animate-fade-in-delayed">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {projectsData[activeIndex].technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-sm rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4 animate-fade-in-delayed-more">
                    <a 
                      href={projectsData[activeIndex].githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105"
                    >
                      <Github size={20} className="mr-2" />
                      View Code
                    </a>
                    <button 
                      onClick={() => handleViewApp(projectsData[activeIndex])}
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-primary-600 dark:bg-primary-700 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      {projectsData[activeIndex].liveUrl ? 'View App' : 'View Screenshots'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Controls */}
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prevProject}
                className="p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                aria-label="Previous project"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex items-center gap-2">
                {projectsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'bg-primary-600 dark:bg-primary-500 scale-125' 
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-400 dark:hover:bg-primary-700'
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextProject}
                className="p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                aria-label="Next project"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={project.title}
              className={`bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden transition-all duration-700 transform hover:scale-[1.02] hover:shadow-2xl ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative pt-[56.25%] bg-gray-200 dark:bg-gray-700 group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-sm rounded-full transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                  <button 
                    onClick={() => handleViewApp(project)}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary-600 dark:bg-primary-700 text-white text-sm rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    {project.liveUrl ? 'View App' : 'View Screenshots'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ScreenshotGallery 
        screenshots={projectsData[activeIndex].screenshots}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </section>
  );
};

export default Projects;