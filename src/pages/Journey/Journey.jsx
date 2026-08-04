import React from 'react';
import styles from './Journey.module.css';
import Card from '../../components/Card/Card';

// Add your actual image imports here later just like the Resume page!
// import militaryImg1 from '../../assets/military1.jpg';

const journeyData = [
  {
    id: 1,
    title: 'Code2College',
    description: 'Code2College played a pivotal role in shaping my journey towards a career in technology. Their program included professional development, mentorship, and high school internship placement. This hands-on experience, coupled with completing a comprehensive full-stack web app curriculum encompassing front-end, back-end, and database technologies, not only enriched my technical skills but also fueled my passion for a future in the tech industry.',
    img1: null, 
    caption1: 'Basic Combat Training',
    img2: null,
    caption2: 'AIT Graduation'
  },
  {
    id: 2,
    title: 'Microsoft',
    description: 'During my internships at Microsoft, I had the privilege of contributing to significant projects in web application development and exploring B2B software as a service (SaaS) through Dynamics 365. A highlight was creating a customer-facing app for Live Chat Widget customization, complete with real-time previews. These internships provided hands-on experience, honed project management skills, and equipped me with a holistic understanding of the development lifecycle.',
    img1: null,
    caption1: 'Microsoft Campus',
    img2: null,
    caption2: 'Intern Team Event'
  },
  {
    id: 3,
    title: 'Salesforce',
    description: 'At Salesforce, I focused heavily on full-stack web solutions and data integration. Building scalable tools and seeing them impact platform-wide quality metrics was a major stepping stone in my engineering career.',
    img1: null,
    caption1: 'Salesforce Tower',
    img2: null,
    caption2: 'Project Presentation'
  },
  {
    id: 4,
    title: 'University of Texas at Austin',
    description: 'Pursuing my degree in Computer Science at UT Austin has been rigorous and deeply rewarding. Between engaging with the Hispanic Association of Computer Scientists and representing the department as an ambassador, I have found a true community.',
    img1: null,
    caption1: 'UT Tower',
    img2: null,
    caption2: 'HACS Event'
  },
  {
    id: 4,
    title: 'Texas Army National Guard',
    description: 'My journey began with the Texas Army National Guard. This experience instilled in me a deep sense of discipline, teamwork, and leadership. I learned to adapt to high-pressure situations and work cohesively with a diverse group of individuals to achieve a common goal.',
    img1: null, 
    caption1: 'Basic Combat Training',
    img2: null,
    caption2: 'AIT Graduation'
  },
];

const Journey = () => {
  return (
    <div className={styles.journeyContainer}>
      
      {/* Header Section */}
      <div className={styles.headerSection}>
        <span className={styles.subheading}>MY STORY</span>
        <h1 className={styles.mainHeading}>Journey</h1>
      </div>

      {/* Journey Timeline Container */}
      <div className={styles.timelineContainer}>
        {journeyData.map((item, index) => (
          /* The magic trick: if the index is odd, apply 'rowReverse' class 
            to swap the left/right order of the Flexbox!
          */
          <div 
            key={item.id} 
            className={`${styles.journeyRow} ${index % 2 !== 0 ? styles.rowReverse : ''}`}
          >
            
            {/* HALF 1: Text Card (Reusing your Card component for the hover effect!) */}
            <div className={styles.textHalf}>
              <Card className={styles.journeyTextCard}>
                <h2 className={styles.cardTitle}>{item.title}</h2>
                <p className={styles.cardDescription}>{item.description}</p>
              </Card>
            </div>

            {/* HALF 2: Images Card */}
            <div className={styles.imageHalf}>
              
              {/* Image 1 */}
              <div className={styles.imageWrapper}>
                {item.img1 ? (
                  <img src={item.img1} alt={item.caption1} className={styles.journeyImg} />
                ) : (
                  /* --- ADD / VERIFY THIS LINE --- */
                  <div className={styles.imgPlaceholder}>Image</div>
                )}
                <p className={styles.imgCaption}>{item.caption1}</p>
              </div>

              {/* Image 2 */}
              <div className={styles.imageWrapper}>
                {item.img2 ? (
                  <img src={item.img2} alt={item.caption2} className={styles.journeyImg} />
                ) : (
                  /* --- ADD / VERIFY THIS LINE --- */
                  <div className={styles.imgPlaceholder}>Image</div>
                )}
                <p className={styles.imgCaption}>{item.caption2}</p>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Journey;