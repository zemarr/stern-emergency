import React, { Fragment } from 'react';
import { Welcome } from '../Home/Home';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ab from './About.module.css';
import Prof from '../../Image/proffessionalStandard.jpg'
// import firefight from '../../Image/firefighting.png'
import Button from '../Button.js'








const About = () => {
    return (
        <Fragment>
            <Header />
            <Welcome />
            <ProffessionalStandards />
            <AllWhatWeDo />
            <TellUs />
        </Fragment>
    )
}


const Header = () => {
    return (
        <Fragment>
            <div className={ab.headerimg}>
                <Container className={ab.headerDetails} style={{ margin: '5em 7em' }}>
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






const AllWhatWeDo = () => {
    return (
        <Fragment>
            <div className={ab.allWhatWeDo}>
                <Services />
            </div>
        </Fragment>
    )
}

const Services = () => {
    return (
        <Fragment>
            <div style={{ padding: '8em 4em' }}>
                <p style={{ color: 'red', fontWeight: '700', fontSize: '.9rem', marginBottom: '.5em' }}>WHAT WE CAN OFFER</p>
                <h3 style={{ color: '#fff', fontSize: '1.9rem', fontWeight: '700', marginBottom: '2em' }}>Our Services</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <div className={ab.ServiceDisplays}>
                        <div className={ab.FireFightingImg}></div>
                        <h3>Fire Services</h3>
                    </div>
                    <div className={ab.ServiceDisplays}>
                        <div className={ab.AmbulanceImg}></div>
                        <h3>Ambulance Services</h3>
                    </div>
                    <div className={ab.ServiceDisplays}>
                        <div className={ab.RescueImg}></div>
                        <h3>Rescue Services</h3>
                    </div>
                    <div className={ab.ServiceDisplays}>
                        <div className={ab.CommunityImg}></div>
                        <h3>Community Safety</h3>
                    </div>
                    <div className={ab.ServiceDisplays}>
                        <div className={ab.SuppressionImg}></div>
                        <h3>Fire Suppression</h3>
                    </div>
                    <div className={ab.ServiceDisplays}>
                        <div className={ab.MedicalImg}></div>
                        <h3>Emergency Medical Services</h3>
                    </div>
                    <div className={ab.ServiceDisplays}>
                        <div className={ab.InvestigateImg}></div>
                        <h3>Fire Investigation</h3>
                    </div>
                    <div className={ab.ServiceDisplays}>
                        <div className={ab.TaskforceImg}></div>
                        <h3>Special Operations Task Force</h3>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                     name='DETAIL INFO'
                     url='/ourwork'
                     />
                </div>
            </div>
        </Fragment>
    )
}






const TellUs = () => {
    return (
        <Fragment>
            <div style={{backgroundColor: '#fff', display: 'flex', margin: '6em', justifyContent: 'space-between'}}>
                <p style={{ fontWeight: '700', fontSize: '2.3rem'}}>Tell us about what's happening in your area</p>
                <Button
                 name='REQUEST A CALLBACK'
                 url='/requestcall'
                 />
            </div>
        </Fragment>
    )
}


export default About