import React, { Fragment, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useAuth0 } from '../Contexts/auth0-context copy'


const HeaderAuth = () => {
    const { isAuthenticated, loginWithRedirect, logout, user, isLoading } = useAuth0();
    const [userName, setUserName] = useState('')
    let body = <Fragment></Fragment>;

    useEffect(() => {
        
        if (isAuthenticated) {
            if (user) {
               setUserName(user.nickname);

            }
        }
        // initialise();
    }, [user])



    body = (isAuthenticated) ?
        <Fragment>
            <Link style={{ marginRight: "10px" }} to="/profile">{userName}</Link>
            <Button onClick={() => logout({})} variant="outline-success">Sign Out</Button>
        </Fragment>

        :
        <Button onClick={() => loginWithRedirect({})} variant="outline-success">Sign In</Button>




    return (body);
}

export default HeaderAuth