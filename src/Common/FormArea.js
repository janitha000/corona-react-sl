import React, { useEffect } from 'react';
import { Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';

const FormArea = ({ onChangeParent}) => {

    // useEffect(() => {
    //     console.log('rendered')
    // },[])

    return (
        < Form.Group controlId="exampleForm.ControlTextarea1" >
            <Form.Control as="textarea" rows="3" onChange={e => onChangeParent(e.target.value)}/>
        </Form.Group >
    )
}

export default FormArea;