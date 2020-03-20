import React, { Fragment, useState, useContext } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import {store} from '../Store/store'


const Header = () => {
    const globalState = useContext(store);
    const {dispatch} = globalState;

    const handleOnChange = (e) => {
        console.log(e.target.value);
        dispatch({type : 'COUNTY_SEARCH', payload : {countrySearch : e.target.value}})
    }

    return (
        <Fragment>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">COVID-19</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search for countries" className="mr-sm-2" onChange = {handleOnChange} />
                        <Button variant="outline-success" >Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    )
}

export default Header;