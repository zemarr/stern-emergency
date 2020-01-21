import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import ev from './Events.module.css';
import EventSchedule from './EventSchedule';






const Events = () => {
    return (
        <Fragment>
            <div>
                <Header />
                <EventSchedule />
            </div>
        </Fragment>
    )
}




const Header = () => {
    return (
        <Fragment>
            <div className={ev.headerimg}>
                <Container className={ev.headerDetails} style={{ margin: '5em 7em' }}>
                    <p style={{ fontSize: '.9rem', fontWeight: '400' }}>SAFETY TIPS</p>
                    <h2 style={{ fontWeight: '600', fontSize: '4rem', marginBottom: '0.5em' }}>Fire and Life Safety Events</h2>
                    <p style={{ fontSize: '1.2rem', fontWeight: '500' }}>Firefighters are essential to the safety and security of our local communities</p>
                </Container>
            </div>
        </Fragment>
    )
}


export default Events