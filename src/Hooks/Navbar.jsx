import React from 'react';
import './Navbar.css'; 

function Navbar({ openModal }) {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Task Manager</h1>
      <button className="navbar-button" onClick={openModal}>Open Modal</button>
    </nav>
  );
}

export default Navbar;


