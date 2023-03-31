
import { FaTwitter } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { FaBookmark } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CgMoreO } from "react-icons/cg";
import { AiOutlineMore } from "react-icons/ai";
import {RxTwitterLogo} from "react-icons/rx";
import {FiSearch} from 'react-icons/fi';
import { NavLink, Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

import Author from "./author.jpg";

import './menubar.scss';
const MenuBar = () => {
  return (
    <div className="menu">
        <div className="menubar pt-1 pb-1">
            <NavLink to="/home" className="menubar-twitter">
                <FaTwitter/>
            </NavLink>
            <ul className="menubar__list">
                <li className="menu__list--link">
                    <NavLink to="/home">
                        <FaHome/>
                        <span className="ms-2">Home</span>
                    </NavLink>
                </li>
                <li className="menu__list--link d-flex d-xl-none">
                    <NavLink to="/explore">
                        <FiSearch/>
                        <span className="ms-2">Search</span>
                    </NavLink>
                </li>
                <li className="menu__list--link d-none d-xl-flex">
                    <NavLink to="/explore">
                        <FaHashtag/>
                        <span className="ms-2">Explore</span>
                    </NavLink>
                </li>
                <li className="menu__list--link">
                    <NavLink to="notifications">
                        <FaBell/>
                        <span className="ms-2">Notifications</span>
                    </NavLink>
                </li>
                <li className="menu__list--link">
                    <NavLink to="/messages">
                        <AiOutlineMessage/>
                        <span className="ms-2">Messages</span>
                    </NavLink>
                </li>
                <li className="menu__list--link">
                    <NavLink to="/bookmarks">
                        <FaBookmark/>
                        <span className="ms-2">Bookmarks</span>
                    </NavLink>
                </li>
                <li className="menu__list--link">
                    <NavLink to="/lists">
                        <FaRegListAlt/>
                        <span className="ms-2">Lists</span>
                    </NavLink>
                </li>
                <li className="menu__list--link">
                    <NavLink to="/profile">
                        <CgProfile/>
                        <span className="ms-2">Profile</span>
                    </NavLink>
                </li>
                <li className="menu__list--link">
                    <NavLink to="/more">
                        <CgMoreO/>
                        <span className="ms-2">More</span>
                    </NavLink>
                </li>
            </ul>
            <a className="menubar__button mb-auto" href="https://en.wikipedia.org/wiki/Kunu">Tweet</a>
            <a className="menubar__tweet2 mb-auto" href="https://en.wikipedia.org/wiki/Kunu"><RxTwitterLogo/></a>
            <div className="menubar__author mt-5 align-items-center justify-content-xl-between justify-content-center ">
                <img src={Author} alt="myphoto" />
                <div className="menubar__author--info me-auto d-none d-xl-flex ms-2">
                    <h4>Mardon1dev</h4>
                    <span className="d-flex gap-2">
                        <Link to="https://www.linkedin.com/in/mardonbek-dusbekov/" target="_blank">
                            <FaLinkedin/>
                        </Link>
                        <Link to="https://twitter.com/Mardon1dev" target="_blank">
                            <FaTwitter/>
                        </Link>
                        </span>
                </div>
                <AiOutlineMore className="threedot d-none d-xl-flex"/>
            </div>
        </div>
    </div>
  )
}

export default MenuBar;