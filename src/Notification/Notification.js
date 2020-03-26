import React, { useState, useEffect } from 'react'
import socketIOClient from 'socket.io-client'
import {Card, Button} from 'react-bootstrap'
import './Notification.css'

import Toastr from './Toastr'

const Notification = ({socket}) => {
    const [endpoint, setEndpoint] = useState('http://127.0.0.1:3001');
    const [connectionMessage, setConnectionMessage] = useState([]);
    const [toastr, setToastr] = useState('');

    

    useEffect(() => {
        console.log('Calling socket io with ')
        socket.on('ConnectonEvent', data => {
            setConnectionMessage(oldData => [ ...oldData, data]);
            console.log('Conneton event called ' + data)
            console.log(connectionMessage)
        })

        return function cleanup() {
            socket.disconnect();
          };
    },[])

    const showNotification = () => {
        console.log('called show notifications')
        //setToastr(<Toastr />)
    }
    
    const Messages = () => {
        let body = [];
        connectionMessage.forEach(msg => {
            body.push(<li>{msg}</li>)
        })

        return body;
    }

    return (
        <div>
            {/* <button onClick={showNotification}>Click to show notification</button> */}
            <div className="notification-card">
            <Card style={{ width: '50rem' }}>
                <Card.Body>
                    <Card.Text>
                        <Messages />
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>
            
        </div>
    )
}

export default Notification
