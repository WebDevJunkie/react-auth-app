import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import authService from '../../services/authService';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  email: '',  password: '' }

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
        authService.login(this.state)
            .then(data => {
                this.props.isLoading(false);
                this.props.history.push("/");
            })
            .catch(error => {
                this.props.isLoading(false);
                this.props.hasErrors({'Login' : 'Incorrect username or password'});
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
                { localStorage.getItem('user') ? <Redirect to="/" /> :  "" }
            </div>
        );
    }
}

export default withRouter(LoginForm);
