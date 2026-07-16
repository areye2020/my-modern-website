// src/pages/Resume/Resume.jsx
import React from 'react';
import styles from './Resume.module.css';
import Card from '../../components/Card/Card'; // Import Card

/*
  Data structures mimic the original site's Resume data.
  This data flow is central to React development.
*/
const education = [
  { school: 'University Name', degree: 'B.S. in Computer Science', date: 'May 2022' },
  { school: 'High School Name', degree: 'H.S. Diploma', date: 'June 2018' },
];

const experience = [
  { company: 'Company One', title: 'Frontend Developer', date: 'Jan 2022 - Present', details: 'Built React apps.' },
  { company: 'Company Two', title: 'Web Intern', date: 'Summers 2021', details: 'Maintained websites.' },
];

const Resume = () => {
  return (
    <div className={styles.resumeContainer}>
      <h1 className={styles.pageTitle}>Resume</h1>

      <section className={styles.resumeSection}>
        <h2>Education</h2>
        <div className={styles.resumeGrid}>
          {education.map((edu, index) => (
            /*
              Map the data to reusable Cards.
              These will have the rounded corners, pink hover, and lift.
            */
            <Card key={index} className={styles.resumeCard}>
              <h3 className={styles.cardTitle}>{edu.degree}</h3>
              <p className={styles.cardSchool}>{edu.school}</p>
              <p className={styles.cardDate}>{edu.date}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className={styles.resumeSection}>
        <h2>Work Experience</h2>
        <div className={styles.resumeGrid}>
          {experience.map((exp, index) => (
            /* Using the same reusable Card for work experience */
            <Card key={index} className={styles.resumeCard}>
              <h3 className={styles.cardTitle}>{exp.title}</h3>
              <p className={styles.cardSchool}>{exp.company}</p>
              <p className={styles.cardDate}>{exp.date}</p>
              <p className={styles.cardDetails}>{exp.details}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;