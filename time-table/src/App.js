import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from "./Layout/HomeLaout";
import DashBoardLayout from "./Layout/DashBoardLayout";
import AddLectures from "./Home/Admin/AddDetails/AddLectures";
import UserDashBord from "./Home/Admin/AddDetails/UserDashBord";
import AddProfessors from "./Home/Admin/AddDetails/AddProfessors";
import AddRoom from "./Home/Admin/AddDetails/AddRoom";
import AddCourses from "./Home/Admin/AddDetails/AddCourses";
import Settings from "./Home/Admin/AddDetails/Settings";
import UserProfileLayout from "./Layout/UserProfileLayout";



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeLayout />}></Route>
      <Route path="/dashboard" element={<DashBoardLayout />}>
        <Route path="user/dashboard" element={<UserDashBord />} />
        <Route path="Add/professor" element={<AddProfessors />} />
        <Route path="Add/Room" element={<AddRoom />} />
        <Route path="Add/Course" element={<AddCourses />} />
        <Route path="settings" element={<Settings />} />
        <Route path="Add/Lectures" element={<AddLectures />} />
        
      

      </Route>
      <Route path="/user/profile" element={<UserProfileLayout />}></Route>
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
