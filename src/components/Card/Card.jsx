// src/components/Card/Card.jsx
import React from 'react';
import styles from './Card.module.css';

/*
  Reusable Card component that applies the requested modern styling.
  It takes 'children' (the content inside the card) as a prop.
  It also accepts a 'className' prop so pages can add specific layout styles.
*/
const Card = ({ children, className }) => {
  return (
    <div className={`${styles.card} ${className || ''}`}>
      {children}
    </div>
  );
};

export default Card;