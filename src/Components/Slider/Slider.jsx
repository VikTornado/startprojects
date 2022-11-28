import React, {Component} from 'react';
import slider from "./Slider.module.css"
import {Carousel, CarouselItem, Container} from "react-bootstrap";

class Slider extends Component {
    render() {
        let img = [
            {src: "/Users/viktorminin/react_projects/startprojects/startprojects/src/Components/Img/wp/1.png"},
            {src: "/Users/viktorminin/react_projects/startprojects/startprojects/src/Components/Img/wp/2.png"},
            {src: "/Users/viktorminin/react_projects/startprojects/startprojects/src/Components/Img/wp/3.png"},
            {src: "/Users/viktorminin/react_projects/startprojects/startprojects/src/Components/Img/wp/4.png"},
            {src: "/Users/viktorminin/react_projects/startprojects/startprojects/src/Components/Img/wp/5.png"},
        ]
        let newMap = img.map(newMap => newMap.src)
        console.log(newMap)
        return (
            <Container>
                <Carousel className={slider.sliderBlock}>
                    <CarouselItem>
                        <img className={"d-block"} src={newMap[4]} alt={"photo"}/>
                        <Carousel.Caption>
                            <h3>textTitle</h3>
                            <p>"kjdkjwdhdwkvdwv1"</p>
                        </Carousel.Caption>
                    </CarouselItem>
                    <CarouselItem>
                        <img className={"d-block"} src={newMap[1]} alt={"photo"}/>
                        <Carousel.Caption>
                            <h3>textTitle</h3>
                            <p>"kjdkjwdhdwkvdwv wkfjwqbkdnv"</p>
                        </Carousel.Caption>
                    </CarouselItem>
                    <CarouselItem>
                        <img className={"d-block"} src={newMap[2]} alt={"photo"}/>
                        <Carousel.Caption>
                            <h3>textTitle</h3>
                            <p>"kjdkjwdhdwkvdwv wekfjwqbvkdnv"</p>
                        </Carousel.Caption>
                    </CarouselItem>
                </Carousel>
            </Container>
        );
    }
}

export default Slider;