import React, { Fragment } from 'react';
import ev from './Events.module.css';

const EventSchedule = () => {
    return (
        <Fragment>
            <div className={ev.schedule}>
                <div className={ev.eventwrap}>
                    <h2>Event Schedule</h2>
                    <ScheduleCard
                        day='08'
                        month='Aug'
                        year='2019'
                        time='10:00AM - 11:00AM'
                        heading='Hazardous Materials'
                        category='Education Lesson For Children'
                        content='Dolor nunc vule putateulr ips dol consec.Donec semp ertet laciniate ultricie upi disse comete dolo lectus fgilla itollicil tua ludin dolor nec met quam accumsan. Dolore con dime netus lullam utlacus adipiscing ipsum molestie.'
                    />
                    <ScheduleCard
                        day='08'
                        month='Aug'
                        year='2019'
                        time='10:00AM - 11:00AM'
                        heading='Commissioning of New Emergency Gear'
                        category='Education Lesson For Children'
                        content='Dolor nunc vule putateulr ips dol consec.Donec semp ertet laciniate ultricie upi disse comete dolo lectus fgilla itollicil tua ludin dolor nec met quam accumsan. Dolore con dime netus lullam utlacus adipiscing ipsum molestie.'
                    />
                </div>
            </div>
        </Fragment>
    )
}



const ScheduleCard = (props) => {
    return (
        <Fragment>
            <div className={ev.eventmain}>
                <div className={ev.eventdate}>
                    <h3>{props.day}</h3>
                    <h3>{props.month}</h3>
                    <p>{props.year}</p>
                </div>
                <div className={ev.cardInfo}>
                    <p className={ev.time}>Time: {props.time}</p>
                    <h3>{props.heading}</h3>
                    <p className={ev.catgry}>{props.category}</p>
                    <p className={ev.contnt}>{props.content}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default EventSchedule;