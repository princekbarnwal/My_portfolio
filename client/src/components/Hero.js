import React, { useState, useEffect, useMemo } from 'react';
import './Hero.css';

/**
 * Hero Component - Main landing section
 * 
 * Features:
 * - Typing animation for role titles
 * - Mouse-following background effects
 * - Floating animated shapes
 * - Interactive avatar with glow effects
 * - Smooth scroll navigation
 */
const Hero = ({ darkMode }) => {
  // State for managing the typing animation
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  // State for mouse position tracking (used for background effects)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Array of titles to cycle through in typing animation
  const texts = useMemo(() => [
    'Full Stack Developer', 
    'Problem Solver', 
    'Creative Coder', 
    'MERN Stack Expert'
  ], []);
  
  // Animation timing constants
  const typingSpeed = 100;    // Speed for typing characters
  const deletingSpeed = 50;   // Speed for deleting characters
  const pauseTime = 2000;     // Pause time when text is complete
  
  /**
   * Effect for typing animation
   * Handles the typewriter effect by adding/removing characters
   */
  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentText];
      
      if (isDeleting) {
        // Delete characters one by one
        setDisplayText(current.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentText((prev) => (prev + 1) % texts.length);
        }
      } else {
        // Add characters one by one
        setDisplayText(current.substring(0, displayText.length + 1));
        if (displayText === current) {
          // Pause before starting to delete
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentText, texts]);

  /**
   * Effect for mouse position tracking
   * Updates mouse position for background gradient effects
   */
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  /**
   * Smooth scroll function for navigation buttons
   */
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      {/* Animated Background with mouse-following effects */}
      <div 
        className="hero-background"
        style={{
          '--mouse-x': `${mousePosition.x}%`,
          '--mouse-y': `${mousePosition.y}%`
        }}
      >
        {/* Floating animated shapes for visual interest */}
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      {/* Main content container */}
      <div className="hero-container">
        {/* Left side: Text content */}
        <div className="hero-content">
          {/* Introduction section */}
          <div className="hero-intro">
            <span className="hero-greeting">Hello, I'm</span>
            <h1 className="hero-name">Prince Kumar Barnwal</h1>
            <div className="hero-title-container">
              <span className="hero-title">
                {displayText}
                <span className="cursor">|</span>
              </span>
            </div>
          </div>
          
          {/* Description with highlighted keywords */}
          <p className="hero-description">
            I create <strong>beautiful, responsive, and user-friendly</strong> web applications 
            using modern technologies. Passionate about <strong>clean code</strong> and 
            <strong> great user experiences</strong>.
          </p>
          
          {/* Action buttons for navigation */}
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        {/* Right side: Visual element (avatar) */}
        <div className="hero-visual">
          <div className="hero-avatar">
            <div className="avatar-placeholder">
              <span>👨‍💻</span>
            </div>
            <div className="avatar-glow"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator at bottom */}
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll to explore</div>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero; 