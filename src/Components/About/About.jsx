import React from "react";
import {Button, Container} from "react-bootstrap";
import about from "./About.module.css"

const About = (props) => {
    let newBrand = props.car.car.map(brandDate => <div className={about.item}>{brandDate.brand}</div>)
    let newYear = props.car.year.map(yearDate => <div className={about.item}>{yearDate.year}</div>)

    let textArea = React.createRef()
    let btnLink = () => {
        let newText = textArea.current.value
        alert(newText)
    }
    return (
        <div>
            <Container>
                <h3 className={about.title}>Brand</h3>
                <div className={about.brandBlock}>
                    <div className={about.items}>
                        {newBrand}
                    </div>
                    <div className={about.items}>
                        {newYear}
                    </div>
                </div>
                <div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                        <textarea ref={textArea} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <Button onClick={btnLink} id={"btn"} type="submit" className="btn btn-primary mb-2 ">Confirm
                        identity</Button>
                </div>
            </Container>
        </div>
    )
}

export default About
