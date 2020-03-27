import React, { useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap';
import './Login.css'
import FormField from '../Common/FormField'
import *  as Constants from '../Util/Constants'
import *  as Google from '../Util/GoogleConfig'



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

    const handleLoginGoogle = async () => {
        console.log('handleLoginGoogle' )

        const params = [
            `redirect_uri=${Google.REDIRECT_URI}`,
            `scope=${Google.SCOPE}`,
            `login_hint=janitha000@gmail.com`,
            `prompt=consent`,
            `state=google`
          ].join("&");

          try{
            const response = await fetch(`http://localhost:3001/auth/google?${params}`);
            const url = await response.text();
            window.location.assign(url);
          } catch (e) {
            console.error(e);
          }
          
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
                 <Button block bsSize="large" onClick={handleLoginGoogle}  >
                    Login with Google
                 </Button>
                 <Button block bsSize="large" >
                    Login with Facebook
                 </Button>
            </form>
            
        </div>
    )
}

export default Login;