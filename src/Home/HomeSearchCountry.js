import React, { useEffect, useContext } from 'react'
import StatCardCountry from '../StatCard/StatCardCountry'

import { store} from '../Store/store'

const HomeSearchCountry = () => {
    const {state} = useContext(store);

    const searchCountries = () => {
        console.log(state.countrySearch);
        let countryCards = [];

        // <StatCardCountry countryData={seachedCountries}  />

        return(<div>Search Country</div>)

    }

    return (
        <searchCountries />
    )
}

export default HomeSearchCountry