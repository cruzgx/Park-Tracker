// Imports here
import React from "react";
import { Link } from "react-router-dom";
import "../styling/Home.css";
import { Carousel } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Props can be passed to home component
const Home = () => {
  return (
    <div>
      <div className="home_container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.getyourguide.com/img/location/556ddd302d7c4.jpeg/88.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Battery Park</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/58/b7.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Central Park</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.nycgo.com/images/articles/9587/union-square-julienne-schaer-012__large.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Union Square Park</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Link to="/about">Click me to go to the About page</Link>
        <p className="text-center h1">Find out what our users have to say</p>
        <Container>
          <Row>
            <Col>
              <Image
                src="https://cdn.xxl.thumbs.canstockphoto.com/person-icon-symbol-illustration-design-eps-vector_csp33085187.jpg"
                roundedCircle
                img-fluid="true"
              />
            </Col>
            <Col>
              <Image
                src="https://cdn.xxl.thumbs.canstockphoto.com/person-icon-symbol-illustration-design-eps-vector_csp33085187.jpg"
                roundedCircle
                img-fluid="true"
              />
            </Col>
            <Col>
              <Image
                src="https://cdn.xxl.thumbs.canstockphoto.com/person-icon-symbol-illustration-design-eps-vector_csp33085187.jpg"
                roundedCircle
                float-right
                img-fluid="true"
              />
            </Col>
          </Row>
        </Container>
        <hr />
        <Container>
          <Row>
            <Col sm={8}><p>First featurette heading. <span>It’ll blow your mind.</span></p>
              <p>Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
            </Col>
            <Col sm={4}><Image src='https://via.placeholder.com/500' /></Col>
          </Row>
        </Container>
        <hr/>

        <Container>
          <Row>
            <Col sm={4}><Image src='https://via.placeholder.com/500' /></Col>
            <Col sm={8}><p>Oh yeah, it’s that good. See for yourself.<span>See for yourself.</span></p>
              <p>Another featurette? Of course. More placeholder content here to give you an idea of <br/>
                how this layout would work with some actual real-world content in place.</p>
            </Col>
          </Row>
        </Container>
        <hr/>

        <Container>
          <Row>
            <Col sm={8}><p>And lastly, this one. <span>Checkmate.</span></p>
              <p>And yes, this is the last block of representative placeholder content. Again, not really</p>
              <p>intended to be actually read, simply here to give you a better view of what this would</p>
              <p>look like with some actual content. Your content.</p>
            </Col>
            <Col sm={4}><Image src='https://via.placeholder.com/500' /></Col>
          </Row>
        </Container>
        <hr/>

        <Image
          src="https://loving-newyork.com/wp-content/uploads/2015/05/Dollarphotoclub_77267131-High-Line-1600x960.jpg"
          fluid
        />

      </div>
    </div>
  );
};

export default Home;
