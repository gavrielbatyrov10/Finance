import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout, selectToken } from "../features/auth/authSlice";
import "./Navbar.less";
import { MdOutlineKeyboardDoubleArrowLeft, GrLogout  } from "react-icons/md";

/**
 * A simple navigation bar that displays "Log In" if the user is not logged in,
 * and "Log Out" if the user is logged in.
 */
export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <NavLink to="/" className="nav-link">
            <span className="link-text logo-text">Menu</span>
            <MdOutlineKeyboardDoubleArrowLeft />

          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/cats" className="nav-link">
          <MdOutlineKeyboardDoubleArrowLeft />

            <span className="link-text">Cats</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/aliens" className="nav-link">
          <MdOutlineKeyboardDoubleArrowLeft />

            <span className="link-text">Aliens</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/space" className="nav-link">
            {/* SVG Icon */}
            <span className="link-text">Space</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/shuttle" className="nav-link">
            {/* SVG Icon */}
            <span className="link-text">Shuttle</span>
          </NavLink>
        </li>

        <li className="nav-item">
          {token ? (
            <a onClick={handleLogout} className="nav-link">
              <GrLogout />

              <span className="link-text">Log Out</span>
            </a>
          ) : (
            <NavLink to="/login" className="nav-link">
              <span className="link-text">Log In</span>
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}
