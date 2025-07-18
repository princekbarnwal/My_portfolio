import React, { useState } from 'react';
import portfolioImg from '../assets/Screenshot 2025-07-11 040831.png';
import pokemonImg from '../assets/pokemon_site_img.png';
import './Projects.css';

/**
 * Projects Component - Showcase of portfolio projects
 * 
 * Features:
 * - 3D flip cards with front/back content
 * - Image modal for screenshots
 * - Detailed project modal with full information
 * - Floating action buttons
 * - Hover animations and effects
 */
const Projects = ({ darkMode }) => {
  // State for managing modals and interactions
  const [selectedProject, setSelectedProject] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  // Project data array with all project information
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React.js featuring dark/light mode, smooth animations, and a professional design. Showcases my skills, projects, and experience with a clean and interactive user interface.',
      technologies: ['React.js', 'CSS3', 'JavaScript', 'HTML5', 'Responsive Design'],
      image: portfolioImg,
      github: 'https://github.com/princekbarnwal/My_portfolio',
      live: 'https://princekbarnwal.vercel.app/',
      features: [
        'Dark/Light mode toggle',
        'Responsive design for all devices',
        'Smooth scroll animations',
        'Interactive project modals',
        'Modern UI with premium styling'
      ],
      category: 'Frontend',
      difficulty: 'Advanced',
      completion: '100%'
    },
    {
      id: 2,
      title: 'Pokémon App',
      description: 'A comprehensive Pokémon application built with React and Node.js. Features include Pokémon search, detailed information, battle statistics, and a user-friendly interface. Integrated with PokeAPI for real-time data.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
      image: pokemonImg,
      github: 'https://github.com/princekbarnwal/Pokemon_webapp',
      live: 'https://pokemonwebapp-princekbarnwal.vercel.app/',
      features: [
        'Pokémon search and filtering',
        'Detailed Pokémon information',
        'Battle statistics and moves',
        'Responsive design',
        'Real-time API integration'
      ],
      category: 'Full Stack',
      difficulty: 'Expert',
      completion: '100%'
    }
  ];

  /**
   * Opens the screenshot modal for a project
   * Shows full-size project image
   */
  const openImageModal = (project) => {
    setSelectedProject(project);
    setShowImageModal(true);
  };

  /**
   * Closes the screenshot modal
   */
  const closeImageModal = () => {
    setShowImageModal(false);
    setSelectedProject(null);
  };

  /**
   * Opens the detailed project modal
   * Shows comprehensive project information
   */
  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  /**
   * Closes the detailed project modal
   */
  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className={`projects ${darkMode ? 'dark' : 'light'}`} id="projects">
      <div className="projects-container">
        {/* Section header with title and subtitle */}
        <div className="projects-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-subtitle">
            <span className="highlight-text">Innovative Solutions</span> • 
            <span className="highlight-text"> Modern Technologies</span> • 
            <span className="highlight-text"> Creative Design</span>
          </div>
        </div>
        
        {/* Projects grid with 3D flip cards */}
        <div className="projects-showcase">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-showcase-card ${hoveredProject === project.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ 
                animationDelay: `${index * 0.3}s`,
                '--project-index': index
              }}
            >
              {/* 3D Card Container with flip animation */}
              <div className="card-3d-container">
                {/* Front side of card - Project overview */}
                <div className="card-front">
                  {/* Project image with overlay badges */}
                  <div className="project-image-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-showcase-image"
                    />
                    <div className="image-overlay">
                      {/* Project category and difficulty badges */}
                      <div className="project-badge">
                        <span className="badge-category">{project.category}</span>
                        <span className="badge-difficulty">{project.difficulty}</span>
                      </div>
                      {/* Project completion status */}
                      <div className="project-stats">
                        <div className="stat-item">
                          <span className="stat-label">Completion</span>
                          <span className="stat-value">{project.completion}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project information section */}
                  <div className="project-info">
                    <h3 className="project-showcase-title">{project.title}</h3>
                    <p className="project-showcase-description">{project.description}</p>
                    
                    {/* Technology stack pills */}
                    <div className="tech-stack">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="tech-pill">{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="tech-more">+{project.technologies.length - 3} more</span>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Back side of card - Project features preview */}
                <div className="card-back">
                  <div className="back-content">
                    <h4>Project Features</h4>
                    <ul className="features-preview">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                    <div className="back-actions">
                      <button 
                        className="btn-explore"
                        onClick={() => openProjectModal(project)}
                      >
                        Explore Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Action Buttons */}
              <div className="floating-actions">
                {/* View screenshot button */}
                <button 
                  className="action-btn view-btn"
                  onClick={() => openImageModal(project)}
                  title="View Screenshot"
                >
                  <i className="fas fa-eye"></i>
                </button>
                
                {/* View details button */}
                <button 
                  className="action-btn details-btn"
                  onClick={() => openProjectModal(project)}
                  title="View Details"
                >
                  <i className="fas fa-info-circle"></i>
                </button>
                
                {/* GitHub link */}
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn github-btn"
                  title="View Code"
                >
                  <i className="fab fa-github"></i>
                </a>
                
                {/* Live demo link */}
                <a 
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn live-btn"
                  title="Live Demo"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Screenshot Modal - Clean Image Only */}
      {showImageModal && selectedProject && (
        <div className={`modal-overlay ${showImageModal ? 'active' : ''}`} onClick={closeImageModal}>
          <div className="screenshot-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeImageModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="screenshot-container">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="screenshot-image"
              />
            </div>
          </div>
        </div>
      )}

      {/* Optimized Project Details Modal */}
      {selectedProject && !showImageModal && (
        <div className={`modal-overlay ${selectedProject ? 'active' : ''}`} onClick={closeProjectModal}>
          <div className="project-details-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectModal}>
              <i className="fas fa-times"></i>
            </button>
            
            {/* Modal header with project preview and info */}
            <div className="details-header">
              <div className="project-preview">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="preview-image"
                />
                {/* Project metadata badges */}
                <div className="project-badges">
                  <span className="badge badge-category">{selectedProject.category}</span>
                  <span className="badge badge-difficulty">{selectedProject.difficulty}</span>
                  <span className="badge badge-completion">{selectedProject.completion}</span>
                </div>
              </div>
              <div className="project-intro">
                <h2 className="project-title">{selectedProject.title}</h2>
                <p className="project-description">{selectedProject.description}</p>
              </div>
            </div>
            
            {/* Modal content with detailed information */}
            <div className="details-content">
              {/* Technologies section */}
              <div className="content-section">
                <h3 className="section-title">
                  <i className="fas fa-code"></i> Technologies
                </h3>
                <div className="tech-grid">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-item">{tech}</span>
                  ))}
                </div>
              </div>
              
              {/* Features section */}
              <div className="content-section">
                <h3 className="section-title">
                  <i className="fas fa-star"></i> Key Features
                </h3>
                <div className="features-grid">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Project links section */}
              <div className="content-section">
                <h3 className="section-title">
                  <i className="fas fa-link"></i> Project Links
                </h3>
                <div className="project-links">
                  <a 
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn github-link"
                  >
                    <i className="fab fa-github"></i>
                    <span>View Source Code</span>
                  </a>
                  <a 
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn live-link"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects; 