import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  BsCameraFill,
  BsFillFilterCircleFill,
  BsFillLaptopFill,
  BsFillLayersFill,
  BsFillLightbulbFill,
  BsPieChartFill,
} from "react-icons/bs";

const Cards = () => {
  return (
    <div id="services">
      <Container fluid className="cards_container">
        <Container>
          <h4>We create a unique action plan for brands</h4>
          <p className="about_p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
            <br /> Eu tincidunt tortor aliquam nulla facilisi cras.
            <br />
          </p>
          <Row>
            <Col md={4}>
              <Card className="card-fluid mb-4">
                <span className="d-flex flex-row justify-content-center mb-1 mt-4">
                  <BsFillFilterCircleFill />
                </span>
                <Card.Body>
                  <Card.Title className="cards_title">UI/UX DESIGN</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <Button className="service_btn">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-fluid mb-4">
                <span className="d-flex flex-row justify-content-center mb-1 mt-4">
                  <BsFillLightbulbFill />
                </span>
                <Card.Body>
                  <Card.Title className="cards_title">BRANDING</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <Button className="service_btn">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-fluid mb-4">
                <span className="d-flex flex-row justify-content-center mb-1 mt-4">
                  <BsFillLayersFill />
                </span>
                <Card.Body>
                  <Card.Title className="cards_title">STRATEGY</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <Button className="service_btn">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Card className="card-fluid mb-4">
                <span className="d-flex flex-row justify-content-center mb-1 mt-4">
                  <BsFillLaptopFill />
                </span>
                <Card.Body>
                  <Card.Title className="cards_title">WEB DESIGN</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <Button className="service_btn">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-fluid mb-4">
                <span className="d-flex flex-row justify-content-center mb-1 mt-4">
                  <BsPieChartFill />
                </span>
                <Card.Body>
                  <Card.Title className="cards_title">ANALYTICS</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <Button className="service_btn">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-fluid mb-4">
                <span className="d-flex flex-row justify-content-center mb-1 mt-4">
                  <BsCameraFill />
                </span>
                <Card.Body>
                  <Card.Title className="cards_title">PHOTOGRAPHY</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <Button className="service_btn">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="service_bar">
        <Row>
          <Col md={7}>
            <img src="Images/men9.jpg" alt="" className="img-fluid mb-4" />
          </Col>
          <Col md={5}>
            <h6>Your success is our success</h6>
            <h4>
              Web design, marketing & SEO <br /> solutions that get results
            </h4>
            <div className="progressbar">
              <h5 className="bars mt-3">Web Design</h5>
              <ProgressBar variant="dark" now={95} className="bar" />
              <h5 className="bars mt-3">UI/UX Design</h5>
              <ProgressBar variant="dark" now={83} className="bar" />
              <h5 className="bars mt-3">Branding</h5>
              <ProgressBar variant="dark" now={70} className="bar" />
              <h5 className="bars mt-3">Web Development</h5>
              <ProgressBar variant="dark" now={90} className="bar" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cards;
