import React from 'react'
import ReactLoading from 'react-loading'


const Loading = () => {
    const LoadingDiv = () => {
        return (
            <ReactLoading type='spinningBubbles' height={100} width={100} color="#596365" />
        )
    }

    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', marginRight: '-50%', transform: 'translate(-50%, -50%' }}><LoadingDiv /></div>
    )


}

export default Loading;