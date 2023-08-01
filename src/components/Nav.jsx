import igicon from "../assets/ig-icon.png";
import { FaHome, FaSearch, FaHeart } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
const Nav = ({ color }) => {
  return (
    <nav className={`${color ? "dark-mode-nav" : ""}`}>
      <div className={`${color ? "logo-dark" : "logo"}`}>
        <img src={`${color ? igicon : igicon}`} alt="logo"></img>
      </div>
      {/* <input type="text" className="search" placeholder="search"></input> */}
      <div className="nav-links">
        <div>
          <FaHome className={`${color ? "dark-icon" : ""} icon`} />
        </div>
        <div>
          <FaSearch className={`${color ? "dark-icon" : ""} icon`} />
        </div>
        <div>
          <FaHeart className={`${color ? "dark-icon" : ""} icon`} />
        </div>
        <div>
          <BsMessenger className={`${color ? "dark-icon" : ""} icon`} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
