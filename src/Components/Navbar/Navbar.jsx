import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/computers">Computers</Link>
            <Link to="/hoc">HOC</Link>
            <Link to="/render">Render</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/counter">Counter</Link>
        </div>
    );
};

export default Navbar;