import React from 'react'

const StartBtn = ({ onClick, text }) => {
    return (
        <>
            <button onClick={onClick}>
                {text}
            </button>
        </>
    )
}

export default StartBtn
