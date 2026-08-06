// src/pages/Home/Home.jsx
import React, { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FiMessageSquare, FiZap, FiCode, FiCpu } from 'react-icons/fi';

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
      'I engineer responsive UI/UX and optimized backend pipelines designed to scale efficiently under heavy user loads.',
  },
];

const Home = () => {
  const canvasRef = useRef(null);

  // Lightweight Interactive Particle Network (Nodes & Sticks)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse coordinates tracking
    const mouse = { x: null, y: null, radius: 120 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const parent = canvas.parentElement;
    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);

    // Initialize particles
    const particleCount = Math.floor((canvas.width * canvas.height) / 12000);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 1.5,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(224, 122, 95, 0.45)';
        ctx.fill();

        // Connect particles close to each other
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(224, 122, 95, ${0.25 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect particles near the mouse cursor
        if (mouse.x !== null && mouse.y !== null) {
          const mDx = p.x - mouse.x;
          const mDy = p.y - mouse.y;
          const mDist = Math.sqrt(mDx * mDx + mDy * mDy);

          if (mDist < mouse.radius) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(224, 122, 95, ${0.4 * (1 - mDist / mouse.radius)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={styles.homeWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <canvas ref={canvasRef} className={styles.particlesCanvas} />

        {/* Left Column: Greeting & Typing Animation */}
        <div className={styles.heroLeft}>
          <h1 className={styles.greeting}>Hi there, I'm Adriana Reyes</h1>

          <div className={styles.typingContainer}>
            <span className={styles.staticPrefix}>I am into </span>
            <TypeAnimation
              sequence={[
                'Artificial Intelligence',
                2000,
                'Full Stack Development',
                2000,
                'Cybersecurity',
                2000,
                'iOS App Development',
                2000,
                'Scalable Web Development',
                2000,
                'Graphic Design',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className={styles.dynamicText}
              repeat={Infinity}
            />
          </div>

          {/* Connect Links Grid */}
          <div className={styles.connectContainer}>
            {connectLinks.map((link) => (
              <Card key={link.name} className={styles.connectCard}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.connectLink}
                  title={link.name}
                >
                  <img
                    src={link.logo}
                    alt={`${link.name} Logo`}
                    className={styles.connectIcon}
                  />
                </a>
              </Card>
            ))}
          </div>

          {/* Smooth Scroll Button */}
          <a href="#about" className={styles.scrollBtn}>
            <span>About Me</span>
            <span className={styles.arrow}>↓</span>
          </a>
        </div>

        {/* Right Column: Profile Picture with Offset Terracotta Border */}
        <div className={styles.heroRight}>
          <div className={styles.heroImageContainer}>
            <img
              src={profilePic}
              alt="Adriana Reyes in NYC"
              className={styles.profilePicture}
            />
          </div>
        </div>
      </section>

      {/* ===================================================================
         PHASE 2: ABOUT ME & HOW I WORK SECTION
         =================================================================== */}
      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutInner}>
          {/* Left Column: Bio Paragraph */}
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

          {/* Right Column: 2x2 Soft Skill Cards ("How I Work") */}
          <div className={styles.workColumn}>
            <h2 className={styles.sectionTitle}>How I Work</h2>
            <div className={styles.titleUnderline} />
            <div className={styles.cardsGrid}>
              {workPhilosophy.map((skill) => (
                <Card key={skill.id} className={styles.skillCard}>
                  <div className={styles.iconWrapper}>{skill.icon}</div>
                  <h3 className={styles.skillTitle}>{skill.title}</h3>
                  <p className={styles.skillDescription}>
                    {skill.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;