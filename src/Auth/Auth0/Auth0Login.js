import React, { useContext } from 'react'
import { useAuth0 } from "../../Contexts/auth0-context copy";
import { Button } from 'react-bootstrap';


const Auth0Login = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            <Button onClick={ () => loginWithRedirect({})} variant="outline-success">Sign In</Button>
            <p>{useAuth0.isLoading}
            </p>
        </div>
    )
}


export default Auth0Login;