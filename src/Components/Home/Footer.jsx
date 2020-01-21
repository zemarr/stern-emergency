import React, { Fragment } from 'react';
import logo from '../../Image/logo.png';
import hm from './Home.module.css';
import { Link } from 'react-router-dom';
// import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Fragment>
            <div className={hm.footer}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', color: '#fff' }}>
                    <FooterWelcome />
                    <RecentPosts />
                    <OurServices />
                    <ContactUs />
                </div>
            </div>
        </Fragment>
    )
}

const FooterWelcome = () => {
    return (
        <Fragment>
            <div className={hm.FooterLogo}>
                <Link to='/'><img src={logo} alt='logo' width='70px' height='70px' /></Link>
                <p>Welcome to the Official STERN Fire Emergency and Rescue website. We are providing high-quality fire and emergency medical services to our residents, businesses and visitors.</p>
            </div>
        </Fragment>
    )
}

const RecentPosts = () => {
    return (
        <Fragment>
            <div className={hm.FooterLogo} style={{paddingTop: '2.6em'}}>
                <div>
                    <h4 style={{fontSize: '1.3rem'}}>Recent Posts</h4>
                </div>
                <div>
                    <Link to="/" className={hm.navLinks}>Emergency Medical Services Tips</Link>
                    <p style={{fontSize: '0.9rem'}}>Nov 14, 2019</p>
                </div>
                <div>
                    <Link to="/" className={hm.navLinks}>A New Truck Has Arrived</Link>
                    <p style={{fontSize: '0.9rem'}}>Aug 25, 2019</p>
                </div>
            </div>
        </Fragment>
    )
}

const OurServices = () => {
    return (
        <Fragment>
            <div className={hm.FooterLogo} style={{paddingTop: '2.6em'}}>
                <div>
                    <h4 style={{fontSize: '1.3rem'}}>Our Services</h4>
                </div>
                <div style={{margin: '.5em 0'}} >
                    <Link to="/" className={hm.navLinks}>Fire Fighting</Link>
                </div>
                <div style={{margin: '.5em 0'}} >
                    <Link to="/" className={hm.navLinks}>Ambulance Services</Link>
                </div>
                <div style={{margin: '.5em 0'}} >
                    <Link to="/" className={hm.navLinks}>Rescue Services</Link>
                </div>
                <div style={{margin: '.5em 0'}} >
                    <Link to="/" className={hm.navLinks}>Community Safety</Link>
                </div>
            </div>
        </Fragment>
    )
}

const ContactUs = () => {
    return (
        <Fragment>
            <div className={hm.FooterLogo} style={{paddingTop: '2.6em'}}>
                <div>
                    <p>11559 Ventura Boulevard, Studio City, CA 91604</p>
                </div>
                <div>
                    <Link tel='+2348057731698' className={hm.navLinks} style={{color: 'red'}}>(805) 773-1698</Link>
                </div>
                <div>
                    <p>Info@demolink.org</p>
                </div>
            </div>
        </Fragment>
    )
}


export default Footer;