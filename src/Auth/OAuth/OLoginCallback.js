import React, { useEffect, useContext } from 'react'
import {store} from '../../Store/store'

const OLoginCallback = ({ location }) => {
    const globalState = useContext(store);
    const {dispatch} = globalState

    const handleLogin = (accesstoken) => {
        dispatch({type : 'IS_AUTHENTICATED', payload : {isAuthenticated : true}})
        dispatch({type : 'ADD_ACCESS_TOKEN', payload : {accessToken : accesstoken}})
    }


    useEffect(() => {
        
        const code = (location.search.match(/code=([^&]+)/) || [])[1];
        // const accessToken = (location.hash.match(/access_token=([^&]+)/) || [])[1];
        //const state = (location.search.match(/state=([^&]+)/) || [])[1];
        console.log('Callback called ' );
        debugger

        handleLogin(code);


        // fetch(`http://localhost:3001/auth/google/login?code=${code}`, {
            
        // })
        //     .then(res => res.json())
        //     .then(res => console.log(res))
        //     .catch(console.error);

    }, [])

    return <p>
        {location.search}
    </p>;
}

export default OLoginCallback