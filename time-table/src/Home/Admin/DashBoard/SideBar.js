import React from 'react'
import './SideBarStyle.css';
import DashBord from '../AddDetails/UserDashBord';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import UserDashBord from '../AddDetails/UserDashBord';

function SideBar() {
  
  return (
    <>
   
    <div className='sidebar-container'>
      <ul className="list">
       <Link to="/dashboard/user/dashboard" style={{ textDecoration: 'none', color:'#FFFFFF' }}><li className="link">DashBoard</li></Link>
      </ul>
      <ul className="list">
      <Link to="/dashboard/Add/Lectures" style={{ textDecoration: 'none', color:'#FFFFFF' }}><li className="link">Add Lectures</li></Link>
      </ul>
      <ul className="list">
      <Link to="/dashboard/Add/professor" style={{ textDecoration: 'none', color:'#FFFFFF' }}><li className="link">Add Professors</li></Link>
      </ul>
      <ul className="list">
      <Link to="/dashboard/Add/Room" style={{ textDecoration: 'none', color:'#FFFFFF' }}><li className="link">Add Rooms</li></Link>
      </ul>
      <ul className="list">
      <Link to="/dashboard/Add/Course" style={{ textDecoration: 'none', color:'#FFFFFF' }}><li className="link">Add Course</li></Link>
      </ul>
      <ul className="list">
      <Link to="/dashboard/settings" style={{ textDecoration: 'none', color:'#FFFFFF' }}><li className="link">Settings</li></Link>
      </ul>

      <ul className="list">
      <Link to="" style={{ textDecoration: 'none', color:'#FFFFFF' }}><li className="link">Print</li></Link>
      </ul>

    </div>
    <div className="main-body-container">
    
    </div>
    
    </>
  )
}

export default SideBar
