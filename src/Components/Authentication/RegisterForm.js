import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import authService from '../../services/authService';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', username: '', password: '' }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.hasErrors({});
        this.props.isLoading(true);
        authService.register(this.state)
            .then(data => {
                this.props.isLoading(false);
                this.props.history.push("/login");
            })
            .catch(error => {
                this.props.isLoading(false);
                this.props.hasErrors(error.response.data);
            });
    }

    render() {
        return (
            <div>
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

export default withRouter(RegisterForm);
