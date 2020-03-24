import React from 'react';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';

const FormField = ({type, label, onChangeParent}) => {
    return (
        <FormGroup bsSize="large">
            <FormLabel>{label}</FormLabel>
            <FormControl
                autoFocus
                type={type}
                onChange={e => onChangeParent(e.target.value)}
            />
        </FormGroup>
    )
}

export default FormField;
