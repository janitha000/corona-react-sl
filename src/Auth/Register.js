import React, { useState } from 'react';
import axios from 'axios'
import './Login.css'
import { Button } from 'react-bootstrap';
import FormField from '../Common/FormField'
import * as Constants from '../Util/Constants'



const Register = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleUserNameChange = (data) => {
        setUserName(data)
    }
    const handleFirstNameChange = (data) => {
        setFirstName(data);
    }

    const handleLastNameChange = (data) => {
        setLastName(data);
    }

    const handlePasswordChange = (data) => {
        setPassword(data);
    }

    const handleEmailChange = (data) => {
        setEmail(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(Constants.REGISTER_URL, {
            name: userName,
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password
        })
        .then(res => console.log(res));

    }

    const validateForm = () => { return true }


    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormField type="text" label='Email' onChangeParent={handleEmailChange} />
                <FormField type="text" label='User Name' onChangeParent={handleUserNameChange} />
                <FormField type="text" label='First Name' onChangeParent={handleFirstNameChange} />
                <FormField type="text" label='Last Name' onChangeParent={handleLastNameChange} />
                <FormField type="password" label='Password' onChangeParent={handlePasswordChange} />

                <Button block bsSize="large" disabled={!validateForm()} type="submit">
                    Register
          </Button>
            </form>
        </div>
    )
}

export default Register;