import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Process from "./Process"
import Projects from "./Projects"
import Team from "./Team"
import Contact from "./Contact"


function NavBar() {
    return (
        <Router>
            <div className="max-width">
                <nav>
                    <div className="nav-logo">
                        <img src="./img/nav.svg" alt="" />
                    </div>

                    <ul className="nav-item">
                        <li><NavLink to='/' activeclassname='selected'>process</NavLink></li>
                        <li><NavLink to='/project' activeclassname='selected'>projects</NavLink></li>
                        <li><NavLink to='/team' activeclassname='selected'>team</NavLink></li>
                        <li><NavLink to='/contact' activeclassname='selected'>contact</NavLink></li>
                    </ul>
                </nav>
                
            </div>

            <Routes>
                <Route path="/" element={<Process />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>


    )
}
export default NavBar