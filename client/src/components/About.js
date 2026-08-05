import React from 'react';
import './About.css';
import profileImage from '../assets/image_1.png'; // Your profile image

/**
 * About Component - Clean and focused professional background
 * 
 * Features:
 * - Streamlined introduction
 * - Focused competencies
 * - Clean profile display
 * - Minimalist design
 */
const About = ({ darkMode }) => {
  return (
    <section className={`about ${darkMode ? 'dark' : 'light'}`} id="about">
      <div className="about-container">
        {/* Section header */}
        <div className="about-header">
          <h2 className="section-title">About Me</h2>
        </div>
        
        {/* Main content container */}
        <div className="about-content">
          {/* Left side: Professional introduction */}
          <div className="about-text">
            {/* Professional introduction */}
            <div className="about-intro">
              <div className="intro-badges">
                <div className="intro-badge">
                  <span className="badge-icon">⚡</span>
                  <span className="badge-text">Full Stack Developer</span>
                </div>
                <div className="intro-badge">
                  <span className="badge-icon">🧩</span>
                  <span className="badge-text">Problem Solver</span>
                </div>
              </div>
              
              <h3 className="intro-title">Prince Kumar Barnwal</h3>
              
              <p className="intro-description">
                A passionate <strong>Full Stack Developer</strong> specializing in the{' '}
                <strong>MERN stack</strong> with expertise in building scalable web applications. 
                Pursued <strong>B.Tech in Information Technology</strong>, I combine 
                theoretical knowledge with practical implementation to deliver robust solutions.
              </p>
              
              <p className="intro-description">
                With strong problem-solving skills developed through extensive practice, 
                I approach development challenges with analytical thinking and efficient methodologies.
              </p>
            </div>
            
            {/* Key competencies */}
            <div className="about-expertise">
              <h4 className="expertise-title">Key Competencies</h4>
              <div className="expertise-grid">
                <div className="expertise-item">
                  <div className="expertise-icon">🔧</div>
                  <div className="expertise-content">
                    <h5>Full Stack Development</h5>
                    <p>End-to-end application development with modern frameworks</p>
                  </div>
                </div>
                
                <div className="expertise-item">
                  <div className="expertise-icon">⚡</div>
                  <div className="expertise-content">
                    <h5>Performance Optimization</h5>
                    <p>Efficient algorithms and optimized code solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side: Professional profile and metrics */}
          <div className="about-visual">
            {/* Professional profile */}
            <div className="profile-card">
              <div className="profile-avatar">
                <div className="avatar-image">
                  <img src={profileImage} alt="Prince Kumar Barnwal" />
                </div>
                <div className="avatar-glow"></div>
              </div>
              
              <div className="profile-info">
                <h4 className="profile-name">Prince Kumar Barnwal</h4>
                <p className="profile-subtitle">B.Tech Information Technology</p>
              </div>
            </div>
            
            {/* Professional metrics */}
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-icon">⏱️</div>
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">💡</div>
                <div className="stat-number">800+</div>
                <div className="stat-label">Problems Solved</div>
              </div>
            </div>
            
            {/* Profile cards row */}
            <div className="profile-cards-row">

              {/* Programming Profile */}
              <div className="profile-type-card programming-card">
                <p className="ptc-label">Programming<br/>Profile</p>
                <div className="ptc-links">
                  <a href="https://www.codechef.com/users/princekb" target="_blank" rel="noopener noreferrer" className="ptc-btn codechef-btn">
                    <svg className="ptc-inline-logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="50" r="48" fill="#5B4638"/>
                      <path d="M50 18c-6 0-11 4-13 9-3-1-6-1-8 1-4 3-4 9-1 13-3 3-4 8-2 12 2 5 7 8 12 8 1 3 3 6 5 8l7 7 7-7c2-2 4-5 5-8 5 0 10-3 12-8 2-4 1-9-2-12 3-4 3-10-1-13-2-2-5-2-8-1-2-5-7-9-13-9z" fill="#fff"/>
                      <path d="M38 50c0-7 5-12 12-12s12 5 12 12-5 12-12 12-12-5-12-12z" fill="#5B4638"/>
                      <circle cx="44" cy="47" r="2.5" fill="#fff"/>
                      <circle cx="56" cy="47" r="2.5" fill="#fff"/>
                    </svg>
                    <span>CodeChef</span>
                    <i className="fas fa-arrow-right ptc-arrow"></i>
                  </a>
                  <a href="https://leetcode.com/u/princekb/" target="_blank" rel="noopener noreferrer" className="ptc-btn leetcode-btn">
                    <svg className="ptc-inline-logo" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                      <rect width="50" height="50" rx="8" fill="#FFA116"/>
                      <path d="M15 32l8-8-8-8" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <line x1="24" y1="35" x2="36" y2="35" stroke="#fff" strokeWidth="3.5" strokeLinecap="round"/>
                    </svg>
                    <span>LeetCode</span>
                    <i className="fas fa-arrow-right ptc-arrow"></i>
                  </a>
                </div>
              </div>

              {/* Developer Profile */}
              <div className="profile-type-card developer-card">
                <p className="ptc-label">Developer<br/>Profile</p>
                <div className="ptc-links">
                  <a href="https://github.com/princekbarnwal" target="_blank" rel="noopener noreferrer" className="ptc-btn github-btn">
                    <i className="fab fa-github ptc-inline-icon"></i>
                    <span>GitHub</span>
                    <i className="fas fa-arrow-right ptc-arrow"></i>
                  </a>
                </div>
              </div>

              {/* Professional Profile */}
              <div className="profile-type-card professional-card">
                <p className="ptc-label">Professional<br/>Profile</p>
                <div className="ptc-links">
                  <a href="https://www.linkedin.com/in/princekbarnwal" target="_blank" rel="noopener noreferrer" className="ptc-btn linkedin-btn">
                    <i className="fab fa-linkedin ptc-inline-icon"></i>
                    <span>LinkedIn</span>
                    <i className="fas fa-arrow-right ptc-arrow"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 