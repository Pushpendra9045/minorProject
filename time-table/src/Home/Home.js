import React, { useState } from 'react';
import './HomeStyle.css';
import homeImage from './../Images/home.png'
import Modal from './Admin/AdminLogin';




function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  if (modalOpen) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-content-container">
          <h1 className="home-heading">Effortless Scheduling made Simple</h1>
          <h1 className="home-heading">Your Personal</h1>
          <h1 className="home-heading">Timetable Generator</h1>
          <p className="home-para">Say Goodbye to Chaos: craft, organise, and Optimize our Timetable instantly</p>
          <button className="get-started" onClick={toggleModal}>Get Started</button>
        </div>
      </div>
      <div className="home-content">
        <div className="image-container">
          <img src={homeImage} alt="" />
        </div>
      </div>
      <Modal isOpen={modalOpen} toggleModal={toggleModal} />
    </div>
  );
}

export default App;
