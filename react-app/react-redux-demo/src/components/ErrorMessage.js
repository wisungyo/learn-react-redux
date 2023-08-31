import React from 'react'

function ErrorMessage({ error }) {
    return (
        <div style={{ color: 'red' }}>{error}</div>
    )
}

export default ErrorMessage