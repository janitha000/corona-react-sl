import React , {useEffect} from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'
import './Analytics.css'

import Sentiment from './Sentiment/Sentiment'
import EntityDetection from './Sentiment/EntityDetection'

const Analytics = () => {

    useEffect(() => {
        console.log('ANALYTICS rendered')
    },[])

    return (<div className="analytics">
        <Accordion defaultActiveKey="0">
            <Sentiment title="Sentiment Analysis" />
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Click me!
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    </div>

    )
}

export default Analytics;