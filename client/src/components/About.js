import React from 'react';
import './About.css';
import profileImage from '../assets/DALL·E 2024-05-29 02.54.36 - AN PERSON , REPRESENTING A TECH GEEK AND A SPORTSPERSON WITH HIS SETUP  IN SPACE WORKING.png'; // Your profile image

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
          <p className="section-subtitle">Full Stack Developer & Problem Solver</p>
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
                Currently pursuing <strong>B.Tech in Information Technology</strong>, I combine 
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
                <div className="stat-number">600+</div>
                <div className="stat-label">Problems Solved</div>
              </div>
            </div>
            
            {/* Programming platform links */}
            <div className="competitive-links">
              <h5 className="links-title">Programming Profiles</h5>
              <div className="links-grid">
                <a 
                  href="https://www.codechef.com/users/princekb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="platform-link codechef"
                >
                  <i className="fas fa-trophy"></i>
                  <span>CodeChef</span>
                </a>
                <a 
                  href="https://leetcode.com/u/princekb/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="platform-link leetcode"
                >
                  {/* LeetCode SVG icon (theme blue, larger) */}
                  <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                    <path d="M19.5 36.5C15.5 32.5 15.5 24.5 19.5 20.5L28.5 11.5" stroke="#667eea" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M30.5 13.5L38.5 21.5C42.5 25.5 42.5 33.5 38.5 37.5C34.5 41.5 26.5 41.5 22.5 37.5" stroke="#667eea" strokeWidth="3" strokeLinecap="round"/>
                    <circle cx="34" cy="25" r="3" fill="#667eea"/>
                  </svg>
                  <span>LeetCode</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 