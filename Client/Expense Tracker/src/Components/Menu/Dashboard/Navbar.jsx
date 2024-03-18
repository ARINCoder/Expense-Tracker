import React from 'react'
import "../Dashboard/Navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h1>Dashboard</h1>
      </div>
      <div className="navbar-search">
      <img src="./public/Search.png" alt=" Search " />
        <input type="text" placeholder="Portfolio, Saving, etc..." />
      </div>
      <div className="navbar-icons">
        <i className="fas fa-bell"></i> {/* Replace with actual icon */}
        <img src= '.\public\Notify.png' alt="Notify" />
      </div>
    </nav>
  )
}

export default Navbar