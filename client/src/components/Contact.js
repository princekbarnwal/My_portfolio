import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

/**
 * Contact Component - Contact form and information
 * 
 * Features:
 * - Contact form with validation
 * - Form submission handling
 * - Success/error message display
 * - Responsive design
 * - Input field animations
 */
const Contact = ({ darkMode }) => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  /**
   * Handles input field changes
   * Updates form data state with new values
   * @param {Event} e - Input change event
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Validates form data before submission
   * @returns {boolean} True if form is valid, false otherwise
   */
  const validateForm = () => {
    const { name, email, subject, message } = formData;
    
    // Check if all fields are filled
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      return false;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    }
    
    return true;
  };

  /**
   * Handles form submission using EmailJS
   * @param {Event} e - Form submit event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }
    
    // Set loading state
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const serviceId = 'service_rk8bqif'; // Replace with your EmailJS service ID
      const templateId = 'template_9gun8w8'; // Replace with your EmailJS template ID
      const publicKey = 'qzlV2AUZrgY4xUif5'; // Replace with your EmailJS public key
      
      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );
      
      // Handle successful submission
      if (result.status === 200) {
        setSubmitStatus('success');
        
        // Reset form data
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
      
      // Clear status message after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      // Clear loading state
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`contact ${darkMode ? 'dark' : 'light'}`} id="contact">
      <div className="contact-container">
        {/* Section header with title */}
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's discuss how I can help bring your ideas to life!
          </p>
        </div>
        
        {/* Contact content container */}
        <div className="contact-content">
          {/* Contact form section */}
          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              {/* Name input field */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              {/* Email input field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              {/* Subject input field */}
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              {/* Message textarea */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                />
              </div>
              
              {/* Submit button with loading state */}
              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
            
            {/* Form submission status messages */}
            {submitStatus && (
              <div className={`status-message ${submitStatus}`}>
                {submitStatus === 'success' ? (
                  <>
                    <i className="fas fa-check-circle"></i>
                    Message sent successfully! I'll get back to you soon.
                  </>
                ) : (
                  <>
                    <i className="fas fa-exclamation-circle"></i>
                    Please fill all fields correctly and try again.
                  </>
                )}
              </div>
            )}
          </div>
          
          {/* Contact information section */}
          <div className="contact-info-section">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>
                I'm passionate about creating innovative web solutions and always excited to 
                work on challenging projects. Whether you need a full-stack developer for 
                your next project or want to discuss technology, I'd love to hear from you!
              </p>
              {/* Contact details removed for privacy */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 