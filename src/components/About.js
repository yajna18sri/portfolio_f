import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaUser, FaCode, FaLightbulb, FaGraduationCap, FaUsers, FaRocket, FaBook } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    { number: 'Fresher', label: 'Starting my journey in the tech industry with a passion for building and learning.' },
    { number: 'Quick Learner', label: 'Adapt easily to new tools, frameworks, and challenges.' },
    { number: 'Clean Code', label: 'Focused on writing simple, readable, and efficient code.' },
    { number: 'Team Collaboration', label: 'Work well in group settings and contribute actively to shared goals.' }
  ];

  const highlights = [
    {
      icon: FaGraduationCap,
      title: '4 Academic & Personal Projects',
      description: 'Developed projects that strengthened my coding and problem-solving skills.'
    },
    {
      icon: FaBook,
      title: 'Strong Academic Foundation',
      description: 'Solid grasp of core programming concepts and web development technologies.'
    },
    {
      icon: FaRocket,
      title: '100% Commitment to Growth',
      description: 'Dedicated to improving skills and delivering quality work.'
    }
  ];

  const aboutText = `I am a motivated final-year student specializing in front-end development with strong skills in HTML, CSS, JavaScript, and React.js. I enjoy creating responsive, user-friendly, and high-performance web interfaces that deliver a great user experience. Alongside web development, I have experience in solving Data Structures and Algorithms problems using Python, which strengthens my problem-solving and logical thinking abilities. I am committed to writing clean, maintainable code and thrive in collaborative, agile environments. I am eager to apply my skills and learn from real-world projects in a challenging software development role.`;

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="about-content two-col">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img 
  src="/images/profile.jpg" 
  alt="Profile Picture" 
  className="about-profile-img" 
  style={{ width: "420px", height: "auto", objectFit: "contain" }} 
/>

          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="about-paragraph about-justified">
              {aboutText}
            </p>

            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://drive.google.com/file/d/1L4sMoEeAiV4HAmLoSnvGRt70iNSWoyKC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="download-link"
              >
                <FaDownload /> Download Resume
              </a>
            </motion.button>

            <div className="about-stats-inline">
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="stat-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-highlights"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="highlight-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="highlight-icon">
                  <highlight.icon />
                </div>
                <h4>{highlight.title}</h4>
                <p>{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 