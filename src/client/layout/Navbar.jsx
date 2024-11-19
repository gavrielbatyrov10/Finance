import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectToken } from "../features/auth/authSlice";
import { useState } from "react";
import "./Navbar.less";

import { FaArrowDown } from 'react-icons/fa'; // Importing arrow icons

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">MyWebsite</NavLink>
      </div>

      {/* Desktop Menu */}
      <div className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
        <NavLink to="/" className="menu-item">Home</NavLink>

        {/* About Dropdown menu */}
        <div className="dropdown">
          <NavLink to="/about" className="menu-item">About <FaArrowDown /></NavLink>
          <div className="dropdown-content">
            <NavLink to="/team" className="dropdown-item">Team</NavLink>
            <NavLink to="/careers" className="dropdown-item">Careers</NavLink>
            <NavLink to="/history" className="dropdown-item">History</NavLink>
          </div>
        </div>

        {/* Services Dropdown menu */}
        <div className="dropdown">
          <NavLink to="/services" className="menu-item">Services <FaArrowDown /></NavLink>
          <div className="dropdown-content">
            <NavLink to="/web-design" className="dropdown-item">Web Design</NavLink>
            <NavLink to="/development" className="dropdown-item">Development</NavLink>
            <NavLink to="/seo" className="dropdown-item">SEO</NavLink>
          </div>
        </div>

        <NavLink to="/contact" className="menu-item">Contact</NavLink>

        {/* Login/Logout link */}
        {token ? (
          <button className="menu-item logout-btn" onClick={handleLogout}>Log Out</button>
        ) : (
          <NavLink to="/login" className="menu-item login-link">Login</NavLink>
        )}
      </div>

      {/* Hamburger Menu for Mobile */}
      <button className="hamburger" onClick={toggleMobileMenu}>
        &#9776;
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <NavLink to="/" className="menu-item" onClick={toggleMobileMenu}>Home</NavLink>
          <NavLink to="/about" className="menu-item" onClick={toggleMobileMenu}>About</NavLink>
          <NavLink to="/services" className="menu-item" onClick={toggleMobileMenu}>Services</NavLink>
          <NavLink to="/contact" className="menu-item" onClick={toggleMobileMenu}>Contact</NavLink>

          {/* Login/Logout in mobile menu */}
          {token ? (
            <button className="menu-item logout-btn" onClick={handleLogout}>Log Out</button>
          ) : (
            <NavLink to="/login" className="menu-item login-link" onClick={toggleMobileMenu}>Login</NavLink>
          )}
        </div>
      )}
    </nav>
  );
}
