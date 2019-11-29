import React, { Component } from 'react';
import hm from './Home/Home.module.css'

class Button extends Component {
    render() {
        return (
            <button className={hm.eventScheduleBtn}>{this.props.name}</button>
        )
    }
}

export default Button;