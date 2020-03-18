import React from 'react'

import StatCard from '../StatCard/StatCard'

const StatCardGlobal = ({statData, statDataAllSum}) => {
    return (
        <div className="row">
                <StatCard title="Global New Cases" number={statData.global_new_cases} />
                <StatCard title="Global Total Cases" number={statDataAllSum.cases} />
                <StatCard title="Global Deaths" number={statDataAllSum.deaths} />
                <StatCard title="Global Recovered" number={statDataAllSum.recovered} />

            </div>
    )
}

export default StatCardGlobal