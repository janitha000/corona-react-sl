import React, { useState, useEffect } from 'react'
import socketIOClient from 'socket.io-client'

import Toastr from './Toastr'

const Notification = () => {
    const[endpoint, setEndpoint] = useState('http://127.0.0.1:3001');
    const[connectionMessage, setConnectionMessage] = useState('No Message');
    const[toastr, setToastr] = useState('');

    const socket = socketIOClient(endpoint);

    useEffect(() => {
        socket.on('ConnectonEvent', data =>  {
            setConnectionMessage(data);
            console.log('Conneton event called ' + data)
        }, [])
    })

    const showNotification = () => {
        console.log('called show notifications')
        //setToastr(<Toastr />)
    }


    return(
        <div>Notification still progress : User message - {connectionMessage}
         <button onClick={showNotification}>Click to show notification</button>
         {toastr}
        </div>
    )
}

export default Notification
