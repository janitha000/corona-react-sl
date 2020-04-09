import React, { Fragment, useState, useContext, useEffect } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import HeaderAuth from './HeaderAuth'
import HeaderSearch from './HeaderSearch'

import { store } from '../Store/store'

const Header = () => {
    const globalState = useContext(store);
    const { dispatch } = globalState;
    const { state } = useContext(store);
    
    const handleOnChange = (e) => {
        dispatch({ type: 'COUNTRY_SEARCH', payload: { countrySearch: e.target.value } })
    }

    return (
        <Fragment>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">COVID-19</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/home">
                            <Nav.Link >Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/analytics">
                            <Nav.Link >Analytics</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <HeaderSearch handleOnChange={handleOnChange}/>
                    <HeaderAuth />
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    )
}

export default Header;