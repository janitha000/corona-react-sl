import React, { useEffect, useState, Fragment } from 'react'
import * as Constants from '../Util/Constants'
import { Card, Container, Row, Col } from 'react-bootstrap';

import StatCardGlobal from '../StatCard/StatCardGlobal'
import StatCardCountry from '../StatCard/StatCardCountry'
import StatCardHospital from '../StatCard/StatCardHospital'


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

        <Fragment>
            <div style={{ marginLeft: "125px", marginRight: "125px" }}>
                <h2><p>Local Status</p></h2>
                <StatCardCountry data={statDataCountires} country="Sri Lanka" />
            </div>
            <div style={{ marginLeft: "125px", marginRight: "125px" }}>
                <h2><p>Global Status</p></h2>
                <StatCardGlobal statDataAllSum={statDataAllSum} />

            </div>
            <div style={{ marginLeft: "125px", marginRight: "125px" }}>
                <StatCardHospital hospitalData={statData.hospital_data} />
            </div>
        </Fragment>






    )
}

export default Home;