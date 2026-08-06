// src/components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* Column 1: Brand & Message */}
        <div className={styles.footerBrand}>
          <h3 className={styles.footerName}>Adriana Reyes</h3>
          <p className={styles.footerMessage}>
            Building scalable, beautiful, and interactive digital experiences. 
            Let's create something amazing together.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className={styles.footerLinks}>
          <h4 className={styles.footerHeading}>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/journey">Journey</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Connect & Info */}
        <div className={styles.footerConnect}>
          <h4 className={styles.footerHeading}>Connect</h4>
          <p>Ready to start a project? Reach out!</p>
          <div className={styles.socialIcons}>
            <a href="https://github.com/areye2020" target="_blank" rel="noreferrer"><FiGithub /></a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer"><FiLinkedin /></a>
            <a href="mailto:your.email@example.com"><FiMail /></a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Adriana Monica Reyes.</p>
      </div>
    </footer>
  );
};

export default Footer;