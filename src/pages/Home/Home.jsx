// src/pages/Home/Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { 
  FiMessageSquare, FiZap, FiCode, FiCpu, FiServer, 
  FiDatabase, FiSmartphone, FiPenTool, FiCloud, FiMonitor 
} from 'react-icons/fi';
import { FaPython, FaJs, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaFigma, FaCss3Alt, FaHtml5 } from 'react-icons/fa';

import styles from './Home.module.css';
import Card from '../../components/Card/Card';

// Image Imports
import profilePic from '../../assets/NYC_MorganStanley.JPG';
import linkedinLogo from '../../assets/linkedin.png';
import githubLogo from '../../assets/github.svg';
import emailLogo from '../../assets/gmail.svg';

// 1. Social Connect Links Data
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

// 2. Soft Skills / "How I Work" Data Definition
const workPhilosophy = [
  {
    id: 'communication',
    title: 'Communication & Collaboration',
    description: 'Clear and proactive communicator who thrives in agile, cross-functional engineering teams.',
    icon: <FiMessageSquare />,
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    description: 'Analytical thinker focused on breaking down complex problems into scalable software solutions.',
    icon: <FiZap />,
  },
  {
    id: 'clean-code',
    title: 'Clean & Scalable Code',
    description: 'Dedicated to writing readable, maintainable, and well-tested code following best practices.',
    icon: <FiCode />,
  },
  {
    id: 'continuous-learning',
    title: 'Adaptability & Growth',
    description: 'Eager to adopt new technologies, framework paradigms, and modern industry toolings.',
    icon: <FiCpu />,
  },
];

// 3. Technical Skills Data (Segmented Control)
const skillTabs = [
  { id: 'programming', label: 'Programming Languages' },
  { id: 'frontend', label: 'Frontend Development' },
  { id: 'backend', label: 'Backend Development' },
  { id: 'tools', label: 'Tools & Practices' },
];

const skillsData = [
  // Programming Languages
  { id: 'python', name: 'Python', category: 'programming', icon: <FaPython /> },
  { id: 'js', name: 'JavaScript', category: 'programming', icon: <FaJs /> },
  { id: 'ts', name: 'TypeScript', category: 'programming', icon: <FiCode /> },

  // Frontend
  { id: 'react', name: 'React', category: 'frontend', icon: <FaReact /> },
  { id: 'html', name: 'HTML5', category: 'frontend', icon: <FaHtml5 /> },
  { id: 'css', name: 'CSS3', category: 'frontend', icon: <FaCss3Alt /> },

  // Backend
  { id: 'node', name: 'Node.js', category: 'backend', icon: <FaNodeJs /> },
  { id: 'database', name: 'SQL / Databases', category: 'backend', icon: <FiDatabase /> },
  { id: 'express', name: 'REST APIs', category: 'backend', icon: <FiServer /> },

  // Tools & Practices
  { id: 'docker', name: 'Docker', category: 'tools', icon: <FaDocker /> },
  { id: 'git', name: 'Git', category: 'tools', icon: <FaGitAlt /> },
  { id: 'figma', name: 'Figma', category: 'tools', icon: <FaFigma /> },
];

// 4. Services Offered Data
const servicesData = [
  {
    id: 'frontend',
    title: 'Frontend Interfaces',
    icon: <FiMonitor />,
    description: 'Building responsive, accessible, and highly interactive user interfaces that provide seamless experiences across all devices.',
    skills: ['React / Next.js', 'TypeScript', 'Motion Design', 'Tailwind']
  },
  {
    id: 'backend',
    title: 'Backend Systems',
    icon: <FiServer />,
    description: 'Architecting robust, scalable, and secure server-side applications and APIs to power complex web platforms.',
    skills: ['Node.js', 'Python', 'RESTful APIs', 'PostgreSQL']
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    icon: <FiSmartphone />,
    description: 'Developing cross-platform mobile applications that deliver native-like performance and intuitive touch interactions.',
    skills: ['React Native', 'iOS / Swift', 'UI/UX Design']
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: <FiCloud />,
    description: 'Implementing CI/CD pipelines, managing containerized deployments, and ensuring high availability on cloud infrastructure.',
    skills: ['Docker', 'AWS', 'GitHub Actions']
  },
  {
    id: 'ml',
    title: 'ML & Data Science',
    icon: <FiDatabase />,
    description: 'Leveraging data to build predictive models, automate workflows, and extract actionable insights for business growth.',
    skills: ['Python', 'Pandas', 'TensorFlow', 'Data Viz']
  },
  {
    id: 'content',
    title: 'Content & Brand',
    icon: <FiPenTool />,
    description: 'Crafting cohesive digital brand identities and designing digital assets that align with modern aesthetic standards.',
    skills: ['Figma', 'Graphic Design', 'Wireframing']
  }
];

