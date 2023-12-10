// Modal.js
import React, { useState } from 'react';
import './AdminLoginStyle.css';

export default function Modal({ isOpen, toggleModal, handleSuccessfulLogin }) {
  const [isSignUp, setIsSignUp] = useState(true); // State to manage signup and login forms

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleLogin = () => {
    // Perform login logic (can be API call or other authentication)
    // For this example, just setting a simple login success
    handleSuccessfulLogin();
  };

  if (isOpen) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="form-heading">
              <h3 className="form-name">{isSignUp ? 'Sign up' : 'Login'}</h3>
            </div>
            {isSignUp ? ( // Render signup form if isSignUp is true
              <>
                <div className="input-container">
                  <input type="text" placeholder="Enter Your Name"  required/>
                </div>
                <div className="input-container">
                  <input type="text" placeholder="Enter Your Last Name" />
                </div>
                <div className="input-container">
                  <input type="email" placeholder="Enter Your Email" required/>
                </div>
                <div className="input-container">
                  <input type="password" placeholder="Enter Your Password" required/>
                </div>

                <div className="input-container">
                  <input type="password" placeholder="Confirm Your Password" required/>
                </div>
              </>
            ) : ( // Render login form if isSignUp is false
              <>
              <div className="input-container">
                  
                  <input type="text" placeholder="Enter Your Registeration Number" />
                </div>
               
                <div className="input-container">
                  <input type="password" placeholder="Enter Your Password" />
                </div>
              </>
            )}
            <div className="input-container">
              {isSignUp ? ( // Render Signup button if isSignUp is true
                <button className="form-button" type="submit" >
                  Sign up
                </button>
              ) : (
                <button className="form-button" type="submit" onClick={handleLogin}>
                  Login
                </button>
              )}
              <p className="login-form-link" onClick={toggleForm}>
                {isSignUp ? 'Already have an Account?' : 'Create an Account?'}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { Modal };
