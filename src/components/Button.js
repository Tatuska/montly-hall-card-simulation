import React from 'react'

function Button({ value, reset }) {
    return (
        <div>
            <button type="button" className="btn btn-outline-primary btn-lg button "
                onClick={reset}>{value}</button>        </div>
    )
}
export default Button;
