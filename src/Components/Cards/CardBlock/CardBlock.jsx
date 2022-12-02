import React, {Component} from 'react';
import cards from "../Cards.module.css";
import card from "./CardBlock.module.css"
import {Button, Card, CardImg} from "react-bootstrap";
import img1 from "../../Img/avto_cards/1.png";
import img2 from "../../Img/avto_cards/2.png";
import img3 from "../../Img/avto_cards/3.png";
import img4 from "../../Img/avto_cards/4.png";
import img5 from "../../Img/avto_cards/5.png";
import img6 from "../../Img/avto_cards/6.png";

class CardBlock extends Component {
    render() {
        return (
            <div className={card.cardBlock}>
                <div className={cards.block}>
                    <Card className={cards.card} style={{width: '18rem'}}>
                        <CardImg className={card.img} variant={"top"} src={img1}/>
                        <Card.Body>
                            <Card.Title>Devepolopers</Card.Title>
                            <Card.Text>{this.props.text}</Card.Text>
                            <Button onClick={"btnClick"}> Click me </Button>
                        </Card.Body>
                    </Card>
                    <Card className={cards.card} style={{width: '18rem'}}>
                        <CardImg className={card.img}  variant={"top"} src={img2}/>
                        <Card.Body>
                            <Card.Title>Devepolopers</Card.Title>
                            <Card.Text>ks.`sdjvb agw fjhgf aljwfg dkhwjdfh w</Card.Text>
                            <Button> Click me </Button>
                        </Card.Body>
                    </Card>
                    <Card className={cards.card} style={{width: '18rem'}}>
                        <CardImg className={card.img}  variant={"top"} src={img3}/>
                        <Card.Body>
                            <Card.Title>Devepolopers</Card.Title>
                            <Card.Text>ks.`sdjvb agw fjhgf aljwfg dkhwjdfh w</Card.Text>
                            <Button> Click me </Button>
                        </Card.Body>
                    </Card>
                    <Card className={cards.card} style={{width: '18rem'}}>
                        <CardImg className={card.img}  variant={"top"} src={img4}/>
                        <Card.Body>
                            <Card.Title>Devepolopers</Card.Title>
                            <Card.Text>ks.`sdjvb agw fjhgf aljwfg dkhwjdfh w</Card.Text>
                            <Button> Click me </Button>
                        </Card.Body>
                    </Card>
                    <Card className={cards.card} style={{width: '18rem'}}>
                        <CardImg className={card.img}  variant={"top"} src={img5}/>
                        <Card.Body>
                            <Card.Title>Devepolopers</Card.Title>
                            <Card.Text>ks.`sdjvb agw fjhgf aljwfg dkhwjdfh w</Card.Text>
                            <Button> Click me </Button>
                        </Card.Body>
                    </Card>
                    <Card className={cards.card} style={{width: '18rem'}}>
                        <CardImg className={card.img}  variant={"top"} src={img6}/>
                        <Card.Body>
                            <Card.Title>Devepolopers</Card.Title>
                            <Card.Text>ks.`sdjvb agw fjhgf aljwfg dkhwjdfh w</Card.Text>
                            <Button> Click me </Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }
}

export default CardBlock;