import React, { useEffect, useContext, useState } from 'react'
import StatCardCountry from '../StatCard/StatCardCountry'

import { store } from '../Store/store'

const HomeSearchCountry = ({ searchCountryData }) => {
    useEffect(() => {
        console.log(searchCountryData)
    }, [searchCountryData])

    const SearchCountries = () => {
        let countryCards = [];
        searchCountryData.forEach(element => {
            countryCards.push(<div style={{ marginLeft: "125px", marginRight: "125px" }}><h3>{element.country}</h3><StatCardCountry countryData={element} /></div>)
        });

        return (countryCards)

    }

    return (
        <SearchCountries />
    )
}

export default HomeSearchCountry