import React from 'react';
import abSec from './AboutSecond.module.css'

const AboutSecond = (props) => {
    console.log(props)
    return (
        <div>
            <div className={abSec.brand}>{props.brand}</div>
            <div className={abSec.year}>{props.year}</div>
        </div>
    )
}

export default AboutSecond;