import React, { Component } from 'react';
import Error from './Error';

class ErrorsList extends Component {
    render() {
        const errors = [];
        for (var key in this.props.errors) {
            errors.push(<Error key={key} field={key} descriptions={this.props.errors[key]}/>)
        }

        return (
            <div>
                { errors.length > 0 ?
                    <div className="alert alert-danger">
                        {errors}
                    </div>
                    :
                    ""
                }
            </div>
        );
    }
}

export default ErrorsList;
