import React, { useEffect, useState, Fragment } from 'react'
import StatCard from '../StatCard/StatCard'

const StatCardHospital = ({ hospitalData }) => {
    const [data, setData] = useState();

    useEffect(() => {
        setData(hospitalData);
    }, [])

    const HospitalCards = ({ data }) => {
        if (data == undefined || Object.entries(data).length === 0) {
            data = [{ cumulative_local: 0, cumulative_foreign: 0, treatment_local: 0, treatment_foreign: 0, hospital: { name: "", updated_at: "" } }]

        }
        console.log(data);
        let hospitalCards = [];
        data.forEach(element => {
            hospitalCards.push(<Hospital data={element} />)
        })

        let hospitalCardTotle = <Fragment><h2>Local Hospital Details</h2>{hospitalCards}</Fragment>
        return (hospitalCardTotle)
    }

    const Hospital = ({ data }) => {
        return (
            <Fragment>
                <h5>{data.hospital.name}</h5>
                <div className="row">
                    <StatCard title="Total Locals Admitted" number={data.cumulative_local} />
                    <StatCard title="Total Foreigners Admitted" number={data.cumulative_foreign} />
                    <StatCard title="New Locals Admitted" number={data.treatment_local} />
                    <StatCard title="New Foreigners Admitted" number={data.treatment_foreign} />
                </div>
                <p>Last Updated At {data.hospital.updated_at}</p>
            </Fragment>


        )
    }

    return (
        <HospitalCards data={hospitalData} />
    )
}



export default StatCardHospital