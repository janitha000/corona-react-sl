import React, { Component, useEffect } from 'react'
import { Route } from "react-router-dom";
import { useAuth0 } from "../../Contexts/auth0-context copy";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
    const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

    useEffect(() => {
        if (isLoading || isAuthenticated) {
            return;
        }
        const fn = async () => {
            await loginWithRedirect({
                appState: { targetUrl: window.location.pathname }
            });
        };
        fn();
    }, [isLoading, isAuthenticated, loginWithRedirect, path]);

    const render = props =>
        isAuthenticated === true ? <Component {...props} /> : null;

    return <Route path={path} render={render} {...rest} />;
}

export default PrivateRoute;