import React, { Fragment } from 'react'
import { useAuth0 } from '../Contexts/auth0-context copy'
import { Card, Nav, NavItem } from 'react-bootstrap';

import Loading from '../Common/Loading'
import './Profile.css';


const Profile = () => {
    const { user, isLoading } = useAuth0();

    if (!user || isLoading) {
        return (<Loading />)
    }

    return (
        <Fragment>
            <Card style={{ width: '50rem' , marginLeft:'auto', marginRight : 'auto', marginBottom: 'auto', marginTop: 'auto'}}>
            <Card.Body className="image">
                <Card.Title>Profile</Card.Title>
                <img   src={user.picture} alt="Profile" />
                <h2>{user.name}</h2>
            <p>{user.email}</p>
            <code>{JSON.stringify(user, null, 2)}</code>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>

           
            
        </Fragment>
    )

}

export default Profile;
