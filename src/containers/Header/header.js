// Header.js
import React, { useState } from 'react';
import '../../Assets/css/header.css';
// import logo from './assets/logo.png'; // Make sure to add your logo to this path

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src={''} alt="Event Booking Logo" className="logo" />
          <h1>EventBook</h1>
        </div>
        
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/about" className="nav-link">About</a></li>
            <li><a href="/events" className="nav-link">Event List</a></li>
            <li><a href="/contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <button className="login-button">Login</button>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <span className="hamburger-icon">☰</span>
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
          <button className="close-sidebar" onClick={toggleSidebar}>×</button>
        </div>
        <div className="sidebar-content">
          <ul className="sidebar-menu">
            <li><a href="/" onClick={toggleSidebar}>Home</a></li>
            <li><a href="/about" onClick={toggleSidebar}>About</a></li>
            <li><a href="/events" onClick={toggleSidebar}>Event List</a></li>
            <li><a href="/contact" onClick={toggleSidebar}>Contact</a></li>
            <li><a href="/login" onClick={toggleSidebar}>Login</a></li>
          </ul>
        </div>
      </div>

      {/* Overlay to close sidebar when clicked outside */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Header;