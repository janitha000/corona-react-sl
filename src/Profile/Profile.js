import React, { Fragment } from 'react'
import { useAuth0 } from '../Contexts/auth0-context copy'
import { Card, Nav, NavItem, Col } from 'react-bootstrap';

import Loading from '../Common/Loading'
import './Profile.css';


const Profile = () => {
    const { user, isLoading } = useAuth0();

    if (!user || isLoading) {
        return (<Loading />)
    }

    return (
        <Fragment >
            <Card style={{ width: '50rem', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', marginTop: '30px' }}>
                <Card.Body className="card-body">
                    <Card.Title style={{ fontSize: "4em" }}>Profile</Card.Title>
                    <img className="image" src={user.picture} alt="Profile" />
                    <Col md={6}>
                        <div className="flex">
                            <p>{user.nickname}</p>
                            <p>{user.email}</p>
                        </div>
                    </Col>
                
                </Card.Body>
            </Card>



        </Fragment>
    )

}

export default Profile;
