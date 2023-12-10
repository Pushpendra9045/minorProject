import React from 'react'
import NavBar from '../Home/NavBar';
import SideBar from '../Home/Admin/DashBoard/SideBar';
import { Outlet } from 'react-router-dom';

function DashBoardLayout() {
  return (
    <div>
      <NavBar/>
        <SideBar/>
        <div>
          <Outlet/>
        </div>
    </div>
  )
}

export default DashBoardLayout
