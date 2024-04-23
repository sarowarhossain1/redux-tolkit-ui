import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Sidebar/Sidebar";
import Navbar from "../Pages/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Root;
