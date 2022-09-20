import instagramLogo from "../assets/Instagram.png";
import instagram2 from "../assets/instagram2.jpg"
import { FaHome, FaSearch, FaHeart } from "react-icons/fa"
import { BsMessenger } from "react-icons/bs"
const Nav = ({color}) => {
  return (
    <nav className={`${color ? "dark-mode-nav" : ""}`}>
      <button className={`${color ? "logo-dark" : "logo"}`}>
        <img src={`${color ? instagram2 : instagramLogo}`} alt="logo"></img>
      </button>
      {/* <input type="text" className="search" placeholder="search"></input> */}
      <span className="nav-links">
        <button >
          {/* <i className="fas fa-home" /> */}
          <p ><FaHome className={`${color ? "dark-icon" : ""} icon`}  /></p>
        </button>
        <button>
        <p ><FaSearch className={`${color ? "dark-icon" : ""} icon`}  /></p>
        </button>
        {/* <button>
        <p ><FaVideo className={`${color ? "dark-icon" : ""} icon`}  /></p>
        </button> */}
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
