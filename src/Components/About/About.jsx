import React, { Fragment, Component } from 'react';
import { Welcome } from '../Home/Home';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ab from './About.module.css';
import Prof from '../../Image/proffessionalStandard.jpg'
import ButtonContainer from '../Button.js'

const About = () => {
    return (
        <Fragment>
            <Header />
            <Welcome />
            <ProffessionalStandards />
        </Fragment>
    )
}


const Header = () => {
    return (
        <Fragment>
            <div className={ab.headerimg}>
                <Container className={ab.headerDetails}>
                    <p style={{ fontSize: '.9rem', fontWeight: '400' }}>ABOUT US</p>
                    <h2 style={{ fontWeight: '600', fontSize: '4rem', marginBottom: '0.5em' }}>More information about our Fire-Emergency and Rescue</h2>
                    <p style={{ fontSize: '1.2rem', fontWeight: '500' }}>Firefighters are essential to the safety and security of our local communities</p>
                </Container>
            </div>
        </Fragment>
    )
}

const ProffessionalStandards = () => {
    return (
        <Fragment>
            <Container style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4em', marginBottom: '8em' }}>
                <Image />
                <Description />
            </Container>
        </Fragment>
    )
}

const Image = () => {
    return (
        <div className={ab.proffessionalImg}>
            <img src={Prof} alt='proffessional standards' width='100%'></img>
        </div>
    )
}

const Description = () => {
    return (
        <Fragment>
            <div className={ab.proffessionalDetails}>
                <div>
                    <h3>Proffessional Standards</h3>
                    <p>STERN provides the highest standard of emergency response. We are committed to excellence in every aspect of fire and life safety.</p>
                </div>
                <div className={ab.proffessionalLinks}>
                    <Link to='/'>Fire suppression, minimize losses</Link>
                    <Link to='/'>Emergency medical response</Link>
                    <Link to='/'>Fire protection and evacuation</Link>
                    <Link to='/'>High Angle Rescue</Link>
                    <Link to='/'>Hazardous materials response</Link>
                    <Link to='/'>Urban search and rescue</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default About