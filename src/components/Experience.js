import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCertificate, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      title: 'Machine Learning Intern',
      company: 'National Institute of Hydrology, IIT-Roorkee',
      period: 'May 2025 – July 2025',
      location: 'Remote',
      description: 'Developed a reservoir inflow forecasting and irrigation demand prediction module using machine learning models.',
      achievements: [
        'Applied time series analysis on hydrological data to build accurate solutions for water resource management',
        'Implemented machine learning models for reservoir inflow forecasting',
        'Developed irrigation demand prediction algorithms'
      ]
    },
    {
      id: 2,
      title: 'Web Development Intern',
      company: 'Oasis Infobyte',
      period: 'May 2024 – June 2024',
      location: 'Remote',
      description: 'Designed and developed a responsive portfolio website, improving accessibility and user experience by 40%.',
      achievements: [
        'Built responsive portfolio website using HTML, CSS, JavaScript',
        'Improved accessibility and user experience by 40%',
        'Implemented modern web design principles and best practices'
      ]
    },
    {
      id: 3,
      title: 'Machine Learning Intern',
      company: 'Vyakruti Tech',
      period: 'Oct 2024 – March 2025',
      location: 'Remote',
      description: 'Developed a student pre-assessment system using historical academic data to analyze performance trends and predict learning needs.',
      achievements: [
        'Enabled personalized learning recommendations and early intervention through data-driven insights',
        'Analyzed historical academic data to predict learning needs',
        'Built performance trend analysis system'
      ]
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'B.Tech. - Computer Science & Engineering',
      institution: 'Rayapati Venkata Rangarao & Jagarlamudi Chandramouli College of Engineering',
      period: '2022 – 2026',
      location: 'CGPA: 9.44 / 10',
      description: 'Pursuing Bachelor of Technology in Computer Science & Engineering with excellent academic performance.'
    },
    {
      id: 2,
      degree: '12th | BIEAP',
      institution: 'SASI EDUCATIONAL INSTITUTIONS',
      period: '2021',
      location: 'Visakhapatnam | Percentage: 97.10 / 100',
      description: 'Completed 12th standard with outstanding academic performance.'
    },
    {
      id: 3,
      degree: '10th Standard',
      institution: 'SASI EM HIGH SCHOOL',
      period: '2019',
      location: 'West Godavari',
      description: 'Completed 10th standard education.'
    }
  ];

  const certifications = [
    {
      id: 1,
      name: 'The Web Development Bootcamp',
      issuer: 'UDEMY',
      date: 'May 2025',
      url: 'https://www.udemy.com/certificate/UC-5f5ff7ac-2215-4136-b2d6-12c3e62ef785/',
      description: null
    },
    {
      id: 2,
      name: 'Generative AI Virtual Internship',
      issuer: 'AICTE',
      date: 'June 2025',
      url: 'https://drive.google.com/file/d/114YFMPgKB3cH_an5N4hoQJtoIIO1m9eP/view?usp=sharing',
      description: null
    },
    {
      id: 3,
      name: 'Machine Learning Foundation Certificate',
      issuer: 'Infosys SpringBoard',
      date: null,
      url: 'https://drive.google.com/file/d/1MkH7l2YDnVX_YLkhiOHP6Is7dyA9DDsF/view?usp=sharing',
      description: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey, educational background, and certifications
            that have shaped my expertise in software development.
          </p>
        </motion.div>

        <motion.div
          className="experience-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Internships */}
          <motion.div className="experience-section" variants={itemVariants}>
            <div className="section-header-inline">
              <FaBriefcase className="section-icon" />
              <h3>Internships</h3>
            </div>
            <div className="timeline">
              {workExperience.map((job, index) => (
                <motion.div
                  key={job.id}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4 className="timeline-title">{job.title}</h4>
                      <div className="timeline-meta">
                        <span className="timeline-company">{job.company}</span>
                        <div className="timeline-details">
                          <span className="timeline-period">
                            <FaCalendarAlt /> {job.period}
                          </span>
                          <span className="timeline-location">
                            <FaMapMarkerAlt /> {job.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="timeline-description">{job.description}</p>
                    <ul className="timeline-achievements">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div className="experience-section" variants={itemVariants}>
            <div className="section-header-inline">
              <FaGraduationCap className="section-icon" />
              <h3>Education</h3>
            </div>
            <div className="timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4 className="timeline-title">{edu.degree}</h4>
                      <div className="timeline-meta">
                        <span className="timeline-company">{edu.institution}</span>
                        <div className="timeline-details">
                          <span className="timeline-period">
                            <FaCalendarAlt /> {edu.period}
                          </span>
                          <span className="timeline-location">
                            <FaMapMarkerAlt /> {edu.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="timeline-description">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div className="experience-section" variants={itemVariants}>
            <div className="section-header-inline">
              <FaCertificate className="section-icon" />
              <h3>Certifications</h3>
            </div>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  className="certification-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="certification-header">
                    <h4 className="certification-name">{cert.name}</h4>
                    {cert.date && <span className="certification-date">{cert.date}</span>}
                  </div>
                  <p className="certification-issuer">{cert.issuer}</p>
                  {cert.description && (
                    <p className="certification-description">{cert.description}</p>
                  )}
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certification-link"
                    >
                      <FaExternalLinkAlt />
                      <span>View Certificate</span>
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 