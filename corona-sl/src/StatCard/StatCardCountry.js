import React, { useEffect, useState } from 'react'
import StatCard from '../StatCard/StatCard'

function StatCardCountry({ data, country })  {
    const [statData, setStatData] = useState({});

    useEffect(() => {
        console.log(data)
        // setStatData(data[0])
        data.forEach(stat => {
            if (stat.country === country) {
                setStatData(stat)
            }
        });
    }, [data])



    return (
        <div className="row">
            <StatCard title="New Cases" number={data[0].todayCases} />
            <StatCard title="Total Cases" number={statData.cases} />
            <StatCard title="Deaths" number={statData.deaths} />
            <StatCard title="Recovered" number={statData.recovered} />
            <StatCard title="Active" number={statData.active} />
            <StatCard title="Critical" number={statData.critical} />
        </div>)
}

export default StatCardCountry