// NavBar.js
import React, { useState } from 'react';
import './NavBarStyle.css';
import Modal from './Admin/AdminLogin'; // Import the Modal component
import userProfile from './../Images/profile-user.png';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


function NavBar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
    setModalOpen(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <header>
        <nav className="nav-bar">
          <div className="logo">
            <h2 className="logo-name">TimeTable</h2>
          </div>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Service</a>
            <a href="#">Contact</a>
          </div>
          {isLoggedIn ? (
            <div className="profile-icon" onClick={toggleDropdown}>
              {/* Profile Icon */}
              <img src={userProfile} alt="" />
              {showDropdown && ( // Show the dropdown if showDropdown is true
                <div className="dropdown-content">
                 <Link to="/dashboard" style={{ textDecoration: 'none', color:'#000000' }}><p className='dropdwon-link'>Dashboard</p></Link> 
                 <Link to="/user/profile" style={{ textDecoration: 'none', color:'#000000' }}><p className='dropdwon-link'>Profile</p></Link> 
                  <p className='dropdwon-link'>Logout</p>
                </div>
              )}
            </div>
          ) : (
            <div className="Sign-up-button">
              <button className='Nav-bar-btn' onClick={toggleModal}>Sign UP</button>
            </div>
          )}
        </nav>
      </header>
      <Modal isOpen={modalOpen} toggleModal={toggleModal} handleSuccessfulLogin={handleSuccessfulLogin} />
      {/* Pass the handleSuccessfulLogin function to the Modal */}
    </div>
  );
}

export default NavBar;
