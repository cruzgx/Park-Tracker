import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Parks = () => {
  return (
    <div>
      <div className="top_texy_parks">
        <p className="font-weight-light display-3 text-center">
          Find your next park
        </p>
        <p className="text-center">
          Finding new trails has never been easier now with just a single click
          you can find 100s trails for you to discover.
        </p>
        <div className="text-center">
          <Button variant="primary">See More</Button>{" "}
          <Button variant="secondary">Contact us</Button>
        </div>

        <p className="text-center small">
          {" "}
          <br />
          Add more bottom padding here
        </p>
        <hr />

        <Container>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://www.nycgo.com/images/neighborhoods/27/battery-park-malcolm-brown-29__large.jpg" />
                <Card.Body>
                  <Card.Title>The Battery</Card.Title>
                  <Card.Text>
                    A park located at the most bottom part of Manhattan.
                    Enjoy views of the water and the Statue of Liberty
                  </Card.Text>
                  <Button variant="primary"><Link to="/battery-park">Find out more</Link></Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://cms.prod.nypr.digital/images/48730/fill-661x496/" />
                <Card.Body>
                  <Card.Title>Inwood Hill Park</Card.Title>
                  <Card.Text>
                    This park lies on the norther tip of Manhattan.
                    Inwood Hill Park consists of mostly wooded, non-landscaped hills.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="http://eportfolios.macaulay.cuny.edu/theheights/files/2016/04/Fort_Washington_Park_Gallery5_CAPTION_Fort_Washington_Park.jpg" />
                <Card.Body>
                  <Card.Title>Fort Washington Park</Card.Title>
                  <Card.Text>
                    Located along the Hudson River, Fort Washington Park also offers 
                    spectacular views of the new Jersey Palisades and the George Washington Bridge
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://mommyp-prod.s3.amazonaws.com/styles/image620x420/s3/totall_kid_carousel6.jpg?itok=GckQUgpm" />
                <Card.Body>
                  <Card.Title>Riverbank State Park</Card.Title>
                  <Card.Text>
                  Inspired by urban rooftop designs in Japan, this 28-acre multi-level landscaped
                   recreational 
                   offers a wide variety of recreational, athletic and arts experiences for all ages, interests and abilities.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://pyxis.nymag.com/v1/imgs/137/03d/dfd7422a561e7a3f8ccddcfea839c075d5-washington-square-park.rhorizontal.w700.jpg" />
                <Card.Body>
                  <Card.Title>Washington Square Park</Card.Title>
                  <Card.Text>
                  Washington Square Park has served various roles for its community throughout the years, 
                  adapting to meet its needs. Well-known for its arch and its fountain, 
                  this park is a common meeting place.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://www.newyorkbyrail.com/wp-content/uploads/2017/12/Central-Park-New-York-City-New-York-By-Rail-1200x650.jpg" />
                <Card.Body>
                  <Card.Title>Central Park</Card.Title>
                  <Card.Text>
                    Central is the most visited urban park in the United States, 
                    with an estimated 42 million visitors annually as of 2016,
                    and is the most filmed location in the world.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/a/a6/New-York_-_Bryant_Park.jpg" />
                <Card.Body>
                  <Card.Title>Bryant Park</Card.Title>
                  <Card.Text>
                    Bryant Park is a 9.6-acre public park located Manhattan. 
                    Privately managed, it is located between Fifth Avenue and Avenue of the Americas and between 40th and 42nd 
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://untappedcities.com/wp-content/uploads/2015/03/Boathouse-Prospect-Park-Brooklyn-NYC.jpg" />
                <Card.Body>
                  <Card.Title>Prospect Park</Card.Title>
                  <Card.Text>
                      Prospect Park is an urban park in Brooklyn, New York City.
                     The park is situated between the neighborhoods of Park Slope, Prospect Heights, Prospect Lefferts Gardens, Flatbush, and Windsor Terrace
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://media.timeout.com/images/105683554/image.jpg" />
                <Card.Body>
                  <Card.Title>Brooklyn Bridge Park</Card.Title>
                  <Card.Text>
                    This park offers breathtaking views of Lower Manhattan’s panoramic skyline and the New York Harbor. 
                    Tourists and New Yorkers alike can be seen admiring the iconic cityscape across the East River while strolling along a continuous promenade of six diverse piers.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Parks;
