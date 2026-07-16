// src/components/Header/Header.jsx
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for active styling
import styles from "./Header.module.css"; // We'll create this next

const Header = () => {
  /*
    State variable to track if the page has been scrolled down.
    Defaults to false (meaning it's at the top).
  */
  const [scrolled, setScrolled] = useState(false);

  /*
    This useEffect adds an event listener for scrolling when the component mounts.
    It checks the current scroll position.
  */
  useEffect(() => {
    const handleScroll = () => {
      // If scrolled down more than 50px, update state to true
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add the listener
    window.addEventListener("scroll", handleScroll);

    // CLEANUP: Remove the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]); // Re-run effect if 'scrolled' state changes (prevents extra triggers)

  /*
    Define a generic function to set the className for navigation links.
    'NavLink' automatically provides 'isActive' based on the URL matching.
    We apply the standard 'navLink' style and the 'active' style if active.
  */
  const setLinkClassName = ({ isActive }) =>
    `${styles.navLink} ${isActive ? styles.active : ""}`;

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      {/* Original site text style (e.g., Logo/Name) */}
      <NavLink to="/" className={styles.logo}>
        AR
      </NavLink>
      <nav className={styles.navbar}>
        {/* NavLinks handle page transitions without full reloads */}
        <NavLink to="/" className={setLinkClassName}>
          Home
        </NavLink>
        <NavLink to="/journey" className={setLinkClassName}>
          Journey
        </NavLink>
        <NavLink to="/resume" className={setLinkClassName}>
          Resume
        </NavLink>
        <NavLink to="/contact" className={setLinkClassName}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;