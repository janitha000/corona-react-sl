import React from 'react'
import { Card, Nav, NavItem } from 'react-bootstrap';
import './StatCard.css';

function StatCard({ title, number }) {
    return (
        <Card style={{ width: '18rem' , marginLeft:'auto', marginRight : 'auto', marginBottom: '10px', marginTop: '10px'}}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className="local">
                    {number}
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default StatCard;