import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fp from './FirePrevention.module.css'
import one from '../../Image/one.jpg';
import two from '../../Image/two.jpg';
import three from '../../Image/three.jpg';
import four from '../../Image/four.jpg';
import five from '../../Image/five.jpg';
import six from '../../Image/six.jpg';
import {UpcomingEvents} from '../Home/Home';







const FirePrevention = () => {
    return (
        <Fragment>
            <div>
                <Header />
                <CausesOfFire />
                <FirepreventionEvents />
            </div>
        </Fragment>
    )
}

const Header = () => {
    return (
        <Fragment>
            <div className={fp.headerimg}>
                <Container className={fp.headerDetails} style={{ margin: '5em 7em' }}>
                    <p style={{ fontSize: '.9rem', fontWeight: '400' }}>SAFETY TIPS</p>
                    <h2 style={{ fontWeight: '600', fontSize: '4rem', marginBottom: '0.5em' }}>Fire Prevention Guidance</h2>
                    <p style={{ fontSize: '1.2rem', fontWeight: '500' }}>Firefighters are essential to the safety and security of our local communities</p>
                </Container>
            </div>
        </Fragment>
    )
}





const CausesOfFire = () => {
    return (
        <Fragment>
            <Container style={{marginTop: '8em'}}>
                <h3 className={fp.Heading}>STERN Fire-Emergency and Rescue advises us all to follow the following safety measures mentioned by the Nigerian Fire Service & Administration. These simple actions will reduce the chance of a fire igniting in your home.</h3>
                <FireCauses />
            </Container>
        </Fragment>
    )
}

const FireCauses = () => {
    return (
        <Fragment>
            <div className={fp.DetailsWrapper}>
                <div className={fp.ImgContainer}>
                    <img src={one} alt='Bush burning' width='100%'></img>
                    <h2 className={fp.imgHeading}>Prevention of Fires caused by heating</h2>
                    <p className={fp.moreInfo}><Link to='/'>Read more</Link></p>
                </div>
                <div className={fp.ImgContainer}>
                    <img src={two} alt='Bush burning' width='100%'></img>
                    <h2 className={fp.imgHeading}>Prevention of Fires caused by cooking</h2>
                    <p className={fp.moreInfo}> <Link to='/'>Read more...</Link></p>
                </div>
                <div className={fp.ImgContainer}>
                    <img src={three} alt='Bush burning' width='100%'></img>
                    <h2 className={fp.imgHeading}>Prevention of Fires caused by candles</h2>
                    <p className={fp.moreInfo}><Link to='/'>Read more...</Link></p>
                </div>
                <div className={fp.ImgContainer}>
                    <img src={four} alt='Bush burning' width='100%'></img>
                    <h2 className={fp.imgHeading}>Prevention of Fires caused by smoking</h2>
                    <p className={fp.moreInfo}><Link to='/'>Read more...</Link></p>
                </div>
                <div className={fp.ImgContainer}>
                    <img src={five} alt='Bush burning' width='100%'></img>
                    <h2 className={fp.imgHeading}>Prevention of Fires caused by heating</h2>
                    <p className={fp.moreInfo}><Link to='/'>Read more...</Link></p>
                </div>
                <div className={fp.ImgContainer}>
                    <img src={six} alt='Bush burning' width='100%'></img>
                    <h2 className={fp.imgHeading}>Prevention of Fires caused by heating</h2>
                    <p className={fp.moreInfo}><Link to='/'>Read more...</Link></p>
                </div>
            </div>
        </Fragment>
    )
}

const FirepreventionEvents = () => {
    return (
        <Fragment>
            <div>
                <UpcomingEvents />
            </div>
        </Fragment>
    )
}

export default FirePrevention