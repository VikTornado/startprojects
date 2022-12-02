import React from "react";
import {Container} from "react-bootstrap";
import AboutSecond from "./AboutSecond/AboutSecond";
import about from "./About.module.css"

const About = (props) => {
    console.log(props)
    let newBrand = props.car.car.map(names => <AboutSecond brand={names.brand}/>
    )
    let newYear = props.car.year.map(names => <AboutSecond brand={names.year}/>)
    return (
        <div>
            <Container>
                <h3 className={about.title}>Brand</h3>
                <div className={about.brandBlock}>
                    <div className={about.newBrand}>{newBrand}</div>
                    <div className={about.newYear}>{newYear}</div>
                </div>
            </Container>
        </div>
    )
}

export default About
