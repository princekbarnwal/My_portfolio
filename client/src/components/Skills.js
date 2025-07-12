import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

/**
 * Enhanced Skills Component - Modern skills showcase with advanced animations
 * 
 * Features:
 * - Interactive skill cards with hover effects
 * - Staggered animations on scroll
 * - Progress bar animations with smooth reveals
 * - Category-based organization with smooth transitions
 * - Professional micro-interactions
 * - Responsive design with touch support
 */
const Skills = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedSkills, setDisplayedSkills] = useState([]);
  const skillsRef = useRef(null);

  // Enhanced skills data with more details and categories
  const skillsData = {
    frontend: [
      { name: 'React.js', level: 90, icon: 'fab fa-react', color: '#61DAFB', description: 'Modern UI development' },
      { name: 'JavaScript', level: 85, icon: 'fab fa-js-square', color: '#F7DF1E', description: 'ES6+ & modern features' },
      { name: 'HTML5', level: 95, icon: 'fab fa-html5', color: '#E34F26', description: 'Semantic markup' },
      { name: 'CSS3', level: 88, icon: 'fab fa-css3-alt', color: '#1572B6', description: 'Advanced styling' },
      { name: 'Bootstrap', level: 75, icon: 'fab fa-bootstrap', color: '#7952B3', description: 'Responsive frameworks' },
      { name: 'TypeScript', level: 65, icon: 'fab fa-js', color: '#3178C6', description: 'Type-safe development' }
    ],
    
    backend: [
      { name: 'Node.js', level: 85, icon: 'fab fa-node-js', color: '#339933', description: 'Server-side development' },
      { name: 'Express.js', level: 78, icon: 'fas fa-server', color: '#000000', description: 'API development' },
      { name: 'MongoDB', level: 78, icon: 'fas fa-database', color: '#47A248', description: 'NoSQL databases' },
      { name: 'REST API', level: 75, icon: 'fas fa-link', color: '#FF6B6B', description: 'API design & integration' },
      { name: 'Git', level: 80, icon: 'fab fa-git-alt', color: '#F05032', description: 'Version control' },
      { name: 'PostgreSQL', level: 65, icon: 'fas fa-database', color: '#336791', description: 'Relational databases' }
    ],
    
    tools: [
      { name: 'Linux', level: 75, icon: 'fab fa-linux', color: '#FCC624', description: 'System administration' },
      { name: 'VS Code', level: 90, icon: 'fas fa-code', color: '#007ACC', description: 'Development environment' },
      { name: 'GitHub', level: 88, icon: 'fab fa-github', color: '#6E5494', description: 'Code collaboration' },
      { name: 'AWS', level: 68, icon: 'fab fa-aws', color: '#FF9900', description: 'Cloud services' },
      { name: 'Docker', level: 65, icon: 'fab fa-docker', color: '#2496ED', description: 'Containerization' },
      { name: 'Postman', level: 65, icon: 'fas fa-paper-plane', color: '#FF6C37', description: 'API testing' }
    ]
  };

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Skills', icon: 'fas fa-th-large' },
    { id: 'frontend', name: 'Frontend', icon: 'fas fa-desktop' },
    { id: 'backend', name: 'Backend', icon: 'fas fa-server' },
    { id: 'tools', name: 'Tools', icon: 'fas fa-tools' }
  ];

  // Convert percentage to experience level
  const getExperienceLevel = (percentage) => {
    if (percentage >= 90) return 'Advanced';
    if (percentage >= 80) return 'Proficient';
    if (percentage >= 70) return 'Intermediate';
    if (percentage >= 60) return 'Beginner';
    return 'Learning';
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Initialize displayed skills when component becomes visible
  useEffect(() => {
    if (isVisible) {
      const allSkills = Object.values(skillsData).flat();
      animateSkillsIn(allSkills);
    }
  }, [isVisible]);

  // Handle category changes with smooth transitions
  const handleCategoryChange = (categoryId) => {
    if (categoryId === activeCategory || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Animate skills out
    setTimeout(() => {
      setActiveCategory(categoryId);
      
      // Get new skills for the category
      const newSkills = categoryId === 'all' 
        ? Object.values(skillsData).flat()
        : skillsData[categoryId] || [];
      
      // Animate new skills in
      setTimeout(() => {
        animateSkillsIn(newSkills);
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  // Animate skills in with staggered delay
  const animateSkillsIn = (skills) => {
    setDisplayedSkills([]);
    
    // Sort skills by percentage in descending order (highest to lowest)
    const sortedSkills = [...skills].sort((a, b) => b.level - a.level);
    
    sortedSkills.forEach((skill, index) => {
      setTimeout(() => {
        setDisplayedSkills(prev => [...prev, skill]);
      }, index * 150); // 150ms delay between each skill
    });
  };

  /**
   * Renders a skill card with enhanced animations
   */
  const renderSkillCard = (skill, index) => (
    <div 
      key={`${skill.name}-${activeCategory}`} 
      className={`skill-card ${isVisible && !isTransitioning ? 'visible' : ''}`}
      style={{ 
        animationDelay: `${index * 0.15}s`,
        '--skill-color': skill.color 
      }}
    >
      {/* Skill header with icon and name */}
      <div className="skill-header">
        <div className="skill-icon-wrapper">
          <i className={`skill-icon ${skill.icon}`} style={{ color: skill.color }}></i>
        </div>
        <div className="skill-info">
          <h4 className="skill-name">{skill.name}</h4>
          <p className="skill-description">{skill.description}</p>
        </div>
      </div>
      
      {/* Progress section */}
      <div className="skill-progress-section">
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ 
                width: isVisible && !isTransitioning ? `${skill.level}%` : '0%',
                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
              }}
            />
          </div>
          <span className="skill-experience">{getExperienceLevel(skill.level)}</span>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="skill-overlay">
        <div className="overlay-content">
          <div className="overlay-skill-icon">
            <i className={skill.icon}></i>
          </div>
          <p className="overlay-description">{skill.description}</p>
          <div className="overlay-experience">
            <span className="experience-level">{getExperienceLevel(skill.level)}</span>
          </div>
        </div>
      </div>
    </div>
  );

  /**
   * Renders category filter buttons
   */
  const renderCategoryFilter = () => (
    <div className="category-filters">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`category-filter ${activeCategory === category.id ? 'active' : ''} ${isTransitioning ? 'disabled' : ''}`}
          onClick={() => handleCategoryChange(category.id)}
          disabled={isTransitioning}
        >
          <i className={category.icon}></i>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );

  return (
    <section className={`skills ${darkMode ? 'dark' : 'light'}`} id="skills" ref={skillsRef}>
      <div className="skills-container">
        {/* Section header */}
        <div className={`skills-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">
            <span className="title-highlight">Technical</span> Skills
          </h2>
          <p className="section-subtitle">
            My proficiency across various technologies and development tools
          </p>
        </div>

        {/* Category filters */}
        <div className={`category-filters-container ${isVisible ? 'visible' : ''}`}>
          {renderCategoryFilter()}
        </div>
        
        {/* Skills grid */}
        <div className="skills-content">
          <div className={`skills-grid ${isVisible ? 'visible' : ''} ${isTransitioning ? 'transitioning' : ''}`}>
            {displayedSkills.map((skill, index) => 
              renderSkillCard(skill, index)
            )}
          </div>
          
          {/* Loading state during transitions */}
          {isTransitioning && (
            <div className="skills-loading">
              <div className="loading-spinner"></div>
              <p>Loading skills...</p>
            </div>
          )}
        </div>

        {/* Skills summary */}
        <div className={`skills-summary ${isVisible ? 'visible' : ''}`}>
          <div className="summary-grid">
            <div className="summary-card">
              <div className="summary-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h4>Problem Solving</h4>
              <p>Advanced algorithm design and optimization</p>
            </div>
            <div className="summary-card">
              <div className="summary-icon">
                <i className="fas fa-users"></i>
              </div>
              <h4>Team Collaboration</h4>
              <p>Effective communication and project coordination</p>
            </div>
            <div className="summary-card">
              <div className="summary-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h4>Rapid Development</h4>
              <p>Quick prototyping and iterative development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 