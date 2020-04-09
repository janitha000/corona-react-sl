import React, { Fragment } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap';


const HeaderSearch = ({ handleOnChange }) => {

    return (
        <Fragment>
            <Form style={{ marginRight: "10px" }} inline>
                <FormControl type="text" placeholder="Search for countries" className="mr-sm-2" onChange={handleOnChange} />
                <Button variant="outline-success" >Search</Button>
            </Form>
        </Fragment>

    )
}

export default HeaderSearch;