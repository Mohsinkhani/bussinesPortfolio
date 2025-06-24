import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

type SkillCategory = {
  name: string;
  skills: string[];
};

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const skillCategories: SkillCategory[] = [
    {
      name: 'Mobile Development',
      skills: [
        'Flutter',
        'Dart',
        'Firebase',
        'UI/UX Design',
        'State Management (Provider, BLoC, GetX)',
      ]
    },
    {
      name: 'Frontend',
      skills: [
        'React',
        'TypeScript',
        'JavaScript',
        'HTML/CSS',
        'Tailwind CSS',
      ]
    },
    {
      name: 'Backend',
      skills: [
        'Node.js',
        'Express',
        'MongoDB',
        'RESTful APIs',
        'GraphQL',
      ]
    },
    {
      name: 'DevOps & Tools',
      skills: [
        'Git',
        'CI/CD',
        'Docker',
        'AWS',
        'Agile/Scrum',
      ]
    },
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-accent-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I've developed expertise across various technologies throughout my journey as a developer.
            Here's an overview of my technical toolkit:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.name}
              className={`transition-all duration-700 transform delay-${catIndex * 100} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center hover:bg-primary-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;