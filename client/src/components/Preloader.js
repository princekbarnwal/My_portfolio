import React, { useEffect, useState } from 'react';
import './Preloader.css';

/**
 * Preloader Component - Loading screen with text-based circular progress
 * 
 * Features:
 * - Circular progress made of name text
 * - Text fills up as loading progresses
 * - Percentage display in the center
 * - Realistic resource loading simulation
 * - Floating background shapes
 * - Smooth transitions and animations
 * - Calls onComplete when loading finishes
 */
const Preloader = ({ onComplete }) => {
  // Create circular text pattern - moved to top to avoid initialization issues
  const radius = 120;
  const centerX = 150;
  const centerY = 150;
  const totalCharacters = 21; // Number of characters to display
  const name = " Prince Kumar Barnwal ";
  const repeatedName = name.repeat(Math.ceil(totalCharacters / name.length)).slice(0, totalCharacters);

  // State for tracking loading progress (0-100)
  const [progress, setProgress] = useState(0);
  const [visibleCharacters, setVisibleCharacters] = useState(new Set());



  /**
   * Effect to simulate smooth loading progress
   * Uses a simple linear progression for consistent, smooth animation
   */
  useEffect(() => {
    const duration = 3000; // Total loading time in milliseconds
    const interval = 30; // Update interval in milliseconds
    const steps = duration / interval; // Total number of steps
    const increment = 100 / steps; // Progress increment per step
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(currentStep * increment, 100);
      setProgress(newProgress);
      
      // Calculate which characters should be visible
      const newVisibleCharacters = new Set();
      repeatedName.split('').forEach((char, index) => {
        const progressThreshold = (index / totalCharacters) * 100;
        if (newProgress >= progressThreshold) {
          newVisibleCharacters.add(index);
        }
      });
      

      
      setVisibleCharacters(newVisibleCharacters);
      
      if (newProgress >= 100) {
        clearInterval(timer);
        // Small delay before calling onComplete for smooth transition
        setTimeout(() => onComplete && onComplete(), 500);
      }
    }, interval);
    
    // Cleanup function to clear interval if component unmounts
    return () => clearInterval(timer);
  }, [onComplete, totalCharacters]);

  return (
    <div className="preloader-bg">
      {/* Floating background shapes for visual interest */}
      <div className="preloader-shapes">
        <div className="preloader-shape"></div>
        <div className="preloader-shape"></div>
        <div className="preloader-shape"></div>
      </div>
      
      {/* Main preloader content */}
      <div className="preloader-content">
        {/* Brand title with shimmer animation */}
        {/* <div className="preloader-title">PKB Portfolio</div> */}
        
        {/* Subtitle for context */}
        <div className="preloader-subtitle">Loading Experience</div>
        

        
        {/* Circular text progress container */}
        <div className="preloader-circle-wrapper">
          {/* SVG for circular text progress */}
          <svg className="preloader-circle" width="300" height="300" viewBox="0 0 300 300">
            {/* Background circle outline */}
            <circle
              cx={centerX}
              cy={centerY}
              r={radius}
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            
            {/* Circular text that fills up based on progress */}
            {repeatedName.split('').map((char, index) => {
              // Change here for anti-clockwise
              const angle = -(index / totalCharacters) * 2 * Math.PI - Math.PI / 2;
              const x = centerX + radius * Math.cos(angle);
              const y = centerY + radius * Math.sin(angle);
              const rotation = (angle * 180) / Math.PI + 90;
              
              // Check if this character should be visible
              const isVisible = visibleCharacters.has(index);
              
              return (
                <text
                  key={index}
                  x={x}
                  y={y}
                  className={`circle-char ${isVisible ? 'visible' : 'hidden'}`}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  transform={`rotate(${rotation} ${x} ${y})`}
                  fill={isVisible ? "#667eea" : "rgba(102, 126, 234, 0.2)"}
                >
                  {char}
                </text>
              );
            })}
            
            {/* Inner circle for percentage */}
            <circle
              cx={centerX}
              cy={centerY}
              r={radius - 40}
              fill="rgba(0, 0, 0, 0.3)"
              stroke="rgba(255, 215, 0, 0.2)"
              strokeWidth="1"
            />
          </svg>
          
          {/* Percentage display in the center */}
          <div className="preloader-percent">
            <span className="percent-number">{Math.round(progress)}</span>
            <span className="percent-symbol">%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader; 