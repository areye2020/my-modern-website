// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'; // We'll create this next
import ScrollToTop from './components/ScrollToTop';
// Temporary imports for the page components we will create
import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';
import Journey from './pages/Journey/Journey';
import Contact from './pages/Contact/Contact';
import './App.css' // You can delete the default Vite App.css content

function App() {
  return (
    <>
      {/* Ensures the page always loads at the top on navigation */}
      <ScrollToTop />

      {/* The Header component is shared across all pages */}
      <Header />

      <main className="main-content">
        {/*
          Routes works like a switch statement for the URL.
          It looks at the current path and renders the first Route that matches.
        */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/contact" element={<Contact />} />
          {/* Optional: Add a 'not found' route */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </main>

      {/* You could add a shared Footer component here later */}
    </>
  )
}

export default App