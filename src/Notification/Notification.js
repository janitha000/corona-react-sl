import React, { useState, useEffect } from 'react'
import socketIOClient from 'socket.io-client'

const Notification = () => {
    const[endpoint, setEndpoint] = useState('http://127.0.0.1:3001');
    const[connectionMessage, setConnectionMessage] = useState('No Message');

    useEffect(() => {
        const socket = socketIOClient(endpoint);
        socket.on('ConnectonEvent', data => setConnectionMessage(data) )
    })

    return(
        <div>Notification still progress : User message - {connectionMessage}</div>
    )
}

export default Notification
