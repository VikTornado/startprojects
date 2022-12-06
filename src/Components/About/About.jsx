import React from "react";
import { Button, Container } from "react-bootstrap";
import about from "./About.module.css";

const About = (props) => {
  let newBrand = props.car.car.map((brandDate) => (
    <div className={about.item}>{brandDate.brand}</div>
  ));
  let newYear = props.car.year.map((yearDate) => (
    <div className={about.item}>{yearDate.year}</div>
  ));
  let title = "Hello1";

  let textArea = React.createRef();
  let btnLink = () => {
    let newText = textArea.current.value;
    textArea.current.value = "";
    alert(newText);
  };
  onchange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  let onChangeHandler = () => {
    let oldTitle = title;
    let newTitle = oldTitle + " (change)";
    this.setState({
      title: newTitle,
    });
  };
  return (
    <div>
      <Container>
        <h3 className={about.title}>{title}</h3>
        <div className={about.brandBlock}>
          <div className={about.items}>{newBrand}</div>
          <div className={about.items}>{newYear}</div>
        </div>
        <div className={about.formGroup}>
          <div className={about.formBlock}>
            <textarea
              ref={textArea}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder={"text"}
            ></textarea>
            <Button
              onClick={btnLink}
              id={"btn"}
              type="submit"
              className="btn btn-primary mb-2 "
            >
              Confirm identity
            </Button>
            <Button onClick={onChangeHandler}>click12121</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
