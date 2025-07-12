import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

/**
 * Main Entry Point - Portfolio Application
 * 
 * This file serves as the entry point for the React application.
 * It renders the main App component into the DOM and sets up
 * the root element for the entire portfolio website.
 */

// Get the root DOM element where the app will be mounted
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main App component
// StrictMode is used for development to catch potential issues
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
