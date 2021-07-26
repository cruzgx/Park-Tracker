// Imports here
import React from "react";
import { Link } from "react-router-dom";
import "../styling/Home.css";
import { Carousel } from "react-bootstrap";

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

        {/* <div className="home_top_imgage" className="home_img_container">
          <h1 className="home_front_decript">Find your next park</h1>
          <img
            src="https://media.timeout.com/images/100469525/image.jpg"
            alt=""
          />
        </div> */}

        <h1 className="home_info_blurb">
          Find out all you need to know any of any of NYC's parks here
        </h1>
      </div>
    </div>
  );
};

export default Home;
