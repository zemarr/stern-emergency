import React, { Fragment } from 'react';
import hm from './Home/Home.module.css';
import { Link } from 'react-router-dom';


const Button = (props) => {
    return (
        <Fragment>
            <Link to={props.url}>
                <button className={hm.eventScheduleBtn}>{props.name}</button>
            </Link>
        </Fragment>
    )
}

export default Button;