import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>Email</label>
                    <input type="text" className="form-control" />
                    <label>Username</label>
                    <input type="text" className="form-control" />
                    <label>Password</label>
                    <input type="password" className="form-control" />
                    <br />
                    <input type="submit" className="btn btn-success" />
                </form>
            </div>
        );
    }
}

export default Register;
