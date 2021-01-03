import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Nav() {
  return (
    <nav>
        <ul className="nav-links">
            <Link className="nav-style" to="/management">
                <li>Management</li>
            </Link>
            <Link className="nav-style" to="/technician">
                <li>Technician</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
