// src/pages/Home/Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { 
  FiMessageSquare, FiZap, FiCode, FiCpu, FiTerminal, 
  FiLayers, FiServer, FiDatabase, FiSettings, FiGlobe, 
  FiCheckSquare, FiLayout, FiBox, FiSmartphone
} from 'react-icons/fi';
import { FaPython, FaJs, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaFigma, FaCss3Alt, FaHtml5 } from 'react-icons/fa';

import styles from './Home.module.css';
import Card from '../../components/Card/Card';

// Image Imports
import profilePic from '../../assets/NYC_MorganStanley.JPG';
import linkedinLogo from '../../assets/linkedin.png';
import githubLogo from '../../assets/github.svg';
import emailLogo from '../../assets/gmail.svg';

const connectLinks = [
  {
    name: 'LinkedIn',
    logo: linkedinLogo,
    url: 'https://www.linkedin.com/in/yourprofile/',
  },
  {
    name: 'GitHub',
    logo: githubLogo,
    url: 'https://github.com/yourusername',
  },
  {
    name: 'Email',
    logo: emailLogo,
    url: 'mailto:your.email@example.com',
  },
];

// Phase 2: Soft Skills / "How I Work" Data Definition
const workPhilosophy = [
  {
    id: 'communication',
    title: 'Communication & Collaboration',
    icon: <FiMessageSquare className={styles.skillIcon} />,
    description:
      'I thrive in cross-functional teams, prioritizing clear technical communication, active listening, and seamless cross-team alignment.',
  },
  {
    id: 'learning',
    title: 'Non-stop Learning & Innovation',
    icon: <FiZap className={styles.skillIcon} />,
    description:
      'Driven by curiosity, I constantly explore modern frameworks and emerging tech to craft innovative, future-proof software.',
  },
  {
    id: 'cleancode',
    title: 'Clean Code & Architecture',
    icon: <FiCode className={styles.skillIcon} />,
    description:
      'I emphasize modular, self-documenting code with strong testing standards to make maintainability and scalability effortless.',
  },
  {
    id: 'performance',
    title: 'Performance & Scalability',
    icon: <FiCpu className={styles.skillIcon} />,
    description:
      'From database query optimization to responsive UI rendering, I design web systems built to handle scale smoothly.',
  },
];

// Phase 3: Skills & Tech Segmented Control Data
const skillTabs = [
  { id: 'programming', label: 'Programming Languages' },
  { id: 'frontend', label: 'Frontend Development' },
  { id: 'backend', label: 'Backend Development' },
  { id: 'tools', label: 'Tools & Practices' },
];

const skillsData = [
  // Programming Languages
  { id: 'js', name: 'JavaScript', category: 'programming', icon: <FaJs /> },
  { id: 'py', name: 'Python', category: 'programming', icon: <FaPython /> },
  { id: 'cpp', name: 'C++', category: 'programming', icon: <FiTerminal /> },
  
  // Frontend
  { id: 'react', name: 'React', category: 'frontend', icon: <FaReact /> },
  { id: 'html', name: 'HTML5', category: 'frontend', icon: <FaHtml5 /> },
  { id: 'css', name: 'CSS3', category: 'frontend', icon: <FaCss3Alt /> },
  
  // Backend
  { id: 'node', name: 'Node.js', category: 'backend', icon: <FaNodeJs /> },
  { id: 'express', name: 'Express.js', category: 'backend', icon: <FiServer /> },
  { id: 'sql', name: 'PostgreSQL', category: 'backend', icon: <FiDatabase /> },
  
  // Tools
  { id: 'git', name: 'Git & GitHub', category: 'tools', icon: <FaGitAlt /> },
  { id: 'docker', name: 'Docker', category: 'tools', icon: <FaDocker /> },
  { id: 'figma', name: 'Figma', category: 'tools', icon: <FaFigma /> },
];

