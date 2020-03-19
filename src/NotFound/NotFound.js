import React from 'react'
import { Jumbotron } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>
            <Jumbotron style={{ textAlign: 'center', background: 'white'}}>
                <h1>Page Not Found (404)</h1>
                
            </Jumbotron>
        </div>
    )
}

export default NotFound;