import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import './Sidebar.css'
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  const menuItem = [
    {
      title: "Home ",
      path: "/",
    },
    {
      title: "Product",
      path: "/product",
    },
    {
      title: "Category",
      path: "/category",
    },
    // {
    //   title: "Unit",
    //   path: "/unit",
    // },
    {
      title: "Brand",
      path: "/brand",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div >
      {/* <div class="wrapper">
       <aside id="sidebar">
        <div class="h-100">
         <div class="sidebar-logo">
          <a href="">Shunno It</a>
          <ul class="sidebar-nav">
            <li class="sidebar-header">
              Admin
            </li>
          </ul>
         </div>
        </div>
        </aside>
        <div class="main">
          <nav class="navbar navbar-expand px-3 border-bottom">
          <button className="btn" id="sidebar-toggle" type="button">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse navbar">
            <ul class="navbar-nav">
              <li className="nav-item dropdown">
                 <a href="" data-bs-toggle="dropdown" className="nav-icon pe-md-0"></a>
              </li>
            </ul>
          </div>
          </nav>
        </div>
      </div> */}
       <div>
      <div className="container-fliid ">
      <div className="bars" onClick={toggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className="sidebar" style={{ display: isOpen ? "block" : "" }}>
        <div className="menu">
          <div >
            {menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className="link">
                <div className="link_title" onClick={toggle}>
                  {item.title}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
     
    </div>
      </div> 
    </div>
  );
};

export default Sidebar;
