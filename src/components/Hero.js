import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import Typed from 'typed.js';
import './Hero.css';

const Hero = () => {
  const typedElementRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, {
      strings: [
        'Web Developer',
        'Front-End Developer',
        'Python Passionate',
        'Enthusiast'
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => {
      typed.destroy();
      
    };
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/jagarapu-yajnasri-b35b95290/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/yajna18sri', label: 'GitHub' },
    { icon: FaEnvelope, href: 'mailto:jagarapuyajnasri@gmail.com', label: 'Email' }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="hero-greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hello, It's Me
            </motion.p>
            
            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Jagarapu Yajnasri
            </motion.h1>
            
            <motion.h2
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              And I'm a <span className="text" ref={typedElementRef}></span>
            </motion.h2>
            
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Computer Science student with a strong foundation in programming and keen interest in software development. Proficient in C, Python, and Java concepts, with expertise in machine learning and web development. Experienced in building predictive models and enhancing efficiency. Seeking opportunities to apply technical skills and contribute to innovative projects.
            </motion.p>

            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Building with passion !!
            </motion.p>
            
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </motion.button>
              
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="profile-image">
              <img 
  src="/images/profile.jpg" 
  alt="Profile" 
  className="profile-img" 
  style={{
    width: "520px",          // rectangle width
    height: "420px",         // rectangle height
    objectFit: "cover",      // ensures good fit
    borderRadius: "82px",    // smooth rectangle corners
    display: "block",

    padding: "10px",         // ✅ padding around image
    backgroundColor: "#f0f0f0", // background to make padding visible
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)" // soft shadow for better look
  }} 
/>




            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="hero-social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label === 'Email' ? '_self' : '_blank'}
                rel={social.label === 'Email' ? '' : 'noopener noreferrer'}
                className="social-link"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        <motion.button
          className="scroll-down"
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          whileHover={{ y: 5 }}
        >
          <FaArrowDown />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero; 