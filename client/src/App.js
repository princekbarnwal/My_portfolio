import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import './App.css';

/**
 * Main App Component
 * 
 * This is the root component that manages:
 * - Dark/Light mode state
 * - Loading screen state
 * - Overall layout structure
 * - Theme persistence in localStorage
 */
function App() {
  // State for dark/light mode toggle (defaults to dark mode)
  const [darkMode, setDarkMode] = useState(true);
  
  // State for controlling the preloader visibility
  const [loading, setLoading] = useState(true);

  /**
   * Effect to load saved theme preference from localStorage
   * Runs only once when component mounts
   */
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  /**
   * Effect to save theme preference and apply theme to body
   * Runs whenever darkMode state changes
   */
  useEffect(() => {
    // Save current theme preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    
    // Apply theme class to body element for global styling
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  /**
   * Toggle function to switch between dark and light modes
   */
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  /**
   * Show preloader while loading is true
   * Preloader will call onComplete to set loading to false
   */
  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  /**
   * Main app layout with all sections
   * Each section receives darkMode prop for theme-aware styling
   */
  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      {/* Navigation header with theme toggle */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Main content sections */}
      <main>
        {/* Hero section with animated intro */}
        <Hero darkMode={darkMode} />
        
        {/* About section with personal information */}
        <About darkMode={darkMode} />
        
        {/* Skills section with progress bars */}
        <Skills darkMode={darkMode} />
        
        {/* Projects section with interactive cards */}
        <Projects darkMode={darkMode} />
        
        {/* Contact section with form */}
        <Contact darkMode={darkMode} />
      </main>
      
      {/* Footer with social links and theme toggle */}
      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
