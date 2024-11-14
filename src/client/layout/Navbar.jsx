// import { useDispatch, useSelector } from "react-redux";
// import { NavLink, useNavigate } from "react-router-dom";
// import { logout, selectToken } from "../features/auth/authSlice";
// import "./Navbar.less";
// import { useState } from "react";

// export default function Navbar() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const token = useSelector(selectToken);
//   const [isCurtainOpen, setIsCurtainOpen] = useState(false);

//   const handleLogout = async () => {
//     await dispatch(logout());
//     navigate("/");
//   };

//   const toggleCurtain = () => setIsCurtainOpen(!isCurtainOpen);

//   return (
//     <nav className="navbar">
//       <div className="navbar-content">
//         <NavLink to="/" className="logo">Home</NavLink>

//         {/* Regular nav links for desktop */}
//         <div className="nav-links">
//           <NavLink to="/news">News</NavLink>
//           <div className="dropdown">
//             <button className="dropbtn">More Links</button>
//             <div className="dropdown-content">
//               <NavLink to="/link1">Link 1</NavLink>
//               <NavLink to="/link2">Link 2</NavLink>
//               <NavLink to="/link3">Link 3</NavLink>
//             </div>
//           </div>
//           <div className="dropdown">
//             <button className="dropbtn">Additional Links</button>
//             <div className="dropdown-content">
//               <NavLink to="/additional1">Additional Link 1</NavLink>
//               <NavLink to="/additional2">Additional Link 2</NavLink>
//               <NavLink to="/additional3">Additional Link 3</NavLink>
//             </div>
//           </div>
//           <div className="auth-link">
//             {token ? (
//               <button onClick={handleLogout}>Log Out</button>
//             ) : (
//               <NavLink to="/login">Log In</NavLink>
//             )}
//           </div>
//         </div>

//         {/* Hamburger icon for curtain menu on mobile */}
//         <button className="hamburger" onClick={toggleCurtain}>
//           &#9776;
//         </button>
//       </div>

//       {/* Curtain menu */}
//       {isCurtainOpen && (
//         <div className="curtain">
//           <button className="closebtn" onClick={toggleCurtain}>&times;</button>
//           <div className="curtain-content">
//             <NavLink onClick={toggleCurtain} to="/">Home</NavLink>
//             <NavLink onClick={toggleCurtain} to="/news">News</NavLink>
//             <NavLink onClick={toggleCurtain} to="/link1">Link 1</NavLink>
//             <NavLink onClick={toggleCurtain} to="/link2">Link 2</NavLink>
//             <NavLink onClick={toggleCurtain} to="/link3">Link 3</NavLink>
//             <NavLink onClick={toggleCurtain} to="/additional1">Additional Link 1</NavLink>
//             <NavLink onClick={toggleCurtain} to="/additional2">Additional Link 2</NavLink>
//             <NavLink onClick={toggleCurtain} to="/additional3">Additional Link 3</NavLink>
//             {token ? (
//               <button onClick={handleLogout}>Log Out</button>
//             ) : (
//               <NavLink onClick={toggleCurtain} to="/login">Log In</NavLink>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }
import React, { useState } from 'react';
 import "./Navbar.less";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={isOpen ? 'bar open' : 'bar'}></div>
        <div className={isOpen ? 'bar open' : 'bar'}></div>
        <div className={isOpen ? 'bar open' : 'bar'}></div>
      </div>
      
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </>
  );
};
