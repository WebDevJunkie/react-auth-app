import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import RegisterForm from './RegisterForm';
import ErrorsList from '../Errors/ErrorsList';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false, errors: {} }

        this.isLoading = this.isLoading.bind(this);
        this.hasErrors = this.hasErrors.bind(this);
    }

    isLoading(isLoading) {
        this.setState({ loading: isLoading });
    }

    hasErrors(errors) {
        this.setState({ errors: errors });
    }

    render() {
        return (
            <div>
                <ErrorsList errors={this.state.errors} />
                {
                    this.state.loading ?
                    <Loader type="Puff" color="#00BFFF" height="100%" width="100%" />
                    :
                    <RegisterForm isLoading={this.isLoading} hasErrors={this.hasErrors} />
                }
            </div>
        );
    }
}

export default RegisterPage;
