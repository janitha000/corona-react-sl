import React, { Component, createContext, useContext, useState, useEffect } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';

const DEFAULT_REDIRECT_CALLBACK = () =>
    window.history.replaceState({}, document.title, window.location.pathname);

export const Auth0Context = createContext();
export const useAuth0 = () => useContext(Auth0Context);

export const Auth0Provider = ({ children, onRedirectCallback = DEFAULT_REDIRECT_CALLBACK, ...initOptions }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState()
    const [auth0Client, setAuth0Client] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [popupOpen, setPopupOpen] = useState(false);


    useEffect(() => {
        const initAuth0 = async () => {
            const initOptions = {
                domain: "janitha000.auth0.com",
                client_id: "",
                audience : "http://localhost:3001",
                redirect_uri: window.location.origin
            }
            try{
                const auth0ClientHook = await createAuth0Client(initOptions);
                setAuth0Client(auth0ClientHook);
    
                if (window.location.search.includes("code=") &&
                    window.location.search.includes("state=")) {
                    const { appState } = await auth0ClientHook.handleRedirectCallback();
                    onRedirectCallback(appState);
                }
    
                const isAuthenticated = await auth0ClientHook.isAuthenticated();
                setIsAuthenticated(isAuthenticated);
    
                if (isAuthenticated) {
                    const user = await auth0ClientHook.getUser();
                    setUser(user);
                }
    
                setIsLoading(false);
            }catch(err){
                console.error(err);
            }
            
        }

        initAuth0();

    }, [])

    const loginWithPopup = async (params = {}) => {
        setPopupOpen(true);
        try {
            await auth0Client.loginWithPopup(params);
        } catch (error) {
            console.error(error);
        } finally {
            setPopupOpen(false);
        }
        const user = await auth0Client.getUser();
        setUser(user);
        setIsAuthenticated(true);
    };

    const handleRedirectCallback = async () => {
        setIsLoading(true);
        await auth0Client.handleRedirectCallback();
        const user = await auth0Client.getUser();
        setIsLoading(false);
        setIsAuthenticated(true);
        setUser(user);
    };

    return (
        <Auth0Context.Provider value={{
            isAuthenticated,
            user,
            isLoading,
            popupOpen,
            loginWithPopup,
            handleRedirectCallback,
            getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
            loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
            getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
            getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
            logout: (...p) => auth0Client.logout(...p)
        }}>
            {children}
        </Auth0Context.Provider>
    );

}

