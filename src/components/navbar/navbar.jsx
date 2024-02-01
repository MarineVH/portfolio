import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="w-full flex justify-center">
            <nav className="navbarContainer fixed w-5/6 flex mt-5">
                <div className="w-1/3 md:w-1/2">
                    <Link to="/" className="navbarLeft font-['Quicksand'] font-bold text-[#b76f8a]">MVHDev</Link>
                </div>
                <div className="flex w-2/3 md:w-1/2">
                    <NavLink to="/" currentPath={location.pathname} className="homePage">Home</NavLink>
                    <NavLink to="/projects" currentPath={location.pathname} className="projectPage">Projects</NavLink>
                    <NavLink to="/contact" currentPath={location.pathname} className="contactPage">Contact</NavLink>
                </div>
            </nav>
        </header>
    );
};

const NavLink = ({ to, currentPath, children }) => {
    const isActive = currentPath === to;
  
    return (
      <Link to={to} className={`mr-4 ${isActive ? 'font-bold text-[#b76f8a] underline w-1/3 flex justify-end' : 'text-[#2ca4b6] w-1/3 flex justify-end'}`}>
        {children}
      </Link>
    );
  };

export default Navbar;