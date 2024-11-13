import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout, selectToken } from "../features/auth/authSlice";
import "./Navbar.less";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { GrLogout } from "react-icons/gr";
import { FaChartLine, FaCity, FaDollarSign, FaEllipsisH, FaSignInAlt, FaHome } from "react-icons/fa"; // Updated icons

/**
 * A navigation bar that displays "Log In" if the user is not logged in,
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
          <NavLink to="/" className="nav-link">
            <FaHome /> {/* Icon for Home */}
            <span className="link-text">Home</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/cats" className="nav-link">
            <FaChartLine /> {/* Icon for Stocks */}
            <span className="link-text">Stocks</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/aliens" className="nav-link">
            <FaCity /> {/* Icon for Real Estate */}
            <span className="link-text">Real Estate</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/space" className="nav-link">
            <FaDollarSign /> {/* Icon for Currency */}
            <span className="link-text">Currency</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/shuttle" className="nav-link">
            <FaEllipsisH /> {/* Icon for More */}
            <span className="link-text">More</span>
          </NavLink>
        </li>

        <li className="nav-item">
          {token ? (
            <a onClick={handleLogout} className="nav-link">
              <GrLogout /> {/* Icon for Log Out */}
              <span className="link-text">Log Out</span>
            </a>
          ) : (
            <NavLink to="/login" className="nav-link">
              <FaSignInAlt /> {/* Icon for Log In */}
              <span className="link-text">Log In</span>
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}
