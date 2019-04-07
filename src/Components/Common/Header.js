import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import authService from '../../services/authService';

class Header extends Component {
    onLogout(e) {
        authService.logout();
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <Link to="/" className="navbar-brand mb-0 h1">Navbar</Link>
                {
                    localStorage.getItem('user') ?
                    <div>
                        <Link to="/" onClick={this.onLogout}>Logout</Link>|
                        <Link to="/user">User</Link>
                    </div>
                    :
                    <div>
                        <Link to="/register">Register</Link>|
                        <Link to="/login">Login</Link>
                    </div>
                }
            </nav>
        );
    }
}

export default withRouter(Header);
