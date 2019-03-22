import React, { Component } from 'react';
import authService from '../../services/authService';
import ErrorsList from '../Errors/ErrorsList';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        authService.register(this.state)
            .then(data => data)
            .catch(error => this.setState({errors: error.response.data}));
    }

    render() {
        return (
            <div>
                <ErrorsList errors={this.state.errors} />
                <form onSubmit={this.onSubmit}>
                    <label>Email</label>
                    <input
                        id="email"
                        onChange={this.onChange}
                        type="text" 
                        className="form-control"
                        value={this.state.email} />
                    <label>Username</label>
                    <input 
                        id="username"
                        onChange={this.onChange}
                        type="text" 
                        className="form-control"
                        value={this.state.username} />
                    <label>Password</label>
                    <input 
                        id="password"
                        onChange={this.onChange}
                        type="password" 
                        className="form-control"
                        value={this.state.password} />
                    <br />
                    <input type="submit" className="btn btn-success" />
                </form>
            </div>
        );
    }
}

export default Register;
