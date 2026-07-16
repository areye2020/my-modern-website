// src/pages/Contact/Contact.jsx
import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.pageTitle}>Get In Touch</h1>
      <p className={styles.pageSubtitle}>Feel free to reach out via the form or my social links.</p>

      <div className={styles.contactContent}>
        {/* Replicate original site structure: Form on left, info/links on right */}
        <section className={styles.formSection}>
          <h2>Send a Message</h2>
          {/* Replicating typical HTML form data flow */}
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="Your Name" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="Your Email" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        </section>

        <aside className={styles.infoSection}>
          <h2>Social Links</h2>
          <div className={styles.socialGrid}>
            {/* Same structure as original, could use Card component here optionally */}
            <div className={styles.socialLink}>LinkedIn</div>
            <div className={styles.socialLink}>GitHub</div>
            <div className={styles.socialLink}>Email</div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Contact;