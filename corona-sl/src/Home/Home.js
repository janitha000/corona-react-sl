import React, { useEffect, useState, Fragment } from 'react'
import * as Constants from '../Util/Constants'
import { Card, Container, Row, Col } from 'react-bootstrap';

import StatCardGlobal from '../StatCard/StatCardGlobal'
import StatCardCountry from '../StatCard/StatCardCountry'

const Home = () => {
    const [statData, setStatData] = useState({});
    const [statDataAllSum, setstatDataAllSum] = useState({});
    const [statDataCountires, setstatDataCountries] = useState([{}]);

    useEffect(() => {
        fetch(Constants.STAT_URL_SL)
            .then(response => response.json())
            .then(response => setStatData(response.data))

        fetch(Constants.STAT_UTL_ALL_SUMMARY)
            .then(res => res.json())
            .then(res => setstatDataAllSum(res))

        fetch(Constants.STAT_URL_COUNTRIES)
            .then(res => res.json())
            .then(res => setstatDataCountries(res))
    }, [])
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h2><p>Local Status</p></h2>
                    <StatCardCountry data={statDataCountires} country="Sri Lanka" />
                </Col>
                <Col md={6}>
                    <h2><p>Global Status</p></h2>
                    <StatCardGlobal statData={statData} statDataAllSum={statDataAllSum} />
                </Col>
            </Row>


        </Container>


    )
}

export default Home;