import React from 'react'

const Audio = ({ sound }) => {
    return (
        <>
            <audio src={sound} autoPlay />
        </>
    )
}

export default Audio
