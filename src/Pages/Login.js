// src/pages/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/css/login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the login process
    console.log('Login attempt with:', formData);
    // For demo purposes, log the data - in a real app, you'd send to your backend
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Sign in to access your account</p>
        </div>
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email address"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Your password"
            />
          </div>
          
          <div className="form-options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
          </div>
          
          <button type="submit" className="login-button">Sign In</button>
        </form>
        
        <div className="divider">
          <span>OR</span>
        </div>
        
        <div className="social-login">
          <button className="google-btn">
            <i className="fab fa-google"></i> Sign in with Google
          </button>
          <button className="facebook-btn">
            <i className="fab fa-facebook-f"></i> Sign in with Facebook
          </button>
        </div>
        
        <div className="signup-prompt">
          <p>Don't have an account? <Link to="/register">Sign up now</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;