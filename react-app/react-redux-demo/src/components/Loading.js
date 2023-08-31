import React from 'react'
import { Triangle } from 'react-loader-spinner';

function Loading({ loading }) {
    return (
        <Triangle
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{ justifyContent: 'center' }}
            wrapperClassName=""
            visible={loading}
        />
    )
}

export default Loading