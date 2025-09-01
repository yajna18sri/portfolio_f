import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase,
  FaPython, FaJava, FaComments, FaUsers, FaLightbulb, FaCheckCircle, FaCode
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      skills: [
        { name: 'HTML', icon: FaHtml5, level: 90, color: '#E34F26' },
        { name: 'CSS', icon: FaCss3Alt, level: 65, color: '#1572B6' },
        { name: 'JavaScript', icon: FaJs, level: 60, color: '#F7DF1E' },
        { name: 'React.js', icon: FaReact, level: 60, color: '#61DAFB' },
        { name: 'Python', icon: FaPython, level: 83, color: '#3776AB' },
        { name: 'SQL', icon: FaDatabase, level: 78, color: '#336791' },
        { name: 'Java Concepts', icon: FaJava, level: 75, color: '#ED8B00' },
        { name: 'OOPs', icon: FaCode, level: 80, color: '#9F7AEA' },
        { name: 'C', icon: FaCode, level: 70, color: '#718096' }
      ]
    },
    {
      title: 'Professional Skills',
      skills: [
        { name: 'Hardwork', icon: FaCheckCircle, level: 90, color: '#48BB78' },
        { name: 'Communication', icon: FaComments, level: 65, color: '#63B3ED' },
        { name: 'Problem Solving', icon: FaLightbulb, level: 75, color: '#F6AD55' },
        { name: 'Team Work', icon: FaUsers, level: 80, color: '#ED64A6' }
      ]
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
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            A blend of strong technical abilities and professional strengths, built to deliver impactful and efficient solutions.
          </p>
        </motion.div>



        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              variants={itemVariants}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-header">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        <skill.icon />
                      </div>
                      <div className="skill-info">
                        <h4 className="skill-name">{skill.name}</h4>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="summary-card">
            <h3>Continuous Learning</h3>
            <p>
              I'm constantly expanding my skill set and staying updated with the latest technologies and best practices in web development. My commitment to learning ensures I can deliver cutting-edge solutions for any project.
            </p>
            <p className="skills-note"><em>Always learning and ready to grow as a developer.</em></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 