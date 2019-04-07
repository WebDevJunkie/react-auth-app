import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Common/HomePage';
import UserPage from './Users/UserPage';
import Register from './Authentication/Register';
import Login from './Authentication/Login';
import Header from './Common/Header';
import PrivateRoute from './Common/PrivateRoute';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <br />
                    <div className="container">
                        <Route exact path="/" component={HomePage} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <PrivateRoute path="/user" component={UserPage} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
