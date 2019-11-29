import React, { Fragment } from 'react';
import Event1 from '../../Image/HomeEvents1.jpg'
import Event2 from '../../Image/HomeEvents2.jpg'
import { Container, Row } from 'react-bootstrap';
import hm from './Home.module.css';
import Button from '../Button.js'

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Welcome />
            <Work />
            <UpcomingEvents />
        </Fragment>
    )
}

const Work = () => {
    return (
        <Fragment>
            <div className={hm.workImg}>
                <div className={hm.workItems}>
                    <FireFighting />
                    <Ambulance />
                    <Rescue />
                    <CommunitySafety />
                </div>
            </div>
        </Fragment>
    )
}

const Header = () => {
    return (
        <Fragment>
            <div className={hm.headerimg}>
                <Container className={hm.headerDetails} style={{margin: '9em 4em'}}>
                    <p style={{ fontSize: '.9rem', fontWeight: '400' }}>SAVE PEOPLE'S LIVES</p>
                    <h2 style={{ fontWeight: '600', fontSize: '4rem', marginBottom: '0.5em' }}>STERN Fire-Emergency and Rescue</h2>
                    <p style={{ fontSize: '1.2rem', fontWeight: '500' }}>Firefighters are essential to the safety and security of our local communities</p>
                </Container>
            </div>
        </Fragment>
    )
}

export const Welcome = () => {
    return (
        <Fragment>
            <Container style={{ padding: '0 0 8em 0', borderBottom: 'solid .5px rgb(230, 230, 230)' }}>
                <Row>
                    <div className="col-md-5">
                        <h3 className={hm.welHeading}>
                            Welcome to the Official STERN Fire Rescue Department website
                    </h3>
                        <p className={hm.welHeadingIntro}>We committed ourselves to providing high quality fire and emergency medical services to our residents, businesses and visitors.</p>
                        <p className={hm.welInfo}>
                            STERN Fire-Emergency and Rescue is a full-service, high performance, emergency service agency. Our history of dedicated service dates back to the founding of our community more than 75 years ago. Responding to current emergencies and remaining proficient with the skills required to prevent and suppress fires, deliver emergency medical care and educate members of our community in health and safety issues requires constant awareness and training.
                    </p>
                    </div>
                    <div className="col-md-7">
                        <div className={hm.welcomeImg}></div>
                        <p className={hm.welImgSub}>"Firefighters are essential to the safety and security of our local communities. We owe it to these men and women to provide them with better training and equipment so they can do their jobs more effectively and safely."</p>
                    </div>
                </Row>
            </Container>
        </Fragment>
    )
}


const FireFighting = () => {
    return (
        <Fragment>
            <div className={hm.workBox}>
                <div className={hm.workIcon} style={{ backgroundImage: 'url(https://template68195.motopreview.com/mt-demo/68100/68195/mt-content/uploads/2018/07/mt-1526-home-icon-1.png)' }}></div>
                <h3 className={hm.workHeading}>Fire Fighting</h3>
                <p className={hm.workDetails}>Every fire department needs behavioral health services, but not all have them. Or, the service offered is not enough.</p>
            </div>
        </Fragment>
    )
}

const Ambulance = () => {
    return (
        <Fragment>
            <div className={hm.workBox}>
                <div className={hm.workIcon} style={{ backgroundImage: 'url(https://template68195.motopreview.com/mt-demo/68100/68195/mt-content/uploads/2018/07/mt-1526-home-icon-2.png)' }}></div>
                <h3 className={hm.workHeading}>Ambulance Services</h3>
                <p className={hm.workDetails}>Reliable fire equipment is vital to help you serve and protect our communities. That’s why we provide fire departments with one of the most essential tools for firefighting.</p>
            </div>
        </Fragment>
    )
}

const Rescue = () => {
    return (
        <Fragment>
            <div className={hm.workBox}>
                <div className={hm.workIcon} style={{ backgroundImage: 'url(https://template68195.motopreview.com/mt-demo/68100/68195/mt-content/uploads/2018/07/mt-1526-home-icon-3.png)' }}></div>
                <h3 className={hm.workHeading}>Rescue Services</h3>
                <p className={hm.workDetails}>This Act requires all fire authorities to make fire fighting purposes, which not only means putting out fires but also protecting life and property from fire.</p>
            </div>
        </Fragment>
    )
}

const CommunitySafety = () => {
    return (
        <Fragment>
            <div className={hm.workBox}>
                <div className={hm.workIcon} style={{ backgroundImage: 'url(https://template68195.motopreview.com/mt-demo/68100/68195/mt-content/uploads/2018/07/mt-1526-home-icon-4.png)' }}></div>
                <h3 className={hm.workHeading}>Community Safety</h3>
                <p className={hm.workDetails}>Accidental fires in the home are the main cause of fire deaths and we do all we can to reduce these fatalities, we work to educate people.</p>
            </div>
        </Fragment>
    )
}

const UpcomingEvents = () => {
    return (
        <Fragment>
            <div className={hm.events}>
                <h2 className={hm.eventsHeader}>Upcoming Events</h2>
                <Container className={hm.imageArrange1}>
                    <div className={hm.eventsImg}>
                        <img src={Event1} alt='event-one' width='100%'></img>
                        <h2 className={hm.eventHeader}>First Aid Classes</h2>
                        <p className={hm.eventDetails}>Education Lesson for Children<br />Thursday, January 14, 2020<br />Time: 10:00 AM - 11:00 AM</p>
                    </div>
                    <div className={hm.eventsImg}>
                        <img src={Event2} alt='event-two' width='100%'></img>
                        <h2 className={hm.eventHeader}>Dry Season Safety Tips</h2>
                        <p className={hm.eventDetails}>Education Program<br />Friday, October 18, 2020<br />Time: 6:00 PM - 7:00 PM</p>
                    </div>
                    <SeeEventButton />
                </Container>
            </div>
        </Fragment>
    )
}

const SeeEventButton = () => {
    return (
        <ButtonContainer />
    )
}

const ButtonContainer = (props) => {
    return (
        <div style={{  }}>
            <Button name='SEE ALL EVENTS' />
        </div>        
    )
}

export default Home