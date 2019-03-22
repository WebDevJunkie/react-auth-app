import React from 'react';

const Error = ({field, descriptions}) => {
    return (
        <div>
            <h3>{field}</h3>
            {descriptions}
        </div>
    )
}

export default Error;