const Home = () => {
  const canvasRef = useRef(null);
  const [activeTab, setActiveTab] = useState('programming');

  // Filter skills based on active segmented control tab
  const filteredSkills = skillsData.filter((skill) => skill.category === activeTab);

  // Interactive Canvas Nodes Effect
// src/pages/Home/Home.jsx

useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let animationFrameId;

  // Track mouse coordinates and active hover state
  const mouse = {
    x: null,
    y: null,
    radius: 150, // Interaction radius around the cursor
  };

  const handleResize = () => {
    if (canvas) {
      canvas.width = canvas.parentElement ? canvas.parentElement.offsetWidth : window.innerWidth;
      canvas.height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;
    }
  };

  const handleMouseMove = (event) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
  };

  const handleMouseLeave = () => {
    mouse.x = null;
    mouse.y = null;
  };

  handleResize();
  window.addEventListener('resize', handleResize);
  
  // Attach interactive mouse listeners to the parent section/canvas
  canvas.parentElement?.addEventListener('mousemove', handleMouseMove);
  canvas.parentElement?.addEventListener('mouseleave', handleMouseLeave);

  const particleCount = 45;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      baseX: Math.random() * canvas.width,
      baseY: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 1,
    });
  }

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];

      // Regular velocity movement
      p.x += p.vx;
      p.y += p.vy;

      // Bounce off walls
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      // Mouse Interaction: Repulsion logic
      if (mouse.x !== null && mouse.y !== null) {
        let dx = mouse.x - p.x;
        let dy = mouse.y - p.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = mouse.radius;
          const force = (maxDistance - distance) / maxDistance;
          const directionX = forceDirectionX * force * 3;
          const directionY = forceDirectionY * force * 3;

          p.x -= directionX;
          p.y -= directionY;
        }

        // Draw line connecting cursor to nearby nodes
        if (distance < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(224, 122, 95, ${0.4 * (1 - distance / mouse.radius)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Draw particle dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(224, 122, 95, 0.6)';
      ctx.fill();

      // Draw lines between adjacent nodes
      for (let j = i + 1; j < particles.length; j++) {
        let p2 = particles[j];
        let dx = p.x - p2.x;
        let dy = p.y - p2.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(224, 122, 95, ${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(draw);
  };

  draw();

  return () => {
    window.removeEventListener('resize', handleResize);
    canvas.parentElement?.removeEventListener('mousemove', handleMouseMove);
    canvas.parentElement?.removeEventListener('mouseleave', handleMouseLeave);
    cancelAnimationFrame(animationFrameId);
  };
}, []);

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
            <span className={styles.staticText}>I am into </span>
            <TypeAnimation
              sequence={[
                'Full Stack Development', 2000,
                'Cybersecurity', 2000,
                'iOS App Development', 2000,
                'Scalable Web Development', 2000,
                'Graphic Design', 2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className={styles.animatedText}
            />
          </div>

          {/* Social Connect Tile Links */}
          <div className={styles.connectGrid}>
            {connectLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.connectCardLink}
              >
                <Card className={styles.connectCard}>
                  <img src={link.logo} alt={link.name} className={styles.connectLogo} />
                </Card>
              </a>
            ))}
          </div>

          <a href="#about" className={styles.aboutBtn}>
            About Me ↓
          </a>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.imageCard}>
            <img src={profilePic} alt="Adriana Reyes in NYC" className={styles.profileImg} />
          </div>
        </div>
      </section>

      {/* =========================================
          2. ABOUT ME / HOW I WORK SECTION
          ========================================= */}
      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutLeft}>
            <h2 className={styles.sectionTitle}>How I Work</h2>
            <div className={styles.titleUnderline} />
            <p className={styles.bioText}>
              I am a passionate software developer dedicated to crafting efficient, user-centric 
              digital solutions. With a strong foundation in modern web frameworks and a focus on 
              clean architectural design, I strive to build applications that solve real-world problems 
              while delivering intuitive digital experiences.
            </p>
          </div>

          <div className={styles.aboutRight}>
            <div className={styles.philosophyGrid}>
              {workPhilosophy.map((skill) => (
                <Card key={skill.id} className={styles.philosophyCard}>
                  <div className={styles.skillIcon}>{skill.icon}</div>
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

      {/* =========================================
          4. SERVICES OFFERED
          ========================================= */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          <h2 className={styles.sectionTitle}>What I Do</h2>
          <div className={styles.titleUnderline} />

          <div className={styles.servicesGrid}>
            {servicesData.map((service) => (
              <Card key={service.id} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <div className={styles.bubbleContainer}>
                  {service.skills.map((skill, index) => (
                    <span key={index} className={styles.bubble}>
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;