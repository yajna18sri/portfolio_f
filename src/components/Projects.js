import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaGlobe, FaBrain, FaLeaf } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ml', label: 'Machine Learning' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Developed a responsive and informative website for SVN College, showcasing academic programs, faculty, campus facilities, and admission details.',
      image: '/images/1.jpg',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/yajna18sri/College_Website',
      live: 'https://yajna18sri.github.io/College_Website/',
      featured: true
    },
    {
      id: 2,
      title: 'Full Stack Project',
      description: 'A full-stack To-Do app built with React, Node.js, Express, and MongoDB. Supports creating, updating, viewing, and deleting tasks using RESTful APIs. Axios handles frontend-backend communication. Demonstrates core CRUD operations and full-stack integration.',
      image: '/images/2.avif',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Axios'],
      github: 'https://github.com/yajna18sri/To-do_App_frontend',
      live: null,
      featured: true
    },
    {
      id: 3,
      title: 'Resume Screening App (ML Project)',
      description: 'An AI-powered tool that automates resume screening and categorization. Extracts text from PDF, Word, and plain text resumes, cleans the data, and applies machine learning algorithms to classify candidates based on skills, experience, and job suitability.',
      image: '/images/3a.png',
      category: 'ml',
      technologies: ['Python', 'Machine Learning', 'NLP', 'PDF Processing'],
      github: 'https://github.com/yajna18sri/ResumeScreeningApp',
      live: null,
      featured: true
    },
    {
      id: 4,
      title: 'Personal Portfolio',
      description: 'Designed and developed a professional personal portfolio website to showcase projects, skills, and achievements, with a clean dark theme and interactive UI components.',
      image: '/images/4.jpg',
      category: 'web',
      technologies: ['React', 'CSS3', 'Framer Motion', 'Responsive Design'],
      github: 'https://github.com/yajna18sri/portfolio',
      live: null,
      featured: false
    },
    {
      id: 5,
      title: 'Crop Yield Prediction',
      description: 'Predicted crop yields using Machine Learning and Deep Learning to support agricultural planning. Analyzed soil, weather, and crop data, using Decision Tree, XGBoost, CNN, and LSTM models for prediction.',
      image: '/images/5.jpeg',
      category: 'ml',
      technologies: ['Python', 'Machine Learning', 'Deep Learning', 'XGBoost', 'CNN', 'LSTM'],
      github: 'https://github.com/yajna18sri/crop_flask',
      live: 'https://crop-flask-rk9q.onrender.com',
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'web': return FaGlobe;
      case 'fullstack': return FaCode;
      case 'ml': return FaBrain;
      default: return FaCode;
    }
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Showcasing projects that blend creativity, technology, and problem-solving — from responsive websites to full-stack apps and AI-powered tools.
          </p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                layout
              >
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-img"
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="View on GitHub"
                        >
                          <FaGithub />
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Live Demo"
                        >
                          <FaExternalLinkAlt />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  {project.featured && (
                    <div className="featured-badge">
                      Featured
                    </div>
                  )}
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-category">
                      <getCategoryIcon category={project.category} />
                    </div>
                  </div>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>Interested in working together?</p>
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Discuss Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 