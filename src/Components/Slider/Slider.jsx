import React, {Component} from 'react';
import slider from "./Slider.module.css"
import {Carousel, CarouselItem, Container} from "react-bootstrap";
import img1 from "../Img/wp/1.png"
import img2 from "../Img/wp/2.png"
import img3 from "../Img/wp/3.png"

class Slider extends Component {
    render() {
        return (
            <Container>
                <Carousel className={slider.sliderBlock}>
                    <CarouselItem>
                        <img className={"d-block"}
                             src={img1}
                             alt={"photo"}/>
                        <Carousel.Caption>
                            <h3>textTitle</h3>
                            <p>"kjdkjwdhdwkvdwv wkfjwqbkdnv"</p>
                        </Carousel.Caption>
                    </CarouselItem>
                    <CarouselItem>
                        <img className={"d-block"}
                             src={img2}
                             alt={"photo"}/>
                        <Carousel.Caption>
                            <h3>textTitle</h3>
                            <p>"kjdkjwdhdwkvdwv wkfjwqbkdnv"</p>
                        </Carousel.Caption>
                    </CarouselItem>
                    <CarouselItem>
                        <img className={"d-block"}
                             src={img3}
                             alt={"photo"}/>
                        <Carousel.Caption>
                            <h3>textTitle</h3>
                            <p>"kjdkjwdhdwkvdwv wkfjwqbkdnv"</p>
                        </Carousel.Caption>
                    </CarouselItem>
                </Carousel>
            </Container>
        );
    }
}

export default Slider;