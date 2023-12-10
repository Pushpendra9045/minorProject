import React from "react";
import "./UserDashBoardStyle.css";
import Lecture from '../../../Images/Lecture.png';
import Course from '../../../Images/course.png';
import Professors from '../../../Images/professors.png';
import Room from '../../../Images/Room.png';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AddProfessors from '../AddDetails/AddProfessors';



function UserDashBord() {
  return (
    <div className="user-dashboard-section">
      <div className="user-dashborad-contaier">
      <Link to="" style={{ textDecoration: 'none', color:'#FFFFFF' }}>
        <div className="user-dashboard-item item-1">
          <div className="title-container">
            <h2 className="grid-item-title">Lectures</h2>
          </div>
          <div className="icon-contaienr">
            <img src={Lecture} alt="" />
          </div>
        </div>
        </Link>
        <div className="user-dashboard-item item-2">
          <div className="title-container">
            <h2 className="grid-item-title">Professors</h2>
          </div>
          <div className="icon-contaienr">
            <img src={Professors} alt="" />
          </div>
        </div>
        <div className="user-dashboard-item item-3">
          <div className="title-container">
            <h2 className="grid-item-title">Rooms</h2>
          </div>
          <div className="icon-contaienr">
            <img src={Room} alt="" />
          </div>
        </div>
        <div className="user-dashboard-item item-4">
          <div className="title-container">
            <h2 className="grid-item-title">Courses</h2>
          </div>
          <div className="icon-contaienr">
            <img src={Course} alt="" />
          </div>
        </div>
      </div>
      <div className="generate-container">
        <h2 className="generate">Generate New Time Table</h2>
      </div>
    </div>
  );
}

export default UserDashBord;
