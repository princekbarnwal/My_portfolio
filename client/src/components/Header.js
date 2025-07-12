import React, { useState, useEffect } from 'react';
import './Header.css';

/**
 * Header Component - Navigation bar with mobile responsiveness
 * 
 * Features:
 * - Responsive navigation menu
 * - Dark/Light mode toggle
 * - Mobile hamburger menu
 * - Smooth scroll navigation
 * - Scroll-based header styling
 * - Brand logo/name display
 */
const Header = ({ darkMode, toggleDarkMode }) => {
  // State for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State for scroll-based header styling
  const [isScrolled, setIsScrolled] = useState(false);

  /**
   * Effect to handle scroll-based header styling
   * Adds/removes scrolled class based on scroll position
   */
  useEffect(() => {
    const handleScroll = () => {
      // Add scrolled class when page is scrolled down
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Toggles mobile menu visibility
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /**
   * Closes mobile menu when a navigation link is clicked
   */
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  /**
   * Smooth scroll function for navigation links
   * Scrolls to target section and closes mobile menu
   */
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : 'light'}`}>
      <div className="header-container">
        {/* Brand/Logo section */}
        <div className="header-brand">
          <span className="brand-name gradient-text">PKB</span>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
          {/* Navigation links with smooth scroll */}
          <ul className="nav-list">
            <li className="nav-item">
              <button 
                className="nav-link nav-animated"
                onClick={() => scrollToSection('home')}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link nav-animated"
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link nav-animated"
                onClick={() => scrollToSection('skills')}
              >
                Skills
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link nav-animated"
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link nav-animated"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* Header Actions (Theme Toggle & Mobile Menu) */}
        <div className="header-actions">
          {/* Dark/Light Mode Toggle Button */}
          <button 
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <i className="fas fa-sun"></i>
            ) : (
              <i className="fas fa-moon"></i>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button 
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 