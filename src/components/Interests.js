import React from 'react';
import { motion } from 'framer-motion';
import { FaPalette, FaPencilAlt, FaTableTennis, FaBrush, FaRocket, FaCode, FaUsers, FaUniversity, FaHandsHelping } from 'react-icons/fa';
import './Interests.css';

const Interests = () => {
  const interests = [
    { label: 'Painting', icon: FaPalette },
    { label: 'Drawing', icon: FaPencilAlt },
    { label: 'Badminton', icon: FaTableTennis },
    { label: 'Digital Art', icon: FaBrush },
    { label: 'Personal Development', icon: FaRocket },
    { label: 'Web Development', icon: FaCode }
  ];

  const roles = [
    { label: 'Student Member, ACM Student Chapter - RVRJCCE', icon: FaUniversity },
    { label: 'Student Member, Student Integrated Committee (2024 – 2025) - RVRJCCE', icon: FaUsers },
    { label: 'Student Volunteer, NSS (National Service Scheme)', icon: FaHandsHelping }
  ];

  return (
    <section id="interests" className="interests section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Interests & Roles</h2>
          <p className="section-subtitle">
            Exploring creative pursuits and active community involvement that complement my technical journey.
          </p>
        </motion.div>

        <div className="interests-grid">
          <motion.div
            className="interests-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="column-title">Interests</h3>
            <ul className="items-list">
              {interests.map((item) => (
                <li key={item.label} className="item">
                  <span className="item-icon"><item.icon /></span>
                  <span className="item-label">{item.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="interests-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="column-title">Roles</h3>
            <ul className="items-list">
              {roles.map((item) => (
                <li key={item.label} className="item">
                  <span className="item-icon"><item.icon /></span>
                  <span className="item-label">{item.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Interests;

