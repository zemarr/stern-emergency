import React, { Fragment } from 'react';
import logo from '../../Image/logo.png';
import hm from './Home.module.css';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Container } from 'react-bootstrap';

const Navbar = () => {
    return (
        <Fragment>
            <Container>
                <Nav style={{justifyContent: 'space-between', padding: '20px 10px'}}>
                    <Link to='/'><img src={logo} alt='logo' width='70px' height='70px' /></Link>
                    <NavLink to='/About' className={hm.navLinks}>ABOUT</NavLink>
                    <NavLink to='/FirePrevention' className={hm.navLinks}>FIRE PREVENTION</NavLink>
                    <NavLink to='/Events' className={hm.navLinks}>EVENTS</NavLink>
                    <NavLink to='/Contacts' className={hm.navLinks}>CONTACTS</NavLink>
                </Nav>
            </Container>
        </Fragment>
    )
}

// const Logo = (props) => {
    
//     return()
// }

export default Navbar