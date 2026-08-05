// src/pages/Home/Home.jsx
import React from 'react';
import styles from './Home.module.css';
import Card from '../../components/Card/Card';

// ADD PROFILE PICTURE IMPORT
import profilePic from '../../assets/NYC_MorganStanley.JPG';

// Social Logos
import linkedinLogo from '../../assets/linkedin.png';
import githubLogo from '../../assets/github.svg';
import emailLogo from '../../assets/gmail.svg';

// Tech Logos
import reactLogo from '../../assets/github.svg';
import jsLogo from '../../assets/github.svg';
import nodeLogo from '../../assets/github.svg';
import viteLogo from '../../assets/github.svg';
import cssModulesLogo from '../../assets/github.svg';


// 2. UPDATE CONNECT LINKS DATA (Rich Objects)
const connectLinks = [
  { 
    name: 'LinkedIn', 
    logo: linkedinLogo, // Pass the imported variable, not a string
    url: 'https://www.linkedin.com/in/yourprofile/' // Add your actual URL
  },
  { 
    name: 'GitHub', 
    logo: githubLogo,
    url: 'https://github.com/yourusername'
  },
  { 
    name: 'Email', 
    logo: emailLogo,
    url: 'mailto:your.email@example.com' // "mailto:" opens the user's email client
  },
];

// 3. UPDATE TECHNOLOGIES DATA (Rich Objects to include logo + name)
const technologies = [
  { name: 'React.js', logo: reactLogo },
  { name: 'JavaScript', logo: jsLogo },
  { name: 'Node.js', logo: nodeLogo },
  { name: 'Vite', logo: viteLogo },
  { name: 'CSS Modules', logo: cssModulesLogo },
  // Add other tech as needed following this pattern
];

const Home = () => {
  return (
    <div className={styles.homeContainer}>

{/* Main Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          {/* Wrapped your name in a span for orange coloring */}
          <h1 className={styles.title}>
            Hello, I'm... <span className={styles.highlightName}>Adriana Reyes</span>
          </h1>
          <p className={styles.subtitle}>Software Engineer | Problem Solver</p>
          
          {/* New Bio Paragraph */}
          <p className={styles.bio}>
            I am a passionate software engineer based in Austin, Texas. With experiances at Salesforce and Microsoft, 
            I've honed my skills in software engineering, enhancing platform quality and creating customer-centric solutions.
            During my time at Microsoft, I got introduced to the world of SaaS B2B solutions and continued to 
            develop my knowledge and interest in this area during my time at Salesforce. I love turning complex problems into 
            simple, beautiful, and intuitive interface designs. Additionally, I'm fluent in Spanish and have a strong passion for cybersecurity 
            and UI/UX design
            .with a background in 
            When I'm not coding, you can find me rock climbing or playing my guitar
          </p>
        </div>
        
        {/* Updated Profile Image Container */}
        <div className={styles.heroImageContainer}>
          <img 
            src={profilePic} 
            alt="Adriana Reyes in NYC" 
            className={styles.profilePicture} 
          />
        </div>
      </section>

      {/* Connect With Me Section */}
      <section className={styles.connectSection}>
        <h2>Connect with me:</h2>
          <div className={styles.cardGrid}> {/* <--- CHANGE THIS CLASS */}
          {connectLinks.map((link) => (
            // 4. Update rendering to use Card as a wrapper around an <a> tag
            <Card key={link.name} className={styles.connectCard}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.connectLink}>
                {/* Render the logo instead of text */}
                <img src={link.logo} alt={`${link.name} Logo`} className={styles.connectIcon} />
                <p>{link.name}</p>
              </a>
            </Card>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className={styles.techSection}>
        <h2>Technologies I work with:</h2>
        <div className={styles.cardGrid}>
          {technologies.map((tech) => (
            // 5. Update rendering to show logo ABOVE text
            <Card key={tech.name} className={styles.techCard}>
              <img src={tech.logo} alt={`${tech.name} Logo`} className={styles.techLogo} />
              <span>{tech.name}</span>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;