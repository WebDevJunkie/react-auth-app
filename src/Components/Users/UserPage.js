import React, { Component } from 'react';
import authService from '../../services/authService';

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', username: '' };
    }

    componentWillMount() {
        authService.user()
            .then(data => this.setState({ email: data.email, username: data.userName }))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <h1>User Page</h1>
                <div>
                    <p>{this.state.email}</p>
                    <p>{this.state.username}</p>
                </div>
            </div>
        );
    }
}

export default UserPage;
