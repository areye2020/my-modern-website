// src/pages/Home/Home.jsx
import React from 'react';
import styles from './Home.module.css';
import Card from '../../components/Card/Card';

const connectLinks = [
  { name: 'LinkedIn', icon: 'LI' },
  { name: 'GitHub', icon: 'GH' },
  { name: 'Email', icon: 'EM' },
];

const technologies = ['React', 'JavaScript', 'Node.js', 'Vite', 'CSS Modules'];

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Main Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>Hello, I'm...</h1>
          <p className={styles.subtitle}>Modern Web Developer | Problem Solver</p>
        </div>
        
        {/* RESOLVED: Replaced <img> with a styled gray container */}
        <div className={styles.heroImageContainer}>
          <div className={styles.imagePlaceholder} title="Profile Picture Placeholder">
            <span>Profile Photo</span>
          </div>
        </div>
      </section>

      {/* Connect With Me Section */}
      <section className={styles.connectSection}>
        <h2>Connect with me:</h2>
        <div className={styles.cardGrid}>
          {connectLinks.map((link) => (
            <Card key={link.name} className={styles.connectCard}>
              <div className={styles.icon}>{link.icon}</div>
              <p>{link.name}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className={styles.techSection}>
        <h2>Technologies I work with:</h2>
        <div className={styles.cardGrid}>
          {technologies.map((tech) => (
            <Card key={tech} className={styles.techCard}>
              {tech}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;