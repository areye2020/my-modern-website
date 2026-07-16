// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*
  This is a utility component. It has no visual element.
  It uses the `useLocation` hook from React Router.
  When the pathname (URL path) changes, the `useEffect` runs,
  scrolling the window to the absolute top (x=0, y=0).
*/
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // This effect runs only when 'pathname' changes.

  return null; // Renders nothing visibly.
};

export default ScrollToTop;