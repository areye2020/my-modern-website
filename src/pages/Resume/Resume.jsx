// src/pages/Resume/Resume.jsx
import React from 'react';
import styles from './Resume.module.css';
import Card from '../../components/Card/Card';

import msftLogo from '../../assets/microsoft-logo.png';
import cirrusLogo from '../../assets/cirrus-logo.png';
import utLogo from '../../assets/ut-logo.png';
import c2cLogo from '../../assets/code2college-logo.png';
import codepathLogo from '../../assets/codepath-logo.png';
import salesforceLogo from '../../assets/salesforce-logo.png';
import accLogo from '../../assets/acc-logo.png'

/* Data meticulously structured to match the original screenshots. 
  We use an array of strings for the details to easily render the bullet points.
*/

const educationData = [
  { 
    title: 'University of Texas at Austin', 
    date: '(2020 - 2024)', 
    logo: utLogo, 
    details: [
      "• Currently pursuing a degree in Computer Science in UT's rigorous and cutting-edge computer science program.",
      "• Proudly serve as a Department of Computer Science Ambassador, dedicating my time to provide tours and engage in coffee chats with prospective students, offering valuable insights into the program and fostering a sense of community.",
      "• Actively involved in the Hispanic Association of Computer Scientists (HACS), where I collaborate with fellow members to promote diversity and inclusivity in the tech field while participating in various initiatives and events."
    ]
  },
  {
    title: 'CodePath',
    date: '(2022)',
    logo: codepathLogo,
    details: [
      "• Completed the Intermediate Software Engineering python curriculum",
      "• Refresher on complex data structures, time and space complexity, sorting, recursion, and object oriented design"
    ]
  },
  {
    title: 'Code2College',
    date: '(2018 - 2020)',
    logo: c2cLogo,
    details: [
      "• Developed foundational skills in Python and web development through hands-on projects and mentorship from industry professionals.",
      "• Participated in professional development workshops, case competitions and STEM exploratory projects",
      "• Completed a full-stack web application curriculum that incorporated front-end, back-end and database technologies"
    ]
  },
  {
    title: 'Austin Community College',
    date: '(2019 - 2024)',
    logo: accLogo,
    details: [
      "• Associate of Science in Business Adminstration: August 4, 2024"
    ]
  }
];

const experienceData = [
    {
        title: 'Salesforce Associate Member of Technical Staff',
        date: '(2024 - 2025)',
        logo: salesforceLogo,
        details: [
            "• Wrote and updated Java unit tests to improve code coverage and prevent regressions when modifying older modules for the Metadata and Tooling API team", 
            "• Refactored legacy system modules to improve code readability, reduce complexity, and support core platform scalability",
            "• Gained operational exposure to emerging platform technologies, including AI Agents, Large Language Models (LLMs), and Model Context Protocols"
        ]

    },
  { 
    title: 'Texas Army National Guard', 
    date: '(2020 - 2023)', 
    logo: null,
    details: [
      "• Diligently pursued efforts to locate and neutralize cyber threats by linking historical digital footprints to cyber signatures.",
      "• Specialized in Network Analysis gaining proficiency in industry standard tools such as Nmap and Wireshark."
    ]
  },
  { 
    title: 'Salesforce SWE Intern', 
    date: '(2023)', 
    logo: salesforceLogo,
    details: [
      "• Elevated platform-wide quality while working on Quality Maturity Model enhancements",
      "• Established accountability measures by integrating a Tableau dashboard",
      "• Revamped user experience with features like data sorting and multipage navigation"
    ]
  },
  { 
    title: 'Microsoft SWE Intern', 
    date: '(2021, 2022)', 
    logo: msftLogo,
    details: [
      "• Engineered a customer-facing application allowing customization of Live Chat Widget attributes, enhancing user interaction",
      "• Successfully implemented a real-time customization preview, enabling customers to assess modifications prior to deployment",
      "• Designed and developed a Custom Web Application tailored to the Customer Service Hub in Dynamics 365"
    ]
  },
  { 
    title: 'Cirrus Logic SWE Intern', 
    date: '(2019, 2020)', 
    logo: cirrusLogo,
    details: [
      "• Streamlined repository management by developing a Python automation script to track and prune merged branches, enhancing team collaboration and codebase hygiene",
      "• Enhanced user interface functionality through custom UI/UX development with JavaFX and FXML, resulting in a more seamless and interactive user experience"
    ]
  }
];

const Resume = () => {
  return (
    <div className={styles.resumeContainer}>
      {/* Top Header Section matching original typography styling */}
      <div className={styles.headerSection}>
        <span className={styles.subheading}>EXPERIENCE</span>
        <h1 className={styles.mainHeading}>My Resume</h1>
      </div>

      {/* Two Column Layout for Education and Experience */}
      <div className={styles.twoColumnGrid}>
        
        {/* COLUMN 1: Education */}
        <div className={styles.column}>
          <div className={styles.columnHeader}>
            <span className={styles.columnDates}>2018-2026</span>
            <h2 className={styles.columnTitle}>Education</h2>
          </div>
          
          <div className={styles.timeline}>
            {educationData.map((edu, index) => (
              <div key={index} className={styles.timelineItem}>
                {/* Reusable Card handles the white box and pink hover */}
                <Card className={styles.resumeCard}>
                  <div className={styles.cardHeader}>
                    <div>
                      <h3 className={styles.cardTitle}>{edu.title}</h3>
                      <p className={styles.cardDate}>{edu.date}</p>
                    </div>
                    {/* FIXED: Swapped 'item' for 'edu' */}
                    {edu.logo ? (
                    <img src={edu.logo} alt={`${edu.title} logo`} className={styles.cardLogo} />
                    ) : (
                    <div className={styles.logoPlaceholder}>
                        <span>Logo</span>
                    </div>
                    )}
                  </div>
                  
                  <div className={styles.cardDetails}>
                    {edu.details.map((point, idx) => (
                      <p key={idx}>{point}</p>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMN 2: Job Experience */}
        <div className={styles.column}>
          <div className={styles.columnHeader}>
            <span className={styles.columnDates}>2019-2023</span>
            <h2 className={styles.columnTitle}>Job Experience</h2>
          </div>
          
          <div className={styles.timeline}>
            {experienceData.map((exp, index) => (
              <div key={index} className={styles.timelineItem}>
                <Card className={styles.resumeCard}>
                  <div className={styles.cardHeader}>
                    <div>
                      <h3 className={styles.cardTitle}>{exp.title}</h3>
                      <p className={styles.cardDate}>{exp.date}</p>
                    </div>
                    {/* FIXED: Swapped 'item' for 'exp' */}
                    {exp.logo ? (
                    <img src={exp.logo} alt={`${exp.title} logo`} className={styles.cardLogo} />
                    ) : (
                    <div className={styles.logoPlaceholder}>
                        <span>Logo</span>
                    </div>
                    )}
                  </div>
                  
                  <div className={styles.cardDetails}>
                    {exp.details.map((point, idx) => (
                      <p key={idx}>{point}</p>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Resume;