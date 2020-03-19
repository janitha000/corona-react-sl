import React, { useEffect } from 'react'
import StatCardCountry from '../StatCard/StatCardCountry'

const HomeSearchCountry = ({ seachedCountries }) => {

    return (
        <div>
            searchedCountries.forEach(country => {
                <StatCardCountry data={seachedCountries} country={country.country} />
            });
        </div>

    )
}

export default HomeSearchCountry