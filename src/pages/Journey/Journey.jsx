// src/pages/Journey/Journey.jsx
import React from 'react';
import styles from './Journey.module.css';
import Card from '../../components/Card/Card';

// Data array for journey milestones
const milestones = [
  { title: 'Project 1 Name', description: 'Description of the project/milestone', date: '2022' },
  { title: 'Major Event Name', description: 'Description of the achievement', date: '2021' },
  { title: 'Learning Milestone', description: 'Started learning React', date: '2020' },
];

const Journey = () => {
  return (
    <div className={styles.journeyContainer}>
      <h1 className={styles.pageTitle}>My Journey</h1>
      <p className={styles.pageSubtitle}>A timeline of my projects and milestones.</p>

      <section className={styles.journeyList}>
        {milestones.map((milestone, index) => (
          /* Map the data to reusable Cards. Rounded, Pink Hover, Lift. */
          <Card key={index} className={styles.journeyCard}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>{milestone.title}</h2>
              <span className={styles.cardDate}>{milestone.date}</span>
            </div>
            <p className={styles.cardDescription}>{milestone.description}</p>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Journey;