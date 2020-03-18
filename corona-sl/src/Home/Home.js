import React, { useEffect, useState, Fragment } from 'react'
import * as Constants from '../Util/Constants'

import StatCard from '../StatCard/StatCard'

const Home = () => {
    const [statData, setStatData] = useState({});

    useEffect(() => {
        fetch(Constants.STAT_URL)
            .then(response => response.json())
            .then(response => setStatData(response.data))
    }, 1)
    return (
        <div>
            <div className="row">
                <StatCard title="Local New Cases" number={statData.local_new_cases} />
                <StatCard title="Local Total Cases" number={statData.local_total_cases} />
                <StatCard title="Local Deaths" number={statData.local_deaths} />
                <StatCard title="Local Recovered" number={statData.local_recovered} />
            </div>
            <div className="row">
            <StatCard title="Global New Cases" number={statData.global_new_cases} />
            <StatCard title="Global Total Cases" number={statData.global_total_cases} />
            <StatCard title="Global Deaths" number={statData.global_deaths} />
            <StatCard title="Global Recovered" number={statData.global_recovered} />

            </div>
        </div>


    )
}

export default Home;