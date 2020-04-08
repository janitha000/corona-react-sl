import React, { Fragment } from 'react'
import { useAuth0 } from '../Contexts/auth0-context copy'
import Loading from '../Common/Loading'


const Profile = () => {
    const { user, isLoading } = useAuth0();

    if (!user || isLoading) {
        return (<Loading />)
    }

    return (
        <Fragment>
            <img src={user.picture} alt="Profile" />

            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <code>{JSON.stringify(user, null, 2)}</code>
        </Fragment>
    )

}

export default Profile;