const Home = () => {
  const canvasRef = useRef(null);
  const [activeTab, setActiveTab] = useState('programming');

  // Lightweight Interactive Particle Network (Nodes & Sticks)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      radius: Math.random() * 2 + 1.5,
    }));

    const mouse = { x: null, y: null, radius: 140 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.parentElement.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(224, 122, 95, 0.5)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(224, 122, 95, ${0.25 * (1 - dist / 110)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        if (mouse.x !== null && mouse.y !== null) {
          const mDx = p.x - mouse.x;
          const mDy = p.y - mouse.y;
          const mDist = Math.sqrt(mDx * mDx + mDy * mDy);

          if (mDist < mouse.radius) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(224, 122, 95, ${0.4 * (1 - mDist / mouse.radius)})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvas.parentElement) {
        canvas.parentElement.removeEventListener('mousemove', handleMouseMove);
        canvas.parentElement.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const filteredSkills = skillsData.filter((skill) => skill.category === activeTab);

  return (
    <div className={styles.homeWrapper}>
      {/* =========================================
          1. HERO SECTION
          ========================================= */}
      <section className={styles.heroSection}>
        <canvas ref={canvasRef} className={styles.particlesCanvas} />

        <div className={styles.heroLeft}>
          <h1 className={styles.greeting}>Hi there, I'm Adriana Reyes</h1>

          <div className={styles.typingContainer}>
            <span className={styles.staticPrefix}>I am into </span>
            <TypeAnimation
              sequence={[
                'Artificial Intelligence', 2000,
                'Full Stack Development', 2000,
                'Cybersecurity', 2000,
                'iOS App Development', 2000,
                'Scalable Web Development', 2000,
                'Graphic Design', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className={styles.dynamicText}
            />
          </div>

          <div className={styles.connectContainer}>
            {connectLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={styles.connectCard}
                title={link.name}
              >
                <img src={link.logo} alt={link.name} className={styles.connectLogo} />
              </a>
            ))}
          </div>

          <a href="#about" className={styles.aboutButton}>
            About Me ↓
          </a>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.imageFrame}>
            <img src={profilePic} alt="Adriana Reyes" className={styles.profileImg} />
          </div>
        </div>
      </section>

      {/* =========================================
          2. ABOUT ME & HOW I WORK
          ========================================= */}
      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutInner}>
          <div className={styles.bioColumn}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <div className={styles.titleUnderline} />
            <p className={styles.bioText}>
              I'm a software engineer passionate about crafting user-centric, high-performance web applications and intelligent systems. Combining software engineering with modern UI/UX design, I enjoy turning complex challenges into seamless, scalable digital solutions.
            </p>
            <p className={styles.bioText}>
              When I'm not writing clean code or exploring new web technologies, you can find me experimenting with graphic design, collaborating on innovative projects, or diving deeper into artificial intelligence and security architectures.
            </p>
          </div>

          <div className={styles.workColumn}>
            <h2 className={styles.sectionTitle}>How I Work</h2>
            <div className={styles.titleUnderline} />
            <div className={styles.cardsGrid}>
              {workPhilosophy.map((skill) => (
                <Card key={skill.id} className={styles.skillCard}>
                  <div className={styles.iconWrapper}>{skill.icon}</div>
                  <h3 className={styles.skillTitle}>{skill.title}</h3>
                  <p className={styles.skillDescription}>{skill.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. SKILLS & TECHNOLOGIES
          ========================================= */}
      <section className={styles.skillsSection}>
        <div className={styles.skillsContainer}>
          <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
          <div className={styles.titleUnderline} />

          {/* Segmented Control Tabs */}
          <div className={styles.segmentedControl}>
            {skillTabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tabButton} ${activeTab === tab.id ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Animated Skills Grid */}
          <div className={styles.skillsGrid} key={activeTab}>
            {filteredSkills.map((skill) => (
              <Card key={skill.id} className={styles.skillTile}>
                <div className={styles.skillTileIcon}>{skill.icon}</div>
                <h4 className={styles.skillTileName}>{skill.name}</h4>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;