import React, { useState, useEffect, useRef } from 'react';
import './Experience.css';

/**
 * Experience Component - Timeline-style internship showcase
 *
 * Features:
 * - Vertical timeline layout with card on right
 * - Scroll-based fade-in via IntersectionObserver
 * - Role details, bullet points, and tech stack badges
 * - Dark/light mode support via darkMode prop
 * - Responsive (stacks on mobile)
 */
const Experience = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll-based fade-in (same pattern as Skills.js)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experience = {
    company: 'NTPC',
    role: 'Web Developer Intern',
    type: 'Internship',
    location: 'On-site',
    duration: 'June 2025 – July 2025',
    bullets: [
      'Built a responsive Contract Closure Dashboard managing 80+ contract records, replacing manual spreadsheet-based tracking for the IT department.',
      'Engineered multi-field dynamic filtering (by EIC name, CCP1–CCP11) and pagination across a growing dataset, improving data findability for admin and viewer roles.',
      'Implemented role-based access control (Admin/Viewer) with secure login and a 30-minute session timeout, protecting sensitive contract data.',
      'Integrated the frontend with a Google Apps Script backend for real-time CRUD operations against Google Sheets, enabling live data sync without manual re-entry.',
      'Designed a fully responsive UI (desktop table view, mobile card view) with auto-refresh and real-time notifications for user feedback.',
    ],
    techStack: [
      'HTML',
      'CSS',
      'JavaScript',
      'Google Apps Script',
      'Google Sheets API',
    ],
  };

  return (
    <section
      className={`experience ${darkMode ? 'dark' : 'light'}`}
      id="experience"
      ref={sectionRef}
    >
      <div className="experience-container">
        {/* Section header */}
        <div className={`experience-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Where I've applied my skills in real-world environments
          </p>
        </div>

        {/* Timeline */}
        <div className={`timeline ${isVisible ? 'visible' : ''}`}>
          {/* Vertical line */}
          <div className="timeline-line" />

          {/* Single timeline item */}
          <div className="timeline-item">
            {/* Timeline dot */}
            <div className="timeline-dot">
              <i className="fas fa-briefcase" />
            </div>

            {/* Experience card */}
            <div className={`experience-card ${isVisible ? 'visible' : ''}`}>
              {/* Card header */}
              <div className="card-header">
                <div className="company-info">
                  <div className="company-icon">
                    <i className="fas fa-building" />
                  </div>
                  <div className="company-details">
                    <h3 className="company-name">{experience.company}</h3>
                    <p className="role-title">{experience.role}</p>
                  </div>
                </div>

                <div className="card-badges">
                  <span className="badge duration-badge">
                    <i className="fas fa-calendar-alt" />
                    {experience.duration}
                  </span>
                  <span className="badge type-badge">{experience.type}</span>
                  <span className="badge location-badge">
                    <i className="fas fa-map-marker-alt" />
                    {experience.location}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="card-divider" />

              {/* Bullet points */}
              <ul className="bullet-list">
                {experience.bullets.map((bullet, index) => (
                  <li key={index} className="bullet-item">
                    <span className="bullet-icon">
                      <i className="fas fa-check-circle" />
                    </span>
                    <span className="bullet-text">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="tech-stack">
                <span className="tech-label">
                  <i className="fas fa-code" /> Tech Stack
                </span>
                <div className="tech-pills">
                  {experience.techStack.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
