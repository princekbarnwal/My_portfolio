import React from 'react';
import './Footer.css';

/**
 * Footer Component - Site footer with social links and information
 * 
 * Features:
 * - Social media links with icons
 * - Copyright information
 * - Theme toggle option
 * - Responsive design
 * - Hover animations
 */
const Footer = ({ darkMode }) => {
  // Current year for copyright
  const currentYear = new Date().getFullYear();

  // Social media links data
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/princekbarnwal',
      icon: 'fab fa-github',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/princekbarnwal/',
      icon: 'fab fa-linkedin',
      color: '#0077b5'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/princekb/',
      icon: 'leetcode', // Custom identifier for SVG
      color: '#ffa116'
    },
    {
      name: 'CodeChef',
      url: 'https://www.codechef.com/users/princekb',
      icon: 'fas fa-trophy',
      color: '#5b4638'
    }
  ];

  /**
   * Handles smooth scroll to top of page
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`footer ${darkMode ? 'dark' : 'light'}`}>
      <div className="footer-container">
        {/* Main footer content */}
        <div className="footer-content">
          {/* Brand section */}
          <div className="footer-brand">
            <h3 className="brand-name">PKB</h3>
            <p className="brand-tagline">
              Full Stack Developer & Problem Solver
            </p>
          </div>
          
          {/* Social links section */}
          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                  style={{ '--social-color': social.color }}
                >
                  {social.icon === 'leetcode' ? (
                    // LeetCode SVG icon (white, larger)
                    <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.5 36.5C15.5 32.5 15.5 24.5 19.5 20.5L28.5 11.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M30.5 13.5L38.5 21.5C42.5 25.5 42.5 33.5 38.5 37.5C34.5 41.5 26.5 41.5 22.5 37.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                      <circle cx="34" cy="25" r="3" fill="currentColor"/>
                    </svg>
                  ) : (
                    <i className={social.icon}></i>
                  )}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick links section */}
          <div className="footer-links">
            <h4>Quick Navigation</h4>
            <ul className="footer-nav">
              <li>
                <button 
                  onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
                  className="footer-link"
                >
                  <i className="fas fa-home"></i>
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                  className="footer-link"
                >
                  <i className="fas fa-user"></i>
                  <span>About</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
                  className="footer-link"
                >
                  <i className="fas fa-code"></i>
                  <span>Skills</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  className="footer-link"
                >
                  <i className="fas fa-briefcase"></i>
                  <span>Projects</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="footer-link"
                >
                  <i className="fas fa-envelope"></i>
                  <span>Contact</span>
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact info section */}
          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <div className="contact-info">
              {/* Email and location removed for privacy */}
            </div>
          </div>
        </div>
        
        {/* Footer bottom section */}
        <div className="footer-bottom">
          {/* Copyright information */}
          <div className="footer-copyright">
            <p>
              © {currentYear} Prince Kumar Barnwal. All rights reserved.
            </p>
          </div>
          
          {/* Footer actions */}
          <div className="footer-actions">
            {/* Back to top button */}
            <button 
              onClick={scrollToTop}
              className="back-to-top"
              aria-label="Back to top"
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 