import "./NavBar.css";
import React from "react";
import { FiHome, FiCpu, FiMonitor, FiUsers } from "react-icons/fi"; // example icons

function NavBar() {
  const navList = [
    { label: "My Space", icon: <FiHome /> },
    { label: "My Playground", icon: <FiCpu /> },
    { label: "Behind the Screen", icon: <FiMonitor /> },
    { label: "Let's Build Together", icon: <FiUsers /> },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {navList.map((item, index) => (
          <li key={item.label} style={{ animationDelay: `${index * 100}ms` }}>
            <a href="#">
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
