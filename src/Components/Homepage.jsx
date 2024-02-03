import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Homepage = () => {
  return (
    <div id="home">
      <Container fluid className="home_container">
        <Container>
          <Row>
            <Col md={5}>
              <h1 className="mb-4">
                Designing Awesome <br /> Brands & Experiences
              </h1>
              <p className="mb-4">
                Condimentum vitae sapien pellentesque habitant morbi tristique
                senectus et. Molestie nunc non blandit massa enim nec dui.
                Dignissim suspendisse in est ante in.
              </p>
              <Button className="home_button">Get Started</Button>
              <Button className="home_buttons mx-4">Learn More</Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Homepage;
