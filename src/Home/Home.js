import React, { useEffect, useState, Fragment } from 'react'
import * as Constants from '../Util/Constants'
import ReactLoading from 'react-loading'
import { Card, Container, Row, Col } from 'react-bootstrap';

import StatCardGlobal from '../StatCard/StatCardGlobal'
import StatCardCountry from '../StatCard/StatCardCountry'
import StatCardHospital from '../StatCard/StatCardHospital'
import Loading from 'react-loading';


const Home = () => {
    const [statData, setStatData] = useState({});
    const [statDataAllSum, setstatDataAllSum] = useState({});
    const [statDataCountires, setstatDataCountries] = useState([{}]);
    const [statLocal, setStatLocal] = useState({});
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const promises = Promise.all([
            fetch(Constants.STAT_URL_SL),
            fetch(Constants.STAT_UTL_ALL_SUMMARY),
            fetch(Constants.STAT_URL_COUNTRIES)
        ])
            .then(([res1, res2, res3]) => {
                return Promise.all([res1.json(), res2.json(), res3.json()])
                    .then(([res1, res2, res3]) => {
                        setStatData(res1.data);
                        setstatDataAllSum(res2);
                        setstatDataCountries(res3);

                    })

            })

        // fetch(Constants.STAT_URL_SL)
        //     .then(response => response.json())
        //     .then(response => setStatData(response.data))

        // fetch(Constants.STAT_UTL_ALL_SUMMARY)
        //     .then(res => res.json())
        //     .then(res => setstatDataAllSum(res))

        // fetch(Constants.STAT_URL_COUNTRIES)
        //     .then(res => res.json())
        //     .then(res => setstatDataCountries(res))

    }, [])

    useEffect(() => {
        getLocalData(statDataCountires);
    }, [statDataCountires])

    useEffect(() => {
        if (statLocal.country) {
            setIsLoaded(true)
        }
    }, [statLocal])

    const getLocalData = (data) => {
        data.forEach(stat => {
            if (stat.country === 'Sri Lanka') {
                setStatLocal(stat)
            }
        });
    }

    const HomeDom = () => {
        let homeDome = isLoaded ? <Fragment>
            <div style={{ marginLeft: "125px", marginRight: "125px" }}>
                <h2><p>Local Status</p></h2>
                <StatCardCountry countryData={statLocal} />
            </div>
            <div style={{ marginLeft: "125px", marginRight: "125px" }}>
                <h2><p>Global Status</p></h2>
                <StatCardGlobal statDataAllSum={statDataAllSum} />

            </div>
            <div style={{ marginLeft: "125px", marginRight: "125px" }}>
                <StatCardHospital hospitalData={statData.hospital_data} />
            </div>
        </Fragment>
            :
            <div style={{ position: 'absolute', top: '50%', left: '50%', marginRight: '-50%', transform: 'translate(-50%, -50%' }}><Loading /></div>

        return (homeDome)
    }

    const Loading = () => {
        return (
            <ReactLoading type='spinningBubbles' height={100} width={100} color="#596365" />
        )
    }

    return (
        <HomeDom />
    )
}

export default Home;