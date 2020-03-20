import React, { Fragment } from 'react'
import { Table } from 'react-bootstrap'

const HomeHospitalTable = ({ hospitalData }) => {

    const TableData = ({hospitalData}) => {
        let tableRows = [];
        debugger
        hospitalData.forEach(data => {
            tableRows.push(<tr>
                <td>{data.hospital.name}</td>
                <td>{data.cumulative_local}</td>
                <td>{data.cumulative_foreign}</td>
                <td>{data.treatment_local}</td>
                <td>{data.treatment_foreign}</td>
            </tr>)
        });

        return (tableRows);
    }

    return (
        <Fragment>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Total Locals Admitted</th>
                        <th>Total Foreigners Admitted</th>
                        <th>New Local Admitted</th>
                        <th>New Foreigners Admitted</th>
                    </tr>
                </thead>
                <tbody>
                    <TableData hospitalData = {hospitalData}/>
                </tbody>
            </Table>
        </Fragment>
    )

}

export default HomeHospitalTable