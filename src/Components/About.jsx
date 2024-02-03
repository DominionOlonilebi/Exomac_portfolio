import React from "react";
import { Button, Col, Container, ProgressBar, Row } from "react-bootstrap";

const About = () => {
  return (
    <div id="about">
      <Container className="about_container">
        <Row>
          <div className="about_div">
            <h4>We are a full-service creative agency</h4>
            <h6 className="about_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
              <br /> labore et dolore magna aliqua. Eu tincidunt tortor aliquam
              nulla facilisi cras.
              <br />
            </h6>
          </div>
          <Row className="about_div">
            <Col md={7}>
              <img src="Images/men8.jpg" alt="" className="img-fluid mb-5" />
            </Col>
            <Col md={5}>
              <h6>Everyday brings new challenges</h6>
              <h4>Creative agency focused on vision, product and people</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
                tincidunt tortor aliquam nulla facilisi cras. Sagittis purus sit
                amet volutpat. Molestie nunc non blandit massa enim. Nullam ac
                tortor vitae purus faucibus ornare suspendisse.
              </p>
              <Button className="about_btn mb-5">About Us</Button>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default About;
