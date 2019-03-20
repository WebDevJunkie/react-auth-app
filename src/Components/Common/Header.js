import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Navbar</span>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </nav>
        );
    }
}

export default Header;
