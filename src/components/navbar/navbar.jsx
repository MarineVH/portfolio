import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="w-full flex justify-center">
            <nav className="navbarContainer fixed w-5/6 flex bg-red-50 mt-3">
                <div className="w-1/3 md:w-1/2">
                    <Link to="/" className="navbarLeft font-['Quicksand']">MVHDev</Link>
                </div>
                <div className="flex w-2/3 md:w-1/2 bg-red-400">
                    <Link to="/" className="homePage w-1/3 flex justify-end">Home</Link>
                    <Link to="/projects" className="projectPage w-1/3 flex justify-end">Projects</Link>
                    <Link to="/contact" className="contactPage w-1/3 flex justify-end">Contact</Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;