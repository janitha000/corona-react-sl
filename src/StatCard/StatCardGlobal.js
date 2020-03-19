import React from 'react'

import StatCard from '../StatCard/StatCard'

const StatCardGlobal = ({ statDataAllSum }) => {
    return (
        <div className="row">
            <StatCard title="Global Total Cases" number={statDataAllSum.cases} />
            <StatCard title="Global Deaths" number={statDataAllSum.deaths} />
            <StatCard title="Global Recovered" number={statDataAllSum.recovered} />

        </div>
    )
}

export default StatCardGlobal