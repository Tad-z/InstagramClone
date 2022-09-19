import instagramLogo from "../assets/Instagram.png";
import { FaHome, FaSearch, FaVideo, FaHeart } from "react-icons/fa"
import { BsMessenger } from "react-icons/bs"
const Nav = ({color}) => {
  return (
    <nav className={`${color ? "dark-mode-nav" : ""}`}>
      <button className="logo">
        <img src={instagramLogo} alt="logo"></img>
      </button>
      <input type="text" className="search" placeholder="search"></input>
      <span className="nav-links">
        <button >
          {/* <i className="fas fa-home" /> */}
          <p ><FaHome className={`${color ? "dark-icon" : ""} icon`}  /></p>
        </button>
        <button>
        <p ><FaSearch className={`${color ? "dark-icon" : ""} icon`}  /></p>
        </button>
        <button>
        <p ><FaVideo className={`${color ? "dark-icon" : ""} icon`}  /></p>
        </button>
        <button>
        <p ><FaHeart className={`${color ? "dark-icon" : ""} icon`}  /></p>
        </button>
        <button>
        <p ><BsMessenger className={`${color ? "dark-icon" : ""} icon`} /></p>
        </button>
      </span>
    </nav>
  );
};

export default Nav;
