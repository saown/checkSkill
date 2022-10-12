import React from "react";
import {NavLink} from "react-router-dom";
import Logo from "../logo.png";
const Navbar = () => {
    return(
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/"
                   className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="h3 m-0"><img src={Logo} alt="Logo" width="30" height="30"/> Check Skill</span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><NavLink to="/" className="nav-link" end>Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/quizChart" className="nav-link">Quiz Chart</NavLink></li>
                    <li className="nav-item"><NavLink to="/blog" className="nav-link">Blog</NavLink></li>
                </ul>
            </header>
        </div>
    )
}

export default Navbar;