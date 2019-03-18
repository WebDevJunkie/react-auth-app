import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Common/HomePage';
import Header from './Common/Header';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <div className="container">
                        <Route exact path="/" component={HomePage} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
