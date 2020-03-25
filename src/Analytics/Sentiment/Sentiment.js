import React, { useState, useEffect, useContext } from 'react'
import { Accordion, Card, Button, Col, Row } from 'react-bootstrap'

import FormArea from '../../Common/FormArea'
import * as Constants from '../../Util/Constants'
import Axios from 'axios';
import { store } from '../../Store/store'

// import SentimentInput from './SentimentInput'



function Sentiment({ title }) {
    const [sentiments, setSentiments] = useState({ "Neutral": 0, "Positive": 0, "Negative": 0, "Mixed": 0 });
    let textData = '';

    const { state } = useContext(store);

    useEffect(() => {
        console.log('SENTIMENT rendered')
    })

    const handleInputChange = (data) => {
        textData = data;
    }


    const SentimentInput = () => {
        return (
            <FormArea lable="Type text here" onChangeParent={handleInputChange} />
        )

    }

    const getSentiments = () => {
        Axios.post(Constants.SENTIMENT_URL, { "text": textData }).then(res => {
            console.log(res);
            setSentiments(res.data.SentimentScore)
        })
    }


    const SentimentBody = ({ value }) => {
        return (
            <div>
                <Row>
                    <Col md={6}>
                    <SentimentInput />
                    </Col>
                    <Col md={6}>
                        <Row>
                            <SentimentValues name="Neutral" value={sentiments.Neutral} />
                            <SentimentValues name="Positive" value={sentiments.Positive} />
                            <SentimentValues name="Negative" value={sentiments.Negative} />
                            <SentimentValues name="Mixed" value={sentiments.Mixed} />
                        </Row>
                    </Col>
                </Row>
                <Button onClick={getSentiments} >
                    Analyse
          </Button>

            </div>
        )
    }

    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" >
                    {title}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse >
                <Card.Body><SentimentBody value={textData} /></Card.Body>
            </Accordion.Collapse>
        </Card>

        
    )



}

const SentimentValues = ({ name, value }) => {
    return (
        <Col md={3}>
            <div className="flex">
                <p>{name}</p>
                <p>{value}</p>
            </div>
        </Col>
    )
}

export default Sentiment;