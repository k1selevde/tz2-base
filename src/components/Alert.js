import React from 'react'

const Alert = ({errorText}) => {
    return (
        <div className="alert alert-danger" role="alert">
            {errorText}
        </div>
    )

}

export default Alert