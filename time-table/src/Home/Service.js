import React from 'react'
import './ServiceStyle.css'
import customize from './../Images/customize.png'
import easyToUse from './../Images/easyToUse.jpg'
import realtimeUpdate from './../Images/realTimeUpdate.png'



function Service() {
  return (
    <div className="service-section">
      <div className="service-header">
        <h2>WHY CHOOSE US</h2>
        <h1>We're Timetable Generator Pro</h1>
        <p className="service-para">No matter what you are looking for, we can generate a timetable for your institute</p>
      </div>
      <div className="service-body">
        <div className="card">
          <div className="card-header">
            <div className="card-image-container">
              <img src={customize} alt="" />
            </div>
          </div>
          <div className="card-body">
            <h3 className="service-name">Customization</h3>
            <p className="card-para">
            Tailor your timetable according to your unique schedule, allowing flexibility for different activities, classes, or events
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="card-image-container">
              <img src={easyToUse} alt="" />
            </div>
          </div>
          <div className="card-body">
            <h3 className="service-name">Easy-to-user Interface</h3>
            <p className="card-para">
            Intuitive and user-friendly design for effortless timetable creation, suitable for all age groups and tech proficiency levels
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="card-image-container">
              <img src={realtimeUpdate} alt="" />
            </div>
          </div>
          <div className="card-body">
            <h3 className="service-name">Real Time Update</h3>
            <p className="card-para">
            Make changes on-the-go and instantly sync across devices, ensuring you're always up-to-date with your schedule
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
