import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import cards from "./Cards.module.css"
import CardBlock from "./CardBlock/CardBlock";

class Cards extends Component {
    render() {
        let textCard = "ksdjbdkjvbdskvbsdvkj"
        return (
            <div className={cards.cards}>
                <Container className={cards.Container}>
                    <h2 className={cards.title}>Cards</h2>
                    <CardBlock text={textCard}/>
                </Container>
            </div>
        );
    }
}

export default Cards;