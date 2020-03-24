import React, { useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap';
import './Login.css'
import FormField from '../Common/FormField'
import *  as Constants from '../Util/Constants'


const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(Constants.LOGIN_URL, {
            userName: userName,
            password: password
        })
        .then(res => console.log(res));

    }

    const handleUserNameChange = (data) => {
        setUserName(data);
    }

    const handlePasswordChange = (data) => {
        setPassword(data);
    }

    const validateForm = () => { return true}

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormField type="text" label = 'User Name' onChangeParent={handleUserNameChange} />
                <FormField type="password" label = 'Password' onChangeParent={handlePasswordChange} />
                <p>New user? click here for Register</p>
                <Button block bsSize="large" disabled={!validateForm()} type="submit">
                    Login
          </Button>
            </form>
        </div>
    )
}

export default Login;