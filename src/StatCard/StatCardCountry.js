import React, { useEffect, useState } from 'react'
import StatCard from '../StatCard/StatCard'

function StatCardCountry({ countryData })  {
    const [statData, setStatData] = useState({});

    // useEffect(() => {
    //     data.forEach(stat => {
    //         if (stat.country === country) {
    //             setStatData(stat)
    //         }
    //     });
    // }, [data])



    return (
        <div className="row">
            <StatCard title="Total Cases" number={countryData.cases} />
            <StatCard title="Deaths" number={countryData.deaths} />
            <StatCard title="Recovered" number={countryData.recovered} />
            <StatCard title="Active" number={countryData.active} />
            <StatCard title="Critical" number={countryData.critical} />
        </div>)
}

export default StatCardCountry