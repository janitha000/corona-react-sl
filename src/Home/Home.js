import React, { useEffect, useState, Fragment, useContext } from 'react'
import * as Constants from '../Util/Constants'

import StatCardGlobal from '../StatCard/StatCardGlobal'
import StatCardCountry from '../StatCard/StatCardCountry'
import StatCardHospital from '../StatCard/StatCardHospital'
import HomeHospitalTable from './HomeHospitalTable'
import HomeSearchCountry from '../Home/HomeSearchCountry'
import Loading from '../Common/Loading'
import { store } from '../Store/store'

const Home = () => {
    const [statData, setStatData] = useState({});
    const [statDataAllSum, setstatDataAllSum] = useState({});
    const [statDataCountires, setstatDataCountries] = useState([{}]);
    const [statLocal, setStatLocal] = useState({});
    const [isLoaded, setIsLoaded] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    const [searchCountryData, setSearchCountryData] = useState([{}])

    const { state } = useContext(store);

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

    }, [])

    useEffect(() => {
        getLocalData(statDataCountires);
        // dispatch({ type: 'COUNTRY_DATA_ADD', payload: { countryData: statDataCountires } })

    }, [statDataCountires])

    useEffect(() => {
        if (statLocal.country) {
            setIsLoaded(true)
        }
    }, [statLocal])

    useEffect(() => {
        if (state.countrySearch && state.countrySearch != "") {
            let countryData = []
            statDataCountires.forEach(stat => {
                let upperCaseCountry = stat.country.toUpperCase();
                if (upperCaseCountry.search(state.countrySearch.toUpperCase()) != -1) {
                    countryData.push(stat)
                }
            });
            setSearchCountryData(countryData);
            setIsSearch(true)
        }
        else {
            setIsSearch(false)
        }
    }, [state.countrySearch])

    const getLocalData = (data) => {
        data.forEach(stat => {
            if (stat.country === 'Sri Lanka') {
                setStatLocal(stat)
            }
        });
    }


    const HomeDom = () => {
        let homeDome = isLoaded ? <HomePageLoaded /> : <Loading />
        return (homeDome)
    }

    const HomePageLoaded = () => {

        let HomePage = <Fragment>
            <div style={{ marginLeft: "125px", marginRight: "125px" }}>
                <h2><p>Local Status</p></h2>
                <StatCardCountry countryData={statLocal} />
            </div>
            <div style={{ marginLeft: "125px", marginRight: "125px" }}>
                <h2><p>Global Status</p></h2>
                <StatCardGlobal statDataAllSum={statDataAllSum} />

            </div>
            <div style={{ marginLeft: "125px", marginRight: "125px" }}>
                <h2><p>Local Hospital Status</p></h2>

                {/* <StatCardHospital hospitalData={statData.hospital_data} /> */}
                <HomeHospitalTable hospitalData = {statData.hospital_data}/>
            </div>
        </Fragment>

        let HomePageSearch = <HomeSearchCountry searchCountryData={searchCountryData} />

        let HomePageLoaded = isSearch ? HomePageSearch : HomePage

        return (HomePageLoaded)
    }


    return (
        <HomeDom />
    )
}

export default Home;